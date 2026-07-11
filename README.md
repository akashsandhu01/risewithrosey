# Rise with Rosey Counselling — website

A static, multi-page website for Rise with Rosey Counselling (Rosey Sharma, MEd, CCC — Delta, BC).

## Pages
- `index.html` — Home
- `about.html` — About Rosey
- `services.html` — Services & specialties
- `fees.html` — Fees & FAQ
- `contact.html` — Contact / book a free consultation
- `404.html` — Custom not-found page

Plus: `styles.css`, `script.js`, `favicon.svg`, `robots.txt`, `sitemap.xml`, `_headers` (security headers for Cloudflare Pages).

## Deploy to Cloudflare Pages (easiest)

### Option A — Drag and drop (no tools needed)
1. Log in at https://dash.cloudflare.com
2. Go to **Workers & Pages → Create → Pages → Upload assets**
3. Name the project (e.g. `risewithrosey`)
4. Drag this whole folder in and click **Deploy**
5. Your site is live at `https://risewithrosey.pages.dev`

### Option B — Wrangler CLI
```bash
npm install -g wrangler
wrangler login
wrangler pages deploy . --project-name=risewithrosey
```

### Option C — Git integration
Push this folder to a GitHub repo, then in the Cloudflare dashboard choose
**Workers & Pages → Create → Pages → Connect to Git**. Build command: none.
Output directory: `/` (root).

## Custom domain
In your Pages project: **Custom domains → Set up a custom domain** and add
`risewithrosey.ca` (or whichever domain you own). Cloudflare handles SSL automatically.

## Before you go live — checklist
- [ ] Replace the placeholder email in `contact.html` (`hello@risewithrosey.ca`) with the real practice email
- [ ] Confirm the phone number is correct: (450) 924-4925
- [ ] Update `sitemap.xml` and `robots.txt` with the final domain
- [ ] Confirm the credential shown (CCC) is the one you want displayed
- [ ] Optional: add a real photo of Rosey to the About page
