Got it — switching gears cleanly to your **CMDHD Professional Boundaries Training App / Portal**.

Let’s design this from the ground up with a **first-principles marketing + educational UX** mindset.
Because your audience includes **CMDHD staff**, **county administrators**, and potentially **training participants**, your landing page should accomplish **three goals at once**:

1. **Credibility** — Establish that this is an official, evidence-based training aligned with CMDHD policy.
2. **Clarity** — Instantly communicate what the training is, who it’s for, and how to access or complete it.
3. **Engagement** — Inspire participation through reflection, relevance, and local connection (mirroring your “Story I’m Telling Myself” theme).

---

## 🧱 Landing Page Wireframe & Content Plan

### 🧩 SECTION 1 — Hero (above the fold)

**Purpose:** Capture attention, frame emotional tone, and anchor brand identity.

**Structure:**

* Background: subtle gradient or photography of mid-Michigan community or abstract “connection” pattern.
* Headline: concise + emotionally resonant.
* Subhead: describes function & relevance.
* Primary CTA (button): “Begin Training” / “Log In to Training Portal”.
* Secondary CTA: “View Policy” / “Learn More”.

**Copy Options:**

* **Option A (Reflective):**

  > **The Story We’re Telling Ourselves**
  > *Understanding boundaries. Building trust. Serving our community with clarity and care.*
  > A CMDHD training experience grounded in ethics, empathy, and professionalism.
  > [Begin Training] [Read the Policy]

* **Option B (Institutional):**

  > **CMDHD Professional Boundaries Training**
  > *A one-hour, interactive learning experience for all district health staff.*
  > Align your daily practice with CMDHD’s professional boundaries policy—because consistency builds community trust.
  > [Start Training] [Policy Overview]

---

### 🧩 SECTION 2 — Why Boundaries Matter

**Purpose:** Emotional and ethical context.

**Structure:**

* Two-column layout:

  * Left = short paragraph text.
  * Right = pull-quote or infographic.

**Copy Example:**

> Professional boundaries are not walls; they’re guideposts.
> They help us serve others safely, fairly, and consistently—especially in small communities where roles overlap.
>
> *“Clarity is kindness.” — Brené Brown*

Include a quick 3-icon row for:

* **Protect Clients**
* **Protect Staff**
* **Protect Trust**

---

### 🧩 SECTION 3 — What You’ll Learn

**Purpose:** Define deliverables for learners.

**Structure:**

* Four cards or horizontal tiles, each 2–3 sentences.

**Cards:**

1. **Recognize Boundaries**
   Understand CMDHD’s expectations and the “why” behind them.
2. **Respond Professionally**
   Learn scripts and decision trees for tricky situations.
3. **Reflect & Reset**
   Build self-awareness and emotional resilience.
4. **Apply & Document**
   Translate training into charting, supervision, and day-to-day work.

Include a sub-heading: *“Aligned with CMDHD Administrative Policy: Professional Boundaries (Effective June 30, 2025)”*

---

### 🧩 SECTION 4 — How It Works

**Purpose:** Outline learning flow and CEU process if relevant.

**Structure:**

* 1–2-3 visual timeline or numbered steps.

**Example:**

1. **Log In or Register** — Securely authenticate with Supabase.
2. **Complete the Interactive Module** — One-hour multimedia training with scenarios and polling.
3. **Reflect and Submit Feedback** — Short evaluation + optional reflection statement.
4. **Receive Completion Record** — Auto-generated certificate or transcript for HR.

---

### 🧩 SECTION 5 — Scenario Sneak Peek (Engagement Hook)

**Purpose:** Make it concrete and relatable.

**Structure:**

* Carousel or grid of 3 sample “Would You…” cards.

**Copy Example:**

> * *A client asks you to drive them to an appointment—do you say yes?*
> * *You recognize a new client from your church—what’s your next step?*
> * *A caregiver sends a Facebook friend request—how do you respond?*
>
> These real-world dilemmas come straight from CMDHD’s Professional Boundaries Policy.
> You’ll practice responding using the same framework that guides your daily work.

---

### 🧩 SECTION 6 — Designed for Our Counties

**Purpose:** Local relevance & pride.

**Structure:**

* Map or list of six counties: Arenac, Clare, Gladwin, Isabella, Osceola, Roscommon.
* Short text:

  > Built for the realities of mid-Michigan—small towns, close connections, shared commitments.
  > The training includes localized examples and county-specific resources.

---

### 🧩 SECTION 7 — Testimonials / Leadership Quote (Optional)

If you can include a quote from CMDHD leadership:

> *“Professional boundaries are the foundation of effective public health service. This training ensures every interaction reflects CMDHD’s values.”*
> — [Name], [Title]

---

### 🧩 SECTION 8 — Policy & Resource Links

**Purpose:** Transparency and quick access.

**Links:**

* Download: CMDHD Professional Boundaries Policy (PDF)
* NASW Code of Ethics
* ANA Code of Ethics
* CMDHD Employee Handbook
* Supervision Support Contact / Ethics Hotline

---

### 🧩 SECTION 9 — Call to Action (closing banner)

**Purpose:** Reinforce participation and empowerment.

**Copy Options:**

* **Reflective:**

  > *Boundaries don’t limit compassion—they define it.*
  > Start your professional boundaries training today.

* **Direct:**

  > Ready to begin? Complete your CMDHD boundaries training now.
  > [Begin Training]

---

## 🧠 Design + UX Notes

* **Tone:** calm, authoritative, inclusive.
* **Palette:** CMDHD blues + neutral grays; accent with warm coral or green for calls-to-action.
* **Typography:** clear sans-serif (Inter, Source Sans, or Lato).
* **Imagery:** people in community/public health settings; avoid stock “corporate” vibe.
* **Animation:** subtle fade-in of sections; micro-animations for scenario cards.
* **Accessibility:** high contrast, keyboard-navigable, alt text, WCAG AA.

---

## 🧰 Technical layout suggestion (Next.js + Supabase)

* `/` → public landing (sections above).
* `/auth` → Supabase login/register (email, SSO).
* `/training` → interactive module (slides, videos, polls).
* `/policy` → static route rendering PDF or Markdown summary.
* `/certificate` → authenticated view + download PDF.

---

Would you like me to go step-by-step into **Section 1: Hero + top-of-page structure and copy**, including component breakdown (Next.js + Tailwind layout, heading hierarchy, and copy variations)?
That’s usually the best place to start turning this outline into actual site code and finalized wording.
