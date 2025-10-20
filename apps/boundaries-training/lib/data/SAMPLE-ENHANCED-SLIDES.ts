/**
 * SAMPLE ENHANCED SLIDES
 * Demonstrating comprehensive, research-based approach with:
 * - Explicit CMDHD policy clause references
 * - Evidence-based content from professional ethics research
 * - Rural healthcare context for Central Michigan counties
 * - Appropriate content volume (3-5 talking points per slide)
 * - Enhanced facilitator guidance
 */

// ============================================================================
// SAMPLE 1: Content Slide - "Scope of Practice & Limits" (Slide 6)
// ENHANCED VERSION with policy mapping and rural context
// ============================================================================

const SAMPLE_ENHANCED_SLIDE_6 = {
  id: 6,
  type: 'content' as const,
  section: 'Policy Fundamentals',
  sectionIndex: 2,
  duration: 3, // Increased from 2 to allow for discussion
  title: `Staying Within Your Professional Role`,
  subtitle: `CMDHD Policy §2 & §13`,
  objective: `Know when a request crosses the line and how to respond with confidence`,
  talkingPoints: [
    `Here's the key: stick to what's in your job description. Things like driving clients to appointments, running errands, or doing favors outside your role? Those fall outside our scope, even when they feel helpful. (That's §2 in the policy.)`,
    `Our work happens during scheduled hours unless you've arranged something different with your supervisor ahead of time (§13). This protects both you and the client.`,
    `There's an important difference: seeing a client at church or the grocery store? That's a "boundary crossing"—it just happens in small towns. But giving them a ride home? That's a "boundary violation"—something we can and should avoid.`,
    `In our six counties, you're going to run into clients in everyday life. That's normal and unavoidable. What matters is keeping our professional helping separate from personal favors.`,
    `When someone asks you for help, pause and ask yourself: "Is this part of my CMDHD role, or am I responding because I personally want to help?" Both matter, but only one is appropriate at work.`
  ],
  interactive: {
    type: 'poll' as const,
    prompt: `Scenario: A client asks you to drive them to a pharmacy "just 2 miles down the road" because they have no transportation. What do you do?`,
    options: [
      `Drive them—it's compassionate and quick`,
      `Decline and explain it's outside my scope (§2), then help connect them to appropriate transportation resources`,
      `Drive them this once but tell them not to ask again`,
      `Ask my supervisor first`
    ]
  },
  facilitatorNotes: [
    `Best answers: Option 2 (decline kindly and help them find transportation resources) or Option 4 (check with supervisor first). Options 1 and 3 violate policy.`,
    `Here's the teaching moment: Our compassion is genuine, but it doesn't override the policy. §2 exists to protect everyone—it prevents dependency, keeps relationships clear, and avoids liability for both staff and CMDHD.`,
    `Ask the group: "What could happen if you drive a client once, and they start expecting rides regularly? How might that change your professional relationship?"`,
    `Let's be real about our counties: transportation IS a genuine challenge across Arenac, Clare, Gladwin, Isabella, Osceola, and Roscommon. That's exactly why we need good resource lists (bus services, volunteer drivers, etc.). We connect people to resources—we don't become the resource ourselves.`,
    `Read §2a aloud from the policy so everyone hears the exact language: [open to policy document]. This helps make it concrete, not abstract.`
  ],
  policyReferences: [`§2`, `§2a`, `§13`], // NEW: Structured policy mapping
  researchBasis: [
    `NASW Code of Ethics 1.06: Conflicts of Interest`,
    `Rural healthcare ethics: Boundary crossings (unavoidable social contact) vs. boundary violations (prohibited role expansion)`,
    `Research shows: Out-of-role favors increase client dependency and reduce professional objectivity (Roberts & Dyer, 2004)`
  ] // NEW: Evidence base
};

// ============================================================================
// SAMPLE 2: Content Slide - "Ethical Frameworks" (Slide 7)
// ENHANCED VERSION with deeper principles explanation
// ============================================================================

const SAMPLE_ENHANCED_SLIDE_7 = {
  id: 7,
  type: 'content' as const,
  section: 'Policy Fundamentals',
  sectionIndex: 2,
  duration: 3,
  title: `The Ethics Behind the Rules`,
  subtitle: `CMDHD Policy §3 & §4 | NASW & ANA Codes`,
  objective: `See how universal ethics principles connect to our everyday boundary decisions`,
  talkingPoints: [
    `Our boundary policy isn't just CMDHD making up rules. It's grounded in the ethical standards that guide all healthcare workers—whether you're following NASW guidelines, ANA nursing ethics, or other professional codes (§3).`,
    `The big idea in §4? We need to avoid conflicts of interest so we can stay objective and make good professional decisions. When we're too close to a situation, our judgment gets cloudy.`,
    `There are four core principles that show up across all healthcare ethics: (1) Autonomy—let clients make their own choices; (2) Beneficence—do what's best for them; (3) Nonmaleficence—first, do no harm; (4) Justice—treat everyone fairly.`,
    `Add one more: Fidelity. That means keeping our promises, maintaining trust, and following through on our professional commitments.`,
    `Here's why this matters: these principles aren't about your personal values or mine. They create a consistent standard across all of us, so every client gets fair treatment—no favoritism, no matter who they know.`
  ],
  facilitatorNotes: [
    `Write these 5 principles on the board or slide. As you go through scenarios later, ask staff to call out which principles apply. This helps make the connection between abstract ethics and real decisions.`,
    `Give them concrete examples: "If I spend an extra hour with a client because they're my neighbor and I like them, which principle am I breaking? Justice—because I'm not treating all clients equally. If I tell a client about my own struggles to build rapport, which one? Nonmaleficence—I might be burdening them with my problems when they came for help."`,
    `Connect the dots: When §4 talks about "impartial judgment," that's the Justice principle in action. When §3 references "ethical standards," it means these principles that all healthcare professions share.`,
    `In small towns, this really matters. Everyone knows everyone. These principles help you treat the mayor's daughter the exact same way you'd treat anyone else—no special favors based on who someone is socially.`,
    `Background reading: NASW Code 1.06 (Conflicts of Interest), ANA Code 2.3 (Professional Boundaries), and Varkey's 2021 article on the four core ethical principles in healthcare give you the full foundation.`
  ],
  policyReferences: [`§3`, `§4`],
  researchBasis: [
    `NASW Code of Ethics 1.06, ANA Code of Ethics Provision 2.3`,
    `Varkey (2021): Four core ethical principles in healthcare - Autonomy, Beneficence, Nonmaleficence, Justice`,
    `Beauchamp & Childress (2019): Principles of Biomedical Ethics - Foundational framework for healthcare ethics`
  ]
};

// ============================================================================
// SAMPLE 3: Content Slide - "Conflicts of Interest & Dual Relationships" (Slide 8)
// ENHANCED VERSION with rural-specific guidance
// ============================================================================

const SAMPLE_ENHANCED_SLIDE_8 = {
  id: 8,
  type: 'content' as const,
  section: 'Policy Fundamentals',
  sectionIndex: 2,
  duration: 4, // Increased - critical topic needing discussion
  title: `When You Already Know Your Client`,
  subtitle: `CMDHD Policy §4, §5, §6 | Rural Healthcare Ethics`,
  objective: `Know the difference between relationships you can't avoid and ones you shouldn't pursue—and when to loop in your supervisor`,
  talkingPoints: [
    `If you're going to be working with someone you already know—maybe a friend of a friend, someone from your church, or a distant relative—talk with your supervisor right away (§5). They'll help you figure out if you should continue, transfer the case, or add extra check-ins.`,
    `Here's what's off-limits: becoming social media friends with clients or their families while you're working with them (§6). No friend requests, no following them, no liking their posts—unless you've talked it through with your supervisor first and they've approved it.`,
    `Let's be real about our six counties. With about 150,000 people spread across Arenac, Clare, Gladwin, Isabella, Osceola, and Roscommon, you're going to run into clients outside of work. It's not a question of "if" but "when." And that's okay—it's just life in a small community.`,
    `Here's an important distinction: seeing a client at the grocery store or your kid's basketball game? That's a "boundary crossing"—it just happens, and it's unavoidable. But inviting them to coffee outside of work or doing personal favors? That's a "boundary violation"—something we choose to do that crosses professional lines.`,
    `The key strategy: be transparent and document. When an overlap happens, tell your supervisor, write down the conversation you had about it, and follow whatever plan you agree on together. This protects you, the client, and the relationship.`
  ],
  interactive: {
    type: 'discussion' as const,
    prompt: `Scenario: You're at your child's basketball game. You realize the opposing team's coach is a client you visited yesterday. What do you do? (Think: boundary crossing or violation?)`
  },
  facilitatorNotes: [
    `This is a boundary crossing—totally unavoidable. What should you do? (1) If they say hi, be polite and friendly. (2) Don't talk about their case or your work together—just normal social chat like you would with anyone. (3) Keep it professional but not cold. (4) Make a note of it for your next supervision meeting so it's documented.`,
    `What would cross into violation territory? Talking about their case at the game ("So how's that feeding schedule working out?"), suggesting you grab coffee after, or pointedly ignoring them in a way that makes them feel bad about being your client.`,
    `Understanding §5: If you know ahead of time that someone's going to be your client (like if your cousin mentions their friend needs help), tell your supervisor before you meet with them. If you don't realize the connection until after you've started, tell your supervisor as soon as you figure it out.`,
    `Why this training matters for retention: Research shows that one of the top reasons rural healthcare workers leave their jobs is feeling unable to manage all the boundary challenges that come with small-town life (Lonne & Cheers, 2004). We're not trying to make this harder—we're giving you tools to navigate it successfully.`,
    `When you tell your supervisor about an overlap, here's what they're thinking about: Could my bias affect this case? What does the client prefer? Do we have another staff member who could take this? Are there cultural factors I need to consider? Then they'll decide whether you continue (with extra documentation), transfer the case, or add more frequent supervision check-ins.`,
    `Remember §4's language: we protect "clients' interests to the greatest extent possible." That means their right to get unbiased service, and your right to have clear guidance when things get complicated.`
  ],
  policyReferences: [`§4`, `§5`, `§5a`, `§6`],
  researchBasis: [
    `Roberts & Dyer (2004): Overlapping relationships in rural healthcare - boundary crossings vs violations framework`,
    `Lonne & Cheers (2004): Rural healthcare workforce retention and boundary challenge management`,
    `Nelson & Pomerantz (2020): Ethics of overlapping relationships in rural/remote healthcare - contextually informed ethics`,
    `AMA Journal of Ethics (2011): Patient privacy and mental health care in rural settings - overlapping roles and altered therapeutic boundaries`
  ]
};

// ============================================================================
// SAMPLE 4: Poll Slide - "Social Media Scenario" (Example from Scenarios section)
// ENHANCED VERSION with deeper scenario and policy tie-in
// ============================================================================

const SAMPLE_ENHANCED_POLL_SLIDE = {
  id: 14, // Example ID
  type: 'poll' as const,
  section: 'Applied Scenarios',
  sectionIndex: 4,
  duration: 4,
  boundaryFocus: `Digital Boundaries & Social Media (§6)`,
  title: `Scenario: The Facebook Friend Request`,
  scenario: `You've been working with Sarah for 3 months now—home visits with this 28-year-old new mom in Isabella County. You've built great rapport. She trusts you, and you've seen real progress with her postpartum depression and how she's caring for her baby. One evening, you get a Facebook friend request from Sarah with this message: "You've been such a blessing! I'd love to stay connected and see updates about your life too. 😊" You genuinely like Sarah and want to support her continued success. What do you do?`,
  question: `What's the best response that follows CMDHD Policy §6?`,
  options: [
    `Accept the request—we have a good relationship and it will help her feel supported.`,
    `Accept the request but set my privacy settings so she can't see personal posts.`,
    `Decline the request without explanation to avoid awkwardness.`,
    `Decline the request with a kind explanation, reinforcing professional boundaries and offering alternative support resources.`,
    `Ask my supervisor before responding to the request.`
  ],
  correctAnswer: 4, // Options 4 or 5 are both acceptable
  explanation: `The best answers are Option 4 (decline kindly with an explanation) or Option 5 (check with your supervisor first). Here's why: §6 says we can't friend current clients on social media without talking to our supervisor first. Sarah's request comes from a good place, but accepting it creates some real problems: (1) Blurred lines—she might start messaging you about her case outside of work hours (which breaks §13); (2) Privacy risks—if you post about work stuff, you might accidentally share something confidential; (3) Dual roles—you'd be both her professional support and her social media friend; (4) Fairness issues—if you accept Sarah but decline other clients' requests, that's not treating everyone equally (Justice principle). Here's how you could respond kindly: "Sarah, thank you so much for the friend request—it really means a lot that we've built this trust together! CMDHD's policy asks me to keep my professional and personal social media separate to protect your privacy and our working relationship. I'm absolutely still here to support you during our visits, and let's talk next week about some local support groups where you can connect with other new moms!" Then make a note of this in your supervision meeting (§5 and §6).`,
  policyReference: `CMDHD Policy §6 (Social Media Boundaries), §5 (Disclosure to Supervisor), §13 (Work Hours)`,
  facilitatorNotes: [
    `Let staff vote first before you reveal the answer. You'll probably see a lot of people choosing Option 2 (accept but use privacy settings) or Option 4. That's a great teaching opportunity.`,
    `Here's the key teaching moment: Even if you adjust your privacy settings, you've still created a dual relationship. The problem isn't what Sarah can or can't see—it's that you're now playing two different roles in her life.`,
    `Read §6 out loud so everyone hears the exact wording: "Employees may not knowingly friend an individual currently receiving services from CMDHD without first discussing the relationship and potential implications with their supervisor." This means Options 1, 2, and 3 all break policy. Only 4 and 5 follow it.`,
    `Good discussion question: "Notice the policy says 'without first discussing'—why not just ban it completely?" Answer: Because context matters. In rare situations (like if a client is also a professional colleague in a totally different setting), a supervisor might say it's okay. But the default answer is no.`,
    `Try this follow-up: "What if Sarah sent that friend request 6 months after services ended?" Answer: You'd still want to check with your supervisor. The policy doesn't say "current" by accident—even after services end, there's still a power imbalance to think about.`,
    `Small-town reality check: In Isabella County (pop. about 70,000), you and your clients are going to have mutual Facebook friends. You might see each other's posts through those connections. That's unavoidable and okay. What the policy protects against is you directly friending each other.`,
    `Be ready with resources: Have a list of local peer support groups, community resources, and warmlines handy. When staff practice declining these requests, they can offer real alternatives that help clients build healthy peer connections.`
  ],
  researchBasis: [
    `NASW (2017): Technology Standards - Social media boundaries in professional relationships`,
    `Kolmes & Taube (2014): Seeking and finding our clients on the Internet: Boundary considerations in cyberspace`,
    `Clinton et al. (2010): Social media and professional boundaries in healthcare`
  ]
};

/**
 * KEY ENHANCEMENTS DEMONSTRATED:
 * 
 * 1. POLICY MAPPING: Every slide explicitly cites CMDHD policy clause numbers (§1-§15)
 * 2. RESEARCH BASIS: Evidence-based content from NASW, ANA, peer-reviewed rural healthcare ethics literature
 * 3. RURAL CONTEXT: Specific acknowledgment of Central Michigan's 6 counties and small-community realities
 * 4. CONTENT VOLUME: 3-5 talking points per slide (best practice for retention)
 * 5. FACILITATOR DEPTH: Comprehensive notes with teaching strategies, discussion prompts, correct answers, and policy read-alouds
 * 6. ETHICAL FRAMEWORKS: Explicit connection to Autonomy, Beneficence, Nonmaleficence, Justice, Fidelity
 * 7. BOUNDARY DISTINCTION: Clear "crossing vs. violation" language throughout
 * 8. ACTIONABLE GUIDANCE: Every scenario includes "what to do" steps, not just "what not to do"
 * 9. SUPERVISOR ROLE: Emphasizes transparency and consultation as protective mechanisms
 * 10. CULTURAL COMPETENCE: Acknowledges rural healthcare workforce challenges and retention factors
 */

export const SAMPLE_ENHANCED_SLIDES = [
  SAMPLE_ENHANCED_SLIDE_6,
  SAMPLE_ENHANCED_SLIDE_7,
  SAMPLE_ENHANCED_SLIDE_8,
  SAMPLE_ENHANCED_POLL_SLIDE
];

