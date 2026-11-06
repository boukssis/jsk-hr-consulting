export type ServiceItem = {
  title: string;
  description: string;
};

export type ServiceSection = {
  id: string;
  number: string;
  title: string;
  summary: string;
  items: ServiceItem[];
  tone: "ivory" | "white" | "soft" | "navy";
  showOnHomepage?: boolean;
  homepageTitle?: string;
  homepageDescription?: string;
};

/**
 * Canonical service registry — single source of truth for homepage links
 * and /services page sections. IDs must stay stable for hash navigation.
 */
export const serviceSections: ServiceSection[] = [
  {
    id: "strategic-hr",
    number: "01",
    title: "Strategic HR Consulting",
    homepageTitle: "Strategic HR Advisory",
    homepageDescription:
      "Practical guidance on workforce planning, people strategy, and organizational design for growing businesses.",
    showOnHomepage: true,
    summary: "Clear people strategy without building a full HR department.",
    tone: "ivory",
    items: [
      {
        title: "HR planning and advisory",
        description:
          "Guidance on priorities, policies, and people practices aligned with business goals.",
      },
      {
        title: "Human capital strategy",
        description:
          "Thoughtful planning around the workforce capabilities your organization needs next.",
      },
      {
        title: "Organizational design",
        description:
          "Support refining structure, roles, and reporting relationships as the business evolves.",
      },
      {
        title: "HR assessments",
        description:
          "A practical look at current people processes, strengths, and opportunities for improvement.",
      },
      {
        title: "Strategy deployment",
        description:
          "Help translating people priorities into actions leaders can implement with confidence.",
      },
      {
        title: "Continuous improvement",
        description:
          "Ongoing refinement of HR practices so they remain useful, clear, and sustainable.",
      },
    ],
  },
  {
    id: "talent-acquisition",
    number: "02",
    title: "Talent Acquisition & Workforce Planning",
    homepageTitle: "Talent Acquisition",
    homepageDescription:
      "Recruitment strategy and workforce planning support to help you attract the right people at the right time.",
    showOnHomepage: true,
    summary: "Attract, plan for, and develop the talent your growth requires.",
    tone: "white",
    items: [
      {
        title: "Recruitment strategy",
        description:
          "Clear approaches to sourcing and evaluating candidates for critical roles.",
      },
      {
        title: "Specialized talent acquisition",
        description:
          "Support for hiring into roles that require careful evaluation and industry context.",
      },
      {
        title: "Human capital planning",
        description:
          "Forward-looking workforce planning that connects people needs to business direction.",
      },
      {
        title: "Workforce development",
        description:
          "Guidance to strengthen internal capability and prepare people for evolving responsibilities.",
      },
      {
        title: "Organizational staffing needs",
        description:
          "Practical assessment of where staffing gaps exist and how to address them thoughtfully.",
      },
    ],
  },
  {
    id: "leadership-development",
    number: "03",
    title: "Leadership Development",
    homepageTitle: "Leadership Development",
    homepageDescription:
      "Coaching and workshops that strengthen leadership capability, communication, and team effectiveness.",
    showOnHomepage: true,
    summary: "Coaching and workshops that strengthen leadership and teams.",
    tone: "soft",
    items: [
      {
        title: "Leadership workshops",
        description:
          "Focused sessions designed to strengthen practical leadership habits and awareness.",
      },
      {
        title: "Executive coaching",
        description:
          "One-to-one coaching for leaders navigating complexity, change, or expanded responsibility.",
      },
      {
        title: "Individual and group coaching",
        description:
          "Flexible coaching formats that support personal growth and shared team learning.",
      },
      {
        title: "Team building",
        description:
          "Facilitated work that improves collaboration, trust, and shared accountability.",
      },
      {
        title: "Training delivery",
        description:
          "Practical learning experiences tailored to your leaders and organizational context.",
      },
      {
        title: "Leadership assessments",
        description:
          "Insightful reflection tools to help leaders understand strengths and development areas.",
      },
    ],
  },
  {
    id: "employee-relations",
    number: "04",
    title: "Employee Relations",
    homepageTitle: "Employee Relations",
    homepageDescription:
      "Thoughtful support for workplace communication, employee concerns, and sensitive people matters.",
    showOnHomepage: true,
    summary: "Steady support for concerns, communication, and sensitive matters.",
    tone: "ivory",
    items: [
      {
        title: "Employee concerns",
        description:
          "Careful guidance when workplace issues require fairness, clarity, and discretion.",
      },
      {
        title: "Workplace communication",
        description:
          "Support strengthening how leaders communicate expectations, change, and feedback.",
      },
      {
        title: "Sensitive workforce matters",
        description:
          "Discreet consulting support when situations require experienced judgment and care.",
      },
      {
        title: "Employee transition processes",
        description:
          "Respectful support for transitions that affect individuals and teams.",
      },
    ],
  },
  {
    id: "organizational-change",
    number: "05",
    title: "Organizational Change",
    homepageTitle: "Organizational Change",
    homepageDescription:
      "Structured support through restructuring, transitions, and periods of meaningful organizational change.",
    showOnHomepage: true,
    summary: "Practical guidance through restructuring and meaningful change.",
    tone: "white",
    items: [
      {
        title: "Change management",
        description:
          "Practical planning to help people navigate organizational change with less disruption.",
      },
      {
        title: "Organizational restructuring support",
        description:
          "People-focused guidance through structural shifts and role realignment.",
      },
      {
        title: "Employee communication planning",
        description:
          "Clear messaging support so people understand what is changing and what remains steady.",
      },
      {
        title: "Workforce realignment",
        description:
          "Thoughtful support when teams, roles, or responsibilities need to evolve.",
      },
    ],
  },
  {
    id: "compensation",
    number: "06",
    title: "Compensation & Organizational Strategy",
    summary: "Align people systems with strategy and organizational effectiveness.",
    tone: "soft",
    items: [
      {
        title: "Variable compensation programs",
        description:
          "Guidance on designing incentive approaches that support desired performance and culture.",
      },
      {
        title: "Workforce planning",
        description:
          "Planning support that connects staffing, capability, and future business needs.",
      },
      {
        title: "Strategic organizational development",
        description:
          "Thoughtful development of structures and practices that help the organization operate more effectively.",
      },
      {
        title: "Organizational effectiveness",
        description:
          "Support examining how people, process, and leadership interact to create better outcomes.",
      },
    ],
  },
  {
    id: "complex-transitions",
    number: "07",
    title: "Complex Business Transitions",
    summary:
      "HR support for high-stakes transitions. Consulting guidance — not legal representation.",
    tone: "navy",
    items: [
      {
        title: "HR support for mergers and acquisitions",
        description:
          "People-side guidance through integration planning, communication, and workforce considerations.",
      },
      {
        title: "Workforce restructuring",
        description:
          "Practical support when organizations need to reshape teams with clarity and care.",
      },
      {
        title: "Reductions in force",
        description:
          "Experienced guidance on planning and communicating difficult workforce decisions respectfully.",
      },
      {
        title: "Union contract negotiation support",
        description:
          "Advisory support to help leadership prepare for and navigate negotiation contexts.",
      },
    ],
  },
  {
    id: "career-transition",
    number: "08",
    title: "Career Transition Coaching",
    homepageTitle: "Career Transition Coaching",
    homepageDescription:
      "Individual coaching for professionals navigating career transitions with clarity and confidence.",
    showOnHomepage: true,
    summary: "One-to-one coaching for professionals navigating career change.",
    tone: "ivory",
    items: [
      {
        title: "Career transition coaching",
        description:
          "One-to-one coaching for professionals preparing for the next stage of their career.",
      },
      {
        title: "Role and direction clarity",
        description:
          "Support clarifying strengths, priorities, and practical next steps.",
      },
      {
        title: "Transition communication",
        description:
          "Guidance for navigating conversations and changes during career transitions.",
      },
      {
        title: "Confidence and readiness",
        description:
          "Thoughtful coaching that helps individuals move forward with composure and purpose.",
      },
    ],
  },
];

const homepageOrder = [
  "strategic-hr",
  "leadership-development",
  "talent-acquisition",
  "employee-relations",
  "organizational-change",
  "career-transition",
] as const;

const featuredOrder = [
  "strategic-hr",
  "talent-acquisition",
  "leadership-development",
  "employee-relations",
  "organizational-change",
  "complex-transitions",
] as const;

export const featuredServices = featuredOrder.map((id) => {
  const section = serviceSections.find((entry) => entry.id === id);
  if (!section) {
    throw new Error(`Missing featured service section: ${id}`);
  }
  return {
    id: section.id,
    number: section.number,
    title: section.title,
    summary: section.summary,
    href: `/services#${section.id}`,
  };
});

export const homepageServices = homepageOrder.map((id) => {
  const section = serviceSections.find((entry) => entry.id === id);
  if (!section) {
    throw new Error(`Missing homepage service section: ${id}`);
  }
  return {
    id: section.id,
    title: section.homepageTitle ?? section.title,
    description: section.homepageDescription ?? section.summary,
    href: `/services#${section.id}`,
  };
});

export function getServiceHref(id: string) {
  return `/services#${id}`;
}
