import { 
  BookOpen, 
  FileText, 
  Users, 
  MessageCircle, 
  ClipboardList, 
  Layers, 
  CheckCircle,
  Brain,
  HelpCircle,
  Scale,
  Award,
  type LucideIcon
} from "lucide-react";

export type TrainingSection = "presentation" | "interactive" | "information";

export interface TrainingModule {
  label: string;
  href: string;
}

export interface TrainingGroup {
  title: string;
  icon: LucideIcon;
  items: TrainingModule[];
}

export interface TrainingTeam {
  name: string;
  logo: LucideIcon;
  section: TrainingSection;
}

// Team Switcher Options
export const trainingTeams: TrainingTeam[] = [
  {
    name: "Presentation",
    logo: BookOpen,
    section: "presentation",
  },
  {
    name: "Interactive",
    logo: Brain,
    section: "interactive",
  },
  {
    name: "Information Index",
    logo: FileText,
    section: "information",
  },
];

// PRESENTATION SECTION - Linear Training Flow
export const presentationGroups: TrainingGroup[] = [
  {
    title: "Opening & Framing",
    icon: BookOpen,
    items: [
      { label: "The Story We're Telling Ourselves", href: "/presenter?module=opening-story" },
      { label: "Why Boundaries Matter", href: "/presenter?module=opening-why" },
      { label: "Session Goals", href: "/presenter?module=opening-goals" },
      { label: "Agenda & Expectations", href: "/presenter?module=opening-agenda" },
    ],
  },
  {
    title: "Policy Fundamentals",
    icon: FileText,
    items: [
      { label: "CMDHD Policy Overview", href: "/presenter?module=policy-overview" },
      { label: "Scope of Practice & Limits", href: "/presenter?module=policy-scope" },
      { label: "Ethical Frameworks", href: "/presenter?module=policy-ethics" },
      { label: "Conflict of Interest & Dual Relationships", href: "/presenter?module=policy-conflicts" },
      { label: "Supervisor Escalation Path", href: "/presenter?module=policy-supervision" },
    ],
  },
  {
    title: "Social & Relational Boundaries",
    icon: Users,
    items: [
      { label: "Pre-Existing Personal Relationships", href: "/presenter?module=social-relationships" },
      { label: "Social Media & Digital Contact", href: "/presenter?module=social-media" },
      { label: "Over/Under-Involvement", href: "/presenter?module=social-involvement" },
      { label: "Emotional Awareness", href: "/presenter?module=social-emotional" },
    ],
  },
  {
    title: "Communication Standards",
    icon: MessageCircle,
    items: [
      { label: "Professional Language", href: "/presenter?module=comm-language" },
      { label: "Identity & Pronoun Use", href: "/presenter?module=comm-identity" },
      { label: "Avoiding Controversial Topics", href: "/presenter?module=comm-topics" },
      { label: "Limited Self-Disclosure", href: "/presenter?module=comm-disclosure" },
    ],
  },
  {
    title: "Operational Policies",
    icon: ClipboardList,
    items: [
      { label: "Physical Boundaries & Consent", href: "/presenter?module=ops-physical" },
      { label: "Work Hours & Service Scope", href: "/presenter?module=ops-hours" },
      { label: "Gifts & Gratuities", href: "/presenter?module=ops-gifts" },
      { label: "Documentation & Confidentiality", href: "/presenter?module=ops-docs" },
    ],
  },
  {
    title: "Decision Tree & Documentation",
    icon: Scale,
    items: [
      { label: "Decision Tree Overview", href: "/presenter?module=decision-tree" },
      { label: "Supervisor Communication Script", href: "/presenter?module=decision-script" },
      { label: "Documentation Template Walkthrough", href: "/presenter?module=decision-template" },
    ],
  },
  {
    title: "Closing & Commitments",
    icon: Award,
    items: [
      { label: "Summary of Key Points", href: "/presenter?module=closing-summary" },
      { label: "Personal Commitment", href: "/presenter?module=closing-commitment" },
      { label: "Evaluation & Feedback", href: "/presenter?module=closing-eval" },
    ],
  },
];

// INTERACTIVE SECTION - Hands-on Activities
export const interactiveGroups: TrainingGroup[] = [
  {
    title: "Interactive Reflection",
    icon: Brain,
    items: [
      { label: "The Story I'm Telling Myself", href: "/presenter?module=reflect-story" },
      { label: "Personal Self-Check", href: "/presenter?module=reflect-check" },
    ],
  },
  {
    title: "Quick Polls & Scenarios",
    icon: HelpCircle,
    items: [
      { label: "Scenario: It's Just a Ride", href: "/presenter?module=scenario-ride" },
      { label: "Scenario: Texting After Hours", href: "/presenter?module=scenario-texting" },
      { label: "Scenario: Cookies as Thanks", href: "/presenter?module=scenario-cookies" },
      { label: "Scenario: Same Church", href: "/presenter?module=scenario-church" },
      { label: "Scenario: Friend Request", href: "/presenter?module=scenario-friend" },
      { label: "Scenario: Comforting Hug", href: "/presenter?module=scenario-hug" },
    ],
  },
  {
    title: "Gray Zone Lab",
    icon: Layers,
    items: [
      { label: "County Group Scenarios", href: "/presenter?module=grayzone-county" },
      { label: "Shared Lessons", href: "/presenter?module=grayzone-lessons" },
    ],
  },
];

// INFORMATION INDEX - Reference Materials
export const informationGroups: TrainingGroup[] = [
  {
    title: "Policy Documents",
    icon: FileText,
    items: [
      { label: "Full CMDHD Policy", href: "/policy" },
      { label: "NASW Code of Ethics", href: "https://www.socialworkers.org/About/Ethics/Code-of-Ethics" },
      { label: "ANA Code of Ethics", href: "https://www.nursingworld.org/practice-policy/nursing-excellence/ethics/" },
    ],
  },
  {
    title: "Training Resources",
    icon: BookOpen,
    items: [
      { label: "All Training Materials", href: "/resources" },
      { label: "Practice Scenarios", href: "/scenarios" },
      { label: "County Demographics", href: "/counties" },
    ],
  },
  {
    title: "Support & Contact",
    icon: Users,
    items: [
      { label: "Supervisor Escalation Guide", href: "/presenter?module=info-escalation" },
      { label: "Documentation Templates", href: "/presenter?module=info-templates" },
      { label: "Submit Feedback", href: "/feedback" },
    ],
  },
];

// Helper function to get groups based on active team
export function getGroupsForSection(section: TrainingSection): TrainingGroup[] {
  switch (section) {
    case "presentation":
      return presentationGroups;
    case "interactive":
      return interactiveGroups;
    case "information":
      return informationGroups;
    default:
      return presentationGroups;
  }
}

