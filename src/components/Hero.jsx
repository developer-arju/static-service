import React from 'react';
import { 
  Calendar, 
  FlaskConical, 
  ShieldCheck, 
  CheckCircle2, 
  Clock, 
  Users, 
  Award, 
  Home, 
  ArrowRight,
  Sparkles,
  Check
} from 'lucide-react';

export default function Hero({ onOpenBooking, onExploreTests }) {
  const stats = [
    {
      value: '50,000+',
      label: 'Happy Patients Served',
      icon: Users,
      highlight: '99.4% CSAT'
    },
    {
      value: '99.8%',
      label: 'Analytical Test Accuracy',
      icon: Award,
      highlight: 'Dual Pathology Verification'
    },
    {
      value: 'Same Day',
      label: 'Digital Report TAT',
      icon: Clock,
      highlight: 'Within 6-12 Hours'
    },
    {
      value: '24/7',
      label: 'Emergency Lab Support',
      icon: FlaskConical,
      highlight: '365 Days Active'
    }
  ];

  return (
    <section id="hero" className="relative overflow-hidden pt-6 pb-16 md:pt-12 md:pb-24 bg-gradient-to-b from-teal-50/40 via-white to-slate-50">
      {/* Background ambient accents */}
      <div className="absolute top-0 right-1/4 -z-10 w-96 h-96 bg-teal-200/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 -z-10 w-80 h-80 bg-cyan-200/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Hero Copy & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Trust Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-100/70 border border-teal-200 text-teal-800 text-xs font-semibold tracking-wide">
              <Sparkles className="w-3.5 h-3.5 text-teal-600" />
              <span>Accredited Medical Lab • Home Collection Available</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
              Precision Diagnostics,{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-700 to-cyan-600">
                Caring for Your Health.
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl text-slate-600 max-w-2xl leading-relaxed font-normal">
              Fast, highly accurate laboratory testing powered by state-of-the-art automated analyzers. Experience hassle-free home sample collection or visit our walk-in clinical lounge.
            </p>

            {/* Bullet Points */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1 text-sm text-slate-700 font-medium">
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-teal-100 text-teal-700 flex items-center justify-center shrink-0">
                  <Check className="w-3 h-3 stroke-[3]" />
                </div>
                <span>Doorstep Collection in 60 Minutes</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-teal-100 text-teal-700 flex items-center justify-center shrink-0">
                  <Check className="w-3 h-3 stroke-[3]" />
                </div>
                <span>NABL & ISO 9001 Certified Quality</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-teal-100 text-teal-700 flex items-center justify-center shrink-0">
                  <Check className="w-3 h-3 stroke-[3]" />
                </div>
                <span>Zero-Pain Micro-Needle Tech</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-teal-100 text-teal-700 flex items-center justify-center shrink-0">
                  <Check className="w-3 h-3 stroke-[3]" />
                </div>
                <span>Direct WhatsApp & Email PDF Reports</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-4">
              <button
                onClick={onOpenBooking}
                className="flex items-center justify-center gap-2.5 bg-teal-700 hover:bg-teal-800 text-white font-semibold px-6 py-3.5 rounded-2xl shadow-lg shadow-teal-700/25 transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5 text-base"
              >
                <Calendar className="w-5 h-5" />
                <span>Book an Appointment</span>
              </button>

              <button
                onClick={onExploreTests}
                className="flex items-center justify-center gap-2 border-2 border-slate-200 hover:border-teal-600 bg-white hover:bg-teal-50/50 text-slate-700 hover:text-teal-800 font-semibold px-6 py-3.5 rounded-2xl transition-all duration-300 text-base"
              >
                <span>Explore 150+ Tests</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Quick trust guarantee note */}
            <div className="flex items-center gap-3 pt-2 text-xs text-slate-500">
              <span className="flex items-center gap-1 text-teal-700 font-medium">
                <ShieldCheck className="w-4 h-4" /> 100% Confidential
              </span>
              <span>•</span>
              <span>Barcoded Sample Tracking</span>
              <span>•</span>
              <span>Free Consultation on Reports</span>
            </div>
          </div>

          {/* Right Column: Interactive Diagnostic Experience Preview */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none my-6 sm:my-8">
              
              {/* Main Card */}
              <div className="bg-white rounded-3xl p-6 sm:p-7 shadow-xl shadow-slate-200/70 border border-slate-100 relative z-10">
                <div className="flex items-center justify-between pb-5 border-b border-slate-100">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-teal-700 text-white flex items-center justify-center shadow-md shadow-teal-700/20">
                      <FlaskConical className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 text-base sm:text-lg">
                        Home Sample Collection
                      </h3>
                      <p className="text-xs text-slate-500">
                        Convenient, safe & certified
                      </p>
                    </div>
                  </div>
                  <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
                    Live Booking
                  </span>
                </div>

                {/* Steps visual */}
                <div className="py-5 space-y-4">
                  <div className="flex items-start gap-3.5 p-3 rounded-xl bg-slate-50 border border-slate-100">
                    <div className="w-7 h-7 rounded-lg bg-teal-100 text-teal-800 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                      1
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-800">Select Test & Preferred Time Slot</p>
                      <p className="text-[11px] text-slate-500">Choose from 150+ pathology & wellness packages</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5 p-3 rounded-xl bg-teal-50/60 border border-teal-100">
                    <div className="w-7 h-7 rounded-lg bg-teal-700 text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                      2
                    </div>
                    <div>
                      <p className="text-xs font-bold text-teal-900">Certified Phlebotomist Visits You</p>
                      <p className="text-[11px] text-teal-700">Sterilized vacuum tubes & cold chain carry-kits</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5 p-3 rounded-xl bg-slate-50 border border-slate-100">
                    <div className="w-7 h-7 rounded-lg bg-teal-100 text-teal-800 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                      3
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-800">Smart Digital Reports in 6-12h</p>
                      <p className="text-[11px] text-slate-500">WhatsApp PDF + online interactive health trends</p>
                    </div>
                  </div>
                </div>

                {/* Card CTA */}
                <button
                  onClick={onOpenBooking}
                  className="w-full py-3 bg-slate-900 hover:bg-teal-700 text-white font-medium rounded-xl text-sm transition-colors duration-200 flex items-center justify-center gap-2"
                >
                  <Home className="w-4 h-4" />
                  <span>Book Free Home Collection</span>
                </button>
              </div>

              {/* Floating Pill Badge 1: Top-Right (Positioned with clearance) */}
              <div className="absolute -top-7 sm:-top-9 right-2 sm:-right-6 lg:-right-10 z-20 bg-white/95 backdrop-blur-md rounded-2xl p-2.5 sm:p-3 shadow-xl border border-teal-100/90 flex items-center gap-2.5 sm:gap-3 pointer-events-none">
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div className="text-left pr-1">
                  <p className="text-xs font-bold text-slate-900 leading-tight">NABL Accredited</p>
                  <p className="text-[10px] text-slate-500">ISO 15189:2012 Certified</p>
                </div>
              </div>

              {/* Floating Pill Badge 2: Bottom-Left (Positioned with clearance) */}
              <div className="absolute -bottom-7 sm:-bottom-9 left-2 sm:-left-6 lg:-left-10 z-20 bg-white/95 backdrop-blur-md rounded-2xl p-2.5 sm:p-3 shadow-xl border border-teal-100/90 items-center gap-2.5 sm:gap-3 hidden sm:flex pointer-events-none">
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-cyan-100 text-cyan-700 flex items-center justify-center shrink-0">
                  <Clock className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div className="text-left pr-1 sm:pr-2">
                  <p className="text-xs font-bold text-slate-900 leading-tight">Same-Day Reports</p>
                  <p className="text-[10px] text-slate-500">Delivered on WhatsApp</p>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Key Stats Bar */}
        <div className="mt-14 sm:mt-20 pt-8 border-t border-slate-200/80">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            {stats.map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <div 
                  key={idx} 
                  className="bg-white/80 backdrop-blur-sm p-5 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow text-left group"
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-700 group-hover:bg-teal-700 group-hover:text-white transition-colors duration-200 flex items-center justify-center">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] font-semibold text-teal-700 bg-teal-50 px-2 py-0.5 rounded-full border border-teal-100">
                      {stat.highlight}
                    </span>
                  </div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                    {stat.value}
                  </div>
                  <div className="text-xs sm:text-sm text-slate-500 font-medium mt-0.5">
                    {stat.label}
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

