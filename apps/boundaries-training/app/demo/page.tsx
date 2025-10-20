"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { ArrowRight, BookOpen, Sparkles, CheckCircle2, Code2 } from "lucide-react";
import Link from "next/link";

export default function DemoPage() {
  return (
    <div className="container mx-auto py-12 px-4 max-w-7xl">
      {/* Header */}
      <div className="mb-12 text-center">
        <Badge className="mb-4" variant="secondary">
          <Sparkles className="h-3 w-3 mr-1" />
          Preview Enhancement
        </Badge>
        <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
          Professional Boundaries Training
        </h1>
        <h2 className="text-3xl font-semibold mb-4">Enhanced Slides Preview</h2>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Compare current slides with comprehensive, research-based enhancements integrating CMDHD policy, rural healthcare ethics, and evidence-based best practices.
        </p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">Policy References</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-primary">+300%</div>
            <p className="text-xs text-muted-foreground mt-1">Per slide coverage</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">Facilitator Notes</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-primary">+400%</div>
            <p className="text-xs text-muted-foreground mt-1">Detail depth</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">Research Citations</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-primary">2-4</div>
            <p className="text-xs text-muted-foreground mt-1">Per slide</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">Rural Context</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-primary">6</div>
            <p className="text-xs text-muted-foreground mt-1">Counties integrated</p>
          </CardContent>
        </Card>
      </div>

      {/* Sample Slides */}
      <Tabs defaultValue="slide6" className="mb-12">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="slide6">Slide 6: Scope</TabsTrigger>
          <TabsTrigger value="slide7">Slide 7: Ethics</TabsTrigger>
          <TabsTrigger value="slide8">Slide 8: Dual Relations</TabsTrigger>
          <TabsTrigger value="poll">Poll: Social Media</TabsTrigger>
        </TabsList>

        {/* SLIDE 6: Scope of Practice */}
        <TabsContent value="slide6" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* BEFORE */}
            <Card className="border-destructive/50">
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <Badge variant="destructive">Current Version</Badge>
                </div>
                <CardTitle>Scope of Practice & Limits</CardTitle>
                <CardDescription className="italic">
                  Objective: Identify what&apos;s inside and outside your professional role
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2 text-sm">Talking Points (3)</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Operate within your defined scope—no transporting clients, running errands...</li>
                    <li>• Doing more than your role allows can create dependency, liability...</li>
                    <li>• Always ask yourself: Does this task belong to my professional role...</li>
                  </ul>
                </div>
                <div className="p-3 bg-muted rounded-lg">
                  <h4 className="font-semibold mb-2 text-xs">Facilitator Notes (1)</h4>
                  <p className="text-xs">Teach-back: Cite policy clause §2 and explain why it&apos;s a clear boundary</p>
                </div>
                <Alert>
                  <AlertTitle className="text-sm">Issues</AlertTitle>
                  <AlertDescription className="text-xs space-y-1">
                    <p>❌ Generic guidance without policy integration</p>
                    <p>❌ No rural context</p>
                    <p>❌ Minimal facilitator support</p>
                    <p>❌ Missing research basis</p>
                  </AlertDescription>
                </Alert>
              </CardContent>
            </Card>

            {/* AFTER */}
            <Card className="border-primary">
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <Badge className="bg-primary">Enhanced Version</Badge>
                  <Badge variant="outline">§2, §2a, §13</Badge>
                </div>
                <CardTitle>Scope of Practice & Professional Limits</CardTitle>
                <CardDescription className="italic">
                  Objective: Recognize when requests fall outside your professional role and how to respond ethically
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2 text-sm">Talking Points (5)</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• §2: Work ONLY within your defined scope—no transporting clients...</li>
                    <li>• §13: Services occur during defined work hours unless pre-arranged...</li>
                    <li>• Boundary crossing vs. violation: One-time favor may seem kind, but repeated out-of-scope help creates dependency...</li>
                    <li>• <strong>Rural reality:</strong> In small communities, you may see clients at the grocery store (crossing). Driving them home is a violation.</li>
                    <li>• Always ask: &quot;Does this request align with my job description and CMDHD&apos;s mission...&quot;</li>
                  </ul>
                </div>
                <div className="p-3 bg-primary/5 border border-primary/20 rounded-lg">
                  <h4 className="font-semibold mb-2 text-xs text-primary">Facilitator Notes (5)</h4>
                  <ul className="space-y-1 text-xs">
                    <li>✓ CORRECT ANSWER: Decline + resource connection or Ask supervisor</li>
                    <li>✓ KEY TEACHING: Compassion does not override policy</li>
                    <li>✓ DISCUSSION: &quot;Why might transportation favors harm relationship?&quot;</li>
                    <li>✓ RURAL CONTEXT: Limited transportation in Arenac, Clare, Gladwin, Isabella, Osceola, Roscommon counties</li>
                    <li>✓ POLICY REFERENCE: Read aloud §2a from policy document</li>
                  </ul>
                </div>
                <div className="p-3 bg-muted rounded-lg">
                  <h4 className="font-semibold mb-2 text-xs">Research Basis (3)</h4>
                  <ul className="space-y-1 text-xs text-muted-foreground">
                    <li>• NASW Code of Ethics 1.06: Conflicts of Interest</li>
                    <li>• Rural healthcare ethics: Boundary crossings vs. violations</li>
                    <li>• Research: Out-of-role favors increase dependency (Roberts & Dyer, 2004)</li>
                  </ul>
                </div>
                <Alert>
                  <CheckCircle2 className="h-4 w-4" />
                  <AlertTitle className="text-sm">Improvements</AlertTitle>
                  <AlertDescription className="text-xs space-y-1">
                    <p>✅ Explicit policy clause citations</p>
                    <p>✅ Rural-specific context (6 counties)</p>
                    <p>✅ Research citations</p>
                    <p>✅ Comprehensive facilitator guidance</p>
                  </AlertDescription>
                </Alert>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* SLIDE 7: Ethical Frameworks */}
        <TabsContent value="slide7" className="space-y-6">
          <Alert className="mb-6">
            <Sparkles className="h-4 w-4" />
            <AlertTitle>Enhancement Focus: Ethical Principles Integration</AlertTitle>
            <AlertDescription>
              Connects CMDHD policy to universal healthcare ethics frameworks (NASW, ANA) with practical rural applications.
            </AlertDescription>
          </Alert>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="border-destructive/50">
              <CardHeader>
                <Badge variant="destructive" className="mb-2 w-fit">Current</Badge>
                <CardTitle>Ethical Frameworks</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• NASW 1.06 and ANA 2.3 emphasize avoiding conflicts...</li>
                  <li>• Five principles: Autonomy, Beneficence, Nonmaleficence, Fidelity, Justice</li>
                  <li>• Professional ethics transcend our individual values</li>
                </ul>
                <p className="text-xs text-destructive">❌ No policy connection | ❌ Principles not explained</p>
              </CardContent>
            </Card>

            <Card className="border-primary">
              <CardHeader>
                <div className="flex gap-2 mb-2">
                  <Badge className="bg-primary">Enhanced</Badge>
                  <Badge variant="outline">§3, §4</Badge>
                </div>
                <CardTitle>Ethical Frameworks That Guide Our Work</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <ul className="space-y-2 text-sm">
                  <li>• §3: All staff comply with ethical standards from professional organizations</li>
                  <li>• §4: Avoid conflicts of interest that interfere with professional judgment</li>
                  <li>• <strong>Four Core Principles:</strong> (1) Autonomy - respect client self-determination; (2) Beneficence - act in best interest; (3) Nonmaleficence - do no harm; (4) Justice - treat equitably</li>
                  <li>• Plus Fidelity: Honor commitments, maintain trust</li>
                  <li>• <strong>Rural Application:</strong> Treat the mayor&apos;s daughter same as farmer&apos;s son—no favoritism</li>
                </ul>
                <div className="p-3 bg-primary/5 border border-primary/20 rounded-lg text-xs">
                  <p className="font-semibold mb-1">Teaching Strategy:</p>
                  <p>Write 4 principles on board. Ask staff to identify which apply to each scenario throughout training.</p>
                </div>
                <p className="text-xs text-primary">✅ Policy §3 & §4 | ✅ Principles defined | ✅ Rural context | ✅ Teaching strategy</p>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* SLIDE 8: Dual Relationships */}
        <TabsContent value="slide8" className="space-y-6">
          <Alert className="mb-6">
            <Sparkles className="h-4 w-4" />
            <AlertTitle>Enhancement Focus: Rural Healthcare Research Integration</AlertTitle>
            <AlertDescription>
              Incorporates 4 peer-reviewed studies on managing inevitable overlapping relationships in small communities (pop. ~150,000).
            </AlertDescription>
          </Alert>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="border-destructive/50">
              <CardHeader>
                <Badge variant="destructive" className="mb-2 w-fit">Current</Badge>
                <CardTitle className="text-lg">Conflicts of Interest & Dual Relationships</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• In small counties, dual relationships are inevitable</li>
                  <li>• If you know a client socially, disclose to supervisor</li>
                  <li>• Transparency protects you</li>
                  <li>• Example: Cousin&apos;s friend becomes client—transfer if needed</li>
                </ul>
                <p className="text-xs text-destructive">❌ No policy refs | ❌ &quot;Inevitable&quot; not explained | ❌ No research | ❌ No supervisor guidance</p>
              </CardContent>
            </Card>

            <Card className="border-primary">
              <CardHeader>
                <div className="flex gap-2 mb-2 flex-wrap">
                  <Badge className="bg-primary">Enhanced</Badge>
                  <Badge variant="outline">§4, §5, §6</Badge>
                  <Badge variant="secondary">4 Studies</Badge>
                </div>
                <CardTitle className="text-lg">Managing Dual Relationships in Small Communities</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <ul className="space-y-2 text-sm">
                  <li>• §5: Pre-existing personal/social relationship? Discuss with supervisor IMMEDIATELY</li>
                  <li>• §6: No friending clients on social media without supervisor approval</li>
                  <li>• <strong>Rural Reality:</strong> In Arenac, Clare, Gladwin, Isabella, Osceola, Roscommon (pop. ~150,000), overlapping relationships are INEVITABLE</li>
                  <li>• <strong>Research-backed:</strong> &quot;Boundary crossing&quot; (unavoidable contact) vs &quot;Boundary violation&quot; (prohibited actions)</li>
                  <li>• <strong>Key Strategy:</strong> Transparency + Documentation</li>
                </ul>
                <div className="p-3 bg-muted rounded-lg text-xs space-y-2">
                  <p className="font-semibold">Research Citations (4):</p>
                  <ul className="space-y-1">
                    <li>• Roberts & Dyer (2004): Overlapping relationships framework</li>
                    <li>• Lonne & Cheers (2004): Workforce retention & boundary challenges</li>
                    <li>• Nelson & Pomerantz (2020): Contextually informed ethics</li>
                    <li>• AMA Journal of Ethics (2011): Rural mental health privacy</li>
                  </ul>
                </div>
                <div className="p-3 bg-primary/5 border border-primary/20 rounded-lg text-xs">
                  <p className="font-semibold mb-1">Supervisor Decision Framework:</p>
                  <p>(1) Risk of bias? (2) Client preference? (3) Alternative staff? (4) Cultural factors? → Continue with documentation, transfer, or add supervision</p>
                </div>
                <p className="text-xs text-primary">✅ §4, §5, §6 | ✅ Population context | ✅ 4 research citations | ✅ Supervisor framework</p>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* POLL SLIDE: Social Media */}
        <TabsContent value="poll" className="space-y-6">
          <Alert className="mb-6">
            <Sparkles className="h-4 w-4" />
            <AlertTitle>Enhancement Focus: Scenario Depth & Multi-Dimensional Explanation</AlertTitle>
            <AlertDescription>
              Poll slides now include 3-month relationship context, policy integration (§6, §5, §13), sample response scripts, and discussion prompts.
            </AlertDescription>
          </Alert>

          <Card className="border-primary">
            <CardHeader>
              <div className="flex gap-2 mb-2 flex-wrap">
                <Badge className="bg-primary">Enhanced Poll Slide</Badge>
                <Badge variant="outline">§6 Social Media</Badge>
              </div>
              <CardTitle>Scenario: The Facebook Friend Request</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="p-4 bg-muted rounded-lg">
                <p className="text-sm"><strong>Scenario:</strong> You provide home visiting services to Sarah, a 28-year-old new mother in Isabella County. You&apos;ve built excellent rapport over 3 months—she trusts you and has made significant progress. One evening, you receive a Facebook friend request from Sarah: &quot;You&apos;ve been such a blessing! I&apos;d love to stay connected and see updates about your life too. 😊&quot; You genuinely like Sarah. What do you do?</p>
              </div>

              <div>
                <p className="font-semibold text-sm mb-2">Options (Staff Poll First):</p>
                <ol className="space-y-2 text-sm">
                  <li className="p-2 bg-destructive/10 rounded">1. Accept—we have good relationship ❌</li>
                  <li className="p-2 bg-destructive/10 rounded">2. Accept but set privacy settings ❌</li>
                  <li className="p-2 bg-destructive/10 rounded">3. Decline without explanation ❌</li>
                  <li className="p-2 bg-primary/20 rounded font-semibold">4. Decline with kind explanation, reinforce boundaries ✅</li>
                  <li className="p-2 bg-primary/20 rounded font-semibold">5. Ask supervisor first ✅</li>
                </ol>
              </div>

              <Alert>
                <AlertTitle className="text-sm">Multi-Dimensional Explanation</AlertTitle>
                <AlertDescription className="text-sm space-y-2">
                  <p><strong>Why Options 1-3 violate policy:</strong></p>
                  <ul className="space-y-1 text-xs ml-4">
                    <li>• §6: No friending current clients without supervisor discussion</li>
                    <li>• §13 risk: She may message about services outside work hours</li>
                    <li>• Dual relationship: Professional helper + social media friend</li>
                    <li>• Justice principle: If you accept Sarah but not others, inequity</li>
                  </ul>
                  <p className="mt-2"><strong>Sample Kind Response Script:</strong></p>
                  <p className="text-xs italic bg-background p-2 rounded">&quot;Thank you for the friend request, Sarah—it means a lot that we&apos;ve built trust! CMDHD policy requires I keep professional and personal social media separate to protect your privacy. I&apos;m still fully here to support you during our visits. Let&apos;s talk next week about community support groups where you can build peer connections!&quot;</p>
                </AlertDescription>
              </Alert>

              <div className="p-3 bg-primary/5 border border-primary/20 rounded-lg">
                <p className="font-semibold text-xs mb-2">Facilitator Notes (7 comprehensive points):</p>
                <ul className="space-y-1 text-xs">
                  <li>1. Poll first before revealing answer</li>
                  <li>2. Teaching: Privacy settings don&apos;t fix the dual relationship issue</li>
                  <li>3. Read §6 aloud verbatim</li>
                  <li>4. Discussion: &quot;Why not absolute ban? Contextual ethics.&quot;</li>
                  <li>5. Follow-up: &quot;What if 6 months AFTER services end?&quot;</li>
                  <li>6. Rural context: Mutual friends are unavoidable; direct connection is not</li>
                  <li>7. Have peer support group list ready to offer alternatives</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Implementation Details */}
      <Card className="mb-12">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Code2 className="h-5 w-5" />
            Technical Implementation
          </CardTitle>
          <CardDescription>New structured data fields for all 38 slides</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="bg-muted p-4 rounded-lg font-mono text-sm">
            <code>{`{
  // Existing fields
  id, type, section, duration, title, objective, talkingPoints...
  
  // NEW FIELDS:
  subtitle?: string;              // "CMDHD Policy §2 & §13"
  policyReferences: string[];     // ['§2', '§2a', '§13']
  researchBasis: string[];        // ['NASW 1.06', 'Roberts 2004']
  countyContext?: string;         // 6-county specific details
}`}</code>
          </div>
        </CardContent>
      </Card>

      {/* Call to Action */}
      <div className="flex gap-4 justify-center">
        <Link href="/presentation">
          <Button size="lg" variant="outline">
            View Current Presentation
          </Button>
        </Link>
        <Link href="/presentation/facilitator-guide" target="_blank">
          <Button size="lg" variant="outline">
            <BookOpen className="h-4 w-4 mr-2" />
            Facilitator Guide
          </Button>
        </Link>
        <Button size="lg" className="bg-primary" asChild>
          <a href="apps/boundaries-training/ENHANCEMENT-PROPOSAL.md">
            <ArrowRight className="h-4 w-4 mr-2" />
            Full Enhancement Proposal
          </a>
        </Button>
      </div>

      {/* Footer Note */}
      <div className="mt-12 text-center text-sm text-muted-foreground">
        <p>Sample enhancements shown above. Full implementation will apply this approach to all 38 slides.</p>
        <p className="mt-2">Estimated implementation time: 8-10 hours | Files: presentation-slides.ts + facilitator-guide/page.tsx</p>
      </div>
    </div>
  );
}

