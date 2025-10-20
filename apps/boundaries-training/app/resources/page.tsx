import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, Download, ExternalLink, BookOpen, FileCheck } from "lucide-react";

export const metadata = {
  title: "Training Resources | CMDHD Boundaries Training",
  description: "Policy documents, training materials, reference guides, and support resources for professional boundaries training.",
};

export default function ResourcesPage() {
  return (
    <main className="relative min-h-screen">
      {/* Hero Section */}
      <section className="border-b bg-gradient-to-br from-background via-background to-muted/20">
        <div className="mx-auto max-w-7xl px-6 py-16 md:py-20">
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
              Training Resources
            </h1>
            <p className="text-xl text-muted-foreground">
              Policy documents, training materials, and reference guides for professional boundaries
            </p>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-6 py-16 space-y-16">
        {/* Section 1: Policy Documents */}
        <section className="space-y-6">
          <div>
            <h2 className="text-3xl font-bold mb-2">Policy Documents</h2>
            <p className="text-muted-foreground">Official CMDHD policy and professional ethics codes</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border-2 hover:border-primary/50 transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <FileCheck className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-xl">CMDHD Professional Boundaries Policy</CardTitle>
                <CardDescription>Official policy document, effective June 30, 2025</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button asChild className="w-full">
                  <Link href="/policy">
                    <FileText className="mr-2 w-4 h-4" />
                    View Policy
                  </Link>
                </Button>
                <Button asChild variant="outline" className="w-full">
                  <a href="/docs/cmdhd-professional-boundaries-policy.md" target="_blank" rel="noopener noreferrer">
                    <Download className="mr-2 w-4 h-4" />
                    Download Markdown
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary/50 transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <FileText className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-xl">Professional Ethics Codes</CardTitle>
                <CardDescription>NASW and ANA professional standards</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <Button asChild variant="outline" className="w-full justify-start">
                  <a href="https://www.socialworkers.org/About/Ethics/Code-of-Ethics" target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 w-4 h-4" />
                    NASW Code of Ethics
                  </a>
                </Button>
                <Button asChild variant="outline" className="w-full justify-start">
                  <a href="https://www.nursingworld.org/practice-policy/nursing-excellence/ethics/code-of-ethics-for-nurses/" target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 w-4 h-4" />
                    ANA Code of Ethics
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Section 2: Training Materials */}
        <section className="space-y-6">
          <div>
            <h2 className="text-3xl font-bold mb-2">Training Materials</h2>
            <p className="text-muted-foreground">Presentation slides, facilitator guides, and module plans</p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="border-2 hover:border-primary/50 transition-all duration-300">
              <CardHeader>
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                  <BookOpen className="w-5 h-5 text-primary" />
                </div>
                <CardTitle className="text-lg">Presentation Slides</CardTitle>
              </CardHeader>
              <CardContent>
                <Button asChild variant="outline" size="sm" className="w-full">
                  <a href="/docs/slide-deck.md" target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 w-3 h-3" />
                    View Slides
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary/50 transition-all duration-300">
              <CardHeader>
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                  <FileText className="w-5 h-5 text-primary" />
                </div>
                <CardTitle className="text-lg">Training Scaffold</CardTitle>
              </CardHeader>
              <CardContent>
                <Button asChild variant="outline" size="sm" className="w-full">
                  <a href="/docs/boundaries-training-scaffold.md" target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 w-3 h-3" />
                    Module Plan
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary/50 transition-all duration-300">
              <CardHeader>
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                  <FileCheck className="w-5 h-5 text-primary" />
                </div>
                <CardTitle className="text-lg">Policy Integration</CardTitle>
              </CardHeader>
              <CardContent>
                <Button asChild variant="outline" size="sm" className="w-full">
                  <a href="/docs/training-and-policy.md" target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 w-3 h-3" />
                    Mapping Doc
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Section 3: Support & Contact */}
        <section className="space-y-6">
          <div>
            <h2 className="text-3xl font-bold mb-2">Support & Guidance</h2>
            <p className="text-muted-foreground">When you need help navigating boundary situations</p>
          </div>
          
          <Card className="border-2">
            <CardHeader>
              <CardTitle className="text-xl">Need Help with a Boundary Situation?</CardTitle>
              <CardDescription>Contact your supervisor or use these resources</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="p-4 bg-muted/50 rounded-lg space-y-2">
                <p className="font-semibold text-sm">Remember:</p>
                <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                  <li>Always discuss boundary concerns with your supervisor</li>
                  <li>Document any boundary situations or challenges</li>
                  <li>When in doubt, err on the side of caution</li>
                  <li>Refer to the policy for specific guidance</li>
                </ul>
              </div>
              <div className="flex gap-3">
                <Button asChild variant="outline">
                  <Link href="/policy">View Policy</Link>
                </Button>
                <Button asChild variant="outline">
                  <Link href="/scenarios">Practice Scenarios</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* CTA */}
        <section className="relative overflow-hidden rounded-2xl border-2 border-primary/20 bg-gradient-to-br from-primary/5 via-primary/10 to-primary/5 p-12">
          <div className="relative text-center space-y-6">
            <h2 className="text-3xl font-bold">Ready to Begin Training?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Access all these resources and more in the interactive training module
            </p>
            <Button asChild size="lg">
              <Link href="/protected">
                Enter Training →
              </Link>
            </Button>
          </div>
        </section>
      </div>
    </main>
  );
}


