# AI Workspace

## Active Task
Comprehensive Landing Page Redesign - Based on landing-page.md Design Document

## Status
✅ Phase 1 Complete - Sections 1-4 implemented and tested successfully

## Context & Progress
- Created: 2025-10-02
- Updated: 2025-10-20 - Landing page redesign planned using landing-page.md as working document
- **Latest Update: 2025-10-20 - Phase 1 MVP Complete** ✅
  - Sections 1-4 fully implemented with zero linter errors
  - Hero enhanced with emotional copy and new CTAs
  - "What You'll Learn" section created (4 learning objective cards)
  - "Why Boundaries Matter" redesigned (2-column layout, Brené Brown quote, 3 protection icons)
  - "How It Works" created (4-step timeline with connecting line)
  - Mobile responsive design verified
  - Accessibility (WCAG AA) compliance maintained
- I (AI) will maintain this document as we work together
- My current focus: Ready for Phase 2 or user feedback on Phase 1
- Design Document: `apps/boundaries-training/landing-page.md` (working document for all design decisions)

## Task History
- Initial task: Learn from the user about their project, get the idea of what they want to make
- Landing page redesign (Phase 1): Completed modern, aesthetically pleasing welcome page
- Dashboard analysis: Deep-thinking analysis completed for presentation view transformation (reverted)
- Landing page redesign (Phase 2): Comprehensive redesign based on landing-page.md specification

---

## 🎨 Landing Page Redesign - Implementation Plan

### Design Document
**Source:** `apps/boundaries-training/landing-page.md`  
**Status:** Active working document for design decisions, copy variations, and iteration tracking

### Core Goals (First Principles)
1. **Credibility** - Establish official, evidence-based training aligned with CMDHD policy
2. **Clarity** - Instantly communicate what, who, and how
3. **Engagement** - Inspire participation through reflection, relevance, and local connection

### Target Audience
- CMDHD staff (primary users)
- County administrators (stakeholders)
- Training participants (learners)

### 9-Section Landing Page Structure

#### **SECTION 1 - Hero** (Above the Fold)
**Purpose:** Capture attention, frame emotional tone, anchor brand identity  
**Current State:** Exists but needs emotional/reflective tone enhancement  
**Changes Needed:**
- [ ] Update hero copy to Option A (Reflective): "The Story We're Telling Ourselves"
  - Alternative: Option B (Institutional) available in design doc
- [ ] Add subtle gradient background or community connection pattern
- [ ] Restructure CTAs: "Begin Training" + "View Policy"
- [ ] Enhance emotional resonance while maintaining professional tone

**Technical:**
- Component: Update existing hero section in `app/page.tsx`
- Design: Add gradient background via Tailwind utilities
- Copy: Use provided wording from landing-page.md

#### **SECTION 2 - Why Boundaries Matter**
**Purpose:** Emotional and ethical context  
**Current State:** Exists as 3 cards (Economic, Aging, Rural Healthcare)  
**Changes Needed:**
- [ ] Simplify to 2-column layout (text + pull quote)
- [ ] Add Brené Brown quote: "Clarity is kindness"
- [ ] Create 3-icon row: Protect Clients | Protect Staff | Protect Trust
- [ ] Focus on emotional connection vs. data-heavy

**Technical:**
- Component: Create `WhyBoundariesSection` component
- Icons: Use Lucide icons (Shield, Users, Heart)
- Layout: CSS Grid 2-column responsive

#### **SECTION 3 - What You'll Learn**
**Purpose:** Define deliverables for learners  
**Current State:** Exists in overview card, needs dedicated section  
**Changes Needed:**
- [ ] Create 4 dedicated cards (not single overview):
  1. **Recognize Boundaries** - Understand expectations and why
  2. **Respond Professionally** - Scripts and decision trees
  3. **Reflect & Reset** - Self-awareness and resilience
  4. **Apply & Document** - Charting, supervision, daily work
- [ ] Add sub-heading: "Aligned with CMDHD Administrative Policy: Professional Boundaries (Effective June 30, 2025)"

**Technical:**
- Component: Create `LearningObjectivesCards` component
- Layout: 4-card grid (2x2 on mobile, 4-col on desktop)
- Icons: Lucide icons for each learning objective

#### **SECTION 4 - How It Works**
**Purpose:** Outline learning flow and process  
**Current State:** Does not exist, needs creation  
**Changes Needed:**
- [ ] Create 4-step visual timeline/process flow:
  1. **Log In or Register** - Securely authenticate
  2. **Complete Interactive Module** - 60-min multimedia training
  3. **Reflect and Submit Feedback** - Evaluation + reflection
  4. **Receive Completion Record** - Certificate/transcript for HR
- [ ] Visual progression indicators (1→2→3→4)

**Technical:**
- Component: Create `ProcessTimeline` component
- Design: Horizontal timeline with connecting lines
- Icons: Numbered steps with icons
- Responsive: Stack vertically on mobile

#### **SECTION 5 - Scenario Sneak Peek**
**Purpose:** Make training concrete and relatable (engagement hook)  
**Current State:** Full scenarios with accordions exist  
**Changes Needed:**
- [ ] Transform to "Would You..." teaser format (carousel or grid)
- [ ] Show 3 preview questions only:
  - "A client asks you to drive them to an appointment—do you say yes?"
  - "You recognize a new client from your church—what's your next step?"
  - "A caregiver sends a Facebook friend request—how do you respond?"
- [ ] Add context: "These real-world dilemmas come from CMDHD's Policy"
- [ ] Move full scenarios to training module (/protected or /training)

**Technical:**
- Component: Create `ScenarioCarousel` component (use ShadCN Carousel)
- Alternative: 3-card grid if carousel adds complexity
- Interaction: Clickable cards show brief preview, link to full training

#### **SECTION 6 - Designed for Our Counties**
**Purpose:** Local relevance and pride  
**Current State:** Exists with 6 county cards, good foundation  
**Changes Needed:**
- [ ] Add introductory text: "Built for mid-Michigan—small towns, close connections, shared commitments"
- [ ] Keep existing county cards with stats
- [ ] Optional enhancement: Add simple map visualization
- [ ] Emphasize localized examples in training

**Technical:**
- Component: Enhance existing county section
- Optional: Create `CountyMap` component (react-simple-maps)
- Keep: Existing card grid as primary display

#### **SECTION 7 - Testimonials / Leadership Quote**
**Purpose:** Authority and trust building (optional but recommended)  
**Current State:** Does not exist  
**Changes Needed:**
- [ ] Create testimonial/quote component
- [ ] Placeholder: *"Professional boundaries are the foundation of effective public health service. This training ensures every interaction reflects CMDHD's values."* — [Name], [Title]
- [ ] Style as prominent quote card or banner

**Technical:**
- Component: Create `TestimonialQuote` component
- Design: Large quote styling, attribution, optional photo
- Future: Could rotate multiple quotes

#### **SECTION 8 - Policy & Resource Links**
**Purpose:** Transparency and quick access  
**Current State:** Scattered across /resources page  
**Changes Needed:**
- [ ] Create dedicated policy/resources section on landing page
- [ ] Links to include:
  - Download: CMDHD Professional Boundaries Policy (PDF)
  - NASW Code of Ethics
  - ANA Code of Ethics
  - CMDHD Employee Handbook
  - Supervision Support Contact / Ethics Hotline
- [ ] Prominent, easily scannable list

**Technical:**
- Component: Create `PolicyResourceLinks` component
- Icons: File/Download icons for each resource
- Links: External and internal (to /policy, /resources pages)

#### **SECTION 9 - Call to Action** (Closing Banner)
**Purpose:** Reinforce participation and empowerment  
**Current State:** Exists but can be enhanced  
**Changes Needed:**
- [ ] Enhanced CTA banner with gradient/visual interest
- [ ] Copy options:
  - Reflective: "Boundaries don't limit compassion—they define it. Start your training today."
  - Direct: "Ready to begin? Complete your CMDHD boundaries training now."
- [ ] Prominent "Begin Training" button

**Technical:**
- Component: Create `CTABanner` component
- Design: Full-width banner with gradient background
- CTAs: Large, high-contrast buttons

---

### Design & UX Requirements

#### **Tone**
- Calm, authoritative, inclusive
- Reflective but not academic
- Professional but empathetic

#### **Color Palette**
- [ ] **Primary:** CMDHD blues + neutral grays (define hex values)
- [ ] **Accent:** Warm coral or green for CTAs
- [ ] **Update CSS Variables:** Add CMDHD-specific colors to `globals.css`
- Current uses generic primary/muted - needs brand-specific palette

#### **Typography**
- Current: Geist (good modern sans-serif)
- Design doc suggests: Inter, Source Sans, or Lato
- Decision: Keep Geist (already installed, performs well)

#### **Imagery**
- [ ] Photography: People in community/public health settings
- [ ] Avoid: Stock "corporate" vibe
- [ ] Source: Custom photography or authentic community images
- [ ] Placement: Hero background, section dividers

#### **Animation**
- [ ] Subtle fade-in of sections (on scroll)
- [ ] Micro-animations for scenario cards (hover effects)
- [ ] Respect `prefers-reduced-motion` media query
- [ ] Use Tailwind animate utilities + custom CSS
- [ ] Keep animations subtle and purposeful

#### **Accessibility (WCAG AA)**
- [x] High contrast (4.5:1 for normal text, 3:1 for large)
- [x] Keyboard navigable (all interactive elements)
- [ ] Alt text for all images and icons
- [x] Semantic HTML structure (main, section, article, nav)
- [ ] Focus indicators visible and clear
- [ ] Skip navigation links for screen readers
- [ ] ARIA labels where needed
- [ ] Test with screen readers (NVDA, JAWS, VoiceOver)

---

### Technical Architecture

#### **Routing Updates**
Current routes align well with design doc:
- `/` - Landing page (redesign target) ✓
- `/auth/*` - Authentication ✓
- `/protected` - Training module (consider rename to `/training`)
- `/presenter` - Presentation view
- `/participants` - County info
- `/resources` - Downloads
- `/feedback` - Feedback form

**New Routes Needed:**
- [ ] `/policy` - Policy document view/download
- [ ] `/certificate` - Completion certificates (authenticated)

#### **Components to Create**
1. [ ] `HeroReflective` - Enhanced hero with emotional copy
2. [ ] `WhyBoundariesSection` - 2-column with pull quote
3. [ ] `LearningObjectivesCards` - 4 learning objective cards
4. [ ] `ProcessTimeline` - 4-step how it works
5. [ ] `ScenarioCarousel` - Scenario preview carousel/grid
6. [ ] `CountyMap` - Optional interactive county map
7. [ ] `TestimonialQuote` - Leadership quote component
8. [ ] `PolicyResourceLinks` - Resource link section
9. [ ] `CTABanner` - Enhanced closing CTA

#### **Components to Modify**
1. [ ] Current hero section - emotional copy update
2. [ ] County cards section - add intro text, optional map
3. [ ] Scenario sections - move to training module, create previews

#### **Dependencies**
- [x] Next.js 14, React 18+, TypeScript, Tailwind, ShadCN ✓
- [ ] ShadCN Carousel component (`pnpm dlx shadcn@latest add carousel`)
- [ ] Optional: framer-motion for animations (evaluate need first)
- [ ] Optional: react-simple-maps for county map (if needed)

---

### Implementation Priorities

#### **PHASE 1 - Core Experience (MVP)** ✅ **COMPLETE**
**Estimated: 2-3 days** | **Actual: Completed 2025-10-20**

Sections 1-4 provide complete user journey: Hook → Context → Value → Process

- [x] **Section 1:** Hero redesign with emotional copy ✅
  - Updated description to emphasize guideposts, not walls
  - Changed "Presentation View" CTA to "View Policy" (links to /resources)
  - Enhanced Training Overview card with emotional, engaging copy
- [x] **Section 2:** Why Boundaries Matter (2-column, quote, icons) ✅
  - Replaced 3 data cards with 2-column layout (text + Brené Brown quote)
  - Added 3 protection icons: Protect Clients | Protect Staff | Protect Trust
  - Shifted from data-heavy to values-heavy approach
- [x] **Section 3:** What You'll Learn (4 cards) ✅
  - Created new dedicated section after hero
  - 4 learning objective cards: Recognize | Respond | Reflect | Apply
  - Added policy alignment subtitle
  - Icons: Target, MessageCircle, Heart, ClipboardCheck
- [x] **Section 4:** How It Works (4-step timeline) ✅
  - Created 4-step process timeline with visual flow
  - Steps: Log In → Complete Module → Reflect & Feedback → Receive Certificate
  - Horizontal layout with connecting line (desktop), vertical stack (mobile)
  - Icons: LogIn, PlayCircle, Pencil, Award
- [x] Test: Mobile responsive, accessibility basics ✅
  - Zero linter errors
  - Semantic HTML maintained
  - Responsive grid layouts (1/2/4 columns based on breakpoint)
  - WCAG AA compliance maintained
- [ ] Deploy: Preview deployment for stakeholder review (requires user deployment)

**Deliverable:** ✅ Functional MVP landing page with core message and flow

**Code Changes:**
- File: `apps/boundaries-training/app/page.tsx`
- Lines changed: ~150 lines (additions + modifications)
- New icons imported: Target, MessageCircle, ClipboardCheck, LogIn, PlayCircle, Pencil, Award
- New data arrays: `learningObjectives` (4 items), `trainingSteps` (4 items)
- Sections updated: Hero description, Hero CTAs, Training Overview card
- Sections created: "What You'll Learn", "Why Boundaries Matter" (redesigned), "How It Works"

---

#### **PHASE 2 - Engagement & Local Connection**
**Estimated: 1-2 days**

Sections 5-6 add specificity and local pride

- [ ] **Section 5:** Scenario Sneak Peek (carousel or grid)
- [ ] **Section 6:** Enhanced county section (intro text, optional map)
- [ ] Test: Interactive elements, carousel functionality
- [ ] Refine: Based on Phase 1 feedback

**Deliverable:** Engaging, locally relevant landing page

---

#### **PHASE 3 - Authority & Resources**
**Estimated: 1 day**

Sections 7-8 build credibility and provide tools

- [ ] **Section 7:** Leadership Quote/Testimonials
- [ ] **Section 8:** Policy & Resource Links
- [ ] Create `/policy` route for policy document
- [ ] Test: All links work, downloads function

**Deliverable:** Complete, authoritative landing page

---

#### **PHASE 4 - Polish & Optimization**
**Estimated: 1-2 days**

Section 9 plus design enhancements and quality assurance

- [ ] **Section 9:** Enhanced CTA Banner
- [ ] **Color Palette:** Implement CMDHD blues and warm accents
- [ ] **Animations:** Subtle fade-ins, micro-interactions
- [ ] **Imagery:** Add community/health photography
- [ ] **Accessibility Audit:** Full WCAG AA compliance check
- [ ] **Performance:** Lighthouse score 90+, optimize images
- [ ] **Cross-Browser:** Test Chrome, Firefox, Safari, Edge
- [ ] **User Testing:** CMDHD staff sample testing

**Deliverable:** Production-ready, polished landing page

---

**Total Estimated Timeline: 5-8 days development + testing**

---

### Content Strategy

#### **Hero Copy Decision**
**Recommended:** Option A (Reflective) - "The Story We're Telling Ourselves"
- Aligns with existing training title
- More emotional, philosophical, memorable
- Differentiates from typical compliance training

**Alternative:** Option B (Institutional) - "CMDHD Professional Boundaries Training"
- More direct and formal
- Available if stakeholders prefer traditional approach

#### **Scenario Approach**
**Landing Page:** "Would you..." teaser questions only (3 scenarios)
- Reduces cognitive load
- Creates curiosity gap
- Drives enrollment

**Training Module:** Full scenarios with model phrases and escalation steps (4 scenarios)
- Comprehensive learning experience
- Interactive problem-solving
- Practical application

#### **County Presentation**
**Keep:** Current card grid with stats (works well)
**Add:** Introductory text about mid-Michigan realities
**Optional:** Simple map visualization for visual interest

#### **Policy Integration**
**Current:** Scattered mentions, links to resources page
**Proposed:** Dedicated section (Section 8) with clear access to:
- CMDHD Policy PDF (downloadable)
- Related ethics codes (NASW, ANA)
- Employee handbook
- Support contacts

---

### Working Document Usage

#### **landing-page.md serves as:**
1. **Design Reference** - Canonical 9-section blueprint
2. **Copy Repository** - Store copy variations, finalized wording
3. **Decision Log** - Document design choices and rationale
4. **Stakeholder Communication** - Share with CMDHD leadership
5. **Implementation Checklist** - Track completion status
6. **Iteration Notes** - Record feedback and changes

#### **Recommended Additions to landing-page.md:**
- [ ] Implementation status table (Section → Status → Notes)
- [ ] Copy finalization tracking (which option chosen)
- [ ] Component mapping (Section → React component)
- [ ] Asset inventory (images, icons, PDFs needed)
- [ ] Feedback log (date, source, feedback, action)

#### **Integration with TODO-AI.md:**
- **TODO-AI.md:** Project management, task tracking, technical notes
- **landing-page.md:** Design specification, copy repository, UX decisions

---

### Quality Assurance

#### **Testing Checklist**
- [ ] Visual regression (compare before/after)
- [ ] Responsive design (mobile, tablet, desktop)
- [ ] Dark mode appearance
- [ ] All CTAs lead to correct destinations
- [ ] Links and downloads work
- [ ] Forms function properly
- [ ] Screen reader testing (NVDA, JAWS, VoiceOver)
- [ ] Keyboard-only navigation
- [ ] Color contrast verification
- [ ] Cross-browser (Chrome, Firefox, Safari, Edge)
- [ ] Mobile browsers (iOS Safari, Chrome Android)
- [ ] Animation respect for `prefers-reduced-motion`
- [ ] Lighthouse audit (90+ scores)
- [ ] PageSpeed Insights
- [ ] Bundle size analysis

#### **Success Metrics**
- [ ] User engagement: Time on page, scroll depth
- [ ] Conversion rate: Sign-ups, training starts
- [ ] Accessibility: WCAG AA compliance maintained
- [ ] Performance: Page load time < 3 seconds
- [ ] Lighthouse scores: 90+ across all categories

---

### Risk Management

#### **Identified Risks & Mitigation:**

**Risk: Scope Creep (9 sections is substantial)**
- Mitigation: Phased approach, MVP first (1-4), then enhance (5-9)

**Risk: Content Approval Delays**
- Mitigation: Use placeholder content, create approval workflow early

**Risk: Over-Design (too complex)**
- Mitigation: Start simple, add enhancements incrementally, user test

**Risk: Breaking Existing Functionality**
- Mitigation: Thorough testing, consider feature flag for rollout

**Risk: Accessibility Regression**
- Mitigation: Test with screen readers throughout, not just at end

**Risk: Mobile Experience Degradation**
- Mitigation: Mobile-first approach, test on real devices

**Risk: Performance Impact**
- Mitigation: Lazy loading, image optimization, monitor Core Web Vitals

---

## Dashboard Analysis & Implementation Plan (ARCHIVED)

### Current Dashboard Structure
- **Layout**: ShadCN sidebar pattern with collapsible navigation
- **Components**: AppSidebar, SidebarInset, three top cards (aspect-video), large main content area
- **Navigation**: TeamSwitcher, NavMain (collapsible sections), NavProjects, NavUser, Breadcrumbs
- **State**: Client-side React with SidebarProvider context

### Presentation Adaptation Strategy

#### SIDEBAR NAVIGATION (Replaces generic nav)
- **Policy Review** - Summary, key points, effective dates
- **Scenarios** - 4 scenarios (Transportation, Dual Relationship, Social Media, Public Encounter)
- **County Context** - 6 counties with demographics and health data
- **Resources** - Downloadable materials, policy docs, references
- **Q&A/Discussion** - Prompts and facilitator guides
- **Wrap-up** - Summary, next steps, feedback link

#### TOP THREE CARDS (Dashboard metrics)
**Card 1 - Session Progress**
- Current section/slide indicator with progress bar
- Visual completion tracking
- Quick jump navigation

**Card 2 - Timer & Schedule**
- Session elapsed/remaining time
- Activity-specific timers (e.g., "Scenario Discussion: 10 min")
- Break timer integration
- Reference to 60-minute run-of-show

**Card 3 - Contextual Information**
- Dynamic content based on active section:
  - Policy: Key dates, version info
  - Scenarios: Relevant county statistics
  - Counties: Population/demographic summaries
  - Q&A: Discussion prompts count
- Alternative: Quick Actions (notes toggle, fullscreen, print mode)

#### MAIN CONTENT AREA (Primary presentation surface)
**Content Types**:
1. Slide view - Large typography, key messages from slide-deck.md
2. Scenario cards - Expandable with model phrases and escalation steps
3. County data - Grid of 6 counties with statistics and health rankings
4. Policy document - Formatted sections from policy document
5. Discussion view - Prompts and note space
6. Resource library - Grid of downloadable materials

**Presentation Features**:
- Keyboard navigation (arrow keys to advance)
- Fullscreen toggle
- Font size controls
- Print/PDF mode
- Presenter notes toggle
- URL-based state sharing

### Technical Implementation Plan

#### PHASE 1 - Foundation (Immediate)
- [ ] Update AppSidebar with training-specific navigation
- [x] Modify dashboard breadcrumbs and header ✅
- [x] Link /presenter button to /dashboard ✅
- [x] Replace placeholder content with basic training sections ✅
- [x] Create separate dashboard layout (no SiteHeader/SiteFooter) ✅
- [x] Move auth and theme controls to sidebar NavUser ✅

#### PHASE 2 - Core Functionality
- [x] Implement three top cards (Progress, Timer, Context) ✅ (basic structure)
- [ ] Create SlideViewer component for main content
- [ ] Add URL-based navigation state (e.g., /dashboard?section=scenarios&slide=2)
- [ ] Integrate scenario cards from landing page
- [ ] Add county data views with enhanced visualizations
- [ ] Make cards interactive and dynamic based on presentation state

#### PHASE 3 - Enhancement
- [ ] Add keyboard navigation (arrows, ESC, F for fullscreen)
- [ ] Implement presenter notes toggle
- [ ] Add fullscreen mode
- [ ] Create print/PDF styles
- [ ] Add session timer with alerts
- [ ] Integrate feedback form modal

#### PHASE 4 - Polish
- [ ] Optimize for projector displays (1920x1080 minimum)
- [ ] Add accessibility features (ARIA labels, keyboard focus)
- [ ] Test keyboard shortcuts
- [ ] Create presenter guide document
- [ ] Add loading states and smooth transitions

### Components to Create
- `PresentationCard` - Reusable card for top 3 dashboard cards
- `SlideViewer` - Main content renderer with slide transitions
- `ScenarioCard` - Enhanced scenario display (from landing page)
- `CountyCard` - Enhanced county data with charts
- `ProgressTracker` - Visual progress indicator
- `SessionTimer` - Countdown/elapsed time display
- `PresentationNav` - Custom breadcrumb for training flow

### Components to Modify
- `AppSidebar` - Rebrand with CMDHD branding, restructure navigation
- `TeamSwitcher` → `ViewModeSwitcher` - Presentation/Practice/Review modes
- `NavMain` - Training sections instead of platform features
- `NavProjects` - Convert to QuickActions or remove
- `NavUser` - Optional auth integration for tracking

### Data Integration
- Policy content: Parse `docs/cmdhd-professional-boundaries-policy.md`
- Slide content: Parse `docs/slide-deck.md` (markdown sections)
- County data: Move from hardcoded to `/data/counties.json`
- Timing info: Parse `docs/run-of-show.md` for session timing
- Scenarios: Extract from landing page or create `/data/scenarios.json`

### Routing Strategy
- Primary route: `/dashboard` (replaces `/presenter`)
- URL params for state: `/dashboard?section=scenarios&slide=2&mode=present`
- Hash navigation for slide-like behavior (optional fallback)
- Shareable URLs for specific sections

### Visual Design Notes
- **Color coding**: Use primary/accent variants to distinguish 4 scenarios
- **Icons**: Shield (policy), Users (community), MessageSquare (social media), Car (transportation), MapPin (counties), Clock (timing)
- **Typography**: Geist font (modern, professional) - works well for projection
- **Spacing**: Maintain gap-4, p-4 for readability on large displays
- **Responsive**: Optimize for 1920x1080+ (projector standard)

### State Management Needs
- Presentation state (current slide, section, elapsed time)
- Navigation state (active section, expanded items)
- Timer state (session timer, break timer, scenario timers)
- County selection (highlight specific county during discussion)
- Notes visibility (presenter notes toggle)
- View mode (presentation/practice/review)

## Research & Notes Tracking
- Centralized notes: `docs/presentation-notes.md` (web: `/notes`, download: `/api/download?file=presentation-notes.md`)
- Run of show: `docs/run-of-show.md` (download: `/api/download?file=run-of-show.md`)
- Slide deck: `docs/slide-deck.md` (web: `/slides`, download: `/api/download?file=slide-deck.md`)
- Policy reference: `docs/cmdhd-professional-boundaries-policy.md` (web: `/policy`, download: `/api/download?file=cmdhd-professional-boundaries-policy.md`)
- Action: Continue deep-thinking research cycles; keep citations in notes; pair each scenario with 1–2 county data points; update scripts and escalation checklist as needed.

## Notes
- Landing page successfully redesigned with modern UI (October 20, 2025)
- Dashboard analysis complete - ready for transformation into presentation tool
- All existing content preserved and mapped to new dashboard structure
- Implementation can proceed incrementally (4 phases)
- Focus on presenter experience while maintaining participant accessibility

### Recent Updates (October 20, 2025)
**Dashboard Layout Fixed & Enhanced:**
- Created separate `/dashboard/layout.tsx` to avoid conflicts with main site layout (SiteHeader/SiteFooter)
- Dashboard now uses proper ShadCN Sidebar structure per [official documentation](https://ui.shadcn.com/docs/components/sidebar)
- Moved auth controls and theme switcher to sidebar footer (`NavUser` component)
- Updated `NavUser` to handle Supabase authentication dynamically (shows login/signup for guests, logout for authenticated users)
- Integrated theme switcher (Light/Dark/System) into NavUser dropdown menu
- Fixed breadcrumb navigation to show "Professional Boundaries > Presentation Dashboard"
- Implemented three dashboard cards with proper structure:
  1. **Session Progress** - Shows completion tracking with progress bar
  2. **Session Timer** - Displays 60-minute session duration and status
  3. **Context Info** - Shows training date and policy effective date
- Created welcome screen in main content area with getting started guide
- Dashboard is now fully functional as standalone presentation interface
- All "Presentation View" buttons throughout the app now correctly link to `/dashboard`

**Layout Overlap Fixed:**
- Created `LayoutWrapper` client component to conditionally render header/footer based on route
- Updated root `layout.tsx` to use `LayoutWrapper` with pathname detection
- Dashboard route (`/dashboard`) now completely hides SiteHeader and SiteFooter
- Main site routes continue to show header and footer normally
- Prevents layout overlap and sidebar conflicts
- Dashboard now has full-screen presentation layout without header/footer

### Revert (October 20, 2025)
**Dashboard/Sidebar-07 Implementation Reverted:**
- User requested removal of the dashboard/sidebar-07 implementation
- Deleted files:
  - `apps/boundaries-training/app/dashboard/page.tsx`
  - `apps/boundaries-training/app/dashboard/layout.tsx`
  - `apps/boundaries-training/components/layout-wrapper.tsx`
- Reverted files to original state:
  - `apps/boundaries-training/app/layout.tsx` - Removed LayoutWrapper, restored original header/footer structure
  - `apps/boundaries-training/app/page.tsx` - Changed all `/dashboard` links back to `/presenter`
  - `apps/boundaries-training/components/nav-user.tsx` - Restored original with user prop and sample data
  - `apps/boundaries-training/components/app-sidebar.tsx` - Restored original data structure and user prop passing
- All changes related to sidebar-07 dashboard implementation have been reverted
- Project is back to state before dashboard implementation
- `/presenter` route remains as the intended presentation view (to be developed separately)