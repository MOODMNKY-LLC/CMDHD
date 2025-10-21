import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { calculateCompletionPercentage, isTrainingComplete } from "@/lib/data/profile";
import type { ParticipantProgress } from "@/lib/types/database";
import { CheckCircle2, Circle, Award } from "lucide-react";

interface TrainingProgressCardProps {
  progress: ParticipantProgress | null;
}

export function TrainingProgressCard({ progress }: TrainingProgressCardProps) {
  const completionPercentage = calculateCompletionPercentage(progress);
  const trainingComplete = isTrainingComplete(progress);
  
  const progressItems = [
    { 
      label: 'Scenario Polls', 
      current: progress?.polls_answered || 0, 
      total: 6,
      description: 'Answer interactive boundary scenarios'
    },
    { 
      label: 'Story Reflection', 
      current: progress?.story_reflections || 0, 
      total: 1,
      description: 'Share your boundary narrative'
    },
    { 
      label: 'Emotion Check', 
      current: progress?.emotion_reflections || 0, 
      total: 1,
      description: 'Identify your boundary signals'
    },
    { 
      label: 'Commitment', 
      current: progress?.commitments || 0, 
      total: 1,
      description: 'Make your boundary pledge'
    },
    { 
      label: 'Feedback', 
      current: progress?.feedback_submitted ? 1 : 0, 
      total: 1,
      description: 'Complete training evaluation'
    },
  ];

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle>Training Progress</CardTitle>
            <CardDescription>Track your completion status</CardDescription>
          </div>
          {trainingComplete && (
            <Award className="h-8 w-8 text-green-600" />
          )}
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Overall Progress */}
        <div className="space-y-2">
          <div className="flex items-center justify-between text-sm">
            <span className="font-medium">Overall Completion</span>
            <span className="text-muted-foreground">{completionPercentage}%</span>
          </div>
          <Progress value={completionPercentage} className="h-2" />
        </div>

        {/* Certificate Eligibility */}
        {trainingComplete ? (
          <div className="rounded-lg bg-green-50 dark:bg-green-950/20 p-4 space-y-2">
            <div className="flex items-center gap-2 text-green-700 dark:text-green-400 font-medium">
              <Award className="h-5 w-5" />
              <span>Certificate Eligible</span>
            </div>
            <p className="text-sm text-green-600 dark:text-green-500">
              Congratulations! You've completed all required components. Your certificate is available for download.
            </p>
          </div>
        ) : (
          <div className="rounded-lg bg-muted p-4 space-y-2">
            <p className="text-sm text-muted-foreground">
              Complete all items below to receive your training certificate.
            </p>
          </div>
        )}

        {/* Progress Items */}
        <div className="space-y-3">
          {progressItems.map((item) => {
            const isComplete = item.current >= item.total;
            const percentage = Math.round((item.current / item.total) * 100);
            
            return (
              <div key={item.label} className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    {isComplete ? (
                      <CheckCircle2 className="h-4 w-4 text-green-600" />
                    ) : (
                      <Circle className="h-4 w-4 text-muted-foreground" />
                    )}
                    <div>
                      <p className="text-sm font-medium">{item.label}</p>
                      <p className="text-xs text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                  <Badge variant={isComplete ? "default" : "secondary"} className="text-xs">
                    {item.current}/{item.total}
                  </Badge>
                </div>
                <Progress value={percentage} className="h-1" />
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
}

