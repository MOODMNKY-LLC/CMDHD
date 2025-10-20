import {
  BookOpen,
  FileText,
  Users,
  MessageCircle,
  ClipboardList,
  Heart,
  Activity,
  Lightbulb,
  GitBranch,
  CheckCircle,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface TrainingSlide {
  id: string;
  title: string;
  href: string;
  description?: string;
}

export interface TrainingModule {
  id: string;
  title: string;
  icon: LucideIcon;
  description: string;
  items: TrainingSlide[];
}

export const trainingModules: TrainingModule[] = [
  {
    id: "opening",
    title: "Opening & Framing",
    icon: BookOpen,
    description: "Introduction and context for the training",
    items: [
      {
        id: "title",
        title: "The Story We're Telling Ourselves",
        href: "/protected/training/opening/title",
        description: "Understanding our internal narratives about boundaries"
      },
      {
        id: "why-boundaries",
        title: "Why Boundaries Matter",
        href: "/protected/training/opening/why-boundaries",
        description: "The importance of professional boundaries in rural health"
      },
      {
        id: "goals",
        title: "Session Goals",
        href: "/protected/training/opening/goals",
        description: "What we aim to accomplish today"
      },
      {
        id: "agenda",
        title: "Agenda & Expectations",
        href: "/protected/training/opening/agenda",
        description: "Training structure and participant expectations"
      },
    ],
  },
  {
    id: "policy",
    title: "Policy Fundamentals",
    icon: FileText,
    description: "Core CMDHD policies and ethical frameworks",
    items: [
      {
        id: "overview",
        title: "CMDHD Policy Overview",
        href: "/protected/training/policy/overview",
        description: "Comprehensive overview of professional boundaries policy"
      },
      {
        id: "scope",
        title: "Scope of Practice & Limits",
        href: "/protected/training/policy/scope",
        description: "Understanding professional role boundaries"
      },
      {
        id: "ethics",
        title: "Ethical Frameworks",
        href: "/protected/training/policy/ethics",
        description: "NASW, ANA, and other professional codes"
      },
      {
        id: "conflicts",
        title: "Conflict of Interest & Dual Relationships",
        href: "/protected/training/policy/conflicts",
        description: "Identifying and managing conflicts"
      },
      {
        id: "supervision",
        title: "Supervisor Escalation Path",
        href: "/protected/training/policy/supervision",
        description: "When and how to involve supervisors"
      },
    ],
  },
  {
    id: "social",
    title: "Social & Relational Boundaries",
    icon: Users,
    description: "Managing personal and professional relationships",
    items: [
      {
        id: "pre-existing",
        title: "Pre-Existing Personal Relationships",
        href: "/protected/training/social/pre-existing",
        description: "Handling relationships that existed before employment"
      },
      {
        id: "social-media",
        title: "Social Media & Digital Contact",
        href: "/protected/training/social/social-media",
        description: "Online boundaries and digital communication"
      },
      {
        id: "involvement",
        title: "Over/Under-Involvement",
        href: "/protected/training/social/involvement",
        description: "Finding the right balance in client relationships"
      },
      {
        id: "emotional",
        title: "Emotional Awareness",
        href: "/protected/training/social/emotional",
        description: "Recognizing emotional dynamics and transference"
      },
    ],
  },
  {
    id: "communication",
    title: "Communication Standards",
    icon: MessageCircle,
    description: "Professional language and interaction guidelines",
    items: [
      {
        id: "language",
        title: "Professional Language",
        href: "/protected/training/communication/language",
        description: "Appropriate professional communication"
      },
      {
        id: "identity",
        title: "Identity & Pronoun Use",
        href: "/protected/training/communication/identity",
        description: "Respectful and affirming communication"
      },
      {
        id: "topics",
        title: "Avoiding Controversial Topics",
        href: "/protected/training/communication/topics",
        description: "Maintaining neutrality on sensitive subjects"
      },
      {
        id: "disclosure",
        title: "Limited Self-Disclosure",
        href: "/protected/training/communication/disclosure",
        description: "When and how to share personal information"
      },
    ],
  },
  {
    id: "operational",
    title: "Operational Policies",
    icon: ClipboardList,
    description: "Day-to-day operational boundaries",
    items: [
      {
        id: "physical",
        title: "Physical Boundaries & Consent",
        href: "/protected/training/operational/physical",
        description: "Touch, space, and physical interaction guidelines"
      },
      {
        id: "hours",
        title: "Work Hours & Service Scope",
        href: "/protected/training/operational/hours",
        description: "Time boundaries and scope limitations"
      },
      {
        id: "gifts",
        title: "Gifts & Gratuities",
        href: "/protected/training/operational/gifts",
        description: "Policy on accepting gifts from clients"
      },
      {
        id: "documentation",
        title: "Documentation & Confidentiality",
        href: "/protected/training/operational/documentation",
        description: "Record-keeping and privacy requirements"
      },
    ],
  },
  {
    id: "reflection",
    title: "Interactive Reflection",
    icon: Heart,
    description: "Personal awareness and self-assessment",
    items: [
      {
        id: "story",
        title: "The Story I'm Telling Myself",
        href: "/protected/training/reflection/story",
        description: "Examining our internal narratives"
      },
      {
        id: "self-check",
        title: "Personal Self-Check",
        href: "/protected/training/reflection/self-check",
        description: "Self-assessment tool for boundary awareness"
      },
    ],
  },
  {
    id: "scenarios",
    title: "Quick Polls & Scenarios",
    icon: Activity,
    description: "Interactive case studies and decision-making",
    items: [
      {
        id: "ride",
        title: "It's Just a Ride",
        href: "/protected/training/scenarios/ride",
        description: "Transportation request scenario"
      },
      {
        id: "texting",
        title: "Texting After Hours",
        href: "/protected/training/scenarios/texting",
        description: "Communication boundaries scenario"
      },
      {
        id: "cookies",
        title: "Cookies as Thanks",
        href: "/protected/training/scenarios/cookies",
        description: "Gift acceptance scenario"
      },
      {
        id: "church",
        title: "Same Church",
        href: "/protected/training/scenarios/church",
        description: "Community overlap scenario"
      },
      {
        id: "friend-request",
        title: "Friend Request",
        href: "/protected/training/scenarios/friend-request",
        description: "Social media boundaries scenario"
      },
      {
        id: "hug",
        title: "Comforting Hug",
        href: "/protected/training/scenarios/hug",
        description: "Physical boundaries scenario"
      },
    ],
  },
  {
    id: "gray-zone",
    title: "Gray Zone Lab",
    icon: Lightbulb,
    description: "Complex scenarios requiring deeper analysis",
    items: [
      {
        id: "county-groups",
        title: "County Group Scenarios",
        href: "/protected/training/gray-zone/county-groups",
        description: "Small group exercises by county"
      },
      {
        id: "shared-lessons",
        title: "Shared Lessons",
        href: "/protected/training/gray-zone/shared-lessons",
        description: "Insights and learning from group discussions"
      },
    ],
  },
  {
    id: "decision-tree",
    title: "Decision Tree & Documentation",
    icon: GitBranch,
    description: "Tools for decision-making and record-keeping",
    items: [
      {
        id: "overview",
        title: "Decision Tree Overview",
        href: "/protected/training/decision-tree/overview",
        description: "Step-by-step decision-making framework"
      },
      {
        id: "supervisor-script",
        title: "Supervisor Communication Script",
        href: "/protected/training/decision-tree/supervisor-script",
        description: "How to communicate boundary concerns"
      },
      {
        id: "documentation",
        title: "Documentation Template Walkthrough",
        href: "/protected/training/decision-tree/documentation",
        description: "Proper documentation of boundary situations"
      },
    ],
  },
  {
    id: "closing",
    title: "Closing & Commitments",
    icon: CheckCircle,
    description: "Summary and next steps",
    items: [
      {
        id: "summary",
        title: "Summary of Key Points",
        href: "/protected/training/closing/summary",
        description: "Review of main takeaways"
      },
      {
        id: "commitment",
        title: "Personal Commitment",
        href: "/protected/training/closing/commitment",
        description: "Individual action plans and pledges"
      },
      {
        id: "evaluation",
        title: "Evaluation & Feedback",
        href: "/protected/training/closing/evaluation",
        description: "Training assessment and feedback"
      },
    ],
  },
];

// Helper function to get all slides across all modules
export function getAllSlides(): TrainingSlide[] {
  return trainingModules.flatMap((module) => module.items);
}

// Helper function to find a specific slide
export function findSlide(moduleId: string, slideId: string): TrainingSlide | undefined {
  const trainingModule = trainingModules.find((m) => m.id === moduleId);
  return trainingModule?.items.find((item) => item.id === slideId);
}

// Helper function to get navigation context (previous/next)
export function getSlideNavigation(moduleId: string, slideId: string) {
  const allSlides = getAllSlides();
  const currentIndex = allSlides.findIndex(
    (slide) => slide.href === `/protected/training/${moduleId}/${slideId}`
  );

  return {
    previous: currentIndex > 0 ? allSlides[currentIndex - 1] : null,
    next: currentIndex < allSlides.length - 1 ? allSlides[currentIndex + 1] : null,
    current: allSlides[currentIndex],
    progress: {
      current: currentIndex + 1,
      total: allSlides.length,
      percentage: Math.round(((currentIndex + 1) / allSlides.length) * 100),
    },
  };
}

