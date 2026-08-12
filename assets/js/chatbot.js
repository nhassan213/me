/**
 * Free knowledge chatbot — no API keys, runs fully in the browser.
 */
(function () {
  "use strict";

  function normalize(text) {
    return String(text || "")
      .toLowerCase()
      .replace(/[^a-z0-9\s+#.-]/g, " ")
      .replace(/\s+/g, " ")
      .trim();
  }

  function scoreIntent(query, intent) {
    var q = normalize(query);
    var tokens = q.split(" ");
    var score = 0;
    intent.keywords.forEach(function (kw) {
      var k = normalize(kw);
      if (!k) return;
      if (q.indexOf(k) !== -1) score += k.length > 4 ? 3 : 2;
      tokens.forEach(function (t) {
        if (t.length > 2 && k.indexOf(t) !== -1) score += 1;
      });
    });
    return score;
  }

  function answer(query) {
    var kb = window.NAHID_KNOWLEDGE;
    if (!kb) {
      return { text: "Knowledge base is unavailable.", followUps: [] };
    }

    var best = null;
    var bestScore = 0;
    kb.intents.forEach(function (intent) {
      var s = scoreIntent(query, intent);
      if (s > bestScore) {
        bestScore = s;
        best = intent;
      }
    });

    if (!best || bestScore < 2) {
      return {
        text: kb.fallback,
        followUps: kb.starters.slice(0, 3)
      };
    }

    var followUps = kb.starters.filter(function (s) {
      return normalize(s).indexOf(normalize(best.id)) === -1;
    }).slice(0, 3);

    return { text: best.answer, followUps: followUps };
  }

  function el(tag, className, html) {
    var node = document.createElement(tag);
    if (className) node.className = className;
    if (html != null) node.innerHTML = html;
    return node;
  }

  function init() {
    var kb = window.NAHID_KNOWLEDGE;
    if (!kb) return;

    var root = el("div", "nahid-chat");
    root.innerHTML =
      '<button type="button" class="nahid-chat-toggle" aria-expanded="false" aria-controls="nahid-chat-panel" title="Ask about Nahid">' +
      '<i class="bx bx-bot"></i><span>Ask Nahid</span></button>' +
      '<div class="nahid-chat-panel" id="nahid-chat-panel" hidden>' +
      '<div class="nahid-chat-header">' +
      "<div><strong>Ask about Nahid</strong><small>Free on-site guide — no AI API</small></div>" +
      '<button type="button" class="nahid-chat-close" aria-label="Close chat"><i class="bx bx-x"></i></button>' +
      "</div>" +
      '<div class="nahid-chat-messages" role="log" aria-live="polite"></div>' +
      '<div class="nahid-chat-starters"></div>' +
      '<form class="nahid-chat-form">' +
      '<input type="text" name="q" autocomplete="off" placeholder="Ask about skills, projects, contact…" aria-label="Your question" />' +
      '<button type="submit" aria-label="Send"><i class="bx bx-send"></i></button>' +
      "</form></div>";

    document.body.appendChild(root);

    var toggle = root.querySelector(".nahid-chat-toggle");
    var panel = root.querySelector(".nahid-chat-panel");
    var closeBtn = root.querySelector(".nahid-chat-close");
    var messages = root.querySelector(".nahid-chat-messages");
    var starters = root.querySelector(".nahid-chat-starters");
    var form = root.querySelector(".nahid-chat-form");
    var input = form.querySelector('input[name="q"]');

    function openChat() {
      panel.hidden = false;
      toggle.setAttribute("aria-expanded", "true");
      root.classList.add("is-open");
      input.focus();
    }

    function closeChat() {
      panel.hidden = true;
      toggle.setAttribute("aria-expanded", "false");
      root.classList.remove("is-open");
    }

    function addBubble(text, who) {
      var bubble = el("div", "nahid-chat-bubble " + who);
      bubble.textContent = text;
      messages.appendChild(bubble);
      messages.scrollTop = messages.scrollHeight;
    }

    function renderStarters(list) {
      starters.innerHTML = "";
      (list || kb.starters).forEach(function (label) {
        var chip = el("button", "nahid-chat-chip");
        chip.type = "button";
        chip.textContent = label;
        chip.addEventListener("click", function () {
          ask(label);
        });
        starters.appendChild(chip);
      });
    }

    function ask(question) {
      var q = String(question || "").trim();
      if (!q) return;
      addBubble(q, "user");
      var result = answer(q);
      setTimeout(function () {
        addBubble(result.text, "bot");
        renderStarters(result.followUps.length ? result.followUps : kb.starters.slice(0, 3));
      }, 220);
    }

    toggle.addEventListener("click", function () {
      if (panel.hidden) openChat();
      else closeChat();
    });
    closeBtn.addEventListener("click", closeChat);

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var q = input.value;
      input.value = "";
      ask(q);
    });

    addBubble(
      "Hi — ask me anything about " + kb.profile.name + ": experience, engineering stack, projects, or how to get in touch.",
      "bot"
    );
    renderStarters(kb.starters);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
