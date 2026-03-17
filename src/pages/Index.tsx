import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Phone, ArrowRight, ShieldCheck, Heart, Users, Scale } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Unsplash images
const aboutImg = "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=900&q=80";
const fadeUp = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.2, 0, 0, 1] as const },
};

const Hero = () => (
  <section className="relative min-h-[90vh] flex items-center overflow-hidden">
    {/* Hero background image */}
    <div className="absolute inset-0 z-0">
      <img
        src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1920&q=85"
        alt=""
        className="w-full h-full object-cover object-center"
      />
      <div className="absolute inset-0 bg-brand-navy/75" />
    </div>
    <div className="relative z-10 w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-12 py-24 lg:py-32 text-center">
      <motion.div {...fadeUp}>
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-saffron/20 border border-brand-saffron/40 text-brand-saffron text-xs font-bold uppercase tracking-widest mb-6">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping-slow absolute inline-flex h-full w-full rounded-full bg-brand-saffron opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-saffron" />
          </span>
          24/7 Emergency Legal Aid
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-display font-extrabold text-white leading-[1.1] mb-6 tracking-tight">
          Justice for those who{" "}
          <span className="text-brand-saffron">need it most.</span>
        </h1>
        <p className="text-base sm:text-lg text-white/80 mb-8 max-w-2xl mx-auto leading-relaxed font-normal">
          Dedicated to providing free legal support to the underprivileged in Punjab. Your financial status should never be a barrier to your rights.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            to="/contact"
            className="bg-brand-saffron text-brand-navy px-6 sm:px-8 py-4 rounded-3xl font-bold flex items-center gap-2 hover:opacity-90 transition-brand active:scale-95 text-sm sm:text-base"
          >
            Get Free Legal Help Now <ArrowRight className="w-5 h-5" />
          </Link>
          <a
            href="tel:123"
            className="bg-white/10 border border-white/30 text-white px-6 sm:px-8 py-4 rounded-3xl font-bold flex items-center gap-2 hover:bg-white/20 transition-brand text-sm sm:text-base"
          >
            <Phone className="w-5 h-5" /> Call 123
          </a>
        </div>
      </motion.div>
    </div>
  </section>
);;

const Stats = () => (
  <section className="py-16 bg-card border-y border-border">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 grid grid-cols-2 lg:grid-cols-4 gap-8">
      {[
        { value: "5000+", label: "People Helped" },
        { value: "100%", label: "Free Services" },
        { value: "24/7", label: "Emergency Support" },
        { value: "3+", label: "Office Locations" },
      ].map((stat, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1, duration: 0.5 }}
          className="text-center"
        >
          <div className="text-3xl sm:text-4xl font-display font-bold text-brand-navy mb-1">{stat.value}</div>
          <div className="text-sm text-muted-foreground">{stat.label}</div>
        </motion.div>
      ))}
    </div>
  </section>
);

const Services = () => {
  const services = [
    { title: "Free Consultation", desc: "Speak with our legal experts without any financial obligation. Walk into any office.", icon: <ShieldCheck className="w-8 h-8" /> },
    { title: "Emergency Aid", desc: "24/7 support for urgent legal matters and immediate interventions across Punjab.", icon: <Phone className="w-8 h-8" /> },
    { title: "Video Representation", desc: "Connect with senior lawyers via video call from our local offices anywhere.", icon: <Scale className="w-8 h-8" /> },
  ];

  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-brand-navy mb-4">How We Help</h2>
          <p className="text-muted-foreground font-normal">Comprehensive legal support designed for accessibility and speed.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className="group p-8 sm:p-10 rounded-4xl bg-card border border-border hover:border-brand-saffron/30 hover:shadow-brand transition-brand"
            >
              <div className="w-16 h-16 bg-secondary rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-brand">
                <span className="text-brand-navy">{s.icon}</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-display font-bold text-brand-navy mb-4">{s.title}</h3>
              <p className="text-muted-foreground leading-relaxed font-normal">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const AboutPreview = () => (
  <section className="py-20 lg:py-28 bg-secondary/50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 grid lg:grid-cols-2 gap-12 items-center">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <img
          src={aboutImg}
          alt="Lawyer helping client"
          className="rounded-4xl w-full h-[350px] sm:h-[450px] object-cover shadow-xl"
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-brand-navy mb-6">
          Justice is a Right, Not a Luxury
        </h2>
        <p className="text-muted-foreground leading-relaxed mb-4 font-normal">
          Jain & Associates was founded with a singular mission: to ensure that every individual, regardless of their financial status, has access to quality legal representation.
        </p>
        <p className="text-muted-foreground leading-relaxed mb-8 font-normal">
          Operating across multiple offices in Punjab, we bridge the gap between legal expertise and those who need it most.
        </p>
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2 text-brand-saffron font-bold">
            <Users className="w-5 h-5" /> Community First
          </div>
          <div className="flex items-center gap-2 text-brand-saffron font-bold">
            <Heart className="w-5 h-5" /> Pro-bono Services
          </div>
        </div>
        <Link
          to="/about"
          className="inline-flex items-center gap-2 mt-8 text-brand-navy font-bold hover:gap-3 transition-all"
        >
          Learn More About Us <ArrowRight className="w-4 h-4" />
        </Link>
      </motion.div>
    </div>
  </section>
);

const CTA = () => (
  <section className="py-20 lg:py-28 bg-navy-gradient text-primary-foreground">
    <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold mb-6">
          Need Legal Help? We're Here for You.
        </h2>
        <p className="text-primary-foreground/70 text-lg mb-10 max-w-2xl mx-auto font-normal">
          Don't let your financial situation stop you from getting justice. Reach out to us — it's completely free.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            to="/contact"
            className="bg-brand-saffron text-accent-foreground px-8 py-4 rounded-3xl font-bold flex items-center gap-2 hover:opacity-90 transition-brand active:scale-95"
          >
            Get Free Help Now <ArrowRight className="w-5 h-5" />
          </Link>
          <Link
            to="/donate"
            className="bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground px-8 py-4 rounded-3xl font-bold flex items-center gap-2 hover:bg-primary-foreground/20 transition-brand"
          >
            Support Our Cause
          </Link>
        </div>
      </motion.div>
    </div>
  </section>
);

const Index = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <Hero />
    <Stats />
    <Services />
    <AboutPreview />
    <CTA />
    <Footer />
  </div>
);

export default Index;
