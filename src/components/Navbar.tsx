import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import jainLogo from "/shabas-logo.png";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Services", path: "/services" },
  { label: "Locations", path: "/locations" },
  { label: "Contact", path: "/contact" },
  { label: "Donate", path: "/donate" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 w-full z-50 bg-card/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <img src={jainLogo} alt="Jain & Associates Logo" style={{ width: 60, height: 60 }} className="object-contain" />
          <span className="font-display font-bold text-sm sm:text-base tracking-tight text-brand-navy">
            JAIN <span className="text-muted-foreground">&</span> ASSOCIATES
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-6 xl:gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-sm font-medium transition-brand ${
                location.pathname === link.path
                  ? "text-brand-navy font-bold"
                  : "text-muted-foreground hover:text-brand-navy"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/contact"
            className="bg-brand-navy text-primary-foreground px-6 py-2.5 rounded-full font-bold text-sm hover:opacity-90 transition-brand active:scale-95"
          >
            Get Free Help
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden p-2 text-foreground"
          aria-label="Toggle menu"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden bg-card border-b border-border px-4 pb-6 pt-2 space-y-1">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setOpen(false)}
              className={`block px-4 py-3 rounded-2xl text-sm font-medium transition-brand ${
                location.pathname === link.path
                  ? "bg-brand-navy text-primary-foreground"
                  : "text-foreground hover:bg-secondary"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-4 px-4">
            <a
              href="tel:123"
              className="flex items-center gap-2 text-brand-saffron font-bold"
            >
              <Phone className="w-4 h-4" /> Emergency: 123
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
