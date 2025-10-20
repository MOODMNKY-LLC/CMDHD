import { redirect } from "next/navigation";
import Link from "next/link";
import { createClient } from "@/lib/supabase/server";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, BookOpen, Clock, CheckCircle2 } from "lucide-react";
import { trainingModules } from "@/lib/data";

export default async function ProtectedPage() {
  const supabase = await createClient();

  const { data, error } = await supabase.auth.getClaims();
  if (error || !data?.claims) {
    redirect("/auth/login");
  }

  const user = data.claims;
  const totalSlides = trainingModules.reduce((acc, module) => acc + module.items.length, 0);

  return (
    <div className="flex flex-col gap-8">
      {/* Welcome Header */}
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">
          Welcome to Professional Boundaries Training
        </h1>
        <p className="text-lg text-muted-foreground">
          Hello, {user.email}! Ready to strengthen your understanding of professional boundaries in rural health care.
        </p>
      </div>

      {/* Training Overview Stats */}
      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Modules</CardTitle>
            <BookOpen className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{trainingModules.length}</div>
            <p className="text-xs text-muted-foreground">Comprehensive training sections</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Slides</CardTitle>
            <CheckCircle2 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{totalSlides}</div>
            <p className="text-xs text-muted-foreground">Interactive learning materials</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Est. Duration</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">90 min</div>
            <p className="text-xs text-muted-foreground">Self-paced learning</p>
          </CardContent>
        </Card>
      </div>

      {/* Training Modules Grid */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold">Training Modules</h2>
          <Badge variant="outline">{trainingModules.length} Sections</Badge>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {trainingModules.map((module) => (
            <Card key={module.id} className="group hover:shadow-lg transition-all duration-300 border-2 hover:border-primary/50">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <module.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">{module.title}</CardTitle>
                      <Badge variant="secondary" className="mt-1 text-xs">
                        {module.items.length} slides
                      </Badge>
                    </div>
                  </div>
                </div>
                <CardDescription className="mt-2">{module.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild className="w-full group-hover:shadow-md transition-shadow">
                  <Link href={module.items[0].href}>
                    Start Module
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Quick Start Guide */}
      <Card className="bg-gradient-to-br from-primary/5 via-primary/10 to-primary/5 border-2 border-primary/20">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BookOpen className="h-5 w-5" />
            Getting Started
          </CardTitle>
          <CardDescription>Follow these steps to make the most of your training experience</CardDescription>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="flex items-start gap-3">
            <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs font-bold shrink-0">1</div>
            <p className="text-sm">Use the sidebar to navigate between modules and slides</p>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs font-bold shrink-0">2</div>
            <p className="text-sm">Complete interactive scenarios and self-assessments</p>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs font-bold shrink-0">3</div>
            <p className="text-sm">Reference the policy documents and decision trees as needed</p>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs font-bold shrink-0">4</div>
            <p className="text-sm">Complete the evaluation at the end of the training</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
