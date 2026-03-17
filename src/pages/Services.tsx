import { motion } from "framer-motion";
import { ShieldCheck, Phone, Scale, Video, FileText, Users, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const services = [
  {
    icon: <ShieldCheck className="w-8 h-8" />,
    title: "Free Legal Consultation",
    desc: "Walk into any of our offices and speak with our legal experts without any financial obligation. We assess your case and provide guidance on next steps.",
  },
  {
    icon: <Phone className="w-8 h-8" />,
    title: "24/7 Emergency Legal Aid",
    desc: "Urgent legal matters can't wait. Our emergency helpline is available round the clock to provide immediate legal intervention and support.",
  },
  {
    icon: <Video className="w-8 h-8" />,
    title: "Video Call Consultation",
    desc: "Can't visit our office? Connect with senior lawyers via video call from the comfort of your home or from our local partner locations.",
  },
  {
    icon: <Scale className="w-8 h-8" />,
    title: "Court Representation",
    desc: "Full legal representation in courts across Punjab. Our experienced lawyers will fight for your rights at every level of the judiciary.",
  },
  {
    icon: <FileText className="w-8 h-8" />,
    title: "Legal Documentation",
    desc: "Assistance with legal paperwork, affidavits, applications, and all documentation needed for your case — completely free of charge.",
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "Community Legal Camps",
    desc: "We organize regular legal awareness camps in villages and towns across Punjab to educate people about their rights and available legal remedies.",
  },
];

const ServicesPage = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <section className="relative py-32 lg:py-44 flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1505664194779-8beaceb93744?w=1920&q=85"
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
            Our Services
          </h1>
          <p className="text-lg sm:text-xl text-white/80 leading-relaxed font-normal max-w-2xl mx-auto">
            All our services are completely free for underprivileged individuals. We believe that access to justice is a fundamental right.
          </p>
        </motion.div>
      </div>
    </section>

    <section className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className="group p-8 rounded-4xl bg-card border border-border hover:border-brand-saffron/30 hover:shadow-brand transition-brand"
          >
            <div className="w-16 h-16 bg-secondary rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-brand text-brand-navy">
              {s.icon}
            </div>
            <h3 className="text-xl font-display font-bold text-brand-navy mb-3">{s.title}</h3>
            <p className="text-muted-foreground leading-relaxed text-sm">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>

    {/* How it works */}
    <section className="py-20 bg-secondary/50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-12">
        <h2 className="text-3xl font-display font-bold text-brand-navy text-center mb-12">How It Works</h2>
        <div className="space-y-6">
          {[
            { step: "01", title: "Visit or Call", desc: "Come to our nearest office or call our helpline at 123." },
            { step: "02", title: "Meet Our Team", desc: "Our assistant will understand your case and connect you with the right lawyer." },
            { step: "03", title: "Get Representation", desc: "Meet the lawyer physically or connect via video call — whichever suits you." },
            { step: "04", title: "Justice Served", desc: "We fight your case at every level until justice is delivered — completely free." },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="flex gap-6 p-6 rounded-3xl bg-card border border-border"
            >
              <div className="text-3xl font-display font-bold text-brand-saffron shrink-0">{item.step}</div>
              <div>
                <h4 className="font-display font-bold text-brand-navy mb-1">{item.title}</h4>
                <p className="text-muted-foreground text-sm">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-brand-navy text-primary-foreground px-8 py-4 rounded-3xl font-bold hover:shadow-brand transition-brand active:scale-95"
          >
            Get Started Now <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
    <Footer />
  </div>
);

export default ServicesPage;
