const TRIP_DATA = {
  meta: {
    title: "UK Trip 2026",
    duration: "7 Days",
    travelers: ["Dad", "Luciano"],
    status: "Planning"
  },

  ideas: [
    {
      id: 1,
      title: "Harry Potter Studio Tour",
      location: "Leavesden, Watford",
      category: "harry-potter",
      description: "Walk through the actual sets from the films. See the Great Hall, Diagon Alley, Dumbledore's office, and ride a broomstick in front of a green screen. Butterbeer included.",
      image: "https://images.unsplash.com/photo-1551269901-5c5e14c25df7?w=800",
      video: "https://www.youtube.com/embed/BLikPLsezKY",
      duration: "4-5 hours",
      price: "£53 per person",
      status: "idea",
      comments: []
    },
    {
      id: 2,
      title: "Abbey Road Crossing",
      location: "St John's Wood, London",
      category: "music",
      description: "Recreate the iconic Beatles album cover at the most famous crosswalk in music history. The studio where they recorded is right there. Free to visit, priceless photo op.",
      image: "https://images.unsplash.com/photo-1549880338-65ddcdfd017b?w=800",
      video: "https://www.youtube.com/embed/oolpPmuK2I8",
      duration: "30 min",
      price: "Free",
      status: "idea",
      comments: []
    },
    {
      id: 3,
      title: "West End Show",
      location: "West End, London",
      category: "theater",
      description: "London's West End is the Broadway of the UK. Top picks: Hamilton, The Lion King, Back to the Future, or Starlight Express. Evening shows run about 2.5 hours.",
      image: "https://images.unsplash.com/photo-1503095396549-807759245b35?w=800",
      video: "https://www.youtube.com/embed/DSCKfXpEDeM",
      duration: "Evening (2.5 hrs)",
      price: "£40-120 per person",
      status: "idea",
      comments: []
    },
    {
      id: 4,
      title: "The British Museum",
      location: "Bloomsbury, London",
      category: "culture",
      description: "The Rosetta Stone, Egyptian mummies, the Parthenon sculptures, samurai armor. Eight million objects spanning two million years of history. And it's free.",
      image: "https://images.unsplash.com/photo-1574958269340-fa927503f3dd?w=800",
      video: "https://www.youtube.com/embed/0gNajlBRDRA",
      duration: "2-3 hours",
      price: "Free",
      status: "idea",
      comments: []
    },
    {
      id: 5,
      title: "Camden Market & Live Music",
      location: "Camden Town, London",
      category: "music",
      description: "Street food from around the world, vintage shops, and live music venues everywhere. Camden is where punk was born and indie bands still play every night. Pure London energy.",
      image: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=800",
      video: "https://www.youtube.com/embed/sI0vtqxoG1k",
      duration: "Half day",
      price: "Free entry, food £5-15",
      status: "idea",
      comments: []
    }
  ],

  itinerary: [
    { day: 1, label: "Day 1 - Arrival", title: "Land in London", description: "Settle in, explore the neighborhood, first fish & chips.", status: "placeholder" },
    { day: 2, label: "Day 2 - Magic", title: "Harry Potter Studio Tour", description: "Full day at Leavesden. Butterbeer. Wand shopping.", status: "locked" },
    { day: 3, label: "Day 3 - Music", title: "Beatles & Camden", description: "Abbey Road in the morning, Camden Market and live music in the afternoon.", status: "locked" },
    { day: 4, label: "Day 4 - Open", title: "TBD", description: "Waiting for your picks from the Hype Board.", status: "open" },
    { day: 5, label: "Day 5 - Open", title: "TBD", description: "Waiting for your picks from the Hype Board.", status: "open" },
    { day: 6, label: "Day 6 - Show Night", title: "West End Show", description: "Daytime exploring, evening at the theater.", status: "locked" },
    { day: 7, label: "Day 7 - Farewell", title: "Last Day", description: "Final wandering, souvenir shopping, and heading to the airport.", status: "placeholder" }
  ]
};

const CATEGORY_ICONS = {
  "harry-potter": "⚡",
  "music": "🎸",
  "theater": "🎭",
  "culture": "🏛️"
};
