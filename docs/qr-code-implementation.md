# QR Code Implementation Guide

**Feature**: Quick mobile access to training via QR code scanning
**Deployment Ready**: ✅ Yes - Safe for tomorrow's launch
**Status**: Implemented and tested
**Commit**: `a61b303`

---

## 📱 **Overview**

Participants can now scan a QR code to instantly access the CMDHD Professional Boundaries Training on their mobile devices. This is perfect for in-person training sessions where facilitators display the homepage on a projector.

---

## 🎯 **What Was Implemented**

### **1. Homepage QR Code** ✅

**Location**: Landing page (`app/page.tsx`), right column below Training Overview card

**Features**:
- 256px QR code (scannable from 2-3 feet)
- Links directly to `/auth/sign-up`
- Displays fallback URL for manual entry
- Hidden on mobile (redundant for phone users)
- High error correction for reliable scanning
- Professional card design matching app theme

**Visible to**:
- Desktop/tablet users (md breakpoint and up)
- In-person participants viewing projected homepage

### **2. Presentation QR Code Component** ✅

**Location**: `components/training-qr-code.tsx` - `PresentationQRCode` export

**Features**:
- 400px QR code (scannable from 10-15 feet in a room)
- Large, clear step-by-step instructions
- Numbered steps with visual indicators
- Ready for slide integration (not yet added to slides)

**Status**: Component ready, optional slide integration

---

## 🔧 **Technical Implementation**

### **Library Used**

```bash
pnpm add react-qr-code
```

- **Package**: `react-qr-code` v2.0.18
- **Why**: SVG-based, responsive, simple API, 118k+ downloads/week
- **Type**: React component, client-side rendered

### **Components Created**

#### **TrainingQRCode** (Standard)

```tsx
<TrainingQRCode 
  size={256}
  title="In-Person? Scan Here!"
  description="Quick access on your mobile device"
/>
```

**Props**:
- `size`: QR code dimensions in pixels (default: 256)
- `showUrl`: Display fallback URL (default: true)
- `title`: Card title (default: "Quick Access")
- `description`: Card description

#### **PresentationQRCode** (Large Format)

```tsx
<PresentationQRCode />
```

No props - optimized for full-screen display on presentation slides

### **URL Configuration**

The QR code automatically detects the correct base URL:

```tsx
const baseUrl = 
  process.env.NEXT_PUBLIC_BASE_URL ||           // 1. Environment variable (production)
  (typeof window !== 'undefined' && window.location.origin) ||  // 2. Current origin
  'http://localhost:3000';                     // 3. Fallback (development)
```

**Links to**: `${baseUrl}/auth/sign-up`

---

## 🚀 **Production Deployment**

### **CRITICAL: Set Environment Variable in Vercel**

Before deploying to production, you **MUST** set the production URL:

#### **Option 1: Via Vercel Dashboard** (Recommended)

1. Go to Vercel project: https://vercel.com/your-org/cmdhd-boundaries
2. Click **Settings** → **Environment Variables**
3. Add new variable:
   - **Key**: `NEXT_PUBLIC_BASE_URL`
   - **Value**: Your production domain (e.g., `https://boundaries.cmdhd.org`)
   - **Environment**: Production (and Preview if desired)
4. Click **Save**
5. **Redeploy** the application for changes to take effect

#### **Option 2: Via Vercel CLI**

```bash
vercel env add NEXT_PUBLIC_BASE_URL production
# Enter: https://your-production-domain.com

vercel --prod  # Deploy with new env var
```

#### **Option 3: Add to `.env.production` (Not Recommended)**

```bash
# .env.production (commit to repo)
NEXT_PUBLIC_BASE_URL=https://your-production-domain.com
```

⚠️ **Not recommended** - Hardcoding limits flexibility

---

## 📋 **Testing Checklist**

### **Local Testing** ✅

- [x] QR code displays on homepage
- [x] QR code visible on desktop (md+)
- [x] QR code hidden on mobile
- [x] Build completes successfully
- [x] No TypeScript errors
- [x] No linting errors

### **Production Testing** (After Deployment)

- [ ] QR code points to correct production URL
- [ ] Scan QR code with iPhone camera
- [ ] Scan QR code with Android camera
- [ ] Verify redirect to `/auth/sign-up`
- [ ] Complete sign-up flow via QR code
- [ ] Test from various distances (5ft, 10ft, 15ft)
- [ ] Verify fallback URL is readable

### **In-Person Training Testing** (Day of Training)

- [ ] Display homepage on projector before session
- [ ] Verify QR code is scannable from back row
- [ ] Test with multiple participants scanning simultaneously
- [ ] Confirm sign-up flow works on participant devices
- [ ] Have fallback plan if WiFi is slow

---

## 🎓 **Usage Guide for Facilitators**

### **Before Training Starts**

1. **Display Homepage on Projector**
   - Open: `https://your-domain.com/`
   - Zoom to 100-125% for QR code visibility
   - Leave displayed as participants arrive

2. **Verbal Instructions**
   ```
   "Welcome! To join today's training on your phone:
   1. Open your camera app
   2. Point it at the QR code on the screen
   3. Tap the notification that appears
   4. Create your account to access the training
   
   Or, type this URL: [read from screen]"
   ```

3. **Provide WiFi Credentials** (If Applicable)
   - Display on screen or handouts
   - Ensure network can handle 200 simultaneous connections

### **Alternative Approaches**

**Option A**: Print QR Codes
- Print QR code on handouts/tent cards
- Place on tables
- Participants scan at their convenience

**Option B**: Email QR Code
- Include QR code in pre-training email
- Participants can scan before arriving

**Option C**: Use Presentation Slide
- Add `PresentationQRCode` component to first slide
- Display during welcome/setup time
- More detail in "Optional: Presentation Integration" below

---

## 🎨 **Design Specifications**

### **Homepage QR Code**

- **Size**: 256 × 256 pixels
- **Error Correction**: Level H (30% recovery)
- **Colors**: Black (#000000) on white (#FFFFFF)
- **Border**: Primary color, subtle hover effect
- **Padding**: 16px white margin around QR
- **Card**: 2px border, shadow, rounded corners

### **Presentation QR Code**

- **Size**: 400 × 400 pixels
- **Error Correction**: Level H (30% recovery)
- **Colors**: Black on white (maximum contrast)
- **Border**: 32px white margin
- **Card**: Large shadow, prominent display
- **Instructions**: 4 numbered steps with visual indicators

---

## 📱 **Device Compatibility**

### **QR Code Scanning Support**

✅ **Native Camera App (No App Needed)**:
- iPhone (iOS 11+)
- Android (Android 8+)
- iPad/Tablet cameras

❓ **May Need QR Scanner App**:
- Older Android devices (< Android 8)
- Older iPhones (< iOS 11)

⚠️ **Accessibility Considerations**:
- Participants without smartphones: Provide URL for manual entry
- Vision impairments: Offer large-print URL handouts
- Technical difficulties: Have sign-up assistance available

### **Browser Compatibility**

QR code lands on `/auth/sign-up` which requires:
- Modern browser (Chrome, Safari, Firefox, Edge)
- JavaScript enabled
- Cookies enabled (for Supabase auth)

---

## 🔄 **Optional: Presentation Integration**

### **Status**: Component ready, not yet integrated

### **How to Add QR Code to Presentation**

If you want the QR code displayed during the actual presentation (not just on homepage), follow these steps:

#### **Option 1: New "Welcome" Slide** (Safest)

1. **Modify Presentation Slides Data**

```typescript
// lib/data/presentation-slides.ts

export const presentationSlides: Slide[] = [
  // NEW SLIDE 0: Welcome with QR
  {
    id: 0,
    type: 'qr-welcome',
    section: 'Getting Started',
    sectionIndex: 0,
    duration: 5,  // Show for 5 minutes while people arrive
    title: 'Welcome to Professional Boundaries Training',
    subtitle: 'Scan to access the training on your device',
  },
  
  // EXISTING SLIDES (renumber if needed)
  {
    id: 1,
    type: 'title',
    section: 'Opening & Framing',
    // ... rest of slide 1
  },
  // ...
];
```

2. **Update Slide Renderer**

```typescript
// components/presentation/slide-renderer.tsx

import { PresentationQRCode } from "@/components/training-qr-code";

export function SlideRenderer({ slide }: { slide: Slide }) {
  // Add QR welcome slide type
  if (slide.type === 'qr-welcome') {
    return <PresentationQRCode />;
  }
  
  // Existing slide type handling...
  if (slide.type === 'title') {
    return <TitleSlide slide={slide} />;
  }
  // ...
}
```

3. **Update TypeScript Types**

```typescript
// lib/types/slides.ts (or wherever Slide type is defined)

export type SlideType = 
  | 'title'
  | 'content'
  | 'quote'
  | 'qr-welcome'  // Add new type
  // ... other types
;
```

#### **Option 2: Add to Existing Slide** (More Complex)

Add QR code as an overlay on Slide 1 (title slide):

```typescript
// components/presentation/slide-renderer.tsx

function TitleSlide({ slide }: { slide: TitleSlide }) {
  return (
    <div className="relative">
      {/* Existing title content */}
      <div className="text-center">
        <h1>{slide.title}</h1>
        <p>{slide.subtitle}</p>
        <p>{slide.quote}</p>
      </div>
      
      {/* NEW: QR code in corner */}
      {slide.id === 1 && (
        <div className="absolute bottom-8 right-8">
          <div className="bg-white p-6 rounded-2xl shadow-2xl">
            <QRCode 
              value={`${baseUrl}/auth/sign-up`}
              size={250}
              level="H"
            />
            <p className="text-sm mt-3 text-center font-semibold">
              Scan to Join
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
```

### **Recommendation for Tomorrow**

**Skip presentation integration for launch**:
- Adds complexity
- Homepage QR code is sufficient
- Facilitator can display homepage before starting
- Can add to presentation post-launch if needed

---

## 🐛 **Troubleshooting**

### **QR Code Not Displaying**

**Symptoms**: QR code missing from homepage

**Possible Causes**:
1. Viewing on mobile (hidden by design)
2. CSS not loaded
3. React hydration error

**Solutions**:
- Check browser console for errors
- Verify `md:block` breakpoint
- Test on desktop/tablet

### **QR Code Scans to Localhost**

**Symptoms**: QR code redirects to `http://localhost:3000/auth/sign-up`

**Cause**: `NEXT_PUBLIC_BASE_URL` not set in production

**Solution**:
1. Set environment variable in Vercel (see "Production Deployment" above)
2. Redeploy application
3. Clear cache and test again

### **QR Code Won't Scan**

**Symptoms**: Phone camera doesn't recognize QR code

**Possible Causes**:
1. QR code too small
2. Poor lighting
3. Low screen brightness
4. Camera not focused
5. Older device without native QR support

**Solutions**:
- Increase projector brightness
- Zoom in on QR code (125-150%)
- Clean phone camera lens
- Try different scanning app
- Use fallback URL

### **Slow Sign-Up Performance**

**Symptoms**: Many users scanning simultaneously, slow page loads

**Causes**:
- Network congestion (WiFi)
- Supabase rate limits
- Too many simultaneous requests

**Solutions**:
- Stagger sign-ups (ask early arrivals to sign up first)
- Provide strong WiFi
- Consider pre-registration (email QR codes in advance)
- Have offline sign-up sheet as backup

---

## 📊 **Analytics & Tracking** (Future Enhancement)

### **Recommended Metrics to Track**

- Number of sign-ups via QR code vs. direct navigation
- Time from QR scan to account creation
- Device types (iPhone vs. Android)
- Success rate (scans that complete sign-up)
- Peak scanning times (e.g., 5 minutes before session)

### **How to Implement**

Add UTM parameter or query string to QR code URL:

```typescript
const signUpUrl = `${baseUrl}/auth/sign-up?source=qr-code`;
```

Track in analytics:
- Google Analytics
- Supabase dashboard
- Custom database logging

---

## 🔒 **Security Considerations**

### **QR Code Safety**

✅ **Safe**:
- QR code points to your own domain
- No third-party links
- No external redirects
- No tracking pixels

⚠️ **Best Practices**:
- Don't modify QR URL to external sites
- Keep error correction at Level H (prevents tampering)
- Monitor for fraudulent QR code stickers (physical security)

### **Authentication Flow**

- QR code → `/auth/sign-up`
- Standard Supabase auth flow
- Email verification (if enabled)
- Secure session cookies
- HTTPS enforced in production

---

## 📈 **Future Enhancements**

### **Phase 1: Presentation Integration** (Post-Launch)

- Add QR code to title slide or new welcome slide
- Display during first 5-10 minutes
- Automatic progression after timeout

### **Phase 2: Smart QR Codes** (Post-Launch)

- Detect if user is already logged in
- Redirect logged-in users to `/protected` (Training Hub)
- Redirect new users to `/auth/sign-up`
- Custom landing page: `/start`

### **Phase 3: Multi-Purpose QR Codes** (Future)

- QR code for policy document
- QR code for feedback form
- QR code for certificate download
- QR code for facilitator guide

### **Phase 4: Dynamic QR Codes** (Future)

- Generate unique QR codes per participant
- Pre-filled email address
- Skip sign-up for pre-registered participants
- Track individual completion

### **Phase 5: Offline Support** (Future)

- PWA (Progressive Web App) capability
- Download training for offline access
- Sync progress when back online

---

## 📝 **Facilitator Checklist for Tomorrow**

### **Pre-Training Setup** (30 min before)

- [ ] Arrive early to set up projector
- [ ] Navigate to homepage: `https://your-domain.com/`
- [ ] Verify QR code displays prominently
- [ ] Test scanning with your own phone
- [ ] Confirm redirect to sign-up page works
- [ ] Check WiFi strength and capacity
- [ ] Display WiFi credentials on screen/handouts
- [ ] Prepare verbal instructions for scanning

### **During Arrival** (10-15 min)

- [ ] Leave homepage displayed on screen
- [ ] Encourage early arrivals to scan and sign up
- [ ] Provide assistance for technical difficulties
- [ ] Offer fallback URL for manual entry
- [ ] Monitor sign-up rate (check Supabase dashboard)
- [ ] Have backup plan (printed materials, offline sign-up)

### **Training Start**

- [ ] Confirm all participants have accounts
- [ ] Navigate to presentation (`/presentation`)
- [ ] Begin training content

### **Backup Plan**

- [ ] Printed handouts with URL
- [ ] Sign-up sheet (manual entry later)
- [ ] Tablet/device for shared sign-up
- [ ] Post-training email with access link

---

## 🎯 **Success Criteria**

**QR Code Implementation is Successful if**:

- ✅ 80%+ of participants can scan and sign up without assistance
- ✅ Zero critical errors during sign-up flow
- ✅ Average time from scan to account creation < 2 minutes
- ✅ No WiFi or network congestion issues
- ✅ QR code is clearly visible from back of room
- ✅ Fallback options available for 20% who need help

---

## 🆘 **Support Contacts**

**If Issues Arise During Training**:

1. **Technical Issues**: Check browser console, Vercel logs, Supabase dashboard
2. **Network Issues**: Contact IT for WiFi support
3. **Authentication Issues**: Check Supabase auth settings
4. **Critical Failures**: Revert to manual sign-up, fix post-training

**Escalation Path**:
1. Try fallback URL (manual entry)
2. Use backup sign-up sheet
3. Continue training, fix access later
4. Follow up via email with login links

---

## 📚 **References**

- **Library Documentation**: https://github.com/rosskhanas/react-qr-code
- **QR Code Standards**: ISO/IEC 18004
- **Error Correction Levels**: https://www.qrcode.com/en/about/error_correction.html
- **Supabase Auth**: https://supabase.com/docs/guides/auth

---

## ✅ **Deployment Status**

**Feature**: QR Code for Mobile Access
**Status**: ✅ **READY FOR TOMORROW**
**Risk**: VERY LOW
**Value**: HIGH

**Final Checklist**:
- [x] Code implemented and tested
- [x] Build successful
- [x] Committed and pushed
- [ ] **Set NEXT_PUBLIC_BASE_URL in Vercel** ⚠️ CRITICAL
- [ ] Redeploy to production
- [ ] Test QR code after deployment
- [ ] Prepare facilitator instructions
- [ ] Print backup URLs (optional)

---

**Good luck with tomorrow's training! 🎉**

The QR code feature will make onboarding seamless for your 200 participants. Just remember to set that production URL environment variable!

---

**Document Version**: 1.0
**Last Updated**: October 21, 2025
**Next Review**: After deployment feedback (October 23, 2025)

