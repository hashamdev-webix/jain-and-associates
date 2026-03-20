import { Link } from "react-router-dom";
import { Scale, Phone, Mail, MapPin } from "lucide-react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => (
  <footer className="bg-brand-navy text-primary-foreground">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 items-start">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <Scale className="text-brand-saffron w-6 h-6" />
            <span className="font-display font-bold text-lg">JAIN & ASSOCIATES</span>
          </div>
          <p className="text-sm text-primary-foreground/60 leading-relaxed mb-6 hover:text-brand-saffron transition-brand cursor-default">
            Dedicated to providing free legal support to the underprivileged in Punjab.
          </p>
          {/* Social Media */}
          <div>
            <p className="text-xs text-primary-foreground/40 uppercase tracking-widest mb-3">Follow Us</p>
            <div className="flex items-center gap-3">
              <a
                href="https://www.facebook.com/jainandassociatess"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-9 h-9 rounded-full bg-primary-foreground/10 flex items-center justify-center text-primary-foreground/60 hover:bg-brand-saffron hover:text-white transition-brand"
              >
                <FaFacebookF size={15} />
              </a>
              <a
                href="https://www.instagram.com/jurisnexa/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-full bg-primary-foreground/10 flex items-center justify-center text-primary-foreground/60 hover:bg-brand-saffron hover:text-white transition-brand"
              >
                <FaInstagram size={15} />
              </a>
              <a
                href="/"
                aria-label="Twitter"
                className="w-9 h-9 rounded-full bg-primary-foreground/10 flex items-center justify-center text-primary-foreground/60 hover:bg-brand-saffron hover:text-white transition-brand"
              >
                <FaTwitter size={15} />
              </a>
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-display font-bold mb-4">Quick Links</h4>
          <div className="space-y-2">
            {[
              { label: "About Us", path: "/about" },
              { label: "Services", path: "/services" },
              { label: "Locations", path: "/locations" },
              { label: "Contact", path: "/contact" },
              { label: "Donate", path: "/donate" },
            ].map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="block text-sm text-primary-foreground/60 hover:text-brand-saffron transition-brand"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-display font-bold mb-4">Contact</h4>
          <div className="space-y-3 text-sm text-primary-foreground/60">
            <a href="tel:+919115177792" className="flex items-center gap-2 hover:text-brand-saffron transition-brand">
              <Phone className="w-4 h-4 shrink-0" /> +91 91151 77792
            </a>
            <a href="mailto:infojuriesnexa@gmail.com" className="flex items-center gap-2 hover:text-brand-saffron transition-brand">
              <Mail className="w-4 h-4 shrink-0" /> infojuriesnexa@gmail.com
            </a>
            <a href="https://maps.google.com/?q=Sco29,First+Floor,New+Sunny+Enclave,Sector125,Mohali,India,140301" target="_blank" rel="noopener noreferrer" className="flex items-start gap-2 hover:text-brand-saffron transition-brand">
              <MapPin className="w-4 h-4 mt-0.5 shrink-0" /> Sco29, First Floor, New Sunny Enclave, Sector 125, Mohali, India 140301
            </a>
          </div>
        </div>

        {/* Emergency */}
        <div>
          <h4 className="font-display font-bold mb-4">24/7 Emergency</h4>
          <p className="text-sm text-primary-foreground/60 mb-4 leading-relaxed hover:text-brand-saffron transition-brand cursor-default">
            Need urgent legal help? Call our emergency helpline anytime.
          </p>
          <a
            href="tel:+919115177792"
            className="inline-flex items-center gap-2 bg-brand-saffron text-accent-foreground px-6 py-3 rounded-full font-bold text-sm hover:opacity-90 transition-brand"
          >
            <Phone className="w-4 h-4" /> +91 91151 77792
          </a>
        </div>
      </div>

      <div className="border-t border-primary-foreground/10 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
        <p className="text-xs font-medium text-primary-foreground/60 hover:text-brand-saffron transition-brand cursor-default">
          © 2024 Jain & Associates. Pro-bono Legal Services Punjab.
        </p>
        <div className="flex gap-6 text-xs font-medium text-primary-foreground/60">
          <a href="#" className="hover:text-brand-saffron transition-brand">Privacy</a>
          <a href="#" className="hover:text-brand-saffron transition-brand">Terms</a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
