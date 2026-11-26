
import type { ExtraCollection } from "@/types/movie";

export const extraCollections: ExtraCollection[] = [
  {
    id: "spider-man",
    category: "spider-man",
    title: "The Older Spider-Man Movies",
    description:
      "Explore the earlier Spider-Man universes and the characters who cross into No Way Home.",

    movieIds: [
      "spider-man-2002",
      "spider-man-2",
      "spider-man-3",
      "amazing-spider-man",
      "amazing-spider-man-2",
    ],
  },

  {
    id: "sony",
    category: "sony",
    title: "Sony's Spider-Man Villain Movies",
    description:
      "Explore Sony's standalone stories featuring Spider-Man's wider collection of villains.",

    movieIds: [
      "venom",
      "venom-let-there-be-carnage",
      "venom-the-last-dance",
      "morbius",
      "madame-web",
      "kraven-the-hunter",
    ],
  },

  {
    id: "x-men",
    category: "x-men",
    title: "The Rest of Fox's X-Men",
    description:
      "Explore the remaining Fox X-Men films and the history behind Deadpool and Wolverine.",

    movieIds: [
      "x-men-first-class",
      "x-men-the-last-stand",
      "x-men-origins-wolverine",
      "the-wolverine",
      "x-men-apocalypse",
      "dark-phoenix",
      "logan",
      "deadpool",
      "deadpool-2",
    ],
  },

  {
    id: "legacy",
    category: "legacy",
    title: "Legacy Marvel",
    description:
      "Explore Marvel's older cinematic adaptations and their returning characters.",

    movieIds: [
      "blade",
      "blade-ii",
      "blade-trinity",
      "fantastic-four-2005",
      "fantastic-four-rise-of-the-silver-surfer",
      "daredevil-2003",
      "elektra",
      "ghost-rider",
      "ghost-rider-spirit-of-vengeance",
      "the-punisher",
    ],
  },
];
