
import type { Metadata } from "next";
import { Geist } from "next/font/google";

import { WatchProgressProvider } from "@/components/providers/WatchProgressProvider";
import { movies, extraMovies } from "@/data/movies";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Doomsday — Marvel Watch Guide",
    template: "%s | Doomsday",
  },
  description:
    "Your curated Marvel watch guide for Avengers: Doomsday. Discover essential movies, recommended titles, multiverse stories and more.",
  applicationName: "Doomsday",
  keywords: [
    "Avengers Doomsday",
    "Marvel",
    "MCU Watch Order",
    "Marvel Watch Guide",
    "Marvel Timeline",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={geistSans.variable}>
      <body className="min-h-screen bg-background font-sans text-foreground antialiased">
        <WatchProgressProvider
  validMovieIds={movies.map((movie) => movie.id)}
  validExtraMovieIds={extraMovies.map((movie) => movie.id)}
>
  {children}
</WatchProgressProvider>
      </body>
    </html>
  );
}
