/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Separator } from '@/components/ui/separator';
import { 
  BookOpen,
  Home,
  Presentation,
  Clock,
  Users,
  CheckCircle2,
  AlertTriangle,
  FileText,
  Lightbulb,
  Shield
} from 'lucide-react';
import { presentationSlides, presentationSections } from '@/lib/data/presentation-slides';

export default function FacilitatorGuidePage() {
  // Group slides by section
  const slidesBySection = presentationSections.map(section => ({
    name: section,
    slides: presentationSlides.filter(slide => slide.section === section)
  }));

  const totalDuration = presentationSlides.reduce((total, slide) => total + (slide.duration || 0), 0);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold">Facilitator Guide</h1>
              <p className="text-sm text-muted-foreground">Professional Boundaries Training • October 22, 2025</p>
            </div>
            <div className="flex gap-2">
              <Link href="/">
                <Button variant="ghost" size="sm">
                  <Home className="h-4 w-4 mr-2" />
                  Home
                </Button>
              </Link>
              <Link href="/presentation">
                <Button variant="default" size="sm">
                  <Presentation className="h-4 w-4 mr-2" />
                  Open Presentation
                </Button>
              </Link>
              <Button variant="outline" size="sm" onClick={() => window.print()}>
                <FileText className="h-4 w-4 mr-2" />
                Print Guide
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-8 max-w-5xl">
        {/* Training Overview */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BookOpen className="h-5 w-5" />
              Training Overview
            </CardTitle>
            <CardDescription>
              A comprehensive guide for delivering The Story We&apos;re Telling Ourselves
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="flex items-center gap-3">
                <Clock className="h-5 w-5 text-muted-foreground" />
                <div>
                  <p className="text-sm font-medium">Duration</p>
                  <p className="text-lg">{totalDuration} minutes</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Presentation className="h-5 w-5 text-muted-foreground" />
                <div>
                  <p className="text-sm font-medium">Slides</p>
                  <p className="text-lg">38 slides</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Users className="h-5 w-5 text-muted-foreground" />
                <div>
                  <p className="text-sm font-medium">Sections</p>
                  <p className="text-lg">{presentationSections.length} sections</p>
                </div>
              </div>
            </div>
            
            <Separator />
            
            <div>
              <h3 className="font-semibold mb-2">Learning Objectives</h3>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>• Understand CMDHD's Professional Boundaries Policy and its foundations</li>
                <li>• Identify bright lines, gray zones, and the supervision path</li>
                <li>• Apply the 5-step decision tree to boundary questions</li>
                <li>• Recognize and manage dual relationships in small communities</li>
                <li>• Practice professional communication and documentation</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Pre-Presentation Checklist */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5" />
              Pre-Presentation Checklist
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <input type="checkbox" className="mt-1" />
                <div className="flex-1">
                  <p className="font-medium">Technical Setup</p>
                  <p className="text-sm text-muted-foreground">Test presentation slides, poll platform, QR codes, and audio/video</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <input type="checkbox" className="mt-1" />
                <div className="flex-1">
                  <p className="font-medium">Materials Ready</p>
                  <p className="text-sm text-muted-foreground">CMDHD Policy document, evaluation forms, county scenario cards</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <input type="checkbox" className="mt-1" />
                <div className="flex-1">
                  <p className="font-medium">Room Setup</p>
                  <p className="text-sm text-muted-foreground">Seating arranged for interaction, supplies available (pens, paper)</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <input type="checkbox" className="mt-1" />
                <div className="flex-1">
                  <p className="font-medium">Backup Plan</p>
                  <p className="text-sm text-muted-foreground">Colored cards for voting if polls fail, printed reflection prompts</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Table of Contents */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Presentation Sections</CardTitle>
            <CardDescription>Navigate to specific sections and slides</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {slidesBySection.map((section, idx) => (
                <div key={section.name}>
                  <a href={`#section-${idx + 1}`} className="flex items-center justify-between p-3 rounded-lg hover:bg-muted transition-colors">
                    <div className="flex items-center gap-3">
                      <Badge variant="outline">{idx + 1}</Badge>
                      <span className="font-medium">{section.name}</span>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span>{section.slides.length} slides</span>
                      <span>{section.slides.reduce((total, slide) => total + (slide.duration || 0), 0)} min</span>
                    </div>
                  </a>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Slide-by-Slide Guide */}
        <div className="space-y-8">
          {slidesBySection.map((section, sectionIdx) => (
            <div key={section.name} id={`section-${sectionIdx + 1}`}>
              <div className="mb-4">
                <div className="flex items-center gap-3 mb-2">
                  <Badge className="text-lg px-3 py-1">Section {sectionIdx + 1}</Badge>
                  <h2 className="text-2xl font-bold">{section.name}</h2>
                </div>
                <p className="text-muted-foreground">
                  {section.slides.length} slides • {section.slides.reduce((total, slide) => total + (slide.duration || 0), 0)} minutes
                </p>
              </div>

              <div className="space-y-6">
                {section.slides.map((slide) => (
                  <Card key={slide.id}>
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <Badge variant="secondary">Slide {slide.id}</Badge>
                            <Badge variant="outline">{slide.type}</Badge>
                            <span className="text-sm text-muted-foreground">
                              {slide.duration} {slide.duration === 1 ? 'minute' : 'minutes'}
                            </span>
                          </div>
                          <CardTitle className="text-xl">{slide.type === 'title' ? (slide as any).title : (slide as any).title}</CardTitle>
                          {(slide as any).subtitle && (
                            <p className="text-sm text-muted-foreground mt-1">{(slide as any).subtitle}</p>
                          )}
                          {(slide as any).objective && (
                            <CardDescription className="mt-2">
                              <strong>Objective:</strong> {(slide as any).objective}
                            </CardDescription>
                          )}
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      {/* Policy Reference (Content Slides) */}
                      {slide.type === 'content' && (slide as any).policyReference && (
                        <Alert className="border-l-4 border-l-primary bg-primary/5">
                          <Shield className="h-4 w-4" />
                          <AlertTitle className="text-base">
                            CMDHD Policy §{(slide as any).policyReference.section}
                            {(slide as any).policyReference.externalRef && (
                              <span className="text-sm text-muted-foreground ml-2">
                                {(slide as any).policyReference.externalRef}
                              </span>
                            )}
                          </AlertTitle>
                          <AlertDescription className="text-sm mt-2">
                            <p className="font-semibold mb-2">{(slide as any).policyReference.title}</p>
                            <p className="text-muted-foreground leading-relaxed">{(slide as any).policyReference.text}</p>
                          </AlertDescription>
                        </Alert>
                      )}

                      {/* Talking Points */}
                      {(slide as any).talkingPoints && (slide as any).talkingPoints.length > 0 && (
                        <div>
                          <h4 className="font-semibold mb-2 flex items-center gap-2">
                            <Lightbulb className="h-4 w-4" />
                            Key Talking Points
                          </h4>
                          <ul className="space-y-2">
                            {(slide as any).talkingPoints.map((point: string, idx: number) => (
                              <li key={idx} className="flex gap-2">
                                <span className="text-muted-foreground">•</span>
                                <span className="text-sm">{point}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* Interactive Elements */}
                      {(slide as any).interactive && (
                        <Alert>
                          <AlertTriangle className="h-4 w-4" />
                          <AlertTitle>Interactive Element</AlertTitle>
                          <AlertDescription>
                            <p className="font-medium">{(slide as any).interactive.type}: {(slide as any).interactive.prompt}</p>
                            {(slide as any).interactive.options && (
                              <div className="mt-2">
                                <p className="text-sm font-medium">Options:</p>
                                <ul className="text-sm space-y-1 mt-1">
                                  {(slide as any).interactive.options.map((option: string, idx: number) => (
                                    <li key={idx}>• {option}</li>
                                  ))}
                                </ul>
                              </div>
                            )}
                          </AlertDescription>
                        </Alert>
                      )}

                      {/* Poll Slides */}
                      {slide.type === 'poll' && (
                        <div className="space-y-3">
                          <Alert>
                            <AlertDescription>
                              <p className="font-medium mb-2">Scenario:</p>
                              <p className="text-sm mb-3">{(slide as any).scenario}</p>
                              <p className="font-medium mb-2">Question: {(slide as any).question}</p>
                              <ul className="text-sm space-y-1">
                                {(slide as any).options.map((option: string, idx: number) => (
                                  <li key={idx} className={idx === (slide as any).correctAnswer ? 'font-bold text-green-600' : ''}>
                                    {idx + 1}. {option}
                                  </li>
                                ))}
                              </ul>
                            </AlertDescription>
                          </Alert>
                          <div className="p-3 bg-muted rounded-lg">
                            <p className="font-medium text-sm mb-1">Explanation:</p>
                            <p className="text-sm">{(slide as any).explanation}</p>
                            {(slide as any).policyReference && (
                              <p className="text-sm text-muted-foreground mt-2">
                                <strong>Policy:</strong> {(slide as any).policyReference}
                              </p>
                            )}
                          </div>
                        </div>
                      )}

                      {/* Reflection Slides */}
                      {slide.type === 'reflection' && (
                        <Alert>
                          <AlertDescription>
                            <p className="font-medium mb-2">Reflection Prompt:</p>
                            <p className="text-sm mb-2">{(slide as any).prompt}</p>
                            {(slide as any).placeholder && (
                              <p className="text-sm text-muted-foreground italic">{(slide as any).placeholder}</p>
                            )}
                          </AlertDescription>
                        </Alert>
                      )}

                      {/* Decision Tree */}
                      {slide.type === 'tree' && (
                        <div className="space-y-3">
                          {(slide as any).steps.map((step: any, idx: number) => (
                            <div key={idx} className="flex gap-3 p-3 bg-muted rounded-lg">
                              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                                {step.number}
                              </div>
                              <div>
                                <p className="font-medium">{step.title}</p>
                                <p className="text-sm text-muted-foreground">{step.description}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      )}

                      {/* Table Slides */}
                      {slide.type === 'table' && (
                        <div className="overflow-x-auto">
                          <table className="w-full text-sm">
                            <thead>
                              <tr className="border-b">
                                {(slide as any).headers.map((header: string, idx: number) => (
                                  <th key={idx} className="text-left p-2 font-medium">{header}</th>
                                ))}
                              </tr>
                            </thead>
                            <tbody>
                              {(slide as any).rows.map((row: string[], idx: number) => (
                                <tr key={idx} className="border-b">
                                  {row.map((cell: string, cellIdx: number) => (
                                    <td key={cellIdx} className="p-2">{cell}</td>
                                  ))}
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      )}

                      {/* Quote Slides */}
                      {slide.type === 'quote' && (
                        <Alert>
                          <AlertDescription>
                            <blockquote className="text-lg font-medium italic mb-2">
                              "{(slide as any).quote}"
                            </blockquote>
                            {(slide as any).context && (
                              <p className="text-sm text-muted-foreground">{(slide as any).context}</p>
                            )}
                          </AlertDescription>
                        </Alert>
                      )}

                      {/* Facilitator Notes */}
                      {(slide as any).facilitatorNotes && (slide as any).facilitatorNotes.length > 0 && (
                        <div className="p-3 bg-blue-50 dark:bg-blue-950 rounded-lg border border-blue-200 dark:border-blue-800">
                          <h4 className="font-semibold text-sm mb-2 text-blue-900 dark:text-blue-100">
                            Facilitator Notes
                          </h4>
                          <ul className="space-y-1">
                            {(slide as any).facilitatorNotes.map((note: string, idx: number) => (
                              <li key={idx} className="text-sm text-blue-800 dark:text-blue-200">• {note}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Quick Reference Scripts */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle>Quick Reference: Response Scripts</CardTitle>
            <CardDescription>Ready-to-use scripts for common boundary situations</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <p className="font-medium text-sm mb-1">Transportation Request</p>
              <p className="text-sm text-muted-foreground italic">
                "I understand getting there is hard. I'm not allowed to transport clients, but I can help set up Medicaid transport or a community ride."
              </p>
            </div>
            <Separator />
            <div>
              <p className="font-medium text-sm mb-1">Social Media Friend Request</p>
              <p className="text-sm text-muted-foreground italic">
                "I'm glad the group helped. I keep work and personal life separate, so I don't connect with clients on social media. You can always reach me through the office."
              </p>
            </div>
            <Separator />
            <div>
              <p className="font-medium text-sm mb-1">Gift Offer</p>
              <p className="text-sm text-muted-foreground italic">
                "Thank you so much for the thought. Our policy limits accepting gifts. A note to the team would mean a lot."
              </p>
            </div>
            <Separator />
            <div>
              <p className="font-medium text-sm mb-1">Public Encounter</p>
              <p className="text-sm text-muted-foreground italic">
                "Great to see you! Let's talk about your health privately at our next appointment so I can respect your confidentiality."
              </p>
            </div>
            <Separator />
            <div>
              <p className="font-medium text-sm mb-1">Dual Relationship Disclosure</p>
              <p className="text-sm text-muted-foreground italic">
                "It's good to see a familiar face. In my professional role, I need to keep our visits focused on your goals. I'll check with my supervisor about the best plan."
              </p>
            </div>
          </CardContent>
        </Card>

        {/* County Context */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle>County-Specific Context</CardTitle>
            <CardDescription>Local considerations for boundary discussions</CardDescription>
          </CardHeader>
          <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-3 bg-muted rounded-lg">
              <p className="font-medium mb-1">Arenac</p>
              <p className="text-sm text-muted-foreground">Rural, ~24% seniors. Everyone knows everyone - dual relationships highly likely.</p>
            </div>
            <div className="p-3 bg-muted rounded-lg">
              <p className="font-medium mb-1">Clare</p>
              <p className="text-sm text-muted-foreground">Provider shortages. Staff may feel pressure to exceed scope.</p>
            </div>
            <div className="p-3 bg-muted rounded-lg">
              <p className="font-medium mb-1">Gladwin</p>
              <p className="text-sm text-muted-foreground">Elevated chronic disease. Health literacy and access barriers.</p>
            </div>
            <div className="p-3 bg-muted rounded-lg">
              <p className="font-medium mb-1">Isabella</p>
              <p className="text-sm text-muted-foreground">Younger population, diverse. Campus and tribal contexts with multiple overlapping communities.</p>
            </div>
            <div className="p-3 bg-muted rounded-lg">
              <p className="font-medium mb-1">Osceola</p>
              <p className="text-sm text-muted-foreground">Extreme provider shortage (PCP ~5,600:1). Staff may be asked to perform out-of-scope tasks.</p>
            </div>
            <div className="p-3 bg-muted rounded-lg">
              <p className="font-medium mb-1">Roscommon</p>
              <p className="text-sm text-muted-foreground">~31% seniors, ~26% disability. High need population with limited resources.</p>
            </div>
          </CardContent>
        </Card>

        {/* Closing Notes */}
        <Alert className="mt-8">
          <Lightbulb className="h-4 w-4" />
          <AlertTitle>Key Facilitator Reminders</AlertTitle>
          <AlertDescription>
            <ul className="space-y-1 text-sm mt-2">
              <li>• Frame boundaries as clarity and protection, not restriction</li>
              <li>• Normalize supervision - it's support, not punishment</li>
              <li>• Use "you + we" language instead of "you should"</li>
              <li>• Validate the challenges of small community practice</li>
              <li>• Every gray zone is a learning opportunity</li>
              <li>• Keep polls under 30 seconds response time</li>
              <li>• Model vulnerability and warmth throughout</li>
            </ul>
          </AlertDescription>
        </Alert>
      </main>
    </div>
  );
}
