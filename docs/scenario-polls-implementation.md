# Scenario Polls Implementation

## Overview
The Scenario Polls Component provides an interactive interface for participants to engage with 6 real-world boundary scenarios directly from the training profile page. This aligns with the training's focus on practical application and ensures all interactive components are accessible in one centralized location.

---

## Component Details

### File: `components/profile/scenario-polls-component.tsx`

**Purpose**: Display all 6 boundary scenarios (Slides 25-30) as interactive polls with immediate feedback on the profile page.

### Features

#### 1. **Accordion Interface**
- All 6 scenarios in a collapsible accordion
- Visual progress indicator (completed vs. incomplete)
- Each scenario expandable independently
- Clean, organized presentation

#### 2. **Scenario Content** (From Slides 25-30)
Each scenario includes:
- **Title**: Descriptive scenario name
- **Scenario**: Full context and situation description
- **Question**: Clear decision prompt
- **4 Options**: Multiple choice answers
- **Boundary Focus**: Tag (e.g., "Scope of Practice", "Work Hours")
- **Policy Reference**: CMDHD policy citation

#### 3. **Interactive States**

**Before Answering:**
- Radio button selection
- Submit button
- Clean, simple interface

**After Answering:**
- Selected answer highlighted
- Correct answer marked with green checkmark
- Incorrect selection (if any) marked with red X
- Full policy explanation displayed
- Policy reference shown
- Option to change answer

#### 4. **Real-Time Progress Tracking**
- Badge shows X/6 completed
- Checkmarks on completed scenarios
- Progress updates immediately after submission
- Completion celebration when all 6 done

#### 5. **Policy Integration**
- Each scenario tied to specific CMDHD policy
- Full explanation after submission
- Links to view scenario in presentation
- Context about why answer is correct/incorrect

---

## The 6 Scenarios

### Scenario 1: Emergency Transportation Dilemma (Slide 25)
- **Focus**: Scope of Practice
- **Policy**: #2
- **Key Learning**: No exceptions for client transportation, even in emergencies
- **Rural Context**: Icy roads, limited transport options

### Scenario 2: Community Crisis Contact (Slide 26)
- **Focus**: Work Hours
- **Policy**: #13
- **Key Learning**: After-hours boundaries protect long-term effectiveness
- **Rural Context**: Dual relationships, small community

### Scenario 3: Healing Gift from Elder (Slide 27)
- **Focus**: Gifts
- **Policy**: #14
- **Key Learning**: Cultural sensitivity within policy boundaries
- **Cultural Context**: Indigenous gift-giving traditions

### Scenario 4: Only Provider in 60 Miles (Slide 28)
- **Focus**: Dual Relationships
- **Policy**: #4 & #5
- **Key Learning**: Disclosure and safeguards, not automatic termination
- **Rural Context**: Limited provider availability

### Scenario 5: Recovery Community Colleague (Slide 29)
- **Focus**: Social Media
- **Policy**: #6
- **Key Learning**: Boundaries persist after discharge
- **Professional Context**: Former client now colleague

### Scenario 6: Comforting Hug Dilemma (Slide 30)
- **Focus**: Physical Contact
- **Policy**: #8
- **Key Learning**: Consent-based approach to physical comfort
- **Trauma-Informed**: Client-initiated contact in distress

---

## Technical Implementation

### Data Flow

```typescript
// 1. User selects answer
handleSubmit(scenarioId, selectedOption, correctAnswer)

// 2. Calculate correctness
const isCorrect = selectedOption === correctAnswer

// 3. Submit to database via Server Action
submitPollResponse({
  poll_id: scenarioId,
  selected_option: selectedOption,
  is_correct: isCorrect
})

// 4. Update local state immediately
setLocalResponses(prev => new Map(prev).set(scenarioId, response))

// 5. Progress updates automatically via page revalidation
```

### Database Schema

**Table**: `poll_responses`

```sql
CREATE TABLE poll_responses (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES auth.users NOT NULL,
  poll_id integer NOT NULL,
  selected_option integer NOT NULL,
  is_correct boolean,
  submitted_at timestamp with time zone DEFAULT now(),
  UNIQUE(user_id, poll_id)
);
```

**Unique Constraint**: One response per user per scenario (can be updated)

### Server Action

**File**: `app/protected/actions.ts`

```typescript
export async function submitPollResponse(data: {
  poll_id: number
  selected_option: number
  is_correct?: boolean
})
```

Uses `upsert` with `onConflict: 'user_id,poll_id'` to allow answer changes.

---

## User Experience Flow

### First Visit
1. Sees accordion with 6 collapsed scenarios
2. Badge shows "0/6 Complete"
3. Empty circles indicate unanswered

### Answering a Scenario
1. Expands accordion item
2. Reads scenario context
3. Selects radio button option
4. Clicks "Submit Answer"
5. Immediately sees result:
   - Correct answer highlighted green
   - Their choice marked (green if correct, red if not)
   - Full policy explanation appears
   - Checkmark added to accordion header
   - Progress badge updates (e.g., "1/6 Complete")

### Completion
1. After 6th scenario submitted
2. Green celebration card appears:
   - "All Scenarios Complete!"
   - Congratulatory message
   - Checkmark icon
3. Progress badge shows "6/6 Complete" in green

### Reviewing/Changing Answers
1. Can expand any completed scenario
2. Sees previous answer and explanation
3. "Change Answer" button allows resubmission
4. Can review correct answers anytime

---

## Integration with Profile Page

### Page Structure

```
Profile Page Layout:
├── Demographics Form
├── Reflections (Story + Emotion)
├── Scenario Polls ← NEW
├── Commitment Statement
└── Feedback Form
```

### Completion Checklist (Sidebar)

Updates to include scenario polls:
```
☑ Demographics
☑ Story Reflection
☑ Emotion Check
☐ 6 Scenario Polls (3/6)  ← Progress shown
☑ Commitment
☐ Feedback
```

### Data Fetching

**File**: `lib/data/profile.ts`

```typescript
export async function getUserPollResponses() {
  // Fetches all poll_responses for current user
  // Returns: Array<{ poll_id, selected_option, is_correct }>
}
```

Called in profile page alongside other data fetches.

---

## Design Principles

### 1. **Learning-Focused**
- Not just "quiz" but teaching tool
- Full explanations after every answer
- Policy context provided
- Rural/cultural considerations highlighted

### 2. **Judgment-Free**
- Can change answers
- No score or grade displayed
- Focus on learning, not performance
- Encouragement for participation

### 3. **Realistic Scenarios**
- Drawn from actual rural healthcare situations
- Acknowledge complexity and nuance
- Multiple perspectives considered
- Cultural sensitivity emphasized

### 4. **Policy-Grounded**
- Every answer tied to specific CMDHD policy
- Explanations reference policy numbers
- Balances rules with relational care
- Acknowledges rural realities

### 5. **Accessible**
- Clear, simple interface
- One question at a time
- Visual progress indicators
- Mobile responsive

---

## Accessibility Features

- **Keyboard Navigation**: Full accordion navigation via keyboard
- **Screen Readers**: Proper ARIA labels on radio buttons
- **Color Contrast**: Sufficient contrast in light/dark modes
- **Focus Indicators**: Clear focus states on interactive elements
- **Semantic HTML**: Proper form elements and labels

---

## Responsive Design

### Desktop (≥768px)
- Full width in main content area
- Comfortable spacing
- Detailed explanations visible

### Mobile (<768px)
- Stacked accordion
- Touch-friendly tap targets
- Scrollable content
- Maintains full functionality

---

## Future Enhancements

### Potential Additions
1. **Progress Save**: Auto-save selected option before submission
2. **Peer Comparison**: "75% of participants chose this answer"
3. **Facilitator Mode**: Admin view of aggregate responses
4. **Discussion Prompts**: Add reflection questions after each scenario
5. **Print Summary**: Export all scenarios with correct answers as PDF
6. **Timed Mode**: Optional timer for live training sessions
7. **Randomization**: Shuffle option order to prevent pattern memorization

### Research Data Collection
Current responses enable analysis of:
- Which scenarios are most challenging
- Common misconceptions about policies
- Effectiveness of training on boundary knowledge
- Areas needing additional emphasis

---

## Testing Checklist

- [x] All 6 scenarios display correctly
- [x] Radio button selection works
- [x] Submit saves response to database
- [x] Correct answer highlights green
- [x] Incorrect selection shows red
- [x] Explanation displays after submission
- [x] Progress badge updates
- [x] Checkmarks appear on completed scenarios
- [x] "Change Answer" button resets state
- [x] Resubmission works (upsert)
- [x] Completion celebration appears after 6th scenario
- [x] Link to presentation slide works
- [x] Mobile responsive
- [x] Dark mode styling correct
- [x] Keyboard navigation functional
- [x] Screen reader accessible

---

## Documentation References

- **Presentation Slides**: `lib/data/presentation-slides.ts` (Lines 733-849)
- **Component**: `components/profile/scenario-polls-component.tsx`
- **Server Action**: `app/protected/actions.ts`
- **Data Fetching**: `lib/data/profile.ts`
- **Profile Page**: `app/protected/page.tsx`

---

## Summary

The Scenario Polls Component transforms the profile page into a true **interactive training hub** by bringing all 6 boundary scenarios directly into the participant's workspace. This eliminates the need to navigate to the presentation for interactive components and creates a centralized location for all training activities.

**Key Achievement**: Participants can now complete their entire training journey—demographics, reflections, scenarios, commitment, and feedback—all from one page.

**Training Impact**: By making scenarios immediately accessible and providing detailed policy explanations, this component reinforces learning and ensures participants understand the "why" behind CMDHD's boundary policies, not just the "what."

