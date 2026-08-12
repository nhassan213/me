/**
 * Free knowledge chatbot — no API keys, runs fully in the browser.
 * Answers from NAHID_KNOWLEDGE (profile, skills, full portfolio, contact).
 * Bot replies render as structured HTML (lists, bold, links) for easy scanning.
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

  function linkifyEscaped(escaped) {
    return escaped
      .replace(
        /(https?:\/\/[^\s<&]+)/g,
        '<a class="nahid-chat-link" href="$1" target="_blank" rel="noopener">$1</a>'
      )
      .replace(
        /([a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,})/gi,
        '<a class="nahid-chat-link" href="mailto:$1">$1</a>'
      );
  }

  function inlineFormat(escaped) {
    return linkifyEscaped(escaped)
      .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
      .replace(/`([^`]+)`/g, '<code class="nahid-chat-code">$1</code>');
  }

  /** ChatGPT-style lite markdown → safe HTML */
  function renderRich(src) {
    var text = String(src || "").trim();
    if (!text) return "";

    var blocks = text.split(/\n{2,}/);
    var html = [];

    blocks.forEach(function (block) {
      var lines = block.split("\n").map(function (l) {
        return l.trim();
      }).filter(Boolean);
      if (!lines.length) return;

      var isList = lines.every(function (l) {
        return /^[-•*]\s+/.test(l) || /^\d+\.\s+/.test(l);
      });

      if (isList) {
        html.push(
          '<ul class="nahid-chat-bullets">' +
            lines
              .map(function (l) {
                var item = l.replace(/^[-•*]\s+/, "").replace(/^\d+\.\s+/, "");
                return "<li>" + inlineFormat(escapeHtml(item)) + "</li>";
              })
              .join("") +
            "</ul>"
        );
        return;
      }

      if (lines.length === 1 && /^#{1,3}\s+/.test(lines[0])) {
        html.push(
          '<p class="nahid-chat-heading">' +
            inlineFormat(escapeHtml(lines[0].replace(/^#{1,3}\s+/, ""))) +
            "</p>"
        );
        return;
      }

      html.push(
        "<p>" +
          lines
            .map(function (l) {
              return inlineFormat(escapeHtml(l));
            })
            .join("<br>") +
          "</p>"
      );
    });

    return '<div class="nahid-chat-md">' + html.join("") + "</div>";
  }

  function richReply(src, followUps) {
    return { html: true, text: renderRich(src), followUps: followUps || [] };
  }

  function htmlReply(html, followUps) {
    return { html: true, text: html, followUps: followUps || [] };
  }

  function chipRow(items) {
    return (
      '<div class="nahid-chat-tags">' +
      (items || [])
        .map(function (t) {
          return '<span class="nahid-chat-tag">' + escapeHtml(t) + "</span>";
        })
        .join("") +
      "</div>"
    );
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
      '<div class="nahid-chat-project-title">' +
      title +
      "</div>" +
      '<div class="nahid-chat-project-meta">' +
      blurb +
      "</div>" +
      '<div class="nahid-chat-project-stack">' +
      stack +
      "</div>" +
      "</li>"
    );
  }

  function listProjects(list, heading) {
    if (!list.length) {
      return richReply(
        "I don’t have projects tagged that way yet.\n\nAsk **What are your projects?** for the full portfolio."
      );
    }
    var html =
      '<p class="nahid-chat-heading">' +
      escapeHtml(heading || "Matching projects") +
      "</p>" +
      '<ul class="nahid-chat-list">' +
      list.map(formatProjectItem).join("") +
      "</ul>" +
      '<p class="nahid-chat-footnote">Want a closer look? Browse the <a class="nahid-chat-link" href="#portfolio">Portfolio</a> on this page — filter by type and open any project.</p>';
    return htmlReply(html);
  }

  function formatNamedProject(p) {
    var name = escapeHtml(p.name);
    var link = p.url
      ? '<a class="nahid-chat-link" href="' + escapeHtml(p.url) + '" target="_blank" rel="noopener">Visit live site →</a>'
      : '<a class="nahid-chat-link" href="#portfolio">View in Portfolio →</a>';
    var html =
      '<div class="nahid-chat-md">' +
      '<p class="nahid-chat-heading">' +
      name +
      "</p>" +
      "<p>" +
      escapeHtml(p.blurb) +
      "</p>" +
      '<ul class="nahid-chat-kv">' +
      "<li><span>Stack</span><strong>" +
      escapeHtml(p.stack) +
      "</strong></li>" +
      (p.tags && p.tags.length
        ? "<li><span>Focus</span>" + chipRow(p.tags) + "</li>"
        : "") +
      "</ul>" +
      '<p class="nahid-chat-cta">' +
      link +
      "</p>" +
      "</div>";
    return htmlReply(html);
  }

  function formatAbout(kb) {
    var p = kb.profile;
    return htmlReply(
      '<div class="nahid-chat-md">' +
        '<p class="nahid-chat-heading">' +
        escapeHtml(p.name) +
        "</p>" +
        "<p><strong>" +
        escapeHtml(p.role) +
        "</strong> at " +
        (p.companyUrl
          ? '<a class="nahid-chat-link" href="' + escapeHtml(p.companyUrl) + '" target="_blank" rel="noopener">' + escapeHtml(p.company) + "</a>"
          : escapeHtml(p.company)) +
        " · " +
        escapeHtml(p.years) +
        " years experience</p>" +
        "<p>" +
        escapeHtml(p.headline) +
        "</p>" +
        "<p>" +
        escapeHtml(p.summary) +
        "</p>" +
        "</div>"
    );
  }

  function formatContact(kb) {
    var p = kb.profile;
    return htmlReply(
      '<div class="nahid-chat-md">' +
        '<p class="nahid-chat-heading">Get in touch</p>' +
        '<ul class="nahid-chat-kv">' +
        '<li><span>Email</span><a class="nahid-chat-link" href="mailto:' +
        escapeHtml(p.email) +
        '">' +
        escapeHtml(p.email) +
        "</a></li>" +
        "<li><span>Phone</span><a class=\"nahid-chat-link\" href=\"tel:+8801817098032\">" +
        escapeHtml(p.phone) +
        "</a></li>" +
        "<li><span>Location</span><strong>" +
        escapeHtml(p.location) +
        "</strong></li>" +
        "<li><span>Timezone</span><strong>" +
        escapeHtml(p.timezone) +
        "</strong></li>" +
        "</ul>" +
        '<p class="nahid-chat-footnote">Also find <strong>LinkedIn</strong> &amp; <strong>GitHub</strong> in the Contact section / sidebar.</p>' +
        "</div>"
    );
  }

  function formatStack(kb) {
    var groups = [
      { label: "Front-End", key: "frontend" },
      { label: "Back-End", key: "backend" },
      { label: "Databases", key: "databases" },
      { label: "DevOps & Cloud", key: "devops" },
      { label: "Mobile", key: "mobile" },
      { label: "Security", key: "security" },
      { label: "AI & Automation", key: "ai" },
      { label: "Planning", key: "planning" }
    ];
    var sections = groups
      .map(function (g) {
        if (!kb.skills[g.key]) return "";
        return (
          '<div class="nahid-chat-skill-block">' +
          '<div class="nahid-chat-skill-label">' +
          escapeHtml(g.label) +
          "</div>" +
          chipRow(kb.skills[g.key]) +
          "</div>"
        );
      })
      .join("");
    return htmlReply(
      '<div class="nahid-chat-md">' +
        '<p class="nahid-chat-heading">Tech stack</p>' +
        "<p>Core tools Nahid uses in production:</p>" +
        sections +
        '<p class="nahid-chat-footnote">See the <a class="nahid-chat-link" href="#skills">Skills</a> section for the full engineering tree.</p>' +
        "</div>"
    );
  }

  function formatImpact(kb) {
    var f = kb.facts;
    return htmlReply(
      '<div class="nahid-chat-md">' +
        '<p class="nahid-chat-heading">Impact snapshot</p>' +
        '<ul class="nahid-chat-stats">' +
        "<li><strong>" +
        f.clients +
        "</strong><span>Clients</span></li>" +
        "<li><strong>" +
        f.projectsDelivered +
        "</strong><span>Projects</span></li>" +
        "<li><strong>" +
        f.years +
        "+</strong><span>Years</span></li>" +
        "<li><strong>" +
        f.domains +
        "</strong><span>Domains</span></li>" +
        "</ul>" +
        "<p>Across planning, UI, backend, data, cloud, mobile, security, and AI.</p>" +
        "</div>"
    );
  }

  function formatSkillsGroup(label, items) {
    return htmlReply(
      '<div class="nahid-chat-md">' +
        '<p class="nahid-chat-heading">' +
        escapeHtml(label) +
        "</p>" +
        chipRow(items) +
        '<p class="nahid-chat-footnote">Browse the <a class="nahid-chat-link" href="#skills">Skills</a> tree for every branch.</p>' +
        "</div>"
    );
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
          return formatSkillsGroup(m.label + " skills", kb.skills[m.group]);
        }
      }
    }
    return null;
  }

  function formatIntent(kb, intent) {
    var id = intent.id;
    if (id === "about") return formatAbout(kb);
    if (id === "contact") return formatContact(kb);
    if (id === "stack" || id === "journey") return formatStack(kb);
    if (id === "impact") return formatImpact(kb);
    if (id === "projects") return listProjects(kb.projects, "Portfolio projects (" + kb.projects.length + ")");

    // Prefer structured markdown from knowledge
    if (intent.answer) {
      return richReply(intent.answer);
    }
    return richReply(kb.fallback);
  }

  function answer(query) {
    var kb = window.NAHID_KNOWLEDGE;
    if (!kb) {
      return richReply("Knowledge base is unavailable right now.");
    }

    var q = normalize(query);
    var followPool = kb.starters.slice();
    var defaultFollow = ["What are your Laravel projects?", "What is your tech stack?", "How can I contact you?"];

    // 1) Specific project by name
    var named = findProjectByName(kb, query);
    if (
      named &&
      (/\b(about|tell|what|project|app|site|website|details?)\b/.test(q) ||
        (normalize(named.name).length > 4 && q.indexOf(normalize(named.name).split(" ")[0]) !== -1))
    ) {
      var nameHit = normalize(named.name).split(" ").some(function (part) {
        return part.length > 3 && q.indexOf(part) !== -1;
      });
      if (nameHit || q.indexOf(normalize(named.name)) !== -1) {
        var namedReply = formatNamedProject(named);
        namedReply.followUps = ["What are your Laravel projects?", "What is your tech stack?", "How can I contact you?"];
        return namedReply;
      }
    }

    // 2) Filtered project lists
    var filter = detectProjectFilter(query);
    if (filter) {
      if (filter === "all") {
        var allList = listProjects(kb.projects, "Portfolio projects (" + kb.projects.length + ")");
        allList.followUps = ["What are your Laravel projects?", "Tell me about KnotERP", "Tell me about Ina"];
        return allList;
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
      filteredList.followUps = ["Tell me about e-Rosid", "What is your tech stack?", "How can I contact you?"];
      return filteredList;
    }

    if (named) {
      var namedOnly = formatNamedProject(named);
      namedOnly.followUps = ["What are your Laravel projects?", "What else is in the portfolio?", "How can I contact you?"];
      return namedOnly;
    }

    // 3) Skills subgroup
    if (/\b(skill|skills|know|expertise)\b/.test(q)) {
      var skillReply = skillsAnswer(kb, query);
      if (skillReply) {
        skillReply.followUps = ["What are your Laravel projects?", "Do you use Redis?", "How can I contact you?"];
        return skillReply;
      }
    }

    // 4) Intent matching
    var best = null;
    var bestScore = 0;
    (kb.intents || []).forEach(function (intent) {
      var s = scoreIntent(query, intent);
      if (intent.id === "stack" && /\blaravel\b/.test(q) && /\bproject/.test(q)) s = 0;
      if (intent.id === "laravel" && /\bproject/.test(q)) s = 0;
      if (s > bestScore) {
        bestScore = s;
        best = intent;
      }
    });

    if (best && bestScore >= 2) {
      var reply = formatIntent(kb, best);
      var followUps = followPool
        .filter(function (s) {
          return normalize(s).indexOf(best.id) === -1;
        })
        .slice(0, 3);
      reply.followUps = followUps.length ? followUps : kb.starters.slice(0, 3);
      return reply;
    }

    // 5) Soft project matches
    var softHits = (kb.projects || []).filter(function (p) {
      var hay = normalize(p.name + " " + p.blurb + " " + p.stack + " " + (p.tags || []).join(" "));
      return tokensOf(query).some(function (t) {
        return t.length > 3 && hay.indexOf(t) !== -1;
      });
    });
    if (softHits.length) {
      var softList = listProjects(softHits.slice(0, 8), "Closest matches");
      softList.followUps = defaultFollow;
      return softList;
    }

    var fallback = richReply(kb.fallback);
    fallback.followUps = kb.starters.slice(0, 3);
    return fallback;
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
      "<div><strong>Ask about Nahid</strong><small>Answers based on this portfolio</small></div>" +
      '<button type="button" class="nahid-chat-close" aria-label="Close chat"><i class="bx bx-x"></i></button>' +
      "</div>" +
      '<div class="nahid-chat-messages" role="log" aria-live="polite"></div>' +
      '<div class="nahid-chat-starters"></div>' +
      '<form class="nahid-chat-form">' +
      '<input type="text" name="q" autocomplete="off" placeholder="Ask about projects, skills, contact…" aria-label="Your question" />' +
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
        renderStarters(result.followUps && result.followUps.length ? result.followUps : kb.starters.slice(0, 3));
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
      renderRich(
        "Welcome. I can help you learn about Nahid quickly.\n\nAsk about:\n- **Background** & experience\n- **Tech stack** & skills\n- **Projects** (Laravel, Flutter, AI)\n- **Contact** details\n\nTry: **What are your Laravel projects?**"
      ),
      "bot",
      true
    );
    renderStarters(kb.starters);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
