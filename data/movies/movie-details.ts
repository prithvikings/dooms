/**
 * Curated spoiler notes for released titles.
 * Keep this list explicit: do not infer plot details for unreleased titles.
 * Spoiler notes are intentionally separate from the catalogue's spoiler-level label.
 */
export const movieSpoilerNotes: Record<string, string> = {
  "iron-man":
    "Tony escapes captivity by building the first Iron Man suit, then publicly reveals that he is Iron Man. The post-credits scene introduces Nick Fury's Avengers Initiative.",
  "the-avengers":
    "The Avengers defeat Loki and the Chitauri invasion, becoming a team through the Battle of New York. The post-credits scene reveals Thanos as the force behind the attack.",
  "captain-america-the-winter-soldier":
    "The Winter Soldier is revealed to be Bucky Barnes, kept alive and manipulated by HYDRA. Steve refuses to abandon him, while the fall of S.H.I.E.L.D. exposes HYDRA's infiltration.",
  "avengers-age-of-ultron":
    "Ultron is defeated, but Sokovia is destroyed and Pietro Maximoff dies protecting Clint. Vision joins the Avengers, while Wanda's grief sets up later stories.",
  "captain-america-civil-war":
    "The Avengers fracture after Tony learns Bucky was responsible for his parents' deaths while under HYDRA control. Steve and Bucky leave Tony behind, leaving the team divided.",
  "thor-ragnarok":
    "Asgard is destroyed to stop Hela, fulfilling the idea that Ragnarok is the end of Asgard as a place, not its people. Loki survives, but Thanos intercepts the refugees after the credits.",
  "avengers-infinity-war":
    "Thanos collects all six Infinity Stones and erases half of all life with a snap. The heroes lose, and the film ends with the scale of that loss made unmistakable.",
  "avengers-endgame":
    "The surviving heroes reverse the Snap through a time heist. Natasha sacrifices herself for the Soul Stone, Tony uses the Stones to defeat Thanos and dies, and Steve returns the Stones before choosing a life with Peggy.",
  "black-panther":
    "Killmonger defeats T'Challa temporarily and takes the throne, but T'Challa returns and defeats him. Rather than hide Wakanda, T'Challa decides to share its resources and knowledge with the world.",
  "guardians-of-the-galaxy":
    "The Guardians defeat Ronan by sharing the power of the Orb, which contains the Power Stone. Peter learns that his father is not fully human, setting up the sequel's family story.",
  "spider-man-no-way-home":
    "The spell that sends visitors back to their universes comes at a cost: everyone forgets Peter Parker. Peter chooses to let the world forget him, leaving him alone but free to begin again.",
  "doctor-strange-multiverse-of-madness":
    "Wanda is revealed as the central threat, driven by her desire to reach her children across realities. America learns to control her power, and Strange leaves with a third eye after using the Darkhold.",
  "loki-season-1":
    "The person behind the TVA is He Who Remains. Sylvie kills him, causing timelines to branch and the carefully controlled Sacred Timeline to collapse.",
  "loki-season-2":
    "Loki ultimately takes responsibility for the branching timelines, holding them together in a new form rather than allowing them to be pruned. He gives up the chance to return to his friends.",
  "deadpool-and-wolverine":
    "Deadpool teams up with a reluctant Wolverine variant to stop Cassandra Nova and save their timelines. The story brings several legacy characters into the multiverse and gives this Wolverine a new purpose.",
  "x-men":
    "The X-Men stop Magneto's plan to mutate world leaders, while Rogue's power and her relationship with Wolverine become central to the team's survival.",
  "x-men-days-of-future-past":
    "Wolverine's consciousness is sent back to 1973, where the team prevents the event that would have led to the Sentinel future. The altered timeline restores several characters who had died in the original continuity.",
  "logan":
    "Logan dies after protecting Laura and the young mutants from the Reavers. Laura and the other children escape, and she marks his grave with an X.",
  "spider-man-2002":
    "Norman Osborn is revealed as the Green Goblin. After Norman dies, Peter keeps his identity secret from Mary Jane and chooses the responsibility that comes with being Spider-Man.",
  "spider-man-2":
    "Peter briefly gives up being Spider-Man, but returns when the city needs him. Doctor Octopus sacrifices himself to stop the fusion experiment, while Mary Jane learns Peter's secret.",
  "the-amazing-spider-man-2":
    "Gwen Stacy dies during the fight with the Green Goblin, leaving Peter devastated. The ending shows him slowly returning to the role of Spider-Man.",
  "venom-let-there-be-carnage":
    "Eddie and Venom defeat Carnage. In the post-credits scene, they are suddenly transported into the MCU, where a news broadcast shows Spider-Man's identity being exposed.",
  "deadpool-2":
    "Deadpool uses Cable's time-travel device to change several events, including saving Vanessa. The film also introduces the young mutant Russell and the team that becomes X-Force.",
  "blade":
    "Blade defeats Deacon Frost and prevents the vampire ritual from succeeding, reinforcing his role as the Daywalker who stands between humans and vampires.",
};

export function getMovieSpoilerNote(movieId: string) {
  return movieSpoilerNotes[movieId];
}
