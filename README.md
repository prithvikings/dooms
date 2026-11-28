# DOOMSDAY — Marvel Watch Guide

A curated, fan-made Marvel watch guide for **Avengers: Doomsday**.

Explore the essential stories, browse the wider Marvel catalogue, follow connected timelines, track what you've watched, and build a simple day-by-day watch plan.

**Less scrolling. More context. Be ready for Doomsday.**

---

## What is Doomsday?

The Marvel universe spans films, series, alternate realities, and interconnected storylines. Knowing what to revisit before a major crossover can quickly become overwhelming.

Doomsday makes that easier with a focused watchlist and context around the stories that lead into *Avengers: Doomsday*. Start with the essentials, then explore more whenever you want.

## Features

### 🎬 Home watchlist
- Start with **16 curated essential titles**.
- Browse movie cards with story context, metadata, and watch status.
- Track your essentials progress directly on the home page.
- Jump to the watch planner without navigating to a separate page.

### 🔎 Full catalogue
- Explore the **59-title main catalogue**.
- Search by title and filter by importance, universe, content type, and watch status.
- Sort titles to find the right place to continue.

### 🌌 Extras
- Explore **29 additional titles** across Spider-Man, Sony, Fox X-Men, and other Marvel legacy collections.
- Track Extras viewing progress separately from the main catalogue.

### 📖 Story & timelines
- Explore curated story threads and connections between characters and universes.
- Browse timelines across MCU, Fox, TVA, and multiverse continuities.
- See your viewing progress while exploring the story.

### 🗓️ Watch planner
- Build a plan from Essentials, the full catalogue, or a custom selection.
- Choose a target finish date.
- Arrange titles by release order or story order.
- Optionally show titles you've already watched in the schedule.

### ⏳ Release countdown
- View a live countdown to the configured *Avengers: Doomsday* release date.
- Switch between supported release regions.
- Your selected region is remembered in your browser.

### 🎞️ Movie detail pages
- Open a title for its synopsis, release information, and Doomsday relevance.
- Read story context, things to notice, and its place in the bigger picture.
- Explore related titles and optional spoiler notes where available.

---

## Tech stack

| Technology | Purpose |
| --- | --- |
| Next.js 16 | React framework and application routing |
| React 19 | UI |
| TypeScript | Type safety |
| Tailwind CSS 4 | Styling |
| Motion 14 | UI animation |
| Bun 1.4 | Package management and scripts |
| Browser LocalStorage | Watch progress and release-region preference |

---

## Run locally

### Prerequisites

- [Bun](https://bun.sh/) 1.4 or compatible
- [Git](https://git-scm.com/)
- A modern web browser

### Installation

```bash
git clone https://github.com/prithvikings/dooms.git
cd dooms
bun install
bun run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Available commands

| Command | Description |
| --- | --- |
| `bun run dev` | Start the development server |
| `bun run build` | Create a production build |
| `bun run start` | Run the production server |
| `bun run lint` | Run ESLint |
| `bunx tsc --noEmit` | Run TypeScript checks |

---

## Project structure

```text
dooms/
├── app/
│   ├── catalogue/       # Full catalogue page
│   ├── essentials/      # Redirects to the home essentials section
│   ├── extras/          # Additional Marvel collections
│   ├── movies/[id]/     # Movie and series detail pages
│   ├── planner/         # Redirects to the home planner section
│   ├── story/           # Story threads and timelines
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx         # Home page
├── components/
│   ├── countdown/
│   ├── home/
│   ├── layout/
│   ├── movies/
│   ├── planner/
│   ├── providers/
│   ├── story/
│   └── ui/
├── data/
│   ├── config/          # Release-region configuration
│   └── movies/          # Catalogue, essentials, extras, and guide content
├── lib/                 # Storage and shared utilities
├── public/              # Static assets, including movie posters
├── types/
└── package.json
```

---

## Progress and privacy

Doomsday does not require an account. Watch progress and the selected release region are stored in your browser using LocalStorage.

This means your progress is available when you return using the same browser and storage, but it is not automatically synced between devices or browsers. Clearing browser storage may erase saved progress and preferences.


---

## Author

**Prithvi** · [GitHub @prithvikings](https://github.com/prithvikings)

---

_Built for fans navigating the multiverse. Getting ready for Doomsday, one title at a time._
