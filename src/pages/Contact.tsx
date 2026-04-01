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

            <div className="relative overflow-hidden p-8 rounded-3xl bg-gradient-to-br from-brand-navy via-brand-navy/95 to-brand-navy/90 text-white shadow-xl">
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-saffron/10 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-brand-saffron/5 rounded-full blur-2xl"></div>
              <div className="relative">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-saffron/20 text-brand-saffron text-xs font-bold mb-4">
                  <span className="w-2 h-2 bg-brand-saffron rounded-full animate-pulse"></span>
                  AVAILABLE 24/7
                </div>
                <h3 className="font-display font-bold text-2xl mb-3 leading-tight">
                  Need Urgent Legal Help?
                </h3>
                <p className="text-white/70 text-sm mb-6 leading-relaxed">
                  Our emergency helpline is always available for critical legal matters. Don't hesitate to reach out.
                </p>
                <a 
                  href="tel:123" 
                  className="inline-flex items-center gap-3 px-6 py-3.5 bg-brand-saffron hover:bg-brand-saffron/90 text-white rounded-xl font-bold text-lg transition-all hover:scale-105 active:scale-95 shadow-lg"
                >
                  <Phone className="w-5 h-5" />
                  <span>Call 123 Now</span>
                </a>
              </div>
            </div>
          </div>

          {/* Form */}
          <div>
            <h2 className="text-2xl font-display font-bold text-brand-navy mb-8">Send a Message</h2>
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-12 rounded-3xl bg-gradient-to-br from-brand-saffron/5 via-brand-navy/5 to-transparent border-2 border-brand-saffron/20 text-center backdrop-blur-sm"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-brand-saffron to-brand-saffron/70 rounded-full flex items-center justify-center mx-auto mb-5 shadow-lg">
                  <Send className="w-9 h-9 text-white" />
                </div>
                <h3 className="text-2xl font-display font-bold text-brand-navy mb-3">Message Sent Successfully!</h3>
                <p className="text-muted-foreground text-base leading-relaxed max-w-sm mx-auto">
                  Thank you for reaching out. Our team will review your message and get back to you within 24 hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-8 px-6 py-2.5 bg-brand-navy text-white rounded-full font-bold text-sm hover:opacity-90 transition-brand"
                >
                  Send another message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="relative">
                    <label className="block text-sm font-semibold text-brand-navy mb-2">Full Name *</label>
                    <input
                      type="text"
                      required
                      className="w-full px-5 py-3.5 rounded-xl border-2 border-border bg-card text-foreground focus:outline-none focus:border-brand-saffron focus:ring-4 focus:ring-brand-saffron/10 transition-all placeholder:text-muted-foreground/50"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div className="relative">
                    <label className="block text-sm font-semibold text-brand-navy mb-2">Phone Number *</label>
                    <input
                      type="tel"
                      required
                      className="w-full px-5 py-3.5 rounded-xl border-2 border-border bg-card text-foreground focus:outline-none focus:border-brand-saffron focus:ring-4 focus:ring-brand-saffron/10 transition-all placeholder:text-muted-foreground/50"
                      placeholder="+91 XXXXX XXXXX"
                    />
                  </div>
                </div>
                <div className="relative">
                  <label className="block text-sm font-semibold text-brand-navy mb-2">Email Address</label>
                  <input
                    type="email"
                    className="w-full px-5 py-3.5 rounded-xl border-2 border-border bg-card text-foreground focus:outline-none focus:border-brand-saffron focus:ring-4 focus:ring-brand-saffron/10 transition-all placeholder:text-muted-foreground/50"
                    placeholder="your.email@example.com (optional)"
                  />
                </div>
                <div className="relative">
                  <label className="block text-sm font-semibold text-brand-navy mb-2">Legal Issue Category</label>
                  <select
                    className="w-full px-5 py-3.5 rounded-xl border-2 border-border bg-card text-foreground focus:outline-none focus:border-brand-saffron focus:ring-4 focus:ring-brand-saffron/10 transition-all"
                  >
                    <option value="">Select a category</option>
                    <option value="family">Family Law</option>
                    <option value="property">Property Disputes</option>
                    <option value="criminal">Criminal Defense</option>
                    <option value="civil">Civil Matters</option>
                    <option value="consumer">Consumer Rights</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div className="relative">
                  <label className="block text-sm font-semibold text-brand-navy mb-2">Describe Your Legal Issue *</label>
                  <textarea
                    required
                    rows={6}
                    className="w-full px-5 py-3.5 rounded-xl border-2 border-border bg-card text-foreground focus:outline-none focus:border-brand-saffron focus:ring-4 focus:ring-brand-saffron/10 transition-all resize-none placeholder:text-muted-foreground/50"
                    placeholder="Please provide details about your legal situation. The more information you share, the better we can assist you..."
                  />
                </div>
                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-brand-navy to-brand-navy/90 text-white py-4 rounded-xl font-bold text-base hover:shadow-xl hover:shadow-brand-navy/20 transition-all duration-300 active:scale-[0.98] flex items-center justify-center gap-3 group"
                  >
                    <span>Send Message</span>
                    <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                  <p className="text-xs text-muted-foreground text-center mt-4">
                    We respect your privacy. Your information is secure and confidential.
                  </p>
                </div>
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
