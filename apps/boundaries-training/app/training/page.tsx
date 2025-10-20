"use client";

import Link from "next/link";
import { useEffect } from "react";
import { createPortal } from "react-dom";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Home, ArrowRight, Clock, CheckCircle } from "lucide-react";
import { trainingData } from "@/lib/data";

export default function TrainingIndexPage() {
  // Render breadcrumb into header
  useEffect(() => {
    const container = document.getElementById("breadcrumb-container");
    if (!container) return;

    const breadcrumbElement = (
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">
              <Home className="h-4 w-4" />
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Training Dashboard</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    );

    createPortal(breadcrumbElement, container);
  }, []);

  const firstTrainingItem = trainingData[0]?.items[0];

  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="space-y-4">
        <div className="flex items-center gap-2 mb-4">
          <Badge variant="default" className="text-sm px-3 py-1">
            Professional Development
          </Badge>
          <Badge variant="secondary" className="text-sm px-3 py-1">
            <Clock className="h-3 w-3 mr-1" />
            ~90 minutes
          </Badge>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
          Professional Boundaries Training
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl">
          Embracing Professional Boundaries: The stories we tell ourselves
        </p>
        <p className="text-muted-foreground max-w-3xl">
          A comprehensive training module for Central Michigan District Health Department staff,
          covering policy fundamentals, practical scenarios, and decision-making frameworks for
          maintaining professional boundaries in rural health contexts.
        </p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">Total Modules</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">{trainingData.length}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">Training Topics</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">
              {trainingData.reduce((sum, section) => sum + section.items.length, 0)}
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">Your Progress</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">0%</div>
          </CardContent>
        </Card>
      </div>

      {/* Training Sections Overview */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold">Training Modules</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {trainingData.map((section, index) => {
            const SectionIcon = section.icon;
            const firstItem = section.items[0];

            return (
              <Card key={index} className="group hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                        <SectionIcon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <CardTitle className="text-lg">{section.title}</CardTitle>
                        <CardDescription className="mt-1">
                          {section.items.length} {section.items.length === 1 ? 'topic' : 'topics'}
                        </CardDescription>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-1 text-sm text-muted-foreground mb-4">
                    {section.items.slice(0, 3).map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-center gap-2">
                        <CheckCircle className="h-3 w-3 text-primary" />
                        {item.label}
                      </li>
                    ))}
                    {section.items.length > 3 && (
                      <li className="text-xs italic">...and {section.items.length - 3} more</li>
                    )}
                  </ul>
                  <Button asChild variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <Link href={firstItem.href}>
                      Start Module
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>

      {/* CTA Section */}
      <Card className="border-2 border-primary/20 bg-gradient-to-br from-primary/5 via-primary/10 to-primary/5">
        <CardContent className="pt-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="text-xl font-bold mb-2">Ready to Begin?</h3>
              <p className="text-muted-foreground">
                Start with the opening module or pick up where you left off
              </p>
            </div>
            {firstTrainingItem && (
              <Button asChild size="lg" className="shadow-xl shadow-primary/25">
                <Link href={firstTrainingItem.href}>
                  Start Training
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

