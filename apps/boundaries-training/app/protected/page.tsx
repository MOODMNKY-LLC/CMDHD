import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { 
  getUserProfile, 
  getUserProgress, 
  getUserFeedback, 
  getUserReflection,
  getUserPollResponses,
  calculateCompletionPercentage 
} from "@/lib/data/profile";
import { Progress } from "@/components/ui/progress";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { DemographicsFormCard } from "@/components/profile/demographics-form-card";
import { ReflectionsComponent } from "@/components/profile/reflections-component";
import { ScenarioPollsComponent } from "@/components/profile/scenario-polls-component";
import { CommitmentComponent } from "@/components/profile/commitment-component";
import { FeedbackFormCard } from "@/components/profile/feedback-form-card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { getUserInitials } from "@/lib/data/profile";
import { ClipboardList, MessageCircle, ListChecks, Target, Star, CheckCircle2 } from "lucide-react";

export default async function ProfilePage() {
  const supabase = await createClient();

  const { data, error } = await supabase.auth.getClaims();
  if (error || !data?.claims) {
    redirect("/auth/login");
  }

  // Fetch all profile data
  const profile = await getUserProfile();
  const progress = await getUserProgress();
  const feedback = await getUserFeedback();
  const storyReflection = await getUserReflection('story');
  const emotionReflection = await getUserReflection('emotion');
  const commitment = await getUserReflection('commitment');
  const pollResponses = await getUserPollResponses();

  if (!profile) {
    return (
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="rounded-lg bg-yellow-50 dark:bg-yellow-950/20 p-6 text-center">
          <p className="text-yellow-800 dark:text-yellow-200">
            Setting up your profile... Please refresh the page.
          </p>
        </div>
      </div>
    );
  }

  const userEmail = data.claims.email as string;
  const completionPercentage = calculateCompletionPercentage(progress);

  // Calculate completion status for tabs
  const isDemographicsComplete = !!(profile.full_name && profile.department && profile.years_experience && profile.primary_role);
  const reflectionsComplete = (storyReflection ? 1 : 0) + (emotionReflection ? 1 : 0);
  const scenariosComplete = pollResponses.length;
  const isCommitmentComplete = !!commitment;
  const isFeedbackComplete = !!feedback;

  return (
    <div className="min-h-screen bg-background">
      {/* Progress Banner */}
      <div className="border-b bg-muted/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-4">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4">
            <div className="flex-1 w-full">
              <p className="text-sm font-medium mb-2">Training Progress: {completionPercentage}%</p>
              <Progress value={completionPercentage} className="h-2" />
            </div>
            {completionPercentage === 100 && (
              <Badge className="bg-green-600 hover:bg-green-700 whitespace-nowrap">
                Training Complete!
              </Badge>
            )}
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-6 sm:py-8">
        <div className="grid gap-4 sm:gap-6 lg:grid-cols-[1fr_320px]">
          {/* Main Content with Tabs */}
          <div className="space-y-4 sm:space-y-6">
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold tracking-tight">Interactive Training Hub</h1>
              <p className="text-sm sm:text-base text-muted-foreground mt-2">
                Navigate through tabs to complete your CMDHD Professional Boundaries training
              </p>
            </div>

            <Tabs defaultValue="demographics" className="w-full">
              <TabsList className="grid w-full grid-cols-5 h-auto">
                <TabsTrigger value="demographics" className="flex flex-col items-center gap-0.5 sm:gap-1 py-2 sm:py-3 px-1">
                  <div className="flex items-center gap-1 sm:gap-2">
                    <ClipboardList className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                    {isDemographicsComplete && <CheckCircle2 className="h-2.5 w-2.5 sm:h-3 sm:w-3 text-green-600" />}
                  </div>
                  <span className="text-[10px] sm:text-xs">Profile</span>
                </TabsTrigger>
                <TabsTrigger value="reflections" className="flex flex-col items-center gap-0.5 sm:gap-1 py-2 sm:py-3 px-1">
                  <div className="flex items-center gap-1 sm:gap-2">
                    <MessageCircle className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                    {reflectionsComplete === 2 && <CheckCircle2 className="h-2.5 w-2.5 sm:h-3 sm:w-3 text-green-600" />}
                  </div>
                  <span className="text-[10px] sm:text-xs hidden xs:inline">Reflect</span>
                  <span className="text-[10px] sm:text-xs xs:hidden">Rfl</span>
                  <Badge variant="secondary" className="text-[9px] sm:text-[10px] h-3.5 sm:h-4 px-1">
                    {reflectionsComplete}/2
                  </Badge>
                </TabsTrigger>
                <TabsTrigger value="scenarios" className="flex flex-col items-center gap-0.5 sm:gap-1 py-2 sm:py-3 px-1">
                  <div className="flex items-center gap-1 sm:gap-2">
                    <ListChecks className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                    {scenariosComplete === 6 && <CheckCircle2 className="h-2.5 w-2.5 sm:h-3 sm:w-3 text-green-600" />}
                  </div>
                  <span className="text-[10px] sm:text-xs hidden xs:inline">Scenario</span>
                  <span className="text-[10px] sm:text-xs xs:hidden">Quiz</span>
                  <Badge variant="secondary" className="text-[9px] sm:text-[10px] h-3.5 sm:h-4 px-1">
                    {scenariosComplete}/6
                  </Badge>
                </TabsTrigger>
                <TabsTrigger value="commitment" className="flex flex-col items-center gap-0.5 sm:gap-1 py-2 sm:py-3 px-1">
                  <div className="flex items-center gap-1 sm:gap-2">
                    <Target className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                    {isCommitmentComplete && <CheckCircle2 className="h-2.5 w-2.5 sm:h-3 sm:w-3 text-green-600" />}
                  </div>
                  <span className="text-[10px] sm:text-xs hidden xs:inline">Commit</span>
                  <span className="text-[10px] sm:text-xs xs:hidden">Goal</span>
                </TabsTrigger>
                <TabsTrigger value="feedback" className="flex flex-col items-center gap-0.5 sm:gap-1 py-2 sm:py-3 px-1">
                  <div className="flex items-center gap-1 sm:gap-2">
                    <Star className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                    {isFeedbackComplete && <CheckCircle2 className="h-2.5 w-2.5 sm:h-3 sm:w-3 text-green-600" />}
                  </div>
                  <span className="text-[10px] sm:text-xs">Review</span>
                </TabsTrigger>
              </TabsList>

              <TabsContent value="demographics" className="mt-6">
                <DemographicsFormCard profile={profile} />
              </TabsContent>

              <TabsContent value="reflections" className="mt-6">
                <ReflectionsComponent 
                  storyReflection={storyReflection} 
                  emotionReflection={emotionReflection} 
                />
              </TabsContent>

              <TabsContent value="scenarios" className="mt-6">
                <ScenarioPollsComponent userResponses={pollResponses} />
              </TabsContent>

              <TabsContent value="commitment" className="mt-6">
                <CommitmentComponent commitment={commitment} />
              </TabsContent>

              <TabsContent value="feedback" className="mt-6">
                <FeedbackFormCard existingFeedback={feedback} />
              </TabsContent>
            </Tabs>
          </div>

          {/* Sidebar */}
          <div className="space-y-4 sm:space-y-6 lg:sticky lg:top-20">
            {/* User Info Card */}
            <Card className="p-4 sm:p-6">
              <div className="flex flex-col items-center text-center space-y-3 sm:space-y-4">
                <Avatar className="h-16 w-16 sm:h-20 sm:w-20">
                  <AvatarImage src={profile.avatar_url || undefined} />
                  <AvatarFallback className="bg-primary/10 text-primary text-xl sm:text-2xl">
                    {getUserInitials(profile.full_name, userEmail)}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-semibold text-base sm:text-lg">{profile.full_name || 'Participant'}</p>
                  <p className="text-xs sm:text-sm text-muted-foreground break-all">{userEmail}</p>
                  {profile.department && (
                    <p className="text-xs sm:text-sm text-muted-foreground mt-1">{profile.department}</p>
                  )}
                </div>
              </div>
            </Card>

            {/* Progress Checklist */}
            <Card className="p-4 sm:p-6">
              <h3 className="font-semibold text-sm sm:text-base mb-3 sm:mb-4">Completion Checklist</h3>
              <div className="space-y-2.5 sm:space-y-3 text-xs sm:text-sm">
                <div className="flex items-center gap-2">
                  <div className={`h-3.5 w-3.5 sm:h-4 sm:w-4 rounded-full flex-shrink-0 ${profile.full_name && profile.department ? 'bg-green-600' : 'bg-muted'}`} />
                  <span>Demographics</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className={`h-3.5 w-3.5 sm:h-4 sm:w-4 rounded-full flex-shrink-0 ${storyReflection ? 'bg-green-600' : 'bg-muted'}`} />
                  <span>Story Reflection</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className={`h-3.5 w-3.5 sm:h-4 sm:w-4 rounded-full flex-shrink-0 ${emotionReflection ? 'bg-green-600' : 'bg-muted'}`} />
                  <span>Emotion Check</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className={`h-3.5 w-3.5 sm:h-4 sm:w-4 rounded-full flex-shrink-0 ${(progress?.polls_answered || 0) >= 6 ? 'bg-green-600' : 'bg-muted'}`} />
                  <span>6 Scenario Polls ({progress?.polls_answered || 0}/6)</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className={`h-3.5 w-3.5 sm:h-4 sm:w-4 rounded-full flex-shrink-0 ${commitment ? 'bg-green-600' : 'bg-muted'}`} />
                  <span>Commitment</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className={`h-3.5 w-3.5 sm:h-4 sm:w-4 rounded-full flex-shrink-0 ${feedback ? 'bg-green-600' : 'bg-muted'}`} />
                  <span>Feedback</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
