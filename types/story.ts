export type StoryChapter = {
  id: string;
  slug: string;
  title: string;
  subtitle?: string;

  order: number;

  summary: string;
  content: string;

  relatedMovieIds: string[];

  spoilerLevel: "none" | "minor" | "major";
};
