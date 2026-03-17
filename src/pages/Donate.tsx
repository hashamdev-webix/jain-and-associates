import { useState } from "react";
import { motion } from "framer-motion";
import { Heart, ArrowRight, Gift } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const amounts = [500, 1000, 2500, 5000];

const Donate = () => {
  const [selected, setSelected] = useState<number | null>(1000);
  const [custom, setCustom] = useState("");
  const [donated, setDonated] = useState(false);

  const handleDonate = (e: React.FormEvent) => {
    e.preventDefault();
    setDonated(true);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <section className="pt-28 pb-20 lg:pt-36 lg:pb-28 bg-mesh">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-brand-navy leading-tight mb-6">
              Support Our Cause
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Your donation helps us provide free legal aid to those who need it most. Every rupee makes a difference.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-12">
          {donated ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="p-16 rounded-4xl bg-card border border-border text-center"
            >
              <div className="w-20 h-20 bg-brand-saffron/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="w-10 h-10 text-brand-saffron fill-brand-saffron" />
              </div>
              <h2 className="text-3xl font-display font-bold text-brand-navy mb-3">Thank You!</h2>
              <p className="text-muted-foreground text-lg max-w-md mx-auto">
                Your generous contribution will help us continue providing free legal services to the underprivileged.
              </p>
              <button
                onClick={() => setDonated(false)}
                className="mt-8 text-brand-saffron font-bold hover:underline"
              >
                Make another donation
              </button>
            </motion.div>
          ) : (
            <div className="grid lg:grid-cols-5 gap-12">
              <div className="lg:col-span-3">
                <form onSubmit={handleDonate} className="space-y-8">
                  <div>
                    <h3 className="text-lg font-display font-bold text-brand-navy mb-4">Select Amount (₹)</h3>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                      {amounts.map((amt) => (
                        <button
                          key={amt}
                          type="button"
                          onClick={() => { setSelected(amt); setCustom(""); }}
                          className={`py-3 rounded-2xl font-bold text-sm border transition-brand ${
                            selected === amt
                              ? "bg-brand-navy text-primary-foreground border-brand-navy"
                              : "bg-card text-foreground border-border hover:border-brand-saffron/30"
                          }`}
                        >
                          ₹{amt.toLocaleString()}
                        </button>
                      ))}
                    </div>
                    <input
                      type="number"
                      placeholder="Or enter custom amount"
                      value={custom}
                      onChange={(e) => { setCustom(e.target.value); setSelected(null); }}
                      className="w-full mt-3 px-4 py-3 rounded-2xl border border-border bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-brand-saffron/50 transition-brand"
                    />
                  </div>

                  <div className="space-y-4">
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
                      <label className="block text-sm font-medium text-foreground mb-1.5">Email</label>
                      <input
                        type="email"
                        className="w-full px-4 py-3 rounded-2xl border border-border bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-brand-saffron/50 transition-brand"
                        placeholder="For receipt (optional)"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-brand-saffron text-accent-foreground py-4 rounded-2xl font-bold hover:opacity-90 transition-brand active:scale-[0.98] flex items-center justify-center gap-2"
                  >
                    Donate ₹{selected || custom || "—"} <ArrowRight className="w-5 h-5" />
                  </button>
                </form>
              </div>

              <div className="lg:col-span-2 space-y-6">
                <div className="p-6 rounded-3xl bg-secondary border border-border">
                  <Gift className="w-8 h-8 text-brand-saffron mb-3" />
                  <h4 className="font-display font-bold text-brand-navy mb-2">Where Your Money Goes</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Free legal consultation for families</li>
                    <li>• Court fees and documentation costs</li>
                    <li>• Office operations in rural areas</li>
                    <li>• Legal awareness camps in villages</li>
                  </ul>
                </div>
                <div className="p-6 rounded-3xl bg-navy-gradient text-primary-foreground">
                  <h4 className="font-display font-bold mb-2">100% Transparent</h4>
                  <p className="text-sm text-primary-foreground/60">
                    Every donation is tracked and used exclusively for providing free legal services. We publish annual reports for full transparency.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Donate;
