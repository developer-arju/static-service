import React, { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  PhoneCall, 
  Calendar, 
  Clock, 
  MapPin, 
  Mail,
  HeartPulse
} from 'lucide-react';

export default function Header({ onOpenBooking }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'Our Services', href: '#services' },
    { label: 'Health Packages', href: '#packages' },
    { label: 'About Centre', href: '#about' },
    { label: 'Contact & Location', href: '#contact' },
    { label: 'Book Appointment', href: '#enquiry' },
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Top announcement bar with exact details from the poster */}
      <div className="bg-slate-900 text-slate-300 text-xs py-2 px-4 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
          
          <div className="flex flex-wrap items-center gap-4">
            <span className="flex items-center gap-1.5 text-amber-400 font-semibold">
              <MapPin className="w-3.5 h-3.5" />
              Aimcombu, Pala-Thodupuzha Highway
            </span>
            <span className="hidden md:inline text-slate-600">•</span>
            <span className="hidden md:flex items-center gap-1.5 text-slate-300">
              <Clock className="w-3.5 h-3.5 text-teal-400" />
              <span>Clinic: <strong>8:00 AM - 8:00 PM</strong> | Lab: <strong>7:30 AM - 5:30 PM</strong></span>
            </span>
          </div>

          <div className="flex items-center gap-4 ml-auto">
            <a 
              href="mailto:diamedicareclinic@gmail.com" 
              className="hidden sm:flex items-center gap-1 text-slate-400 hover:text-amber-400 transition-colors"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>diamedicareclinic@gmail.com</span>
            </a>
            <span className="hidden sm:inline text-slate-600">•</span>
            <div className="flex items-center gap-2">
              <PhoneCall className="w-3.5 h-3.5 text-amber-400" />
              <a 
                href="tel:9072243372" 
                className="text-amber-400 hover:text-amber-300 font-bold transition-colors"
              >
                9072243372
              </a>
              <span className="text-slate-500">/</span>
              <a 
                href="tel:9072243991" 
                className="text-amber-400 hover:text-amber-300 font-bold transition-colors"
              >
                9072243991
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* Main Sticky Navbar */}
      <header 
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-md shadow-md border-b border-slate-200/80 py-2.5' 
            : 'bg-white/90 backdrop-blur-sm border-b border-slate-100 py-3.5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Brand Logo with Cross & Leaf Motif from Poster */}
          <a href="#hero" className="flex items-center gap-3 group">
            <div className="relative w-11 h-11 rounded-2xl bg-gradient-to-tr from-slate-900 to-slate-800 border border-amber-500/40 flex items-center justify-center text-amber-400 shadow-md group-hover:scale-105 transition-transform duration-200">
              <svg 
                viewBox="0 0 24 24" 
                className="w-7 h-7 text-amber-400"
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2.2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                {/* Medical Cross */}
                <path d="M9 3h6v6h6v6h-6v6H9v-6H3V9h6V3z" />
                {/* Inner Stethoscope line */}
                <circle cx="12" cy="12" r="2" fill="currentColor" />
              </svg>
              {/* Green leaf badge on corner */}
              <span className="absolute -bottom-1 -right-1 w-4 h-4 bg-emerald-500 rounded-full border-2 border-white flex items-center justify-center text-[8px] text-white">
                🌱
              </span>
            </div>

            <div>
              <div className="flex items-center gap-2">
                <span className="text-lg sm:text-xl font-black tracking-tight text-slate-900 font-sans">
                  DIAMEDICARE
                </span>
                <span className="bg-amber-100 text-amber-900 text-[9px] sm:text-[10px] font-extrabold px-2 py-0.5 rounded-full border border-amber-300 tracking-wider">
                  CLINIC & LAB
                </span>
              </div>
              <p className="text-[10px] sm:text-[11px] text-slate-600 font-bold uppercase tracking-wider flex items-center gap-1.5">
                <span>MEDICAL CENTRE & DIAGNOSTICS</span>
                <span className="text-emerald-600 text-xs">🌿</span>
              </p>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="px-3 py-1.5 text-xs sm:text-[13px] font-semibold text-slate-700 hover:text-amber-600 hover:bg-amber-50/60 rounded-xl transition-all duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={() => onOpenBooking()}
              className="flex items-center gap-1.5 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 font-bold text-xs px-3.5 py-2 rounded-xl shadow-md shadow-amber-500/20 transition-all duration-200 hover:-translate-y-0.5"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Book Appointment / Lab</span>
            </button>
          </div>

          {/* Mobile Menu Hamburger Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={() => onOpenBooking()}
              className="bg-amber-500 text-slate-950 text-xs font-bold px-3 py-2 rounded-lg flex items-center gap-1.5 sm:hidden shadow-sm"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Book</span>
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-700 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>

        {/* Mobile Slide-down Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-slate-200 shadow-xl px-4 pt-3 pb-6 animate-in slide-in-from-top duration-200">
            <div className="space-y-1 pb-3">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="block px-3 py-2.5 rounded-xl text-base font-semibold text-slate-700 hover:text-amber-600 hover:bg-amber-50 transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="pt-3 border-t border-slate-100 space-y-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full flex items-center justify-center gap-2 bg-amber-500 text-slate-950 font-bold py-3 rounded-xl shadow-sm text-sm"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Appointment / Home Blood Collection</span>
              </button>
              
              <div className="grid grid-cols-2 gap-2 pt-1">
                <a
                  href="tel:9072243372"
                  className="flex items-center justify-center gap-1.5 border border-slate-200 text-slate-800 font-bold py-2.5 rounded-xl hover:bg-slate-50 text-xs"
                >
                  <PhoneCall className="w-3.5 h-3.5 text-amber-600" />
                  <span>9072243372</span>
                </a>
                <a
                  href="tel:9072243991"
                  className="flex items-center justify-center gap-1.5 border border-slate-200 text-slate-800 font-bold py-2.5 rounded-xl hover:bg-slate-50 text-xs"
                >
                  <PhoneCall className="w-3.5 h-3.5 text-amber-600" />
                  <span>9072243991</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
