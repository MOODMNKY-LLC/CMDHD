"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { FileText, Home, ArrowRight } from "lucide-react";

export default function PolicyPage() {
  return (
    <main className="relative min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      {/* Hero/Header Section */}
      <section className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-10">
        <div className="mx-auto max-w-5xl px-6 py-6">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <FileText className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h1 className="text-2xl md:text-3xl font-bold tracking-tight">Professional Boundaries Policy</h1>
                <p className="text-sm text-muted-foreground">Central Michigan District Health Department</p>
              </div>
            </div>
            <Badge className="bg-primary text-primary-foreground text-sm px-4 py-2">
              Effective: June 30, 2025
            </Badge>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="mx-auto max-w-5xl px-6 py-12">
        <Card className="shadow-xl border-2">
          <CardContent className="p-8 md:p-12">
            <div className="prose prose-lg dark:prose-invert max-w-none
              prose-headings:text-foreground prose-headings:font-bold
              prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4 prose-h2:pb-2 prose-h2:border-b prose-h2:border-border
              prose-p:text-muted-foreground prose-p:leading-relaxed prose-p:mb-4
              prose-ol:text-foreground prose-ol:space-y-4 prose-ol:my-6
              prose-ul:text-muted-foreground prose-ul:space-y-2 prose-ul:my-3
              prose-li:text-foreground prose-li:leading-relaxed
              prose-strong:text-foreground prose-strong:font-semibold
              prose-a:text-primary prose-a:no-underline hover:prose-a:underline"
            >
        <h2>Purpose</h2>
        <p>
          To ensure professional conduct of staff in maintaining professional boundaries when providing services to clients. 
          Professional boundaries are expectations that set a clear relationship between the client and staff, preventing role confusion.
        </p>

        <h2>Policy</h2>
        <p>
          All staff will follow procedures to ensure that professional boundaries are maintained between staff and the client(s).
        </p>

        <h2>Procedures</h2>

        <ol>
          <li>
            Staff will set clear expectations for clients at the start of services, giving clients an understanding of what is 
            expected of them and what the client can expect from the staff.
          </li>

          <li>
            Staff will work only within their scope of practice for their defined role and will refer clients out as needed.
            <ul>
              <li>
                This includes, but is not limited to, transporting clients in a vehicle, running errands for clients, and 
                providing any other services not within staff scope of practice.
              </li>
            </ul>
          </li>

          <li>
            Staff shall comply with the ethical standards set forth by their professional organizations, associations and/or 
            other recognized standards within CMDHD.
          </li>

          <li>
            Staff should be alert to and avoid conflicts of interest that interfere with the exercise of professional discretion 
            and impartial judgment. Staff should inform clients when a real or potential conflict of interest arises and take 
            reasonable steps to resolve the issue in a manner that makes the clients&apos; interests primary and protects 
            clients&apos; interests to the greatest extent possible. In some cases, protecting clients&apos; interests may 
            require termination of the professional relationship with proper referral of the client to another staff member or 
            agency.<sup>[1]</sup>
          </li>

          <li>
            Staff will discuss with their supervisor if a pre-existing personal or social relationship exists with a client to 
            determine steps in moving forward. If any changes in relationship arise this must also be discussed with a supervisor.
            <ul>
              <li>
                This includes but is not limited to friendship, guardianship, romantic, or business relationships.
              </li>
            </ul>
          </li>

          <li>
            Social relationships between staff and their clients or families are inappropriate. Contact via social networking 
            sites is prohibited. Staff shall assess the implications of &quot;friending,&quot; &quot;liking,&quot; 
            &quot;following,&quot; or accepting such a request from another person when there is the potential for 
            misinterpretation of the relationship or the potential of sharing protected information that should not be shared. 
            For example, relationships such as supervisor-subordinate and staff-staff merit close consideration of the 
            implications and the nature of the social interaction. Employees may not knowingly friend an individual currently 
            receiving services from CMDHD without first discussing the relationship and potential implications with their 
            supervisor. This also applies to client caregivers, guardians, and family members.
          </li>

          <li>
            Staff will pay careful attention when they are at risk of deviating from the professional relationship by becoming 
            over- or under-involved with clients or others involved in their care.<sup>[2]</sup>
          </li>

          <li>
            Respect personal space. If you perceive that touch is needed, ask for consent.
            <ul>
              <li>
                Do not initiate touch unless clearly asked by the family or after asking permission. (e.g. asking a parent if 
                you can pick up a baby, or a parent requesting that you hold a child).
              </li>
              <li>
                Physical contact with clients should be limited to the scope of practice (e.g. putting a baby on the scale or 
                taking a client&apos;s blood pressure), and the client should be asked for permission before physical contact occurs.
              </li>
            </ul>
          </li>

          <li>Staff will not disclose any unnecessary personal information to clients.</li>

          <li>Staff are expected to communicate with clients using clear, respectful and professional language at all times.</li>

          <li>
            Staff must consistently use the client&apos;s preferred name, pronouns, and relationship terms both in conversation 
            and in documentation. If uncertain, staff should politely ask for clarification.
          </li>

          <li>
            Staff will avoid discussing controversial topics with clients, such as religious or political views.
          </li>

          <li>
            Staff will not conduct services outside of defined work hours, unless pre-arranged with a supervisor.
          </li>

          <li>
            The CMDHD prohibits all employees, interns, and volunteers from accepting gifts, gratuities, or entertainment from 
            individuals and firms with whom the CMDHD does business. It is also a violation to give gifts to individuals or 
            firms with whom the agency does business. Excluded from this prohibition is the exchange of normal business courtesies 
            such as luncheons or dinners, when they are proper and consistent with regular business practice. Also excluded are 
            advertising or promotional materials and holiday or other gifts, which are of nominal value (less than $25.00).
          </li>

          <li>
            Staff shall discuss potential conflict of interest issues with their supervisor. Any breach of professional boundaries 
            may result in disciplinary action.
          </li>
        </ol>

        <h2>References</h2>
        <p>
          [1] National Association of Social Workers Code of Ethics, Ethical Standards 1.06
        </p>
        <p>
          [2] American Nurses Association Code of Ethics, Provision 2.3
        </p>
            </div>

            <Separator className="my-8" />

            {/* Document Footer Info */}
            <div className="bg-muted/50 rounded-lg p-6 border border-border">
              <h3 className="font-semibold text-lg mb-3 text-foreground">About This Policy</h3>
              <div className="grid md:grid-cols-2 gap-4 text-sm text-muted-foreground">
                <div>
                  <p className="font-medium text-foreground mb-1">Applies To:</p>
                  <p>All CMDHD staff, interns, and volunteers providing client services</p>
                </div>
                <div>
                  <p className="font-medium text-foreground mb-1">Review Frequency:</p>
                  <p>Annually or as needed based on regulatory changes</p>
                </div>
                <div>
                  <p className="font-medium text-foreground mb-1">Compliance:</p>
                  <p>Required for all staff members serving the six-county region</p>
                </div>
                <div>
                  <p className="font-medium text-foreground mb-1">Questions?</p>
                  <p>Contact your supervisor or the HR department</p>
                </div>
              </div>
            </div>

            {/* Navigation Footer */}
            <div className="mt-8 pt-6 border-t border-border flex flex-col sm:flex-row gap-4 justify-between items-center">
              <Button asChild variant="outline" size="lg">
                <Link href="/">
                  <Home className="mr-2 w-4 h-4" />
                  Back to Home
                </Link>
              </Button>
              <div className="flex gap-3">
                <Button asChild variant="outline" size="lg">
                  <Link href="/scenarios">View Scenarios</Link>
                </Button>
                <Button asChild size="lg" className="shadow-lg shadow-primary/25">
                  <Link href="/protected">
                    Start Training
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}

