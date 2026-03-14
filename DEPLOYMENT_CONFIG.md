# Deployment Configuration for productivity.ai2me.com

## Overview

This landing page is configured for the subdomain **productivity.ai2me.com** with:
- ✅ SEO metadata (OpenGraph, Twitter Cards, Schema.org)
- ✅ Email capture form (Mailchimp-ready)
- ✅ Google Analytics 4 tracking
- ✅ Dual CTAs (Calendar booking + Pricing link)

---

## Prerequisites Before Deployment

### 1. Google Analytics 4 Setup

**Current state:** `G-XXXXXXXXXX` (placeholder)

**Steps:**
1. Go to [Google Analytics](https://analytics.google.com/)
2. Create new GA4 property for `productivity.ai2me.com`
3. Get the Measurement ID (looks like `G-XXXXXXXXX`)
4. Update in `index.html`:
   ```html
   <script async src="https://www.googletagmanager.com/gtag/js?id=G-YOUR_ID_HERE"></script>
   <script>
     gtag('config', 'G-YOUR_ID_HERE', { ... });
   </script>
   ```

### 2. Email Subscription Backend

The form POSTs to `/api/subscribe` endpoint. You need to set up one of:

**Option A: Mailchimp (Recommended)**
- API Key: Get from Mailchimp admin
- Audience List ID: Get from Mailchimp admin
- Backend endpoint: Validate email + subscribe via Mailchimp API

**Option B: Custom Backend**
- Create endpoint that handles POST to `/api/subscribe`
- Store emails in database
- Optional: Send verification email
- Optional: Sync with marketing automation

**Option C: Formspree (Simple)**
- Use Formspree for no-code email capture
- Update form action: `https://formspree.io/f/YOUR_FORM_ID`

### 3. DNS & Domain Setup

**Required DNS records for productivity.ai2me.com:**

```
Type: CNAME
Name: productivity
Value: ai2me.vercel.app (or your hosting provider)
```

Or if using Netlify:
```
Type: CNAME
Name: productivity
Value: ai2me.netlify.app
```

### 4. OG Image Setup

**Current:** `https://productivity.ai2me.com/og-image.jpg` (referenced in meta tags)

**Steps:**
1. Create or design OG image (1200x630px)
2. Upload to public folder: `/public/og-image.jpg`
3. Or upload to CDN and update meta tags

---

## Environment Variables

Copy `.env.example` to `.env.local`:

```bash
cp .env.example .env.local
```

Configure values:

```env
VITE_GA4_ID=G-YOUR_GOOGLE_ANALYTICS_ID
VITE_API_ENDPOINT=https://productivity.ai2me.com/api
VITE_CAL_LINK=https://cal.com/ai2me/30min
VITE_APP_URL=https://productivity.ai2me.com
VITE_MAILCHIMP_API_KEY=your_mailchimp_key (if using Mailchimp)
VITE_MAILCHIMP_LIST_ID=your_list_id (if using Mailchimp)
```

---

## Deployment Steps

### Step 1: Build the project

```bash
npm install
npm run build
```

Output: `dist/` directory (ready for deployment)

### Step 2: Deploy to Vercel (Recommended)

```bash
npm install -g vercel
vercel --prod
```

During setup:
- Project name: `ai2me`
- Framework preset: `Vite`
- Build command: `npm run build`
- Output directory: `dist`
- Env vars: Set the values from `.env.local`

**Or link repo to Vercel dashboard:**
- Connect GitHub repository
- Set environment variables in Vercel dashboard
- Auto-deploys on git push to main

### Step 3: Connect Custom Domain

In Vercel dashboard:
1. Go to Settings → Domains
2. Add custom domain: `productivity.ai2me.com`
3. Update DNS CNAME record (see DNS section above)
4. Wait for DNS propagation (5-30 min)

### Step 4: Verify Analytics & Email

**Google Analytics:**
- Visit `https://productivity.ai2me.com`
- Check GA4 dashboard → Real-time → should see page view

**Email Subscription:**
- Test form submission
- Verify email captured in Mailchimp/backend
- Check spam folder

---

## Post-Deployment Checklist

- [ ] GA4 tracking working (check Real-time tab)
- [ ] Email subscription form functional
- [ ] Calendar link opens correctly
- [ ] Pricing link works
- [ ] All images load properly
- [ ] Responsive design tested (mobile, tablet, desktop)
- [ ] Lighthouse score > 90
- [ ] No console errors (check DevTools)
- [ ] SEO metadata correct (check Open Graph debugger)
- [ ] SSL certificate valid (HTTPS working)

---

## Analytics Goals to Set Up

In Google Analytics, create conversion goals:

1. **Email Signup**
   - Trigger: Form submission
   - Value: Track signups

2. **Demo Booking**
   - Trigger: Click to Cal.com link
   - Value: Track demo interest

3. **Pricing View**
   - Trigger: Navigate to pricing page
   - Value: Track pricing interest

---

## Email Backend Implementation

### Mailchimp Integration (Example)

**Backend endpoint** (`/api/subscribe`):

```python
# Python/Flask example
from mailchimp_marketing import Client

@app.route('/api/subscribe', methods=['POST'])
def subscribe():
    data = request.get_json()
    email = data.get('email')
    
    client = Client()
    client.set_config({
        "api_key": os.getenv('MAILCHIMP_API_KEY'),
        "server": "us1"  # Check your Mailchimp server prefix
    })
    
    try:
        response = client.lists.add_list_member(
            os.getenv('MAILCHIMP_LIST_ID'),
            {
                "email_address": email,
                "status": "pending",  # Requires double-opt-in
                "merge_fields": {
                    "SOURCE": "productivity_landing"
                }
            }
        )
        return {"success": True}, 200
    except Exception as e:
        return {"error": str(e)}, 400
```

---

## Monitoring & Maintenance

### Weekly Checks
- [ ] GA4 tracking data flowing
- [ ] No errors in browser console
- [ ] Email signups processing correctly

### Monthly Checks
- [ ] Review GA4 analytics
- [ ] Monitor conversion rates
- [ ] Check server logs for errors
- [ ] Update email list hygiene

---

## Troubleshooting

**Issue: GA4 not tracking**
- Verify GA4_ID in index.html matches your property
- Check gtag initialization in DevTools console
- Allow cookies if using cookie consent banner

**Issue: Email subscription failing**
- Check `/api/subscribe` endpoint is accessible
- Verify Mailchimp API credentials
- Check browser console for CORS errors

**Issue: Images not loading**
- Verify image paths are correct
- Check Unsplash URLs are still valid
- Consider hosting images locally if needed

---

## Support

For issues:
1. Check Vercel deployment logs
2. Review browser DevTools (Console, Network)
3. Verify DNS propagation: `nslookup productivity.ai2me.com`
4. Check analytics in GA4 dashboard

---

**Deployment ready once GA4 and email backend are configured.**
