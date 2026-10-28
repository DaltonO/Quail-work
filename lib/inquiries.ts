import type { InquiryConfig } from "@/components/inquiry/InquiryDialog";

// Copy is verbatim from the Figma frames. Field error messages are not drawn for these dialogs, so
// they follow the participant inquiry error pattern (1:895).

export const employerInquiry: InquiryConfig = {
  backdrop: "scrim",
  shadow: true,
  notice: {
    form: "Illustrative form state — nothing is sent",
    confirmation: "Illustrative confirmation example — nothing is sent",
    icon: true,
  },
  closeHref: "/employers",
  closeStroke: 1.7,
  heading: "Discuss a work opportunity",
  description:
    "Start with your business and the work you have in mind. No participant records or complete program application needed.",
  requiredNote: "* Required fields. Keyboard focus shown on Business name.",
  required: [
    [
      { kind: "text", name: "business", label: "Business name *", placeholder: "Your business", required: true, error: "Enter your business name." },
      { kind: "text", name: "contact", label: "Contact name *", placeholder: "Your name", required: true, error: "Enter your name." },
    ],
    [
      { kind: "email", name: "email", label: "Email *", placeholder: "you@example.com", required: true, error: "Enter an email address like you@example.com." },
      { kind: "text", name: "city", label: "Worksite city *", placeholder: "City where the work takes place", required: true, error: "Enter the worksite city." },
    ],
    { kind: "textarea", name: "work", label: "What work is available? *", placeholder: "Describe the tasks and workplace", required: true, height: 88, error: "Describe the work that is available." },
    {
      kind: "select",
      name: "schedule",
      label: "Proposed schedule *",
      options: ["Not sure yet", "Part-time", "Full-time", "Internship"],
      placeholder: "Not sure yet",
      hint: "Options: Part-time · Full-time · Internship · Not sure yet",
      required: true,
      error: "Select a proposed schedule.",
    },
  ],
  optional: {
    heading: "A little more context, if you have it",
    headingStyle: "title",
    gap: 16,
    pairGap: 16,
    rows: [
      [
        { kind: "text", name: "jobDescription", label: "Existing job description (optional)", placeholder: "Add text or a link" },
        { kind: "text", name: "supervisor", label: "Named supervisor (optional)", placeholder: "Name or role, if known" },
      ],
      [
        { kind: "text", name: "ongoing", label: "Potential for ongoing employment (optional)", placeholder: "To be discussed" },
        { kind: "text", name: "questions", label: "Questions (optional)", placeholder: "What would you like to clarify?" },
      ],
    ],
  },
  submit: {
    label: "Discuss a work opportunity",
    textSize: 16,
    note: "Static visual example only. No information is transmitted, and no funding, eligibility or start date is established.",
  },
  confirmation: {
    heading: "Thanks for sharing the opportunity.",
    body: "The next step is a conversation to understand the work and explain the proposed pathway. Submitting this inquiry does not establish funding, eligibility, or a start date.",
    action: "Return to For Employers",
    actionHref: "/employers",
    actionTextSize: 16,
  },
};

const partnerConfirmation: InquiryConfig["confirmation"] = {
  heading: "A conversation is the next step.",
  body: "Your inquiry has been received in this prototype example. In the live service, the next step would be a conversation about scope, availability, and the appropriate process.",
  note: "Standalone sample confirmation state. No actual inquiry has been submitted or received.",
  action: "Return to For Partners",
  actionHref: "/partners",
  actionTextSize: 15,
};

const partnerShared = {
  backdrop: "slate",
  shadow: false,
  notice: {
    form: "Static inquiry design — no submission is sent",
    confirmation: "Prototype confirmation — no inquiry sent",
    icon: false,
  },
  closeHref: "/partners",
  closeStroke: 1,
  requiredNote: "* Required fields. Keyboard focus shown on Organization.",
  privacyWarning: "Please do not include participant names, diagnoses, or confidential records in this public inquiry.",
  submit: {
    label: "Submit inquiry — prototype only",
    textSize: 15,
    note: "This static design does not send a submission. No information is transmitted, and no eligibility, funding, service start or placement is established.",
  },
  confirmation: partnerConfirmation,
} satisfies Partial<InquiryConfig>;

export const providerPartnershipInquiry: InquiryConfig = {
  ...partnerShared,
  pathIdentity: {
    selected: "Employment & Support Providers",
    other: "Looking for scope or referral information? Discuss a referral →",
    otherHref: "/inquiry/referral",
  },
  heading: "Discuss a provider partnership",
  description:
    "Start with your organization and the opportunity, coordination or employment-support question you want to explore.",
  required: [
    [
      { kind: "text", name: "organization", label: "Organization *", placeholder: "Your organization", required: true, error: "Enter your organization." },
      { kind: "text", name: "contact", label: "Contact name *", placeholder: "Your name", required: true, error: "Enter your name." },
    ],
    [
      { kind: "email", name: "email", label: "Email *", placeholder: "you@example.com", required: true, error: "Enter an email address like you@example.com." },
      { kind: "text", name: "serviceArea", label: "Service area *", placeholder: "Cities or region served", required: true, error: "Enter your service area." },
    ],
    {
      kind: "checkboxes",
      name: "help",
      label: "What help are you seeking? *",
      hint: "Select the topics that fit.",
      options: [
        "Employer opportunities",
        "Coordination for existing opportunities",
        "Employment-support collaboration",
        "Other / Not sure yet",
      ],
      required: true,
      error: "Select at least one topic.",
    },
  ],
  optional: {
    heading: "A little more context, if you have it",
    headingStyle: "lead",
    gap: 18,
    pairGap: 18,
    rows: [
      { kind: "textarea", name: "relationships", label: "Existing employer relationships (optional)", placeholder: "General context about existing relationships", height: 96 },
      { kind: "textarea", name: "capacity", label: "General capacity information (optional)", placeholder: "Describe your organization’s general support capacity", height: 96 },
      { kind: "textarea", name: "questions", label: "Questions (optional)", placeholder: "What would you like to clarify?", height: 96 },
    ],
  },
};

export const referralInquiry: InquiryConfig = {
  ...partnerShared,
  pathIdentity: {
    selected: "Regional Centers & Referral Professionals",
    other: "Looking to collaborate as a support provider? Discuss a provider partnership →",
    otherHref: "/inquiry/provider-partnership",
  },
  heading: "Discuss a referral",
  description:
    "Ask about Quail’s scope, availability, referral requirements or the appropriate contact. This path is for planning and referral information, not support-provider service delivery.",
  required: [
    [
      { kind: "text", name: "organization", label: "Organization *", placeholder: "Your organization", required: true, error: "Enter your organization." },
      { kind: "text", name: "contact", label: "Contact name and role *", placeholder: "Your name and professional role", required: true, error: "Enter your name and role." },
    ],
    [
      { kind: "email", name: "email", label: "Email *", placeholder: "you@example.com", required: true, error: "Enter an email address like you@example.com." },
      { kind: "text", name: "area", label: "Geographic area *", placeholder: "City, county or region", required: true, error: "Enter your geographic area." },
    ],
    {
      kind: "checkboxes",
      name: "information",
      label: "What information do you need? *",
      hint: "Select the topics that fit.",
      options: ["Service scope", "Availability", "Referral process", "Other"],
      required: true,
      error: "Select at least one topic.",
    },
  ],
  afterFieldsNote:
    "Service area, funding arrangements, referral requirements, approvals and current availability remain to be confirmed.",
};
