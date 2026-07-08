import { motion } from "framer-motion";

export default function PalakkayamThattuPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-background text-foreground"
    >
      <main className="max-w-3xl mx-auto px-5 py-12 md:py-16">
        <nav className="mb-8 text-sm">
          <a href="/" className="underline hover:no-underline">Home</a>
          <span className="mx-2">/</span>
          <a href="/thushara" className="underline hover:no-underline">Thushara Homestay</a>
          <span className="mx-2">/</span>
          <span>Palakkayam Thattu Guide</span>
        </nav>

        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          Palakkayam Thattu: Visitor Guide & Where to Stay Nearby
        </h1>
        <p className="text-lg mb-8">
          Palakkayam Thattu is one of North Kerala's most loved hill destinations — a
          misty tabletop viewpoint in the Western Ghats near Alakode and Naduvil in
          Kannur district. Thushara Homestay is just <strong>8 km away</strong>, making
          it one of the closest comfortable stays to the viewpoint.
        </p>

        <h2 className="text-2xl font-semibold mb-3">Why visit Palakkayam Thattu?</h2>
        <p className="mb-6">
          Perched high above the plains, Palakkayam Thattu offers sweeping views of
          green valleys, rolling mist, and dramatic sunrises. The hilltop is known for
          its cool climate year-round, off-road jeep rides to the top, and seasonal
          adventure activities. It's a favourite for families, couples, and
          photographers alike.
        </p>

        <h2 className="text-2xl font-semibold mb-3">Best time to visit</h2>
        <p className="mb-6">
          October to February is the most pleasant season, with clear mornings and
          misty evenings. Early morning is the best time to catch the sunrise and
          mist-filled valleys before day crowds arrive. The monsoon months turn the
          hills a deep green but can bring heavy rain and slippery paths.
        </p>

        <h2 className="text-2xl font-semibold mb-3">How to reach</h2>
        <p className="mb-6">
          Palakkayam Thattu is reached via the Naduvil–Alakode region of Kannur
          district. From Thushara Homestay in Velladu it is a short 8 km drive.
          Jeeps operate from the base to the hilltop viewpoint. If you're staying with
          us, we're happy to help arrange transport and local guidance — just ask.
        </p>

        <h2 className="text-2xl font-semibold mb-3">Stay 8 km from Palakkayam Thattu</h2>
        <p className="mb-4">
          <strong>Thushara Homestay</strong> in Velladu, Alakode is an independent
          1BHK cottage with AC, a living room, kitchenette, private bathroom and free
          parking — comfortable for up to 3 guests, from ₹2000/night with traditional
          Kerala meals available.
        </p>
        <ul className="list-disc pl-6 mb-8 space-y-1">
          <li>Palakkayam Thattu — 8 km</li>
          <li>Kuttippullu viewpoint — 8 km</li>
          <li>Paithalmala hill station — 15 km</li>
          <li>Convenient for Alakode, Karuvanchal, Naduvil and Vayattuparamb</li>
        </ul>

        <div className="flex flex-wrap gap-4 mb-12">
          <a
            href="/thushara"
            className="px-6 py-3 rounded-md bg-primary text-primary-foreground font-medium hover:opacity-90"
          >
            View Thushara Homestay
          </a>
          <a
            href="https://wa.me/918330094302"
            className="px-6 py-3 rounded-md border border-primary font-medium hover:bg-primary/10"
          >
            Book on WhatsApp
          </a>
        </div>

        <h2 className="text-2xl font-semibold mb-3">Frequently asked questions</h2>
        <div className="space-y-5 mb-12">
          <div>
            <h3 className="font-semibold">How far is Palakkayam Thattu from Thushara Homestay?</h3>
            <p>Just 8 km — around 15–20 minutes by road.</p>
          </div>
          <div>
            <h3 className="font-semibold">Is there accommodation near Palakkayam Thattu?</h3>
            <p>
              Yes. Thushara Homestay in Velladu is one of the closest cottage stays,
              8 km from the viewpoint, with AC, parking and Kerala meals.
            </p>
          </div>
          <div>
            <h3 className="font-semibold">What else can I visit nearby?</h3>
            <p>
              Combine your trip with Kuttippullu (8 km) and Paithalmala (15 km from the
              homestay) for a full hill-country weekend.
            </p>
          </div>
        </div>

        <p className="text-sm opacity-70">
          Also read: <a href="/paithalmala" className="underline">Paithalmala visitor guide</a>
        </p>
      </main>
    </motion.div>
  );
}
