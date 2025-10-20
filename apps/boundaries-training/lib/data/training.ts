import {
  BookOpen,
  FileText,
  Users,
  MessageCircle,
  ClipboardList,
  Lightbulb,
  HelpCircle,
  Layers,
  GitBranch,
  CheckCircle,
  type LucideIcon,
} from "lucide-react";

export interface TrainingItem {
  label: string;
  href: string;
  description?: string;
}

export interface TrainingSection {
  title: string;
  icon: LucideIcon;
  items: TrainingItem[];
}

export const trainingData: TrainingSection[] = [
  {
    title: "Opening & Framing",
    icon: BookOpen,
    items: [
      {
        label: "The Story We're Telling Ourselves",
        href: "/training/opening/story",
        description: "Introduction to the training framework",
      },
      {
        label: "Why Boundaries Matter",
        href: "/training/opening/why-boundaries",
        description: "Understanding the importance of professional boundaries",
      },
      {
        label: "Session Goals",
        href: "/training/opening/goals",
        description: "What we aim to achieve together",
      },
      {
        label: "Agenda & Expectations",
        href: "/training/opening/agenda",
        description: "Session structure and guidelines",
      },
    ],
  },
  {
    title: "Policy Fundamentals",
    icon: FileText,
    items: [
      {
        label: "CMDHD Policy Overview",
        href: "/training/policy/overview",
        description: "Core policy framework and purpose",
      },
      {
        label: "Scope of Practice & Limits",
        href: "/training/policy/scope",
        description: "Understanding professional role boundaries",
      },
      {
        label: "Ethical Frameworks",
        href: "/training/policy/ethics",
        description: "Professional ethics and standards",
      },
      {
        label: "Conflict of Interest & Dual Relationships",
        href: "/training/policy/conflicts",
        description: "Identifying and managing conflicts",
      },
      {
        label: "Supervisor Escalation Path",
        href: "/training/policy/supervision",
        description: "When and how to escalate concerns",
      },
    ],
  },
  {
    title: "Social & Relational Boundaries",
    icon: Users,
    items: [
      {
        label: "Pre-Existing Personal Relationships",
        href: "/training/social/pre-existing",
        description: "Navigating community connections",
      },
      {
        label: "Social Media & Digital Contact",
        href: "/training/social/digital",
        description: "Professional boundaries online",
      },
      {
        label: "Over/Under-Involvement",
        href: "/training/social/involvement",
        description: "Finding the right balance",
      },
      {
        label: "Emotional Awareness",
        href: "/training/social/emotional",
        description: "Managing professional relationships",
      },
    ],
  },
  {
    title: "Communication Standards",
    icon: MessageCircle,
    items: [
      {
        label: "Professional Language",
        href: "/training/communication/language",
        description: "Appropriate communication practices",
      },
      {
        label: "Identity & Pronoun Use",
        href: "/training/communication/identity",
        description: "Respectful and inclusive communication",
      },
      {
        label: "Avoiding Controversial Topics",
        href: "/training/communication/controversial",
        description: "Maintaining professional neutrality",
      },
      {
        label: "Limited Self-Disclosure",
        href: "/training/communication/disclosure",
        description: "Professional sharing guidelines",
      },
    ],
  },
  {
    title: "Operational Policies",
    icon: ClipboardList,
    items: [
      {
        label: "Physical Boundaries & Consent",
        href: "/training/operational/physical",
        description: "Appropriate physical interactions",
      },
      {
        label: "Work Hours & Service Scope",
        href: "/training/operational/hours",
        description: "Time and service boundaries",
      },
      {
        label: "Gifts & Gratuities",
        href: "/training/operational/gifts",
        description: "Policy on accepting items from clients",
      },
      {
        label: "Documentation & Confidentiality",
        href: "/training/operational/documentation",
        description: "Record-keeping and privacy standards",
      },
    ],
  },
  {
    title: "Interactive Reflection",
    icon: Lightbulb,
    items: [
      {
        label: "The Story I'm Telling Myself",
        href: "/training/reflection/story",
        description: "Personal reflection exercise",
      },
      {
        label: "Personal Self-Check",
        href: "/training/reflection/self-check",
        description: "Assessing your boundary awareness",
      },
    ],
  },
  {
    title: "Quick Polls & Scenarios",
    icon: HelpCircle,
    items: [
      {
        label: "It's Just a Ride",
        href: "/training/scenarios/ride",
        description: "Transportation boundary scenario",
      },
      {
        label: "Texting After Hours",
        href: "/training/scenarios/texting",
        description: "Communication timing scenario",
      },
      {
        label: "Cookies as Thanks",
        href: "/training/scenarios/cookies",
        description: "Gift acceptance scenario",
      },
      {
        label: "Same Church",
        href: "/training/scenarios/church",
        description: "Community connection scenario",
      },
      {
        label: "Friend Request",
        href: "/training/scenarios/friend-request",
        description: "Social media boundary scenario",
      },
      {
        label: "Comforting Hug",
        href: "/training/scenarios/hug",
        description: "Physical boundary scenario",
      },
    ],
  },
  {
    title: "Gray Zone Lab",
    icon: Layers,
    items: [
      {
        label: "County Group Scenarios",
        href: "/training/gray-zone/county-scenarios",
        description: "Regional challenge discussions",
      },
      {
        label: "Shared Lessons",
        href: "/training/gray-zone/shared-lessons",
        description: "Learning from collective experience",
      },
    ],
  },
  {
    title: "Decision Tree & Documentation",
    icon: GitBranch,
    items: [
      {
        label: "Decision Tree Overview",
        href: "/training/decision/tree",
        description: "Framework for boundary decisions",
      },
      {
        label: "Supervisor Communication Script",
        href: "/training/decision/communication",
        description: "How to raise concerns effectively",
      },
      {
        label: "Documentation Template Walkthrough",
        href: "/training/decision/documentation",
        description: "Recording boundary considerations",
      },
    ],
  },
  {
    title: "Closing & Commitments",
    icon: CheckCircle,
    items: [
      {
        label: "Summary of Key Points",
        href: "/training/closing/summary",
        description: "Reviewing core concepts",
      },
      {
        label: "Personal Commitment",
        href: "/training/closing/commitment",
        description: "Your professional pledge",
      },
      {
        label: "Evaluation & Feedback",
        href: "/training/closing/evaluation",
        description: "Share your training experience",
      },
    ],
  },
];

// Helper function to get all training items in order
export function getAllTrainingItems(): Array<TrainingItem & { section: string }> {
  return trainingData.flatMap((section) =>
    section.items.map((item) => ({
      ...item,
      section: section.title,
    }))
  );
}

// Helper function to get next/previous items
export function getAdjacentItems(currentHref: string) {
  const allItems = getAllTrainingItems();
  const currentIndex = allItems.findIndex((item) => item.href === currentHref);

  return {
    previous: currentIndex > 0 ? allItems[currentIndex - 1] : null,
    next: currentIndex < allItems.length - 1 ? allItems[currentIndex + 1] : null,
    current: allItems[currentIndex] || null,
  };
}

