// Professional Boundaries Training Presentation
// Formal Professional Development Content for Healthcare Workforce
// Central Michigan District Health Department

export type SlideType = 'title' | 'content' | 'poll' | 'scenario' | 'reflection' | 'table' | 'quote' | 'tree';

export interface BaseSlide {
  id: number;
  type: SlideType;
  section: string;
  sectionIndex: number;
  duration?: number;
}

export interface TitleSlide extends BaseSlide {
  type: 'title';
  title: string;
  subtitle?: string;
  quote?: string;
}

export interface ContentSlide extends BaseSlide {
  type: 'content';
  title: string;
  objective?: string;
  talkingPoints: string[];
  facilitatorNotes?: string[];
  interactive?: {
    type: 'poll' | 'question' | 'ask';
    prompt: string;
    options?: string[];
  };
}

export interface PollSlide extends BaseSlide {
  type: 'poll';
  title: string;
  scenario: string;
  question: string;
  options: string[];
  correctAnswer?: number;
  explanation: string;
  policyReference?: string;
  boundaryFocus?: string;
}

export interface ReflectionSlide extends BaseSlide {
  type: 'reflection';
  title: string;
  prompt: string;
  placeholder?: string;
  talkingPoints?: string[];
}

export interface TableSlide extends BaseSlide {
  type: 'table';
  title: string;
  headers: string[];
  rows: string[][];
  facilitatorNote?: string;
}

export interface QuoteSlide extends BaseSlide {
  type: 'quote';
  quote: string;
  author?: string;
  context?: string;
}

export interface TreeSlide extends BaseSlide {
  type: 'tree';
  title: string;
  steps: {
    number: number;
    title: string;
    description: string;
  }[];
  facilitatorNotes?: string[];
}

export type Slide = TitleSlide | ContentSlide | PollSlide | ReflectionSlide | TableSlide | QuoteSlide | TreeSlide;

export const presentationSlides: Slide[] = [
  // Section 1: Opening & Framing (Slides 1-4)
  {
    id: 1,
    type: 'title',
    section: 'Opening & Framing',
    sectionIndex: 1,
    duration: 2,
    title: `The Story We're Telling Ourselves`,
    subtitle: 'Professional Boundaries Training',
    quote: 'CMDHD • Facilitator: Simeon Bowman – MOODMNKY LLC'
  },
  {
    id: 2,
    type: 'content',
    section: 'Opening & Framing',
    sectionIndex: 1,
    duration: 2,
    title: 'Why Boundaries Matter',
    objective: 'Link emotional reflection to ethical clarity',
    talkingPoints: [
      'Boundaries create predictability. Predictability builds trust. And trust is the foundation of care.',
      'In small communities, boundaries can blur easily—this training helps us navigate those overlaps with integrity.',
      'Clarity is kindness. It reduces confusion for both staff and clients.',
      'Boundaries protect both our clients and ourselves from harm or misunderstanding.'
    ],
    facilitatorNotes: [
      `Ask: "Who here works in a smaller town where clients are also neighbors, classmates, or friends? This is where these principles really matter."`
    ]
  },
  {
    id: 3,
    type: 'content',
    section: 'Opening & Framing',
    sectionIndex: 1,
    duration: 2,
    title: 'Session Goals',
    objective: 'Orient participants to learning objectives',
    talkingPoints: [
      `We will cover bright lines, gray zones, and the supervision path.`,
      `You will learn a 5-step decision tree to help guide boundary choices.`,
      `We will interact—this is not a lecture. Expect quick polls and scenario reflections.`,
      `By the end, I will ask you to identify one small change you will commit to this month.`
    ]
  },
  {
    id: 4,
    type: 'content',
    section: 'Opening & Framing',
    sectionIndex: 1,
    duration: 1,
    title: 'Agenda & Expectations',
    talkingPoints: [
      '60 minutes total: presentation + polls + group discussion',
      'Use your phones for interactive responses (QR code on screen)',
      'Respect confidentiality: share principles, not personal cases',
      `Encourage openness—there are no "gotcha" questions here`
    ]
  },
  
  // Section 2: Policy Fundamentals (Slides 5-9)
  {
    id: 5,
    type: 'content',
    section: 'Policy Fundamentals',
    sectionIndex: 2,
    duration: 2,
    title: 'CMDHD Policy Overview',
    objective: 'Ground session in official policy authority',
    talkingPoints: [
      `CMDHD's Professional Boundaries Policy defines clear expectations to prevent role confusion.`,
      `This is not just good practice—it is required practice.`,
      'The policy draws on the NASW and ANA Codes of Ethics for guidance.',
      'These policies exist to protect clients, the agency, and you.'
    ],
    facilitatorNotes: [
      'Show visual of the CMDHD policy purpose statement'
    ]
  },
  {
    id: 6,
    type: 'content',
    section: 'Policy Fundamentals',
    sectionIndex: 2,
    duration: 2,
    title: 'Scope of Practice & Limits',
    objective: `Identify what's inside and outside your professional role`,
    talkingPoints: [
      'Operate within your defined scope—no transporting clients, running errands, or performing out-of-role favors.',
      'Doing more than your role allows can create dependency, liability, or ethical conflicts.',
      'Always ask yourself: Does this task belong to my professional role or my personal compassion?'
    ],
    interactive: {
      type: 'poll',
      prompt: `Would you drive a client to an appointment if it's "just down the road"?`,
      options: ['Yes', 'No', 'Maybe']
    },
    facilitatorNotes: [
      `Teach-back: Cite policy clause §2 and explain why it's a clear boundary`
    ]
  },
  {
    id: 7,
    type: 'content',
    section: 'Policy Fundamentals',
    sectionIndex: 2,
    duration: 2,
    title: 'Ethical Frameworks',
    objective: 'Connect policy to universal ethics principles',
    talkingPoints: [
      'NASW 1.06 and ANA 2.3 emphasize avoiding conflicts of interest and maintaining objectivity.',
      'Five principles: Autonomy, Beneficence, Nonmaleficence, Fidelity, Justice.',
      'Professional ethics transcend our individual values—they create consistency.'
    ]
  },
  {
    id: 8,
    type: 'content',
    section: 'Policy Fundamentals',
    sectionIndex: 2,
    duration: 2,
    title: 'Conflicts of Interest & Dual Relationships',
    objective: 'Normalize supervision and referral when overlaps occur',
    talkingPoints: [
      'In small counties, dual relationships are inevitable—how we manage them defines professionalism.',
      'If you know a client socially, disclose it immediately to your supervisor.',
      'Transparency protects you and supports equitable service.',
      `Example: A cousin's friend becomes your client—pause, disclose, and transfer if needed.`
    ]
  },
  {
    id: 9,
    type: 'content',
    section: 'Policy Fundamentals',
    sectionIndex: 2,
    duration: 2,
    title: 'Supervisor Escalation Path',
    objective: `Model CMDHD's supervision process`,
    talkingPoints: [
      `When unsure—do not decide alone.`,
      `Supervision is not punishment—it is a safeguard for both parties.`,
      'Document your consults: who, when, what advice was given.'
    ],
    facilitatorNotes: [
      '5-Step Decision Tree preview'
    ]
  },

  // Section 3: Social & Relational Boundaries (Slides 10-13)
  {
    id: 10,
    type: 'content',
    section: 'Social & Relational Boundaries',
    sectionIndex: 3,
    duration: 2,
    title: 'Pre-Existing Relationships',
    objective: 'Address blurred lines between personal and professional roles',
    talkingPoints: [
      'Transparency is key. If a relationship existed before services began, report it.',
      'Friendship, romantic, business, or familial ties = disclosure.',
      `We cannot ethically treat people we have ongoing personal relationships with.`
    ]
  },
  {
    id: 11,
    type: 'content',
    section: 'Social & Relational Boundaries',
    sectionIndex: 3,
    duration: 2,
    title: 'Social Media & Digital Contact',
    objective: 'Clarify online conduct',
    talkingPoints: [
      'No friending, liking, or following clients or caregivers.',
      'Digital contact can easily blur confidentiality and boundaries.',
      'Even an innocent post can reveal protected information.'
    ],
    interactive: {
      type: 'poll',
      prompt: `Would you accept a friend request from a former client's parent?`,
      options: ['Yes', 'No', 'Not sure']
    }
  },
  {
    id: 12,
    type: 'content',
    section: 'Social & Relational Boundaries',
    sectionIndex: 3,
    duration: 2,
    title: 'Over- or Under-Involvement',
    objective: 'Recognize and self-correct relational imbalances',
    talkingPoints: [
      'Over-involvement looks like rescuing, favoritism, or working beyond hours.',
      'Under-involvement looks like avoidance, irritation, or detachment.',
      'Both harm trust and distort the professional alliance.',
      'Supervision is the reset mechanism.'
    ]
  },
  {
    id: 13,
    type: 'content',
    section: 'Social & Relational Boundaries',
    sectionIndex: 3,
    duration: 2,
    title: 'Emotional Awareness',
    objective: 'Foster mindfulness of personal triggers',
    talkingPoints: [
      'Your emotional state is data, not a flaw.',
      `Feeling defensive or overprotective? That is a cue to check boundaries.`,
      'Emotional awareness prevents unconscious overreach.'
    ]
  },

  // Section 4: Communication Standards (Slides 14-17)
  {
    id: 14,
    type: 'content',
    section: 'Communication Standards',
    sectionIndex: 4,
    duration: 1.5,
    title: 'Professional Language',
    objective: 'Promote clarity and neutrality',
    talkingPoints: [
      'Words shape perception.',
      'Avoid jargon, sarcasm, or casual slang with clients.',
      'Speak to empower, not to judge.',
      'Instead of: "You should be doing X."',
      `Say: "Let's explore what is worked well for you."`
    ]
  },
  {
    id: 15,
    type: 'content',
    section: 'Communication Standards',
    sectionIndex: 4,
    duration: 1.5,
    title: 'Identity & Pronoun Use',
    objective: 'Uphold respect and inclusivity',
    talkingPoints: [
      `Use clients' preferred names and pronouns in all documentation.`,
      `If you're unsure, politely ask once and record it.`,
      'This is about dignity and respect, not personal belief.'
    ]
  },
  {
    id: 16,
    type: 'content',
    section: 'Communication Standards',
    sectionIndex: 4,
    duration: 2,
    title: 'Avoiding Controversial Topics',
    objective: 'Maintain neutrality on religion/politics',
    talkingPoints: [
      `We do not bring clients into our worldview.`,
      'Redirect if political or religious discussion arises.',
      'Focus on client needs, not opinion debates.',
      `Script: "That is an important topic, but let's keep our focus on your goals today."`
    ]
  },
  {
    id: 17,
    type: 'content',
    section: 'Communication Standards',
    sectionIndex: 4,
    duration: 1.5,
    title: 'Limited Self-Disclosure',
    objective: 'Manage emotional transparency',
    talkingPoints: [
      'Share personal stories only when they benefit the client.',
      'Avoid using self-disclosure to meet your own emotional needs.',
      'Ask: Who is this helping—me or them?'
    ]
  },

  // Section 5: Operational Policies (Slides 18-21)
  {
    id: 18,
    type: 'content',
    section: 'Operational Policies',
    sectionIndex: 5,
    duration: 2,
    title: 'Physical Boundaries & Consent',
    talkingPoints: [
      'Always ask before initiating touch.',
      'Limit physical contact to the scope of your role.',
      'Even well-intentioned comfort can misfire.'
    ],
    interactive: {
      type: 'ask',
      prompt: 'Scenario: A grieving client reaches for a hug. What do you do?'
    }
  },
  {
    id: 19,
    type: 'content',
    section: 'Operational Policies',
    sectionIndex: 5,
    duration: 2,
    title: 'Work Hours & Service Scope',
    talkingPoints: [
      'No off-hour services without supervisor pre-approval.',
      'Texting after hours seems caring but can create dependency.',
      'Keep interactions within work platforms and documented.'
    ]
  },
  {
    id: 20,
    type: 'content',
    section: 'Operational Policies',
    sectionIndex: 5,
    duration: 2,
    title: 'Gifts & Gratuities',
    talkingPoints: [
      'No gifts—period—unless under $25 and non-personal.',
      'Always decline politely and explain agency policy.',
      `Script: "I appreciate the thought, but CMDHD policy prevents me from accepting gifts."`
    ],
    interactive: {
      type: 'poll',
      prompt: 'Client brings you cookies—what do you do?',
      options: ['Accept them', 'Decline politely', 'Share with team', 'Not sure']
    }
  },
  {
    id: 21,
    type: 'content',
    section: 'Operational Policies',
    sectionIndex: 5,
    duration: 2,
    title: 'Documentation & Confidentiality',
    talkingPoints: [
      'Document boundaries as part of ethical care.',
      `If you decline a client's request, note it neutrally.`,
      'Never write emotions; write actions and facts.'
    ]
  },

  // Section 6: Interactive Reflection (Slides 22-23)
  {
    id: 22,
    type: 'reflection',
    section: 'Interactive Reflection',
    sectionIndex: 6,
    duration: 2,
    title: `The Story I'm Telling Myself`,
    prompt: 'Boundaries begin with self-awareness. Write one sentence:',
    placeholder: `The story I'm telling myself about boundaries is...`,
    talkingPoints: [
      'You can submit anonymously—some will appear as a live word cloud.'
    ]
  },
  {
    id: 23,
    type: 'reflection',
    section: 'Interactive Reflection',
    sectionIndex: 6,
    duration: 1.5,
    title: 'Personal Self-Check',
    prompt: 'Which emotion signals your boundaries are stretching?',
    placeholder: 'Guilt, irritation, urgency, something else?',
    talkingPoints: [
      'Awareness of those cues prevents ethical drift.'
    ]
  },

  // Section 7: Quick Polls & Scenarios (Slides 24-29)
  {
    id: 24,
    type: 'table',
    section: 'Quick Polls & Scenarios',
    sectionIndex: 7,
    duration: 1,
    title: 'Six Mini Scenarios Overview',
    headers: ['Scenario', 'Boundary Focus', 'Key Teaching Point'],
    rows: [
      [`It is Just a Ride`, 'Scope', 'Out-of-role favors create liability.'],
      ['Texting After Hours', 'Work Hours', 'Boundary = documented, scheduled contact.'],
      ['Cookies as Thanks', 'Gifts', 'Decline graciously; explain policy.'],
      ['Same Church', 'Dual Role', 'Disclose, document, reassign.'],
      ['Friend Request', 'Social Media', 'Prohibited without supervisor consult.'],
      ['Comforting Hug', 'Consent', 'Ask permission; keep within professional scope.']
    ],
    facilitatorNote: 'After each poll, reveal CMDHD policy citation and one-sentence rationale.'
  },
  {
    id: 25,
    type: 'poll',
    section: 'Quick Polls & Scenarios',
    sectionIndex: 7,
    duration: 1.5,
    title: `Scenario 1: It's Just a Ride`,
    scenario: `A client asks if you can drive them to a medical appointment "just down the road" because their ride fell through.`,
    question: 'What should you do?',
    options: [
      `Drive them—it's an emergency`,
      'Politely decline and help arrange Medicaid transport',
      'Ask your supervisor first',
      'Drive them this one time but tell them not to ask again'
    ],
    correctAnswer: 1,
    explanation: 'Transporting clients is outside your professional scope. Help arrange appropriate transportation instead.',
    policyReference: 'Policy §2: Scope of Practice',
    boundaryFocus: 'Scope of Practice'
  },
  {
    id: 26,
    type: 'poll',
    section: 'Quick Polls & Scenarios',
    sectionIndex: 7,
    duration: 1.5,
    title: 'Scenario 2: Texting After Hours',
    scenario: 'A client texts you at 9 PM with a question about their treatment plan.',
    question: `What's the best response?`,
    options: [
      'Respond immediately to show you care',
      'Respond the next business day through proper channels',
      'Ignore it completely',
      'Tell them never to contact you after hours'
    ],
    correctAnswer: 1,
    explanation: 'Maintain professional boundaries by keeping communication within work hours and documented channels.',
    policyReference: 'Policy §9: Work Hours & Service Scope',
    boundaryFocus: 'Work Hours'
  },
  {
    id: 27,
    type: 'poll',
    section: 'Quick Polls & Scenarios',
    sectionIndex: 7,
    duration: 1.5,
    title: 'Scenario 3: Cookies as Thanks',
    scenario: 'A grateful client brings you homemade cookies to thank you for your help.',
    question: 'What should you do?',
    options: [
      `Accept them—they're just cookies`,
      'Decline politely and explain agency policy',
      'Accept and share with the team',
      `Accept but don't tell anyone`
    ],
    correctAnswer: 1,
    explanation: 'Gifts should be declined to maintain professional boundaries and avoid favoritism.',
    policyReference: 'Policy §14: Gifts & Gratuities',
    boundaryFocus: 'Gifts'
  },
  {
    id: 28,
    type: 'poll',
    section: 'Quick Polls & Scenarios',
    sectionIndex: 7,
    duration: 1.5,
    title: 'Scenario 4: Same Church',
    scenario: 'You discover a new client attends the same church where you volunteer every Sunday.',
    question: `What's your first step?`,
    options: [
      `Continue services—it's fine if you're both discreet`,
      'Disclose to supervisor immediately and discuss reassignment',
      `Ask the client if they're comfortable`,
      'Switch to a different church'
    ],
    correctAnswer: 1,
    explanation: 'Dual relationships require immediate disclosure to your supervisor for proper handling.',
    policyReference: 'Policy §4: Conflicts of Interest',
    boundaryFocus: 'Dual Relationships'
  },
  {
    id: 29,
    type: 'poll',
    section: 'Quick Polls & Scenarios',
    sectionIndex: 7,
    duration: 1.5,
    title: 'Scenario 5: Friend Request',
    scenario: 'A former client (discharged 6 months ago) sends you a Facebook friend request.',
    question: 'Should you accept?',
    options: [
      `Yes—they're no longer a client`,
      'No—professional boundaries continue after discharge',
      'Ask them to wait one year',
      'Accept but limit what they can see'
    ],
    correctAnswer: 1,
    explanation: 'Professional boundaries extend beyond the active service period to protect both parties.',
    policyReference: 'Policy §6: Social Media',
    boundaryFocus: 'Social Media'
  },

  // Section 8: Gray Zone Lab (Slides 30-31)
  {
    id: 30,
    type: 'content',
    section: 'Gray Zone Lab',
    sectionIndex: 8,
    duration: 5,
    title: 'County-Specific Scenarios',
    talkingPoints: [
      'Each county faces unique relational challenges.',
      'Form small groups by county and discuss your assigned scenario:',
      '• Arenac: Everyone knows everyone',
      '• Clare/Gladwin: Limited resources',
      '• Isabella: Campus and tribal contexts',
      '• Osceola/Roscommon: Rural overlaps'
    ],
    facilitatorNotes: [
      'Allow 3-4 minutes for group discussion'
    ]
  },
  {
    id: 31,
    type: 'content',
    section: 'Gray Zone Lab',
    sectionIndex: 8,
    duration: 3,
    title: 'Shared Lessons',
    talkingPoints: [
      'Despite local differences, supervision remains the universal safeguard.',
      'Every gray area has a policy touchpoint when you know where to look.'
    ],
    facilitatorNotes: [
      'Activity: Groups share one insight each'
    ]
  },

  // Section 9: Decision Tree & Documentation (Slides 32-34)
  {
    id: 32,
    type: 'tree',
    section: 'Decision Tree & Documentation',
    sectionIndex: 9,
    duration: 3,
    title: '5-Step Decision Tree',
    steps: [
      {
        number: 1,
        title: 'Check Role & Scope',
        description: 'Is this within my professional responsibilities?'
      },
      {
        number: 2,
        title: 'Scan for Conflict',
        description: 'Do I have any pre-existing or dual relationships?'
      },
      {
        number: 3,
        title: 'Confirm Consent',
        description: 'Have I asked permission if physical contact is involved?'
      },
      {
        number: 4,
        title: 'Check Time & Channel',
        description: 'Is this during work hours and through proper channels?'
      },
      {
        number: 5,
        title: 'Document & Debrief',
        description: 'Have I documented the interaction and consulted as needed?'
      }
    ],
    facilitatorNotes: [
      'This tool prevents decision paralysis and standardizes care.',
      `If you can't answer "yes" to all five, it's time to call supervision.`
    ]
  },
  {
    id: 33,
    type: 'content',
    section: 'Decision Tree & Documentation',
    sectionIndex: 9,
    duration: 2,
    title: 'Supervisor Communication Script',
    talkingPoints: [
      'Keep it concise and factual.',
      'Use structured communication: issue → clause → request for guidance.',
      `Example: "Hi [Supervisor], I'm assigned to a client who attends my church. I wanted to discuss potential dual relationship concerns under the boundaries policy."`
    ]
  },
  {
    id: 34,
    type: 'content',
    section: 'Decision Tree & Documentation',
    sectionIndex: 9,
    duration: 2,
    title: 'Documentation Template Walk-Through',
    talkingPoints: [
      'Show neutral language note example.',
      'Highlight the importance of citing policy sections.',
      `Charting shows accountability; it is your safety net.`
    ]
  },

  // Section 10: Closing & Commitments (Slides 35-38)
  {
    id: 35,
    type: 'content',
    section: 'Closing & Commitments',
    sectionIndex: 10,
    duration: 1.5,
    title: 'Summary of Key Points',
    talkingPoints: [
      'Boundaries are clarity, not control.',
      'Use supervision early and often.',
      'Remember: bright lines, gray zones, and supervision path.'
    ]
  },
  {
    id: 36,
    type: 'reflection',
    section: 'Closing & Commitments',
    sectionIndex: 10,
    duration: 2,
    title: 'Personal Commitment Statement',
    prompt: 'This month, I will strengthen my professional boundaries by:',
    placeholder: `Share one specific action you will take...`,
    talkingPoints: [
      'Encourage real, specific examples.'
    ]
  },
  {
    id: 37,
    type: 'content',
    section: 'Closing & Commitments',
    sectionIndex: 10,
    duration: 1,
    title: 'Evaluation & Feedback',
    talkingPoints: [
      'Your feedback improves future trainings.',
      'QR code links to evaluation form.',
      `What word describes what you're leaving with?`
    ]
  },
  {
    id: 38,
    type: 'quote',
    section: 'Closing & Commitments',
    sectionIndex: 10,
    duration: 0.5,
    quote: `Boundaries do not limit compassion—they define it.`,
    context: 'Thank you for your commitment to ethical, professional care. Our clients, and our communities, rely on your clarity and compassion.'
  }
];

export const presentationSections = [
  'Opening & Framing',
  'Policy Fundamentals',
  'Social & Relational Boundaries',
  'Communication Standards',
  'Operational Policies',
  'Interactive Reflection',
  'Quick Polls & Scenarios',
  'Gray Zone Lab',
  'Decision Tree & Documentation',
  'Closing & Commitments'
];

export function getSlidesBySection(section: string): Slide[] {
  return presentationSlides.filter(slide => slide.section === section);
}

export function getTotalDuration(): number {
  return presentationSlides.reduce((total, slide) => total + (slide.duration || 0), 0);
}
