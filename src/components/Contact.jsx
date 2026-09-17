import React, { useState } from 'react';
import { 
  Phone, 
  PhoneCall, 
  Mail, 
  MapPin, 
  Clock, 
  MessageCircle, 
  Navigation, 
  Check, 
  Copy, 
  ExternalLink 
} from 'lucide-react';

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const addressText = "AuraDiagnostics Clinical Lab, Plot 42, Healthcare Corridor, 4th Avenue, Metro City - 400001";

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
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 border border-teal-200 text-teal-700 text-xs font-semibold mb-3">
            <MapPin className="w-3.5 h-3.5" />
            <span>Walk-In & Support</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Visit Our Lab or Contact Us
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600">
            Have questions about preparation, fasting protocols, or test reports? Our clinical helpdesk is available 24/7.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Contact Details & Working Hours */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Quick Action Buttons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <a
                href="https://wa.me/919876543210?text=Hello%20AuraDiagnostics%2C%20I%20would%20like%20to%20enquire%20about%20a%20diagnostic%20test."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3.5 px-4 rounded-2xl shadow-sm transition-colors text-sm"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp Desk</span>
              </a>

              <a
                href="tel:+919876543210"
                className="flex items-center justify-center gap-2 bg-teal-700 hover:bg-teal-800 text-white font-bold py-3.5 px-4 rounded-2xl shadow-sm transition-colors text-sm"
              >
                <PhoneCall className="w-4 h-4" />
                <span>Call Hotline</span>
              </a>
            </div>

            {/* Address Card */}
            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200/80">
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-teal-100 text-teal-700 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <h4 className="text-sm font-bold text-slate-900">Lab Headquarters & Sample Lounge</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {addressText}
                  </p>
                  <div className="pt-2">
                    <button
                      onClick={handleCopyAddress}
                      className="inline-flex items-center gap-1.5 text-xs text-teal-700 hover:text-teal-900 font-semibold"
                    >
                      {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                      <span>{copied ? 'Address Copied!' : 'Copy Full Address'}</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Operating Hours Card */}
            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200/80">
              <div className="flex items-start gap-3.5 mb-4">
                <div className="w-10 h-10 rounded-xl bg-teal-100 text-teal-700 flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Laboratory Working Hours</h4>
                  <p className="text-xs text-slate-500">Walk-in sample collection & imaging scans</p>
                </div>
              </div>

              <div className="space-y-2.5 text-xs">
                <div className="flex justify-between items-center py-1.5 border-b border-slate-200/60">
                  <span className="font-medium text-slate-700">Monday – Saturday</span>
                  <span className="font-bold text-teal-800 bg-teal-50 px-2.5 py-0.5 rounded border border-teal-100">
                    6:00 AM – 8:00 PM
                  </span>
                </div>
                <div className="flex justify-between items-center py-1.5 border-b border-slate-200/60">
                  <span className="font-medium text-slate-700">Sunday</span>
                  <span className="font-bold text-teal-800 bg-teal-50 px-2.5 py-0.5 rounded border border-teal-100">
                    7:00 AM – 1:00 PM
                  </span>
                </div>
                <div className="flex justify-between items-center py-1.5">
                  <span className="font-medium text-slate-700">Emergency Critical Reports</span>
                  <span className="font-bold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded">
                    24/7 Available
                  </span>
                </div>
              </div>
            </div>

            {/* Direct Contacts list */}
            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200/80 space-y-3 text-xs">
              <div className="flex items-center gap-3 text-slate-700">
                <Phone className="w-4 h-4 text-teal-600 shrink-0" />
                <span>Reception / Helpdesk: <strong>+91 (0) 98765 43210</strong></span>
              </div>
              <div className="flex items-center gap-3 text-slate-700">
                <PhoneCall className="w-4 h-4 text-rose-600 shrink-0" />
                <span>Emergency Critical Hotline: <strong>+91 (0) 98765 00911</strong></span>
              </div>
              <div className="flex items-center gap-3 text-slate-700">
                <Mail className="w-4 h-4 text-teal-600 shrink-0" />
                <span>Reports & Coordination: <strong>care@auradiagnostics.com</strong></span>
              </div>
            </div>

          </div>

          {/* Interactive Map Visual Placeholder */}
          <div className="lg:col-span-7 bg-slate-100 rounded-3xl overflow-hidden border border-slate-200 shadow-sm relative">
            
            {/* Map styling header */}
            <div className="bg-white p-4 border-b border-slate-200 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-rose-500 animate-ping" />
                <span className="text-xs font-bold text-slate-800">
                  AuraDiagnostics Central Center
                </span>
                <span className="text-[11px] text-slate-400">
                  (500m from Central Metro Station)
                </span>
              </div>
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs text-teal-700 hover:text-teal-900 font-semibold"
              >
                <span>Open in Google Maps</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            {/* Stylized Map View */}
            <div className="relative h-[380px] sm:h-[440px] bg-slate-200 w-full overflow-hidden flex items-center justify-center">
              {/* Map grid aesthetic */}
              <div 
                className="absolute inset-0 opacity-40"
                style={{
                  backgroundImage: `radial-gradient(#94a3b8 1px, transparent 1px), radial-gradient(#cbd5e1 1px, #f1f5f9 1px)`,
                  backgroundSize: `24px 24px`,
                  backgroundPosition: `0 0, 12px 12px`
                }}
              />

              {/* Stylized road network vectors */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-30">
                <div className="w-full h-12 bg-white border-y border-slate-400 transform -rotate-12 absolute" />
                <div className="h-full w-12 bg-white border-x border-slate-400 transform rotate-45 absolute" />
              </div>

              {/* Pinpoint Indicator */}
              <div className="relative z-10 text-center animate-bounce">
                <div className="w-14 h-14 rounded-2xl bg-teal-700 text-white flex items-center justify-center shadow-2xl shadow-teal-900/40 mx-auto border-2 border-white">
                  <MapPin className="w-8 h-8 fill-teal-100" />
                </div>
                <div className="mt-2 bg-slate-900/90 text-white px-3 py-1 rounded-full text-xs font-bold shadow-md">
                  AuraDiagnostics Lab Lounge
                </div>
              </div>

              {/* Floating Map Controls overlay */}
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-sm p-4 rounded-2xl shadow-lg border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3">
                <div className="text-left">
                  <p className="text-xs font-bold text-slate-900">Need Directions or Parking Info?</p>
                  <p className="text-[11px] text-slate-500">Free valet parking available for lab & scan patients.</p>
                </div>
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 bg-teal-700 hover:bg-teal-800 text-white text-xs font-bold py-2.5 px-4 rounded-xl transition-colors shrink-0"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Get Driving Directions</span>
                </a>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

