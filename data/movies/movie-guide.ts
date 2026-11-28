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
  "the-incredible-hulk": {
    storyContext: "Bruce Banner searches for a cure while trying to control the destructive Hulk. The premise sets up the central conflict and gives this entry its own place in the wider Marvel screen universe.",
    whatToNotice: "Pay attention to the difference between public responsibility and private loyalty. That tension helps explain why alliances form, break or change as the wider Marvel story moves forward. In particular, keep the focus on the choices and relationships at the centre of The Incredible Hulk; they provide the clearest way to understand what changes by the end.",
    biggerPicture: "Introduces Thaddeus Ross and Samuel Sterns, characters connected to the later MCU. This title adds a character or institution that matters to the wider Marvel landscape. Its Doomsday relevance should be read through the specific connection noted here, rather than assuming every subplot will carry into the crossover.",
  },
  "iron-man-2": {
    storyContext: "Tony Stark faces new enemies while dealing with the consequences of revealing his identity. The premise sets up the central conflict and gives this entry its own place in the wider Marvel screen universe.",
    whatToNotice: "Pay attention to the difference between public responsibility and private loyalty. That tension helps explain why alliances form, break or change as the wider Marvel story moves forward. In particular, keep the focus on the choices and relationships at the centre of Iron Man 2; they provide the clearest way to understand what changes by the end.",
    biggerPicture: "Expands the Avengers Initiative and introduces Black Widow. This title adds a character or institution that matters to the wider Marvel landscape. Its Doomsday relevance should be read through the specific connection noted here, rather than assuming every subplot will carry into the crossover.",
  },
  "thor": {
    storyContext: "Thor is banished to Earth and must prove himself worthy of reclaiming his powers. The premise sets up the central conflict and gives this entry its own place in the wider Marvel screen universe.",
    whatToNotice: "Pay attention to the difference between public responsibility and private loyalty. That tension helps explain why alliances form, break or change as the wider Marvel story moves forward. In particular, keep the focus on the choices and relationships at the centre of Thor; they provide the clearest way to understand what changes by the end.",
    biggerPicture: "Introduces Thor and Loki, two important characters in the upcoming Avengers story. This title adds a character or institution that matters to the wider Marvel landscape. Its Doomsday relevance should be read through the specific connection noted here, rather than assuming every subplot will carry into the crossover.",
  },
  "captain-america-the-first-avenger": {
    storyContext: "Steve Rogers transforms from a determined young man into the super soldier Captain America. The premise sets up the central conflict and gives this entry its own place in the wider Marvel screen universe.",
    whatToNotice: "Pay attention to the difference between public responsibility and private loyalty. That tension helps explain why alliances form, break or change as the wider Marvel story moves forward. In particular, keep the focus on the choices and relationships at the centre of Captain America: The First Avenger; they provide the clearest way to understand what changes by the end.",
    biggerPicture: "Establishes Steve Rogers and Bucky Barnes, whose history becomes relevant again. This title adds a character or institution that matters to the wider Marvel landscape. Its Doomsday relevance should be read through the specific connection noted here, rather than assuming every subplot will carry into the crossover.",
  },
  "iron-man-3": {
    storyContext: "Tony Stark confronts the psychological aftermath of the Battle of New York. The premise sets up the central conflict and gives this entry its own place in the wider Marvel screen universe.",
    whatToNotice: "Pay attention to the difference between public responsibility and private loyalty. That tension helps explain why alliances form, break or change as the wider Marvel story moves forward. In particular, keep the focus on the choices and relationships at the centre of Iron Man 3; they provide the clearest way to understand what changes by the end.",
    biggerPicture: "Continues Tony Stark's character development after the original Avengers battle. This title adds a character or institution that matters to the wider Marvel landscape. Its Doomsday relevance should be read through the specific connection noted here, rather than assuming every subplot will carry into the crossover.",
  },
  "thor-the-dark-world": {
    storyContext: "Thor and Loki confront a dark enemy threatening the Nine Realms. The premise sets up the central conflict and gives this entry its own place in the wider Marvel screen universe.",
    whatToNotice: "Pay attention to the difference between public responsibility and private loyalty. That tension helps explain why alliances form, break or change as the wider Marvel story moves forward. In particular, keep the focus on the choices and relationships at the centre of Thor: The Dark World; they provide the clearest way to understand what changes by the end.",
    biggerPicture: "Develops Thor and Loki's relationship and introduces the Reality Stone. This title adds a character or institution that matters to the wider Marvel landscape. Its Doomsday relevance should be read through the specific connection noted here, rather than assuming every subplot will carry into the crossover.",
  },
  "guardians-of-the-galaxy": {
    storyContext: "A group of unlikely criminals become an unlikely team while protecting a powerful artifact. The premise sets up the central conflict and gives this entry its own place in the wider Marvel screen universe.",
    whatToNotice: "Notice how the film introduces its world-building through character conflict. The mythology is easier to follow when you track what each character wants and what they are prepared to risk. In particular, keep the focus on the choices and relationships at the centre of Guardians of the Galaxy; they provide the clearest way to understand what changes by the end.",
    biggerPicture: "Introduces the cosmic side of the MCU and the Infinity Stone storyline. This title contributes to Marvel's cosmic or alternate-world landscape. Its importance lies in the characters and world rules it establishes, while the exact shape of future crossover connections should not be assumed.",
  },
  "ant-man": {
    storyContext: "Scott Lang discovers a suit that allows him to shrink in size while gaining extraordinary strength. The premise sets up the central conflict and gives this entry its own place in the wider Marvel screen universe.",
    whatToNotice: "Notice which relationships shape the protagonist's decisions and how the story changes the way they understand themselves. Those details are more useful to remember than every individual plot beat. In particular, keep the focus on the choices and relationships at the centre of Ant-Man; they provide the clearest way to understand what changes by the end.",
    biggerPicture: "Introduces Scott Lang and the Quantum Realm. This title adds context to the wider Marvel catalogue. Its place in a Doomsday watch guide is about the background it provides, not a guarantee that every character or storyline will return.",
  },
  "doctor-strange": {
    storyContext: "A gifted surgeon discovers the mystic arts after a life-changing accident. The premise sets up the central conflict and gives this entry its own place in the wider Marvel screen universe.",
    whatToNotice: "Watch the rules the story establishes for its supernatural elements and how the characters respond when those rules are tested. The emotional choices are often more important than the spectacle. In particular, keep the focus on the choices and relationships at the centre of Doctor Strange; they provide the clearest way to understand what changes by the end.",
    biggerPicture: "Introduces the mystic arts, alternate dimensions and the Time Stone. This entry broadens Marvel's supernatural and magical catalogue. Treat its connection to the larger crossover carefully: some links are thematic or character-based rather than direct plot setup.",
  },
  "guardians-of-the-galaxy-vol-2": {
    storyContext: "The Guardians uncover the truth about Peter Quill's mysterious parentage. The premise sets up the central conflict and gives this entry its own place in the wider Marvel screen universe.",
    whatToNotice: "Notice how the film introduces its world-building through character conflict. The mythology is easier to follow when you track what each character wants and what they are prepared to risk. In particular, keep the focus on the choices and relationships at the centre of Guardians of the Galaxy Vol. 2; they provide the clearest way to understand what changes by the end.",
    biggerPicture: "Adds background to the Guardians and their relationships before Infinity War. This title contributes to Marvel's cosmic or alternate-world landscape. Its importance lies in the characters and world rules it establishes, while the exact shape of future crossover connections should not be assumed.",
  },
  "spider-man-homecoming": {
    storyContext: "Peter Parker balances high school life with his responsibilities as Spider-Man. The premise sets up the central conflict and gives this entry its own place in the wider Marvel screen universe.",
    whatToNotice: "Look at how the story treats responsibility, secrecy and the people caught around the hero. These personal stakes are what make later cross-universe encounters feel like meetings between lived-in characters rather than simple cameos. In particular, keep the focus on the choices and relationships at the centre of Spider-Man: Homecoming; they provide the clearest way to understand what changes by the end.",
    biggerPicture: "Establishes Peter's relationship with Tony Stark and his early MCU journey. Notice how the film builds its own corner of the Spider-Man mythos instead of assuming it belongs to the MCU. That distinction helps keep the different continuities straight when they eventually overlap.",
  },
  "ant-man-and-the-wasp": {
    storyContext: "Scott Lang teams up with Hope van Dyne on a mission involving the Quantum Realm. The premise sets up the central conflict and gives this entry its own place in the wider Marvel screen universe.",
    whatToNotice: "Notice which relationships shape the protagonist's decisions and how the story changes the way they understand themselves. Those details are more useful to remember than every individual plot beat. In particular, keep the focus on the choices and relationships at the centre of Ant-Man and the Wasp; they provide the clearest way to understand what changes by the end.",
    biggerPicture: "Provides further context for the Quantum Realm and introduces Ghost. This title adds context to the wider Marvel catalogue. Its place in a Doomsday watch guide is about the background it provides, not a guarantee that every character or storyline will return.",
  },
  "captain-marvel": {
    storyContext: "Carol Danvers discovers the truth about her identity while caught in a conflict between alien civilizations. The premise sets up the central conflict and gives this entry its own place in the wider Marvel screen universe.",
    whatToNotice: "Notice how the film introduces its world-building through character conflict. The mythology is easier to follow when you track what each character wants and what they are prepared to risk. In particular, keep the focus on the choices and relationships at the centre of Captain Marvel; they provide the clearest way to understand what changes by the end.",
    biggerPicture: "Introduces Carol Danvers and develops Nick Fury's connection to the wider cosmic MCU. This title contributes to Marvel's cosmic or alternate-world landscape. Its importance lies in the characters and world rules it establishes, while the exact shape of future crossover connections should not be assumed.",
  },
  "spider-man-far-from-home": {
    storyContext: "Peter Parker travels to Europe but finds himself facing a new threat involving mysterious elemental creatures. The premise sets up the central conflict and gives this entry its own place in the wider Marvel screen universe.",
    whatToNotice: "Look at how the story treats responsibility, secrecy and the people caught around the hero. These personal stakes are what make later cross-universe encounters feel like meetings between lived-in characters rather than simple cameos. In particular, keep the focus on the choices and relationships at the centre of Spider-Man: Far From Home; they provide the clearest way to understand what changes by the end.",
    biggerPicture: "Shows the world adjusting after Endgame and establishes Peter's life before No Way Home. Notice how the film builds its own corner of the Spider-Man mythos instead of assuming it belongs to the MCU. That distinction helps keep the different continuities straight when they eventually overlap.",
  },
  "wandavision": {
    storyContext: "Wanda Maximoff and Vision live an unusual suburban life across different television eras, hiding a much deeper mystery. The premise sets up the central conflict and gives this entry its own place in the wider Marvel screen universe.",
    whatToNotice: "Watch the rules the story establishes for its supernatural elements and how the characters respond when those rules are tested. The emotional choices are often more important than the spectacle. In particular, keep the focus on the choices and relationships at the centre of WandaVision; they provide the clearest way to understand what changes by the end.",
    biggerPicture: "Develops Wanda's transformation into the Scarlet Witch and establishes the foundation for her later storyline. This entry broadens Marvel's supernatural and magical catalogue. Treat its connection to the larger crossover carefully: some links are thematic or character-based rather than direct plot setup.",
  },
  "the-falcon-and-the-winter-soldier": {
    storyContext: "Sam Wilson and Bucky Barnes confront a new global threat while dealing with the legacy of Captain America. The premise sets up the central conflict and gives this entry its own place in the wider Marvel screen universe.",
    whatToNotice: "Pay attention to the difference between public responsibility and private loyalty. That tension helps explain why alliances form, break or change as the wider Marvel story moves forward. In particular, keep the focus on the choices and relationships at the centre of The Falcon and the Winter Soldier; they provide the clearest way to understand what changes by the end.",
    biggerPicture: "Explains Sam Wilson's journey toward becoming Captain America and introduces John Walker and Valentina. This title adds a character or institution that matters to the wider Marvel landscape. Its Doomsday relevance should be read through the specific connection noted here, rather than assuming every subplot will carry into the crossover.",
  },
  "black-widow": {
    storyContext: "Natasha Romanoff confronts her past and reunites with the people connected to her early life as a trained assassin. The premise sets up the central conflict and gives this entry its own place in the wider Marvel screen universe.",
    whatToNotice: "Pay attention to the difference between public responsibility and private loyalty. That tension helps explain why alliances form, break or change as the wider Marvel story moves forward. In particular, keep the focus on the choices and relationships at the centre of Black Widow; they provide the clearest way to understand what changes by the end.",
    biggerPicture: "Introduces Yelena Belova and Red Guardian, both important members of the newer MCU ensemble. This title adds a character or institution that matters to the wider Marvel landscape. Its Doomsday relevance should be read through the specific connection noted here, rather than assuming every subplot will carry into the crossover.",
  },
  "shang-chi-and-the-legend-of-the-ten-rings": {
    storyContext: "Shang-Chi is pulled back into his family's world and must confront the mysterious Ten Rings organization. The premise sets up the central conflict and gives this entry its own place in the wider Marvel screen universe.",
    whatToNotice: "Notice how the film introduces its world-building through character conflict. The mythology is easier to follow when you track what each character wants and what they are prepared to risk. In particular, keep the focus on the choices and relationships at the centre of Shang-Chi and the Legend of the Ten Rings; they provide the clearest way to understand what changes by the end.",
    biggerPicture: "Introduces Shang-Chi and the mysterious Ten Rings, opening another important corner of the MCU. This title contributes to Marvel's cosmic or alternate-world landscape. Its importance lies in the characters and world rules it establishes, while the exact shape of future crossover connections should not be assumed.",
  },
  "eternals": {
    storyContext: "An ancient group of immortal beings reunites to protect humanity from a hidden threat. The premise sets up the central conflict and gives this entry its own place in the wider Marvel screen universe.",
    whatToNotice: "Notice how the film introduces its world-building through character conflict. The mythology is easier to follow when you track what each character wants and what they are prepared to risk. In particular, keep the focus on the choices and relationships at the centre of Eternals; they provide the clearest way to understand what changes by the end.",
    biggerPicture: "Expands the cosmic mythology of the MCU and introduces Celestials and a major unresolved global event. This title contributes to Marvel's cosmic or alternate-world landscape. Its importance lies in the characters and world rules it establishes, while the exact shape of future crossover connections should not be assumed.",
  },
  "hawkeye": {
    storyContext: "Clint Barton attempts to spend the holidays with his family but becomes involved in a dangerous New York conspiracy. The premise sets up the central conflict and gives this entry its own place in the wider Marvel screen universe.",
    whatToNotice: "Pay attention to the difference between public responsibility and private loyalty. That tension helps explain why alliances form, break or change as the wider Marvel story moves forward. In particular, keep the focus on the choices and relationships at the centre of Hawkeye; they provide the clearest way to understand what changes by the end.",
    biggerPicture: "Introduces Kate Bishop and develops Yelena Belova and the street-level side of the MCU. This title adds a character or institution that matters to the wider Marvel landscape. Its Doomsday relevance should be read through the specific connection noted here, rather than assuming every subplot will carry into the crossover.",
  },
  "moon-knight": {
    storyContext: "Marc Spector becomes entangled in an ancient Egyptian mystery involving gods, identities and supernatural powers. The premise sets up the central conflict and gives this entry its own place in the wider Marvel screen universe.",
    whatToNotice: "Watch the rules the story establishes for its supernatural elements and how the characters respond when those rules are tested. The emotional choices are often more important than the spectacle. In particular, keep the focus on the choices and relationships at the centre of Moon Knight; they provide the clearest way to understand what changes by the end.",
    biggerPicture: "Introduces another supernatural corner of the MCU but has limited direct relevance to the current Doomsday storyline. This entry broadens Marvel's supernatural and magical catalogue. Treat its connection to the larger crossover carefully: some links are thematic or character-based rather than direct plot setup.",
  },
  "ms-marvel": {
    storyContext: "Kamala Khan discovers extraordinary powers and begins learning what it means to be a superhero. The premise sets up the central conflict and gives this entry its own place in the wider Marvel screen universe.",
    whatToNotice: "Notice which relationships shape the protagonist's decisions and how the story changes the way they understand themselves. Those details are more useful to remember than every individual plot beat. In particular, keep the focus on the choices and relationships at the centre of Ms. Marvel; they provide the clearest way to understand what changes by the end.",
    biggerPicture: "Introduces Kamala Khan and connects her story to the wider Marvel superhero world. This title adds context to the wider Marvel catalogue. Its place in a Doomsday watch guide is about the background it provides, not a guarantee that every character or storyline will return.",
  },
  "thor-love-and-thunder": {
    storyContext: "Thor embarks on a journey that brings him face to face with Gorr the God Butcher and a new chapter of his personal life. The premise sets up the central conflict and gives this entry its own place in the wider Marvel screen universe.",
    whatToNotice: "Pay attention to the difference between public responsibility and private loyalty. That tension helps explain why alliances form, break or change as the wider Marvel story moves forward. In particular, keep the focus on the choices and relationships at the centre of Thor: Love and Thunder; they provide the clearest way to understand what changes by the end.",
    biggerPicture: "Provides the latest major chapter of Thor's story before his return in the next Avengers film. This title adds a character or institution that matters to the wider Marvel landscape. Its Doomsday relevance should be read through the specific connection noted here, rather than assuming every subplot will carry into the crossover.",
  },
  "she-hulk-attorney-at-law": {
    storyContext: "Jennifer Walters balances her legal career with her unexpected transformation into a superpowered hero. The premise sets up the central conflict and gives this entry its own place in the wider Marvel screen universe.",
    whatToNotice: "Pay attention to the difference between public responsibility and private loyalty. That tension helps explain why alliances form, break or change as the wider Marvel story moves forward. In particular, keep the focus on the choices and relationships at the centre of She-Hulk: Attorney at Law; they provide the clearest way to understand what changes by the end.",
    biggerPicture: "Expands the wider superhero community and develops the MCU's legal and street-level characters. This title adds a character or institution that matters to the wider Marvel landscape. Its Doomsday relevance should be read through the specific connection noted here, rather than assuming every subplot will carry into the crossover.",
  },
  "werewolf-by-night": {
    storyContext: "A secret group of monster hunters gathers for a dangerous competition following the death of their leader. The premise sets up the central conflict and gives this entry its own place in the wider Marvel screen universe.",
    whatToNotice: "Watch the rules the story establishes for its supernatural elements and how the characters respond when those rules are tested. The emotional choices are often more important than the spectacle. In particular, keep the focus on the choices and relationships at the centre of Werewolf by Night; they provide the clearest way to understand what changes by the end.",
    biggerPicture: "Introduces the supernatural side of the MCU, although it has little direct Doomsday relevance. This entry broadens Marvel's supernatural and magical catalogue. Treat its connection to the larger crossover carefully: some links are thematic or character-based rather than direct plot setup.",
  },
  "black-panther-wakanda-forever": {
    storyContext: "Wakanda faces a new threat while mourning its lost king and preparing for a new generation of leadership. The premise sets up the central conflict and gives this entry its own place in the wider Marvel screen universe.",
    whatToNotice: "Pay attention to the difference between public responsibility and private loyalty. That tension helps explain why alliances form, break or change as the wider Marvel story moves forward. In particular, keep the focus on the choices and relationships at the centre of Black Panther: Wakanda Forever; they provide the clearest way to understand what changes by the end.",
    biggerPicture: "Develops Shuri, M'Baku and Namor, all important characters in the upcoming Avengers conflict. This title adds a character or institution that matters to the wider Marvel landscape. Its Doomsday relevance should be read through the specific connection noted here, rather than assuming every subplot will carry into the crossover.",
  },
  "guardians-of-the-galaxy-holiday-special": {
    storyContext: "The Guardians attempt to give Peter Quill a memorable Christmas celebration on Earth. The premise sets up the central conflict and gives this entry its own place in the wider Marvel screen universe.",
    whatToNotice: "Notice how the film introduces its world-building through character conflict. The mythology is easier to follow when you track what each character wants and what they are prepared to risk. In particular, keep the focus on the choices and relationships at the centre of The Guardians of the Galaxy Holiday Special; they provide the clearest way to understand what changes by the end.",
    biggerPicture: "Provides additional character development for the Guardians before their next cinematic adventure. This title contributes to Marvel's cosmic or alternate-world landscape. Its importance lies in the characters and world rules it establishes, while the exact shape of future crossover connections should not be assumed.",
  },
  "ant-man-and-the-wasp-quantumania": {
    storyContext: "Scott Lang and Hope van Dyne become trapped in the Quantum Realm and encounter a dangerous new enemy. The premise sets up the central conflict and gives this entry its own place in the wider Marvel screen universe.",
    whatToNotice: "Notice how the film introduces its world-building through character conflict. The mythology is easier to follow when you track what each character wants and what they are prepared to risk. In particular, keep the focus on the choices and relationships at the centre of Ant-Man and the Wasp: Quantumania; they provide the clearest way to understand what changes by the end.",
    biggerPicture: "Continues Scott Lang's story and introduces Kang's multiversal conflict, although the wider Kang storyline has since changed direction. This title contributes to Marvel's cosmic or alternate-world landscape. Its importance lies in the characters and world rules it establishes, while the exact shape of future crossover connections should not be assumed.",
  },
  "guardians-of-the-galaxy-vol-3": {
    storyContext: "The Guardians embark on a dangerous mission to save Rocket and confront the secrets of his past. The premise sets up the central conflict and gives this entry its own place in the wider Marvel screen universe.",
    whatToNotice: "Notice how the film introduces its world-building through character conflict. The mythology is easier to follow when you track what each character wants and what they are prepared to risk. In particular, keep the focus on the choices and relationships at the centre of Guardians of the Galaxy Vol. 3; they provide the clearest way to understand what changes by the end.",
    biggerPicture: "Completes a major chapter of the Guardians' story and provides useful background on the cosmic MCU. This title contributes to Marvel's cosmic or alternate-world landscape. Its importance lies in the characters and world rules it establishes, while the exact shape of future crossover connections should not be assumed.",
  },
  "secret-invasion": {
    storyContext: "Nick Fury discovers a secret Skrull infiltration threatening the security of Earth. The premise sets up the central conflict and gives this entry its own place in the wider Marvel screen universe.",
    whatToNotice: "Notice which relationships shape the protagonist's decisions and how the story changes the way they understand themselves. Those details are more useful to remember than every individual plot beat. In particular, keep the focus on the choices and relationships at the centre of Secret Invasion; they provide the clearest way to understand what changes by the end.",
    biggerPicture: "Continues Nick Fury's storyline and the history of the Skrulls. This title adds context to the wider Marvel catalogue. Its place in a Doomsday watch guide is about the background it provides, not a guarantee that every character or storyline will return.",
  },
  "the-marvels": {
    storyContext: "Carol Danvers, Monica Rambeau and Kamala Khan discover that their powers are unexpectedly connected. The premise sets up the central conflict and gives this entry its own place in the wider Marvel screen universe.",
    whatToNotice: "Notice how the film introduces its world-building through character conflict. The mythology is easier to follow when you track what each character wants and what they are prepared to risk. In particular, keep the focus on the choices and relationships at the centre of The Marvels; they provide the clearest way to understand what changes by the end.",
    biggerPicture: "Its ending introduces an alternate reality featuring a familiar X-Men character. This title contributes to Marvel's cosmic or alternate-world landscape. Its importance lies in the characters and world rules it establishes, while the exact shape of future crossover connections should not be assumed.",
  },
  "echo": {
    storyContext: "Maya Lopez returns to her hometown while confronting her family history and her connection to Wilson Fisk. The premise sets up the central conflict and gives this entry its own place in the wider Marvel screen universe.",
    whatToNotice: "Pay attention to the difference between public responsibility and private loyalty. That tension helps explain why alliances form, break or change as the wider Marvel story moves forward. In particular, keep the focus on the choices and relationships at the centre of Echo; they provide the clearest way to understand what changes by the end.",
    biggerPicture: "Develops the street-level Marvel universe and Wilson Fisk's growing influence. This title adds a character or institution that matters to the wider Marvel landscape. Its Doomsday relevance should be read through the specific connection noted here, rather than assuming every subplot will carry into the crossover.",
  },
  "x2-x-men-united": {
    storyContext: "The X-Men must work with an unlikely ally when a military attack threatens mutantkind. The premise sets up the central conflict and gives this entry its own place in the wider Marvel screen universe.",
    whatToNotice: "Pay attention to the competing ideas of protection and freedom. The characters may share a goal, but their different histories lead them toward very different answers about how to achieve it. In particular, keep the focus on the choices and relationships at the centre of X2: X-Men United; they provide the clearest way to understand what changes by the end.",
    biggerPicture: "Introduces Nightcrawler and further develops the original mutant team. This title adds another piece to the Fox-era mutant continuity. Its value for a multiverse watch is often the character history it supplies, not a claim that every event directly drives the MCU plot.",
  },
  "x-men-the-last-stand": {
    storyContext: "The X-Men face a conflict surrounding a controversial mutant cure and Jean Grey's transformation. The premise sets up the central conflict and gives this entry its own place in the wider Marvel screen universe.",
    whatToNotice: "Pay attention to the competing ideas of protection and freedom. The characters may share a goal, but their different histories lead them toward very different answers about how to achieve it. In particular, keep the focus on the choices and relationships at the centre of X-Men: The Last Stand; they provide the clearest way to understand what changes by the end.",
    biggerPicture: "Completes the original trilogy and adds context for the Fox X-Men characters in later multiverse stories. This title adds another piece to the Fox-era mutant continuity. Its value for a multiverse watch is often the character history it supplies, not a claim that every event directly drives the MCU plot.",
  },
  "agatha-all-along": {
    storyContext: "Agatha Harkness attempts to regain her powers by travelling the mysterious Witches' Road. The premise sets up the central conflict and gives this entry its own place in the wider Marvel screen universe.",
    whatToNotice: "Watch the rules the story establishes for its supernatural elements and how the characters respond when those rules are tested. The emotional choices are often more important than the spectacle. In particular, keep the focus on the choices and relationships at the centre of Agatha All Along; they provide the clearest way to understand what changes by the end.",
    biggerPicture: "Expands WandaVision's supernatural storyline and the wider magical side of the MCU. This entry broadens Marvel's supernatural and magical catalogue. Treat its connection to the larger crossover carefully: some links are thematic or character-based rather than direct plot setup.",
  },
  "captain-america-brave-new-world": {
    storyContext: "Sam Wilson faces an international conspiracy after officially taking up the mantle of Captain America. The premise sets up the central conflict and gives this entry its own place in the wider Marvel screen universe.",
    whatToNotice: "Pay attention to the difference between public responsibility and private loyalty. That tension helps explain why alliances form, break or change as the wider Marvel story moves forward. In particular, keep the focus on the choices and relationships at the centre of Captain America: Brave New World; they provide the clearest way to understand what changes by the end.",
    biggerPicture: "Establishes Sam Wilson as Captain America and develops the political situation surrounding the Avengers. This title adds a character or institution that matters to the wider Marvel landscape. Its Doomsday relevance should be read through the specific connection noted here, rather than assuming every subplot will carry into the crossover.",
  },
  "daredevil-born-again-season-1": {
    storyContext: "Matt Murdock returns to his legal career as Wilson Fisk pursues a powerful political position in New York. The premise sets up the central conflict and gives this entry its own place in the wider Marvel screen universe.",
    whatToNotice: "Pay attention to the difference between public responsibility and private loyalty. That tension helps explain why alliances form, break or change as the wider Marvel story moves forward. In particular, keep the focus on the choices and relationships at the centre of Daredevil: Born Again — Season 1; they provide the clearest way to understand what changes by the end.",
    biggerPicture: "Develops the street-level MCU and Wilson Fisk's political influence. This title adds a character or institution that matters to the wider Marvel landscape. Its Doomsday relevance should be read through the specific connection noted here, rather than assuming every subplot will carry into the crossover.",
  },
  "daredevil-born-again-season-2": {
    storyContext: "Matt Murdock continues his fight against Wilson Fisk's expanding control over New York. The premise sets up the central conflict and gives this entry its own place in the wider Marvel screen universe.",
    whatToNotice: "Pay attention to the difference between public responsibility and private loyalty. That tension helps explain why alliances form, break or change as the wider Marvel story moves forward. In particular, keep the focus on the choices and relationships at the centre of Daredevil: Born Again — Season 2; they provide the clearest way to understand what changes by the end.",
    biggerPicture: "Continues the street-level storyline, with limited direct relevance to the multiversal conflict. This title adds a character or institution that matters to the wider Marvel landscape. Its Doomsday relevance should be read through the specific connection noted here, rather than assuming every subplot will carry into the crossover.",
  },
  "thunderbolts": {
    storyContext: "A group of morally complicated operatives find themselves caught in a dangerous mission that changes their future. The premise sets up the central conflict and gives this entry its own place in the wider Marvel screen universe.",
    whatToNotice: "Pay attention to the difference between public responsibility and private loyalty. That tension helps explain why alliances form, break or change as the wider Marvel story moves forward. In particular, keep the focus on the choices and relationships at the centre of Thunderbolts*; they provide the clearest way to understand what changes by the end.",
    biggerPicture: "Introduces the New Avengers team and establishes important characters for the next major crossover. This title adds a character or institution that matters to the wider Marvel landscape. Its Doomsday relevance should be read through the specific connection noted here, rather than assuming every subplot will carry into the crossover.",
  },
  "ironheart": {
    storyContext: "Riri Williams returns to Chicago and discovers a dangerous intersection between advanced technology and magic. The premise sets up the central conflict and gives this entry its own place in the wider Marvel screen universe.",
    whatToNotice: "Watch the rules the story establishes for its supernatural elements and how the characters respond when those rules are tested. The emotional choices are often more important than the spectacle. In particular, keep the focus on the choices and relationships at the centre of Ironheart; they provide the clearest way to understand what changes by the end.",
    biggerPicture: "Continues the technological legacy of Tony Stark and introduces the magical side of Riri's story. This entry broadens Marvel's supernatural and magical catalogue. Treat its connection to the larger crossover carefully: some links are thematic or character-based rather than direct plot setup.",
  },
  "the-fantastic-four-first-steps": {
    storyContext: "Marvel's First Family faces a cosmic threat while protecting their alternate-reality Earth. The premise sets up the central conflict and gives this entry its own place in the wider Marvel screen universe.",
    whatToNotice: "Notice how the film introduces its world-building through character conflict. The mythology is easier to follow when you track what each character wants and what they are prepared to risk. In particular, keep the focus on the choices and relationships at the centre of The Fantastic Four: First Steps; they provide the clearest way to understand what changes by the end.",
    biggerPicture: "Introduces the Fantastic Four and establishes their connection to the upcoming Avengers story. This title contributes to Marvel's cosmic or alternate-world landscape. Its importance lies in the characters and world rules it establishes, while the exact shape of future crossover connections should not be assumed.",
  },
  "spider-man-brand-new-day": {
    storyContext: "Peter Parker navigates a new chapter of life following the events of No Way Home. The premise sets up the central conflict and gives this entry its own place in the wider Marvel screen universe.",
    whatToNotice: "Look at how the story treats responsibility, secrecy and the people caught around the hero. These personal stakes are what make later cross-universe encounters feel like meetings between lived-in characters rather than simple cameos. In particular, keep the focus on the choices and relationships at the centre of Spider-Man: Brand New Day; they provide the clearest way to understand what changes by the end.",
    biggerPicture: "Provides the latest chapter of Peter Parker's story before the next Avengers event. Notice how the film builds its own corner of the Spider-Man mythos instead of assuming it belongs to the MCU. That distinction helps keep the different continuities straight when they eventually overlap.",
  },
  "visionquest": {
    storyContext: "Vision embarks on a new journey exploring identity, memory and his place in the world. The premise sets up the central conflict and gives this entry its own place in the wider Marvel screen universe.",
    whatToNotice: "Notice which relationships shape the protagonist's decisions and how the story changes the way they understand themselves. Those details are more useful to remember than every individual plot beat. In particular, keep the focus on the choices and relationships at the centre of VisionQuest; they provide the clearest way to understand what changes by the end.",
    biggerPicture: "Continues the Vision storyline and connects the events of WandaVision to the next Avengers event. This title adds context to the wider Marvel catalogue. Its place in a Doomsday watch guide is about the background it provides, not a guarantee that every character or storyline will return.",
  },
  "spider-man-3": {
    storyContext: "Peter faces personal conflicts and new enemies including Sandman and Venom. The premise sets up the central conflict and gives this entry its own place in the wider Marvel screen universe.",
    whatToNotice: "Look at how the story treats responsibility, secrecy and the people caught around the hero. These personal stakes are what make later cross-universe encounters feel like meetings between lived-in characters rather than simple cameos. In particular, keep the focus on the choices and relationships at the centre of Spider-Man 3; they provide the clearest way to understand what changes by the end.",
    biggerPicture: "Provides background for Sandman and the original Venom character. Notice how the film builds its own corner of the Spider-Man mythos instead of assuming it belongs to the MCU. That distinction helps keep the different continuities straight when they eventually overlap.",
  },
  "amazing-spider-man": {
    storyContext: "Andrew Garfield's Peter Parker investigates the mystery surrounding his parents. The premise sets up the central conflict and gives this entry its own place in the wider Marvel screen universe.",
    whatToNotice: "Look at how the story treats responsibility, secrecy and the people caught around the hero. These personal stakes are what make later cross-universe encounters feel like meetings between lived-in characters rather than simple cameos. In particular, keep the focus on the choices and relationships at the centre of The Amazing Spider-Man; they provide the clearest way to understand what changes by the end.",
    biggerPicture: "Introduces the Peter Parker who later returns in No Way Home. Notice how the film builds its own corner of the Spider-Man mythos instead of assuming it belongs to the MCU. That distinction helps keep the different continuities straight when they eventually overlap.",
  },
  "amazing-spider-man-2": {
    storyContext: "Peter faces Electro while dealing with the consequences of his relationship with Gwen Stacy. The premise sets up the central conflict and gives this entry its own place in the wider Marvel screen universe.",
    whatToNotice: "Look at how the story treats responsibility, secrecy and the people caught around the hero. These personal stakes are what make later cross-universe encounters feel like meetings between lived-in characters rather than simple cameos. In particular, keep the focus on the choices and relationships at the centre of The Amazing Spider-Man 2; they provide the clearest way to understand what changes by the end.",
    biggerPicture: "Provides important emotional context for Andrew Garfield's return in No Way Home. Notice how the film builds its own corner of the Spider-Man mythos instead of assuming it belongs to the MCU. That distinction helps keep the different continuities straight when they eventually overlap.",
  },
  "venom": {
    storyContext: "Journalist Eddie Brock becomes bonded with an alien symbiote. The premise sets up the central conflict and gives this entry its own place in the wider Marvel screen universe.",
    whatToNotice: "Look at how the story treats responsibility, secrecy and the people caught around the hero. These personal stakes are what make later cross-universe encounters feel like meetings between lived-in characters rather than simple cameos. In particular, keep the focus on the choices and relationships at the centre of Venom; they provide the clearest way to understand what changes by the end.",
    biggerPicture: "Introduces the Venom character and his separate cinematic universe. Notice how the film builds its own corner of the Spider-Man mythos instead of assuming it belongs to the MCU. That distinction helps keep the different continuities straight when they eventually overlap.",
  },
  "venom-the-last-dance": {
    storyContext: "Eddie and Venom face a threat that puts their existence at risk. The premise sets up the central conflict and gives this entry its own place in the wider Marvel screen universe.",
    whatToNotice: "Look at how the story treats responsibility, secrecy and the people caught around the hero. These personal stakes are what make later cross-universe encounters feel like meetings between lived-in characters rather than simple cameos. In particular, keep the focus on the choices and relationships at the centre of Venom: The Last Dance; they provide the clearest way to understand what changes by the end.",
    biggerPicture: "Completes the main Venom trilogy. Notice how the film builds its own corner of the Spider-Man mythos instead of assuming it belongs to the MCU. That distinction helps keep the different continuities straight when they eventually overlap.",
  },
  "morbius": {
    storyContext: "Scientist Michael Morbius transforms himself while attempting to cure a rare blood condition. The premise sets up the central conflict and gives this entry its own place in the wider Marvel screen universe.",
    whatToNotice: "Look at how the story treats responsibility, secrecy and the people caught around the hero. These personal stakes are what make later cross-universe encounters feel like meetings between lived-in characters rather than simple cameos. In particular, keep the focus on the choices and relationships at the centre of Morbius; they provide the clearest way to understand what changes by the end.",
    biggerPicture: "The current guide does not establish a direct Doomsday connection for Morbius. It is included as an optional piece of the wider Marvel catalogue, so approach it as character or universe context rather than required crossover setup.",
  },
  "madame-web": {
    storyContext: "Cassandra Webb discovers her ability to see possible futures. The premise sets up the central conflict and gives this entry its own place in the wider Marvel screen universe.",
    whatToNotice: "Look at how the story treats responsibility, secrecy and the people caught around the hero. These personal stakes are what make later cross-universe encounters feel like meetings between lived-in characters rather than simple cameos. In particular, keep the focus on the choices and relationships at the centre of Madame Web; they provide the clearest way to understand what changes by the end.",
    biggerPicture: "The current guide does not establish a direct Doomsday connection for Madame Web. It is included as an optional piece of the wider Marvel catalogue, so approach it as character or universe context rather than required crossover setup.",
  },
  "kraven-the-hunter": {
    storyContext: "Sergei Kravinoff develops extraordinary abilities and becomes a formidable hunter. The premise sets up the central conflict and gives this entry its own place in the wider Marvel screen universe.",
    whatToNotice: "Look at how the story treats responsibility, secrecy and the people caught around the hero. These personal stakes are what make later cross-universe encounters feel like meetings between lived-in characters rather than simple cameos. In particular, keep the focus on the choices and relationships at the centre of Kraven the Hunter; they provide the clearest way to understand what changes by the end.",
    biggerPicture: "The current guide does not establish a direct Doomsday connection for Kraven the Hunter. It is included as an optional piece of the wider Marvel catalogue, so approach it as character or universe context rather than required crossover setup.",
  },
  "x-men-first-class": {
    storyContext: "Young Charles Xavier and Erik Lehnsherr form an alliance while mutantkind faces a global crisis. The premise sets up the central conflict and gives this entry its own place in the wider Marvel screen universe.",
    whatToNotice: "Pay attention to the competing ideas of protection and freedom. The characters may share a goal, but their different histories lead them toward very different answers about how to achieve it. In particular, keep the focus on the choices and relationships at the centre of X-Men: First Class; they provide the clearest way to understand what changes by the end.",
    biggerPicture: "Provides background on the younger versions of Professor X and Magneto. This title adds another piece to the Fox-era mutant continuity. Its value for a multiverse watch is often the character history it supplies, not a claim that every event directly drives the MCU plot.",
  },
  "x-men-origins-wolverine": {
    storyContext: "Explores Logan's past and the events that shaped him into Wolverine. The premise sets up the central conflict and gives this entry its own place in the wider Marvel screen universe.",
    whatToNotice: "Pay attention to the competing ideas of protection and freedom. The characters may share a goal, but their different histories lead them toward very different answers about how to achieve it. In particular, keep the focus on the choices and relationships at the centre of X-Men Origins: Wolverine; they provide the clearest way to understand what changes by the end.",
    biggerPicture: "Provides background on Wolverine and the earlier Fox mutant universe. This title adds another piece to the Fox-era mutant continuity. Its value for a multiverse watch is often the character history it supplies, not a claim that every event directly drives the MCU plot.",
  },
  "the-wolverine": {
    storyContext: "Logan travels to Japan and confronts a dangerous chapter from his past. The premise sets up the central conflict and gives this entry its own place in the wider Marvel screen universe.",
    whatToNotice: "Pay attention to the competing ideas of protection and freedom. The characters may share a goal, but their different histories lead them toward very different answers about how to achieve it. In particular, keep the focus on the choices and relationships at the centre of The Wolverine; they provide the clearest way to understand what changes by the end.",
    biggerPicture: "Its post-credits scene sets up Days of Future Past. This title adds another piece to the Fox-era mutant continuity. Its value for a multiverse watch is often the character history it supplies, not a claim that every event directly drives the MCU plot.",
  },
  "x-men-apocalypse": {
    storyContext: "The younger X-Men face Apocalypse, an ancient mutant determined to reshape the world. The premise sets up the central conflict and gives this entry its own place in the wider Marvel screen universe.",
    whatToNotice: "Pay attention to the competing ideas of protection and freedom. The characters may share a goal, but their different histories lead them toward very different answers about how to achieve it. In particular, keep the focus on the choices and relationships at the centre of X-Men: Apocalypse; they provide the clearest way to understand what changes by the end.",
    biggerPicture: "Expands the younger Fox X-Men timeline. This title adds another piece to the Fox-era mutant continuity. Its value for a multiverse watch is often the character history it supplies, not a claim that every event directly drives the MCU plot.",
  },
  "dark-phoenix": {
    storyContext: "Jean Grey struggles to control a powerful cosmic force within herself. The premise sets up the central conflict and gives this entry its own place in the wider Marvel screen universe.",
    whatToNotice: "Notice which relationships shape the protagonist's decisions and how the story changes the way they understand themselves. Those details are more useful to remember than every individual plot beat. In particular, keep the focus on the choices and relationships at the centre of Dark Phoenix; they provide the clearest way to understand what changes by the end.",
    biggerPicture: "Concludes the main Fox X-Men film series. This title adds context to the wider Marvel catalogue. Its place in a Doomsday watch guide is about the background it provides, not a guarantee that every character or storyline will return.",
  },
  "deadpool": {
    storyContext: "Wade Wilson becomes Deadpool following a dangerous experimental treatment. The premise sets up the central conflict and gives this entry its own place in the wider Marvel screen universe.",
    whatToNotice: "Pay attention to the competing ideas of protection and freedom. The characters may share a goal, but their different histories lead them toward very different answers about how to achieve it. In particular, keep the focus on the choices and relationships at the centre of Deadpool; they provide the clearest way to understand what changes by the end.",
    biggerPicture: "Introduces the version of Deadpool who later enters the multiversal story. This title adds another piece to the Fox-era mutant continuity. Its value for a multiverse watch is often the character history it supplies, not a claim that every event directly drives the MCU plot.",
  },
  "blade-ii": {
    storyContext: "Blade joins forces with an unlikely group to fight a new vampire threat. The premise sets up the central conflict and gives this entry its own place in the wider Marvel screen universe.",
    whatToNotice: "Watch the rules the story establishes for its supernatural elements and how the characters respond when those rules are tested. The emotional choices are often more important than the spectacle. In particular, keep the focus on the choices and relationships at the centre of Blade II; they provide the clearest way to understand what changes by the end.",
    biggerPicture: "Continues the original Blade trilogy. This entry broadens Marvel's supernatural and magical catalogue. Treat its connection to the larger crossover carefully: some links are thematic or character-based rather than direct plot setup.",
  },
  "blade-trinity": {
    storyContext: "Blade faces a new generation of vampire enemies led by Dracula. The premise sets up the central conflict and gives this entry its own place in the wider Marvel screen universe.",
    whatToNotice: "Watch the rules the story establishes for its supernatural elements and how the characters respond when those rules are tested. The emotional choices are often more important than the spectacle. In particular, keep the focus on the choices and relationships at the centre of Blade: Trinity; they provide the clearest way to understand what changes by the end.",
    biggerPicture: "Completes the original Blade trilogy. This entry broadens Marvel's supernatural and magical catalogue. Treat its connection to the larger crossover carefully: some links are thematic or character-based rather than direct plot setup.",
  },
  "fantastic-four-2005": {
    storyContext: "Four astronauts gain extraordinary abilities after exposure to cosmic radiation. The premise sets up the central conflict and gives this entry its own place in the wider Marvel screen universe.",
    whatToNotice: "Notice how the film introduces its world-building through character conflict. The mythology is easier to follow when you track what each character wants and what they are prepared to risk. In particular, keep the focus on the choices and relationships at the centre of Fantastic Four; they provide the clearest way to understand what changes by the end.",
    biggerPicture: "Features Chris Evans as Johnny Storm, who makes a memorable appearance in Deadpool & Wolverine. This title contributes to Marvel's cosmic or alternate-world landscape. Its importance lies in the characters and world rules it establishes, while the exact shape of future crossover connections should not be assumed.",
  },
  "fantastic-four-rise-of-the-silver-surfer": {
    storyContext: "The Fantastic Four face the Silver Surfer and a threat connected to Galactus. The premise sets up the central conflict and gives this entry its own place in the wider Marvel screen universe.",
    whatToNotice: "Notice how the film introduces its world-building through character conflict. The mythology is easier to follow when you track what each character wants and what they are prepared to risk. In particular, keep the focus on the choices and relationships at the centre of Fantastic Four: Rise of the Silver Surfer; they provide the clearest way to understand what changes by the end.",
    biggerPicture: "Provides context for earlier Fantastic Four adaptations. This title contributes to Marvel's cosmic or alternate-world landscape. Its importance lies in the characters and world rules it establishes, while the exact shape of future crossover connections should not be assumed.",
  },
  "daredevil-2003": {
    storyContext: "Matt Murdock uses his heightened senses to fight crime as Daredevil. The premise sets up the central conflict and gives this entry its own place in the wider Marvel screen universe.",
    whatToNotice: "Pay attention to the difference between public responsibility and private loyalty. That tension helps explain why alliances form, break or change as the wider Marvel story moves forward. In particular, keep the focus on the choices and relationships at the centre of Daredevil; they provide the clearest way to understand what changes by the end.",
    biggerPicture: "Features Ben Affleck's Daredevil and Jennifer Garner's Elektra. This title adds a character or institution that matters to the wider Marvel landscape. Its Doomsday relevance should be read through the specific connection noted here, rather than assuming every subplot will carry into the crossover.",
  },
  "elektra": {
    storyContext: "Elektra becomes involved in a mission protecting a young girl from a dangerous organisation. The premise sets up the central conflict and gives this entry its own place in the wider Marvel screen universe.",
    whatToNotice: "Notice which relationships shape the protagonist's decisions and how the story changes the way they understand themselves. Those details are more useful to remember than every individual plot beat. In particular, keep the focus on the choices and relationships at the centre of Elektra; they provide the clearest way to understand what changes by the end.",
    biggerPicture: "Jennifer Garner's Elektra returns in Deadpool & Wolverine. This title adds context to the wider Marvel catalogue. Its place in a Doomsday watch guide is about the background it provides, not a guarantee that every character or storyline will return.",
  },
  "ghost-rider": {
    storyContext: "Johnny Blaze becomes a supernatural bounty hunter after making a deal with the Devil. The premise sets up the central conflict and gives this entry its own place in the wider Marvel screen universe.",
    whatToNotice: "Watch the rules the story establishes for its supernatural elements and how the characters respond when those rules are tested. The emotional choices are often more important than the spectacle. In particular, keep the focus on the choices and relationships at the centre of Ghost Rider; they provide the clearest way to understand what changes by the end.",
    biggerPicture: "An independent Marvel adaptation with no established direct Doomsday connection. This entry broadens Marvel's supernatural and magical catalogue. Treat its connection to the larger crossover carefully: some links are thematic or character-based rather than direct plot setup.",
  },
  "ghost-rider-spirit-of-vengeance": {
    storyContext: "Johnny Blaze returns to confront a supernatural threat and protect a young boy. The premise sets up the central conflict and gives this entry its own place in the wider Marvel screen universe.",
    whatToNotice: "Watch the rules the story establishes for its supernatural elements and how the characters respond when those rules are tested. The emotional choices are often more important than the spectacle. In particular, keep the focus on the choices and relationships at the centre of Ghost Rider: Spirit of Vengeance; they provide the clearest way to understand what changes by the end.",
    biggerPicture: "Continues the original Ghost Rider film universe. This entry broadens Marvel's supernatural and magical catalogue. Treat its connection to the larger crossover carefully: some links are thematic or character-based rather than direct plot setup.",
  },
  "the-punisher": {
    storyContext: "Former Marine Frank Castle seeks revenge against the criminal organisation responsible for his family's death. The premise sets up the central conflict and gives this entry its own place in the wider Marvel screen universe.",
    whatToNotice: "Pay attention to the difference between public responsibility and private loyalty. That tension helps explain why alliances form, break or change as the wider Marvel story moves forward. In particular, keep the focus on the choices and relationships at the centre of The Punisher; they provide the clearest way to understand what changes by the end.",
    biggerPicture: "The current guide does not establish a direct Doomsday connection for The Punisher. It is included as an optional piece of the wider Marvel catalogue, so approach it as character or universe context rather than required crossover setup.",
  },
};

export function getMovieGuideNote(movieId: string) {
  return movieGuideNotes[movieId];
}
