# Professional Boundaries Training Presentation

An interactive slideshow presentation system for CMDHD's "The Story We're Telling Ourselves" training.

## Features

### 📊 **38 Slides Organized into 10 Sections**
1. Opening & Framing (4 slides)
2. Policy Fundamentals (5 slides)
3. Social & Relational Boundaries (4 slides)
4. Communication Standards (4 slides)
5. Operational Policies (4 slides)
6. Interactive Reflection (2 slides)
7. Quick Polls & Scenarios (6 slides)
8. Gray Zone Lab (2 slides)
9. Decision Tree & Documentation (3 slides)
10. Closing & Commitments (4 slides)

### 🎯 **Interactive Elements**
- **Polls**: Multiple choice questions with instant feedback
- **Scenarios**: Real-world boundary cases with explanations
- **Reflections**: Text input for personal commitment and self-reflection
- **Decision Tree**: Visual 5-step framework for boundary decisions

### 🎮 **Navigation & Controls**

#### Keyboard Shortcuts
- `→` / `Space`: Next slide
- `←`: Previous slide
- `F`: Toggle fullscreen
- `T`: Start/stop timer
- `Esc`: Exit fullscreen

#### On-Screen Controls
- **Previous/Next buttons**: Bottom of screen
- **Table of Contents**: Click "Table of Contents" button to jump to any slide
- **Progress bar**: Visual indicator at top of screen
- **Timer**: Built-in presentation timer (top right)
- **Slide counter**: Shows current position (e.g., "Slide 5 / 38")

### 📱 **Responsive Design**
- Optimized for desktop/laptop presentation
- Works on tablets for preview
- Large, readable fonts for projection
- High contrast for visibility

### 🎨 **Slide Types**

1. **Title Slides**: Large headings with optional subtitle/quote
2. **Content Slides**: Bullet points with talking points and facilitator notes
3. **Poll Slides**: Interactive multiple-choice with correct answers and explanations
4. **Reflection Slides**: Text input areas for participant responses
5. **Table Slides**: Structured data presentation
6. **Quote Slides**: Impactful closing messages
7. **Tree Slides**: Step-by-step decision frameworks

## Usage

### Starting the Presentation
1. Navigate to `/presentation` in your app
2. Press `F` to enter fullscreen mode
3. Press `T` to start the timer
4. Use arrow keys or on-screen buttons to navigate

### During Presentation
- Facilitator notes appear at the bottom of relevant slides
- Estimated time per slide is shown in the footer
- Section badges help track progress through the training
- Interactive elements highlight engagement opportunities

### Table of Contents
- Click "Table of Contents" to see all slides organized by section
- Click any slide title to jump directly to that slide
- Current slide is highlighted

## Technical Details

### File Structure
```
components/presentation/
  ├── presentation-viewer.tsx  # Main container component
  ├── slide-renderer.tsx       # Renders different slide types
  └── README.md               # This file

lib/data/
  └── presentation-slides.ts   # All 38 slides content

app/presentation/
  └── page.tsx                # Route page
```

### Data Structure
Slides are defined in TypeScript with type safety:
- Each slide has a type, section, duration, and specific content
- Helper functions for filtering by section and calculating total time
- Fully typed interfaces for each slide variant

### State Management
- Current slide index tracked in React state
- Timer state for presentation timing
- Fullscreen state synced with browser API
- Keyboard event listeners for navigation

## Customization

### Modifying Slides
Edit `lib/data/presentation-slides.ts` to:
- Update content, talking points, or facilitator notes
- Add/remove slides
- Change section organization
- Adjust estimated durations

### Styling
Components use ShadCN UI with Tailwind CSS:
- Modify `slide-renderer.tsx` for visual changes
- All components support light/dark mode
- Responsive breakpoints already configured

## Accessibility
- Keyboard navigation fully supported
- High contrast text
- Screen reader compatible
- Focus indicators on interactive elements
- Semantic HTML structure

