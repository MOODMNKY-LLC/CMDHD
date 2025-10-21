'use client'

import { useState, useTransition } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { submitPollResponse } from "@/app/protected/actions";
import { ClipboardList, CheckCircle2, AlertCircle, ExternalLink } from "lucide-react";

interface Scenario {
  id: number;
  title: string;
  scenario: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  policyReference: string;
  boundaryFocus: string;
}

interface UserPollResponse {
  poll_id: number;
  selected_option: number;
  is_correct: boolean;
}

interface ScenarioPollsComponentProps {
  userResponses: UserPollResponse[];
}

const SCENARIOS: Scenario[] = [
  {
    id: 25,
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
    boundaryFocus: 'Physical Contact'
  }
];

export function ScenarioPollsComponent({ userResponses }: ScenarioPollsComponentProps) {
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState<string | null>(null);
  const [localResponses, setLocalResponses] = useState<Map<number, UserPollResponse>>(
    new Map(userResponses.map(r => [r.poll_id, r]))
  );

  const handleSubmit = async (scenarioId: number, selectedOption: number, correctAnswer: number) => {
    setError(null);
    
    const isCorrect = selectedOption === correctAnswer;

    startTransition(async () => {
      const result = await submitPollResponse({
        poll_id: scenarioId,
        selected_option: selectedOption,
        is_correct: isCorrect,
      });

      if (result?.error) {
        setError(result.error);
      } else {
        // Update local state to show result immediately
        setLocalResponses(prev => new Map(prev).set(scenarioId, {
          poll_id: scenarioId,
          selected_option: selectedOption,
          is_correct: isCorrect,
        }));
      }
    });
  };

  const completedCount = localResponses.size;

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="flex items-center gap-2">
              <ClipboardList className="h-5 w-5" />
              Boundary Scenarios (Slides 25-30)
            </CardTitle>
            <CardDescription>
              Test your boundary decision-making with realistic healthcare scenarios
            </CardDescription>
          </div>
          <Badge variant={completedCount === 6 ? "default" : "secondary"} className={completedCount === 6 ? "bg-green-600" : ""}>
            {completedCount}/6 Complete
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        <Accordion type="single" collapsible className="w-full">
          {SCENARIOS.map((scenario) => {
            const userResponse = localResponses.get(scenario.id);
            const hasAnswered = !!userResponse;

            return (
              <AccordionItem key={scenario.id} value={`scenario-${scenario.id}`}>
                <AccordionTrigger className="hover:no-underline">
                  <div className="flex items-center gap-3 text-left">
                    {hasAnswered ? (
                      <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0" />
                    ) : (
                      <div className="h-5 w-5 rounded-full border-2 border-muted flex-shrink-0" />
                    )}
                    <div className="flex-1">
                      <p className="font-medium">{scenario.title}</p>
                      <p className="text-xs text-muted-foreground mt-0.5">
                        {scenario.boundaryFocus}
                      </p>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-4 pt-2">
                    {/* Scenario Description */}
                    <div className="rounded-lg bg-muted/50 p-4">
                      <p className="text-sm leading-relaxed">{scenario.scenario}</p>
                    </div>

                    {/* Question */}
                    <div>
                      <Label className="text-base font-semibold">{scenario.question}</Label>
                    </div>

                    {/* Options */}
                    {!hasAnswered ? (
                      <form
                        onSubmit={(e) => {
                          e.preventDefault();
                          const formData = new FormData(e.currentTarget);
                          const selected = parseInt(formData.get(`scenario-${scenario.id}`) as string);
                          if (!isNaN(selected)) {
                            handleSubmit(scenario.id, selected, scenario.correctAnswer);
                          }
                        }}
                      >
                        <RadioGroup name={`scenario-${scenario.id}`} className="space-y-3">
                          {scenario.options.map((option, optionIndex) => (
                            <div key={optionIndex} className="flex items-start space-x-3">
                              <RadioGroupItem
                                value={optionIndex.toString()}
                                id={`scenario-${scenario.id}-option-${optionIndex}`}
                              />
                              <Label
                                htmlFor={`scenario-${scenario.id}-option-${optionIndex}`}
                                className="font-normal cursor-pointer leading-relaxed"
                              >
                                {option}
                              </Label>
                            </div>
                          ))}
                        </RadioGroup>

                        {error && (
                          <p className="text-sm text-red-500 mt-3">{error}</p>
                        )}

                        <Button type="submit" disabled={isPending} className="w-full mt-4">
                          {isPending ? 'Submitting...' : 'Submit Answer'}
                        </Button>
                      </form>
                    ) : (
                      // Show result after answering
                      <div className="space-y-4">
                        <div className="space-y-3">
                          {scenario.options.map((option, optionIndex) => {
                            const isUserChoice = userResponse.selected_option === optionIndex;
                            const isCorrectOption = optionIndex === scenario.correctAnswer;
                            
                            let bgColor = '';
                            if (isCorrectOption) {
                              bgColor = 'bg-green-50 dark:bg-green-950/20 border-green-500';
                            } else if (isUserChoice && !isCorrectOption) {
                              bgColor = 'bg-red-50 dark:bg-red-950/20 border-red-500';
                            } else {
                              bgColor = 'bg-muted/30 border-transparent';
                            }

                            return (
                              <div
                                key={optionIndex}
                                className={`rounded-lg border-2 p-3 ${bgColor}`}
                              >
                                <div className="flex items-start gap-2">
                                  {isCorrectOption && (
                                    <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                                  )}
                                  {isUserChoice && !isCorrectOption && (
                                    <AlertCircle className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                                  )}
                                  <div className="flex-1">
                                    <p className="text-sm">{option}</p>
                                    {isUserChoice && (
                                      <p className="text-xs font-medium mt-1 text-muted-foreground">
                                        Your choice
                                      </p>
                                    )}
                                  </div>
                                </div>
                              </div>
                            );
                          })}
                        </div>

                        {/* Explanation */}
                        <div className="rounded-lg bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800 p-4">
                          <p className="text-sm font-medium mb-2 text-blue-900 dark:text-blue-100">
                            Policy Guidance:
                          </p>
                          <p className="text-sm leading-relaxed text-blue-800 dark:text-blue-200">
                            {scenario.explanation}
                          </p>
                          <div className="mt-3 pt-3 border-t border-blue-200 dark:border-blue-800">
                            <p className="text-xs font-medium text-blue-700 dark:text-blue-300">
                              {scenario.policyReference}
                            </p>
                          </div>
                        </div>

                        {/* Option to change answer */}
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => {
                            setLocalResponses(prev => {
                              const newMap = new Map(prev);
                              newMap.delete(scenario.id);
                              return newMap;
                            });
                          }}
                          className="w-full"
                        >
                          Change Answer
                        </Button>
                      </div>
                    )}

                    {/* Link to presentation slide */}
                    <div className="pt-2 border-t">
                      <Button variant="ghost" size="sm" asChild className="w-full justify-start">
                        <a href={`/presentation?slide=${scenario.id}`} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="mr-2 h-4 w-4" />
                          View in Presentation (Slide {scenario.id})
                        </a>
                      </Button>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            );
          })}
        </Accordion>

        {completedCount === 6 && (
          <div className="mt-6 rounded-lg bg-green-50 dark:bg-green-950/20 p-4 text-center">
            <CheckCircle2 className="h-8 w-8 text-green-600 mx-auto mb-2" />
            <p className="font-medium text-green-900 dark:text-green-100">
              All Scenarios Complete!
            </p>
            <p className="text-sm text-green-700 dark:text-green-300 mt-1">
              You&apos;ve worked through all 6 boundary scenarios. Great work!
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  );
}

