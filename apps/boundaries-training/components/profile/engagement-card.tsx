import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import type { ParticipantProgress } from "@/lib/types/database";
import { MessageCircle, ListChecks, Heart, Target, ArrowRight } from "lucide-react";

interface EngagementCardProps {
  progress: ParticipantProgress | null;
}

export function EngagementCard({ progress }: EngagementCardProps) {
  const engagementItems = [
    {
      icon: ListChecks,
      label: 'Scenario Polls',
      count: progress?.polls_answered || 0,
      total: 6,
      description: 'Interactive boundary scenarios completed',
      link: '/scenarios',
    },
    {
      icon: MessageCircle,
      label: 'Story Reflection',
      count: progress?.story_reflections || 0,
      total: 1,
      description: 'Your boundary narrative',
      link: '/presentation',
    },
    {
      icon: Heart,
      label: 'Emotion Check',
      count: progress?.emotion_reflections || 0,
      total: 1,
      description: 'Boundary emotional signals identified',
      link: '/presentation',
    },
    {
      icon: Target,
      label: 'Commitment',
      count: progress?.commitments || 0,
      total: 1,
      description: 'Personal boundary pledge made',
      link: '/presentation',
    },
  ];

  const hasAnyEngagement = progress && (
    progress.polls_answered > 0 ||
    progress.story_reflections > 0 ||
    progress.emotion_reflections > 0 ||
    progress.commitments > 0
  );

  return (
    <Card>
      <CardHeader>
        <CardTitle>Training Engagement</CardTitle>
        <CardDescription>Your participation in interactive components</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {!hasAnyEngagement ? (
          <div className="rounded-lg bg-muted p-6 text-center space-y-3">
            <p className="text-sm text-muted-foreground">
              No engagement yet. Start the training to track your progress!
            </p>
            <Button asChild variant="outline">
              <Link href="/presentation">
                Start Training
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        ) : (
          <div className="grid gap-3">
            {engagementItems.map((item) => {
              const Icon = item.icon;
              const percentage = Math.round((item.count / item.total) * 100);
              const isComplete = item.count >= item.total;
              
              return (
                <Link
                  key={item.label}
                  href={item.link}
                  className="block rounded-lg border p-4 hover:bg-accent transition-colors"
                >
                  <div className="flex items-start gap-3">
                    <div className={`rounded-full p-2 ${
                      isComplete 
                        ? 'bg-green-100 dark:bg-green-950 text-green-600 dark:text-green-400' 
                        : 'bg-muted text-muted-foreground'
                    }`}>
                      <Icon className="h-4 w-4" />
                    </div>
                    
                    <div className="flex-1 space-y-1">
                      <div className="flex items-center justify-between">
                        <p className="text-sm font-medium">{item.label}</p>
                        <Badge 
                          variant={isComplete ? "default" : "secondary"}
                          className={isComplete ? "bg-green-600 hover:bg-green-700" : ""}
                        >
                          {item.count}/{item.total}
                        </Badge>
                      </div>
                      <p className="text-xs text-muted-foreground">{item.description}</p>
                      
                      {/* Mini progress bar */}
                      <div className="h-1 w-full bg-muted rounded-full overflow-hidden mt-2">
                        <div 
                          className={`h-full ${
                            isComplete ? 'bg-green-600' : 'bg-primary'
                          }`}
                          style={{ width: `${percentage}%` }}
                        />
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        )}
      </CardContent>
    </Card>
  );
}

