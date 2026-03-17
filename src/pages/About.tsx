import { motion } from "framer-motion";
import { Heart, Users, Target, Eye } from "lucide-react";
import aboutImg from "@/assets/about-helping.jpg";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: [0.2, 0, 0, 1] as const },
};

const About = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <section className="pt-28 pb-20 lg:pt-36 lg:pb-28 bg-mesh">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <motion.div {...fadeUp} className="max-w-3xl">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-brand-navy leading-tight mb-6">
            About Jain & Associates
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Founded with the belief that justice should never be a privilege of the wealthy, we serve the underprivileged communities of Punjab with dedication and compassion.
          </p>
        </motion.div>
      </div>
    </section>

    <section className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 grid lg:grid-cols-2 gap-16 items-center">
        <motion.img
          {...fadeUp}
          src={aboutImg}
          alt="Lawyer helping client"
          className="rounded-4xl w-full h-[400px] lg:h-[500px] object-cover shadow-xl"
        />
        <div className="space-y-8">
          <motion.div {...fadeUp}>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-12 h-12 bg-brand-saffron/10 rounded-2xl flex items-center justify-center">
                <Target className="w-6 h-6 text-brand-saffron" />
              </div>
              <h3 className="text-xl font-display font-bold text-brand-navy">Our Mission</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              To ensure equal access to justice by offering free legal support to those who cannot afford it. We believe every individual deserves fair representation regardless of their financial status.
            </p>
          </motion.div>
          <motion.div {...fadeUp} transition={{ delay: 0.15, duration: 0.6 }}>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-12 h-12 bg-brand-saffron/10 rounded-2xl flex items-center justify-center">
                <Eye className="w-6 h-6 text-brand-saffron" />
              </div>
              <h3 className="text-xl font-display font-bold text-brand-navy">Our Vision</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              A society where every individual, regardless of financial status, can defend their rights and receive fair legal assistance. We envision Punjab where no one is denied justice.
            </p>
          </motion.div>
        </div>
      </div>
    </section>

    <section className="py-20 bg-secondary/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <h2 className="text-3xl font-display font-bold text-brand-navy text-center mb-12">Our Values</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { icon: <Heart className="w-6 h-6" />, title: "Compassion", desc: "We treat every client with empathy and dignity." },
            { icon: <Users className="w-6 h-6" />, title: "Accessibility", desc: "Legal help available to all, regardless of status." },
            { icon: <Target className="w-6 h-6" />, title: "Integrity", desc: "Honest, transparent, and ethical in all we do." },
            { icon: <Eye className="w-6 h-6" />, title: "Dedication", desc: "Available 24/7 for those who need us most." },
          ].map((v, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="p-8 rounded-3xl bg-card border border-border text-center"
            >
              <div className="w-14 h-14 bg-brand-saffron/10 rounded-2xl flex items-center justify-center mx-auto mb-4 text-brand-saffron">
                {v.icon}
              </div>
              <h3 className="font-display font-bold text-brand-navy mb-2">{v.title}</h3>
              <p className="text-sm text-muted-foreground">{v.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
    <Footer />
  </div>
);

export default About;
