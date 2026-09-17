import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Send, 
  Check, 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  ArrowUpRight 
} from 'lucide-react';

export default function Footer() {
  const [subscribed, setSubscribed] = useState(false);
  const [email, setEmail] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 4000);
    }
  };

  return (
    <footer className="bg-slate-950 text-slate-400 text-sm border-t border-slate-800">
      
      {/* Upper Footer: Brand summary, Services, Location & Timings */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Brand Col */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-slate-900 border border-amber-500/40 flex items-center justify-center text-amber-400 shadow-md">
                <svg viewBox="0 0 24 24" className="w-6 h-6 text-amber-400" fill="none" stroke="currentColor" strokeWidth="2.2">
                  <path d="M9 3h6v6h6v6h-6v6H9v-6H3V9h6V3z" />
                  <circle cx="12" cy="12" r="2" fill="currentColor" />
                </svg>
              </div>
              <div>
                <span className="text-lg sm:text-xl font-black tracking-tight text-white block">
                  DIAMEDICARE
                </span>
                <span className="text-[10px] font-bold text-amber-400 tracking-wider uppercase">
                  MEDICAL CENTRE & DIAGNOSTICS
                </span>
              </div>
            </div>
            
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
              Comprehensive medical clinic, automated diagnostic laboratory, on-site pharmacy, and emergency casualty facility serving Aimcombu and the Pala-Thodupuzha Highway.
            </p>

            <div className="space-y-2 text-xs pt-1">
              <div className="flex items-center gap-2 text-slate-300">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Aimcombu, Pala-Thodupuzha Highway</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <span>9072243372, 9072243991</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                <span>diamedicareclinic@gmail.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-black text-amber-400 uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#hero" className="hover:text-amber-400 transition-colors">Home</a>
              </li>
              <li>
                <a href="#services" className="hover:text-amber-400 transition-colors">Our Services</a>
              </li>
              <li>
                <a href="#packages" className="hover:text-amber-400 transition-colors">Health Checkups</a>
              </li>
              <li>
                <a href="#about" className="hover:text-amber-400 transition-colors">About Centre</a>
              </li>
              <li>
                <a href="#enquiry" className="hover:text-amber-400 transition-colors">Book Appointment</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-amber-400 transition-colors">Location & Timings</a>
              </li>
            </ul>
          </div>

          {/* Our 8 Services */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-black text-amber-400 uppercase tracking-wider">
              Our 8 Services
            </h4>
            <ul className="space-y-1.5 text-xs">
              <li><a href="#services" className="hover:text-white">Doctor Consultation (ഡോക്ടർ)</a></li>
              <li><a href="#services" className="hover:text-white">O.P. Services (ഒ.പി.)</a></li>
              <li><a href="#services" className="hover:text-white">Mini Casualty (കാഷ്വാലിറ്റി)</a></li>
              <li><a href="#services" className="hover:text-white">Medical Lab (മെഡിക്കൽ ലാബ്)</a></li>
              <li><a href="#services" className="hover:text-white">Clinical Pharmacy (ഫാർമസി)</a></li>
              <li><a href="#services" className="hover:text-white">ECG (ഇ.സി.ജി.)</a></li>
              <li><a href="#services" className="hover:text-white">O2 + Nebulisation (ഓക്സിജൻ)</a></li>
              <li><a href="#services" className="hover:text-white">Home Blood Collection (ഹോം കളക്ഷൻ)</a></li>
            </ul>
          </div>

          {/* Timings & Newsletter */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-black text-amber-400 uppercase tracking-wider">
              Working Hours
            </h4>
            <div className="bg-slate-900 p-3.5 rounded-2xl border border-slate-800 text-xs space-y-2">
              <div>
                <p className="text-white font-bold">Clinic Hours:</p>
                <p className="text-amber-400 font-semibold">Mon – Sun: 8:00 AM – 8:00 PM</p>
              </div>
              <div className="pt-1 border-t border-slate-800">
                <p className="text-white font-bold">Lab Hours:</p>
                <p className="text-teal-400 font-semibold">Mon – Sun: 7:30 AM – 5:30 PM</p>
              </div>
            </div>

            <form onSubmit={handleSubscribe} className="space-y-2 pt-2">
              <div className="relative">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Subscribe for health tips"
                  className="w-full px-3.5 py-2 rounded-xl bg-slate-900 border border-slate-800 text-white text-xs placeholder-slate-500 focus:outline-none focus:border-amber-400"
                />
                <button
                  type="submit"
                  className="absolute right-1 top-1 bottom-1 px-2.5 bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold rounded-lg flex items-center justify-center transition-colors text-xs"
                >
                  <Send className="w-3 h-3" />
                </button>
              </div>
              {subscribed && (
                <p className="text-xs text-amber-400 flex items-center gap-1 animate-in fade-in">
                  <Check className="w-3 h-3" /> Subscribed successfully!
                </p>
              )}
            </form>
          </div>

        </div>

        {/* Clinical Correlation Legal Disclaimer */}
        <div className="mt-12 pt-6 border-t border-slate-800/80">
          <div className="bg-slate-900/60 rounded-2xl p-4 border border-slate-800 text-[11px] text-slate-400 leading-relaxed">
            <strong className="text-slate-300 font-semibold block mb-1">
              Medical & Diagnostic Disclaimer:
            </strong>
            Laboratory results and clinical findings generated by DiaMedicare Medical Centre & Diagnostics are analytical records and must be correlated with clinical examination by a qualified registered medical practitioner. Self-medication or altering prescribed dosages without physician consultation is not recommended.
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 pt-6 border-t border-slate-800/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} DiaMedicare Medical Centre & Diagnostics. Aimcombu, Pala-Thodupuzha Highway.
          </div>
          <div className="flex items-center gap-4">
            <span>Call: 9072243372 / 9072243991</span>
            <span>•</span>
            <span>diamedicareclinic@gmail.com</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
