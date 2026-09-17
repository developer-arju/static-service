import React, { useState } from 'react';
import { 
  Activity, 
  ShieldCheck, 
  Send, 
  Check, 
  Heart, 
  Phone, 
  Mail, 
  MapPin, 
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
    <footer className="bg-slate-900 text-slate-400 text-sm border-t border-slate-800">
      
      {/* Upper Footer: Newsletter & Brand summary */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Brand Col */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-teal-700 to-teal-500 flex items-center justify-center text-white shadow-md shadow-teal-700/20">
                <Activity className="w-5 h-5" />
              </div>
              <span className="text-xl font-bold tracking-tight text-white">
                Aura<span className="text-teal-400">Diagnostics</span>
              </span>
            </div>
            
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
              Advanced Clinical Pathology & Digital Radiology Laboratory. Committed to patient care with uncompromising precision, accredited automation, and caring doorstep phlebotomy.
            </p>

            <div className="flex items-center gap-2 text-xs text-teal-400 font-semibold pt-1">
              <ShieldCheck className="w-4 h-4" />
              <span>NABL (ISO 15189) & ISO 9001:2015 Certified</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#hero" className="hover:text-teal-400 transition-colors">Home</a>
              </li>
              <li>
                <a href="#services" className="hover:text-teal-400 transition-colors">Clinical Services</a>
              </li>
              <li>
                <a href="#packages" className="hover:text-teal-400 transition-colors">Health Checkups</a>
              </li>
              <li>
                <a href="#about" className="hover:text-teal-400 transition-colors">Accreditations</a>
              </li>
              <li>
                <a href="#enquiry" className="hover:text-teal-400 transition-colors">Book a Test</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-teal-400 transition-colors">Contact & Directions</a>
              </li>
            </ul>
          </div>

          {/* Key Tests */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Top Diagnostic Tests
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#services" className="hover:text-teal-400 transition-colors flex items-center gap-1">
                  <span>Complete Blood Count (CBC)</span>
                  <ArrowUpRight className="w-3 h-3 opacity-60" />
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-teal-400 transition-colors flex items-center gap-1">
                  <span>Lipid Profile & Cholesterol</span>
                  <ArrowUpRight className="w-3 h-3 opacity-60" />
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-teal-400 transition-colors flex items-center gap-1">
                  <span>Thyroid Panel (T3, T4, TSH)</span>
                  <ArrowUpRight className="w-3 h-3 opacity-60" />
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-teal-400 transition-colors flex items-center gap-1">
                  <span>HbA1c & Diabetic Care</span>
                  <ArrowUpRight className="w-3 h-3 opacity-60" />
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-teal-400 transition-colors flex items-center gap-1">
                  <span>Vitamin D3 & B12 Levels</span>
                  <ArrowUpRight className="w-3 h-3 opacity-60" />
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter Subscription */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Health Tips & Seasonal Alerts
            </h4>
            <p className="text-xs text-slate-400">
              Receive monthly preventive wellness advice and seasonal disease alerts from our medical team.
            </p>

            <form onSubmit={handleSubscribe} className="space-y-2">
              <div className="relative">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-800 border border-slate-700 text-white text-xs placeholder-slate-500 focus:outline-none focus:border-teal-400 transition-colors"
                />
                <button
                  type="submit"
                  className="absolute right-1.5 top-1.5 bottom-1.5 px-3 bg-teal-600 hover:bg-teal-500 text-white rounded-lg flex items-center justify-center transition-colors"
                  aria-label="Subscribe"
                >
                  <Send className="w-3.5 h-3.5" />
                </button>
              </div>
              {subscribed && (
                <p className="text-xs text-teal-400 flex items-center gap-1 animate-in fade-in">
                  <Check className="w-3 h-3" /> Subscribed successfully!
                </p>
              )}
            </form>
          </div>

        </div>

        {/* Clinical Correlation Legal Disclaimer */}
        <div className="mt-12 pt-6 border-t border-slate-800/80">
          <div className="bg-slate-800/50 rounded-2xl p-4 border border-slate-800 text-[11px] text-slate-400 leading-relaxed">
            <strong className="text-slate-300 font-semibold block mb-1">
              Medical & Clinical Correlation Disclaimer:
            </strong>
            Diagnostic lab reports and imaging scans generated by AuraDiagnostics represent analytical values at the moment of specimen examination and must be clinically correlated with patient history and physical symptoms by a qualified medical doctor. Self-interpretation or altering medication dosages without medical counsel is strictly discouraged.
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 pt-6 border-t border-slate-800/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} AuraDiagnostics Laboratories Ltd. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <a href="#hero" className="hover:text-slate-400 transition-colors">Privacy Policy</a>
            <a href="#hero" className="hover:text-slate-400 transition-colors">Terms of Service</a>
            <a href="#hero" className="hover:text-slate-400 transition-colors">Patient Charter</a>
          </div>
        </div>

      </div>
    </footer>
  );
}

