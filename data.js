const TRIP = {
  meta: {
    title: "Dad & Luciano Take the UK",
    budget: 1500,
    currency: "USD",
    days: 6,
    travelers: ["Dad", "Luciano"],
    status: "Planning"
  },

  cities: [
    {
      id: "london",
      name: "London",
      days: "Days 1-3",
      dayRange: [1, 3],
      hero: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800",
      tagline: "Magic, music, and free museums",
      activities: [
        {
          id: "hp-walking-tour",
          title: "Harry Potter Walking Tour",
          category: "harry-potter",
          location: "King's Cross to Millennium Bridge",
          price: { amount: 0, currency: "GBP", per: "person", note: "Self-guided, completely free" },
          duration: "Half day",
          description: "Platform 9 3/4 at King's Cross, Leadenhall Market (Diagon Alley entrance), Borough Market (Leaky Cauldron in Prisoner of Azkaban), Millennium Bridge (destroyed by Death Eaters), and Australia House (Gringotts exterior).",
          image: "https://images.unsplash.com/photo-1551269901-5c5e14c25df7?w=800",
          video: "n73Go0Xz8bY",
          status: "idea",
          comments: [],
          tips: "Start at King's Cross, work south. Skip the paid photo service at Platform 9 3/4 and take your own."
        },
        {
          id: "hp-studio-tour",
          title: "Warner Bros Studio Tour",
          category: "harry-potter",
          location: "Leavesden, Watford",
          price: { amount: 106, currency: "GBP", per: "both", note: "Adult £58.50 + Child £47. Book 6-8 weeks ahead." },
          duration: "4-5 hours",
          description: "Walk through the actual Great Hall, Diagon Alley, Dumbledore's office, the Forbidden Forest, and Platform 9 3/4. Ride a broomstick on green screen. Butterbeer included in the food hall.",
          image: "https://images.unsplash.com/photo-1551269901-5c5e14c25df7?w=800",
          video: "tDuK0dttDtY",
          status: "idea",
          comments: [],
          tips: "Free shuttle from Watford Junction (show your booking). Bring your own food to save money. Set a souvenir budget BEFORE entering the gift shop."
        },
        {
          id: "abbey-road",
          title: "Abbey Road Crossing",
          category: "beatles",
          location: "St John's Wood, London",
          price: { amount: 0, currency: "GBP", per: "person", note: "Free" },
          duration: "30 min",
          description: "Recreate the most famous album cover in music history. The crossing is still a working road, so you walk out, someone takes the photo, and you get out of the way. There's a live webcam at abbeyroad.com so you can find your photo after.",
          image: "https://images.unsplash.com/photo-1543799382-9a0208331ef7?w=800",
          video: "oolpPmuK2I8",
          status: "idea",
          comments: [],
          tips: "Nearest tube: St John's Wood. Go mid-morning on a weekday for fewer cars. Check the webcam later to screenshot your crossing."
        },
        {
          id: "free-museums",
          title: "Free Museums",
          category: "culture",
          location: "South Kensington / Bloomsbury",
          price: { amount: 0, currency: "GBP", per: "person", note: "All free entry" },
          duration: "2-3 hours",
          description: "The British Museum (Rosetta Stone, Egyptian mummies, samurai armor), Natural History Museum (dinosaur skeletons, earthquake simulator), or Science Museum (space gallery, flight simulator). All completely free. Pick one or two.",
          image: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=800",
          video: "0gNajlBRDRA",
          status: "idea",
          comments: [],
          tips: "Don't try to do all three in one day. The British Museum alone could take 3 hours. South Kensington has Natural History and Science side by side."
        }
      ]
    },
    {
      id: "liverpool",
      name: "Liverpool",
      days: "Days 4-6",
      dayRange: [4, 6],
      hero: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=800",
      tagline: "Where the Beatles started everything",
      activities: [
        {
          id: "beatles-story",
          title: "The Beatles Story Museum",
          category: "beatles",
          location: "Albert Dock, Liverpool",
          price: { amount: 24, currency: "GBP", per: "both", note: "Adult £14.95 + Child £9.00" },
          duration: "2-3 hours",
          description: "Walk through a recreation of the Cavern Club, see John Lennon's original glasses, George's first guitar, and a white room recreation of the Imagine video. Multimedia audio guide included.",
          image: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=800",
          video: "Rjs_d0f8S7A",
          status: "idea",
          comments: [],
          tips: "Book online for guaranteed entry. Allow 2-3 hours minimum."
        },
        {
          id: "cavern-club",
          title: "The Cavern Club",
          category: "beatles",
          location: "Mathew Street, Liverpool",
          price: { amount: 9, currency: "GBP", per: "both", note: "Adult £6 + Child (12-17) £3. Cashless only." },
          duration: "1-2 hours",
          description: "The club where the Beatles played 292 times before they got famous. Live music every single day. The brick arches and stage are the real deal. Luciano can get in until 8pm with an adult.",
          image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800",
          video: "XxRtnVXejlM",
          status: "idea",
          comments: [],
          tips: "Cashless only. Live bands play afternoon sets that are less crowded. Check the schedule at cavernclub.com."
        },
        {
          id: "strawberry-field",
          title: "Strawberry Field",
          category: "beatles",
          location: "Beaconsfield Road, Liverpool",
          price: { amount: 11, currency: "GBP", per: "both", note: "Adult ~£11.20 (10% off online), Child FREE" },
          duration: "1-2 hours",
          description: "The Salvation Army children's home where John Lennon used to play as a kid. Now an interactive exhibition and peaceful garden. The red gates from the song are still there.",
          image: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=800",
          video: "XxRtnVXejlM",
          status: "idea",
          comments: [],
          tips: "Book online for 10% off. Combine with Penny Lane (15 min bus ride between them)."
        },
        {
          id: "penny-lane",
          title: "Penny Lane",
          category: "beatles",
          location: "Penny Lane, Liverpool",
          price: { amount: 0, currency: "GBP", per: "person", note: "Free" },
          duration: "30-60 min",
          description: "Walk the actual street from the song. The barber shop is still there (and still cutting hair). See the bus shelter in the roundabout. Take a photo with the street sign.",
          image: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=800",
          video: "S-rB0pHI9fU",
          status: "idea",
          comments: [],
          tips: "Combine with Strawberry Field, they're close together. Bus from city centre."
        },
        {
          id: "beatles-walk",
          title: "Beatles Walking Tour",
          category: "beatles",
          location: "Liverpool City Centre",
          price: { amount: 26, currency: "GBP", per: "both", note: "~£13 per person via GetYourGuide" },
          duration: "1h 45min",
          description: "Guided walking tour hitting the key Beatles sites in the city centre with a local guide who knows all the stories. Covers Mathew Street, the Cavern Quarter, and more.",
          image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800",
          video: "uZUGTcJKqBc",
          status: "idea",
          comments: [],
          tips: "Book on GetYourGuide. Free alternatives available at freetoursbyfoot.com (tip-based)."
        }
      ]
    }
  ],

  itinerary: [
    {
      day: 1,
      date: "TBD",
      city: "london",
      title: "Arrive + Harry Potter Walking Tour",
      description: "Land in London, settle in, then hit the HP filming locations on foot.",
      activities: ["hp-walking-tour"],
      budget: { accommodation: 65, food: 40, transport: 18, activities: 0 },
      status: "planned"
    },
    {
      day: 2,
      date: "TBD",
      city: "london",
      title: "Warner Bros Studio Tour",
      description: "Full day at Leavesden. The Great Hall, Diagon Alley, Butterbeer, broomsticks.",
      activities: ["hp-studio-tour"],
      budget: { accommodation: 65, food: 35, transport: 28, activities: 106 },
      status: "planned"
    },
    {
      day: 3,
      date: "TBD",
      city: "london",
      title: "Abbey Road + Free Museums",
      description: "Recreate the album cover, then explore world-class museums for free.",
      activities: ["abbey-road", "free-museums"],
      budget: { accommodation: 65, food: 40, transport: 18, activities: 0 },
      status: "planned"
    },
    {
      day: 4,
      date: "TBD",
      city: "liverpool",
      title: "Train to Liverpool + Beatles Afternoon",
      description: "Morning train to Liverpool. Beatles Story Museum and Cavern Club.",
      activities: ["beatles-story", "cavern-club"],
      budget: { accommodation: 50, food: 35, transport: 60, activities: 33 },
      status: "planned"
    },
    {
      day: 5,
      date: "TBD",
      city: "liverpool",
      title: "Strawberry Fields + Penny Lane",
      description: "The Beatles locations outside the city centre, plus a guided walking tour.",
      activities: ["strawberry-field", "penny-lane", "beatles-walk"],
      budget: { accommodation: 50, food: 35, transport: 12, activities: 37 },
      status: "planned"
    },
    {
      day: 6,
      date: "TBD",
      city: "liverpool",
      title: "Last Day + Train Home",
      description: "Morning at the waterfront, souvenir shopping, train back to London.",
      activities: [],
      budget: { accommodation: 0, food: 30, transport: 60, activities: 0 },
      status: "planned"
    }
  ],

  budgetBreakdown: {
    accommodation: { london: 195, liverpool: 100, total: 295 },
    transport: { londonLocal: 54, leavesden: 28, londonLiverpool: 120, liverpoolLocal: 12, total: 214 },
    food: { total: 215 },
    activities: { total: 176 },
    grandTotal: 900,
    grandTotalUSD: 1125,
    buffer: 150,
    allInUSD: 1275
  }
};

const CATEGORY_LABELS = {
  "harry-potter": { icon: "auto_fix_high", label: "Harry Potter" },
  "beatles": { icon: "music_note", label: "Beatles" },
  "culture": { icon: "museum", label: "Culture" }
};
