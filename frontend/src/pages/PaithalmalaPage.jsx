import { motion } from "framer-motion";

export default function PaithalmalaPage() {
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
          <span>Paithalmala Guide</span>
        </nav>

        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          Paithalmala: Trekking Guide & Where to Stay Nearby
        </h1>
        <p className="text-lg mb-8">
          Paithalmala is the highest hill station in Kannur district, rising around
          1,370 metres above sea level near the Kerala–Karnataka border. Famous for its
          trek through evergreen forest and the panoramic watchtower at the summit,
          it's a must-do for nature lovers visiting North Kerala. Thushara Homestay is
          <strong> 15 km away</strong> — an easy base for an early-morning start.
        </p>

        <h2 className="text-2xl font-semibold mb-3">The trek</h2>
        <p className="mb-6">
          From the entry point near Pottenplave, a trail winds up through forest and
          grassland to the summit watchtower. The round trip is a moderate trek that
          rewards you with valley views, mist, and — on clear days — sightlines deep
          into Coorg. Carry water, wear good footwear, and start early for the best
          weather.
        </p>

        <h2 className="text-2xl font-semibold mb-3">Best time to visit</h2>
        <p className="mb-6">
          The cooler months from October to February offer the clearest views and most
          comfortable trekking weather. Mornings are best — the hills are often wrapped
          in mist just after sunrise. Monsoon months are lush but wet and slippery.
        </p>

        <h2 className="text-2xl font-semibold mb-3">How to reach</h2>
        <p className="mb-6">
          Paithalmala lies in the Pottenplave area of Kannur district, reachable via
          Taliparamba–Alakode roads. From Thushara Homestay in Velladu it's roughly a
          15 km drive to the base. We can help arrange transport and share route tips
          when you stay with us.
        </p>

        <h2 className="text-2xl font-semibold mb-3">Stay 15 km from Paithalmala</h2>
        <p className="mb-4">
          <strong>Thushara Homestay</strong> in Velladu, Alakode is an independent
          1BHK cottage with AC, living room, kitchenette, private bathroom and free
          parking — comfortable for up to 3 guests, from ₹2000/night with traditional
          Kerala meals available.
        </p>
        <ul className="list-disc pl-6 mb-8 space-y-1">
          <li>Paithalmala hill station — 15 km</li>
          <li>Palakkayam Thattu — 8 km</li>
          <li>Kuttippullu viewpoint — 8 km</li>
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
            <h3 className="font-semibold">How far is Paithalmala from Alakode?</h3>
            <p>
              The Paithalmala base area is a comfortable drive from Alakode town;
              from our homestay in Velladu (on the Karuvanchal–Velladu road) it is
              about 15 km.
            </p>
          </div>
          <div>
            <h3 className="font-semibold">Is there a homestay near Paithalmala?</h3>
            <p>
              Yes. Thushara Homestay is a 1BHK AC cottage 15 km from Paithalmala —
              ideal for an early start to the trek.
            </p>
          </div>
          <div>
            <h3 className="font-semibold">Can I combine Paithalmala and Palakkayam Thattu in one trip?</h3>
            <p>
              Absolutely — they're on the same side of Kannur district. Many guests
              trek Paithalmala in the morning and watch sunset from Palakkayam Thattu.
            </p>
          </div>
        </div>

        <p className="text-sm opacity-70">
          Also read: <a href="/palakkayam-thattu" className="underline">Palakkayam Thattu visitor guide</a>
        </p>
      </main>
    </motion.div>
  );
}
