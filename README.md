# Sahil Kamdar | Data & AI Consultant

Personal website for my data and AI consulting practice: AI opportunity audits, AI workflow blueprints, data and AI solution builds, and advisory calls.

Built on a free one-page HTML/CSS/JavaScript portfolio template by [Colorlib](https://colorlib.com) (CC BY 3.0, so the footer credit stays).

## Sections

- **Home:** headline and calls to action
- **About:** profile, strengths and tool stack
- **Services:** four service cards; each opens its own page
- **Experience:** roles, education and certification
- **Contact:** phone, email, LinkedIn

Service pages (`consulting.html`, `ai-audit.html`, `ai-workflow-blueprint.html`, `ai-solution-build.html`) each have: who it's for, what you get, example deliverables, three packages with prices, how it works, two illustrative sample engagements, and links to the other services.

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

- `images/hero.webp` (1000 × 1194) and `images/profile.png` (square) are placeholder graphics. Replace them with your own photos using the same file names.
- Example deliverables for the consulting page live in `images/work/`. For the other services, put images in `images/work/<page-name>/` and copy the "What you receive" block from `consulting.html` into the marked spot in that page.
- Page text, prices and links are in the `.html` files; shared styles are in `css/custom.css`.
