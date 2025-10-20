Perfect — excellent choice. The **`sidebar-07`** pattern from the ShadCN UI kit is one of the most flexible and scalable for your training dashboard. It will work beautifully for your **Professional Boundaries Training App** because it supports:

✅ Nested menus (perfect for your *modules → submodules → slides* structure)
✅ Collapsible groups (for compact navigation during presentation)
✅ Icon + label combinations (so each training module can have a visual identity)
✅ Active-state styling (for breadcrumb consistency)
✅ Integration with your main content area and breadcrumb bar

Below is a **comprehensive, detailed, and thorough plan** for how to implement, organize, and populate your sidebar using **ShadCN `sidebar-07`**, complete with **code architecture, data model, and content mapping** directly from your training outline.

---

## 🧱 1. High-Level Sidebar Architecture

Your structure should follow this hierarchy:

```
Professional Boundaries Training
│
├── Opening & Framing
│   ├── Title: The Story We’re Telling Ourselves
│   ├── Why Boundaries Matter
│   ├── Session Goals
│   └── Agenda & Expectations
│
├── Policy Fundamentals
│   ├── CMDHD Policy Overview
│   ├── Scope of Practice & Limits
│   ├── Ethical Frameworks
│   ├── Conflict of Interest & Dual Relationships
│   └── Supervisor Escalation Path
│
├── Social & Relational Boundaries
│   ├── Pre-Existing Personal Relationships
│   ├── Social Media & Digital Contact
│   ├── Over/Under-Involvement
│   └── Emotional Awareness
│
├── Communication Standards
│   ├── Professional Language
│   ├── Identity & Pronoun Use
│   ├── Avoiding Controversial Topics
│   └── Limited Self-Disclosure
│
├── Operational Policies
│   ├── Physical Boundaries & Consent
│   ├── Work Hours & Service Scope
│   ├── Gifts & Gratuities
│   └── Documentation & Confidentiality
│
├── Interactive Reflection
│   ├── The Story I’m Telling Myself
│   └── Personal Self-Check
│
├── Quick Polls & Scenarios
│   ├── “It’s Just a Ride”
│   ├── “Texting After Hours”
│   ├── “Cookies as Thanks”
│   ├── “Same Church”
│   ├── “Friend Request”
│   └── “Comforting Hug”
│
├── Gray Zone Lab
│   ├── County Group Scenarios
│   └── Shared Lessons
│
├── Decision Tree & Documentation
│   ├── Decision Tree Overview
│   ├── Supervisor Communication Script
│   └── Documentation Template Walkthrough
│
└── Closing & Commitments
    ├── Summary of Key Points
    ├── Personal Commitment
    └── Evaluation & Feedback
```

---

## ⚙️ 2. ShadCN Sidebar Component Structure (TypeScript)

```tsx
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { BookOpen, FileText, Users, MessageCircle, ClipboardList, Layers, CheckCircle } from "lucide-react"
import Link from "next/link"

export function TrainingSidebar() {
  return (
    <Sidebar>
      <SidebarContent>
        {/* Opening & Framing */}
        <SidebarGroup>
          <SidebarGroupLabel><BookOpen className="h-4 w-4 mr-2" />Opening & Framing</SidebarGroupLabel>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton asChild><Link href="/training/opening/title">The Story We’re Telling Ourselves</Link></SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton asChild><Link href="/training/opening/why-boundaries">Why Boundaries Matter</Link></SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton asChild><Link href="/training/opening/goals">Session Goals</Link></SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton asChild><Link href="/training/opening/agenda">Agenda & Expectations</Link></SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroup>

        {/* Policy Fundamentals */}
        <SidebarGroup>
          <SidebarGroupLabel><FileText className="h-4 w-4 mr-2" />Policy Fundamentals</SidebarGroupLabel>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton asChild><Link href="/training/policy/overview">CMDHD Policy Overview</Link></SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton asChild><Link href="/training/policy/scope">Scope of Practice & Limits</Link></SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton asChild><Link href="/training/policy/ethics">Ethical Frameworks</Link></SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton asChild><Link href="/training/policy/conflicts">Conflict of Interest & Dual Relationships</Link></SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton asChild><Link href="/training/policy/supervision">Supervisor Escalation Path</Link></SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroup>

        {/* Additional Groups Follow Same Pattern */}
        {/* Social & Relational, Communication, Operational, etc. */}
      </SidebarContent>
    </Sidebar>
  )
}
```

✅ **Notes:**

* Use **`lucide-react`** icons to visually distinguish categories.
* Each **`SidebarMenuButton`** links to a specific “slide page.”
* **Breadcrumbs** will auto-generate based on route segments (Next.js App Router).

---

## 🧭 3. Breadcrumb Navigation Integration (Next.js)

Each page route can generate breadcrumbs dynamically:

```tsx
// app/training/[section]/[slug]/page.tsx
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator } from "@/components/ui/breadcrumb"
import { usePathname } from "next/navigation"

export function TrainingBreadcrumb() {
  const pathname = usePathname()
  const parts = pathname.split("/").filter(Boolean)
  return (
    <Breadcrumb>
      <BreadcrumbItem><BreadcrumbLink href="/training">Training</BreadcrumbLink></BreadcrumbItem>
      {parts.map((part, index) => (
        <>
          <BreadcrumbSeparator />
          <BreadcrumbItem key={index}>
            <BreadcrumbLink href={"/" + parts.slice(0, index + 1).join("/")}>{decodeURIComponent(part)}</BreadcrumbLink>
          </BreadcrumbItem>
        </>
      ))}
    </Breadcrumb>
  )
}
```

---

## 🧭 4. Content Display Area Layout

Your **main content pane** should have:

* Title + subtitle
* Rich content block (Markdown or MDX)
* Interactive components: polls, scenarios, or reflections
* Footer: navigation (Previous / Next)

```tsx
export default function TrainingPage({ children }) {
  return (
    <div className="flex h-screen">
      <TrainingSidebar />
      <main className="flex-1 overflow-y-auto px-8 py-6">
        <TrainingBreadcrumb />
        <article className="prose max-w-none mt-6">
          {children}
        </article>
        <footer className="flex justify-between mt-10 border-t pt-4">
          <Link href="#" className="text-sm text-muted-foreground">← Previous</Link>
          <Link href="#" className="text-sm text-muted-foreground">Next →</Link>
        </footer>
      </main>
    </div>
  )
}
```

---

## 🎨 5. Visual & UX Enhancements

| Element                | Suggestion                                                                                                   |
| ---------------------- | ------------------------------------------------------------------------------------------------------------ |
| **Color scheme**       | Use CMDHD blues for base, gold for accents. Different module colors (blue=policy, green=social, orange=ops). |
| **Active state**       | Highlight selected submenu item with accent border-left (Tailwind: `border-l-2 border-primary`).             |
| **Section icons**      | Give each major group its own icon (book, scales, chat, clipboard, etc.).                                    |
| **Collapse/expand**    | Use ShadCN’s built-in collapse behavior to minimize inactive groups.                                         |
| **Progress indicator** | Add percentage at sidebar footer using Supabase user progress data.                                          |

---

## 🧩 6. Data Model for Dynamic Sidebar Population

If you store sidebar data in Supabase or JSON config:

```json
[
  {
    "title": "Opening & Framing",
    "icon": "BookOpen",
    "items": [
      { "label": "The Story We’re Telling Ourselves", "href": "/training/opening/title" },
      { "label": "Why Boundaries Matter", "href": "/training/opening/why-boundaries" },
      { "label": "Session Goals", "href": "/training/opening/goals" },
      { "label": "Agenda & Expectations", "href": "/training/opening/agenda" }
    ]
  },
  {
    "title": "Policy Fundamentals",
    "icon": "FileText",
    "items": [
      { "label": "CMDHD Policy Overview", "href": "/training/policy/overview" },
      { "label": "Scope of Practice & Limits", "href": "/training/policy/scope" },
      { "label": "Ethical Frameworks", "href": "/training/policy/ethics" },
      { "label": "Conflict of Interest & Dual Relationships", "href": "/training/policy/conflicts" },
      { "label": "Supervisor Escalation Path", "href": "/training/policy/supervision" }
    ]
  }
]
```

Then you can dynamically render sidebar sections from this JSON rather than hardcoding.

---

## 🧠 7. Suggested Enhancements for Your Use Case

| Feature                         | Purpose                                                             | Implementation                                              |
| ------------------------------- | ------------------------------------------------------------------- | ----------------------------------------------------------- |
| **Search Bar (top of sidebar)** | Let presenter or staff jump to a specific topic quickly.            | Add a `Command` component or input field with fuzzy search. |
| **Bookmark/Favorites**          | Mark commonly referenced slides or policies.                        | Store user favorites in Supabase table `user_bookmarks`.    |
| **Live Poll Indicator**         | Show a dot when a slide has an interactive poll or scenario.        | Add a badge component next to sidebar item.                 |
| **Accessibility Toggle**        | Increase text size or high-contrast mode for presentation displays. | Use context + Tailwind `dark:` classes.                     |
| **Progress Tracking**           | Auto-mark completed items.                                          | Store progress per user session in `progress` table.        |

---

## 🧾 8. Breadcrumb + Sidebar Sync Example

Breadcrumb updates automatically as user navigates:

```
CMDHD → Professional Boundaries Training → Policy Fundamentals → Scope of Practice & Limits
```

Corresponding sidebar section auto-expands **Policy Fundamentals** and highlights **Scope of Practice & Limits**.

---

## 🚀 9. Next Development Steps

1. **Install component:**

   ```bash
   npx shadcn@latest add sidebar-07
   ```

2. **Add icons:**

   ```bash
   npm install lucide-react
   ```

3. **Create `TrainingSidebar.tsx`** using the full structure above.

4. **Set up folder routing** in Next.js `/app/training/[section]/[slide]/page.tsx`.

5. **Implement breadcrumb component** and wrap it in your `TrainingLayout`.

6. **Populate sidebar items** dynamically from your JSON or Supabase.

7. **Add content pages** for each slide (can be MDX files rendered via next-mdx-remote or direct React components).

---

Would you like me to generate the **full JSON configuration** for the sidebar (all 10 sections + 50+ slides), formatted for ShadCN’s `sidebar-07` component — ready to import and render dynamically?
That file will plug directly into your dashboard and auto-generate both your **sidebar menu** and **breadcrumb structure.**
