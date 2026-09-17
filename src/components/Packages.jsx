import React from 'react';
import { 
  Check, 
  Sparkles, 
  Clock, 
  Calendar, 
  ShieldAlert, 
  Droplets,
  HeartPulse,
  Home
} from 'lucide-react';
import { healthPackages } from '../data/packagesData';

export default function Packages({ onSelectPackageForBooking }) {
  return (
    <section id="packages" className="py-16 md:py-24 bg-slate-50 border-y border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 border border-amber-300 text-amber-900 text-xs font-bold mb-2.5">
            <HeartPulse className="w-3.5 h-3.5 text-amber-600" />
            <span>Preventive Healthcare & Lab Checkups</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
            DiaMedicare Health Checkup Packages
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-slate-600">
            Carefully curated diagnostic packages for early detection of diabetes, cholesterol abnormalities, kidney risks, and general vitality.
          </p>
        </div>

        {/* 3 Packages Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
          {healthPackages.map((pkg) => {
            const isPopular = pkg.popular;
            return (
              <div
                key={pkg.id}
                className={`relative rounded-3xl transition-all duration-300 flex flex-col justify-between ${
                  isPopular 
                    ? 'bg-white border-2 border-amber-500 shadow-xl shadow-amber-900/10 lg:-translate-y-2 z-10' 
                    : 'bg-white border border-slate-200 shadow-md hover:shadow-xl'
                } p-5 sm:p-7`}
              >
                {/* Popular Ribbon */}
                {isPopular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 text-[10px] sm:text-xs font-black uppercase tracking-wider py-1 px-3.5 rounded-full shadow-md flex items-center gap-1">
                      <Sparkles className="w-3 h-3" />
                      {pkg.badge}
                    </span>
                  </div>
                )}

                <div>
                  {/* Top package info */}
                  <div className="flex items-center justify-between mb-2.5">
                    <span className="text-[11px] font-bold text-slate-800 bg-slate-100 px-2 py-0.5 rounded-md border border-slate-200">
                      {pkg.testsCount} Parameters
                    </span>
                    <span className="text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                      {pkg.discount}
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-black text-slate-900 mb-1">
                    {pkg.title}
                  </h3>
                  <p className="text-xs text-slate-500 mb-5 leading-relaxed">
                    {pkg.subtitle}
                  </p>

                  {/* Pricing Box */}
                  <div className="bg-slate-50 rounded-2xl p-3.5 mb-5 border border-slate-200/80">
                    <div className="flex items-baseline gap-2">
                      <span className="text-2xl sm:text-3xl font-black text-slate-900">
                        ₹{pkg.price}
                      </span>
                      <span className="text-xs text-slate-400 line-through">
                        ₹{pkg.originalPrice}
                      </span>
                      <span className="text-[11px] text-slate-500 font-medium ml-auto">
                        All Taxes Incl.
                      </span>
                    </div>

                    <div className="mt-3 pt-3 border-t border-slate-200/60 grid grid-cols-2 gap-2 text-[11px] text-slate-600">
                      <div className="flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5 text-teal-600 shrink-0" />
                        <span>TAT: {pkg.tat}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Droplets className="w-3.5 h-3.5 text-teal-600 shrink-0" />
                        <span>{pkg.sampleType}</span>
                      </div>
                    </div>
                  </div>

                  {/* Fasting Requirement */}
                  <div className="flex items-center gap-2 text-xs text-amber-900 bg-amber-50/90 p-2.5 rounded-xl border border-amber-200 mb-6">
                    <ShieldAlert className="w-4 h-4 text-amber-600 shrink-0" />
                    <span>Requirement: <strong>{pkg.fasting}</strong></span>
                  </div>

                  {/* Key Tests Included List */}
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
                      Tests Included
                    </h4>
                    <ul className="space-y-2.5 mb-8">
                      {pkg.keyTests.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                          <div className="w-4 h-4 rounded-full bg-amber-100 text-amber-800 flex items-center justify-center shrink-0 mt-0.5">
                            <Check className="w-2.5 h-2.5 stroke-[3]" />
                          </div>
                          <span className="leading-snug">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Booking Button */}
                <button
                  onClick={() => onSelectPackageForBooking(pkg.title)}
                  className={`w-full py-3.5 px-4 rounded-2xl font-bold text-sm transition-all duration-200 flex items-center justify-center gap-2 shadow-sm ${
                    isPopular
                      ? 'bg-amber-500 hover:bg-amber-600 text-slate-950 shadow-amber-500/20 hover:shadow-md'
                      : 'bg-slate-900 hover:bg-amber-500 hover:text-slate-950 text-white hover:shadow-md'
                  }`}
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book This Package</span>
                </button>
              </div>
            );
          })}
        </div>

        {/* Home Sample Collection Callout Banner */}
        <div className="mt-12 bg-slate-900 text-white rounded-3xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 border border-amber-500/30 shadow-xl">
          <div className="space-y-2 text-center md:text-left">
            <span className="text-amber-400 text-xs uppercase font-extrabold tracking-widest flex items-center justify-center md:justify-start gap-1.5">
              <Home className="w-3.5 h-3.5" />
              <span>Doorstep Home Blood Collection</span>
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              Need home blood collection in Aimcombu or along Pala-Thodupuzha route?
            </h3>
            <p className="text-sm text-slate-300 max-w-xl">
              Trained phlebotomists visit with vacuum tubes at your preferred morning hour. Fast digital reports sent via WhatsApp.
            </p>
          </div>

          <button
            onClick={() => onSelectPackageForBooking('Home Blood Collection Request')}
            className="whitespace-nowrap bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold px-6 py-3 rounded-xl shadow-md transition-colors text-sm flex items-center gap-2 shrink-0"
          >
            <span>Request Home Visit</span>
          </button>
        </div>

      </div>
    </section>
  );
}
