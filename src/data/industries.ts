export const industries = [
  {
    id: "nuclear",
    eyebrow: "Nuclear & Energy",
    title: "HR expertise for complex operating environments",
    image: "/images/energy.jpg",
    imageAlt:
      "Industrial power infrastructure at dusk, representing complex energy environments",
    intro:
      "Organizations in nuclear and energy settings operate under demanding conditions where workforce continuity, leadership clarity, and careful communication matter every day.",
    points: [
      {
        title: "Complex operating environments",
        description:
          "Support for people practices that respect the discipline and accountability required in highly regulated, technically complex settings.",
      },
      {
        title: "Workforce continuity",
        description:
          "Guidance on planning for capability, succession, and knowledge continuity across critical roles.",
      },
      {
        title: "Leadership development",
        description:
          "Development support for leaders who must balance operational excellence with people-centered leadership.",
      },
      {
        title: "Specialized talent needs",
        description:
          "Thoughtful approaches to attracting and evaluating talent for specialized operational roles.",
      },
      {
        title: "Employee communication",
        description:
          "Clear communication practices that help people understand expectations, change, and workplace standards.",
      },
    ],
  },
  {
    id: "construction",
    eyebrow: "Construction",
    title: "People strategy for project-driven workforces",
    image: "/images/construction.jpg",
    imageAlt:
      "Architectural construction framework against an open sky",
    intro:
      "Construction organizations often manage fluctuating teams, tight timelines, and leadership demands that shift from project to project. Experienced HR guidance helps create steadier people practices amid that movement.",
    points: [
      {
        title: "Project-based workforces",
        description:
          "Support for workforce planning that accounts for project cycles, staffing shifts, and team transitions.",
      },
      {
        title: "Leadership and team development",
        description:
          "Practical development for supervisors and project leaders responsible for people and performance.",
      },
      {
        title: "Workforce transitions",
        description:
          "Guidance through hiring surges, demobilization, and role changes that come with project work.",
      },
      {
        title: "Talent acquisition",
        description:
          "Recruitment strategy support for specialized and hard-to-fill construction-related roles.",
      },
      {
        title: "Employee relations",
        description:
          "Steady counsel when workplace issues require fairness, clarity, and experienced judgment.",
      },
    ],
  },
  {
    id: "smb",
    eyebrow: "Small & Midsize Business",
    title: "Strategic HR support without a full department",
    image: "/images/workspace.jpg",
    imageAlt: "Bright modern workspace with desks and natural light",
    intro:
      "Growing companies frequently need experienced HR perspective before they are ready for a complete in-house HR team. JSK provides flexible consulting support sized to that reality.",
    points: [
      {
        title: "Access to experienced HR consulting",
        description:
          "Senior-level guidance available when your organization needs thoughtful people decisions.",
      },
      {
        title: "Growth-related workforce planning",
        description:
          "Support aligning hiring, structure, and leadership development with business growth.",
      },
      {
        title: "HR strategy without a full department",
        description:
          "Practical systems and advice that help leaders manage people matters with confidence.",
      },
      {
        title: "Talent acquisition",
        description:
          "Help defining roles, refining hiring approaches, and strengthening candidate evaluation.",
      },
      {
        title: "Leadership support",
        description:
          "Coaching and advisory support for owners and managers navigating people challenges.",
      },
    ],
  },
] as const;

export const homepageIndustries = [
  {
    title: "Nuclear Industry",
    description:
      "Professional background in environments where operational discipline, workforce continuity, and careful employee communication are essential.",
    image: "/images/energy.jpg",
    href: "/industries#nuclear",
  },
  {
    title: "Construction",
    description:
      "Experience supporting people decisions in project-driven settings with evolving teams and leadership demands.",
    image: "/images/construction.jpg",
    href: "/industries#construction",
  },
  {
    title: "Complex Operations",
    description:
      "Comfort working with organizations where structure, accountability, and clear workplace practices matter deeply.",
    image: "/images/architecture.jpg",
    href: "/industries",
  },
  {
    title: "Small & Midsize Business",
    description:
      "Flexible HR consulting for growing organizations that need expertise without building an entire department.",
    image: "/images/workspace.jpg",
    href: "/industries#smb",
  },
] as const;
