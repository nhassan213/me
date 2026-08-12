/**
 * Public profile knowledge for the free on-site chatbot.
 * No secrets / API keys — safe for GitHub Pages.
 * Keep this in sync with index.html sections (About, Skills, Resume, Portfolio, Contact).
 */
window.NAHID_KNOWLEDGE = {
  profile: {
    name: "Md Nahid Hassan",
    role: "Sr. Software Engineer",
    company: "HiLinkz",
    companyUrl: "https://hilinkz.com",
    location: "Manikganj, Dhaka, Bangladesh",
    timezone: "UTC+6 (BST)",
    email: "nhassan213@gmail.com",
    phone: "(+88) 01817-098032",
    years: "6+",
    education: "BSc in Computer Science and Engineering, North South University (2015–2019)",
    headline: "Senior Engineer turning ideas into production systems",
    summary:
      "I design and ship full-stack platforms — from product planning and UI/UX to APIs, databases, Redis, CDN, auth/2FA, Docker/AWS deployment, and security. I also build AI chatbots and automation that streamline real business workflows.",
    sameAs: [
      "https://github.com/nhassan213",
      "https://www.linkedin.com/in/md-nahid-hassan/",
      "https://nhassan213.github.io/me/"
    ]
  },

  facts: {
    clients: 10,
    projectsDelivered: 24,
    years: 6,
    domains: 8
  },

  skills: {
    planning: ["Requirement analysis", "Agile delivery", "Team leadership", "Git / GitHub", "Estimation"],
    frontend: ["HTML / CSS", "Tailwind CSS", "JavaScript", "React.js", "Livewire", "UI / UX flows"],
    backend: ["PHP + OOP", "Laravel", "REST APIs", "Lumen", "Flask", "WordPress", "Python"],
    databases: ["MySQL", "PostgreSQL", "Schema design", "Redis cache", "Indexing", "Migrations"],
    devops: ["AWS", "Docker", "cPanel", "CDN", "Linux servers", "SSL / HTTPS"],
    mobile: ["Flutter", "Dart", "Firebase", "Android", "Push / FCM", "REST API clients"],
    security: ["Auth & 2FA", "SMTP email", "Push alerts", "App hardening", "Roles / ACL"],
    ai: ["AI chatbots", "LLM integration", "Workflow automation", "Voice assistants"]
  },

  /**
   * Full portfolio catalog used for “Laravel projects?”, name lookups, filters, etc.
   */
  projects: [
    {
      name: "Ina",
      tags: ["android", "flutter", "ai", "firebase"],
      stack: "Flutter, Firebase",
      blurb: "Voice-enabled personal AI secretary — tasks, reminders, notes.",
      url: null,
      detail: true
    },
    {
      name: "NSU Cybersecurity Center",
      tags: ["laravel"],
      stack: "Laravel",
      blurb: "Training & events platform for NSU Cybersecurity Center.",
      url: "https://csc.northsouth.edu"
    },
    {
      name: "LXMCQ",
      tags: ["laravel"],
      stack: "Laravel",
      blurb: "MCQ & job exam preparation platform.",
      url: "https://lxmcq.com"
    },
    {
      name: "LXNotes",
      tags: ["laravel"],
      stack: "Laravel",
      blurb: "English literature study notes platform.",
      url: "https://lxnotes.com"
    },
    {
      name: "Xpose Fitness BD",
      tags: ["laravel"],
      stack: "Laravel",
      blurb: "Gym management system.",
      url: "https://admin.xposefitnessbd.com"
    },
    {
      name: "RyoFin",
      tags: ["laravel", "saas"],
      stack: "Laravel",
      blurb: "Inventory, sales & accounting SaaS.",
      url: "https://www.ryofin.com"
    },
    {
      name: "KnotERP",
      tags: ["laravel", "mobile", "crm"],
      stack: "Laravel, Mobile App",
      blurb: "Field sales CRM with mobile app support.",
      url: "https://www.knoterp.com"
    },
    {
      name: "VoteInfoHub",
      tags: ["android"],
      stack: "Android",
      blurb: "Election voter information Android app.",
      url: "https://play.google.com/store/apps/details?id=com.hilinkz.VoteInfoHub&hl=en"
    },
    {
      name: "e-Rosid",
      tags: ["laravel", "erp", "pos"],
      stack: "Laravel, MySQL",
      blurb: "Inventory, POS, HRM, accounting, payroll & audit ERP.",
      url: "https://www.e-rosid.com/"
    },
    {
      name: "LPG Autogas Association",
      tags: ["laravel"],
      stack: "Laravel, MySQL",
      blurb: "Association platform for LPG Autogas stations & workshops — members, fees, policy workflows.",
      url: "https://www.lpgautogasbd.com/"
    },
    {
      name: "CPSCR Alumni Association",
      tags: ["laravel", "aws"],
      stack: "Laravel, AWS",
      blurb: "Alumni association website.",
      url: "https://cpscralumniassociation.org"
    },
    {
      name: "RyoGas SME / Smart Fuel Pump",
      tags: ["laravel", "livewire", "api", "saas"],
      stack: "Laravel, Livewire, REST APIs",
      blurb: "SaaS smart fuel pump solution.",
      url: "https://smet.ryogas.com/"
    },
    {
      name: "HiLinkz",
      tags: ["laravel", "web"],
      stack: "Web",
      blurb: "Company web portfolio for HiLinkz Ltd.",
      url: "https://hilinkz.com"
    },
    {
      name: "BUETian Entrepreneurs Network",
      tags: ["laravel", "web"],
      stack: "Web",
      blurb: "Entrepreneurs network website design & development.",
      url: "https://bueten.org"
    },
    {
      name: "RyoGas Website",
      tags: ["laravel", "aws", "web"],
      stack: "Web, AWS",
      blurb: "RyoGas marketing / product website.",
      url: "https://www.ryogas.com/"
    },
    {
      name: "Shikkha Britti",
      tags: ["laravel"],
      stack: "Laravel",
      blurb: "Scholarship discovery platform.",
      url: "https://shikkhabritti.com"
    },
    {
      name: "Impala",
      tags: ["laravel", "cpanel"],
      stack: "Dynamic website, cPanel",
      blurb: "Medical / health dynamic website.",
      url: "https://impala.com.bd"
    },
    {
      name: "EasyPonno",
      tags: ["laravel", "ecommerce"],
      stack: "Laravel",
      blurb: "eCommerce web application.",
      url: "https://easyponno.com"
    },
    {
      name: "Ukilmama",
      tags: ["laravel", "web"],
      stack: "Web design",
      blurb: "Advocate & law services web portfolio.",
      url: "https://ukilmama.com"
    }
  ],

  intents: [
    {
      id: "about",
      keywords: ["who", "about", "yourself", "bio", "introduce", "nahid", "background", "profile", "tell me about you"],
      answer: null // formatted in chatbot
    },
    {
      id: "experience",
      keywords: ["experience", "years", "senior", "career", "hilinkz", "job", "work history", "resume", "role"],
      answer:
        "## Experience\n\n**6+ years** building production software.\n\n- **2020–present** — Sr. Software Engineer at **HiLinkz**: ERP, CRM, and SaaS end-to-end\n- **Focus** — Laravel / Lumen / Flask APIs, MySQL & PostgreSQL, Redis, AWS / cPanel, 2FA, AI automation\n- **2018–2020** — Freelance full-stack PHP / Laravel delivery"
    },
    {
      id: "stack",
      keywords: ["stack", "skills", "technologies", "tech stack", "tools", "what do you use", "programming"],
      answer: null // formatted in chatbot
    },
    {
      id: "laravel",
      keywords: ["laravel only", "prefer laravel", "laravel experience", "laravel skill"],
      answer:
        "## Laravel\n\n**Laravel** is Nahid’s primary backend framework.\n\nUsed for:\n- SaaS & ERP platforms\n- CRM and association systems\n- Livewire UIs & REST APIs\n\nOften paired with **MySQL / PostgreSQL**, **Redis**, and **AWS**.\n\nAsk **What are your Laravel projects?** for the full list."
    },
    {
      id: "journey",
      keywords: ["journey", "process", "how you work", "pipeline", "engineering tree", "workflow", "skill tree"],
      answer: null // uses stack formatter
    },
    {
      id: "apis",
      keywords: ["api", "rest", "restapi", "restful", "endpoint", "lumen", "flask"],
      answer:
        "## REST APIs\n\nDesigns and ships APIs with:\n- **Laravel**\n- **Lumen**\n- **Flask**\n\nBuilt for web, mobile, and integrations — auth, clear contracts, and multi-client platforms."
    },
    {
      id: "database",
      keywords: ["database", "mysql", "postgresql", "postgres", "schema", "sql"],
      answer:
        "## Databases\n\nWorks with **MySQL** and **PostgreSQL** for ERP, CRM, and SaaS:\n- Schema design\n- Indexing & query performance\n- Migrations & data integrity"
    },
    {
      id: "redis",
      keywords: ["redis", "cache", "caching", "queue"],
      answer:
        "## Redis\n\nUses **Redis** for:\n- Caching\n- Sessions\n- Queue-backed workloads\n\nHelps SaaS and high-traffic apps stay fast and responsive."
    },
    {
      id: "aws",
      keywords: ["aws", "cloud", "deploy", "deployment", "docker", "server", "hosting", "cpanel"],
      answer:
        "## Cloud & deployment\n\nDeploys and operates apps on:\n- **AWS**\n- **cPanel** / Linux servers\n\nIncluding Docker-friendly delivery, SSL, environments, backups, and production hygiene."
    },
    {
      id: "security",
      keywords: ["security", "2fa", "auth", "authentication", "secure", "ssl"],
      answer:
        "## Security\n\nPractical production security:\n- Authentication & **2FA**\n- Secure sessions\n- HTTPS / SSL\n- Roles / ACL\n- App hardening"
    },
    {
      id: "ai",
      keywords: ["ai", "chatbot", "llm", "automation", "openai", "assistant", "voice"],
      answer:
        "## AI & automation\n\nBuilds AI chatbots and workflow automation wired into real systems.\n\n- **Ina** — personal voice-enabled AI secretary (Flutter + Firebase)\n- On-site guide on this portfolio for quick answers about Nahid"
    },
    {
      id: "flutter",
      keywords: ["flutter", "dart", "mobile app", "android app"],
      answer:
        "## Mobile\n\nBuilds apps with **Flutter**, **Dart**, and **Firebase** (FCM, auth, sync).\n\nExamples:\n- **Ina** — AI secretary\n- **VoteInfoHub** — Android voter info app\n\nLaravel REST APIs often power the backend."
    },
    {
      id: "projects",
      keywords: ["project", "projects", "portfolio", "built", "work sample", "showcase", "apps you built", "what have you built"],
      answer: null
    },
    {
      id: "ina",
      keywords: ["ina", "secretary", "personal ai"],
      answer:
        "## Ina\n\nPersonal **AI secretary** — voice-enabled tasks, reminders, and notes.\n\n- **Stack:** Flutter + Firebase\n- Built as a learning / weekend project\n\nOpen **Portfolio** on this page for more."
    },
    {
      id: "impact",
      keywords: ["impact", "clients", "numbers", "stats", "metrics", "how many"],
      answer: null
    },
    {
      id: "engage",
      keywords: ["engage", "hire", "services", "how to work with", "consult", "available for", "collaboration"],
      answer:
        "## How teams work with Nahid\n\nCommon engagements:\n- Platform / architecture builds\n- API integrations\n- Data, cache & performance\n- Cloud delivery\n- Security / 2FA\n- AI assistants & automation\n\n**Email** works best for async collaboration across timezones."
    },
    {
      id: "contact",
      keywords: ["contact", "email", "phone", "reach", "whatsapp", "linkedin", "github", "timezone"],
      answer: null
    },
    {
      id: "education",
      keywords: ["education", "university", "degree", "nsu", "study", "graduate", "north south"],
      answer:
        "## Education\n\n- **BSc** in Computer Science and Engineering — **North South University** (2015–2019)\n- **HSC** — Govt. Devendra College, Manikganj\n- **SSC** — Manikganj Govt. High School"
    }
  ],

  starters: [
    "Who is Nahid?",
    "What are your Laravel projects?",
    "What is your tech stack?",
    "Tell me about KnotERP",
    "How can I contact you?"
  ],

  fallback:
    "I can help with Nahid’s profile from this site.\n\nTry asking:\n- **What are your Laravel projects?**\n- **Tell me about RyoFin**\n- **Do you use Redis?**\n- **How can I contact you?**"
};
