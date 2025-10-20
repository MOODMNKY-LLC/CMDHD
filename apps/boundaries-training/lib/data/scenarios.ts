export interface Scenario {
  number: string;
  title: string;
  description: string;
  modelPhrase: string;
  actions: string[];
}

export const scenarios: Scenario[] = [
  {
    number: "01",
    title: "Transportation Dilemma",
    description: "Client requests a ride to an appointment in a rural area without transit.",
    modelPhrase: '"I understand it\'s difficult to get there. I\'m not allowed to transport clients, but I can help arrange Medicaid transport or a community ride."',
    actions: [
      "Offer in-scope alternatives/referrals and document",
      "Consult supervisor if no resource is available"
    ]
  },
  {
    number: "02",
    title: "Dual Relationship",
    description: "You discover a client is a neighbor/family acquaintance and expects friendly visits.",
    modelPhrase: '"It\'s nice to see a familiar face. In my professional role, I need to keep our visits focused on program goals. I\'ll also check with my supervisor about the best plan."',
    actions: [
      "Notify supervisor; consider reassignment",
      "Document discussion and boundary setting"
    ]
  },
  {
    number: "03",
    title: "Social Media Request",
    description: "Client sends a friend request and invites you for coffee.",
    modelPhrase: '"I keep work and personal life separate, so I don\'t connect with clients on social media. You can always reach me through the office."',
    actions: [
      "Decline request; redirect to official channels",
      "Inform supervisor if pattern persists"
    ]
  },
  {
    number: "04",
    title: "Public Encounter",
    description: "Client discusses their case at a community event and introduces you to family.",
    modelPhrase: '"Great to see you! Let\'s talk about your health privately at our next appointment so I can respect your confidentiality."',
    actions: [
      "Do not confirm PHI in public; redirect",
      "Document; raise with supervisor if needed"
    ]
  }
];

