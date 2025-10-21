import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { getUserInitials } from "@/lib/data/profile";
import type { Profile } from "@/lib/types/database";
import { Calendar, Building2, Briefcase } from "lucide-react";

interface UserInfoCardProps {
  profile: Profile;
  userEmail: string;
}

export function UserInfoCard({ profile, userEmail }: UserInfoCardProps) {
  const isCompleted = !!profile.completed_at;
  
  return (
    <Card className="col-span-full">
      <CardHeader>
        <CardTitle>Participant Profile</CardTitle>
        <CardDescription>Your training information and status</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex items-start gap-6">
          <Avatar className="h-20 w-20">
            <AvatarImage src={profile.avatar_url || undefined} alt={profile.full_name || userEmail} />
            <AvatarFallback className="bg-primary/10 text-primary text-2xl">
              {getUserInitials(profile.full_name, userEmail)}
            </AvatarFallback>
          </Avatar>
          
          <div className="flex-1 space-y-3">
            <div>
              <div className="flex items-center gap-3">
                <h3 className="text-2xl font-semibold">{profile.full_name || 'Participant'}</h3>
                {isCompleted && (
                  <Badge variant="default" className="bg-green-600 hover:bg-green-700">
                    ✓ Completed
                  </Badge>
                )}
              </div>
              <p className="text-sm text-muted-foreground">{userEmail}</p>
            </div>
            
            <div className="grid gap-2 text-sm">
              {profile.department && (
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Building2 className="h-4 w-4" />
                  <span>{profile.department}</span>
                </div>
              )}
              
              {profile.role && (
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Briefcase className="h-4 w-4" />
                  <span>{profile.role}</span>
                </div>
              )}
              
              <div className="flex items-center gap-2 text-muted-foreground">
                <Calendar className="h-4 w-4" />
                <span>Training Year: {profile.training_year}</span>
              </div>
              
              {isCompleted && profile.completed_at && (
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Badge variant="outline" className="text-xs">
                    Completed: {new Date(profile.completed_at).toLocaleDateString()}
                  </Badge>
                </div>
              )}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

