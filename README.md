# beomri.github.io

Personal academic website built with [Jekyll](https://jekyllrb.com/), hosted on [GitHub Pages](https://pages.github.com/).

Custom "cozy monospace" theme: warm dark background, JetBrains Mono font, single-column layout. Toggleable light mode.

---

## Prerequisites

- [Ruby](https://www.ruby-lang.org/) >= 3.0
- [Bundler](https://bundler.io/) (`gem install bundler`)

---

## Local development

```bash
# Install dependencies (first time, or after Gemfile changes)
bundle install

# Start local dev server with live reload
bundle exec jekyll serve --livereload
```

The site will be available at `http://localhost:4000`.

> **Note:** `jekyll-scholar` processes BibTeX, which adds a few seconds to build time.

---

## Deployment

Push to the `main` branch. The GitHub Actions workflow at `.github/workflows/deploy.yml` will automatically build and deploy the site to GitHub Pages.

**One-time GitHub setup** (only needed when first pushing this repo):

1. Go to **Settings → Pages** in the repository.
2. Under **Source**, select **GitHub Actions**.
3. Push to `main` — the workflow will handle the rest.

---

## How to maintain content

### Add a publication

Edit `_bibliography/papers.bib` and add a new BibTeX entry.

To mark a paper as "selected" (shown on the home page), add `selected = {true}` to the entry:

```bibtex
@inproceedings{yourkey2025,
  title   = {Your Paper Title},
  author  = {Ben-Dov, Omri and Coauthor, Name},
  year    = {2025},
  booktitle = {Conference Name},
  selected  = {true}
}
```

Optional fields rendered as links: `arxiv`, `pdf`, `doi`, `html`, `poster`, `slides`, `code`, `website`.

---

### Add a news item

Create a new Markdown file in `_news/`. The filename is not shown — use a descriptive name like `YYYY-MM-DD-short-description.md`.

```markdown
---
layout: news_item
date: 2025-06-01
---

Short announcement text here. You can use [links](https://example.com).
```

News items are sorted by `date` in reverse order on the home page.

---

### Add or update a talk

Edit `_data/talks.yml`. Each entry is a YAML mapping; append new entries anywhere in the file (they are sorted by `date` at render time).

```yaml
- title: "Talk Title"
  venue: Conference or Institution Name
  date: 2025-06-01          # YYYY-MM-DD, used for sorting and display
  location: "City, Country"
  type: oral                 # oral | invited | poster
  url: https://...           # optional: links the talk title
  slides: /assets/pdf/slides.pdf  # optional: renders a "slides" button
  video: https://youtu.be/... # optional: renders a "video" button
```

All link fields (`url`, `slides`, `video`) are optional — omit any that don't apply. The type badge colors are controlled by `.talk-type-oral` and `.talk-type-invited` in `_sass/_components.scss`.

---

### Add a project

Create a new Markdown file in `_projects/`. Front matter fields:

```markdown
---
layout: project
title: My Project Title
description: One-sentence summary shown on the projects card.
img: assets/img/my-image.png   # optional thumbnail
importance: 1                  # lower = shown first
category: work                 # optional grouping
mathjax: true                  # set if page contains LaTeX
---

Full project description in Markdown. You can include images:

<div class="project-figure">
  <img src="{{ '/assets/img/my-image.png' | relative_url }}" alt="Description">
  <p class="caption">Optional caption text.</p>
</div>
```

Place images in `assets/img/` (subdirectories are fine).

---

### Add a standalone page

Create a Markdown file in `_pages/`. To include it in the navigation bar, add:

```yaml
nav: true
nav_order: 5   # controls left-to-right order in the navbar
```

The page will use the `page` layout by default (set in `_config.yml`). Override with `layout: my-layout` in the front matter if needed.

---

### Update the CV

Edit `_data/resume.json` (also mirrored at `assets/json/resume.json` for direct download). The file follows the [JSON Resume](https://jsonresume.org/schema/) schema. Sections rendered: `work`, `education`, `publications`, `awards`, `volunteer`, `skills`.

To link to a new PDF version of your CV, replace `assets/pdf/omri_ac_cv.pdf` and update the path in `_layouts/cv.html` if the filename changes.

---

### Update personal info / social links

- **Name, email, description:** edit `_config.yml` (`title`, `email`, `description`).
- **Profile photo:** replace `assets/img/prof_pic.jpg`.
- **Bio text:** edit `_pages/about.md` (the body below the front matter).
- **Social links:** edit `_data/socials.yml`. Comment out any platform you don't want shown.

---

## Customization

### Colors and fonts

All design tokens live in `_sass/_variables.scss`:

```scss
$dark-bg:      #1c1917;   // main background (dark mode)
$dark-accent:  #e8a07a;   // links, highlights (dark mode)
$light-bg:     #f5f0eb;   // main background (light mode)
$light-accent: #c06030;   // links, highlights (light mode)
$font-mono:    'JetBrains Mono', monospace;
$content-width: 720px;    // max page width
```

Change values here; they propagate everywhere via CSS custom properties defined in `_sass/_themes.scss`.

### Layout and components

| File | Controls |
|---|---|
| `_sass/_base.scss` | Reset, typography, links, code, tables |
| `_sass/_layout.scss` | Nav bar, main container, footer, section headings |
| `_sass/_components.scss` | Profile block, social icons, news list, publication list, project cards, CV entries |

### Adding a new social platform

1. Add the key/value to `_data/socials.yml`.
2. Add a corresponding block in `_includes/social_icons.html` with the correct Font Awesome icon class.

---

## File structure overview

```
.
├── .github/workflows/deploy.yml   # GitHub Actions build + deploy
├── _bibliography/papers.bib       # BibTeX publications
├── _data/
│   ├── socials.yml              # Social links
│   └── resume.json              # CV data (JSON Resume format)
├── _includes/                     # Reusable HTML partials
│   ├── head.html                  # <head> meta, fonts, CSS
│   ├── nav.html                   # Navigation bar
│   ├── footer.html                # Page footer
│   └── social_icons.html          # Social icon row
├── _layouts/                      # Page layouts
│   ├── default.html               # Base layout
│   ├── page.html                  # Generic content page
│   ├── about.html                 # Home page
│   ├── cv.html                    # CV from resume.json
│   ├── project.html               # Single project page
│   ├── bib.html                   # jekyll-scholar entry template
│   └── news_item.html             # News item (internal)
├── _news/                         # News items (*.md)
├── _pages/                        # Site pages (about, publications, projects, cv, 404)
├── _projects/                     # Project pages (*.md)
├── _sass/                         # SCSS partials
│   ├── _variables.scss            # Color/font/spacing tokens
│   ├── _themes.scss               # CSS custom properties (dark/light)
│   ├── _base.scss                 # Typography, reset, links
│   ├── _layout.scss               # Nav, footer, containers
│   └── _components.scss           # All UI components
├── assets/
│   ├── css/main.scss              # SCSS entry point
│   ├── js/theme.js                # Dark/light toggle (~40 lines)
│   ├── img/                       # Images
│   ├── pdf/                       # PDFs (CV, papers, posters)
│   └── webfonts/                  # Font Awesome woff2 files (self-hosted fallback)
└── _config.yml                    # Jekyll site configuration
```
