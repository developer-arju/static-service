import React, { useState, useEffect } from 'react';
import { 
  Activity, 
  Menu, 
  X, 
  PhoneCall, 
  Calendar, 
  ShieldCheck, 
  Clock, 
  MapPin 
} from 'lucide-react';

export default function Header({ onOpenBooking, onSelectSection }) {
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
    { label: 'Services', href: '#services' },
    { label: 'Packages', href: '#packages' },
    { label: 'Accreditations', href: '#about' },
    { label: 'Contact', href: '#contact' },
    { label: 'Enquiry', href: '#enquiry' },
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
      {/* Top emergency announcement bar */}
      <div className="bg-slate-900 text-slate-300 text-xs py-2 px-4 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-teal-400 font-medium">
              <ShieldCheck className="w-3.5 h-3.5" />
              NABL & ISO 9001:2015 Certified Lab
            </span>
            <span className="hidden sm:inline text-slate-500">•</span>
            <span className="hidden sm:flex items-center gap-1 text-slate-400">
              <Clock className="w-3.5 h-3.5 text-teal-400" />
              Reports within 6-12 Hours
            </span>
          </div>

          <div className="flex items-center gap-4 ml-auto">
            <span className="hidden md:flex items-center gap-1 text-slate-400">
              <MapPin className="w-3.5 h-3.5 text-teal-400" />
              Metro Health Hub, 4th Avenue
            </span>
            <a 
              href="tel:+919876543210" 
              className="flex items-center gap-1.5 text-teal-400 hover:text-teal-300 transition-colors font-semibold"
            >
              <PhoneCall className="w-3.5 h-3.5" />
              <span>Lab Hotline: +91 (0) 98765 43210</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Navbar */}
      <header 
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200/80 py-3' 
            : 'bg-white/90 backdrop-blur-sm border-b border-slate-100 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <a href="#hero" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-teal-700 to-teal-500 flex items-center justify-center text-white shadow-md shadow-teal-700/20 group-hover:scale-105 transition-transform duration-200">
              <Activity className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-xl font-bold tracking-tight text-slate-900 font-sans">
                  Aura<span className="text-teal-700">Diagnostics</span>
                </span>
                <span className="bg-teal-50 text-teal-700 text-[10px] font-semibold px-1.5 py-0.5 rounded border border-teal-200 uppercase tracking-wider">
                  LAB
                </span>
              </div>
              <p className="text-[11px] text-slate-500 hidden sm:block font-medium">
                Clinical Precision & Pathology Center
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
                className="px-3.5 py-2 text-sm font-medium text-slate-600 hover:text-teal-700 hover:bg-teal-50/60 rounded-lg transition-all duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="#services"
              className="px-3.5 py-2 text-sm font-medium text-slate-700 hover:text-teal-700 transition-colors"
            >
              Test Directory
            </a>
            <button
              onClick={() => onOpenBooking()}
              className="flex items-center gap-2 bg-teal-700 hover:bg-teal-800 text-white text-sm font-medium px-4 py-2.5 rounded-xl shadow-sm shadow-teal-800/20 transition-all duration-200 hover:shadow-md hover:-translate-y-0.5"
            >
              <Calendar className="w-4 h-4" />
              <span>Book a Test</span>
            </button>
          </div>

          {/* Mobile Menu Hamburger Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={() => onOpenBooking()}
              className="bg-teal-700 text-white text-xs font-medium px-3 py-2 rounded-lg flex items-center gap-1.5 sm:hidden"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Book</span>
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-colors"
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
                  className="block px-3 py-2.5 rounded-lg text-base font-medium text-slate-700 hover:text-teal-700 hover:bg-teal-50 transition-colors"
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
                className="w-full flex items-center justify-center gap-2 bg-teal-700 text-white font-medium py-3 rounded-xl shadow-sm text-sm"
              >
                <Calendar className="w-4 h-4" />
                <span>Book a Test or Home Collection</span>
              </button>
              <a
                href="tel:+919876543210"
                className="w-full flex items-center justify-center gap-2 border border-slate-200 text-slate-700 font-medium py-2.5 rounded-xl hover:bg-slate-50 text-sm"
              >
                <PhoneCall className="w-4 h-4 text-teal-600" />
                <span>Call Lab: +91 98765 43210</span>
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
}

