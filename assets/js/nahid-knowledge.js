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
      answer:
        "I'm Md Nahid Hassan, Sr. Software Engineer at HiLinkz with 6+ years of experience. I turn product ideas into production systems — ERP, CRM, and SaaS — covering planning, UI, Laravel APIs, databases, Redis, AWS/Docker, security/2FA, and AI automation."
    },
    {
      id: "experience",
      keywords: ["experience", "years", "senior", "career", "hilinkz", "job", "work history", "resume", "role"],
      answer:
        "6+ years professional experience. Since 2020 I'm Sr. Software Engineer at HiLinkz — owning end-to-end ERP/CRM/SaaS delivery, Laravel/Lumen/Flask APIs, MySQL & PostgreSQL, Redis, AWS/cPanel deploys, 2FA, and AI automation. Earlier (2018–2020) I freelanced and shipped full-stack PHP/Laravel apps."
    },
    {
      id: "stack",
      keywords: ["stack", "skills", "technologies", "tech stack", "tools", "what do you use", "programming"],
      answer:
        "Core stack: Laravel, PHP, Lumen, React.js, Tailwind CSS, Flutter, Firebase, JavaScript, MySQL, PostgreSQL, Redis, REST APIs, AWS, Docker, cPanel. Also AI chatbots/LLMs, SMTP, push notifications, CDN, and 2FA/auth. Open the Skills tree on this site for the full map."
    },
    {
      id: "laravel",
      keywords: ["laravel only", "prefer laravel", "laravel experience", "laravel skill"],
      answer:
        "Laravel is my primary backend framework. I use it for SaaS, ERP, CRM, association platforms, Livewire UIs, and REST APIs — often with MySQL/PostgreSQL, Redis, and AWS. Ask “What are your Laravel projects?” for the portfolio list."
    },
    {
      id: "journey",
      keywords: ["journey", "process", "how you work", "pipeline", "engineering tree", "workflow", "skill tree"],
      answer:
        "Open the Skills section for my engineering tree: Planning → Front-End → Back-End → Databases → DevOps & Cloud → Mobile → Security & Comms → AI & Automation. Scroll and each branch reveals production tools I use."
    },
    {
      id: "apis",
      keywords: ["api", "rest", "restapi", "restful", "endpoint", "lumen", "flask"],
      answer:
        "I design REST APIs with Laravel, Lumen, and Flask for web, mobile, and integrations — auth, clean contracts, and multi-client platforms."
    },
    {
      id: "database",
      keywords: ["database", "mysql", "postgresql", "postgres", "schema", "sql"],
      answer:
        "I model and optimize MySQL and PostgreSQL for ERP, CRM, and SaaS — schema design, indexing, migrations, and query performance."
    },
    {
      id: "redis",
      keywords: ["redis", "cache", "caching", "queue"],
      answer:
        "I use Redis for caching, sessions, and queue-backed workloads so SaaS and high-traffic apps stay responsive."
    },
    {
      id: "aws",
      keywords: ["aws", "cloud", "deploy", "deployment", "docker", "server", "hosting", "cpanel"],
      answer:
        "I deploy and operate apps on AWS and cPanel — Docker-friendly delivery, SSL, environments, backups, and production hygiene."
    },
    {
      id: "security",
      keywords: ["security", "2fa", "auth", "authentication", "secure", "ssl"],
      answer:
        "I implement practical security: authentication, 2FA, secure sessions, HTTPS/SSL, roles/ACL, and hardening on production systems."
    },
    {
      id: "ai",
      keywords: ["ai", "chatbot", "llm", "automation", "openai", "assistant", "voice"],
      answer:
        "I build AI chatbots and automation wired into real systems. Personal project: Ina — a Flutter + Firebase voice-enabled AI secretary. This site also has a free on-site knowledge guide (no paid AI API)."
    },
    {
      id: "flutter",
      keywords: ["flutter", "dart", "mobile app", "android app"],
      answer:
        "I build mobile apps with Flutter, Dart, and Firebase (FCM, auth, backend sync). Examples: Ina (AI secretary) and Android work like VoteInfoHub. Laravel REST APIs often power the backend."
    },
    {
      id: "projects",
      keywords: ["project", "projects", "portfolio", "built", "work sample", "showcase", "apps you built", "what have you built"],
      answer: null // filled dynamically from projects[]
    },
    {
      id: "ina",
      keywords: ["ina", "secretary", "personal ai"],
      answer:
        "Ina is my personal AI secretary — voice-enabled tasks, reminders, and notes. Built with Flutter and Firebase as a weekend learning project. See Portfolio for details."
    },
    {
      id: "impact",
      keywords: ["impact", "clients", "numbers", "stats", "metrics", "how many"],
      answer:
        "Impact snapshot on this site: 10 clients served, 24 projects delivered, 6 years engineering, across 8 domains (planning, UI, backend, data, cloud, mobile, security, AI)."
    },
    {
      id: "engage",
      keywords: ["engage", "hire", "services", "how to work with", "consult", "available for", "collaboration"],
      answer:
        "Teams usually bring me in for platform/architecture builds, API integrations, data/cache/performance, cloud delivery, security/2FA, or AI assistants & automation. Email is best for async collaboration across timezones."
    },
    {
      id: "contact",
      keywords: ["contact", "email", "phone", "reach", "whatsapp", "linkedin", "github", "timezone"],
      answer:
        "Email: nhassan213@gmail.com · Phone/WhatsApp: (+88) 01817-098032 · Location: Manikganj, Dhaka, Bangladesh · Timezone: UTC+6 (BST). Also LinkedIn and GitHub linked in Contact / sidebar."
    },
    {
      id: "education",
      keywords: ["education", "university", "degree", "nsu", "study", "graduate", "north south"],
      answer:
        "BSc in Computer Science and Engineering from North South University (2015–2019). Earlier: HSC at Govt. Devendra College, Manikganj; SSC at Manikganj Govt. High School."
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
    "I know Nahid's full profile from this site — experience, skills, Laravel/Flutter/AI projects, resume, impact numbers, and contact. Try: “What are your Laravel projects?”, “Tell me about RyoFin”, “Do you use Redis?”, or “How can I contact you?”"
};
