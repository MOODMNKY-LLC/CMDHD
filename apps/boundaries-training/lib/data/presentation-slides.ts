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
  discussionPrompt?: string;  // Simple discussion question for facilitator
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
    quote: 'CMDHD - Simeon Bowman, CDCA, MSW Candidate\nFounder of MOODMNKY LLC'
  },
  {
    id: 2,
    type: 'content',
    section: 'Opening & Framing',
    sectionIndex: 1,
    duration: 1,
    title: 'Agenda & Expectations',
    subtitle: 'How We Will Learn Together Today',
    talkingPoints: [
      `**Time**: 60 minutes total structured as: 20 min policy foundation, 15 min interactive scenarios, 10 min decision tree & documentation, 10 min county-specific discussion, 5 min closing commitments.`,
      `**Technology**: Use your phones for polls and reflection prompts. QR code on screen links to interactive platform—no login required.`,
      `**Psychological Safety**: This is a learning space, not an evaluation. There are no "gotcha" questions. Boundary challenges are normal and navigable—that's why we're here.`,
      `**Confidentiality Agreement**: Share principles and learning, not personal client cases or colleague situations. What's discussed here stays here, but what's learned here leaves with you.`,
      `**Participation Guidelines**: Your questions and experiences enrich everyone's learning. Speak from your own perspective. Listen with curiosity. Challenge ideas, not people.`,
      `**Adult Learning Approach**: You are the expert in your own practice context. This training provides frameworks and policy guidance—you will adapt them to your specific situations through reflection and supervision.`
    ],
    facilitatorNotes: [
      `Set friendly, open tone: "We're all navigating the same challenges in different contexts."`,
      `Acknowledge anxiety: "Boundary training can feel evaluative—it's not. We're building skills together."`
    ]
  },
  {
    id: 3,
    type: 'content',
    section: 'Opening & Framing',
    sectionIndex: 1,
    duration: 2,
    title: 'Session Goals',
    subtitle: 'What You Will Learn Today',
    talkingPoints: [
      `**By the end of this session, you will be able to:**`,
      `**Distinguish** between boundary crossings (gray zones requiring judgment) and boundary violations (bright lines that are never acceptable).`,
      `**Apply** a 5-Step Decision Tree to real-world boundary dilemmas in your practice, including scenarios specific to rural Michigan healthcare.`,
      `**Identify** which CMDHD policies apply to common boundary situations (scope of practice, dual relationships, gifts, communication, social media).`,
      `**Articulate** when and how to consult your supervisor about boundary concerns using structured communication.`,
      `**Commit** to one specific, measurable boundary practice change you will implement this month.`
    ],
    facilitatorNotes: [
      `Objective: Orient participants to measurable learning objectives and outcomes`,
      `Emphasize: These aren't abstract ethics—these are skills you'll use next week.`,
      `Connect to professional development: This training fulfills CMDHD's ethical practice and risk management requirements.`
    ]
  },
  {
    id: 4,
    type: 'content',
    section: 'Opening & Framing',
    sectionIndex: 1,
    duration: 2,
    title: 'Why Boundaries Matter',
    subtitle: 'The Foundation of Ethical Healthcare Practice',
    talkingPoints: [
      `**Ethical Foundation**: Boundaries uphold the four core principles of healthcare ethics—autonomy (client choice), beneficence (acting in their best interest), non-maleficence (doing no harm), and justice (fair treatment).`,
      `**Power Differential**: Professional boundaries acknowledge and protect against the inherent power imbalance between provider and client. You have access to sensitive information, professional authority, and influence—boundaries ensure this power serves healing, not harm.`,
      `**Trust & Predictability**: Boundaries create consistency. Clients know what to expect, which builds safety. Safety enables vulnerability. Vulnerability allows healing. This is the therapeutic foundation.`,
      `**Rural Reality**: In small communities, boundary challenges are "inevitable and ubiquitous" (research shows this is the #1 ethical concern for rural mental health providers). This training equips you to navigate these overlaps with transparency and integrity.`,
      `**Provider Well-Being**: Boundaries aren\'t just about client protection—they prevent burnout, compassion fatigue, and vicarious trauma. Sustainable care requires sustainable boundaries.`,
      `**Clarity is Kindness**: Clear boundaries reduce confusion, prevent resentment, and model healthy relationships. When you say "no" to what's outside your role, you preserve capacity to say "yes" to what's within it.`
    ],
    facilitatorNotes: [
      `Objective: Link emotional reflection to ethical clarity and professional sustainability`,
      `Ask: "Who here works in a smaller town where clients are also neighbors, classmates, or friends? This is where these principles really matter."`,
      `Emphasize: Boundaries aren't about being cold or distant—they're about being clear, consistent, and protective of the therapeutic relationship.`
    ]
  },
  
  // ============================================================================
  // SECTION 2: POLICY FOUNDATION (Slides 5-7)
  // Purpose → Policy Statement → Procedure #1
  // ============================================================================
  {
    id: 5,
    type: 'content',
    section: 'Policy Foundation',
    sectionIndex: 2,
    duration: 2,
    title: 'PURPOSE: Why Professional Boundaries Exist',
    subtitle: 'Protecting Clients, Organizations, and Professionals',
    policyReference: {
      section: 'Purpose',
      title: 'Professional Boundaries Policy - Purpose Statement',
      text: 'To ensure professional conduct of staff in maintaining professional boundaries when providing services to clients. Professional boundaries are expectations that set a clear relationship between the client and staff, preventing role confusion.'
    },
    talkingPoints: [
      'Professional boundaries exist to prevent role confusion between staff and clients. When roles are clear, relationships are healthier and care is more effective.',
      'Boundaries protect three critical stakeholders: our clients (from exploitation or confusion), CMDHD as an organization (from liability and ethics violations), and you as a professional (from burnout, complaints, and career risk).',
      'This is not about being cold or distant—professional warmth and boundaries coexist. Boundaries create the safe container within which genuine care can flourish.',
      'CMDHD serves six rural counties where personal and professional lives often overlap. These policies provide clarity in situations where social norms may not.'
    ],
    facilitatorNotes: [
      'Objective: Ground the training in the fundamental rationale for boundaries',
      'Emphasize: Boundaries are protective, not punitive',
      'Connect to rural context: Small communities make boundaries MORE important, not less',
      'Preview: All 15 procedures stem from this foundational purpose'
    ]
  },
  {
    id: 6,
    type: 'content',
    section: 'Policy Foundation',
    sectionIndex: 2,
    duration: 2,
    title: 'POLICY: All Staff Will Follow Procedures',
    subtitle: 'Compliance is Mandatory, Not Optional',
    policyReference: {
      section: 'Policy',
      title: 'Professional Boundaries Policy Statement',
      text: 'All staff will follow procedures to ensure that professional boundaries are maintained between staff and the client(s).'
    },
    talkingPoints: [
      'This is CMDHD policy, not suggestion. All staff—regardless of role, experience, or personal values—will follow these procedures.',
      'The policy includes 15 specific procedures (Procedures #1-15) that define what professional boundaries look like in practice.',
      'These procedures draw on national ethical standards: the NASW Code of Ethics (Standard 1.06 on conflicts of interest) and the ANA Code of Ethics (Provision 2.3 on professional boundaries).',
      'Compliance protects everyone. Non-compliance may result in disciplinary action per Procedure #15.',
      'The next slides will walk through each procedure in order, showing how policy translates into daily practice.'
    ],
    facilitatorNotes: [
      'Objective: Establish policy compliance as mandatory, not optional',
      'Set serious tone: This is binding policy, not aspirational guidance',
      'Note: Procedures will be presented in exact policy order (1-15)',
      'Emphasize: Every procedure has a rationale grounded in healthcare ethics and law'
    ]
  },
  {
    id: 7,
    type: 'content',
    section: 'Policy Foundation',
    sectionIndex: 2,
    duration: 2,
    title: 'Procedure #1: Clear Expectations at Service Start',
    subtitle: 'Policy #1',
    objective: 'Establish documentation practices that protect boundaries',
    policyReference: {
      section: '1',
      title: 'Clear Expectations',
      text: 'Staff will set clear expectations for clients at the start of services, giving clients an understanding of what is expected of them and what the client can expect from the staff.'
    },
    talkingPoints: [
      'At the very first interaction, clarify what services you will provide, what your role is, when and how clients can contact you, and what their responsibilities are in the relationship.',
      'Clear expectations prevent boundary confusion later. Clients need to know: what you will do, what you will not do, and how the professional relationship works.',
      'Use concrete language: "I am your [role]. We will meet [frequency]. You can reach me at [work contact]. I cannot [out-of-scope examples]."',
      'Documentation is both an ethical and legal requirement. Record boundary-relevant interactions: requests you declined, supervision consultations, conflicts of interest disclosed, or any situation requiring boundary navigation.',
      'Good documentation protects you professionally by creating a clear record of boundary-maintaining actions and demonstrates adherence to CMDHD policy.'
    ],
    facilitatorNotes: [
      'Emphasize: First impressions set the tone for the entire professional relationship',
      'Script example: "I am here to [your role]. We will meet [frequency]. You can reach me at [work contact]. I cannot [out-of-scope examples]."',
      'Legal protection: Documentation defends against complaints and liability claims'
    ]
  },

  // ============================================================================
  // SECTION 3: PROCEDURES #2-4 - SCOPE, ETHICS, CONFLICTS (Slides 8-10)
  // ============================================================================
  {
    id: 8,
    type: 'content',
    section: 'Scope, Ethics & Conflicts',
    sectionIndex: 3,
    duration: 3,
    title: 'Procedure #2: Scope of Practice & Limits',
    subtitle: 'Policy #2 | Including Sub-section 2a',
    objective: 'Identify what is inside and outside your professional role',
    policyReference: {
      section: '2',
      title: 'Scope of Practice',
      text: 'Staff will work only within their scope of practice for their defined role and will refer clients out as needed. This includes, but is not limited to, transporting clients in a vehicle, running errands for clients, and providing any other services not within staff scope of practice.'
    },
    talkingPoints: [
      'Operating within your defined scope is required practice. This means no transporting clients in your personal vehicle, no running errands, and no performing favors that fall outside your job description—even when these actions feel helpful.',
      'Sub-section 2a explicitly prohibits: transporting clients in a vehicle, running errands for clients, and providing any other services not within your staff scope of practice.',
      'Exceeding your scope creates legal liability for you and CMDHD, fosters client dependency that undermines autonomy, and causes role confusion that weakens professional relationships.',
      'In rural settings, you will encounter situations where stepping outside your role seems like the obvious solution. The professional response maintains the boundary while connecting clients to appropriate resources.',
      'Always ask yourself: Does this request align with my CMDHD job description, or am I responding from personal compassion? Both matter, but only one is appropriate in your professional role.'
    ],
    discussionPrompt: 'Would you drive a client to an appointment if it is "just down the road"?',
    facilitatorNotes: [
      'After poll: Explain correct answer is "No" - refer to Medicaid transport, community resources',
      'Provide script: "I understand this is challenging. CMDHD policy prevents me from providing transportation, but I can help you arrange [Medicaid transport/community resources]."',
      'Emphasize: Boundary violations are a leading cause of professional disciplinary actions (NCSBN research)',
      'Highlight: Sub-section 2a lists specific prohibited activities'
    ]
  },
  {
    id: 9,
    type: 'content',
    section: 'Scope, Ethics & Conflicts',
    sectionIndex: 3,
    duration: 2,
    title: 'Procedure #3: Ethical Standards Compliance',
    subtitle: 'Policy #3 | NASW 1.06 | ANA 2.3',
    objective: 'Connect policy to universal ethics principles',
    policyReference: {
      section: '3',
      title: 'Ethical Standards',
      text: 'Staff shall comply with the ethical standards set forth by their professional organizations, associations and/or other recognized standards within CMDHD.',
      externalRef: 'NASW 1.06, ANA 2.3'
    },
    talkingPoints: [
      'CMDHD staff must comply with ethical standards from their professional organizations: NASW for social workers, ANA for nurses, and other recognized professional standards.',
      'NASW Standard 1.06 and ANA Provision 2.3 both emphasize avoiding conflicts of interest and maintaining professional objectivity in all client relationships.',
      'Five ethical principles guide healthcare practice: Autonomy (client self-determination), Beneficence (doing good), Nonmaleficence (preventing harm), Fidelity (keeping promises), and Justice (fairness and equity).',
      'Professional ethics create consistency across diverse staff values. They transcend our individual beliefs to ensure all clients receive equitable, professional care regardless of who serves them.',
      'These standards are not abstract—they inform daily practice decisions about boundaries, dual relationships, confidentiality, and professional conduct.'
    ],
    facilitatorNotes: [
      'Emphasize: These are not arbitrary rules—they are based on decades of healthcare ethics research',
      'Note: CMDHD staff come from diverse professional backgrounds (nursing, social work, public health)—shared ethics create common ground',
      'Resource: Full NASW and ANA codes available through CMDHD professional development library'
    ]
  },
  {
    id: 10,
    type: 'content',
    section: 'Scope, Ethics & Conflicts',
    sectionIndex: 3,
    duration: 2,
    title: 'Procedure #4: Conflicts of Interest & Dual Relationships',
    subtitle: 'Policy #4 | NASW 1.06',
    objective: 'Normalize supervision and referral when overlaps occur',
    policyReference: {
      section: '4',
      title: 'Conflicts of Interest',
      text: 'Staff should be alert to and avoid conflicts of interest that interfere with the exercise of professional discretion and impartial judgment. Staff should inform clients when a real or potential conflict of interest arises and take reasonable steps to resolve the issue in a manner that makes the clients\' interests primary and protects clients\' interests to the greatest extent possible. In some cases, protecting clients\' interests may require termination of the professional relationship with proper referral of the client to another staff member or agency.',
      externalRef: 'NASW 1.06'
    },
    talkingPoints: [
      'In CMDHD\'s six counties, dual relationships are inevitable—overlapping social, business, and community connections are a rural reality. How we manage these overlaps defines our professionalism.',
      'If you know a client socially, have a pre-existing relationship, or discover one after services begin, disclose it immediately to your supervisor. Waiting creates larger problems.',
      'The policy is clear: when a conflict arises, take steps to make the client\'s interests primary. In some cases, this requires termination of the professional relationship with proper referral.',
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

  // ============================================================================
  // SECTION 4: PROCEDURES #5-7 - RELATIONAL BOUNDARIES (Slides 11-13)
  // ============================================================================
  {
    id: 11,
    type: 'content',
    section: 'Relational Boundaries',
    sectionIndex: 4,
    duration: 2,
    title: 'Procedure #5: Pre-Existing Relationships',
    subtitle: 'Policy #5 | Including Sub-section 5a',
    objective: 'Address blurred lines between personal and professional roles',
    policyReference: {
      section: '5',
      title: 'Pre-Existing Relationships',
      text: 'Staff will discuss with their supervisor if a pre-existing personal or social relationship exists with a client to determine steps in moving forward. If any changes in relationship arise this must also be discussed with a supervisor. This includes but is not limited to friendship, guardianship, romantic, or business relationships.'
    },
    talkingPoints: [
      'Transparency is the foundation of ethical practice. If any relationship existed before services began—or develops after services start—report it immediately to your supervisor.',
      'Sub-section 5a specifies the types of relationships requiring disclosure: friendship, guardianship, romantic relationships, business relationships, and familial ties.',
      'We cannot ethically provide services to people with whom we have ongoing personal relationships. The risk of bias, favoritism, or boundary confusion compromises professional objectivity.',
      'In rural settings, you may discover relationships after assignment. This is not a failure—promptly disclosing and transferring care demonstrates professional integrity.',
      'Your supervisor will work with you to reassign the case appropriately, ensuring the client receives unbiased care and you maintain professional boundaries.'
    ],
    facilitatorNotes: [
      'Emphasize: Disclosure protects everyone—you, the client, and CMDHD',
      'Common scenario: Staff member assigned to friend\'s family member—immediate disclosure and transfer required',
      'Note: Even distant relationships (friend of a friend, former neighbor) warrant consultation',
      'Highlight: Sub-section 5a provides specific examples of relationship types'
    ]
  },
  {
    id: 12,
    type: 'content',
    section: 'Relational Boundaries',
    sectionIndex: 4,
    duration: 2,
    title: 'Procedure #6: Social Media & Digital Contact',
    subtitle: 'Policy #6',
    objective: 'Clarify online conduct and digital boundaries',
    policyReference: {
      section: '6',
      title: 'Social Networking Prohibition',
      text: 'Social relationships between staff and their clients or families are inappropriate. Contact via social networking sites is prohibited. Staff shall assess the implications of "friending," "liking," "following," or accepting such a request from another person when there is the potential for misinterpretation of the relationship or the potential of sharing protected information. Employees may not knowingly friend an individual currently receiving services from CMDHD without first discussing the relationship and potential implications with their supervisor. This also applies to client caregivers, guardians, and family members.'
    },
    talkingPoints: [
      'No friending, liking, following, or accepting such requests from clients, their caregivers, guardians, or family members on any social media platform.',
      'Digital contact creates multiple risks: it blurs professional boundaries, can reveal protected health information, and may expose your personal life in ways that undermine professional credibility.',
      'Even an innocent post—a photo at church, a check-in at a local restaurant, a comment about your weekend—can compromise confidentiality or create boundary confusion.',
      'Professional boundaries extend beyond the active service period. Former clients remain off-limits for social media connection to protect both parties.',
      'Before accepting any friend request, assess: Is there potential for misinterpretation? Could protected information be shared inadvertently?'
    ],
    discussionPrompt: `Would you accept a friend request from a former client's parent?`,
    facilitatorNotes: [
      'After poll: Correct answer is "No" - boundaries extend beyond active service',
      'Emphasize: Even "former" clients represent potential boundary violations',
      'Rural context: Staff may have pre-existing social media connections from before employment—these should be disclosed to supervisors'
    ]
  },
  {
    id: 13,
    type: 'content',
    section: 'Relational Boundaries',
    sectionIndex: 4,
    duration: 2,
    title: 'Procedure #7: Over- or Under-Involvement',
    subtitle: 'Policy #7 | ANA 2.3',
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
      'Supervision is your professional reset mechanism. If you recognize these patterns, bring them to supervision before they escalate into boundary violations.',
      'Self-care is boundary protection. Burnout, compassion fatigue, and emotional exhaustion make it harder to maintain appropriate professional distance.'
    ],
    facilitatorNotes: [
      'Research: Relational imbalance is a precursor to 60% of boundary violations (ANA Code)',
      'Emphasize: Self-awareness and early intervention prevent problems',
      'Encourage: Peer consultation can help identify blind spots',
      'Resource: CMDHD offers EAP services for staff experiencing compassion fatigue'
    ]
  },

  // ============================================================================
  // SECTION 5: PROCEDURES #8-12 - PHYSICAL & COMMUNICATION (Slides 14-18)
  // ============================================================================
  {
    id: 14,
    type: 'content',
    section: 'Physical & Communication Standards',
    sectionIndex: 5,
    duration: 2,
    title: 'Procedure #8: Physical Boundaries & Consent',
    subtitle: 'Policy #8 | Including Consent Requirements',
    objective: 'Establish consent-based approach to physical contact',
    policyReference: {
      section: '8',
      title: 'Physical Boundaries',
      text: 'Respect personal space. If you perceive that touch is needed, ask for consent. Do not initiate touch unless clearly asked by the family or after asking permission (e.g. asking a parent if you can pick up a baby, or a parent requesting that you hold a child). Physical contact with clients should be limited to the scope of practice (e.g. putting a baby on the scale or taking a client\'s blood pressure), and the client should be asked for permission before physical contact occurs.'
    },
    talkingPoints: [
      'Always ask for explicit consent before initiating any physical contact: "May I take your blood pressure?" or "Is it okay if I pick up your child to weigh them?"',
      'Do not initiate touch unless clearly asked by the family or after asking permission. Examples: asking a parent if you can pick up a baby, or a parent requesting that you hold a child.',
      'Physical contact must be limited strictly to your scope of practice—medical procedures (taking blood pressure), developmental assessments (weighing a baby), or physical exams that are part of your role.',
      'Even well-intentioned comfort touch (shoulder pat, hug) can misfire. Cultural differences, trauma histories, and personal boundaries vary widely among clients.',
      'If a client initiates physical contact (reaching for a hug), you may respond appropriately while maintaining professionalism: a brief side hug or handshake is acceptable; prolonged or repeated physical contact is not.',
      'Document any physical contact that occurs, especially if it falls outside routine clinical procedures or if boundary questions arise.'
    ],
    discussionPrompt: 'A grieving client reaches for a hug after receiving difficult news. What do you do?',
    facilitatorNotes: [
      'Answer: Brief, professional response acceptable (side hug, hand on shoulder); redirect to verbal support',
      'Trauma-informed care principle: Always prioritize client agency and consent',
      'Rural context: Community norms may expect more physical warmth—policy still applies',
      'Highlight: Policy includes specific examples of appropriate permission-seeking'
    ]
  },
  {
    id: 15,
    type: 'content',
    section: 'Physical & Communication Standards',
    sectionIndex: 5,
    duration: 2,
    title: 'Procedure #9: Limited Self-Disclosure',
    subtitle: 'Policy #9',
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
      'Inappropriate self-disclosure: Detailed personal stories, family problems, financial stressors, health issues, or relationship dynamics. These shift focus from client to staff.',
      'Rural context: Clients may already know personal details from community connections—minimize additional sharing.'
    ],
    facilitatorNotes: [
      'Research: Excessive self-disclosure correlates with boundary violations and compromised outcomes',
      'Guideline: If it would feel uncomfortable to share in front of your supervisor, do not share it with clients',
      'Emphasize: The therapeutic relationship serves the client, not the staff member\'s emotional needs'
    ]
  },
  {
    id: 16,
    type: 'content',
    section: 'Physical & Communication Standards',
    sectionIndex: 5,
    duration: 2,
    title: 'Procedure #10: Professional Language',
    subtitle: 'Policy #10',
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
    id: 17,
    type: 'content',
    section: 'Physical & Communication Standards',
    sectionIndex: 5,
    duration: 2,
    title: 'Procedure #11: Names, Pronouns, and Identity',
    subtitle: 'Policy #11',
    objective: 'Uphold respect and inclusivity through accurate identity affirmation',
    policyReference: {
      section: '11',
      title: 'Identity Affirmation',
      text: 'Staff must consistently use the client\'s preferred name, pronouns, and relationship terms both in conversation and in documentation. If uncertain, staff should politely ask for clarification.'
    },
    talkingPoints: [
      'Policy #11 requires that we use clients\' preferred names, pronouns, and relationship terms consistently—in face-to-face conversation, phone calls, and all written documentation.',
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
    id: 18,
    type: 'content',
    section: 'Physical & Communication Standards',
    sectionIndex: 5,
    duration: 2,
    title: 'Procedure #12: Avoiding Controversial Topics',
    subtitle: 'Policy #12',
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

  // ============================================================================
  // SECTION 6: PROCEDURES #13-15 - OPERATIONAL & SUPERVISION (Slides 19-21)
  // ============================================================================
  {
    id: 19,
    type: 'content',
    section: 'Operational & Supervision',
    sectionIndex: 6,
    duration: 2,
    title: 'Procedure #13: Work Hours & Service Boundaries',
    subtitle: 'Policy #13',
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
    section: 'Operational & Supervision',
    sectionIndex: 6,
    duration: 2,
    title: 'Procedure #14: Gifts & Gratuities',
    subtitle: 'Policy #14',
    objective: 'Navigate gift-giving situations with policy clarity',
    policyReference: {
      section: '14',
      title: 'Gift Policy',
      text: 'The CMDHD prohibits all employees, interns, and volunteers from accepting gifts, gratuities, or entertainment from individuals and firms with whom the CMDHD does business. It is also a violation to give gifts to individuals or firms with whom the agency does business. Excluded from this prohibition is the exchange of normal business courtesies such as luncheons or dinners, when they are proper and consistent with regular business practice. Also excluded are advertising or promotional materials and holiday or other gifts, which are of nominal value (less than $25.00).'
    },
    talkingPoints: [
      'CMDHD policy prohibits accepting gifts from clients except those of nominal value (under $25) such as a holiday card, small baked goods to share with the team, or handmade craft items.',
      'Decline gifts politely and explain the policy: "I appreciate the thought, but CMDHD policy prevents me from accepting gifts. Your progress and feedback are the best thanks I can receive."',
      'Gift-giving can create obligation, blur the professional relationship, or appear to influence your clinical judgment. Even well-intentioned gifts compromise professional boundaries.',
      'If a client insists or you are uncertain about a gift\'s value, accept it temporarily and immediately notify your supervisor for guidance on appropriate handling.',
      'Cultural consideration: In some cultures, gift-giving is a significant expression of gratitude. Acknowledge the gesture warmly while maintaining the boundary.'
    ],
    discussionPrompt: 'A client brings you homemade cookies to thank you for your help. What do you do?',
    facilitatorNotes: [
      'After poll: "Accept and share with team" is acceptable (under $25, shared, documented)',
      'Red flags: Cash, gift cards, expensive items, or anything that feels like it creates obligation',
      'Document all gift situations in client record',
      'Note: Policy also prohibits giving gifts to clients or business partners'
    ]
  },
  {
    id: 21,
    type: 'content',
    section: 'Operational & Supervision',
    sectionIndex: 6,
    duration: 2,
    title: 'Procedure #15: Supervision & Disciplinary Action',
    subtitle: 'Policy #15',
    objective: 'Model CMDHD\'s supervision process',
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
      'Policy #15 is clear: Any breach of professional boundaries may result in disciplinary action. Proactive supervision prevents violations and protects your career.'
    ],
    facilitatorNotes: [
      'Preview the 5-Step Decision Tree (detailed later in Slide 32)',
      'Emphasize: Every supervisor consultation strengthens your professional practice',
      'Note: CMDHD supervisors are trained in boundary management—use them as resources',
      'Connect back to Purpose: Supervision protects all three stakeholders (clients, CMDHD, staff)'
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
      `This reflection connects to Policy #1: Self-awareness is the foundation of ethical practice.`,
      `Common narratives we hear from rural providers:`,
      `• "I'm being rigid if I enforce boundaries"`,
      `• "Good helpers go above and beyond"`,
      `• "Saying no means I don't care"`,
      `• "In small towns, boundaries are impossible"`,
      `Your inner narrative shapes your boundary decisions—bringing it to light is the first step to changing it.`,
      `Submit anonymously—some responses will appear in a live word cloud for collective reflection.`,
      `This isn't about judgment; it's about naming the stories so we can rewrite them together.`
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
      `Research shows that emotional cues precede boundary violations—awareness prevents ethical drift.`,
      `Common emotional warning signs:`,
      `• Guilt: "If I don't do this, who will?"`,
      `• Irritation: Resentment building when requests arrive`,
      `• Urgency: Feeling pressured to respond immediately`,
      `• Exhaustion: Chronic fatigue from overextending`,
      `• Discomfort: "This doesn't feel right, but I can't explain why"`,
      `Your body and emotions are boundary detectors. Learn to listen.`,
      `When you notice these signals, pause and apply the 5-Step Decision Tree before acting.`,
      `Supervision is the space to process these feelings without shame or judgment.`
    ]
  },

  // Section 7: Quick Polls & Scenarios (Slides 24-29)
  {
    id: 24,
    type: 'table',
    section: 'Quick Polls & Scenarios',
    sectionIndex: 7,
    duration: 1,
    title: 'The Story I\'m Telling Myself Is...',
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
    title: 'Scenario 1: Emergency Transportation Dilemma',
    scenario: `A client with a serious wound infection needs urgent follow-up care in 30 minutes. Their ride cancelled, Medicaid transport has a 2-hour wait, and missing this appointment could result in hospitalization. It's January in rural Michigan—roads are icy, and the client lives 15 miles outside of town with no family nearby. They ask if you can drive them "just this once" since you're headed that direction anyway.`,
    question: 'What should you do?',
    options: [
      `Drive them—it's a medical emergency`,
      'Politely decline and help arrange alternative transport',
      'Ask your supervisor for a one-time exception',
      'Drive them but document it as an emergency situation'
    ],
    correctAnswer: 1,
    explanation: `Correct: "Politely decline and help arrange alternative transport." Policy #2 explicitly prohibits transporting clients—no exceptions for weather, urgency, or distance—because it protects you from liability, prevents dependency, and maintains role clarity. Respond: "I understand how stressful this is. Let me call the clinic to explain the situation and arrange medical transport or reschedule for urgent care." Your empathy and problem-solving demonstrate care within professional boundaries. Document the situation and outcome thoroughly.`,
    policyReference: 'Policy #2: Scope of Practice',
    boundaryFocus: 'Scope of Practice'
  },
  {
    id: 26,
    type: 'poll',
    section: 'Quick Polls & Scenarios',
    sectionIndex: 7,
    duration: 1.5,
    title: 'Scenario 2: Community Crisis Contact',
    scenario: `At 9:30 PM, you receive a text from a client who also teaches your child at the only school in town. The text expresses anxiety about a near-relapse after encountering a former using partner at tonight's community vigil for a local overdose death. The client mentions feeling reassured seeing you there but is now struggling. You both know everyone in this small community is grieving tonight.`,
    question: `What's the best response?`,
    options: [
      'Respond immediately—this is a genuine crisis',
      'Respond the next business day through proper channels',
      'Ignore it to maintain boundaries',
      'Text back but keep it brief'
    ],
    correctAnswer: 1,
    explanation: `Correct: "Respond the next business day through proper channels." Policy #13 requires after-hours boundaries to protect both your well-being and long-term effectiveness. Responding immediately sets an unsustainable precedent and personalizes the dual relationship. Next business day, respond via work channels: "I received your message. I'm glad you reached out instead of using. Let's process this in our session today. If you're in immediate crisis, call the CMDHD crisis line or text 988." During the session, affirm their healthy choice, acknowledge the dual relationship reality, and establish clear crisis protocols. Document thoroughly.`,
    policyReference: 'Policy #13: Work Hours',
    boundaryFocus: 'Work Hours'
  },
  {
    id: 27,
    type: 'poll',
    section: 'Quick Polls & Scenarios',
    sectionIndex: 7,
    duration: 1.5,
    title: 'Scenario 3: Healing Gift from Elder',
    scenario: `A Native American client brings you homemade frybread made by their grandmother. The client explains that in their tradition, accepting food prepared by an elder is a sacred act of connection and healing. They've struggled with feelings of unworthiness throughout treatment, and this gift represents their family's acknowledgment of their recovery journey. Your agency primarily serves Indigenous communities, and you know refusing could damage the therapeutic alliance.`,
    question: 'What should you do?',
    options: [
      'Accept it—cultural sensitivity is important',
      'Decline politely and explain agency policy',
      'Accept and share with the team',
      'Accept but document it thoroughly'
    ],
    correctAnswer: 2,
    explanation: `Best answer: "Accept and share with the team." Policy #14 allows gifts of nominal value (under $25), and cultural context matters. In many Indigenous communities, gift-giving is relational, not transactional—flat refusal can communicate rejection. Respond: "Thank you for this meaningful gift. In my tradition, when I receive something this special, I share it with my whole care team so everyone can be blessed by your grandmother's kindness. May I do that?" Share immediately and document the gift, cultural context, and your response. This honors the tradition while maintaining transparency and appropriate boundaries. When in doubt about culturally significant gifts, consult your supervisor.`,
    policyReference: 'Policy #14: Gifts & Gratuities',
    boundaryFocus: 'Gifts'
  },
  {
    id: 28,
    type: 'poll',
    section: 'Quick Polls & Scenarios',
    sectionIndex: 7,
    duration: 1.5,
    title: 'Scenario 4: Only Provider in 60 Miles',
    scenario: `During intake, you discover your new client attends the small church where you volunteer every Sunday. The client waited 6 weeks for this appointment and specifically requested you based on your reputation in the community. You're the only licensed substance use counselor within 60 miles—the nearest alternative has a 4-month waitlist. The client's assessment reveals high-risk daily opioid use requiring immediate intervention.`,
    question: `What's your first step?`,
    options: [
      `Continue services—they need immediate help`,
      'Disclose to supervisor immediately and discuss whether safeguards allow continuation',
      `Ask the client if they're comfortable with the dual relationship`,
      'Refer immediately to avoid any boundary issues'
    ],
    correctAnswer: 1,
    explanation: `Correct: "Disclose to supervisor immediately and discuss safeguards or reassignment." Policies #4 and #5 require disclosure, not automatic termination—in rural areas, some overlap is inevitable. Your supervisor will assess objectivity, navigation strategies, and needed safeguards. Potential safeguards include proactive informed consent, documented supervision, and clear church interaction boundaries. Say to client: "I want to be transparent—we attend the same church. In this office, everything is confidential. At church, I'm another community member and won't reference our work. I'll consult my supervisor to ensure this doesn't compromise your care." Document thoroughly and honor both access to care and professional boundaries.`,
    policyReference: 'Policy #4 & #5: Conflicts of Interest',
    boundaryFocus: 'Dual Relationships'
  },
  {
    id: 29,
    type: 'poll',
    section: 'Quick Polls & Scenarios',
    sectionIndex: 7,
    duration: 1.5,
    title: 'Scenario 5: Recovery Community Colleague',
    scenario: `A client you discharged 6 months ago sends you a Facebook friend request. They're now a certified peer recovery specialist working at another agency and have referred several people to you. You're both active in the local recovery community and attend the same monthly community celebration events. Their request includes a message: "Would love to stay connected as colleagues in this recovery work. Your support meant everything to my journey."`,
    question: 'Should you accept?',
    options: [
      `Yes—they're now a professional colleague`,
      'No—professional boundaries continue after discharge',
      'Ask them to wait until one year post-discharge',
      'Accept but limit what they can see'
    ],
    correctAnswer: 1,
    explanation: `Correct: "No—professional boundaries continue after discharge." Policy #6 prohibits social media connections with former clients because power differentials and confidentiality considerations persist indefinitely, even in collegial contexts. Risks include post misinterpretation, complicated re-referrals, and undermining their professional role. Respond warmly: "Thank you for this kind message—your support meant a lot. CMDHD policy prevents me from connecting on social media with former clients. That said, I deeply respect your recovery journey and work as a peer specialist. I look forward to collaborating professionally and seeing you at community events." At events, maintain warm professional boundaries. This refusal isn't rejection—it's professional consistency serving the whole recovery community.`,
    policyReference: 'Policy #6: Social Media',
    boundaryFocus: 'Social Media'
  },
  {
    id: 30,
    type: 'poll',
    section: 'Quick Polls & Scenarios',
    sectionIndex: 7,
    duration: 1.5,
    title: 'Scenario 6: Comforting Hug Dilemma',
    scenario: `A client you've been working with for three months just received devastating news—their child's cancer has returned. They're visibly distraught, tears streaming down their face, and they reach out toward you for a hug. You've built a strong therapeutic relationship, and your instinct is to offer comfort. However, you're also aware of professional boundaries around physical contact.`,
    question: 'What do you do?',
    options: [
      'Step back and maintain physical distance',
      'Accept the hug—they clearly need comfort',
      'Offer a brief, professional side hug or hand on shoulder',
      'Redirect to verbal support only'
    ],
    correctAnswer: 2,
    explanation: `Best answer: "Offer a brief, professional side hug or hand on shoulder." Policy #8 requires consent-based approach to physical contact. When a client initiates contact in genuine distress, a brief, professional response is acceptable while maintaining boundaries. Say: "I can see how hard this is" (offer brief side hug or hand on shoulder). Then redirect to verbal support: "Let's sit down and talk about what you're feeling and what support you need right now." Document the interaction, including that the client initiated contact and your professional response. Avoid prolonged or repeated physical contact. If uncertain about appropriateness, consult your supervisor.`,
    policyReference: 'Policy #8: Physical Boundaries & Consent',
    boundaryFocus: 'Consent'
  },

  // Section 8: Decision Tree & Gray Zone Lab (Slides 31-33)
  {
    id: 31,
    type: 'tree',
    section: 'Decision Tree & Documentation',
    sectionIndex: 8,
    duration: 3,
    title: '5-Step Decision Tree',
    steps: [
      {
        number: 1,
        title: 'Check Role & Scope',
        description: `Policy #2: Is this within my job duties?
• Ask: "Would I do this if I weren't trying to be helpful?"
• Red flags: Transportation, errands, financial help, personal favors
• When uncertain, default to "no" and explore role-appropriate alternatives`
      },
      {
        number: 2,
        title: 'Scan for Conflict',
        description: `Policies #4 & #5: Any dual relationships present?
• Social: Church, gym, school, community groups
• Professional: Same employer, mutual colleagues
• Business: Client provides services I use
• Family: Any family connections or friendships
• Rural reality: Overlap is inevitable—disclosure & documentation required`
      },
      {
        number: 3,
        title: 'Confirm Consent',
        description: `Policies #7-9: Clear permission obtained?
• Script: "Would it be okay if I [specific action]?"
• Respect any hesitation as "no"
• Consider: Trauma history, cultural norms, power dynamics
• Default: When in doubt, maintain distance and use verbal support`
      },
      {
        number: 4,
        title: 'Check Time & Channel',
        description: `Policy #13: Within work hours & approved channels?
• Use only: Work phone, work email, EHR messaging
• Never: Personal cell, personal social media, non-work platforms
• After-hours contact requires supervisor approval + documentation
• Establish boundaries in informed consent upfront`
      },
      {
        number: 5,
        title: 'Document & Debrief',
        description: `Best practice: Thorough documentation in client record
• What occurred + clinical reasoning
• Policies consulted (cite #s) + supervisor consultation
• Client response + action plan
• Use objective, professional language
• If "no" or "unsure" on any step → consult supervisor first`
      }
    ],
    facilitatorNotes: [
      'This tool prevents decision paralysis and standardizes care.',
      `If you can't answer "yes" to all five steps, pause and consult your supervisor before proceeding.`,
      `Emphasize: This is a proactive tool—use it BEFORE acting, not after you've already crossed a boundary.`,
      `Rural context: Steps 2 and 4 will require the most nuance. Dual relationships and community contact are inevitable—proper handling through disclosure and documentation is key.`,
      `Real-world application: Walk through one of the scenario examples (slides 25-29) using this decision tree to demonstrate practical use.`
    ]
  },
  {
    id: 32,
    type: 'content',
    section: 'Gray Zone Lab',
    sectionIndex: 8,
    duration: 3,
    title: 'Shared Lessons',
    talkingPoints: [
      `Despite local differences, supervision remains the universal safeguard across all counties.`,
      `Every gray area has a policy touchpoint when you know where to look.`,
      `Key themes that emerge across counties:`,
      `• Disclosure + documentation = protection in dual relationship contexts`,
      `• "Can I?" vs. "Should I?" — scope is about judgment, not just permission`,
      `• When in doubt, consult before acting (not after)`,
      `• Community size doesn't change professional standards—it changes how we apply them`,
      `Your supervisors are resources, not gatekeepers. They want to help you navigate complexity.`,
      `Rural practice requires more boundary vigilance, not less.`
    ],
    facilitatorNotes: [
      'Activity: Ask each group to share one insight or question',
      'Affirm the complexity—there are no "gotcha" scenarios',
      'Connect insights back to specific policies',
      'Emphasize: Supervision is a strength, not a weakness'
    ]
  },

  // Section 9: Documentation & Consultation (Slides 33-34)
  {
    id: 33,
    type: 'content',
    section: 'Decision Tree & Documentation',
    sectionIndex: 9,
    duration: 2,
    title: 'Supervisor Communication Script',
    subtitle: 'How to Initiate Boundary Consultations',
    talkingPoints: [
      `**Why Consult?**: Supervision isn't a sign of incompetence—it's evidence-based practice. Research shows that proactive consultation prevents boundary violations, reduces provider anxiety, and improves clinical outcomes.`,
      `**When to Consult**: Before acting on gray zone situations, when policies seem to conflict, when you feel emotionally pulled, when a client requests something that "feels off," or when county-specific contexts create unique challenges.`,
      `**Structured Communication Framework** (reduces defensiveness and saves time):`,
      `• **Situation**: "I'm working with a client who [specific circumstance]."`,
      `• **Policy Reference**: "I've reviewed Policy #[number] on [topic], and I'm uncertain how it applies here."`,
      `• **Specific Question**: "I'm considering [option A] vs. [option B]. What factors should guide this decision?"`,
      `• **Timeline**: "This isn't urgent/This needs decision by [date] because..."`,
      `**Example Script**: "Hi [Supervisor], I'm assigned to a new client who attends my church and volunteers in the same ministry I do. I've reviewed Policies #4 and #5 on conflicts of interest and dual relationships. Given the 6-week waitlist and this client's high-risk assessment, I'm considering continuing services with documented safeguards versus exploring referral options. Can we discuss this before my next session on Thursday?"`,
      `**Barriers to Overcome**: "I don't want to bother them" (reframe: you're preventing bigger problems), "I should know this" (reframe: complex situations require collaboration), "They'll think I'm incompetent" (reframe: consultation demonstrates professional judgment).`
    ],
    facilitatorNotes: [
      `Normalize consultation: "Your supervisor would rather hear about 50 gray zones that turn out fine than miss the one that becomes a problem."`,
      `Role-play if time allows: Have participants practice the structured framework with a partner.`,
      `Emphasize documentation: Every supervision consultation should be documented in the client record.`
    ]
  },
  {
    id: 34,
    type: 'content',
    section: 'Decision Tree & Documentation',
    sectionIndex: 9,
    duration: 2,
    title: 'Documentation Template Walk-Through',
    subtitle: 'Your Safety Net in Writing',
    talkingPoints: [
      `**Why Document?**: Professional documentation is your protection against allegations, misunderstandings, and liability. It demonstrates thoughtful clinical reasoning and adherence to ethical standards.`,
      `**What to Document** (for boundary-relevant situations):`,
      `• **Situation**: What occurred/was requested? (Objective, factual description)`,
      `• **Policy Consulted**: "Reviewed CMDHD Professional Boundaries Policy #[X]"`,
      `• **Clinical Reasoning**: Why did you make this decision? What factors did you consider?`,
      `• **Supervision**: "Consulted with [Supervisor Name] on [Date]. Guidance: [specific recommendation]."`,
      `• **Client Response**: How did the client react to your boundary decision?`,
      `• **Action Taken**: What specific steps did you implement? Follow-up plan?`,
      `**Example Documentation**:`,
      `"Client requested ride to medical appointment due to transportation barrier (Policy #2: Scope of Practice). Explained that transporting clients is outside my professional role. Collaborated with client to problem-solve: called clinic to explain situation and request appointment hold; contacted Medicaid transport for emergency pickup (arrived within 45 minutes). Client expressed initial frustration but appreciation for problem-solving. Documented transportation barriers for care coordination team. Plan: Establish transportation backup plan in next session."`,
      `**Language Tips**: Use neutral, descriptive, non-judgmental language. Avoid: "Client was manipulative." Use: "Client expressed strong preference for immediate assistance and difficulty accepting alternative options."`,
      `**Your Safety Net**: If a boundary question ever becomes a complaint or legal issue, your contemporaneous documentation is your best defense. Chart it, date it, sign it.`
    ],
    facilitatorNotes: [
      `Provide handout: One-page documentation template with the 6 elements listed above.`,
      `Emphasize: Document the boundary conversation, not just the outcome.`,
      `Address time concerns: "This adds 2-3 minutes to a note but could save you 20 hours in an investigation."`
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
    subtitle: 'What to Remember & Apply',
    talkingPoints: [
      `**Boundaries Protect Everyone**: They uphold ethical principles, protect power differentials, and preserve therapeutic effectiveness for clients, organizations, and professionals.`,
      `**Rural Complexity is Manageable**: Dual relationships are inevitable—manage them through transparency, documentation, and supervision rather than avoidance.`,
      `**Use the 5-Step Decision Tree**: Check role & scope → Scan for conflict → Confirm consent → Check time & channel → Document & debrief. If unsure on any step, consult first.`,
      `**Supervision Strengthens Practice**: Consulting supervisors about gray zones demonstrates professional judgment and prevents boundary violations.`,
      `**Documentation is Protection**: Chart decisions, policy consultations, reasoning, and outcomes using neutral, objective language.`,
      `**Know Your Boundaries**: Some are absolute (no sexual relationships, no transporting). Others require judgment (gifts, encounters). Clarity is kindness.`
    ],
    facilitatorNotes: [
      `Pause for questions: "What's one principle from today that will change how you approach boundary situations?"`,
      `Reinforce: This training provides tools, not perfection. Ethical practice is a lifelong learning process.`
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
      `Research shows that public commitment increases follow-through—this is your accountability moment.`,
      `Make your commitment specific and measurable. Instead of "I'll have better boundaries," try:`,
      `• "I will establish work phone hours in my informed consent with new clients"`,
      `• "I will consult my supervisor before responding to any after-hours contact"`,
      `• "I will document dual relationships proactively, not reactively"`,
      `• "I will pause and use the 5-Step Decision Tree before saying yes to out-of-scope requests"`,
      `• "I will practice saying no with empathy: 'I care about your situation, and this is outside my role. Here's what I can do...'"`,
      `This commitment isn't about perfection—it's about intentional growth.`,
      `Your supervisors are here to support you in this commitment. Use them.`,
      `Optional: Share your commitment with a colleague for mutual accountability.`
    ]
  },
  {
    id: 37,
    type: 'content',
    section: 'Closing & Commitments',
    sectionIndex: 10,
    duration: 1,
    title: 'Evaluation & Feedback',
    subtitle: 'Your Voice Shapes Future Learning',
    talkingPoints: [
      `**Why Your Feedback Matters**: Adult learning research shows that learner feedback is essential for continuous improvement. Your perspective as a rural healthcare professional helps us refine content, adjust examples, and address gaps we might have missed.`,
      `**What We'll Do With It**: Your feedback directly informs future training revisions, supervisor coaching, and CMDHD's professional development priorities. Anonymous feedback will be aggregated and shared with leadership to support ongoing ethics education.`,
      `**Evaluation Questions** (2-3 minutes):`,
      `• Which learning objective was most valuable to your practice?`,
      `• What boundary challenge do you still have questions about?`,
      `• How would you rate the relevance of scenarios to rural Michigan contexts?`,
      `• What one thing would improve this training?`,
      `**QR Code Access**: Scan the code on screen—no login required. Your responses are anonymous unless you choose to share your name for follow-up support.`,
      `**Reflection Prompt**: In one word, what are you leaving with today? (Clarity? Questions? Tools? Confidence? Overwhelmed? Relief?)`,
      `**Thank You**: Your commitment to ethical practice matters. Your willingness to engage with difficult boundary questions protects clients, supports colleagues, and strengthens our community's healthcare.`
    ],
    facilitatorNotes: [
      `Display QR code prominently on screen throughout this slide.`,
      `Collect "one word" responses verbally or via word cloud for closure.`,
      `Remind: Follow-up questions can be directed to supervisors or training coordinator.`
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
  'Policy Foundation',
  'Scope, Ethics & Conflicts',
  'Relational Boundaries',
  'Physical & Communication Standards',
  'Operational & Supervision',
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
