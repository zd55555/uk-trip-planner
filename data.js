const TRIP = {
  meta: {
    title: "Luciano UK",
    budget: 1400,
    currency: "USD",
    travelers: ["Dad", "Luciano"],
    dates: "September or October 2026",
    route: "Boston > London (LHR) > Edinburgh (EDI) > Boston",
    status: "Planning"
  },

  paths: [
    {
      id: 1,
      name: "The Calm One",
      tagline: "No brutal days. Deep London time.",
      gain: "4 nights in London, relaxed pace, both Dover and Oxford as easy day trips",
      lose: "Alnwick Castle (the actual Hogwarts exterior, broomstick training in the courtyard)",
      budget: 1400,
      tradeoff: "You get a calmer trip but miss the castle where Harry learned to fly.",
      cities: ["london", "dover", "oxford", "liverpool", "edinburgh"],
      days: [
        { day: 1, city: "london", title: "London Arrival + Platform 9¾", description: "Land at Heathrow, transit to central London, walk to King's Cross for the trolley photo. Early dinner, early sleep.", activities: ["platform-934"] },
        { day: 2, city: "london", title: "HP Studio Tour", description: "Full day at Warner Bros Leavesden. The Great Hall, Diagon Alley, Butterbeer, broomsticks. Afternoon back in London.", activities: ["hp-studio-tour"] },
        { day: 3, city: "dover", title: "Dover Day Trip", description: "High-speed train to Dover. Castle in the morning (don't miss the Secret Wartime Tunnels), White Cliffs walk in the afternoon.", activities: ["dover-castle", "white-cliffs"] },
        { day: 4, city: "oxford", title: "Oxford Day Trip", description: "Train to Oxford. Christ Church (Hogwarts dining hall), Bodleian Library (Hogwarts library), and the Eagle and Child pub where Tolkien and C.S. Lewis used to drink.", activities: ["christ-church", "bodleian", "eagle-child"] },
        { day: 5, city: "liverpool", title: "London to Liverpool", description: "Morning train to Liverpool. Beatles Story Museum at Albert Dock, then the Cavern Club for live music.", activities: ["beatles-story", "cavern-club"] },
        { day: 6, city: "edinburgh", title: "Liverpool to Edinburgh, Fly Home", description: "Morning train to Edinburgh (3.5 hrs). Edinburgh Castle, Royal Mile walk, tram to airport, evening flight home.", activities: ["edinburgh-castle"] }
      ]
    },
    {
      id: 2,
      name: "The Ambitious One",
      tagline: "Get everything. One tough day.",
      gain: "Alnwick Castle (Hogwarts exterior, broomstick training), plus Dover and Oxford",
      lose: "Day 4 is a sprint: Oxford morning then train to Liverpool afternoon. Beatles Story last entry is 4pm on weekdays (5pm Saturdays and school holidays).",
      budget: 1450,
      tradeoff: "You see everything, but Day 4 is a real grind and you're $50 over budget.",
      cities: ["london", "dover", "oxford", "liverpool", "alnwick", "edinburgh"],
      days: [
        { day: 1, city: "london", title: "London Arrival + Platform 9¾", description: "Land at Heathrow, transit to central London, walk to King's Cross for the trolley photo.", activities: ["platform-934"] },
        { day: 2, city: "london", title: "HP Studio Tour", description: "Full day at Warner Bros Leavesden. The Great Hall, Diagon Alley, Butterbeer, broomsticks.", activities: ["hp-studio-tour"] },
        { day: 3, city: "dover", title: "Dover Day Trip", description: "High-speed train to Dover. Castle and Secret Wartime Tunnels in the morning, White Cliffs in the afternoon.", activities: ["dover-castle", "white-cliffs"] },
        { day: 4, city: "oxford", title: "Oxford Morning, Liverpool Afternoon", description: "Early train to Oxford (1 hr). Christ Church and Bodleian 9am-1pm. Bag storage at station. Train to Liverpool via Birmingham (~2.5 hrs). Beatles afternoon.", activities: ["christ-church", "bodleian", "beatles-story", "cavern-club"] },
        { day: 5, city: "liverpool", title: "Liverpool to Alnwick to Edinburgh", description: "Train to Alnmouth (3.5 hrs). Alnwick Castle: Hogwarts exterior, broomstick training. Train to Edinburgh (1.5 hrs).", activities: ["alnwick-castle"] },
        { day: 6, city: "edinburgh", title: "Edinburgh, Fly Home", description: "Edinburgh Castle, Royal Mile, tram to airport, evening flight.", activities: ["edinburgh-castle"] }
      ]
    },
    {
      id: 3,
      name: "The Roomy One",
      tagline: "7 days. Everything. No rush.",
      gain: "All of Path 2 but with breathing room. An extra day to decompress.",
      lose: "One more night of accommodation and meals. ~$200 over budget.",
      budget: 1600,
      tradeoff: "Solves every constraint, but costs $200 more than the cap.",
      cities: ["london", "dover", "oxford", "liverpool", "alnwick", "edinburgh"],
      days: [
        { day: 1, city: "london", title: "London Arrival + Platform 9¾", description: "Land at Heathrow, transit to central London, walk to King's Cross for the trolley photo.", activities: ["platform-934"] },
        { day: 2, city: "london", title: "HP Studio Tour", description: "Full day at Warner Bros Leavesden.", activities: ["hp-studio-tour"] },
        { day: 3, city: "dover", title: "Dover Day Trip", description: "Castle, tunnels, White Cliffs.", activities: ["dover-castle", "white-cliffs"] },
        { day: 4, city: "oxford", title: "Oxford Day Trip", description: "Christ Church, Bodleian, Eagle and Child. Full day, no rush.", activities: ["christ-church", "bodleian", "eagle-child"] },
        { day: 5, city: "liverpool", title: "London to Liverpool", description: "Morning train. Beatles Story, Cavern Club, maybe the Magical Mystery Tour bus.", activities: ["beatles-story", "cavern-club"] },
        { day: 6, city: "alnwick", title: "Liverpool to Alnwick to Edinburgh", description: "Train to Alnmouth, Alnwick Castle, train to Edinburgh.", activities: ["alnwick-castle"] },
        { day: 7, city: "edinburgh", title: "Edinburgh, Fly Home", description: "Edinburgh Castle, Royal Mile, tram to airport, evening flight.", activities: ["edinburgh-castle"] }
      ]
    }
  ],

  activities: [
    // Wizarding World
    {
      id: "platform-934",
      title: "Platform 9¾, King's Cross",
      category: "harry-potter",
      location: "King's Cross Station, London",
      price: { amount: 0, currency: "GBP", per: "person", note: "Free" },
      duration: "30 min (10-30 min wait)",
      description: "The trolley disappearing into the wall. There's a photographer and a shop, but you can skip both and take your own photo for free. Opens 8am-10pm.",
      image: "https://images.unsplash.com/photo-1551269901-5c5e14c25df7?w=800",
      video: "n73Go0Xz8bY",
      tips: "Skip the paid photo service. Have your own camera ready.",
      inPaths: [1, 2, 3],
      comments: []
    },
    {
      id: "hp-studio-tour",
      title: "Warner Bros Studio Tour",
      category: "harry-potter",
      location: "Leavesden, Watford",
      price: { amount: 145, currency: "USD", per: "both", note: "~£58.50 adult + £48 child. BOOK NOW." },
      duration: "4-5 hours",
      description: "The Great Hall, Diagon Alley, Dumbledore's office, the Forbidden Forest, Platform 9¾ set, broomstick green screen. Butterbeer in the food hall. Dark Arts takeover runs Sept 16 to Nov 8, 2026.",
      image: "https://images.unsplash.com/photo-1551269901-5c5e14c25df7?w=800",
      video: "tDuK0dttDtY",
      tips: "Free shuttle from Watford Junction. Bring your own food. Set a souvenir budget BEFORE entering the gift shop. Book 3-6 months ahead or you won't get in.",
      inPaths: [1, 2, 3],
      urgent: true,
      comments: []
    },
    {
      id: "christ-church",
      title: "Christ Church College",
      category: "harry-potter",
      location: "Oxford",
      price: { amount: 36, currency: "USD", per: "both", note: "~£18 adult + £17 student" },
      duration: "1.5 hours",
      description: "The dining hall that inspired the Hogwarts Great Hall. The staircase where McGonagall greets the first years was filmed here. The meadow behind the college is a bonus.",
      image: "https://images.unsplash.com/photo-1590076215667-875c2d473580?w=800",
      video: "n73Go0Xz8bY",
      tips: "Opens 10am. Go early to beat tour groups.",
      inPaths: [1, 2, 3],
      comments: []
    },
    {
      id: "bodleian",
      title: "Bodleian Library + Divinity School",
      category: "harry-potter",
      location: "Oxford",
      price: { amount: 20, currency: "USD", per: "both", note: "~£10-15 for guided tour" },
      duration: "1 hour",
      description: "Duke Humfrey's Library is the Hogwarts library. The Divinity School is the Hogwarts infirmary. You need the guided tour to see Duke Humfrey's (the self-guided tour only covers the Divinity School).",
      image: "https://images.unsplash.com/photo-1590076215667-875c2d473580?w=800",
      video: "n73Go0Xz8bY",
      tips: "Book the guided tour, not self-guided, if you want to see the actual library from the films.",
      inPaths: [1, 2, 3],
      comments: []
    },
    {
      id: "eagle-child",
      title: "The Eagle and Child Pub",
      category: "culture",
      location: "Oxford",
      price: { amount: 0, currency: "GBP", per: "person", note: "Free to visit (food/drinks extra)" },
      duration: "30 min",
      description: "The pub where J.R.R. Tolkien and C.S. Lewis met weekly with the Inklings to read drafts of The Lord of the Rings and Narnia to each other. Still a working pub.",
      image: "https://images.unsplash.com/photo-1590076215667-875c2d473580?w=800",
      video: "",
      tips: "The back room (the Rabbit Room) is where they actually sat.",
      inPaths: [1, 3],
      comments: []
    },
    {
      id: "alnwick-castle",
      title: "Alnwick Castle",
      category: "harry-potter",
      location: "Alnwick, Northumberland",
      price: { amount: 38, currency: "USD", per: "both", note: "~£20.50 adult + £10.75 child (20% off with public transit)" },
      duration: "3-4 hours",
      description: "The actual Hogwarts exterior from the first two films. The courtyard where Harry learned to fly a broomstick. They still run broomstick training sessions in that courtyard (free with ticket, book a time slot).",
      image: "https://images.unsplash.com/photo-1533154683836-84ea7a0bc310?w=800",
      video: "n73Go0Xz8bY",
      tips: "Closes for the season around October 31. Verify 2026 dates before booking. 20% off admission if you arrive by public transit.",
      inPaths: [2, 3],
      comments: []
    },
    // Beatles
    {
      id: "beatles-story",
      title: "The Beatles Story Museum",
      category: "beatles",
      location: "Albert Dock, Liverpool",
      price: { amount: 42, currency: "USD", per: "both", note: "~£20 adult + £11 child" },
      duration: "2-3 hours",
      description: "Recreation of the Cavern Club, John Lennon's original glasses, George's first guitar, a white room recreation of the Imagine video. Audio guide narrated by John Lennon's sister.",
      image: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=800",
      video: "Rjs_d0f8S7A",
      tips: "Last entry 4pm weekdays, 5pm Saturdays and school holidays. Book online.",
      inPaths: [1, 2, 3],
      comments: []
    },
    {
      id: "cavern-club",
      title: "The Cavern Club",
      category: "beatles",
      location: "Mathew Street, Liverpool",
      price: { amount: 14, currency: "USD", per: "both", note: "~£5 adult + varies for evening. Cashless only." },
      duration: "1-2 hours",
      description: "The club where the Beatles played 292 times before they got famous. Live music every single day. The brick arches and stage are the real deal.",
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800",
      video: "XxRtnVXejlM",
      tips: "Cashless only. Afternoon sets are less crowded. Luciano can get in until 8pm with an adult. Check rules for specific evening shows.",
      inPaths: [1, 2, 3],
      comments: []
    },
    {
      id: "magical-mystery-tour",
      title: "Magical Mystery Tour Bus",
      category: "beatles",
      location: "Liverpool city centre",
      price: { amount: 50, currency: "USD", per: "both", note: "~£25 each" },
      duration: "2 hours",
      description: "Bus tour hitting Penny Lane, Strawberry Field, the childhood homes of Lennon and McCartney. A guide who knows all the stories.",
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800",
      video: "S-rB0pHI9fU",
      tips: "Optional add-on. Covers ground you can't easily walk.",
      inPaths: [1, 2, 3],
      optional: true,
      comments: []
    },
    {
      id: "mendips-forthlin",
      title: "Mendips + 20 Forthlin Road",
      category: "beatles",
      location: "Liverpool suburbs",
      price: { amount: 0, currency: "USD", per: "both", note: "Price TBD, book through National Trust" },
      duration: "2-3 hours",
      description: "The actual childhood homes of John Lennon (Mendips) and Paul McCartney (20 Forthlin Road). National Trust mini-bus tour from city centre. The houses are preserved as they were.",
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800",
      video: "",
      tips: "Books out. Check National Trust website early.",
      inPaths: [1, 2, 3],
      optional: true,
      comments: []
    },
    // Castles
    {
      id: "dover-castle",
      title: "Dover Castle",
      category: "castle",
      location: "Dover, Kent",
      price: { amount: 41, currency: "USD", per: "both", note: "~£22 adult + £11 child online. 20% off car-free." },
      duration: "4 hours",
      description: "Medieval keep, a Roman lighthouse that's nearly 2,000 years old, and the Secret Wartime Tunnels where they planned the Dunkirk evacuation. Book the tunnel tour on arrival, slots fill fast.",
      image: "https://images.unsplash.com/photo-1533154683836-84ea7a0bc310?w=800",
      video: "",
      tips: "High-speed train from St Pancras to Dover Priory (~1 hr 5 min). Book the tunnel tour first thing when you arrive.",
      inPaths: [1, 2, 3],
      comments: []
    },
    {
      id: "white-cliffs",
      title: "White Cliffs of Dover",
      category: "castle",
      location: "Dover, Kent",
      price: { amount: 0, currency: "GBP", per: "person", note: "Free" },
      duration: "2 hours",
      description: "The famous chalk cliffs. Walk to South Foreland Lighthouse and back. On a clear day you can see France.",
      image: "https://images.unsplash.com/photo-1533154683836-84ea7a0bc310?w=800",
      video: "",
      tips: "Adjacent to Dover Castle. Do the castle in the morning, cliffs in the afternoon.",
      inPaths: [1, 2, 3],
      comments: []
    },
    {
      id: "edinburgh-castle",
      title: "Edinburgh Castle",
      category: "castle",
      location: "Edinburgh",
      price: { amount: 47, currency: "USD", per: "both", note: "~£21.50 adult + £13 child online" },
      duration: "2-3 hours",
      description: "Perched on a volcanic rock above the city. The 1 o'clock gun fires every day (Mon-Sat). Walk the Royal Mile downhill after.",
      image: "https://images.unsplash.com/photo-1506377585622-bedcbb027afc?w=800",
      video: "",
      tips: "Book ahead. Aim for the 1pm gun. Walk the Royal Mile downhill to Holyrood after.",
      inPaths: [1, 2, 3],
      comments: []
    },
    // London extras
    {
      id: "british-museum",
      title: "British Museum",
      category: "culture",
      location: "Bloomsbury, London",
      price: { amount: 0, currency: "GBP", per: "person", note: "Free" },
      duration: "2-3 hours",
      description: "Rosetta Stone, Egyptian mummies, Parthenon sculptures, samurai armor. Eight million objects. Completely free.",
      image: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=800",
      video: "",
      tips: "Don't try to see everything. Pick 2-3 galleries. The Egyptian rooms and the Rosetta Stone are the hits.",
      inPaths: [1, 2, 3],
      optional: true,
      comments: []
    }
  ],

  budget: {
    path1: {
      total: 1400,
      items: [
        { category: "Railcard", item: "Family & Friends Railcard", usd: 41 },
        { category: "Lodging", item: "3 nights London (family hostel room)", usd: 240 },
        { category: "Lodging", item: "1 night Liverpool", usd: 95 },
        { category: "Lodging", item: "1 night Edinburgh", usd: 115 },
        { category: "Trains", item: "London to Liverpool (advance, both)", usd: 30 },
        { category: "Trains", item: "Liverpool to Edinburgh (direct, both)", usd: 50 },
        { category: "Trains", item: "Oxford day return (both)", usd: 30 },
        { category: "Trains", item: "Dover day return (both)", usd: 45 },
        { category: "Local", item: "London Oyster 4 days (both, incl Watford)", usd: 80 },
        { category: "Local", item: "Edinburgh tram to airport", usd: 18 },
        { category: "Entry", item: "HP Studio Tour (both)", usd: 145 },
        { category: "Entry", item: "Christ Church Oxford (both)", usd: 36 },
        { category: "Entry", item: "Beatles Story (both)", usd: 42 },
        { category: "Entry", item: "Cavern Club daytime (both)", usd: 14 },
        { category: "Entry", item: "Edinburgh Castle (both)", usd: 47 },
        { category: "Food", item: "Breakfast 6 days (both)", usd: 65 },
        { category: "Food", item: "Lunch 6 days (both)", usd: 95 },
        { category: "Food", item: "Dinner 6 days (both)", usd: 190 },
        { category: "Food", item: "Snacks, coffee, water", usd: 30 },
        { category: "Buffer", item: "Contingency", usd: 50 }
      ]
    },
    path2: { total: 1450, note: "Path 1 + ~$50 Oxford-Birmingham routing + Dover Castle $41 + Alnwick $30. Over budget by ~$50." },
    path3: { total: 1600, note: "Path 2 + extra night ($115) + extra meals ($55). Over budget by ~$200." }
  },

  bookings: [
    { id: "b1", what: "Lock travel dates", when: "Now (May 2026)", deadline: "ASAP", status: "todo", urgent: true, notes: "Pick specific dates within Sept/Oct window. Everything else depends on this." },
    { id: "b2", what: "Book HP Studio Tour", when: "Now (May 2026)", deadline: "ASAP", status: "todo", urgent: true, notes: "Sells out 3-6 months ahead for weekends and UK school holidays. Pick a weekday." },
    { id: "b3", what: "Buy Family & Friends Railcard", when: "May 2026", deadline: "Before booking trains", status: "todo", urgent: false, notes: "£30 from railcard.co.uk. Need it before buying train tickets." },
    { id: "b4", what: "Lock flights (open-jaw LHR in, EDI out)", when: "May-June 2026", deadline: "June 2026", status: "todo", urgent: false, notes: "Google Flights multi-city. Shoulder season pricing is reasonable." },
    { id: "b5", what: "Book advance train tickets", when: "12 weeks before travel", deadline: "Late June (Sept travel) or late July (Oct travel)", status: "todo", urgent: false, notes: "Advance tickets are dramatically cheaper. Railcard discount stacks." },
    { id: "b6", what: "Book hotels/hostels", when: "July-Aug 2026", deadline: "August 2026", status: "todo", urgent: false, notes: "Free cancellation policies allow flexibility." },
    { id: "b7", what: "Book Edinburgh Castle", when: "August 2026", deadline: "Before travel", status: "todo", urgent: false, notes: "Sept/Oct usually fine closer to date." },
    { id: "b8", what: "Book Beatles Story timeslot", when: "September 2026", deadline: "Same week is fine", status: "todo", urgent: false, notes: "Usually available short notice." }
  ],

  openQuestions: [
    { q: "Which path?", who: "Both", notes: "Path 1, 2, or 3. The big decision." },
    { q: "Specific travel dates", who: "Dad", notes: "Within Sept/Oct 2026. UK October half-term is the last full week of Oct." },
    { q: "Hostel room vs Premier Inn?", who: "Both", notes: "$200 swing in budget." },
    { q: "Magical Mystery Tour bus?", who: "Luciano", notes: "$50 for both. Covers Penny Lane, Strawberry Field, childhood homes by bus." },
    { q: "Mendips + Forthlin Road tour?", who: "Luciano", notes: "The actual childhood homes. National Trust. Books out." },
    { q: "Cavern Club evening show?", who: "Dad", notes: "Need to verify 13yo entry rules for specific evening events." },
    { q: "Alnwick Castle 2026 closing date?", who: "Dad", notes: "Usually closes ~Oct 31. Must verify before locking Path 2 or 3." }
  ]
};

const CATEGORY_LABELS = {
  "harry-potter": { icon: "auto_fix_high", label: "Harry Potter" },
  "beatles": { icon: "music_note", label: "Beatles" },
  "castle": { icon: "castle", label: "Castle" },
  "culture": { icon: "museum", label: "Culture" }
};

function getActivity(id) {
  return TRIP.activities.find(a => a.id === id);
}

function getActivitiesByCategory(cat) {
  return TRIP.activities.filter(a => a.category === cat);
}

function getActivitiesForPath(pathId, category) {
  const path = TRIP.paths.find(p => p.id === pathId);
  if (!path) return [];
  const activityIds = new Set();
  path.days.forEach(d => d.activities.forEach(id => activityIds.add(id)));
  let activities = TRIP.activities.filter(a => activityIds.has(a.id));
  if (category) activities = activities.filter(a => a.category === category);
  return activities;
}

function getCurrentPath() {
  return parseInt(localStorage.getItem('uk-trip-path') || '1');
}

function setCurrentPath(id) {
  localStorage.setItem('uk-trip-path', id);
}
