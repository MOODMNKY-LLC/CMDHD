import { redirect } from "next/navigation";
import Link from "next/link";
import { createClient } from "@/lib/supabase/server";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { ChevronLeft, ChevronRight, Home, CheckCircle2 } from "lucide-react";
import { trainingModules, getSlideNavigation } from "@/lib/data";

interface PageProps {
  params: Promise<{
    section: string;
    slide: string;
  }>;
}

export async function generateStaticParams() {
  const params: { section: string; slide: string }[] = [];

  trainingModules.forEach((module) => {
    module.items.forEach((item) => {
      params.push({
        section: module.id,
        slide: item.id,
      });
    });
  });

  return params;
}

export default async function TrainingSlidePage({ params }: PageProps) {
  const { section, slide } = await params;

  // Auth check
  const supabase = await createClient();
  const { data, error } = await supabase.auth.getClaims();
  if (error || !data?.claims) {
    redirect("/auth/login");
  }

  // Find current module and slide
  const currentModule = trainingModules.find((m) => m.id === section);
  const currentSlide = currentModule?.items.find((item) => item.id === slide);

  if (!currentModule || !currentSlide) {
    redirect("/protected");
  }

  // Get navigation context
  const navigation = getSlideNavigation(section, slide);

  return (
    <div className="flex flex-col gap-6">
      {/* Breadcrumb Navigation */}
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link href="/protected">
                <Home className="h-4 w-4" />
              </Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink>Training</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink>{currentModule.title}</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>{currentSlide.title}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      {/* Progress Indicator */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <currentModule.icon className="h-6 w-6 text-primary" />
          <div>
            <h1 className="text-3xl font-bold tracking-tight">{currentSlide.title}</h1>
            {currentSlide.description && (
              <p className="text-muted-foreground mt-1">{currentSlide.description}</p>
            )}
          </div>
        </div>
        <Badge variant="outline" className="text-sm">
          {navigation.progress.current} / {navigation.progress.total}
        </Badge>
      </div>

      {/* Main Content Card */}
      <Card className="border-2">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            {currentModule.title} - {currentSlide.title}
          </CardTitle>
        </CardHeader>
        <CardContent className="prose prose-lg dark:prose-invert max-w-none">
          <p className="text-lg text-muted-foreground">
            This is a placeholder for the slide content. In a full implementation, you would:
          </p>
          <ul>
            <li>Display rich content using MDX or a CMS</li>
            <li>Include interactive elements (polls, quizzes, scenarios)</li>
            <li>Show relevant media (images, videos, diagrams)</li>
            <li>Provide downloadable resources</li>
          </ul>

          <div className="not-prose mt-8 p-6 bg-primary/5 rounded-lg border-2 border-primary/20">
            <h3 className="font-semibold text-lg mb-2">Content Area</h3>
            <p className="text-muted-foreground">
              This section would contain the actual training content for: <strong>{currentSlide.title}</strong>
            </p>
            <p className="text-sm text-muted-foreground mt-4">
              Module: {currentModule.title} | Section: {section} | Slide: {slide}
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Navigation Footer */}
      <div className="flex items-center justify-between pt-6 border-t">
        <div>
          {navigation.previous ? (
            <Button asChild variant="outline">
              <Link href={navigation.previous.href}>
                <ChevronLeft className="mr-2 h-4 w-4" />
                Previous
              </Link>
            </Button>
          ) : (
            <Button asChild variant="outline">
              <Link href="/protected">
                <Home className="mr-2 h-4 w-4" />
                Dashboard
              </Link>
            </Button>
          )}
        </div>

        <div className="text-sm text-muted-foreground">
          {navigation.progress.percentage}% Complete
        </div>

        <div>
          {navigation.next ? (
            <Button asChild>
              <Link href={navigation.next.href}>
                Next
                <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          ) : (
            <Button asChild variant="default">
              <Link href="/protected">
                <CheckCircle2 className="mr-2 h-4 w-4" />
                Complete
              </Link>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}

