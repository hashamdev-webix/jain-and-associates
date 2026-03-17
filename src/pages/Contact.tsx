import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <section className="relative py-32 lg:py-44 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1423592707957-3b212afa6733?w=1920&q=85"
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
              Contact Us
            </h1>
            <p className="text-lg sm:text-xl text-white/80 leading-relaxed font-normal max-w-2xl mx-auto">
              Reach out to us for free legal assistance. We're here to help you.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 grid lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div>
            <h2 className="text-2xl font-display font-bold text-brand-navy mb-8">Get in Touch</h2>
            <div className="space-y-6 mb-12">
              {[
                { icon: <Phone className="w-5 h-5" />, label: "Phone", value: "123", href: "tel:123" },
                { icon: <Mail className="w-5 h-5" />, label: "Email", value: "info@jainassociates.in", href: "mailto:info@jainassociates.in" },
                { icon: <MapPin className="w-5 h-5" />, label: "Head Office", value: "Phase 7, Sector 73, Mohali, Punjab", href: "#" },
              ].map((item, i) => (
                <a
                  key={i}
                  href={item.href}
                  className="flex items-start gap-4 p-5 rounded-2xl bg-card border border-border hover:border-brand-saffron/30 transition-brand group"
                >
                  <div className="w-10 h-10 bg-brand-saffron/10 rounded-xl flex items-center justify-center text-brand-saffron shrink-0 group-hover:scale-110 transition-brand">
                    {item.icon}
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground uppercase tracking-wider mb-0.5">{item.label}</div>
                    <div className="font-medium text-foreground">{item.value}</div>
                  </div>
                </a>
              ))}
            </div>

            <div className="p-6 rounded-3xl bg-navy-gradient text-primary-foreground">
              <h3 className="font-display font-bold text-lg mb-2">24/7 Emergency Helpline</h3>
              <p className="text-primary-foreground/60 text-sm mb-3">
                For urgent legal matters, call us anytime.
              </p>
              <a href="tel:123" className="text-brand-saffron text-2xl font-display font-bold">
                123
              </a>
            </div>
          </div>

          {/* Form */}
          <div>
            <h2 className="text-2xl font-display font-bold text-brand-navy mb-8">Send a Message</h2>
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-12 rounded-3xl bg-card border border-border text-center"
              >
                <div className="w-16 h-16 bg-brand-saffron/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Send className="w-8 h-8 text-brand-saffron" />
                </div>
                <h3 className="text-xl font-display font-bold text-brand-navy mb-2">Message Sent!</h3>
                <p className="text-muted-foreground">Thank you for reaching out. We'll get back to you soon.</p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-6 text-brand-saffron font-bold text-sm hover:underline"
                >
                  Send another message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">Full Name</label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 rounded-2xl border border-border bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-brand-saffron/50 transition-brand"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">Phone</label>
                    <input
                      type="tel"
                      required
                      className="w-full px-4 py-3 rounded-2xl border border-border bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-brand-saffron/50 transition-brand"
                      placeholder="Your phone number"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 rounded-2xl border border-border bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-brand-saffron/50 transition-brand"
                    placeholder="Your email (optional)"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">How can we help?</label>
                  <textarea
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-2xl border border-border bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-brand-saffron/50 transition-brand resize-none"
                    placeholder="Describe your legal issue..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-brand-navy text-primary-foreground py-4 rounded-2xl font-bold hover:shadow-brand transition-brand active:scale-[0.98] flex items-center justify-center gap-2"
                >
                  Send Message <Send className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Contact;
