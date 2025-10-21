'use client'

import { useState, useTransition } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Badge } from "@/components/ui/badge";
import { updateDemographics } from "@/app/protected/actions";
import { ClipboardList, CheckCircle2, Edit } from "lucide-react";
import type { Profile } from "@/lib/types/database";

interface DemographicsFormCardProps {
  profile: Profile;
}

const CMDHD_COUNTIES = [
  "Arenac",
  "Clare",
  "Gladwin",
  "Isabella",
  "Osceola",
  "Roscommon",
];

const DEPARTMENTS = [
  "WIC",
  "Family Planning",
  "Maternal Child Health",
  "Home Visiting",
  "Environmental Health",
  "Administration",
  "Other",
];

const ROLES = [
  "Registered Nurse (RN)",
  "Social Worker",
  "Community Health Worker",
  "Case Manager",
  "Administrator",
  "Public Health Educator",
  "Other",
];

const CERTIFICATIONS = [
  "RN",
  "BSW",
  "MSW",
  "LMSW",
  "LLMSW",
  "CDCA",
  "None",
  "Other",
];

const EXPERIENCE_RANGES = [
  "0-5 years",
  "5-10 years",
  "10-15 years",
  "15-20 years",
  "20+ years",
];

export function DemographicsFormCard({ profile }: DemographicsFormCardProps) {
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const [isEditing, setIsEditing] = useState(!isDemographicsComplete(profile));
  const [selectedCounties, setSelectedCounties] = useState<string[]>(
    profile.counties_served || []
  );

  const handleSubmit = async (formData: FormData) => {
    setError(null);
    setSuccess(false);

    // Validate required fields
    const fullName = formData.get('full_name') as string;
    if (!fullName) {
      setError('Full name is required');
      return;
    }

    startTransition(async () => {
      const result = await updateDemographics({
        full_name: fullName,
        department: formData.get('department') as string || undefined,
        years_experience: formData.get('years_experience') as string || undefined,
        primary_role: formData.get('primary_role') as string || undefined,
        counties_served: selectedCounties.length > 0 ? selectedCounties : undefined,
        license_certification: formData.get('license_certification') as string || undefined,
        previous_training: formData.get('previous_training') === 'yes',
        previous_training_year: formData.get('previous_training_year') 
          ? parseInt(formData.get('previous_training_year') as string)
          : undefined,
      });

      if (result?.error) {
        setError(result.error);
      } else {
        setSuccess(true);
        setIsEditing(false);
      }
    });
  };

  const toggleCounty = (county: string) => {
    setSelectedCounties(prev =>
      prev.includes(county)
        ? prev.filter(c => c !== county)
        : [...prev, county]
    );
  };

  if (isDemographicsComplete(profile) && !isEditing) {
    return (
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="flex items-center gap-2">
                <ClipboardList className="h-5 w-5" />
                Demographics
              </CardTitle>
              <CardDescription>Your profile information</CardDescription>
            </div>
            <Badge variant="default" className="bg-green-600 hover:bg-green-700">
              <CheckCircle2 className="mr-1 h-3 w-3" />
              Complete
            </Badge>
          </div>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="grid gap-3 text-sm">
            {profile.primary_role && (
              <div>
                <span className="text-muted-foreground">Role:</span> {profile.primary_role}
              </div>
            )}
            {profile.years_experience && (
              <div>
                <span className="text-muted-foreground">Experience:</span> {profile.years_experience}
              </div>
            )}
            {profile.counties_served && profile.counties_served.length > 0 && (
              <div>
                <span className="text-muted-foreground">Counties:</span> {profile.counties_served.join(', ')}
              </div>
            )}
          </div>
          <Button
            variant="outline"
            size="sm"
            onClick={() => setIsEditing(true)}
            className="w-full mt-2"
          >
            <Edit className="mr-2 h-4 w-4" />
            Edit Demographics
          </Button>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className={!isDemographicsComplete(profile) ? "border-yellow-500" : ""}>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <ClipboardList className="h-5 w-5" />
          Complete Your Profile
        </CardTitle>
        <CardDescription>
          Help us improve training effectiveness (required for completion)
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form action={handleSubmit} className="space-y-6">
          {/* Full Name */}
          <div className="space-y-2">
            <Label htmlFor="full_name">Full Name *</Label>
            <Input
              id="full_name"
              name="full_name"
              defaultValue={profile.full_name || ''}
              required
              placeholder="Your full name"
            />
          </div>

          {/* Department */}
          <div className="space-y-2">
            <Label htmlFor="department">Department</Label>
            <Select name="department" defaultValue={profile.department || undefined}>
              <SelectTrigger>
                <SelectValue placeholder="Select your department" />
              </SelectTrigger>
              <SelectContent>
                {DEPARTMENTS.map(dept => (
                  <SelectItem key={dept} value={dept}>{dept}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Years of Experience */}
          <div className="space-y-2">
            <Label htmlFor="years_experience">Years of Experience</Label>
            <Select name="years_experience" defaultValue={profile.years_experience || undefined}>
              <SelectTrigger>
                <SelectValue placeholder="Select experience range" />
              </SelectTrigger>
              <SelectContent>
                {EXPERIENCE_RANGES.map(range => (
                  <SelectItem key={range} value={range}>{range}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Primary Role */}
          <div className="space-y-2">
            <Label htmlFor="primary_role">Primary Professional Role</Label>
            <Select name="primary_role" defaultValue={profile.primary_role || undefined}>
              <SelectTrigger>
                <SelectValue placeholder="Select your primary role" />
              </SelectTrigger>
              <SelectContent>
                {ROLES.map(role => (
                  <SelectItem key={role} value={role}>{role}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Counties Served */}
          <div className="space-y-3">
            <Label>County/Counties Served</Label>
            <div className="grid grid-cols-2 gap-3">
              {CMDHD_COUNTIES.map(county => (
                <div key={county} className="flex items-center space-x-2">
                  <Checkbox
                    id={`county-${county}`}
                    checked={selectedCounties.includes(county)}
                    onCheckedChange={() => toggleCounty(county)}
                  />
                  <label
                    htmlFor={`county-${county}`}
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
                  >
                    {county}
                  </label>
                </div>
              ))}
            </div>
          </div>

          {/* License/Certification */}
          <div className="space-y-2">
            <Label htmlFor="license_certification">License/Certification</Label>
            <Select name="license_certification" defaultValue={profile.license_certification || undefined}>
              <SelectTrigger>
                <SelectValue placeholder="Select your license/certification" />
              </SelectTrigger>
              <SelectContent>
                {CERTIFICATIONS.map(cert => (
                  <SelectItem key={cert} value={cert}>{cert}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Previous Training */}
          <div className="space-y-3">
            <Label>Have you had previous professional boundaries training?</Label>
            <RadioGroup
              name="previous_training"
              defaultValue={profile.previous_training ? 'yes' : 'no'}
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="yes" id="training-yes" />
                <Label htmlFor="training-yes" className="font-normal cursor-pointer">Yes</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="no" id="training-no" />
                <Label htmlFor="training-no" className="font-normal cursor-pointer">No</Label>
              </div>
            </RadioGroup>
          </div>

          {/* Previous Training Year */}
          <div className="space-y-2">
            <Label htmlFor="previous_training_year">If yes, what year?</Label>
            <Input
              id="previous_training_year"
              name="previous_training_year"
              type="number"
              min="2000"
              max={new Date().getFullYear()}
              defaultValue={profile.previous_training_year || undefined}
              placeholder="e.g., 2024"
            />
          </div>

          {error && (
            <p className="text-sm text-red-500">{error}</p>
          )}

          {success && (
            <div className="rounded-lg bg-green-50 dark:bg-green-950/20 p-3 text-sm text-green-700 dark:text-green-400">
              <CheckCircle2 className="inline mr-2 h-4 w-4" />
              Demographics saved successfully!
            </div>
          )}

          <Button type="submit" disabled={isPending} className="w-full">
            {isPending ? 'Saving...' : 'Save Demographics'}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}

function isDemographicsComplete(profile: Profile): boolean {
  return !!(
    profile.full_name &&
    profile.department &&
    profile.years_experience &&
    profile.primary_role
  );
}

