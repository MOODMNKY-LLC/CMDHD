// Professional Boundaries Training Presentation
// Formal Professional Development Content for Healthcare Workforce
// Central Michigan District Health Department

export type SlideType = 'title' | 'content' | 'poll' | 'scenario' | 'reflection' | 'table' | 'quote' | 'tree';

// Policy reference for visual integration
export interface PolicyReference {
  section: string;        // e.g., "2", "2a", "4"
  title: string;         // e.g., "Scope of Practice"
  text: string;          // Full policy text from CMDHD document
  externalRef?: string;  // e.g., "NASW 1.06", "ANA 2.3"
}

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
  subtitle?: string;
  objective?: string;
  policyReference?: PolicyReference;  // Optional policy integration
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
    policyReference: {
      section: 'Purpose',
      title: 'Professional Boundaries Policy',
      text: 'To ensure professional conduct of staff in maintaining professional boundaries when providing services to clients. Professional boundaries are expectations that set a clear relationship between the client and staff, preventing role confusion.'
    },
    talkingPoints: [
      `CMDHD's Professional Boundaries Policy defines clear expectations to prevent role confusion between staff and clients.`,
      `This is not just good practice—it is required practice. All staff must follow these procedures.`,
      'The policy draws on the NASW Code of Ethics (Standard 1.06) and ANA Code of Ethics (Provision 2.3) for professional guidance.',
      'These policies exist to protect three critical stakeholders: our clients, CMDHD as an organization, and you as a professional.'
    ],
    facilitatorNotes: [
      'Emphasize that policy references will appear throughout the presentation',
      'Note that violations can result in disciplinary action per §15'
    ]
  },
  {
    id: 6,
    type: 'content',
    section: 'Policy Fundamentals',
    sectionIndex: 2,
    duration: 3,
    title: 'Scope of Practice & Limits',
    subtitle: 'Policy §2',
    objective: `Identify what is inside and outside your professional role`,
    policyReference: {
      section: '2',
      title: 'Scope of Practice',
      text: 'Staff will work only within their scope of practice for their defined role and will refer clients out as needed. This includes, but is not limited to, transporting clients in a vehicle, running errands for clients, and providing any other services not within staff scope of practice.'
    },
    talkingPoints: [
      'Operating within your defined scope is required practice. This means no transporting clients in your personal vehicle, no running errands, and no performing favors that fall outside your job description—even when these actions feel helpful.',
      'Exceeding your scope creates legal liability for you and CMDHD, fosters client dependency that undermines autonomy, and causes role confusion that weakens professional relationships.',
      'In rural settings, you will encounter situations where stepping outside your role seems like the obvious solution. The professional response maintains the boundary while connecting clients to appropriate resources.',
      'Always ask yourself: Does this request align with my CMDHD job description, or am I responding from personal compassion? Both matter, but only one is appropriate in your professional role.'
    ],
    interactive: {
      type: 'poll',
      prompt: `Would you drive a client to an appointment if it is "just down the road"?`,
      options: ['Yes', 'No', 'Maybe']
    },
    facilitatorNotes: [
      'After poll: Explain correct answer is "No" - refer to Medicaid transport, community resources',
      'Provide script: "I understand this is challenging. CMDHD policy prevents me from providing transportation, but I can help you arrange [Medicaid transport/community resources]."',
      'Emphasize: Boundary violations are a leading cause of professional disciplinary actions (NCSBN research)'
    ]
  },
  {
    id: 7,
    type: 'content',
    section: 'Policy Fundamentals',
    sectionIndex: 2,
    duration: 2,
    title: 'Ethical Frameworks',
    subtitle: 'Policy §3 | NASW 1.06 | ANA 2.3',
    objective: 'Connect policy to universal ethics principles',
    policyReference: {
      section: '3',
      title: 'Ethical Standards',
      text: 'Staff shall comply with the ethical standards set forth by their professional organizations, associations and/or other recognized standards within CMDHD.',
      externalRef: 'NASW 1.06, ANA 2.3'
    },
    talkingPoints: [
      'NASW Standard 1.06 and ANA Provision 2.3 both emphasize avoiding conflicts of interest and maintaining professional objectivity in all client relationships.',
      'Five ethical principles guide healthcare practice: Autonomy (client self-determination), Beneficence (doing good), Nonmaleficence (preventing harm), Fidelity (keeping promises), and Justice (fairness and equity).',
      'Professional ethics create consistency across diverse staff values. They transcend our individual beliefs to ensure all clients receive equitable, professional care regardless of who serves them.'
    ],
    facilitatorNotes: [
      'Emphasize: These are not arbitrary rules—they are based on decades of healthcare ethics research',
      'Note: CMDHD staff come from diverse professional backgrounds (nursing, social work, public health)—shared ethics create common ground'
    ]
  },
  {
    id: 8,
    type: 'content',
    section: 'Policy Fundamentals',
    sectionIndex: 2,
    duration: 2,
    title: 'Conflicts of Interest & Dual Relationships',
    subtitle: 'Policy §4 | NASW 1.06',
    objective: 'Normalize supervision and referral when overlaps occur',
    policyReference: {
      section: '4',
      title: 'Conflicts of Interest',
      text: 'Staff should be alert to and avoid conflicts of interest that interfere with the exercise of professional discretion and impartial judgment. Staff should inform clients when a real or potential conflict of interest arises and take reasonable steps to resolve the issue in a manner that makes the clients\' interests primary.',
      externalRef: 'NASW 1.06'
    },
    talkingPoints: [
      'In CMDHD\'s six counties, dual relationships are inevitable—overlapping social, business, and community connections are a rural reality. How we manage these overlaps defines our professionalism.',
      'If you know a client socially, have a pre-existing relationship, or discover one after services begin, disclose it immediately to your supervisor. Waiting creates larger problems.',
      'Transparency protects you from ethics violations, ensures clients receive unbiased care, and supports equitable service delivery across all CMDHD programs.',
      'Practical example: A family friend becomes your client. Acknowledge the overlap, document it, consult your supervisor, and be prepared to transfer care if the relationship compromises objectivity.',
      'Rural context: In places like Arenac County where "everyone knows everyone," the question is not IF overlaps occur, but HOW we handle them with integrity.'
    ],
    facilitatorNotes: [
      'Emphasize: Disclosure is not failure—it is professional competence',
      'Research shows untreated dual relationships are the #2 cause of ethics violations in rural healthcare',
      'Script for disclosure: "I need to let you know that [client name] and I have a [type] relationship outside of work. I want to discuss how we should handle this."'
    ]
  },
  {
    id: 9,
    type: 'content',
    section: 'Policy Fundamentals',
    sectionIndex: 2,
    duration: 2,
    title: 'Supervisor Escalation Path',
    subtitle: 'Policy §15',
    objective: `Model CMDHD's supervision process`,
    policyReference: {
      section: '15',
      title: 'Supervision & Disciplinary Action',
      text: 'Staff shall discuss potential conflict of interest issues with their supervisor. Any breach of professional boundaries may result in disciplinary action.'
    },
    talkingPoints: [
      'When unsure about a boundary decision, do not decide alone. Consultation with your supervisor is required practice, not optional.',
      'Supervision is not punishment—it is a professional safeguard that protects both you and your clients. It provides documentation, guidance, and shared accountability.',
      'Document every supervision consult: who you spoke with, when the conversation occurred, what guidance was provided, and what action you took.',
      'Use this simple framework: Identify the boundary question, consult your supervisor before acting, document the guidance, and follow the agreed-upon plan.',
      'Remember: §15 states that breaches of professional boundaries may result in disciplinary action. Proactive supervision prevents violations.'
    ],
    facilitatorNotes: [
      'Preview the 5-Step Decision Tree (detailed later in Slide 32)',
      'Emphasize: Every supervisor consultation strengthens your professional practice',
      'Note: CMDHD supervisors are trained in boundary management—use them as resources'
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
    subtitle: 'Policy §5',
    objective: 'Address blurred lines between personal and professional roles',
    policyReference: {
      section: '5',
      title: 'Pre-Existing Relationships',
      text: 'Staff will discuss with their supervisor if a pre-existing personal or social relationship exists with a client to determine steps in moving forward. This includes but is not limited to friendship, guardianship, romantic, or business relationships.'
    },
    talkingPoints: [
      'Transparency is the foundation of ethical practice. If any relationship existed before services began—or develops after services start—report it immediately to your supervisor.',
      'Policy §5 specifies: friendship, guardianship, romantic relationships, business partnerships, or familial ties all require disclosure and supervisory consultation.',
      'We cannot ethically provide services to people with whom we have ongoing personal relationships. The risk of bias, favoritism, or boundary confusion compromises professional objectivity.',
      'In rural settings, you may discover relationships after assignment. This is not a failure—promptly disclosing and transferring care demonstrates professional integrity.',
      'Your supervisor will work with you to reassign the case appropriately, ensuring the client receives unbiased care and you maintain professional boundaries.'
    ],
    facilitatorNotes: [
      'Emphasize: Disclosure protects everyone—you, the client, and CMDHD',
      'Common scenario: Staff member assigned to friend\'s family member—immediate disclosure and transfer required',
      'Note: Even distant relationships (friend of a friend, former neighbor) warrant consultation'
    ]
  },
  {
    id: 11,
    type: 'content',
    section: 'Social & Relational Boundaries',
    sectionIndex: 3,
    duration: 2,
    title: 'Social Media & Digital Contact',
    subtitle: 'Policy §6',
    objective: 'Clarify online conduct and digital boundaries',
    policyReference: {
      section: '6',
      title: 'Social Networking Prohibition',
      text: 'Social relationships between staff and their clients or families are inappropriate. Contact via social networking sites is prohibited. Employees may not knowingly friend an individual currently receiving services from CMDHD without first discussing the relationship and potential implications with their supervisor. This also applies to client caregivers, guardians, and family members.'
    },
    talkingPoints: [
      'No friending, liking, following, or accepting such requests from clients, their caregivers, guardians, or family members on any social media platform.',
      'Digital contact creates multiple risks: it blurs professional boundaries, can reveal protected health information, and may expose your personal life in ways that undermine professional credibility.',
      'Even an innocent post—a photo at church, a check-in at a local restaurant, a comment about your weekend—can compromise confidentiality or create boundary confusion.',
      'Professional boundaries extend beyond the active service period. Former clients remain off-limits for social media connection to protect both parties.'
    ],
    interactive: {
      type: 'poll',
      prompt: `Would you accept a friend request from a former client's parent?`,
      options: ['Yes', 'No', 'Not sure']
    },
    facilitatorNotes: [
      'After poll: Correct answer is "No" - boundaries extend beyond active service',
      'Emphasize: Even "former" clients represent potential boundary violations',
      'Rural context: Staff may have pre-existing social media connections from before employment—these should be disclosed to supervisors'
    ]
  },
  {
    id: 12,
    type: 'content',
    section: 'Social & Relational Boundaries',
    sectionIndex: 3,
    duration: 2,
    title: 'Over- or Under-Involvement',
    subtitle: 'Policy §7 | ANA 2.3',
    objective: 'Recognize and self-correct relational imbalances',
    policyReference: {
      section: '7',
      title: 'Professional Relationship Balance',
      text: 'Staff will pay careful attention when they are at risk of deviating from the professional relationship by becoming over- or under-involved with clients or others involved in their care.',
      externalRef: 'ANA 2.3'
    },
    talkingPoints: [
      'Over-involvement manifests as rescuing behaviors, showing favoritism, working beyond scheduled hours, or excessive emotional investment in client outcomes.',
      'Under-involvement appears as avoidance of certain clients, irritation or impatience, emotional detachment, or minimizing client concerns.',
      'Both patterns harm the therapeutic relationship: over-involvement creates dependency and burnout, while under-involvement erodes trust and compromises care quality.',
      'Warning signs include: thinking about a specific client constantly, feeling personally responsible for their success or failure, or dreading interactions with certain clients.',
      'Supervision is your professional reset mechanism. If you recognize these patterns, bring them to supervision before they escalate into boundary violations.'
    ],
    facilitatorNotes: [
      'Research: Relational imbalance is a precursor to 60% of boundary violations (ANA Code)',
      'Emphasize: Self-awareness and early intervention prevent problems',
      'Encourage: Peer consultation can help identify blind spots'
    ]
  },
  {
    id: 13,
    type: 'content',
    section: 'Social & Relational Boundaries',
    sectionIndex: 3,
    duration: 2,
    title: 'Emotional Awareness & Self-Care',
    objective: 'Foster mindfulness of personal triggers and boundaries',
    talkingPoints: [
      'Your emotional state is valuable professional data, not a character flaw. Feelings of guilt, urgency, defensiveness, or excessive protectiveness signal that boundaries need attention.',
      'Common emotional cues: Feeling personally responsible for client outcomes, anger when clients do not follow advice, anxiety about saying no to requests, or guilt about maintaining boundaries.',
      'Emotional awareness prevents unconscious boundary drift. When you notice strong emotions about a client or case, pause and assess whether professional boundaries remain intact.',
      'Self-care is boundary protection. Burnout, compassion fatigue, and emotional exhaustion make it harder to maintain appropriate professional distance.',
      'Practice: Regular supervision, peer consultation, and personal reflection help you stay grounded and maintain healthy professional boundaries across all your cases.'
    ],
    facilitatorNotes: [
      'Connect to §7: Emotional dysregulation often precedes over/under-involvement',
      'Resource: CMDHD offers EAP services for staff experiencing compassion fatigue',
      'Rural context: Small community emotional load requires extra self-care'
    ]
  },

  // Section 4: Communication Standards (Slides 14-17)
  {
    id: 14,
    type: 'content',
    section: 'Communication Standards',
    sectionIndex: 4,
    duration: 2,
    title: 'Professional Language',
    subtitle: 'Policy §10',
    objective: 'Promote clarity, respect, and neutrality in all client communication',
    policyReference: {
      section: '10',
      title: 'Professional Communication',
      text: 'Staff are expected to communicate with clients using clear, respectful and professional language at all times.'
    },
    talkingPoints: [
      'Professional language shapes client perception, builds trust, and maintains therapeutic boundaries. Words matter in healthcare relationships.',
      'Avoid jargon that confuses, sarcasm that undermines trust, casual slang that blurs professionalism, and judgmental language that shames clients.',
      'Speak to empower and collaborate, not to judge or control. Use person-first language and strength-based phrasing.',
      'Instead of: "You should be doing X" or "Why have you not done Y?" say: "Let us explore what has worked well for you" or "What barriers are you facing?"',
      'Documentation reflects the same standard: clear, objective, respectful language without assumptions, labels, or subjective judgments.'
    ],
    facilitatorNotes: [
      'Research: Client-centered language improves adherence and outcomes',
      'Examples of stigmatizing language to avoid: "non-compliant," "difficult patient," "failure to..."',
      'CMDHD expects trauma-informed communication principles in all client interactions'
    ]
  },
  {
    id: 15,
    type: 'content',
    section: 'Communication Standards',
    sectionIndex: 4,
    duration: 2,
    title: 'Names, Pronouns, and Identity',
    subtitle: 'Policy §11',
    objective: 'Uphold respect and inclusivity through accurate identity affirmation',
    policyReference: {
      section: '11',
      title: 'Identity Affirmation',
      text: 'Staff must consistently use the client\'s preferred name, pronouns, and relationship terms both in conversation and in documentation. If uncertain, staff should politely ask for clarification.'
    },
    talkingPoints: [
      'Policy §11 requires that we use clients\' preferred names, pronouns, and relationship terms consistently—in face-to-face conversation, phone calls, and all written documentation.',
      'If you are unsure what someone prefers, it is appropriate to politely ask once: "What name would you like me to use?" and "What pronouns do you use?" These are simple, respectful questions.',
      'Record this information in the client record so all team members can provide consistent, respectful care.',
      'This policy is about professional dignity and client respect, not personal belief systems. All clients deserve to have their identity affirmed regardless of staff member preferences.',
      'Mistakes happen—if you misgender or misname someone, briefly apologize, correct yourself, and move forward without making the client manage your discomfort.'
    ],
    facilitatorNotes: [
      'Legal context: Misgendering and deadnaming can violate anti-discrimination protections',
      'Rural consideration: LGBTQ+ clients in small communities often face additional stigma—affirming care is critical',
      'Resource: CMDHD provides LGBTQ+ cultural competency training'
    ]
  },
  {
    id: 16,
    type: 'content',
    section: 'Communication Standards',
    sectionIndex: 4,
    duration: 2,
    title: 'Avoiding Controversial Topics',
    subtitle: 'Policy §12',
    objective: 'Maintain professional neutrality on religion and politics',
    policyReference: {
      section: '12',
      title: 'Controversial Topics',
      text: 'Staff will avoid discussing controversial topics with clients, such as religious or political views.'
    },
    talkingPoints: [
      'We do not bring clients into our personal worldview. Sharing your religious or political opinions creates boundary confusion and risks alienating clients who hold different views.',
      'If a client initiates political or religious discussion, politely redirect the conversation back to their health goals and service needs.',
      'This boundary protects clients from feeling pressured to align with staff beliefs and ensures equitable care regardless of client values.',
      'Effective script: "That is an important topic, and I respect your perspective. For our time together, let us keep our focus on your health goals and what I can help you with today."',
      'Exception: If a client\'s religious or political context directly impacts their health decisions, you may respectfully explore that connection without sharing your own views.'
    ],
    facilitatorNotes: [
      'Rural context: Small communities often have strong shared political/religious identities—professional neutrality is especially important',
      'Emphasize: Clients should never feel they need to share your values to receive quality care',
      'Note: Listening to client values ≠ endorsing or debating them'
    ]
  },
  {
    id: 17,
    type: 'content',
    section: 'Communication Standards',
    sectionIndex: 4,
    duration: 2,
    title: 'Limited Self-Disclosure',
    subtitle: 'Policy §9',
    objective: 'Manage emotional transparency and personal sharing',
    policyReference: {
      section: '9',
      title: 'Personal Information Disclosure',
      text: 'Staff will not disclose any unnecessary personal information to clients.'
    },
    talkingPoints: [
      'Self-disclosure must be intentional, client-focused, and limited. Share personal information only when it directly serves the therapeutic goal and benefits the client.',
      'Avoid using self-disclosure to meet your own emotional needs—processing your divorce, venting about your day, or seeking validation from clients blurs professional boundaries.',
      'Before sharing, ask: Who is this helping—me or the client? Will this deepen trust and therapeutic rapport, or create confusion about our roles?',
      'Appropriate self-disclosure examples: "I understand medical appointments can feel overwhelming—many people I work with experience that" (universalizing without specifics).',
      'Inappropriate self-disclosure: Detailed personal stories, family problems, financial stressors, health issues, or relationship dynamics. These shift focus from client to staff.'
    ],
    facilitatorNotes: [
      'Research: Excessive self-disclosure correlates with boundary violations and compromised outcomes',
      'Rural context: Clients may already know personal details from community connections—minimize additional sharing',
      'Guideline: If it would feel uncomfortable to share in front of your supervisor, do not share it with clients'
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
    subtitle: 'Policy §8',
    objective: 'Establish consent-based approach to physical contact',
    policyReference: {
      section: '8',
      title: 'Physical Boundaries',
      text: 'Respect personal space. If you perceive that touch is needed, ask for consent. Do not initiate touch unless clearly asked by the family or after asking permission. Physical contact with clients should be limited to the scope of practice, and the client should be asked for permission before physical contact occurs.'
    },
    talkingPoints: [
      'Always ask for explicit consent before initiating any physical contact: "May I take your blood pressure?" or "Is it okay if I pick up your child to weigh them?"',
      'Physical contact must be limited strictly to your scope of practice—medical procedures, developmental assessments, or physical exams that are part of your role.',
      'Even well-intentioned comfort touch (shoulder pat, hug) can misfire. Cultural differences, trauma histories, and personal boundaries vary widely among clients.',
      'If a client initiates physical contact (reaching for a hug), you may respond appropriately while maintaining professionalism: a brief side hug or handshake is acceptable; prolonged or repeated physical contact is not.',
      'Document any physical contact that occurs, especially if it falls outside routine clinical procedures or if boundary questions arise.'
    ],
    interactive: {
      type: 'ask',
      prompt: 'Discussion: A grieving client reaches for a hug after receiving difficult news. What do you do?'
    },
    facilitatorNotes: [
      'Answer: Brief, professional response acceptable (side hug, hand on shoulder); redirect to verbal support',
      'Trauma-informed care principle: Always prioritize client agency and consent',
      'Rural context: Community norms may expect more physical warmth—policy still applies'
    ]
  },
  {
    id: 19,
    type: 'content',
    section: 'Operational Policies',
    sectionIndex: 5,
    duration: 2,
    title: 'Work Hours & Service Boundaries',
    subtitle: 'Policy §13',
    objective: 'Establish clear temporal boundaries for service delivery',
    policyReference: {
      section: '13',
      title: 'Work Hours',
      text: 'Staff will not conduct services outside of defined work hours, unless pre-arranged with a supervisor.'
    },
    talkingPoints: [
      'Do not provide services, respond to client texts, answer calls, or engage in client-related work outside your scheduled work hours unless pre-approved by your supervisor.',
      'Off-hours contact seems caring but creates unsustainable expectations, fosters client dependency, blurs professional boundaries, and risks staff burnout.',
      'Clients must understand that CMDHD operates within business hours. Emergency situations have designated on-call protocols—direct clients to those resources.',
      'Keep all client interactions within CMDHD-approved platforms (work phone, work email, EHR messaging) where communications are documented and supervisable.',
      'Exception process: If an urgent situation requires off-hours contact, obtain supervisor approval first, document thoroughly, and ensure it remains a one-time circumstance.'
    ],
    facilitatorNotes: [
      'Research: Off-hours contact is a leading precursor to boundary violations',
      'Clarify: Personal cell numbers should never be given to clients',
      'Rural consideration: Staff and clients may cross paths in community—maintain professional distance even in casual encounters'
    ]
  },
  {
    id: 20,
    type: 'content',
    section: 'Operational Policies',
    sectionIndex: 5,
    duration: 2,
    title: 'Gifts & Gratuities',
    subtitle: 'Policy §14',
    objective: 'Navigate gift-giving situations with policy clarity',
    policyReference: {
      section: '14',
      title: 'Gift Policy',
      text: 'CMDHD prohibits all employees, interns, and volunteers from accepting gifts, gratuities, or entertainment from individuals and firms with whom CMDHD does business. Excluded are advertising or promotional materials and holiday or other gifts of nominal value (less than $25.00).'
    },
    talkingPoints: [
      'CMDHD policy prohibits accepting gifts from clients except those of nominal value (under $25) such as a holiday card, small baked goods to share with the team, or handmade craft items.',
      'Decline gifts politely and explain the policy: "I appreciate the thought, but CMDHD policy prevents me from accepting gifts. Your progress and feedback are the best thanks I can receive."',
      'Gift-giving can create obligation, blur the professional relationship, or appear to influence your clinical judgment. Even well-intentioned gifts compromise professional boundaries.',
      'If a client insists or you are uncertain about a gift\'s value, accept it temporarily and immediately notify your supervisor for guidance on appropriate handling.',
      'Cultural consideration: In some cultures, gift-giving is a significant expression of gratitude. Acknowledge the gesture warmly while maintaining the boundary.'
    ],
    interactive: {
      type: 'poll',
      prompt: 'A client brings you homemade cookies to thank you for your help. What do you do?',
      options: ['Accept them', 'Decline politely', 'Accept and share with team', 'Not sure']
    },
    facilitatorNotes: [
      'After poll: "Accept and share with team" is acceptable (under $25, shared, documented)',
      'Red flags: Cash, gift cards, expensive items, or anything that feels like it creates obligation',
      'Document all gift situations in client record'
    ]
  },
  {
    id: 21,
    type: 'content',
    section: 'Operational Policies',
    sectionIndex: 5,
    duration: 2,
    title: 'Documentation & Confidentiality',
    subtitle: 'Policy §1',
    objective: 'Establish documentation practices that protect boundaries',
    policyReference: {
      section: '1',
      title: 'Clear Expectations',
      text: 'Staff will set clear expectations for clients at the start of services, giving clients an understanding of what is expected of them and what the client can expect from the staff.'
    },
    talkingPoints: [
      'Documentation is an ethical and legal requirement. Record boundary-relevant interactions: requests you declined, supervision consultations, conflicts of interest disclosed, or any situation requiring boundary navigation.',
      'If you decline a client request (transportation, off-hours contact, gift), document it neutrally and objectively: what was requested, what you explained, and how it was resolved.',
      'Never write subjective emotions or judgments: "Client was manipulative" or "I felt uncomfortable." Instead, write observable facts: "Client requested personal cell number. Explained CMDHD communication policy and provided office number."',
      'Documentation protects you professionally by creating a clear record of boundary-maintaining actions and demonstrates adherence to CMDHD policy.',
      'Confidentiality applies to documentation: Store notes securely, discuss cases only with authorized team members, and never photograph or copy client information to personal devices.'
    ],
    facilitatorNotes: [
      'Connect to §1: Clear documentation supports clear expectations',
      'Legal protection: Good documentation defends against complaints and liability claims',
      'HIPAA reminder: Boundary violations often involve confidentiality breaches—document carefully'
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
    explanation: 'Correct answer: "Politely decline and help arrange Medicaid transport." Policy §2 explicitly prohibits transporting clients in your vehicle—it falls outside your professional scope of practice regardless of the distance or urgency. This boundary protects you from liability, prevents client dependency, and maintains role clarity. The appropriate response: "I understand this is frustrating. CMDHD policy prevents me from providing transportation, but I can help you contact Medicaid transport or explore other community resources." Always maintain the boundary while actively helping solve the underlying problem.',
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
    explanation: 'Correct answer: "Respond the next business day through proper channels." Policy §13 requires that services remain within defined work hours unless pre-approved by a supervisor. Responding immediately sets an unsustainable expectation, creates dependency, and risks burnout. The next business day, respond through CMDHD\'s official communication platform (work email or EHR messaging): "I received your message. Let us discuss your treatment plan during our next scheduled appointment. If this is urgent, please call the CMDHD main line for on-call support." This maintains boundaries while ensuring client safety.',
    policyReference: 'Policy §13: Work Hours',
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
    explanation: 'Best answer: "Decline politely and explain agency policy" or "Accept and share with the team" (both defensible under §14). Policy §14 prohibits gifts except those of nominal value (under $25). While homemade cookies likely meet the nominal value threshold, the cleanest boundary response is: "I truly appreciate the thought, but CMDHD policy prevents me from accepting gifts. Your progress and kind words are the best thanks I can receive." If you accept to avoid offense, immediately share with the team (not just you) and document it. Never accept gifts secretly—transparency protects you from allegations of favoritism or impropriety.',
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
    explanation: 'Correct answer: "Disclose to supervisor immediately and discuss reassignment." Policy §4 and §5 require immediate disclosure of any pre-existing or discovered dual relationship. Shared church membership creates repeated social contact outside the professional relationship, which compromises objectivity and creates boundary confusion. The client\'s comfort level is irrelevant—professional ethics require disclosure regardless of preference. Your supervisor will determine whether reassignment is necessary or whether appropriate safeguards can maintain the therapeutic relationship. Document the disclosure and follow supervisory guidance. This protects you, the client, and CMDHD from ethics violations.',
    policyReference: 'Policy §4 & §5: Conflicts of Interest',
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
    explanation: 'Correct answer: "No—professional boundaries continue after discharge." Policy §6 prohibits social media contact with clients and their family members, and this prohibition extends beyond the active service period. There is no defined timeline after which former clients become "safe" to befriend—the power differential and confidentiality considerations persist indefinitely. Accepting the request creates risk: you may inadvertently reveal protected information, the client may misinterpret your posts, or future re-referral becomes complicated. Politely decline or ignore the request. If pressed, explain: "CMDHD policy prevents me from connecting with clients on social media, even after services end. I wish you well."',
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
