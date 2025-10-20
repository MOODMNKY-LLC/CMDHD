"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function FeedbackPage() {
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [rating, setRating] = useState("");
  const [comments, setComments] = useState("");
  const [sent, setSent] = useState(false);

  return (
    <main className="mx-auto max-w-2xl px-6 py-10 space-y-8">
      <h1 className="text-2xl font-semibold tracking-tight">Feedback</h1>
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Tell us what you think</CardTitle>
        </CardHeader>
        <CardContent>
          {sent ? (
            <p className="text-sm text-muted-foreground">Thanks for your feedback!</p>
          ) : (
            <form
              className="grid gap-4"
              onSubmit={(e) => {
                e.preventDefault();
                // Placeholder: Wire to API route later
                setSent(true);
              }}
            >
              <div className="grid gap-2">
                <label className="text-sm">Name (optional)</label>
                <Input value={name} onChange={(e) => setName(e.target.value)} />
              </div>
              <div className="grid gap-2">
                <label className="text-sm">Role</label>
                <Input
                  placeholder="e.g., Nurse, CHW, Admin"
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                />
              </div>
              <div className="grid gap-2">
                <label className="text-sm">Rating (1–5)</label>
                <Input
                  type="number"
                  min={1}
                  max={5}
                  value={rating}
                  onChange={(e) => setRating(e.target.value)}
                />
              </div>
              <div className="grid gap-2">
                <label className="text-sm">Comments</label>
                <Textarea
                  placeholder="What worked well? What could be improved?"
                  value={comments}
                  onChange={(e) => setComments(e.target.value)}
                />
              </div>
              <div>
                <Button type="submit">Submit</Button>
              </div>
            </form>
          )}
        </CardContent>
      </Card>
    </main>
  );
}


