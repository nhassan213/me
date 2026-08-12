/**
 * Free knowledge chatbot — no API keys, runs fully in the browser.
 * Answers from NAHID_KNOWLEDGE (profile, skills, full portfolio, contact).
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

  function tokensOf(text) {
    return normalize(text).split(" ").filter(function (t) {
      return t.length > 1;
    });
  }

  function escapeHtml(str) {
    return String(str || "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function formatProjectItem(p) {
    var name = escapeHtml(p.name);
    var blurb = escapeHtml(p.blurb);
    var stack = escapeHtml(p.stack);
    var title = p.url
      ? '<a class="nahid-chat-link" href="' + escapeHtml(p.url) + '" target="_blank" rel="noopener">' + name + "</a>"
      : "<strong>" + name + "</strong>";
    return (
      "<li>" +
      '<div class="nahid-chat-project-title">' + title + "</div>" +
      '<div class="nahid-chat-project-meta">' + blurb + "</div>" +
      '<div class="nahid-chat-project-stack">' + stack + "</div>" +
      "</li>"
    );
  }

  function listProjects(list, heading) {
    if (!list.length) {
      return {
        html: false,
        text: "I don't have projects tagged that way in the portfolio yet. Ask “What are your projects?” for the full list."
      };
    }
    var html =
      '<p class="nahid-chat-heading">' + escapeHtml(heading || "Here are matching projects:") + "</p>" +
      '<ul class="nahid-chat-list">' +
      list.map(formatProjectItem).join("") +
      "</ul>" +
      '<p class="nahid-chat-footnote">Want a closer look? Browse the <a class="nahid-chat-link" href="#portfolio">Portfolio</a> on this page — filter by type and open any project.</p>';
    return { html: true, text: html };
  }

  function formatNamedProject(p) {
    var name = escapeHtml(p.name);
    var blurb = escapeHtml(p.blurb);
    var stack = escapeHtml(p.stack);
    var tags = escapeHtml((p.tags || []).join(", "));
    var link = p.url
      ? ' <a class="nahid-chat-link" href="' + escapeHtml(p.url) + '" target="_blank" rel="noopener">Visit site</a>'
      : ' See <a class="nahid-chat-link" href="#portfolio">Portfolio</a> for details.';
    return {
      html: true,
      text:
        "<p><strong>" + name + "</strong> — " + blurb + "</p>" +
        "<p>Stack: " + stack + "." + link + "</p>" +
        (tags ? "<p>Tags: " + tags + ".</p>" : "")
    };
  }

  function projectsByTag(kb, tag) {
    return (kb.projects || []).filter(function (p) {
      return (p.tags || []).indexOf(tag) !== -1;
    });
  }

  function findProjectByName(kb, query) {
    var q = normalize(query);
    var best = null;
    var bestScore = 0;
    (kb.projects || []).forEach(function (p) {
      var name = normalize(p.name);
      var score = 0;
      if (q.indexOf(name) !== -1) score += 10;
      name.split(" ").forEach(function (part) {
        if (part.length > 2 && q.indexOf(part) !== -1) score += 3;
      });
      // common aliases
      if (name.indexOf("e-rosid") !== -1 || name.indexOf("erosid") !== -1) {
        if (/\be-?rosid\b/.test(q) || q.indexOf("erosid") !== -1) score += 8;
      }
      if (name.indexOf("knoterp") !== -1 && q.indexOf("knot") !== -1) score += 6;
      if (name.indexOf("ryofin") !== -1 && q.indexOf("ryofin") !== -1) score += 8;
      if (name.indexOf("voteinfohub") !== -1 && (q.indexOf("vote") !== -1 || q.indexOf("election") !== -1)) score += 6;
      if (score > bestScore) {
        bestScore = score;
        best = p;
      }
    });
    return bestScore >= 3 ? best : null;
  }

  function detectProjectFilter(query) {
    var q = normalize(query);
    var asksProjects =
      /\b(project|projects|portfolio|built|apps?|work samples?|showcase)\b/.test(q) ||
      /\bwhat (have you|did you) (built|shipped|made)\b/.test(q);

    if (/\blaravel\b/.test(q) && (asksProjects || /\blist\b|\bshow\b|\bwhich\b|\byour\b/.test(q))) {
      return "laravel";
    }
    if (/\b(flutter|dart)\b/.test(q) && (asksProjects || /\bapp\b/.test(q))) {
      return "flutter";
    }
    if (/\b(android)\b/.test(q) && asksProjects) {
      return "android";
    }
    if (/\b(ai|chatbot|llm)\b/.test(q) && asksProjects) {
      return "ai";
    }
    if (/\b(saas)\b/.test(q) && asksProjects) {
      return "saas";
    }
    if (asksProjects && /\b(all|your|list|show|tell|about)\b/.test(q)) {
      return "all";
    }
    if (asksProjects) return "all";
    return null;
  }

  function scoreIntent(query, intent) {
    var q = normalize(query);
    var tokens = tokensOf(query);
    var score = 0;
    (intent.keywords || []).forEach(function (kw) {
      var k = normalize(kw);
      if (!k) return;
      if (q.indexOf(k) !== -1) {
        score += k.length > 6 ? 4 : k.length > 3 ? 3 : 2;
      }
      tokens.forEach(function (t) {
        if (t.length > 2 && (k === t || k.indexOf(t) !== -1 || t.indexOf(k) !== -1)) {
          score += 1;
        }
      });
    });
    return score;
  }

  function skillsAnswer(kb, query) {
    var q = normalize(query);
    var map = [
      { keys: ["front", "react", "tailwind", "javascript", "ui"], group: "frontend", label: "Front-End" },
      { keys: ["back", "php", "laravel", "api", "lumen", "flask"], group: "backend", label: "Back-End" },
      { keys: ["database", "mysql", "postgres", "redis", "sql"], group: "databases", label: "Databases" },
      { keys: ["devops", "aws", "docker", "cloud", "deploy", "cpanel"], group: "devops", label: "DevOps & Cloud" },
      { keys: ["mobile", "flutter", "dart", "android", "firebase"], group: "mobile", label: "Mobile" },
      { keys: ["security", "2fa", "auth"], group: "security", label: "Security & Comms" },
      { keys: ["ai", "chatbot", "llm", "automation"], group: "ai", label: "AI & Automation" },
      { keys: ["plan", "agile", "git", "leadership"], group: "planning", label: "Project Planning" }
    ];
    for (var i = 0; i < map.length; i++) {
      var m = map[i];
      for (var j = 0; j < m.keys.length; j++) {
        if (q.indexOf(m.keys[j]) !== -1 && kb.skills[m.group]) {
          return (
            m.label +
            " skills: " +
            kb.skills[m.group].join(", ") +
            ". See the Skills tree on this site for the full map."
          );
        }
      }
    }
    return null;
  }

  function answer(query) {
    var kb = window.NAHID_KNOWLEDGE;
    if (!kb) {
      return { text: "Knowledge base is unavailable.", followUps: [] };
    }

    var q = normalize(query);
    var followPool = kb.starters.slice();

    // 1) Specific project by name
    var named = findProjectByName(kb, query);
    if (named && (/\b(about|tell|what|project|app|site|website|details?)\b/.test(q) || normalize(named.name).length > 4 && q.indexOf(normalize(named.name).split(" ")[0]) !== -1)) {
      // Prefer named hit when query mentions the project strongly
      var nameHit = normalize(named.name).split(" ").some(function (part) {
        return part.length > 3 && q.indexOf(part) !== -1;
      });
      if (nameHit || q.indexOf(normalize(named.name)) !== -1) {
        var namedReply = formatNamedProject(named);
        return {
          html: namedReply.html,
          text: namedReply.text,
          followUps: ["What are your Laravel projects?", "What is your tech stack?", "How can I contact you?"]
        };
      }
    }

    // 2) Filtered project lists (Laravel / Flutter / AI / all)
    var filter = detectProjectFilter(query);
    if (filter) {
      if (filter === "all") {
        var allList = listProjects(kb.projects, "Nahid's portfolio projects (" + kb.projects.length + ")");
        return {
          html: allList.html,
          text: allList.text,
          followUps: ["What are your Laravel projects?", "Tell me about KnotERP", "Tell me about Ina"]
        };
      }
      var filtered = projectsByTag(kb, filter);
      var label =
        filter === "laravel"
          ? "Laravel projects"
          : filter === "flutter"
            ? "Flutter projects"
            : filter === "android"
              ? "Android projects"
              : filter === "ai"
                ? "AI projects"
                : filter.toUpperCase() + " projects";
      var filteredList = listProjects(filtered, label + " (" + filtered.length + ")");
      return {
        html: filteredList.html,
        text: filteredList.text,
        followUps: ["Tell me about e-Rosid", "What is your tech stack?", "How can I contact you?"]
      };
    }

    // Strong named project without filter words
    if (named) {
      var namedOnly = formatNamedProject(named);
      return {
        html: namedOnly.html,
        text: namedOnly.text,
        followUps: ["What are your Laravel projects?", "What else is in the portfolio?", "How can I contact you?"]
      };
    }

    // 3) Skills subgroup
    if (/\b(skill|skills|know|expertise)\b/.test(q)) {
      var skillText = skillsAnswer(kb, query);
      if (skillText) {
        return { text: skillText, followUps: ["What are your Laravel projects?", "Do you use Redis?", "How can I contact you?"] };
      }
    }

    // 4) Intent matching (boost contact/about etc.)
    var best = null;
    var bestScore = 0;
    (kb.intents || []).forEach(function (intent) {
      var s = scoreIntent(query, intent);
      // Avoid letting bare "laravel" steal general stack when user asked projects (handled above)
      if (intent.id === "stack" && /\blaravel\b/.test(q) && /\bproject/.test(q)) s = 0;
      if (intent.id === "laravel" && /\bproject/.test(q)) s = 0;
      if (s > bestScore) {
        bestScore = s;
        best = intent;
      }
    });

    if (best && bestScore >= 2) {
      var text = best.answer;
      if (best.id === "projects" || !text) {
        text = listProjects(kb.projects, "Nahid's portfolio projects (" + kb.projects.length + "):");
      }
      var followUps = followPool
        .filter(function (s) {
          return normalize(s).indexOf(best.id) === -1;
        })
        .slice(0, 3);
      return { text: text, followUps: followUps.length ? followUps : kb.starters.slice(0, 3) };
    }

    // 5) Soft fallback: scan project blurbs + profile for any token overlap
    var softHits = (kb.projects || []).filter(function (p) {
      var hay = normalize(p.name + " " + p.blurb + " " + p.stack + " " + (p.tags || []).join(" "));
      return tokensOf(query).some(function (t) {
        return t.length > 3 && hay.indexOf(t) !== -1;
      });
    });
    if (softHits.length) {
      var softList = listProjects(softHits.slice(0, 8), "Closest matches from the portfolio");
      return {
        html: softList.html,
        text: softList.text,
        followUps: ["What are your Laravel projects?", "What is your tech stack?", "How can I contact you?"]
      };
    }

    return {
      text: kb.fallback,
      followUps: kb.starters.slice(0, 3)
    };
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

    // Fill missing URLs discovered on the page knowledge
    var urlFixes = {
      "BUETian Entrepreneurs Network": "https://bueten.org",
      "RyoGas Website": "https://www.ryogas.com/"
    };
    (kb.projects || []).forEach(function (p) {
      if (!p.url && urlFixes[p.name]) p.url = urlFixes[p.name];
    });

    var root = el("div", "nahid-chat");
    root.innerHTML =
      '<button type="button" class="nahid-chat-toggle" aria-expanded="false" aria-controls="nahid-chat-panel" title="Ask about Nahid">' +
      '<i class="bx bx-bot"></i><span>Ask Nahid</span></button>' +
      '<div class="nahid-chat-panel" id="nahid-chat-panel" hidden>' +
      '<div class="nahid-chat-header">' +
      "<div><strong>Ask about Nahid</strong><small>Knows this site — no AI API</small></div>" +
      '<button type="button" class="nahid-chat-close" aria-label="Close chat"><i class="bx bx-x"></i></button>' +
      "</div>" +
      '<div class="nahid-chat-messages" role="log" aria-live="polite"></div>' +
      '<div class="nahid-chat-starters"></div>' +
      '<form class="nahid-chat-form">' +
      '<input type="text" name="q" autocomplete="off" placeholder="Ask about Laravel projects, skills, contact…" aria-label="Your question" />' +
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

    function addBubble(text, who, asHtml) {
      var bubble = el("div", "nahid-chat-bubble " + who + (asHtml ? " is-html" : ""));
      if (asHtml) bubble.innerHTML = text;
      else bubble.textContent = text;
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
      addBubble(q, "user", false);
      var result = answer(q);
      setTimeout(function () {
        addBubble(result.text, "bot", !!result.html);
        renderStarters(result.followUps.length ? result.followUps : kb.starters.slice(0, 3));
      }, 180);
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
      "Welcome. I can answer questions about Nahid’s background, technical skills, selected projects, resume, and how to get in touch. For example: “What are your Laravel projects?”",
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
