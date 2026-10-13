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
  host: "Mr. Joseph",
  phone: "+918330094302",
  phoneDisplay: "+91 83300 94302",
  whatsapp: "918330094302",
  address: {
    // Matches the Google Business Profile exactly: "Pallikkavala, Karuvanchal, Kerala 670571"
    street: "Pallikkavala",
    locality: "Karuvanchal",
    area: "Alakode",
    district: "Kannur",
    region: "Kerala",
    postalCode: "670571",
    country: "IN",
  },
  place: "Karuvanchal, Alakode",
  // Pin of the Google Business Profile (Google Maps place ID 0x3ba4456a09b981c5:0x39f2052c1342c38)
  geo: { lat: 12.1661362, lng: 75.4751729 },
  mapsUrl: "https://maps.app.goo.gl/QvMVtBEhVdnxb5d36",
  googleUrl: "https://www.google.com/maps?cid=260962843211607096",
  // The same property on booking sites, so search engines and AI tools can tie them to this page
  listings: [
    { name: "Booking.com", url: "https://www.booking.com/hotel/in/tushara-homestay.html" },
    { name: "MakeMyTrip", url: "https://www.makemytrip.com/hotels/thushara_homestay-details-talipparamba.html" },
  ],
  mapEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6698.4066631757505!2d75.47517289999999!3d12.166136199999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba4456a09b981c5%3A0x39f2052c1342c38!2sThushara%20Homestay!5e1!3m2!1sen!2sin!4v1768812365162!5m2!1sen!2sin",
  rating: { value: 4.9, count: 32, source: "Google" },
  priceFrom: 2000,
  rates: [
    { label: "Weekday", price: 2000, note: "Weekday nights, for 2 guests" },
    { label: "Weekend", price: 2200, note: "Weekend nights, for 2 guests" },
  ],
  extra: { price: 500, label: "Extra bed", note: "Available on request, maximum 1 extra bed (3 guests)." },
  checkIn: "1:00 PM",
  checkOut: "11:00 AM",
  checkInTime: "13:00",
  checkOutTime: "11:00",
  maxGuests: 3,
  mealsNote:
    "Traditional Kerala meals from Vanitha Hotel, the women's-group restaurant on the ground floor, at additional cost.",
  summary:
    "Thushara Homestay is an independent 1BHK air-conditioned cottage at Pallikkavala, Karuvanchal (Alakode), Kannur, Kerala 670571, on the Karuvanchal–Velladu road. It sleeps up to 3 guests and is 8 km from Palakkayam Thattu and Kuttippullu and 15 km from Paithalmala hill station, with free parking and Kerala meals from the attached Vanitha Hotel.",
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
    ["Check-in / out", "1:00 PM / 11:00 AM (earlier on request)"],
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
  amenities: ["Air conditioning", "Free parking", "Kitchenette", "Private bathroom", "Restaurant on site (Vanitha Hotel)", "Kerala meals", "Power backup", "Extra bed"],
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
    { src: T("banner"), alt: "Thushara Homestay entrance and roadside view in Karuvanchal, Alakode", cap: "Entrance", pos: "center 70%" },
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
  card: { src: T("living-room-03"), alt: "Thushara Homestay living room in Karuvanchal, Alakode", pos: "center 65%" },
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
    { q: "What is the address of Thushara Homestay?", a: "Thushara Homestay, Pallikkavala, Karuvanchal, Kerala 670571, near Alakode in Kannur district, on the Karuvanchal–Velladu road. Search \"Thushara Homestay\" on Google Maps for directions, or call +91 83300 94302." },
    { q: "How far is Thushara Homestay from Paithalmala?", a: "Thushara Homestay in Karuvanchal is about 15 km from Paithalmala hill station, around 45 minutes by road, making it an easy base for an early-morning trek. We can help arrange transport." },
    { q: "How far is it to Palakkayam Thattu and Kuttippullu?", a: "Both are about 8 km from the homestay. Palakkayam Thattu is about a 30-minute drive up the winding hill road. Jeeps run from the base to the Palakkayam Thattu viewpoint." },
    { q: "Is Thushara Homestay a good place to stay in Alakode or Karuvanchal?", a: "Yes. We are at Pallikkavala, Karuvanchal, on the Karuvanchal–Velladu road near Alakode, convenient for Alakode, Karuvanchal, Naduvil and Vayattuparamb as well as the nearby hill stations." },
    { q: "What facilities are included in the stay?", a: "An independent 1BHK cottage with an AC bedroom, living room, kitchenette, private bathroom, comfortable beds for up to 3 people, power backup and free parking. Traditional Kerala meals are available from the attached Vanitha Hotel." },
    { q: "What is the price per night?", a: "₹2,000 per night on weekdays and ₹2,200 per night on weekends for 2 guests. An extra bed for a third guest is ₹500 per night. Meals are charged separately." },
    { q: "What are the check-in and check-out times?", a: "Check-in is from 1:00 PM and check-out is by 11:00 AM. Arriving a little earlier, around 12? Let us know and we'll do our best to have the cottage ready." },
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
  place: "Sreekandapuram",
  geo: { lat: 12.039085906876565, lng: 75.51280720677588 },
  mapsUrl: "https://maps.google.com/?q=12.039085906876565,75.51280720677588",
  mapEmbed: "https://maps.google.com/maps?q=12.039085906876565,75.51280720677588&z=16&output=embed",
  googleUrl: null,
  listings: [],
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
  { q: "Where are Kannur Hills Homestays located?", a: "We run two homestays in Kannur district, Kerala: Thushara Homestay at Pallikkavala, Karuvanchal, near Alakode (Karuvanchal–Velladu road) and Pearl Nest in Kottoor, Sreekandapuram." },
  { q: "Are there rooms or hotels in Alakode and Karuvanchal?", a: "Yes. Thushara Homestay is a private 1BHK AC cottage in Karuvanchal, near Alakode, sleeping up to 3 guests, from ₹2,000 a night with free parking and Kerala meals available. Book directly on WhatsApp at +91 83300 94302." },
  { q: "How far is Alakode from Sreekandapuram?", a: "About a 30-minute drive. Our two homestays sit on either side: Thushara in Karuvanchal near Alakode, and Pearl Nest in Sreekandapuram, about 15 km apart in a straight line." },
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
    title: "Palakkayam Thattu: Visitor Guide & Nearest Homestay",
    seoTitle: "Palakkayam Thattu Homestay & Travel Guide | Thushara",
    seoDescription:
      "Palakkayam Thattu guide: best time, driving up or hiring a jeep, monsoon tips, plus the closest stay: Thushara Homestay, an AC cottage 8 km away.",
    km: 8,
    og: "/images/og/og-palakkayam-thattu-guide.jpg",
    lede: "Palakkayam Thattu is one of North Kerala's most loved hill destinations: a misty tabletop viewpoint about 3,500 ft up in the Western Ghats, near Alakode and Naduvil in Kannur district. Thushara Homestay is just 8 km away, one of the closest comfortable stays to the viewpoint, and we can arrange a jeep for your trip.",
    stats: [["8 km", "from Thushara Homestay"], ["~3,500 ft", "altitude"], ["Sunrise & sunset", "best time of day"]],
    sections: [
      { h: "Why visit Palakkayam Thattu?", p: ["Perched about 3,500 ft above sea level, Palakkayam Thattu looks out over green valleys, rolling mist and wide sunrise and sunset views. Benches along the top make it an easy place to sit and watch the clouds, and camping and adventure activities have been offered at the hilltop. It's a favourite for families, couples and photographers."] },
      { h: "Best time to visit", p: ["Go at sunrise or sunset. That's when the views and the light are best, and the hilltop stays cool. Avoid the afternoon: it gets hot on top, with little shade.", "September to February is the most comfortable stretch of the year, with clear mornings and misty evenings. Light monsoon days are beautiful too, with everything deep green and clouds drifting across the hill. During very heavy rain the viewpoint can be closed, so check before you set out. The hot months, March to May, are the least pleasant time to go."] },
      { h: "Getting to the top: own car or jeep", p: ["You can drive up in your own vehicle. The road is steep and winding, so a 4x4 is better, but it isn't required. If you'd rather not drive it, we can arrange a jeep from the area for the whole trip when you stay with us. Just ask when you book.", "Palakkayam Thattu is about 28 km from Taliparamba and roughly an hour from Kannur town. From Thushara Homestay in Karuvanchal it's 8 km, about a 30-minute drive."] },
      { h: "Good to know", list: ["Best light: sunrise and sunset; skip the hot afternoon", "Own vehicle is fine; a 4x4 or a hired jeep is easier", "In the monsoon, watch for leeches on grass and trails: wear closed shoes", "Closed on very heavy rain days, so check the weather first", "Any entry charge is small; carry some cash"] },
      { h: "Stay 8 km from Palakkayam Thattu", p: ["Thushara Homestay in Karuvanchal, Alakode is an independent 1BHK cottage with AC, a living room, kitchenette, private bathroom and free parking. It's comfortable for up to 3 guests, from ₹2,000/night, with traditional Kerala meals available. Our host, Mr. Joseph, can arrange a jeep and local trips."], list: ["Palakkayam Thattu: 8 km", "Kuttippullu viewpoint: 8 km", "Paithalmala hill station: 15 km", "Convenient for Alakode, Karuvanchal, Naduvil and Vayattuparamb"] },
    ],
    faqs: [
      { q: "How far is Palakkayam Thattu from Thushara Homestay?", a: "About 8 km, around a 30-minute drive on the winding hill road." },
      { q: "What is the best time to visit Palakkayam Thattu?", a: "Sunrise or sunset. Avoid the afternoon, when it gets hot on top. September to February is the most comfortable season, and light monsoon days are lovely too. In very heavy rain the viewpoint can be closed." },
      { q: "Can I drive to Palakkayam Thattu in my own car?", a: "Yes. The road is steep and winding, so a 4x4 is easier, but your own car is fine. If you stay with us, we can arrange a jeep for the whole trip." },
      { q: "Is there a homestay near Palakkayam Thattu?", a: "Yes. Thushara Homestay in Karuvanchal is one of the closest cottage stays, 8 km from the viewpoint, with AC, free parking and Kerala meals, from ₹2,000 a night." },
      { q: "Is Palakkayam Thattu open during the monsoon?", a: "Usually, yes, and the hills are at their greenest. It can close on days of very heavy rain, and leeches are common in the wet season, so wear closed shoes." },
      { q: "What else can I visit nearby?", a: "Combine your trip with Kuttippullu (8 km) and Paithalmala (15 km from the homestay) for a full hill-country weekend. Ezharakund and Kappimala waterfalls are also close by." },
    ],
    related: "paithalmala",
  },
  paithalmala: {
    slug: "paithalmala",
    path: "/paithalmala",
    name: "Paithalmala",
    title: "Paithalmala: Trekking Guide & Nearest Homestay",
    seoTitle: "Paithalmala Trek Guide & Homestay 15 km Away | Thushara",
    seoDescription:
      "Paithalmala trek guide: best time, weather by season, Paithalmala vs Ranipuram and how to reach, plus Thushara Homestay, an AC cottage 15 km away.",
    km: 15,
    og: "/images/og/og-paithalmala-guide.jpg",
    lede: "Paithalmala is the highest hill in Kannur district, about 1,370 metres above sea level near the Kerala–Karnataka border. It's known for its forest trek and the watchtower at the summit, and it's a must-do for nature lovers in North Kerala. Thushara Homestay is 15 km away, an easy base for an early-morning start.",
    stats: [["~1,370 m", "altitude"], ["15 km", "from Thushara Homestay"], ["Early morning", "best time to trek"]],
    sections: [
      { h: "The trek", p: ["The usual starting point is near Pottenplave. Trails of roughly 5–6 km wind up through shola forest and grassland to the summit, where a tourism-department watchtower looks out over the valleys. On clear days you can see deep into Coorg. Carry water, wear good shoes and start early."] },
      { h: "Best time to visit", p: ["Start early in the morning, when it's cool and the hills are often wrapped in mist. Avoid the afternoon heat.", "September to February is the most comfortable season for trekking. Light monsoon days are beautiful, with green slopes and drifting clouds, but trails are wet. During very heavy rain the area can be closed. March to May is the hottest and least pleasant time to go."] },
      { h: "Paithalmala weather by season", list: ["March–May (summer): hot afternoons; trek early in the morning", "June–September (monsoon): green and misty, with wet trails and leeches; heaviest rain is usually June–July, when it can close", "October–February (cool season): clear, pleasant days and misty mornings, the most comfortable time to trek"] },
      { h: "Paithalmala or Ranipuram: which is better?", p: ["Both are forest-and-grassland hill treks in North Kerala, so it depends where you're based. Paithalmala, in Kannur district, is the higher of the two at about 1,370 m, with a watchtower at the top, and it's the easier choice if you're staying around Alakode, Karuvanchal or Taliparamba. Ranipuram is in Kasaragod district, with a summit of about 1,048 m, a shorter climb and a forest checkpoint at the start. It's a separate trip further north, about 43 km from Kanhangad.", "If you're staying with us, Paithalmala is the natural pick, and you can pair it with sunset at Palakkayam Thattu on the same day."] },
      { h: "How to reach", p: ["Paithalmala is about 65 km from Kannur town, in the Pottenplave area, reached via the Taliparamba–Alakode roads. From Thushara Homestay in Karuvanchal it's roughly 15 km to the base, about a 45-minute drive. We can help arrange a jeep and share route tips when you stay with us."] },
      { h: "Stay 15 km from Paithalmala", p: ["Thushara Homestay in Karuvanchal, Alakode is an independent 1BHK cottage with AC, a living room, kitchenette, private bathroom and free parking. It's comfortable for up to 3 guests, from ₹2,000/night, with traditional Kerala meals available."], list: ["Paithalmala hill station: 15 km", "Palakkayam Thattu: 8 km", "Kuttippullu viewpoint: 8 km", "Convenient for Alakode, Karuvanchal, Naduvil and Vayattuparamb"] },
    ],
    faqs: [
      { q: "Where can I stay near Paithalmala?", a: "Thushara Homestay is a 1BHK AC cottage in Karuvanchal, 15 km from Paithalmala, from ₹2,000 a night. It's ideal for an early start to the trek, and we can arrange a jeep." },
      { q: "What is the best time to visit Paithalmala?", a: "Early morning, before the afternoon heat. September to February is the most comfortable season; light monsoon days are beautiful but wet, and the area can close in very heavy rain." },
      { q: "What is the weather like at Paithalmala?", a: "Cool and often misty in the mornings. Summer afternoons (March–May) are hot, the monsoon (June–September) brings heavy rain and leeches, and October to February is clear and pleasant." },
      { q: "Paithalmala or Ranipuram: which is better?", a: "Paithalmala is higher (about 1,370 m against Ranipuram's 1,048 m) and much closer if you're staying around Alakode or Karuvanchal. Ranipuram, in Kasaragod district, is a shorter climb but a separate trip further north." },
      { q: "How far is Paithalmala from Alakode?", a: "From our homestay in Karuvanchal, near Alakode, it's about 15 km to the base, around 45 minutes by road. Paithalmala is about 65 km from Kannur town." },
      { q: "Can I combine Paithalmala and Palakkayam Thattu in one trip?", a: "Yes. Many guests trek Paithalmala in the morning and watch the sunset from Palakkayam Thattu, 8 km from the homestay." },
    ],
    related: "palakkayam-thattu",
  },
  "things-to-do-near-alakode": {
    slug: "things-to-do-near-alakode",
    path: "/things-to-do-near-alakode",
    name: "Things to do near Alakode",
    title: "Things to Do Near Alakode: Viewpoints, Treks & Waterfalls",
    seoTitle: "Things to Do Near Alakode, Kannur | Thushara Homestay",
    seoDescription:
      "Things to do near Alakode and Karuvanchal: Palakkayam Thattu, Paithalmala, Ezharakund and Kappimala waterfalls, with local tips from Thushara Homestay.",
    about: { "@type": "Place", name: "Alakode, Kannur district, Kerala" },
    km: 0,
    og: "/images/og/og-kannur-hills-homestays.jpg",
    lede: "Alakode and Karuvanchal sit at the foot of some of Kannur's best hill country: misty viewpoints, a forest trek to the district's highest hill and waterfalls that roar in the monsoon. Here's what's worth your time near Thushara Homestay, with local tips from our host, Mr. Joseph.",
    stats: [["8 km", "to Palakkayam Thattu"], ["15 km", "to Paithalmala"], ["2", "waterfalls nearby"]],
    sections: [
      { h: "Palakkayam Thattu: sunrise and sunset viewpoint", p: ["A tabletop viewpoint about 3,500 ft up, 8 km (about 30 minutes) from the homestay, with wide valley views and drifting mist. Go at sunrise or sunset and skip the hot afternoon. You can drive up in your own car (a 4x4 is easier), or we can arrange a jeep for the whole trip."], link: { to: "/palakkayam-thattu", label: "Read the full Palakkayam Thattu guide" } },
      { h: "Paithalmala: Kannur's highest hill", p: ["At about 1,370 m, Paithalmala is the highest hill in Kannur district. Trails of roughly 5–6 km climb through shola forest and grassland from near Pottenplave to a watchtower at the summit. It's 15 km from the homestay, about a 45-minute drive: start early in the morning, before the afternoon heat."], link: { to: "/paithalmala", label: "Read the full Paithalmala trekking guide" } },
      { h: "Kuttippullu: a quiet grassland viewpoint", p: ["About 8 km from the homestay, Kuttippullu is a quieter, open grassland viewpoint, perfect for an easy evening outing after a day on the hills."] },
      { h: "Ezharakund Waterfalls: seven tiers in the Paithalmala valley", p: ["Ezharakund is a seven-tiered waterfall in the Paithalmala valley; the name means \"seven-and-a-half pits\" in Malayalam, after its rocky pools. From the Chathamala Facility Centre it's about a 2 km walk on a shaded trail, with safety rails along the stream. Google Maps puts it at about 45 minutes' drive from the homestay.", "It's at its best in the monsoon, but choose a day without heavy rain: rocks get slippery and leeches are common."] },
      { h: "Kappimala Waterfalls", p: ["Kappimala, near Alakode, is a waterfall with a natural pool-like setting in thick greenery, and it's usually visited together with Paithalmala. It's especially popular for monsoon treks. Safety facilities are limited, so stay on the path and keep out of the water when the flow is strong. Google Maps puts it at about 30 minutes' drive from the homestay."] },
      { h: "A two-day plan", list: ["Day 1: Paithalmala trek at sunrise, Kappimala Waterfalls on the way back, sunset at Palakkayam Thattu", "Day 2: Ezharakund Waterfalls in the morning, an easy evening at Kuttippullu", "Ask us the day before: we can arrange a jeep and share the best route for the weather"] },
      { h: "Tips for the hills around Alakode", list: ["Best light: sunrise and sunset; avoid hot afternoons on the hilltops", "September to February is the most comfortable season; light monsoon days are beautiful and green", "Viewpoints and trails can close on very heavy rain days, so check the weather before you set out", "In the monsoon, wear closed shoes: leeches are common on trails", "A 4x4 or a hired jeep makes the steep hill roads easier", "Carry water and some cash for any entry charges"] },
    ],
    faqs: [
      { q: "What are the best places to visit near Alakode?", a: "Palakkayam Thattu viewpoint (8 km from Thushara Homestay), the Paithalmala trek (15 km), the Kuttippullu grassland viewpoint (8 km), and the Ezharakund and Kappimala waterfalls." },
      { q: "Are there waterfalls near Alakode?", a: "Yes. Kappimala Waterfalls is near Alakode, about 30 minutes' drive from our homestay, and Ezharakund, a seven-tiered waterfall in the Paithalmala valley, is about 45 minutes away by Google Maps' estimate." },
      { q: "Can I visit Paithalmala and Palakkayam Thattu on the same day?", a: "Yes. Trek Paithalmala early in the morning and watch the sunset from Palakkayam Thattu. We can arrange a jeep for the day." },
      { q: "Is it safe to visit the waterfalls in the monsoon?", a: "On normal rain days, yes, with care: stay on the path, keep out of strong currents and watch for slippery rocks and leeches. Skip them on days of very heavy rain." },
      { q: "Where can I stay near Alakode?", a: "Thushara Homestay is a private 1BHK AC cottage in Karuvanchal, near Alakode, sleeping up to 3 guests, from ₹2,000 a night, with free parking and Kerala meals available." },
    ],
    related: "palakkayam-thattu",
  },
};
