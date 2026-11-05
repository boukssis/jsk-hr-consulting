import type { LucideIcon } from "lucide-react";
import {
  BriefcaseBusiness,
  Compass,
  Handshake,
  Layers3,
  RefreshCw,
  Users,
  UserRoundSearch,
  Waypoints,
} from "lucide-react";

export type ServiceItem = {
  title: string;
  description: string;
};

export type ServiceCategory = {
  id: string;
  eyebrow: string;
  title: string;
  summary: string;
  icon: LucideIcon;
  items: ServiceItem[];
};

export const homepageServices = [
  {
    title: "Strategic HR Advisory",
    description:
      "Practical guidance on workforce planning, people strategy, and organizational design for growing businesses.",
    href: "/services#strategic-hr",
    icon: Compass,
  },
  {
    title: "Leadership Development",
    description:
      "Coaching and workshops that strengthen leadership capability, communication, and team effectiveness.",
    href: "/services#leadership",
    icon: Users,
  },
  {
    title: "Talent Acquisition",
    description:
      "Recruitment strategy and workforce planning support to help you attract the right people at the right time.",
    href: "/services#talent",
    icon: UserRoundSearch,
  },
  {
    title: "Employee Relations",
    description:
      "Thoughtful support for workplace communication, employee concerns, and sensitive people matters.",
    href: "/services#employee-relations",
    icon: Handshake,
  },
  {
    title: "Organizational Change",
    description:
      "Structured support through restructuring, transitions, and periods of meaningful organizational change.",
    href: "/services#employee-relations",
    icon: RefreshCw,
  },
  {
    title: "Career Transition Coaching",
    description:
      "Individual coaching for professionals navigating career transitions with clarity and confidence.",
    href: "/services#leadership",
    icon: Waypoints,
  },
] as const;

export const serviceCategories: ServiceCategory[] = [
  {
    id: "strategic-hr",
    eyebrow: "Foundation",
    title: "Strategic HR Consulting",
    summary:
      "Experienced advisory support for organizations that need clear people strategy without building a full internal HR department.",
    icon: Compass,
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
    id: "talent",
    eyebrow: "Growth",
    title: "Talent Acquisition & Workforce Planning",
    summary:
      "Support for attracting, planning for, and developing the talent your organization needs to grow responsibly.",
    icon: UserRoundSearch,
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
    id: "leadership",
    eyebrow: "Capability",
    title: "Leadership Development",
    summary:
      "Development support for leaders and teams who need stronger communication, presence, and people leadership skills.",
    icon: Users,
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
    eyebrow: "Workplace",
    title: "Employee Relations & Organizational Change",
    summary:
      "Confidential, steady support for sensitive workplace matters and periods of organizational transition.",
    icon: Handshake,
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
        title: "Employee transition processes",
        description:
          "Respectful support for transitions that affect individuals and teams.",
      },
      {
        title: "Sensitive workforce matters",
        description:
          "Discreet consulting support when situations require experienced judgment and care.",
      },
    ],
  },
  {
    id: "compensation",
    eyebrow: "Alignment",
    title: "Compensation & Organizational Strategy",
    summary:
      "Advisory support that helps organizations align people systems with strategy and organizational effectiveness.",
    icon: Layers3,
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
    id: "transitions",
    eyebrow: "Complexity",
    title: "Complex Business Transitions",
    summary:
      "Steady HR support when organizations face significant change, restructuring, or high-stakes workforce decisions. This is consulting support — not legal representation.",
    icon: BriefcaseBusiness,
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
      {
        title: "Employee communication planning",
        description:
          "Clear messaging support so people understand what is changing and what remains steady.",
      },
    ],
  },
];
