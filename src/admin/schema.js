// Describes every editable section. The admin renders its forms from this,
// so adding a field here is all it takes to make it editable.
// Field types: text (default), textarea, strings (list of text), image, file.
const schema = [
  {
    key: "profile",
    label: "Profile",
    type: "object",
    help: "Your name, headline and links shown at the top of the site.",
    fields: [
      { name: "name", label: "Full name" },
      { name: "shortName", label: "Short name" },
      { name: "headline", label: "Big hero headline" },
      { name: "title", label: "Job title" },
      { name: "tagline", label: "Intro sentence", type: "textarea" },
      { name: "location", label: "Location" },
      { name: "availability", label: "Availability" },
      { name: "email", label: "Email" },
      { name: "linkedin", label: "LinkedIn URL" },
      { name: "github", label: "GitHub URL" },
      { name: "resumeUrl", label: "CV link (or upload a PDF)", type: "file" },
      { name: "photoUrl", label: "Hero photo", type: "image" },
      { name: "aboutPhotoUrl", label: "About photo", type: "image" },
    ],
  },
  {
    key: "stats",
    label: "Highlights",
    type: "list",
    help: "The three numbers under the hero section.",
    itemTitle: (s) => `${s.value || "?"} · ${s.label || "New highlight"}`,
    fields: [
      { name: "value", label: "Number (e.g. 3+)" },
      { name: "label", label: "Label" },
    ],
  },
  {
    key: "about",
    label: "About",
    type: "object",
    fields: [{ name: "paragraphs", label: "Paragraphs", type: "strings", multiline: true }],
  },
  {
    key: "principles",
    label: "How I Work",
    type: "list",
    help: "Short principles shown as cards after the About section.",
    itemTitle: (p) => p.title || "New principle",
    fields: [
      { name: "title", label: "Title" },
      { name: "body", label: "Text", type: "textarea" },
    ],
  },
  {
    key: "aiWorkflow",
    label: "AI Workflow",
    type: "list",
    help: "The steps of your AI-powered testing pipeline, in order.",
    itemTitle: (s) => s.title || "New step",
    fields: [
      { name: "title", label: "Step" },
      { name: "tool", label: "Tool / who" },
      { name: "status", label: "Status: done or learning" },
      { name: "body", label: "Description", type: "textarea" },
    ],
  },
  {
    key: "skills",
    label: "Skills",
    type: "list",
    help: "A group with \"AI\" in its name is highlighted; a group with \"learning\" in its name shows as in progress.",
    itemTitle: (s) => s.group || "New skill group",
    fields: [
      { name: "group", label: "Group name" },
      { name: "items", label: "Skills", type: "strings" },
    ],
  },
  {
    key: "experience",
    label: "Experience",
    type: "list",
    help: "Listed top to bottom; put your current job first.",
    itemTitle: (e) => [e.role, e.company].filter(Boolean).join(" @ ") || "New role",
    fields: [
      { name: "role", label: "Role" },
      { name: "company", label: "Company" },
      { name: "location", label: "Location" },
      { name: "start", label: "Start (e.g. Jun 2025)" },
      { name: "end", label: "End (or Present)" },
      { name: "bullets", label: "Achievements", type: "strings", multiline: true },
    ],
  },
  {
    key: "projects",
    label: "QA Projects",
    type: "list",
    itemTitle: (p) => p.name || "New project",
    fields: [
      { name: "name", label: "Project name" },
      { name: "domain", label: "Domain (e.g. Fintech)" },
      { name: "status", label: "Status badge (e.g. Passed, In progress)" },
      { name: "description", label: "Description", type: "textarea" },
      { name: "tags", label: "Tags", type: "strings" },
      { name: "link", label: "Proof link (optional)" },
      { name: "linkLabel", label: "Link text (e.g. App Store)" },
    ],
  },
  {
    key: "devProjects",
    label: "Microverse Projects",
    type: "list",
    itemTitle: (p) => p.name || "New project",
    fields: [
      { name: "name", label: "Project name" },
      { name: "description", label: "Description", type: "textarea" },
      { name: "image", label: "Screenshot", type: "image" },
      { name: "live", label: "Live URL" },
      { name: "github", label: "GitHub URL" },
    ],
  },
  {
    key: "certifications",
    label: "Certifications",
    type: "list",
    itemTitle: (c) => c.name || "New certification",
    fields: [
      { name: "name", label: "Name" },
      { name: "issuer", label: "Issuer" },
      { name: "date", label: "Date" },
      { name: "url", label: "Credential URL (optional)" },
    ],
  },
  {
    key: "education",
    label: "Education",
    type: "list",
    itemTitle: (e) => e.degree || "New entry",
    fields: [
      { name: "degree", label: "Degree / program" },
      { name: "school", label: "School" },
      { name: "years", label: "Years" },
    ],
  },
];

export const emptyItem = (section) => {
  const item = { id: `${section.key}-${Date.now().toString(36)}` };
  section.fields.forEach((f) => {
    item[f.name] = f.type === "strings" ? [] : "";
  });
  return item;
};

export default schema;
