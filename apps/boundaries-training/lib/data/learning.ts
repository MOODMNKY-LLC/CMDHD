import {
  Target,
  MessageCircle,
  Heart,
  ClipboardCheck,
  LogIn,
  PlayCircle,
  Pencil,
  Shield,
  FileText,
  Users,
  Lightbulb,
  type LucideIcon
} from "lucide-react";

export interface LearningObjective {
  id: number;
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface TrainingStep {
  id: number;
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface LearningOutcome {
  icon: LucideIcon;
  text: string;
}

export const learningObjectives: LearningObjective[] = [
  {
    id: 1,
    icon: Target,
    title: "Recognize Boundaries",
    description: "Understand CMDHD's expectations and the reasoning behind them. Learn to identify boundary situations before they become challenges."
  },
  {
    id: 2,
    icon: MessageCircle,
    title: "Respond Professionally",
    description: "Master practical scripts and decision trees for navigating tricky situations. Know what to say, when to say it, and how to maintain respect."
  },
  {
    id: 3,
    icon: Heart,
    title: "Reflect & Reset",
    description: "Build self-awareness and emotional resilience. Develop strategies for managing boundary stress and preventing compassion fatigue."
  },
  {
    id: 4,
    icon: ClipboardCheck,
    title: "Apply & Document",
    description: "Translate training into daily practice through proper charting, supervision consultation, and consistent application across client interactions."
  }
];

export const trainingSteps: TrainingStep[] = [
  {
    id: 1,
    icon: LogIn,
    title: "Log In or Register",
    description: "Access the training portal securely with your CMDHD credentials or create a new account."
  },
  {
    id: 2,
    icon: PlayCircle,
    title: "Complete Interactive Module",
    description: "Engage with a 60-minute multimedia experience including scenarios, reflection prompts, and knowledge checks."
  },
  {
    id: 3,
    icon: Pencil,
    title: "Reflect and Submit Feedback",
    description: "Complete a brief evaluation and optional reflection statement to personalize your learning."
  }
];

export const learningOutcomes: LearningOutcome[] = [
  {
    icon: Shield,
    text: "Define professional boundaries and understand their critical importance"
  },
  {
    icon: FileText,
    text: "Review policy rules: scope of practice, conflicts of interest, social media guidelines"
  },
  {
    icon: Users,
    text: "Practice real-world scenarios with evidence-based response strategies"
  },
  {
    icon: Lightbulb,
    text: "Develop proactive communication skills with empathy and clarity"
  },
  {
    icon: Heart,
    text: "Learn self-care strategies and when to consult supervisors"
  }
];

