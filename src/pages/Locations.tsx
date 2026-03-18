import { motion } from "framer-motion";
import { MapPin, Phone, Clock } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const punjabImg = "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=900&q=80";

const offices = [
  {
    city: "Mohali",
    address: "Mohali, Punjab India",
    phone: "123",
    hours: "Mon–Sat: 9:00 AM – 6:00 PM",
  },
  {
    city: "Fatehgarh Sahib",
    address: "Fatehgarh Sahib, Punjab India",
    phone: "123",
    hours: "Mon–Sat: 9:00 AM – 6:00 PM",
  },
  {
    city: "Khamano",
    address: "Khamano, Punjab India",
    phone: "123",
    hours: "Mon–Sat: 9:00 AM – 6:00 PM",
  },
];

const Locations = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <section className="relative py-32 lg:py-44 flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=1920&q=85"
          alt=""
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-brand-navy/70" />
      </div>
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-display font-extrabold text-white leading-tight mb-6">
            Our Locations
          </h1>
          <p className="text-lg sm:text-xl text-white/80 leading-relaxed font-normal max-w-2xl mx-auto">
            Visit us at any of our offices across Punjab. Walk-ins are welcome — no appointment needed.
          </p>
        </motion.div>
      </div>
    </section>

    <section className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 grid lg:grid-cols-2 gap-16 items-start">
        <div className="space-y-6">
          {offices.map((loc, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="p-8 rounded-3xl bg-card border border-border hover:border-brand-saffron/30 hover:shadow-brand transition-brand"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-brand-saffron rounded-full flex items-center justify-center shrink-0">
                  <MapPin className="text-accent-foreground w-6 h-6" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-display font-bold text-brand-navy mb-2">{loc.city}</h3>
                  <p className="text-muted-foreground text-sm mb-3">{loc.address}</p>
                  <div className="flex flex-wrap gap-4 text-sm">
                    <a href={`tel:${loc.phone}`} className="flex items-center gap-1.5 text-brand-saffron font-bold hover:underline">
                      <Phone className="w-4 h-4" /> {loc.phone}
                    </a>
                    <span className="flex items-center gap-1.5 text-muted-foreground">
                      <Clock className="w-4 h-4" /> {loc.hours}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="sticky top-28"
        >
          <div className="rounded-4xl overflow-hidden shadow-xl border border-border">
            <img
              src={punjabImg}
              alt="Punjab Region"
              className="w-full h-[400px] lg:h-[500px] object-cover"
            />
          </div>
          <div className="mt-6 p-6 rounded-3xl bg-navy-gradient text-primary-foreground text-center">
            <p className="font-display font-bold text-lg mb-1">Emergency Helpline</p>
            <a href="tel:123" className="text-brand-saffron text-3xl font-display font-bold">123</a>
            <p className="text-primary-foreground/60 text-sm mt-1">Available 24 hours, 7 days a week</p>
          </div>
        </motion.div>
      </div>
    </section>
    <Footer />
  </div>
);

export default Locations;
