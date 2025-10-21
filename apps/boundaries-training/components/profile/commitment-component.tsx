'use client'

import { useState, useTransition } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { submitReflection } from "@/app/protected/actions";
import { Target, CheckCircle2, Sparkles } from "lucide-react";

interface CommitmentComponentProps {
  commitment: string | null;
}

const EXAMPLE_COMMITMENTS = [
  "I will establish work phone hours in my informed consent with new clients",
  "I will consult my supervisor before responding to any after-hours contact",
  "I will document dual relationships proactively, not reactively",
  "I will pause and use the 5-Step Decision Tree before saying yes to out-of-scope requests",
  "I will practice saying no with empathy: 'I care about your situation, and this is outside my role. Here's what I can do...'",
];

export function CommitmentComponent({ commitment }: CommitmentComponentProps) {
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (formData: FormData) => {
    setError(null);
    setSuccess(false);
    
    const content = formData.get('content') as string;
    if (!content || content.trim().length === 0) {
      setError('Commitment cannot be empty');
      return;
    }

    startTransition(async () => {
      const result = await submitReflection({
        reflection_type: 'commitment',
        content: content.trim(),
        slide_id: 36,
      });

      if (result?.error) {
        setError(result.error);
      } else {
        setSuccess(true);
      }
    });
  };

  return (
    <Card className={commitment ? "border-green-500" : "border-primary"}>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="flex items-center gap-2">
              <Target className="h-5 w-5" />
              Personal Commitment (Slide 36)
            </CardTitle>
            <CardDescription>
              Make your boundary pledge—this is your accountability moment
            </CardDescription>
          </div>
          {commitment && (
            <Badge variant="default" className="bg-green-600 hover:bg-green-700">
              <CheckCircle2 className="mr-1 h-3 w-3" />
              Made
            </Badge>
          )}
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="rounded-lg bg-primary/5 p-4 space-y-2">
          <div className="flex items-center gap-2 text-primary font-medium">
            <Sparkles className="h-4 w-4" />
            <span>Your Commitment</span>
          </div>
          <p className="text-sm text-muted-foreground italic">
            &ldquo;This month, I will strengthen my professional boundaries by...&rdquo;
          </p>
        </div>

        <form action={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="commitment" className="text-base">
              Share one specific, measurable action you will take:
            </Label>
            <Textarea
              id="commitment"
              name="content"
              placeholder="Be specific and actionable. Example: 'I will...'"
              defaultValue={commitment || ''}
              rows={4}
              maxLength={300}
              className="resize-none"
              required
            />
            <div className="flex items-center justify-between">
              <span className="text-xs text-muted-foreground">300 character limit</span>
            </div>
          </div>

          {/* Example Commitments */}
          <div className="space-y-2">
            <p className="text-sm font-medium">Example commitments:</p>
            <ul className="space-y-1">
              {EXAMPLE_COMMITMENTS.map((example, i) => (
                <li key={i} className="text-xs text-muted-foreground pl-4 relative before:content-['•'] before:absolute before:left-0">
                  {example}
                </li>
              ))}
            </ul>
          </div>

          {error && (
            <p className="text-sm text-red-500">{error}</p>
          )}

          {success && (
            <div className="rounded-lg bg-green-50 dark:bg-green-950/20 p-4 text-sm text-green-700 dark:text-green-400">
              <div className="flex items-center gap-2 font-medium mb-1">
                <CheckCircle2 className="h-4 w-4" />
                Commitment Made!
              </div>
              <p className="text-xs">
                Research shows public commitment increases follow-through. Share your commitment with a colleague for mutual accountability.
              </p>
            </div>
          )}

          <Button type="submit" disabled={isPending} className="w-full" size="lg">
            {isPending ? 'Saving...' : commitment ? 'Update My Commitment' : 'Make My Commitment'}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}

