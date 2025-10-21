import { redirect } from "next/navigation";
import Link from "next/link";
import { createClient } from "@/lib/supabase/server";
import { 
  getUserProfile, 
  getUserProgress, 
  getUserFeedback,
  calculateCompletionPercentage 
} from "@/lib/data/profile";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FeedbackFormCard } from "@/components/profile/feedback-form-card";
import { CheckCircle2, ClipboardCheck, ArrowLeft, ExternalLink, MessageSquare, BarChart3, Lightbulb } from "lucide-react";

export default async function FeedbackPage() {
  const supabase = await createClient();

  const { data, error } = await supabase.auth.getClaims();
  if (error || !data?.claims) {
    redirect("/auth/login");
  }

  // Fetch profile and feedback data
  const profile = await getUserProfile();
  const progress = await getUserProgress();
  const feedback = await getUserFeedback();

  if (!profile) {
    return (
      <div className="mx-auto max-w-3xl px-6 py-12">
        <div className="rounded-lg bg-yellow-50 dark:bg-yellow-950/20 p-6 text-center">
          <p className="text-yellow-800 dark:text-yellow-200">
            Setting up your profile... Please refresh the page.
          </p>
        </div>
      </div>
    );
  }

  const completionPercentage = calculateCompletionPercentage(progress);

  return (
    <div className="min-h-screen bg-background">
      {/* Progress Banner */}
      <div className="border-b bg-muted/50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 py-4">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4">
            <div className="flex-1 w-full">
              <p className="text-sm font-medium mb-2">Overall Training Progress: {completionPercentage}%</p>
              <Progress value={completionPercentage} className="h-2" />
            </div>
            {completionPercentage === 100 && (
              <Badge className="bg-green-600 hover:bg-green-700 whitespace-nowrap">
                Complete!
              </Badge>
            )}
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-4xl px-4 sm:px-6 py-6 sm:py-12">
        {/* Back Navigation */}
        <Button
          variant="ghost"
          size="sm"
          asChild
          className="mb-4 sm:mb-6"
        >
          <Link href="/protected">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Training Hub
          </Link>
        </Button>

        {/* Page Header */}
        <div className="mb-6 sm:mb-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-3 mb-2">
            <ClipboardCheck className="h-7 w-7 sm:h-8 sm:w-8 text-primary" />
            <h1 className="text-2xl sm:text-3xl font-bold tracking-tight">Training Evaluation</h1>
          </div>
          <p className="text-sm sm:text-base text-muted-foreground">
            Your feedback helps CMDHD continuously improve professional boundaries training. 
            <span className="text-xs sm:text-sm italic ml-1">(Referenced in Slide 37)</span>
          </p>
        </div>

        {/* Tabbed Interface */}
        <Tabs defaultValue="feedback" className="w-full">
          <TabsList className="grid w-full grid-cols-3 h-auto mb-6">
            <TabsTrigger value="feedback" className="flex flex-col sm:flex-row items-center gap-1 sm:gap-2 py-2 sm:py-3 text-xs sm:text-sm">
              <MessageSquare className="h-4 w-4" />
              <span className="hidden sm:inline">Feedback</span>
              <span className="sm:hidden">Submit</span>
              {feedback && <CheckCircle2 className="h-3 w-3 text-green-600" />}
            </TabsTrigger>
            <TabsTrigger value="status" className="flex flex-col sm:flex-row items-center gap-1 sm:gap-2 py-2 sm:py-3 text-xs sm:text-sm">
              <BarChart3 className="h-4 w-4" />
              <span>Status</span>
            </TabsTrigger>
            <TabsTrigger value="impact" className="flex flex-col sm:flex-row items-center gap-1 sm:gap-2 py-2 sm:py-3 text-xs sm:text-sm">
              <Lightbulb className="h-4 w-4" />
              <span className="hidden sm:inline">Impact</span>
              <span className="sm:hidden">Why</span>
            </TabsTrigger>
          </TabsList>

          {/* Feedback Tab */}
          <TabsContent value="feedback">
            {feedback ? (
              // Already Submitted State
              <Card className="border-green-500">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg sm:text-xl">
                    <CheckCircle2 className="h-5 w-5 text-green-600" />
                    Thank You for Your Feedback!
                  </CardTitle>
                  <CardDescription className="text-sm">
                    Your evaluation has been submitted successfully
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4 sm:space-y-6">
                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button asChild className="flex-1">
                      <Link href="/protected">
                        View Full Training Hub
                      </Link>
                    </Button>
                    <Button asChild variant="outline" className="flex-1">
                      <Link href="/presentation">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Return to Presentation
                      </Link>
                    </Button>
                  </div>

                  {/* Edit Option */}
                  <div className="pt-4 border-t">
                    <p className="text-sm text-muted-foreground mb-3">
                      Want to update your feedback? You can edit your responses below.
                    </p>
                    <details className="group">
                      <summary className="cursor-pointer text-sm font-medium text-primary hover:underline list-none">
                        Show Feedback Form
                      </summary>
                      <div className="mt-4">
                        <FeedbackFormCard existingFeedback={feedback} />
                      </div>
                    </details>
                  </div>
                </CardContent>
              </Card>
            ) : (
              // Not Yet Submitted State
              <div className="space-y-4 sm:space-y-6">
                <Card className="border-primary/50">
                  <CardHeader>
                    <CardTitle className="text-lg sm:text-xl">Help Improve Future Training</CardTitle>
                    <CardDescription className="text-sm">
                      Please take 3-5 minutes to share your experience. Your honest feedback is valuable and confidential.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="rounded-lg bg-muted/50 p-3 sm:p-4">
                      <p className="text-sm font-medium mb-2">Your feedback will help answer:</p>
                      <ul className="space-y-1 text-xs sm:text-sm text-muted-foreground">
                        <li>• What resonated most with participants?</li>
                        <li>• What boundary challenges need more focus?</li>
                        <li>• How can we better support staff in different roles?</li>
                        <li>• What resources would be most helpful?</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>

                {/* Feedback Form */}
                <FeedbackFormCard existingFeedback={feedback} />

                {/* Completion Note */}
                {completionPercentage < 100 && (
                  <Card className="bg-muted/30">
                    <CardContent className="pt-4 sm:pt-6">
                      <p className="text-xs sm:text-sm text-muted-foreground text-center">
                        <strong>Note:</strong> Submitting feedback completes one of the required training components. 
                        Visit your <Link href="/protected" className="text-primary hover:underline">Training Hub</Link> to 
                        track your overall progress.
                      </p>
                    </CardContent>
                  </Card>
                )}
              </div>
            )}
          </TabsContent>

          {/* Status Tab */}
          <TabsContent value="status">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg sm:text-xl">Your Training Status</CardTitle>
                <CardDescription className="text-sm">
                  Track your progress toward completing the Professional Boundaries training
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="rounded-lg border bg-card p-3 sm:p-4">
                  <div className="space-y-3 text-sm">
                    <div className="flex items-center justify-between">
                      <span className="font-medium">Overall Completion</span>
                      <Badge variant={completionPercentage === 100 ? "default" : "secondary"} className="text-xs">
                        {completionPercentage}%
                      </Badge>
                    </div>
                    <div className="h-px bg-border" />
                    <div className="flex items-center justify-between">
                      <span>Demographics</span>
                      <span className="text-muted-foreground">
                        {profile?.full_name && profile?.department ? '✓' : '—'}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Reflections</span>
                      <span className="text-muted-foreground">
                        {((progress?.story_reflections || 0) + (progress?.emotion_reflections || 0))}/2
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Scenario Polls</span>
                      <span className="text-muted-foreground">{progress?.polls_answered || 0}/6</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Commitment</span>
                      <span className="text-muted-foreground">
                        {(progress?.commitments || 0) >= 1 ? '✓' : '—'}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Feedback</span>
                      <span className="text-muted-foreground">
                        {feedback ? '✓' : '—'}
                      </span>
                    </div>
                  </div>
                </div>

                {completionPercentage === 100 ? (
                  <div className="rounded-lg bg-green-50 dark:bg-green-950/20 p-4 text-center">
                    <CheckCircle2 className="h-8 w-8 text-green-600 mx-auto mb-2" />
                    <p className="font-medium text-green-900 dark:text-green-100">
                      Training Complete!
                    </p>
                    <p className="text-sm text-green-700 dark:text-green-300 mt-1">
                      You&apos;ve completed all required components.
                    </p>
                  </div>
                ) : (
                  <div className="rounded-lg bg-muted p-4 text-center">
                    <p className="text-sm text-muted-foreground">
                      Complete all components in your <Link href="/protected" className="text-primary hover:underline">Training Hub</Link> to 
                      finish the training.
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          {/* Impact Tab */}
          <TabsContent value="impact">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg sm:text-xl">Why Your Feedback Matters</CardTitle>
                <CardDescription className="text-sm">
                  Understanding how CMDHD uses participant feedback to improve training
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="rounded-lg bg-primary/5 p-3 sm:p-4">
                  <p className="text-sm sm:text-base font-medium text-primary mb-3">
                    Your input directly influences:
                  </p>
                  <ul className="space-y-3 text-xs sm:text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span><strong>Training Content:</strong> Refining scenarios, examples, and policy explanations based on what resonates</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span><strong>Delivery Methods:</strong> Adjusting format, pacing, and interactive elements for better engagement</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span><strong>County-Specific Support:</strong> Identifying unique boundary challenges across the 6-county service area</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span><strong>Resource Development:</strong> Creating tools, templates, and resources that staff actually need</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span><strong>Supervision Support:</strong> Helping supervisors address common boundary questions more effectively</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span><strong>Leadership Reporting:</strong> Demonstrating training effectiveness and justifying continued investment</span>
                    </li>
                  </ul>
                </div>

                <div className="rounded-lg border bg-muted/30 p-3 sm:p-4">
                  <p className="text-xs sm:text-sm text-muted-foreground">
                    <strong className="text-foreground">Your feedback is confidential.</strong> Individual responses are never 
                    shared with supervisors or leadership. Only aggregated, anonymous data is used for program improvement.
                  </p>
                </div>

                <div className="rounded-lg bg-blue-50 dark:bg-blue-950/20 p-3 sm:p-4">
                  <p className="text-xs sm:text-sm text-blue-800 dark:text-blue-200">
                    <strong>Past Impact:</strong> Based on previous training feedback, CMDHD added rural-specific scenarios, 
                    expanded cultural sensitivity content, and created the 5-Step Decision Tree tool. Your voice shapes future training.
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}

