# DOOMSDAY — Marvel Watch Guide

A curated Marvel watch guide built for **Avengers: Doomsday**.

Explore essential MCU movies, discover multiverse connections, track your viewing progress, create a personalized watch plan, and follow the countdown to Doomsday.

**Less scrolling. More context. Be ready for Doomsday.**

---

## Overview

With years of Marvel movies, interconnected storylines, alternate universes, and multiverse arcs, figuring out what to watch before _Avengers: Doomsday_ can become overwhelming.

Doomsday simplifies that experience.

Instead of presenting an enormous chronological archive, it provides a curated viewing experience that helps you understand the stories, characters, and universes that matter.

Whether you're catching up with the MCU or revisiting the multiverse, Doomsday helps you prepare without getting lost in the entire Marvel catalogue.

---

## Features

### 🎬 Curated Watch Guide

- Explore essential movies and recommended titles.
- Discover additional content through curated collections.
- Understand why each title matters to the larger story.
- Browse titles across different Marvel universes.

### 📚 Movie Catalogue

- Browse the complete curated catalogue.
- Search movies by title.
- Filter by importance, universe, content type, and watch status.
- Sort titles by viewing order, release date, or title.

### ✅ Watch Progress

- Mark movies and series as watched or unwatched.
- Track your overall viewing progress.
- Keep your progress saved locally on your device.
- Maintain separate progress for the main catalogue and Extras.

### 🧭 Story & Timeline

- Explore the story behind the multiverse.
- Follow curated viewing timelines.
- Discover character and universe connections.
- Understand how different storylines relate to Doomsday.

### 🗓️ Personalized Watch Planner

- Choose Essentials, the full catalogue, or a custom selection.
- Set your daily viewing time.
- Choose a target date.
- Exclude already-watched titles or include them in your plan.
- Generate a viewing schedule that respects the selected watch order.
- Identify titles with unknown runtimes or schedules that exceed your available time.

### ⏳ Release Countdown

- Follow the countdown to Avengers: Doomsday.
- Choose your release region.
- View the corresponding release date and time.
- Automatically remember your region preference.

---

## Tech Stack

| Technology     | Purpose                                   |
| -------------- | ----------------------------------------- |
| Next.js 16     | React framework                           |
| React 19       | UI development                            |
| TypeScript     | Type safety                               |
| Tailwind CSS 4 | Styling                                   |
| Motion 14      | Animation                                 |
| Bun            | Package management and scripts            |
| LocalStorage   | Persistent watch progress and preferences |

---

## Getting Started

### Prerequisites

Make sure you have the following installed:

- [Bun](https://bun.sh/)
- [Git](https://git-scm.com/)
- A modern web browser

### Installation

**1. Clone the repository**

```bash
git clone https://github.com/prithvikings/dooms.git
```

**2. Navigate into the project**

```bash
cd dooms
```

**3. Install dependencies**

```bash
bun install
```

**4. Start the development server**

```bash
bun run dev
```

**5. Open the application**

Visit [http://localhost:3000](http://localhost:3000).

---

## Available Scripts

| Command             | Description                  |
| ------------------- | ---------------------------- |
| `bun run dev`       | Start the development server |
| `bun run build`     | Create a production build    |
| `bun run start`     | Start the production server  |
| `bun run lint`      | Run ESLint                   |
| `bunx tsc --noEmit` | Run TypeScript checks        |

---

## Project Structure

```text
dooms/
├── app/
│   ├── catalogue/
│   ├── countdown/
│   ├── essentials/
│   ├── extras/
│   ├── planner/
│   ├── story/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
│
├── components/
│   ├── countdown/
│   ├── layout/
│   ├── movies/
│   ├── planner/
│   ├── providers/
│   ├── story/
│   └── ui/
│
├── data/
│   ├── config/
│   └── movies/
│
├── lib/
│   ├── countdown-storage.ts
│   ├── constants.ts
│   ├── planner-storage.ts
│   └── ...
│
├── types/
│
├── public/
│
└── package.json
```

---

## Design Philosophy

Doomsday follows a simple design direction:

- **Dark by default:** A cinematic dark interface.
- **Doom-inspired accents:** Deep reds and subtle gold details.
- **Minimal UI:** Keep the focus on movies, stories, and viewing progress.
- **Useful over flashy:** Every feature should help users prepare for the movie.
- **Responsive experience:** Designed to work across desktop and mobile screens.

---

## Data & Privacy

Doomsday uses browser LocalStorage to remember user preferences and viewing progress.

Currently, user progress and planner preferences are stored locally on the device. The application does not require an account to use these features.

Clearing browser storage may remove locally saved progress and preferences.

---

## Project Status

The core feature implementation is complete.

The project is currently moving through its quality assurance and refinement stage, focusing on:

- Responsive UI improvements.
- Cross-page consistency.
- Functional regression testing.
- Accessibility and performance improvements.
- Final production readiness checks.

---

## Disclaimer

Doomsday is an independent, fan-made project created for informational and entertainment purposes.

It is not affiliated with, endorsed by, or sponsored by Marvel Entertainment, Marvel Studios, or The Walt Disney Company.

All Marvel-related names, characters, movies, and trademarks belong to their respective owners.

---

## Author

**Prithvi**

- GitHub: [@prithvikings](https://github.com/prithvikings)

---

_Built for fans navigating the multiverse. Getting ready for Doomsday, one title at a time._
