import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { scenarios } from "@/lib/data";

export const metadata = {
  title: "Practice Scenarios | CMDHD Boundaries Training",
  description: "Real-world boundary situations with model phrases and escalation strategies for CMDHD staff.",
};

export default function ScenariosPage() {
  return (
    <main className="relative min-h-screen">
      {/* Hero Section */}
      <section className="border-b bg-gradient-to-br from-background via-background to-muted/20">
        <div className="mx-auto max-w-7xl px-6 py-16 md:py-20">
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
              Practice Scenarios
            </h1>
            <p className="text-xl text-muted-foreground">
              Real-world boundary situations you&apos;ll encounter, with model phrases and escalation strategies drawn from CMDHD staff experiences
            </p>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-6 py-16">
        {/* Scenarios Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {scenarios.map((scenario) => (
            <Card key={scenario.number} className="border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-xl">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <div className="text-4xl font-bold text-primary/20 mb-2">{scenario.number}</div>
                    <CardTitle className="text-xl">{scenario.title}</CardTitle>
                  </div>
                </div>
                <CardDescription className="text-base pt-2">{scenario.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-4 bg-muted/50 rounded-lg border-l-4 border-primary">
                  <p className="text-xs font-semibold text-primary mb-2">MODEL PHRASE</p>
                  <p className="text-sm italic">{scenario.modelPhrase}</p>
                </div>
                <div>
                  <p className="text-xs font-semibold mb-2">ESCALATION STEPS</p>
                  <ul className="space-y-1.5">
                    {scenario.actions.map((action, idx) => (
                      <li key={idx} className="text-sm flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{action}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <section className="mt-16 relative overflow-hidden rounded-2xl border-2 border-primary/20 bg-gradient-to-br from-primary/5 via-primary/10 to-primary/5 p-12">
          <div className="relative text-center space-y-6">
            <h2 className="text-3xl font-bold">Ready to Practice?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              These scenarios are just a preview. The full training includes interactive exercises, discussion prompts, and personalized feedback to help you master professional boundaries.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button asChild size="lg">
                <Link href="/protected">
                  Enter Full Training →
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/policy">
                  View Policy Document
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

