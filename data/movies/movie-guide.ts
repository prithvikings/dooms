export type MovieGuideNote = {
  storyContext: string;
  whatToNotice: string;
  biggerPicture: string;
};

export const movieGuideNotes: Record<string, MovieGuideNote> = {
  "iron-man": {
    storyContext: "This is the MCU's starting point: the story begins with Tony Stark as a weapons manufacturer whose worldview changes after he experiences the consequences of his own industry. The film establishes the personal, technological and ethical foundations that later Avengers stories build on.",
    whatToNotice: "Pay attention to how Tony's suit evolves alongside his character. The workshop sequences are not just gadget showcases; they show him moving from improvisation and self-preservation toward taking responsibility for what he creates.",
    biggerPicture: "Tony's legacy is now part of the larger Doomsday conversation because Robert Downey Jr. is returning to the franchise as Victor von Doom. That casting makes the original Tony Stark story an especially interesting point of comparison, not evidence that Doom is Tony.",
  },
  "the-avengers": {
    storyContext: "The first team-up brings characters from separate corners of the MCU into one shared crisis. Its real story is as much about distrust and clashing personalities as it is about stopping an invasion.",
    whatToNotice: "Watch how the team forms under pressure. Each hero arrives with a different idea of authority, sacrifice and responsibility, and the Battle of New York only works once those differences become strengths.",
    biggerPicture: "This film establishes what an Avengers team looks like when it works. That baseline makes later fractures, replacements and the arrival of a new team easier to understand.",
  },
  "captain-america-the-winter-soldier": {
    storyContext: "This is a political thriller inside the superhero universe. Steve Rogers discovers that the institutions he trusted have been compromised, forcing him to decide whether loyalty to an organisation matters more than loyalty to its ideals.",
    whatToNotice: "Look at the contrast between Steve's old-fashioned principles and the modern surveillance state around him. The action is built around mistrust, hidden identities and the cost of following orders.",
    biggerPicture: "The film reshapes the MCU's power structures and brings Sam Wilson and Bucky Barnes into the centre of Steve's story. Those relationships continue to matter after Steve's era as Captain America.",
  },
  "avengers-age-of-ultron": {
    storyContext: "The Avengers are already a functioning team, but success has made them overconfident. A plan to create a global defence system turns into a crisis that exposes the danger of trying to control every possible threat.",
    whatToNotice: "Notice how the film plants seeds for several later stories: Wanda and Vision's connection, the team's internal tensions, and the consequences of decisions made in the name of protection.",
    biggerPicture: "Wanda Maximoff and Vision become major threads in the MCU's later supernatural and emotional storytelling. The film also helps explain why the Avengers become increasingly divided.",
  },
  "captain-america-civil-war": {
    storyContext: "The Avengers' disagreements become an ideological split. The central question is not simply who is right, but whether extraordinary power should answer to governments, individual conscience or the people affected by it.",
    whatToNotice: "Track the personal histories beneath the public argument. The conflict becomes much more painful because the characters are not debating in the abstract; they are defending people and choices that shaped their lives.",
    biggerPicture: "The fractured team is the starting condition for the next Avengers-scale crisis. It also establishes the relationships among Sam, Bucky, T'Challa and the wider group that carries forward.",
  },
  "black-panther": {
    storyContext: "T'Challa inherits both a throne and a difficult question: what does a powerful nation owe to the rest of the world? The conflict tests Wakanda's traditions and the responsibilities that come with leadership.",
    whatToNotice: "Pay attention to the contrast between T'Challa and Killmonger's visions for Wakanda. Their disagreement is rooted in shared history but leads to radically different ideas about power and responsibility.",
    biggerPicture: "Wakanda becomes one of the MCU's most important political and technological centres. The film also establishes Shuri, M'Baku and the country's wider leadership structure.",
  },
  "avengers-infinity-war": {
    storyContext: "The MCU's separate storylines converge around Thanos and the Infinity Stones. Rather than following one team, the film splits its heroes across several fronts as they try to stop a threat that has been building for years.",
    whatToNotice: "Notice how the film gives Thanos a clear objective and treats him as the driving force of the story. The heroes' choices are shaped by competing priorities: protecting the universe, protecting one person, or protecting a powerful object.",
    biggerPicture: "This is the major turning point before Endgame. Understanding who holds the Stones, where the teams are and what each character is willing to sacrifice makes the follow-up far more meaningful.",
  },
  "avengers-endgame": {
    storyContext: "Endgame is a story about living with loss before it becomes a story about fighting back. The surviving characters have to decide what moving forward means after the universe has been permanently changed.",
    whatToNotice: "The callbacks are only part of the appeal. Watch how the film brings long-running character arcs to a close, especially the different ways Steve Rogers and Tony Stark understand duty and sacrifice.",
    biggerPicture: "The film closes the Infinity Saga and changes the status quo for the MCU. It also leaves behind a world, a legacy and a set of new responsibilities that later projects inherit.",
  },
  "thor-ragnarok": {
    storyContext: "Thor's world expands beyond Asgard as he loses control over the future he expected. The film mixes cosmic adventure with a story about identity, family and what makes a people more than their home.",
    whatToNotice: "Watch Thor's understanding of leadership change. The film deliberately strips away familiar symbols of power and asks what remains when he cannot rely on them.",
    biggerPicture: "Ragnarok leads directly into the next major Avengers crisis and changes the fate of Asgard. It is essential context for Thor's state of mind and the surviving Asgardians.",
  },
  "spider-man-no-way-home": {
    storyContext: "Peter's attempt to repair one problem creates a much larger multiversal crisis. The film is built around responsibility, consequences and the temptation to undo painful events.",
    whatToNotice: "The returning characters are more than nostalgia. Each one gives Peter a different example of what being Spider-Man can cost, and those encounters shape the choice he ultimately makes.",
    biggerPicture: "The story brings multiple Spider-Man film continuities into contact and leaves Peter in a fundamentally different place. It is one of the clearest bridges between the MCU and its wider live-action multiverse.",
  },
  "doctor-strange-multiverse-of-madness": {
    storyContext: "The multiverse becomes a dangerous physical reality rather than a theoretical possibility. Strange is forced to confront alternate versions of familiar lives and the damage that obsession can cause.",
    whatToNotice: "Pay attention to the film's repeated question about control. Different characters believe they are acting for someone else's good, but their methods reveal what they are unwilling to accept.",
    biggerPicture: "The film expands the rules and risks of travelling between realities. It also deepens the consequences of WandaVision and introduces America Chavez as a character with unusual multiversal abilities.",
  },
  "loki-season-1": {
    storyContext: "A variant of Loki is pulled out of his expected path and shown the machinery that controls the timeline. The series turns a familiar trickster story into a question about free will and who gets to decide which lives are allowed to happen.",
    whatToNotice: "The TVA's bureaucracy is part of the point: cosmic control is presented as ordinary administration. Watch how Loki's relationship with himself changes as he sees the consequences of his choices.",
    biggerPicture: "The season changes the MCU's understanding of timelines and sets up the branching reality that later multiverse stories build on.",
  },
  "loki-season-2": {
    storyContext: "The second season follows the consequences of the TVA's collapse. Loki and his allies are no longer trying only to escape the system; they are trying to work out whether it can be rebuilt without repeating its original cruelty.",
    whatToNotice: "Loki's growth is expressed through patience, responsibility and the willingness to carry a burden rather than seize control for himself. The time-slipping plot is also a way of making his personal development visible.",
    biggerPicture: "The finale gives the branching timelines a new status quo and becomes one of the most consequential developments in the MCU's multiverse storyline.",
  },
  "deadpool-and-wolverine": {
    storyContext: "Deadpool is pulled into a crisis involving the TVA and the survival of a timeline. The film uses its multiverse premise to bring together characters and corners of Marvel film history that previously existed separately.",
    whatToNotice: "Look beyond the cameos to the contrast between Deadpool's irreverence and Wolverine's exhaustion. Their partnership works because each character is forced to confront a different version of failure and purpose.",
    biggerPicture: "The film makes the Fox-era Marvel characters part of the MCU's on-screen multiverse conversation and reinforces the TVA's role beyond Loki's story.",
  },
  "x-men": {
    storyContext: "The first X-Men film introduces a world where mutants live among humans but are feared because of their abilities. Professor X and Magneto offer competing responses to that prejudice, making the conflict personal as well as political.",
    whatToNotice: "Watch how the film introduces the team's powers through character relationships rather than treating them as a simple roster of abilities. Wolverine and Rogue provide an audience entry point into this unfamiliar world.",
    biggerPicture: "This film establishes the Fox X-Men continuity and the core ideological divide between Xavier and Magneto, both of which inform later appearances and multiverse references.",
  },
  "x-men-days-of-future-past": {
    storyContext: "The X-Men face a future in which mutantkind is nearly wiped out. Their last hope is to change a pivotal event in the past, bringing the original cast and younger versions of the characters into one story.",
    whatToNotice: "The film uses two time periods to show how a single decision can reshape an entire continuity. The contrast between the older, defeated team and the younger characters is central to its emotional stakes.",
    biggerPicture: "It is the key timeline-reset story for the Fox X-Men films and a useful reference point for understanding why that universe's history becomes complicated.",
  },
  "logan": {
    storyContext: "Set in a bleak future, Logan follows a worn-down Wolverine who has largely withdrawn from the world. The arrival of a young mutant forces him to confront the possibility that protecting someone else may still give his life purpose.",
    whatToNotice: "The film is deliberately smaller and more grounded than a typical team superhero story. Its focus is on ageing, regret, care and the cost of violence.",
    biggerPicture: "It gives Wolverine a distinct emotional history and makes his later multiverse appearances more resonant. It is not required to understand every crossover, but it adds substantial character context.",
  },
  "spider-man-2002": {
    storyContext: "This film tells the origin of Peter Parker as an ordinary teenager learning that extraordinary abilities come with responsibility. Its central relationship is between Peter's private life and the public role he chooses to take on.",
    whatToNotice: "Watch how Peter's choices, rather than his powers, define the hero. The film establishes the emotional foundation for the original trilogy's version of Spider-Man.",
    biggerPicture: "It introduces Tobey Maguire's Peter Parker, who later appears in the MCU multiverse story. The original film also establishes Norman Osborn and the world around this version of Peter.",
  },
  "spider-man-2": {
    storyContext: "Peter's double life begins to wear him down. The sequel explores whether he can keep being Spider-Man while maintaining relationships, work and the ordinary future he wants.",
    whatToNotice: "The conflict with Doctor Octopus mirrors Peter's own struggle with responsibility. Both characters are talented people whose personal ambitions become entangled with forces they cannot easily control.",
    biggerPicture: "It is widely regarded as a defining story for this version of Peter and gives his return in No Way Home more emotional weight.",
  },
  "the-amazing-spider-man-2": {
    storyContext: "Peter tries to balance his relationship with Gwen and his responsibilities as Spider-Man while uncovering more about his family's past. The story connects personal loss with the growing number of threats around him.",
    whatToNotice: "The film's emotional centre is Peter and Gwen, not just the expanding set of villains. Their relationship gives the consequences of Peter's choices real weight.",
    biggerPicture: "It provides important context for Andrew Garfield's Peter Parker when he returns in No Way Home, especially the grief and regret he carries.",
  },
  "venom-let-there-be-carnage": {
    storyContext: "Eddie Brock and Venom are still learning how to share one life when a new symbiote threat emerges. The film continues the odd-couple dynamic while bringing the story closer to the wider Spider-Man multiverse.",
    whatToNotice: "The tension between Eddie and Venom is the engine of the story. Their arguments are not just comic relief; they reveal how dependent the two have become on one another.",
    biggerPicture: "Its post-credits scene is the clearest direct bridge between Sony's Venom films and the MCU's Spider-Man storyline.",
  },
  "deadpool-2": {
    storyContext: "Deadpool's attempt to protect a young mutant draws him into a story about grief, found family and whether a person can change the future they think is inevitable.",
    whatToNotice: "The comedy is deliberately chaotic, but the emotional thread is Wade's need to belong to something beyond himself. Cable's presence gives the film a more serious counterpoint.",
    biggerPicture: "The film introduces time-travel mechanics and character relationships that feed into Deadpool & Wolverine, while further developing the Fox-era corner of Marvel films.",
  },
  "blade": {
    storyContext: "Blade operates in a hidden supernatural world where vampires move among humans. The film blends action and horror while establishing a hero whose identity sits between two worlds.",
    whatToNotice: "Notice how Blade's struggle is both external and personal: he hunts vampires while managing the same condition that makes him uniquely capable of fighting them.",
    biggerPicture: "The film is an important early example of Marvel's live-action superhero adaptations and gives context to Wesley Snipes' return in Deadpool & Wolverine.",
  },
};

export function getMovieGuideNote(movieId: string) {
  return movieGuideNotes[movieId];
}
