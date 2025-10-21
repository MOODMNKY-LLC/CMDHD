'use client'

import { useState, useTransition } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { submitReflection } from "@/app/protected/actions";
import { MessageCircle, CheckCircle2 } from "lucide-react";

interface ReflectionsComponentProps {
  storyReflection: string | null;
  emotionReflection: string | null;
}

export function ReflectionsComponent({ storyReflection, emotionReflection }: ReflectionsComponentProps) {
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const handleSubmit = async (type: 'story' | 'emotion', formData: FormData) => {
    setError(null);
    setSuccess(null);
    
    const content = formData.get('content') as string;
    if (!content || content.trim().length === 0) {
      setError('Reflection cannot be empty');
      return;
    }

    startTransition(async () => {
      const result = await submitReflection({
        reflection_type: type,
        content: content.trim(),
        slide_id: type === 'story' ? 22 : 23,
      });

      if (result?.error) {
        setError(result.error);
      } else {
        setSuccess(`${type === 'story' ? 'Story' : 'Emotion'} reflection saved!`);
      }
    });
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <MessageCircle className="h-5 w-5" />
          Reflections (Slides 22-23)
        </CardTitle>
        <CardDescription>
          Share your personal insights about professional boundaries
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Story Reflection - Slide 22 */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <Label htmlFor="story-reflection" className="text-base font-semibold">
              The Story I&apos;m Telling Myself (Slide 22)
            </Label>
            {storyReflection && (
              <Badge variant="default" className="bg-green-600">
                <CheckCircle2 className="mr-1 h-3 w-3" />
                Saved
              </Badge>
            )}
          </div>
          <p className="text-sm text-muted-foreground italic">
            &ldquo;The story I&apos;m telling myself about boundaries is...&rdquo;
          </p>
          <form action={(formData) => handleSubmit('story', formData)}>
            <Textarea
              id="story-reflection"
              name="content"
              placeholder="Example: 'I'm being rigid if I enforce boundaries' or 'Good helpers go above and beyond' or 'Saying no means I don't care'"
              defaultValue={storyReflection || ''}
              rows={4}
              maxLength={500}
              className="resize-none"
            />
            <div className="flex items-center justify-between mt-2">
              <span className="text-xs text-muted-foreground">500 character limit</span>
              <Button type="submit" disabled={isPending} size="sm">
                {isPending ? 'Saving...' : storyReflection ? 'Update' : 'Save Reflection'}
              </Button>
            </div>
          </form>
        </div>

        <div className="h-px bg-border" />

        {/* Emotion Check - Slide 23 */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <Label htmlFor="emotion-reflection" className="text-base font-semibold">
              Personal Self-Check (Slide 23)
            </Label>
            {emotionReflection && (
              <Badge variant="default" className="bg-green-600">
                <CheckCircle2 className="mr-1 h-3 w-3" />
                Saved
              </Badge>
            )}
          </div>
          <p className="text-sm text-muted-foreground italic">
            Which emotion signals your boundaries are stretching?
          </p>
          <form action={(formData) => handleSubmit('emotion', formData)}>
            <Textarea
              id="emotion-reflection"
              name="content"
              placeholder="Example: Guilt, Irritation, Urgency, Exhaustion, Discomfort..."
              defaultValue={emotionReflection || ''}
              rows={4}
              maxLength={500}
              className="resize-none"
            />
            <div className="flex items-center justify-between mt-2">
              <span className="text-xs text-muted-foreground">500 character limit</span>
              <Button type="submit" disabled={isPending} size="sm">
                {isPending ? 'Saving...' : emotionReflection ? 'Update' : 'Save Reflection'}
              </Button>
            </div>
          </form>
        </div>

        {error && (
          <p className="text-sm text-red-500">{error}</p>
        )}

        {success && (
          <div className="rounded-lg bg-green-50 dark:bg-green-950/20 p-3 text-sm text-green-700 dark:text-green-400">
            <CheckCircle2 className="inline mr-2 h-4 w-4" />
            {success}
          </div>
        )}
      </CardContent>
    </Card>
  );
}

