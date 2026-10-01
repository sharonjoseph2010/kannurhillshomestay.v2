/**
 * Single source of truth for all site content.
 *
 * Used by the React pages, the build-time prerender (scripts/prerender.js),
 * the JSON-LD structured data and the llms.txt summary, so every fact
 * (prices, distances, phone numbers, ratings) only lives here.
 * Keep it plain data: no JSX, no browser APIs.
 */

export const SITE = {
  name: "Kannur Hills Homestays",
  url: "https://kannurhillshomestay.com",
  email: "info@kannurhillshomestay.com",
  logo: "/images/logos/kannur-hills-homestays-logo-white.png",
  region: "Kannur district, Kerala, India",
  areas: [
    "Alakode",
    "Karuvanchal",
    "Velladu",
    "Naduvil",
    "Vayattuparamb",
    "Sreekandapuram",
    "Chemperi",
    "Payyavoor",
  ],
  bookingTerms: [
    "Booking is confirmed on advance payment",
    "Cancellation more than 7 days before check-in: 80% refund",
    "Cancellation more than 3 days before check-in: 50% refund",
    "Cancellation less than 3 days before check-in: no refund",
  ],
};

export const img = (folder, name) => `/images/${folder}/${name}`;

const T = (n) => img("thushara", `thushara-homestay-vellad-alakode-${n}.jpg`);
const P = (n) => img("pearlnest", `pearl-nest-homestay-sreekandapuram-${n}.jpg`);

export const LANDSCAPE = {
  src: "/images/kannur-hills-western-ghats-landscape.jpg",
  alt: "Green Western Ghats hills near Alakode in Kannur district, Kerala",
  w: 2400,
  h: 1340,
};

/* ------------------------------------------------------------------ */
/* Properties                                                          */
/* ------------------------------------------------------------------ */

export const THUSHARA = {
  slug: "thushara",
  path: "/thushara",
  name: "Thushara Homestay",
  shortName: "Thushara",
  tagline: "Independent AC cottage near Palakkayam Thattu & Paithalmala",
  logo: "/images/logos/thushara-homestay-logo.png",
  host: "Mr. Joseph",
  phone: "+918330094302",
  phoneDisplay: "+91 83300 94302",
  whatsapp: "918330094302",
  address: {
    street: "Karuvanchal – Velladu Road",
    locality: "Velladu, Alakode",
    district: "Kannur",
    region: "Kerala",
    postalCode: "670571",
    country: "IN",
  },
  geo: { lat: 12.166062784878234, lng: 75.47289838675535 },
  mapsUrl: "https://maps.app.goo.gl/QvMVtBEhVdnxb5d36",
  mapEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6698.4066631757505!2d75.47517289999999!3d12.166136199999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba4456a09b981c5%3A0x39f2052c1342c38!2sThushara%20Homestay!5e1!3m2!1sen!2sin!4v1768812365162!5m2!1sen!2sin",
  rating: { value: 4.9, count: 32, source: "Google" },
  priceFrom: 2000,
  rates: [
    { label: "Weekday", price: 2000, note: "Weekday nights, for 2 guests" },
    { label: "Weekend", price: 2200, note: "Weekend nights, for 2 guests" },
  ],
  extra: { price: 500, label: "Extra bed", note: "Available on request, maximum 1 extra bed (3 guests)." },
  checkIn: "12:00 PM",
  checkOut: "11:00 AM",
  checkInTime: "12:00",
  checkOutTime: "11:00",
  maxGuests: 3,
  mealsNote:
    "Traditional Kerala meals from Vanitha Hotel, the women's-group restaurant on the ground floor, at additional cost.",
  summary:
    "Thushara Homestay is an independent 1BHK air-conditioned cottage on the Karuvanchal–Velladu road in Velladu, Alakode, Kannur. It sleeps up to 3 guests and is 8 km from Palakkayam Thattu and Kuttippullu and 15 km from Paithalmala hill station, with free parking and Kerala meals from the attached Vanitha Hotel.",
  intro: [
    "Get a taste of authentic Kerala hill life at Thushara Homestay. You get the whole cottage to yourself: an air-conditioned bedroom, a living room with sofas, a small dining table, a kitchenette with kettle, tea and coffee, and a modern private bathroom.",
    "We sit on the first floor right on the Karuvanchal–Velladu road, looking out over green gardens and tall trees. It's the closest comfortable base for Palakkayam Thattu, Kuttippullu and Paithalmala, and our host Mr. Joseph is happy to arrange jeeps and local trips.",
  ],
  facts: [
    ["Type", "Independent 1BHK cottage (whole unit)"],
    ["Sleeps", "2 guests, up to 3 with extra bed"],
    ["Rooms", "AC bedroom, living room, kitchenette, private bathroom"],
    ["Price", "₹2,000 weekdays · ₹2,200 weekends (2 guests)"],
    ["Extra bed", "₹500 per night"],
    ["Check-in / out", "12:00 PM / 11:00 AM"],
    ["Meals", "Kerala meals from Vanitha Hotel (extra)"],
    ["Parking", "Free, on site"],
    ["Google rating", "4.9 ★ from 32 reviews"],
  ],
  features: [
    { icon: "home", title: "Independent cottage", text: "A private 1BHK with AC bedroom, living room, kitchenette and bathroom. It's yours alone." },
    { icon: "meal", title: "Traditional meals", text: "Authentic Kerala food from Vanitha Hotel, the women's-group restaurant on the ground floor." },
    { icon: "car", title: "Free parking", text: "Secure parking right at the property in a safe residential area." },
    { icon: "hills", title: "Hill attractions", text: "Palakkayam Thattu and Kuttippullu are 8 km away; Paithalmala is 15 km." },
    { icon: "map", title: "Tour assistance", text: "We help arrange 4x4 jeeps, local sightseeing and transport." },
    { icon: "air", title: "Fresh mountain air", text: "Wake up to misty mornings and cool, refreshing breezes." },
  ],
  amenities: ["Air conditioning", "Free parking", "Kitchenette", "Private bathroom", "Kerala meals", "Power backup", "Extra bed"],
  nearby: [
    { name: "Palakkayam Thattu", km: 8, text: "Misty tabletop viewpoint with jeep rides to the top and sweeping sunrise views.", guide: "/palakkayam-thattu" },
    { name: "Kuttippullu", km: 8, text: "A quiet grassland viewpoint, perfect for an easy evening outing." },
    { name: "Paithalmala", km: 15, text: "Kannur's highest hill station at about 1,370 m, with a forest trek to the summit watchtower.", guide: "/paithalmala" },
    { name: "Kannur Town", km: 40, text: "Beaches, forts and the district headquarters." },
    { name: "Kannur Airport & Railway Station", km: 42, text: "The nearest airport (CNN) and railway station are both about 42 km away." },
  ],
  alsoNearby: ["Ezharakund Waterfalls", "Kappimala Waterfalls", "Chittamangala viewpoint"],
  hero: [
    { src: T("banner"), alt: "Thushara Homestay sign on the Karuvanchal–Velladu road, Alakode", pos: "center 70%" },
    { src: T("living-room-03"), alt: "Living room with sofa set at Thushara Homestay" },
    { src: T("bedroom-01"), alt: "Double bed in the AC bedroom at Thushara Homestay" },
    { src: T("living-room-04"), alt: "Living and dining area at Thushara Homestay" },
  ],
  gallery: [
    { src: T("banner"), alt: "Thushara Homestay entrance and roadside view in Velladu, Alakode", cap: "Entrance", pos: "center 70%" },
    { src: T("living-room-03"), alt: "Thushara Homestay living room with sofa set", cap: "Living room" },
    { src: T("bedroom-01"), alt: "Thushara Homestay bedroom with double bed", cap: "Bedroom" },
    { src: T("living-room-04"), alt: "Thushara Homestay living and dining area", cap: "Living & dining" },
    { src: T("bedroom-02"), alt: "Thushara Homestay bedroom with wooden cot", cap: "Bedroom" },
    { src: T("bedroom-03"), alt: "Thushara Homestay bedroom and view to the dining area", cap: "Bedroom" },
    { src: T("living-room-01"), alt: "Thushara Homestay open living space", cap: "Living room" },
    { src: T("living-room-02"), alt: "Thushara Homestay sofa seating", cap: "Lounge" },
    { src: T("living-room-05"), alt: "Thushara Homestay living room and balcony door", cap: "Living room" },
    { src: T("living-room-06"), alt: "Thushara Homestay hall with ceiling fan", cap: "Hall" },
    { src: T("living-room-07"), alt: "Thushara Homestay living room with day bed", cap: "Day bed" },
    { src: T("extra-bed-01"), alt: "Thushara Homestay extra bed with dining table", cap: "Extra bed" },
    { src: T("extra-bed-02"), alt: "Thushara Homestay extra bed area", cap: "Extra bed" },
    { src: T("study-table-01"), alt: "Thushara Homestay study table", cap: "Work nook" },
    { src: T("restroom-01"), alt: "Thushara Homestay bathroom with water heater", cap: "Bathroom" },
    { src: T("restroom-02"), alt: "Thushara Homestay bathroom with shower", cap: "Bathroom" },
    { src: T("restroom-03"), alt: "Thushara Homestay bathroom washbasin", cap: "Bathroom" },
  ],
  card: { src: T("living-room-03"), alt: "Thushara Homestay living room in Velladu, Alakode", pos: "center 65%" },
  og: "/images/og/og-thushara-homestay-alakode.jpg",
  reviews: [
    { name: "Jai Ganesh Deva S.S", rating: 5, when: "Family holiday", text: "A hidden gem for budget travellers near the Paithalmala–Karuvanchal–Kappimala tourist hotspots of Kannur district. Full marks to the owner, Mr. Joseph, who makes every effort to see that you are comfortable. He also organised outdoor trips in a 4x4 vehicle." },
    { name: "Rojan Thomas", rating: 5, when: "Family holiday", text: "Had an excellent stay at Thushara Homestay in Karuvanchal. The property is clean, comfortable and well-maintained. Mr. Joseph is a wonderful host who goes above and beyond to make guests feel welcome." },
    { name: "M J", rating: 5, when: "Couple's holiday", text: "We enjoyed visiting Paithalmala hill station and Palakkayam Thattu. The host helped with all the transportation arrangements, and we enjoyed simple, delicious Kerala food from Vanitha Hotel." },
    { name: "Richard Berly", rating: 5, when: "Weekend trip", text: "Peaceful and cozy stay for a weekend trip. Clean rooms and homely food. Definitely recommend this for anyone planning to visit Palakkayam Thattu or Paithalmala." },
    { name: "Dayon K Raju", rating: 5, when: "Wedding guests", text: "The rooms were spotless and well-equipped with all the necessities. I highly recommend this place for anyone visiting the Karuvanchal or Alakode area." },
    { name: "Sachin Hegde", rating: 4, when: "Trip with friends", text: "Luxury room at an affordable price. It has AC, a kitchen with all the utensils, an extra bed and power backup. Totally worth the money if you are visiting Palakkayam Thattu, Paithalmala or Ezharakund waterfalls." },
  ],
  faqs: [
    { q: "How far is Thushara Homestay from Paithalmala?", a: "Thushara Homestay in Velladu is about 15 km from Paithalmala hill station, making it an easy base for an early-morning trek. We can help arrange transport." },
    { q: "How far is it to Palakkayam Thattu and Kuttippullu?", a: "Both Palakkayam Thattu and Kuttippullu are about 8 km from the homestay, around 15–20 minutes by road. Jeeps run from the base to the Palakkayam Thattu viewpoint." },
    { q: "Is Thushara Homestay a good place to stay in Alakode or Karuvanchal?", a: "Yes. We are on the Karuvanchal–Velladu road in Velladu, Alakode, convenient for Alakode, Karuvanchal, Naduvil and Vayattuparamb as well as the nearby hill stations." },
    { q: "What facilities are included in the stay?", a: "An independent 1BHK cottage with an AC bedroom, living room, kitchenette, private bathroom, comfortable beds for up to 3 people, power backup and free parking. Traditional Kerala meals are available from the attached Vanitha Hotel." },
    { q: "What is the price per night?", a: "₹2,000 per night on weekdays and ₹2,200 per night on weekends for 2 guests. An extra bed for a third guest is ₹500 per night. Meals are charged separately." },
    { q: "What are the check-in and check-out times?", a: "Check-in is from 12:00 PM and check-out is by 11:00 AM." },
    { q: "How do I book Thushara Homestay?", a: "Message us on WhatsApp at +91 83300 94302. Advance payment confirms your booking. We are also listed on Booking.com, MakeMyTrip and Airbnb, but booking directly is quickest. Please don't visit without a prior booking." },
    { q: "How far is the nearest airport and railway station?", a: "Kannur International Airport and Kannur railway station are each about 42 km from the homestay." },
  ],
};

export const PEARLNEST = {
  slug: "pearlnest",
  path: "/pearlnest",
  name: "Pearl Nest Homestay",
  shortName: "Pearl Nest",
  tagline: "Independent AC cottage in the hill town of Sreekandapuram",
  logo: "/images/logos/pearl-nest-homestay-logo.png",
  phone: "+919845768698",
  phoneDisplay: "+91 98457 68698",
  whatsapp: "919845768698",
  address: {
    street: "Kottoor",
    locality: "Sreekandapuram",
    district: "Kannur",
    region: "Kerala",
    postalCode: "670631",
    country: "IN",
  },
  geo: { lat: 12.039085906876565, lng: 75.51280720677588 },
  mapsUrl: "https://maps.google.com/?q=12.039085906876565,75.51280720677588",
  mapEmbed: "https://maps.google.com/maps?q=12.039085906876565,75.51280720677588&z=16&output=embed",
  rating: null,
  priceFrom: 2500,
  rates: [{ label: "Standard stay", price: 2500, note: "Per night, 2 guests" }],
  extra: { price: 500, label: "Extra person", note: "Uses a rollaway bed, maximum 1 extra person (3 guests)." },
  checkIn: "12:00 PM",
  checkOut: "11:00 AM",
  checkInTime: "12:00",
  checkOutTime: "11:00",
  maxGuests: 3,
  mealsNote: "Home-cooked Kerala meals by a home cook, at additional cost as per menu.",
  summary:
    "Pearl Nest Homestay is an independent 1BHK air-conditioned cottage in Kottoor, Sreekandapuram, Kannur, Kerala 670631. It sleeps up to 3 guests, has private parking for 2 cars, home-cooked Kerala meals on request, and shops and restaurants within walking distance.",
  intro: [
    "Experience the comfort and convenience of Pearl Nest, an independent 1BHK AC cottage in the heart of Sreekandapuram, Kannur. It's perfect for families, couples and solo travellers looking for a peaceful hill-town retreat with all modern amenities.",
    "The cottage has a bedroom, a fully fitted kitchen, a dining area and a private bathroom, in a secure, quiet residential neighbourhood with good road connectivity to Chemperi, Payyavoor, Naduvil and Iritti.",
  ],
  facts: [
    ["Type", "Independent 1BHK cottage (whole unit)"],
    ["Sleeps", "2 guests, up to 3 with rollaway bed"],
    ["Rooms", "AC bedroom, kitchen, dining area, private bathroom"],
    ["Price", "₹2,500 per night (2 guests)"],
    ["Extra person", "₹500 per night"],
    ["Check-in / out", "12:00 PM / 11:00 AM"],
    ["Meals", "Home-cooked Kerala meals (extra)"],
    ["Parking", "Private, for 2 cars"],
    ["Address", "Kottoor, Sreekandapuram, Kannur 670631"],
  ],
  features: [
    { icon: "home", title: "Independent 1BHK AC cottage", text: "Well-furnished, with modern amenities for a relaxing stay in Sreekandapuram." },
    { icon: "meal", title: "Home-cooked meals", text: "Traditional Kerala food prepared by a home cook, at additional cost as per menu." },
    { icon: "car", title: "Easy access", text: "Good road connectivity and private parking for 2 cars." },
    { icon: "hills", title: "Hill-town setting", text: "A secure, accessible residential area of Sreekandapuram in the Kannur hills." },
    { icon: "map", title: "Amenities close by", text: "Shops, restaurants and essentials within walking distance." },
    { icon: "air", title: "Peaceful atmosphere", text: "Quiet mornings and the calm, relaxed pace of small-town Kerala." },
  ],
  amenities: ["Air conditioning", "Private parking (2 cars)", "Full kitchen", "Private bathroom", "Home-cooked meals", "Dining area"],
  nearby: [
    { name: "Chemperi", text: "Neighbouring hill town, on the way towards Paithalmala." },
    { name: "Payyavoor", text: "Nearby town in the Kannur hills." },
    { name: "Naduvil", text: "Gateway town for Palakkayam Thattu." },
    { name: "Iritti", text: "Market town on the route towards Coorg." },
    { name: "Kannur", text: "District headquarters, beaches and forts." },
  ],
  alsoNearby: [],
  hero: [
    { src: P("bedroom-full-view"), alt: "Bedroom at Pearl Nest Homestay, Sreekandapuram" },
    { src: P("kitchen"), alt: "Fitted kitchen at Pearl Nest Homestay" },
    { src: P("dining-area"), alt: "Dining area at Pearl Nest Homestay" },
    { src: P("bedroom"), alt: "Bed at Pearl Nest Homestay, Kannur" },
  ],
  gallery: [
    { src: P("bedroom-full-view"), alt: "Pearl Nest Homestay bedroom in Sreekandapuram, Kannur", cap: "Bedroom" },
    { src: P("bedroom"), alt: "Pearl Nest Homestay double bed", cap: "Bedroom" },
    { src: P("bedroom-entrance"), alt: "Pearl Nest Homestay bedroom entrance", cap: "Bedroom" },
    { src: P("kitchen"), alt: "Pearl Nest Homestay kitchen with refrigerator and microwave", cap: "Kitchen" },
    { src: P("dining-area"), alt: "Pearl Nest Homestay dining area", cap: "Dining" },
    { src: P("bathroom"), alt: "Pearl Nest Homestay private bathroom", cap: "Bathroom" },
  ],
  card: { src: P("bedroom-full-view"), alt: "Pearl Nest Homestay bedroom in Sreekandapuram" },
  og: "/images/og/og-pearl-nest-sreekandapuram.jpg",
  reviews: [],
  faqs: [
    { q: "Where is Pearl Nest Homestay located?", a: "Pearl Nest is in Kottoor, Sreekandapuram, Kannur, Kerala 670631, a peaceful, well-connected residential area of the Kannur hills." },
    { q: "What is the price per night at Pearl Nest?", a: "₹2,500 per night for 2 guests. An extra person (rollaway bed) is ₹500 per night, up to 3 guests in total." },
    { q: "What amenities are available?", a: "An independent 1BHK AC cottage with bedroom, fitted kitchen, dining area and private bathroom, private parking for 2 cars, and home-cooked Kerala meals on request." },
    { q: "How can I book Pearl Nest?", a: "Message us on WhatsApp at +91 98457 68698 or email info@kannurhillshomestay.com. Advance payment confirms the booking." },
    { q: "Is Pearl Nest suitable for families?", a: "Yes. Pearl Nest suits families, couples and solo travellers looking for a quiet hill-town stay with shops and restaurants close by." },
    { q: "What are the check-in and check-out times?", a: "Check-in is from 12:00 PM and check-out is by 11:00 AM." },
    { q: "What is the best time to visit Sreekandapuram?", a: "The weather is pleasant all year. October to February is the most comfortable season, with cool, fresh mornings." },
  ],
};

export const PROPERTIES = [THUSHARA, PEARLNEST];

/* ------------------------------------------------------------------ */
/* Home page                                                           */
/* ------------------------------------------------------------------ */

export const HOME_FAQS = [
  { q: "Where are Kannur Hills Homestays located?", a: "We run two homestays in Kannur district, Kerala: Thushara Homestay in Velladu, Alakode (Karuvanchal–Velladu road) and Pearl Nest in Kottoor, Sreekandapuram." },
  { q: "Which homestay is closest to Palakkayam Thattu and Paithalmala?", a: "Thushara Homestay. It is about 8 km from Palakkayam Thattu and Kuttippullu and 15 km from Paithalmala." },
  { q: "How much does a stay cost?", a: "Thushara Homestay is ₹2,000 per night on weekdays and ₹2,200 on weekends; Pearl Nest is ₹2,500 per night. Both prices are for 2 guests, with an extra guest at ₹500 per night." },
  { q: "Are meals available?", a: "Yes. Thushara guests can eat traditional Kerala meals at the attached Vanitha Hotel; Pearl Nest offers home-cooked meals on request. Meals are charged separately." },
  { q: "How do I book?", a: "Message us on WhatsApp (Thushara: +91 83300 94302, Pearl Nest: +91 98457 68698). Advance payment confirms the booking." },
];

/* ------------------------------------------------------------------ */
/* Guides                                                              */
/* ------------------------------------------------------------------ */

export const GUIDES = {
  "palakkayam-thattu": {
    slug: "palakkayam-thattu",
    path: "/palakkayam-thattu",
    name: "Palakkayam Thattu",
    title: "Palakkayam Thattu: Visitor Guide & Where to Stay Nearby",
    km: 8,
    og: "/images/og/og-palakkayam-thattu-guide.jpg",
    lede: "Palakkayam Thattu is one of North Kerala's most loved hill destinations: a misty tabletop viewpoint in the Western Ghats near Alakode and Naduvil in Kannur district. Thushara Homestay is just 8 km away, one of the closest comfortable stays to the viewpoint.",
    stats: [["8 km", "from Thushara Homestay"], ["Oct–Feb", "best season"], ["Sunrise", "best time of day"]],
    sections: [
      { h: "Why visit Palakkayam Thattu?", p: ["Perched high above the plains, Palakkayam Thattu offers sweeping views of green valleys, rolling mist and dramatic sunrises. The hilltop is known for its cool climate year-round, off-road jeep rides to the top and seasonal adventure activities. It's a favourite for families, couples and photographers alike."] },
      { h: "Best time to visit", p: ["October to February is the most pleasant season, with clear mornings and misty evenings. Early morning is the best time to catch the sunrise and mist-filled valleys before day crowds arrive. The monsoon months turn the hills a deep green but can bring heavy rain and slippery paths."] },
      { h: "How to reach", p: ["Palakkayam Thattu is reached via the Naduvil–Alakode region of Kannur district. From Thushara Homestay in Velladu it is a short 8 km drive. Jeeps operate from the base to the hilltop viewpoint. If you're staying with us, we're happy to help arrange transport and local guidance. Just ask."] },
      { h: "Stay 8 km from Palakkayam Thattu", p: ["Thushara Homestay in Velladu, Alakode is an independent 1BHK cottage with AC, a living room, kitchenette, private bathroom and free parking. It's comfortable for up to 3 guests, from ₹2,000/night, with traditional Kerala meals available."], list: ["Palakkayam Thattu: 8 km", "Kuttippullu viewpoint: 8 km", "Paithalmala hill station: 15 km", "Convenient for Alakode, Karuvanchal, Naduvil and Vayattuparamb"] },
    ],
    faqs: [
      { q: "How far is Palakkayam Thattu from Thushara Homestay?", a: "Just 8 km, around 15–20 minutes by road." },
      { q: "Is there accommodation near Palakkayam Thattu?", a: "Yes. Thushara Homestay in Velladu is one of the closest cottage stays, 8 km from the viewpoint, with AC, parking and Kerala meals." },
      { q: "What else can I visit nearby?", a: "Combine your trip with Kuttippullu (8 km) and Paithalmala (15 km from the homestay) for a full hill-country weekend. Ezharakund and Kappimala waterfalls are also close by." },
    ],
    related: "paithalmala",
  },
  paithalmala: {
    slug: "paithalmala",
    path: "/paithalmala",
    name: "Paithalmala",
    title: "Paithalmala: Trekking Guide & Where to Stay Nearby",
    km: 15,
    og: "/images/og/og-paithalmala-guide.jpg",
    lede: "Paithalmala is the highest hill station in Kannur district, rising around 1,370 metres above sea level near the Kerala–Karnataka border. Famous for its trek through evergreen forest and the panoramic watchtower at the summit, it's a must-do for nature lovers visiting North Kerala. Thushara Homestay is 15 km away, an easy base for an early-morning start.",
    stats: [["~1,370 m", "altitude"], ["15 km", "from Thushara Homestay"], ["Oct–Feb", "best season"]],
    sections: [
      { h: "The trek", p: ["From the entry point near Pottenplave, a trail winds up through forest and grassland to the summit watchtower. The round trip is a moderate trek that rewards you with valley views, mist and, on clear days, sightlines deep into Coorg. Carry water, wear good footwear and start early for the best weather."] },
      { h: "Best time to visit", p: ["The cooler months from October to February offer the clearest views and most comfortable trekking weather. Mornings are best, as the hills are often wrapped in mist just after sunrise. Monsoon months are lush but wet and slippery."] },
      { h: "How to reach", p: ["Paithalmala lies in the Pottenplave area of Kannur district, reachable via Taliparamba–Alakode roads. From Thushara Homestay in Velladu it's roughly a 15 km drive to the base. We can help arrange transport and share route tips when you stay with us."] },
      { h: "Stay 15 km from Paithalmala", p: ["Thushara Homestay in Velladu, Alakode is an independent 1BHK cottage with AC, living room, kitchenette, private bathroom and free parking. It's comfortable for up to 3 guests, from ₹2,000/night, with traditional Kerala meals available."], list: ["Paithalmala hill station: 15 km", "Palakkayam Thattu: 8 km", "Kuttippullu viewpoint: 8 km", "Convenient for Alakode, Karuvanchal, Naduvil and Vayattuparamb"] },
    ],
    faqs: [
      { q: "How far is Paithalmala from Alakode?", a: "The Paithalmala base area is a comfortable drive from Alakode town; from our homestay in Velladu (on the Karuvanchal–Velladu road) it is about 15 km." },
      { q: "Is there a homestay near Paithalmala?", a: "Yes. Thushara Homestay is a 1BHK AC cottage 15 km from Paithalmala, ideal for an early start to the trek." },
      { q: "Can I combine Paithalmala and Palakkayam Thattu in one trip?", a: "Absolutely. They're on the same side of Kannur district. Many guests trek Paithalmala in the morning and watch sunset from Palakkayam Thattu." },
    ],
    related: "palakkayam-thattu",
  },
};
