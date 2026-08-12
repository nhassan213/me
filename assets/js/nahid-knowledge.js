/**
 * Public profile knowledge for the free on-site chatbot.
 * No secrets / API keys — safe for GitHub Pages.
 */
window.NAHID_KNOWLEDGE = {
  profile: {
    name: "Md Nahid Hassan",
    role: "Sr. Software Engineer",
    company: "HiLinkz",
    companyUrl: "https://hilinkz.com",
    location: "Manikganj, Dhaka, Bangladesh",
    email: "nhassan213@gmail.com",
    phone: "(+88) 01817-098032",
    years: "6+",
    education: "BSc in Computer Science and Engineering, North South University",
    summary:
      "I design and ship full-stack platforms — from product planning and UI/UX to APIs, databases, Redis, CDN, auth/2FA, Docker/AWS deployment, and security. I also build AI chatbots and automation that streamline real business workflows.",
    sameAs: [
      "https://github.com/nhassan213",
      "https://www.linkedin.com/in/md-nahid-hassan/",
      "https://nhassan213.github.io/me/"
    ]
  },

  intents: [
    {
      id: "about",
      keywords: ["who", "about", "yourself", "bio", "introduce", "nahid", "background"],
      answer:
        "I'm Md Nahid Hassan, a Sr. Software Engineer at HiLinkz with 6+ years of experience. I build scalable web platforms end-to-end — planning, UI/UX, Laravel backends, REST APIs, databases, Redis, CDN, SMTP, push notifications, 2FA, Docker/AWS, and security — plus AI chatbots and automation."
    },
    {
      id: "experience",
      keywords: ["experience", "years", "senior", "career", "hilinkz", "job", "work"],
      answer:
        "I have 6+ years of professional experience. Since 2020 I've been Sr. Software Engineer at HiLinkz, leading projects, shipping Laravel/Lumen/Flask apps, designing MySQL & PostgreSQL models, and deploying on cPanel and AWS."
    },
    {
      id: "stack",
      keywords: ["stack", "skills", "technologies", "tech", "laravel", "flutter", "php", "tools"],
      answer:
        "Core stack: Laravel, PHP, Lumen, React.js, Flutter, Firebase, JavaScript, MySQL, PostgreSQL, Redis, REST APIs, AWS, Docker, cPanel. I also work with AI chatbot/LLM integration, SMTP, push notifications, CDN, and 2FA/auth systems."
    },
    {
      id: "journey",
      keywords: ["journey", "process", "how you work", "pipeline", "engineering", "workflow", "skills", "skill"],
      answer:
        "Open the Skills section to see my engineering tree: Project Planning, Front-End, Back-End, Databases (MySQL, PostgreSQL, Redis), DevOps & Cloud (AWS, Docker), Mobile (Flutter/Firebase), Security & Comms (2FA, SMTP, Push), and AI & Automation. Scroll down and each branch reveals step by step."
    },
    {
      id: "apis",
      keywords: ["api", "rest", "restapi", "restful", "endpoint", "lumen", "flask"],
      answer:
        "I design and build REST APIs for multi-project platforms using Laravel, Lumen, and Flask — authentication, versioning, and clean contracts between web, mobile, and third-party systems."
    },
    {
      id: "database",
      keywords: ["database", "mysql", "postgresql", "postgres", "schema", "sql"],
      answer:
        "I model and optimize databases in MySQL and PostgreSQL for ERP, CRM, SaaS, and high-traffic apps — focusing on integrity, indexing, and query performance."
    },
    {
      id: "redis",
      keywords: ["redis", "cache", "caching", "queue"],
      answer:
        "I use Redis for caching hot paths, sessions, and queue-backed workloads so SaaS and high-traffic apps stay fast under load."
    },
    {
      id: "aws",
      keywords: ["aws", "cloud", "deploy", "deployment", "docker", "server", "hosting", "cpanel"],
      answer:
        "I deploy and operate apps on AWS and cPanel servers, including Docker-friendly delivery, SSL, environment config, and production hardening."
    },
    {
      id: "security",
      keywords: ["security", "2fa", "auth", "authentication", "secure", "ssl"],
      answer:
        "I implement practical application security: authentication, 2FA, secure sessions, HTTPS/SSL, input validation, and least-privilege patterns on production systems."
    },
    {
      id: "ai",
      keywords: ["ai", "chatbot", "llm", "automation", "ina", "openai", "assistant"],
      answer:
        "I build AI chatbots and automation workflows that connect apps and APIs. A recent personal project is Ina — a voice-enabled AI secretary built with Flutter and Firebase."
    },
    {
      id: "projects",
      keywords: ["project", "portfolio", "built", "work sample", "knoterp", "ryofin", "lxmcq", "erosid", "e-rosid"],
      answer:
        "Highlighted projects: Ina (Flutter AI secretary), KnotERP (field sales CRM), RyoFin (inventory/sales/accounting SaaS), LXMCQ, LXNotes, Xpose Fitness, NSU Cybersecurity Center, e-Rosid (POS/HRM/accounting), VoteInfoHub (Android), and more. Open the Portfolio section for links."
    },
    {
      id: "ina",
      keywords: ["ina", "secretary", "flutter", "firebase", "voice"],
      answer:
        "Ina is my personal AI secretary app — voice-enabled tasks, reminders, and notes. Built with Flutter and Firebase as a weekend learning project. Available on Android; details are in the Portfolio section."
    },
    {
      id: "contact",
      keywords: ["contact", "hire", "email", "phone", "reach", "available", "freelance"],
      answer:
        "I work from Bangladesh (UTC+6 / BST). Email nhassan213@gmail.com or call (+88) 01817-098032. For cross-timezone work, email is best. Open the Contact section for details."
    },
    {
      id: "education",
      keywords: ["education", "university", "degree", "nsu", "study", "graduate"],
      answer:
        "I earned a BSc in Computer Science and Engineering from North South University (2015–2019), then joined HiLinkz to build production platforms."
    }
  ],

  projects: [
    { name: "Ina", blurb: "Voice-enabled AI secretary (Flutter, Firebase)", url: "#portfolio" },
    { name: "KnotERP", blurb: "Field sales CRM + mobile", url: "https://www.knoterp.com" },
    { name: "RyoFin", blurb: "Inventory, sales & accounting SaaS", url: "https://www.ryofin.com" },
    { name: "LXMCQ", blurb: "MCQ & job exam platform", url: "https://lxmcq.com" },
    { name: "e-Rosid", blurb: "Inventory, POS, HRM, accounting", url: "https://www.e-rosid.com/" }
  ],

  starters: [
    "Who is Nahid?",
    "What is your tech stack?",
    "Tell me about your projects",
    "Do you work with AWS & Redis?",
    "How can I contact you?"
  ],

  fallback:
    "I can answer questions about Nahid's experience, stack (Laravel, Flutter, AWS, Redis, APIs, security), projects like Ina and KnotERP, or how to get in touch. Try: “What projects have you built?” or open the Portfolio / Contact sections."
};
