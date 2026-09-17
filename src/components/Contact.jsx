import React, { useState } from 'react';
import { 
  PhoneCall, 
  Mail, 
  MapPin, 
  Clock, 
  MessageCircle, 
  Navigation, 
  Check, 
  Copy, 
  ExternalLink,
  Stethoscope,
  Microscope
} from 'lucide-react';

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const addressText = "DiaMedicare Medical Centre & Diagnostics, Aimcombu, Pala-Thodupuzha Highway, Kerala";

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(addressText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-amber-400/40 text-amber-400 text-xs font-bold mb-3 shadow-sm">
            <MapPin className="w-3.5 h-3.5 text-amber-400" />
            <span>CLINIC & LAB LOCATION</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
            Visit DiaMedicare in Aimcombu
          </h2>
          <p className="mt-3 text-xs sm:text-sm text-slate-600">
            Conveniently accessible right on the Pala-Thodupuzha Highway with dedicated parking and rapid outpatient reception.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Contact Details & Working Hours */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Quick Action Buttons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <a
                href="https://wa.me/919072243372?text=Hello%20DiaMedicare%2C%20I%20would%20like%20to%20enquire%20about%20a%20doctor%20consultation%20or%20lab%20test."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3.5 px-4 rounded-2xl shadow-sm transition-colors text-sm"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp Desk</span>
              </a>

              <a
                href="tel:9072243372"
                className="flex items-center justify-center gap-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 font-extrabold py-3.5 px-4 rounded-2xl shadow-sm transition-colors text-sm"
              >
                <PhoneCall className="w-4 h-4" />
                <span>Call Hotline</span>
              </a>
            </div>

            {/* Address Card */}
            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200/80">
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-slate-900 text-amber-400 flex items-center justify-center shrink-0 border border-amber-500/30">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <h4 className="text-sm font-black text-slate-900">DiaMedicare Medical Centre & Diagnostics</h4>
                  </div>
                  <p className="text-xs font-semibold text-slate-700">
                    Aimcombu, Pala-Thodupuzha Highway
                  </p>
                  <p className="text-xs text-slate-500">
                    Kottayam / Idukki Route, Kerala
                  </p>
                  <div className="pt-2">
                    <button
                      onClick={handleCopyAddress}
                      className="inline-flex items-center gap-1.5 text-xs text-amber-700 hover:text-amber-900 font-bold"
                    >
                      {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                      <span>{copied ? 'Address Copied!' : 'Copy Address'}</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Operating Hours Matrix (Exact Timings from Poster) */}
            <div className="bg-slate-900 text-white rounded-2xl p-6 border border-amber-500/30 shadow-md">
              <div className="flex items-center gap-2 mb-4">
                <Clock className="w-5 h-5 text-amber-400" />
                <h4 className="text-sm font-black tracking-wide text-white uppercase">
                  Centre Working Hours
                </h4>
              </div>

              <div className="space-y-3 text-xs">
                
                {/* Clinic Hours */}
                <div className="p-3 rounded-xl bg-slate-800/90 border border-slate-700 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center">
                      <Stethoscope className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="font-extrabold text-white text-xs">CLINIC HOURS</p>
                      <p className="text-[11px] text-slate-400">Monday – Sunday</p>
                    </div>
                  </div>
                  <span className="font-black text-amber-400 bg-amber-950/80 px-2.5 py-1 rounded-lg border border-amber-500/40 text-xs">
                    8:00 AM – 8:00 PM
                  </span>
                </div>

                {/* Lab Hours */}
                <div className="p-3 rounded-xl bg-slate-800/90 border border-slate-700 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-teal-500/20 text-teal-400 flex items-center justify-center">
                      <Microscope className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="font-extrabold text-white text-xs">LAB HOURS</p>
                      <p className="text-[11px] text-slate-400">Monday – Sunday</p>
                    </div>
                  </div>
                  <span className="font-black text-teal-300 bg-teal-950/80 px-2.5 py-1 rounded-lg border border-teal-500/40 text-xs">
                    7:30 AM – 5:30 PM
                  </span>
                </div>

              </div>
            </div>

            {/* Direct Contact Numbers & Email */}
            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200/80 space-y-3 text-xs">
              <div className="flex items-center justify-between">
                <span className="text-slate-500 font-medium">Primary Hotline:</span>
                <a href="tel:9072243372" className="font-black text-amber-700 hover:underline">
                  9072243372
                </a>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-500 font-medium">Secondary Line:</span>
                <a href="tel:9072243991" className="font-black text-amber-700 hover:underline">
                  9072243991
                </a>
              </div>
              <div className="flex items-center justify-between pt-1 border-t border-slate-200">
                <span className="text-slate-500 font-medium">Email:</span>
                <a href="mailto:diamedicareclinic@gmail.com" className="font-bold text-slate-800 hover:text-amber-700">
                  diamedicareclinic@gmail.com
                </a>
              </div>
            </div>

          </div>

          {/* Interactive Map Visual Placeholder for Pala-Thodupuzha Highway */}
          <div className="lg:col-span-7 bg-slate-100 rounded-3xl overflow-hidden border border-slate-200 shadow-sm relative">
            
            {/* Map styling header */}
            <div className="bg-white p-4 border-b border-slate-200 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-amber-500 animate-ping" />
                <span className="text-xs font-black text-slate-900">
                  DiaMedicare • Aimcombu
                </span>
                <span className="text-[11px] text-slate-500">
                  (Pala-Thodupuzha Highway)
                </span>
              </div>
              <a
                href="https://maps.google.com/?q=Aimcombu+Pala+Thodupuzha+Highway"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs text-amber-700 hover:text-amber-900 font-bold"
              >
                <span>Google Maps</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            {/* Stylized Map View */}
            <div className="relative h-[380px] sm:h-[440px] bg-slate-900 w-full overflow-hidden flex items-center justify-center">
              {/* Map grid aesthetic */}
              <div 
                className="absolute inset-0 opacity-20"
                style={{
                  backgroundImage: `radial-gradient(#f59e0b 1px, transparent 1px), radial-gradient(#64748b 1px, #0f172a 1px)`,
                  backgroundSize: `24px 24px`,
                  backgroundPosition: `0 0, 12px 12px`
                }}
              />

              {/* Highway strip styling */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-40">
                <div className="w-full h-16 bg-slate-800 border-y-2 border-amber-500/50 transform -rotate-12 absolute flex items-center justify-around">
                  <div className="text-[10px] text-amber-300 font-mono tracking-widest uppercase">← PALA ROAD</div>
                  <div className="text-[10px] text-amber-300 font-mono tracking-widest uppercase">THODUPUZHA ROAD →</div>
                </div>
              </div>

              {/* Pinpoint Indicator */}
              <div className="relative z-10 text-center animate-bounce">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-amber-500 to-amber-400 text-slate-950 flex items-center justify-center shadow-2xl mx-auto border-2 border-white">
                  <MapPin className="w-9 h-9 fill-slate-950" />
                </div>
                <div className="mt-2 bg-slate-900/95 text-amber-400 px-3.5 py-1 rounded-full text-xs font-black shadow-lg border border-amber-500/40">
                  DIAMEDICARE CLINIC & LAB
                </div>
                <div className="text-[10px] text-slate-300 mt-0.5 font-medium">
                  Aimcombu Junction
                </div>
              </div>

              {/* Floating Map Controls overlay */}
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-sm p-4 rounded-2xl shadow-lg border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3">
                <div className="text-left">
                  <p className="text-xs font-black text-slate-900">Aimcombu, Pala-Thodupuzha Highway</p>
                  <p className="text-[11px] text-slate-500">Ample parking available for clinic patients and lab visitors.</p>
                </div>
                <a
                  href="https://maps.google.com/?q=Aimcombu+Pala+Thodupuzha+Highway"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 bg-amber-500 hover:bg-amber-600 text-slate-950 text-xs font-black py-2.5 px-4 rounded-xl transition-colors shrink-0"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Get Directions</span>
                </a>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
