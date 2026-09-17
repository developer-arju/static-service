import React from 'react';
import { 
  Calendar, 
  Clock, 
  MapPin, 
  PhoneCall, 
  Check, 
  Sparkles, 
  Home, 
  ArrowRight,
  ShieldCheck,
  Stethoscope,
  Microscope,
  Activity,
  HeartPulse
} from 'lucide-react';

export default function Hero({ onOpenBooking, onExploreTests }) {
  const highlights = [
    {
      title: 'Clinic Hours',
      time: '8:00 AM – 8:00 PM',
      subtitle: 'Monday – Sunday (All 7 Days)',
      icon: Stethoscope,
      accent: 'amber'
    },
    {
      title: 'Lab Hours',
      time: '7:30 AM – 5:30 PM',
      subtitle: 'Monday – Sunday (Fast Reports)',
      icon: Microscope,
      accent: 'teal'
    },
    {
      title: 'Emergency & Casualty',
      time: 'Mini Casualty & O2',
      subtitle: 'Oxygen + Nebulisation Ready',
      icon: HeartPulse,
      accent: 'rose'
    },
    {
      title: 'Home Blood Collection',
      time: 'Doorstep Service',
      subtitle: 'Aimcombu & Highway Route',
      icon: Home,
      accent: 'emerald'
    }
  ];

  return (
    <section id="hero" className="relative overflow-hidden pt-6 pb-16 md:pt-12 md:pb-24 bg-gradient-to-b from-amber-50/40 via-white to-slate-50">
      {/* Background ambient accents */}
      <div className="absolute top-0 right-1/4 -z-10 w-96 h-96 bg-amber-200/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 -z-10 w-80 h-80 bg-teal-200/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Hero Copy & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Location & Trust Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-amber-400/40 text-amber-400 text-xs font-bold tracking-wide shadow-sm">
              <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0" />
              <span>Aimcombu, Pala-Thodupuzha Highway • Clinic & Lab</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.12]">
              DIAMEDICARE{' '}
              <span className="block text-2xl sm:text-3xl lg:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-amber-600 via-teal-700 to-slate-900 mt-1">
                Medical Centre & Diagnostics
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg text-slate-600 max-w-2xl leading-relaxed font-normal">
              Your trusted community healthcare destination on the Pala-Thodupuzha Highway. Offering qualified Doctor Consultations, O.P. Services, Mini Casualty, Automated Medical Lab, Clinical Pharmacy, ECG, O2 + Nebulisation, and Doorstep Blood Collection.
            </p>

            {/* Bullet Points */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1 text-sm text-slate-700 font-medium">
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                  <Check className="w-3 h-3 stroke-[3]" />
                </div>
                <span>Doctor OPD: 8:00 AM – 8:00 PM Daily</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                  <Check className="w-3 h-3 stroke-[3]" />
                </div>
                <span>Automated Lab: 7:30 AM – 5:30 PM</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                  <Check className="w-3 h-3 stroke-[3]" />
                </div>
                <span>Mini Casualty & Immediate O2 / Nebulisation</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                  <Check className="w-3 h-3 stroke-[3]" />
                </div>
                <span>Doorstep Blood Collection at Home</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-3">
              <button
                onClick={onOpenBooking}
                className="flex items-center justify-center gap-2.5 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 font-bold px-6 py-3.5 rounded-2xl shadow-lg shadow-amber-500/20 transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5 text-base"
              >
                <Calendar className="w-5 h-5" />
                <span>Book Doctor / Lab Test</span>
              </button>

              <a
                href="tel:9072243372"
                className="flex items-center justify-center gap-2 border-2 border-slate-300 hover:border-amber-500 bg-white hover:bg-amber-50/40 text-slate-800 font-bold px-6 py-3.5 rounded-2xl transition-all duration-300 text-base"
              >
                <PhoneCall className="w-4 h-4 text-amber-600" />
                <span>Call: 9072243372</span>
              </a>
            </div>

            {/* Quick trust note */}
            <div className="flex flex-wrap items-center gap-3 pt-2 text-xs text-slate-500">
              <span className="font-semibold text-slate-700">Open 7 Days a Week</span>
              <span>•</span>
              <span>On-Site Clinical Pharmacy</span>
              <span>•</span>
              <span className="text-amber-700 font-semibold">Prompt WhatsApp Reports</span>
            </div>
          </div>

          {/* Right Column: Home Blood Collection & Services Preview Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none my-6 sm:my-8">
              
              {/* Main Card */}
              <div className="bg-white rounded-3xl p-6 sm:p-7 shadow-xl shadow-slate-200/80 border border-slate-100 relative z-10">
                <div className="flex items-center justify-between pb-5 border-b border-slate-100">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-slate-900 text-amber-400 flex items-center justify-center shadow-md border border-amber-500/30">
                      <Microscope className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 text-base sm:text-lg">
                        Home Blood Collection
                      </h3>
                      <p className="text-xs text-slate-500">
                        Aimcombu & Pala-Thodupuzha Route
                      </p>
                    </div>
                  </div>
                  <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-bold bg-amber-50 text-amber-800 border border-amber-200">
                    Doorstep Care
                  </span>
                </div>

                {/* Steps visual */}
                <div className="py-5 space-y-3.5">
                  <div className="flex items-start gap-3.5 p-3 rounded-xl bg-slate-50 border border-slate-100">
                    <div className="w-7 h-7 rounded-lg bg-amber-100 text-amber-900 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                      1
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-800">Call / Book Your Slot</p>
                      <p className="text-[11px] text-slate-500">Fasting sugar, cholesterol, or full body panels</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5 p-3 rounded-xl bg-teal-50/60 border border-teal-100">
                    <div className="w-7 h-7 rounded-lg bg-teal-700 text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                      2
                    </div>
                    <div>
                      <p className="text-xs font-bold text-teal-900">Trained Phlebotomist Visits</p>
                      <p className="text-[11px] text-teal-700">Gentle collection with sterile vacuum vials</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5 p-3 rounded-xl bg-slate-50 border border-slate-100">
                    <div className="w-7 h-7 rounded-lg bg-amber-100 text-amber-900 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                      3
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-800">Prompt Digital Reports</p>
                      <p className="text-[11px] text-slate-500">Delivered directly via WhatsApp & Email</p>
                    </div>
                  </div>
                </div>

                {/* Card CTA */}
                <button
                  onClick={onOpenBooking}
                  className="w-full py-3 bg-slate-900 hover:bg-amber-500 hover:text-slate-950 text-white font-bold rounded-xl text-sm transition-colors duration-200 flex items-center justify-center gap-2"
                >
                  <Home className="w-4 h-4" />
                  <span>Request Home Blood Collection</span>
                </button>
              </div>

              {/* Floating Pill Badge 1: Top-Right (Positioned with clear vertical offset) */}
              <div className="absolute -top-7 sm:-top-9 right-2 sm:-right-6 lg:-right-10 z-20 bg-white/95 backdrop-blur-md rounded-2xl p-2.5 sm:p-3 shadow-xl border border-amber-200 flex items-center gap-2.5 sm:gap-3 pointer-events-none">
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center shrink-0">
                  <Clock className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div className="text-left pr-1">
                  <p className="text-xs font-bold text-slate-900 leading-tight">Clinic Open Daily</p>
                  <p className="text-[10px] text-slate-500">8:00 AM – 8:00 PM</p>
                </div>
              </div>

              {/* Floating Pill Badge 2: Bottom-Left (Positioned with clear vertical offset) */}
              <div className="absolute -bottom-7 sm:-bottom-9 left-2 sm:-left-6 lg:-left-10 z-20 bg-white/95 backdrop-blur-md rounded-2xl p-2.5 sm:p-3 shadow-xl border border-teal-200 items-center gap-2.5 sm:gap-3 hidden sm:flex pointer-events-none">
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-teal-100 text-teal-800 flex items-center justify-center shrink-0">
                  <Activity className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div className="text-left pr-1 sm:pr-2">
                  <p className="text-xs font-bold text-slate-900 leading-tight">ECG & Nebulisation</p>
                  <p className="text-[10px] text-slate-500">Walk-in Medical Relief</p>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* 4 Timings & Emergency Highlights Bar */}
        <div className="mt-14 sm:mt-20 pt-8 border-t border-slate-200/80">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {highlights.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div 
                  key={idx} 
                  className="bg-white p-5 rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-md transition-shadow text-left"
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-bold text-slate-600 bg-slate-100 px-2 py-0.5 rounded-full">
                      {item.title}
                    </span>
                  </div>
                  <div className="text-xl font-extrabold text-slate-900 tracking-tight">
                    {item.time}
                  </div>
                  <div className="text-xs text-slate-500 font-medium mt-0.5">
                    {item.subtitle}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
