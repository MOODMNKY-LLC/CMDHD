"use client";

import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Calendar,
  Clock,
  CheckCircle2,
  ArrowRight,
  FileText,
  Shield,
  Users,
  Heart,
  MapPin
} from "lucide-react";
import { learningObjectives, trainingSteps, learningOutcomes } from "@/lib/data";
import { TrainingQRCode } from "@/components/training-qr-code";

export default function Home() {

  return (
    <main className="relative min-h-screen">
      {/* Gradient Background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-background via-background to-muted/20" />
      
        {/* Hero Section */}
      <section className="relative overflow-hidden border-b">
        <div className="absolute inset-0 bg-grid-slate-200/50 dark:bg-grid-slate-800/50 [mask-image:linear-gradient(0deg,transparent,black)]" />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10" />
        
        <div className="relative mx-auto max-w-7xl px-6 py-20 md:py-28">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Column */}
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge variant="outline" className="px-4 py-1.5 text-sm font-medium">
                  <Calendar className="w-3 h-3 mr-2" />
                  October 22, 2025
                </Badge>
                
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight bg-gradient-to-br from-foreground to-foreground/70 bg-clip-text text-transparent">
                  Embracing Professional Boundaries
                </h1>
                
                <p className="text-xl md:text-2xl text-muted-foreground font-medium">
                  The stories we tell ourselves
                </p>
                
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl">
                  Professional boundaries are not walls—they&apos;re guideposts. They help us serve our communities with clarity, compassion, and consistency. In our six-county region, maintaining these boundaries protects clients, supports staff, and builds the trust that makes effective public health possible.
              </p>
            </div>

              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>60 minutes</span>
                </div>
                <div className="w-1 h-1 rounded-full bg-muted-foreground/50" />
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  <span>CMDHD Regional Staff</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button asChild size="lg" className="text-base shadow-lg shadow-primary/25">
                  <Link href="/presentation">
                    Enter Training
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
              </Button>
                <Button asChild size="lg" variant="outline" className="text-base">
                  <Link href="/resources">
                    <FileText className="mr-2 h-4 w-4" />
                    View Policy
                  </Link>
              </Button>
              </div>
            </div>

            {/* Right Column - Cards */}
            <div className="space-y-6">
              {/* Training Overview Card */}
              <Card className="shadow-2xl border-2">
                <CardHeader className="space-y-3">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-2xl">Training Overview</CardTitle>
                    <Badge className="bg-primary/10 text-primary hover:bg-primary/20">Core Session</Badge>
                  </div>
                  <CardDescription className="text-base">
                    Learn to navigate boundary challenges with confidence and compassion. Through interactive scenarios, reflective exercises, and practical frameworks, you&apos;ll develop skills that honor both professional standards and human connection.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-3">
                    <h4 className="font-semibold flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary" />
                      What You&apos;ll Learn
                    </h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      {learningOutcomes.map((outcome, idx) => {
                        const Icon = outcome.icon;
                        return (
                          <li key={idx} className="flex items-start gap-3">
                            <Icon className="w-4 h-4 mt-0.5 text-primary shrink-0" />
                            <span>{outcome.text}</span>
                          </li>
                        );
                      })}
                    </ul>
                  </div>

                  <div className="pt-4 border-t">
                    <p className="text-xs text-muted-foreground">
                      <strong className="text-foreground">Foundation:</strong> CMDHD Professional Boundaries Policy (effective June 30, 2025)
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* QR Code Card - Hidden on Mobile */}
              <div className="hidden md:block">
                <TrainingQRCode 
                  size={256}
                  title="In-Person? Scan Here!"
                  description="Quick access on your mobile device"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-6 py-16 space-y-20">
        {/* What You'll Learn - Section 3 */}
        <section className="space-y-8">
          <div className="text-center space-y-3">
            <h2 className="text-3xl md:text-4xl font-bold">What You&apos;ll Learn</h2>
            <p className="text-sm text-muted-foreground max-w-3xl mx-auto">
              Aligned with CMDHD Administrative Policy: Professional Boundaries (Effective June 30, 2025)
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {learningObjectives.map((objective) => {
              const Icon = objective.icon;
              return (
                <Card key={objective.id} className="border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-xl group">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <CardTitle className="text-lg">{objective.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground leading-relaxed">{objective.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>

        {/* Why Boundaries Matter - Section 2 */}
        <section className="space-y-8">
          <div className="text-center space-y-3 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold">Why Boundaries Matter</h2>
            <p className="text-lg text-muted-foreground">
              Building trust through clarity and consistency
            </p>
          </div>

          {/* 2-column layout: Text + Quote */}
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Professional boundaries are not walls; they&apos;re guideposts. They help us serve others safely, fairly, and consistently—especially in small communities where roles overlap.
              </p>
            </div>
            
            <Card className="relative overflow-hidden border-2">
              <CardContent className="p-8 lg:p-10">
                <blockquote className="space-y-4">
                  <p className="text-2xl lg:text-3xl font-medium italic leading-relaxed">
                    &quot;Clarity is kindness.&quot;
                  </p>
                  <footer className="text-sm text-muted-foreground">
                    — Brené Brown
                  </footer>
                </blockquote>
              </CardContent>
            </Card>
          </div>

          {/* 3-icon row */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto pt-8">
            <Card className="border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-lg text-center group">
              <CardContent className="pt-6 space-y-4">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto group-hover:bg-primary/20 transition-colors">
                  <Shield className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-semibold text-lg">Protect Clients</h3>
                <p className="text-sm text-muted-foreground">
                  Safeguard vulnerable populations from exploitation and maintain professional relationships
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-lg text-center group">
              <CardContent className="pt-6 space-y-4">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto group-hover:bg-primary/20 transition-colors">
                  <Users className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-semibold text-lg">Protect Staff</h3>
                <p className="text-sm text-muted-foreground">
                  Prevent burnout, role confusion, and ethical dilemmas through clear guidelines
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-lg text-center group">
              <CardContent className="pt-6 space-y-4">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto group-hover:bg-primary/20 transition-colors">
                  <Heart className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-semibold text-lg">Protect Trust</h3>
                <p className="text-sm text-muted-foreground">
                  Maintain community confidence in public health through consistent, ethical practice
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* How It Works - Section 4 */}
        <section className="space-y-8">
          <div className="text-center space-y-3">
            <h2 className="text-3xl md:text-4xl font-bold">How It Works</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Complete your professional boundaries training in three simple steps
            </p>
          </div>

          {/* Timeline container */}
          <div className="relative">
            {/* Connecting line (hidden on mobile) */}
            <div className="hidden lg:block absolute top-16 left-0 right-0 h-0.5 bg-border z-0" />
            
            {/* Steps grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
              {trainingSteps.map((step, idx) => {
                const Icon = step.icon;
                return (
                  <Card key={step.id} className="relative border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-xl">
                    {/* Step number badge */}
                    <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-xl shadow-lg z-20">
                      {idx + 1}
                    </div>
                    
                    <CardHeader className="pt-12 text-center space-y-4">
                      <div className="mx-auto w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Icon className="w-7 h-7 text-primary" />
                      </div>
                      <CardTitle className="text-lg">{step.title}</CardTitle>
                    </CardHeader>
                    
                    <CardContent className="text-center">
                      <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative overflow-hidden rounded-2xl border-2 border-primary/20 bg-gradient-to-br from-primary/5 via-primary/10 to-primary/5 p-12">
          <div className="absolute inset-0 bg-grid-slate-200/50 dark:bg-grid-slate-800/50 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
          <div className="relative text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">Ready to Begin?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Join us in strengthening professional boundaries to better serve our rural communities with compassion, consistency, and care.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button asChild size="lg" className="text-base shadow-xl shadow-primary/25">
                <Link href="/presentation">
                  Start Training Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-base">
                <Link href="/policy">
                  <FileText className="mr-2 h-5 w-5" />
                  View Policy
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
