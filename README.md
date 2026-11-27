# Sahil Kamdar | Data & AI Consultant

Personal website for my data and AI consulting practice: AI opportunity audits, AI workflow blueprints, data and AI solution builds, and advisory calls.

Built on a free one-page HTML/CSS/JavaScript portfolio template by [Colorlib](https://colorlib.com) (CC BY 3.0, so a small credit stays in the footer).

## Sections

The home page follows a consulting story, top to bottom:

1. **Hero:** positioning, credibility line, and the two calls to action.
2. **Experience at a glance:** four static figures taken from the CV (no animated counters).
3. **Selected work:** four case studies. Each card leads with the result; "Read the case study" opens the challenge, my role, the solution, scale and outcome.
4. **Three ways to engage:** AI Opportunity Assessment, AI Solution Blueprint, AI & Data Delivery Leadership.
5. **How I work:** five steps plus a responsible-AI note.
6. **Experience and leadership:** roles, capabilities, tools, education and awards.
7. **Why work with me:** verifiable trust points. A commented-out slot is ready for real testimonials.
8. **Contact:** a short enquiry form that opens the visitor's email app with the message filled in.

Service pages: `ai-audit.html`, `ai-workflow-blueprint.html`, `delivery-leadership.html`.
`consulting.html` and `ai-solution-build.html` now redirect to `delivery-leadership.html`, so old links keep working.

## Updating content

- Text lives directly in the `.html` files. Case studies are the `<article class="sk-case">` blocks in `index.html`.
- Design tokens (colours, radius) are at the top of `css/site.css`.
- `js/site.js` handles the enquiry form and sends analytics events for any element with `data-track`, once you add a GA4 or Google Tag Manager snippet.
- Look for `TODO (Sahil)` comments for places that need your input: testimonials, a booking link, case study evidence, and analytics.

## Run it locally

Open `index.html` in a browser, or serve the folder:

```bash
python3 -m http.server 8000
# then open http://localhost:8000
```

## Publish with GitHub Pages

1. In the repository, go to **Settings → Pages**.
2. Under **Build and deployment**, choose **Deploy from a branch**, pick `main` and `/ (root)`, then **Save**.
3. The site appears at `https://<your-username>.github.io/<repository-name>/` within a few minutes.

## Personalize

- `images/hero.webp` is the hero picture (photo card with glass chips) and `images/profile.jpg` is the square headshot used in About and on phones.
- Example deliverables for the consulting page live in `images/work/`. For the other services, put images in `images/work/<page-name>/` and copy the "What you receive" block from `consulting.html` into the marked spot in that page.
- Page text, prices and links are in the `.html` files; shared styles are in `css/custom.css`.
