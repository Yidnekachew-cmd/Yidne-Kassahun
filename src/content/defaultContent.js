// Images live in public/images so their addresses are the same locally and live.
// Built-in content. Used when Supabase is not configured or unreachable,
// and as the starting point the admin edits and saves.
// Client work under NDA is described without naming the client.
const defaultContent = {
  profile: {
    name: "Yidnekachew Kassahun",
    shortName: "Yidne",
    headline: "I break things so your users don't.",
    title: "Software QA Engineer · QA Team Lead",
    tagline:
      "QA Team Lead for banking and fintech products. I plan and lead testing, automate with Playwright, and I'm learning Claude Code and Rest Assured to grow into an AI-powered automation engineer.",
    location: "Addis Ababa, Ethiopia",
    availability: "Open to QA & test automation roles",
    email: "Yidnekachew.kassahun.qa@gmail.com",
    linkedin: "https://www.linkedin.com/in/yidnekachew-kassahun/",
    github: "https://github.com/Yidnekachew-cmd",
    // Served from public/. Replace by uploading a new PDF in the admin.
    resumeUrl: "/Yidnekachew_Kassahun_QA_Engineer_Resume.pdf",
    photoUrl: "/images/profile.png",
    aboutPhotoUrl: "/images/profile-about.png",
  },
  stats: [
    { value: "3+", label: "Years in software quality" },
    { value: "17", label: "QA engineers led" },
    { value: "6+", label: "Products tested" },
  ],
  about: {
    paragraphs: [
      "I lead a 17-person QA team at EagleLion System Technology, testing a pre-launch mobile super app for one of Ethiopia's largest banks.",
      "I didn't start in software. I trained as a mechanical engineer, retrained through Microverse's full-stack program, and worked as a frontend developer before moving into QA. That path shapes how I test: I think in systems, I can read the code, and I write bug reports developers can act on.",
      "I also build tools that make QA work easier. I built our team's QA dashboard with Claude Code, and I created the test case sheet template the whole team now uses.",
      "Right now I'm learning Claude Code for test automation and Rest Assured for API automation. My goal is to become an AI-powered automation engineer.",
    ],
  },
  principles: [
    {
      title: "Test the risk, not the checklist",
      body: "I start from what would hurt users and the business most, like payments, logins and personal data, and spend effort there first.",
    },
    {
      title: "Bugs with receipts",
      body: "Every defect comes with clear steps, expected vs. actual results, and screenshots or logs, so it gets fixed instead of debated.",
    },
    {
      title: "Automate the repeatable",
      body: "Stable, high-value flows go into Playwright, so people can spend their time on the cases that need a human eye.",
    },
    {
      title: "No surprises on release day",
      body: "Weekly, honest reporting on coverage, open defects and risk makes the go/no-go call an easy one.",
    },
  ],
  aiWorkflow: [
    {
      title: "Standardise test cases",
      tool: "Test case sheet template",
      status: "done",
      body: "Created the test case sheet template my QA team uses, so every case is written and tracked the same way.",
    },
    {
      title: "Track QA in one place",
      tool: "QA dashboard · Claude Code",
      status: "done",
      body: "Built a QA dashboard with Claude Code that turns the teams' sheets into progress, failed cases, bugs and reports.",
    },
    {
      title: "Automate UI tests",
      tool: "Playwright",
      status: "done",
      body: "Automated regression and end-to-end flows with Playwright on banking projects.",
    },
    {
      title: "Run tests on every push",
      tool: "GitHub Actions",
      status: "done",
      body: "Run automated checks in CI so regressions show up before a release.",
    },
    {
      title: "Automate API tests",
      tool: "Rest Assured",
      status: "learning",
      body: "Learning Rest Assured to move API checks from manual Postman runs into automated suites.",
    },
    {
      title: "AI-assisted test automation",
      tool: "Claude Code",
      status: "learning",
      body: "Learning to write and maintain automated tests faster with Claude Code, always with a human review.",
    },
  ],
  skills: [
    { group: "Test Automation", items: ["Playwright", "JavaScript", "TypeScript", "Page Object Model", "Cucumber (BDD)"] },
    { group: "API Testing", items: ["Postman", "REST APIs", "API test cases"] },
    {
      group: "Testing",
      items: ["Manual", "Functional", "Regression", "Smoke", "End-to-end", "Cross-browser", "Mobile (Android & iOS)"],
    },
    {
      group: "Test Management",
      items: ["Jira", "Azure DevOps", "TestLink", "Google Sheets", "Trello", "Test case design", "Defect tracking"],
    },
    {
      group: "Leadership & Process",
      items: ["Test planning & strategy", "Test case reviews", "Mentoring", "QA reporting", "Agile / Scrum"],
    },
    {
      group: "Dev & Tools",
      items: ["Git & GitHub", "GitHub Actions", "Chrome DevTools", "GitHub Copilot", "HTML & CSS", "React"],
    },
    { group: "Currently Learning", items: ["Claude Code for test automation", "Rest Assured (API automation)"] },
  ],
  experience: [
    {
      id: "eaglelion",
      role: "Software QA Team Lead",
      company: "EagleLion System Technology",
      location: "Addis Ababa, Ethiopia",
      start: "Jun 2025",
      end: "Present",
      bullets: [
        "Lead a 17-person QA team testing a pre-launch mobile super app for one of Ethiopia's largest banks.",
        "Built a QA dashboard with Claude Code that brings the team's test progress, failed cases, bugs and reports into one place.",
        "Created a test case sheet template that the whole QA team now uses.",
        "Write test plans and strategies for new features, and review test plans and test cases to close coverage gaps.",
        "Run mobile testing on Android and iOS for functionality, performance and UI consistency.",
        "Mentor junior QA engineers and report weekly to senior management on coverage, defects and readiness.",
      ],
    },
    {
      id: "ablaze",
      role: "Software QA Engineer",
      company: "Ablaze Labs",
      location: "Addis Ababa, Ethiopia",
      start: "Jun 2024",
      end: "Jun 2025",
      bullets: [
        "Ran manual and automated testing on web and mobile applications.",
        "Designed and executed test cases from requirements, and ran regression testing after every release.",
        "Logged and tracked defects with developers from report to verified fix, working in Agile/Scrum sprints.",
        "Joined design reviews to give QA input before development started.",
      ],
    },
    {
      id: "ezra",
      role: "Frontend Developer & Manual Tester",
      company: "Ezra Seminary",
      location: "Remote",
      start: "Sep 2023",
      end: "Sep 2024",
      bullets: [
        "Built responsive pages for an online learning platform with HTML, CSS and JavaScript, integrated with backend APIs.",
        "Ran manual tests across browsers and devices, and debugged and fixed bugs before release.",
      ],
    },
  ],
  projects: [
    {
      id: "bank-super-app",
      name: "Banking Super App",
      domain: "Mobile banking · NDA",
      status: "In progress",
      description:
        "Leading QA for a major Ethiopian bank's upcoming super app: test strategy, Android and iOS testing and launch readiness with a 17-person team. Client details are under NDA.",
      tags: ["Test strategy", "Mobile", "Team lead"],
      link: "",
    },
    {
      id: "qa-dashboard",
      name: "QA Dashboard",
      domain: "Internal tool · built with Claude Code",
      status: "In use",
      description:
        "One place for the QA team's work: test progress read from the teams' Google Sheets, failed cases, a built-in bug tracker, QA KPIs and PDF/Word reports.",
      tags: ["Claude Code", "Next.js", "TypeScript", "Cucumber"],
      link: "",
    },
    {
      id: "test-case-template",
      name: "Test Case Sheet Template",
      domain: "Team process",
      status: "In use",
      description:
        "A shared test case template the whole QA team uses, so cases are written, executed and reported the same way.",
      tags: ["Google Sheets", "Test design"],
      link: "",
    },
    {
      id: "dashen",
      name: "Dashen Bank Super App",
      domain: "Mobile banking",
      description: "Regression and end-to-end testing with Playwright automation for Ethiopia's first banking super app.",
      tags: ["Playwright", "E2E", "Regression"],
      link: "https://www.dashensuperapp.com/",
      linkLabel: "Visit the app",
    },
    {
      id: "starpay",
      name: "Star Pay Payment Gateway",
      domain: "Fintech",
      description: "Manual, regression and end-to-end testing of transaction flows for a payment gateway.",
      tags: ["Payments", "E2E", "Manual"],
      link: "https://www.starpayethiopia.com/",
      linkLabel: "Visit site",
    },
    {
      id: "cbe-connect",
      name: "CBE Connect",
      domain: "Banking · diaspora wallet",
      description: "Regression testing to keep the app stable and consistent across releases.",
      tags: ["Regression", "Mobile"],
      link: "https://play.google.com/store/apps/details?id=com.eaglelionsystems.connectethiopia",
      linkLabel: "Google Play",
    },
    {
      id: "med-quiz",
      name: "Med Quiz",
      domain: "Education",
      description: "Joined from project start: wrote test cases and ran smoke, regression, end-to-end and API testing.",
      tags: ["API", "E2E", "Smoke"],
      // medquiz.md was down (HTTP 522) when checked; re-add the link once it is back.
      link: "",
    },
    {
      id: "elhadar",
      name: "El-Hadar Engineering",
      domain: "Web",
      description: "Joined from project start: wrote test cases and ran smoke, regression and end-to-end testing.",
      tags: ["E2E", "Regression"],
      link: "https://elhadar.com/",
      linkLabel: "Visit site",
    },
    {
      id: "ezra-seminary",
      name: "Ezra Seminary",
      domain: "Education",
      description: "Built frontend pages and ran manual testing for an online learning platform.",
      tags: ["Frontend", "Manual"],
      link: "https://ezraseminary.org/",
      linkLabel: "Visit site",
    },
  ],
  devProjects: [
    {
      id: "population-index",
      name: "Population Index",
      description: "React single-page app for exploring population metrics by country.",
      image: "/images/population-index.png",
      live: "https://population-index.onrender.com/",
      github: "https://github.com/Yidnekachew-cmd/Popuation-Index",
    },
    {
      id: "hoo-bank",
      name: "Hoo Bank",
      description: "Responsive fintech landing page built with React and Tailwind CSS.",
      image: "/images/hoo-bank.jpg",
      live: "https://hoobank-zbaw.onrender.com/",
      github: "https://github.com/Yidnekachew-cmd/HooBank/tree/dev",
    },
    {
      id: "gpt3",
      name: "GPT-3 UI",
      description: "Modern, responsive React landing page.",
      image: "/images/gpt-3.png",
      live: "https://gpt-3-wnao.onrender.com/",
      github: "https://github.com/Yidnekachew-cmd/GPT-3",
    },
    {
      id: "restaurant",
      name: "Restaurant Website",
      description: "Responsive restaurant site built with React.",
      image: "/images/restaurant.png",
      live: "https://reastaurant-app.onrender.com/",
      github: "https://github.com/Yidnekachew-cmd/Reastaurant-App",
    },
  ],
  certifications: [
    {
      name: "Playwright",
      issuer: "Test Automation University",
      date: "Oct 2024",
      url: "https://testautomationu.applitools.com/certificate/?id=a36bf9f0",
    },
    {
      name: "JavaScript Algorithms and Data Structures",
      issuer: "freeCodeCamp",
      date: "Aug 2023",
      url: "https://www.freecodecamp.org/certification/Yidnekachew/javascript-algorithms-and-data-structures",
    },
    {
      name: "Database Module",
      issuer: "Microverse",
      date: "May 2023",
      url: "https://www.credential.net/2361a817-fd5b-44f5-8dca-052e38c8a3a6",
    },
    {
      name: "React/Redux Module",
      issuer: "Microverse",
      date: "Apr 2023",
      url: "https://www.credential.net/4e665509-7cdf-44dc-9fe6-2bfd7974ee15",
    },
    {
      name: "JavaScript Module",
      issuer: "Microverse",
      date: "Mar 2023",
      url: "https://www.credential.net/c23eb646-26b4-4f1a-aedc-110cf482fb6f",
    },
    {
      name: "HTML/CSS Module",
      issuer: "Microverse",
      date: "Feb 2023",
      url: "https://www.credential.net/20c266a9-d79c-4a47-abc1-c8f73056633f",
    },
  ],
  education: [
    { degree: "BSc, Mechanical Engineering", school: "University of Gondar", years: "2015 – 2021" },
    { degree: "Full-Stack Web Development Program", school: "Microverse (remote)", years: "2022 – 2023" },
  ],
};

export default defaultContent;
