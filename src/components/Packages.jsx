import React from 'react';
import { 
  Check, 
  Sparkles, 
  Clock, 
  Calendar, 
  ShieldAlert, 
  Droplets,
  HeartPulse
} from 'lucide-react';
import { healthPackages } from '../data/packagesData';

export default function Packages({ onSelectPackageForBooking }) {
  return (
    <section id="packages" className="py-16 md:py-24 bg-slate-50 border-y border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-100/70 border border-teal-200 text-teal-800 text-xs font-semibold mb-3">
            <HeartPulse className="w-3.5 h-3.5 text-teal-600" />
            <span>Preventive Healthcare Packages</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Curated Health Checkup Packages
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600">
            Comprehensive multi-parameter packages formulated by senior pathologists to detect hidden health risks before symptoms arise.
          </p>
        </div>

        {/* 3 Packages Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {healthPackages.map((pkg) => {
            const isPopular = pkg.popular;
            return (
              <div
                key={pkg.id}
                className={`relative rounded-3xl transition-all duration-300 flex flex-col justify-between ${
                  isPopular 
                    ? 'bg-white border-2 border-teal-600 shadow-xl shadow-teal-900/10 lg:-translate-y-3 z-10' 
                    : 'bg-white border border-slate-200 shadow-md hover:shadow-xl'
                } p-6 sm:p-8`}
              >
                {/* Popular Ribbon */}
                {isPopular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span className="bg-gradient-to-r from-teal-700 to-teal-600 text-white text-xs font-bold uppercase tracking-wider py-1 px-4 rounded-full shadow-md flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5" />
                      {pkg.badge}
                    </span>
                  </div>
                )}

                <div>
                  {/* Top package info */}
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-bold text-teal-800 bg-teal-50 px-2.5 py-1 rounded-lg border border-teal-100">
                      {pkg.testsCount} Parameters Covered
                    </span>
                    <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full">
                      {pkg.discount}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 mb-1">
                    {pkg.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 mb-6 leading-relaxed">
                    {pkg.subtitle}
                  </p>

                  {/* Pricing Box */}
                  <div className="bg-slate-50 rounded-2xl p-4 mb-6 border border-slate-100">
                    <div className="flex items-baseline gap-2">
                      <span className="text-3xl sm:text-4xl font-black text-slate-900">
                        ₹{pkg.price}
                      </span>
                      <span className="text-sm text-slate-400 line-through">
                        ₹{pkg.originalPrice}
                      </span>
                      <span className="text-xs text-slate-500 font-medium ml-auto">
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
                  <div className="flex items-center gap-2 text-xs text-amber-800 bg-amber-50/80 p-2.5 rounded-xl border border-amber-200/70 mb-6">
                    <ShieldAlert className="w-4 h-4 text-amber-600 shrink-0" />
                    <span>Requirement: <strong>{pkg.fasting}</strong></span>
                  </div>

                  {/* Key Tests Included List */}
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
                      Tests Included ({pkg.testsCount})
                    </h4>
                    <ul className="space-y-2.5 mb-8">
                      {pkg.keyTests.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                          <div className="w-4 h-4 rounded-full bg-teal-100 text-teal-700 flex items-center justify-center shrink-0 mt-0.5">
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
                      ? 'bg-teal-700 hover:bg-teal-800 text-white shadow-teal-800/20 hover:shadow-md'
                      : 'bg-slate-900 hover:bg-teal-700 text-white hover:shadow-md'
                  }`}
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book This Package</span>
                </button>
              </div>
            );
          })}
        </div>

        {/* Home Collection Callout Banner */}
        <div className="mt-12 bg-teal-800 text-white rounded-3xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-lg shadow-teal-900/10">
          <div className="space-y-2 text-center md:text-left">
            <span className="text-teal-200 text-xs uppercase font-bold tracking-widest">
              Doorstep Convenience
            </span>
            <h3 className="text-xl sm:text-2xl font-bold">
              Need free home sample collection for these packages?
            </h3>
            <p className="text-sm text-teal-100 max-w-xl">
              Our phlebotomist visits with temperature-controlled cold kits, barcoded vials, and sterile one-time needles at your preferred morning hour.
            </p>
          </div>

          <button
            onClick={() => onSelectPackageForBooking('Comprehensive Full Body (Home Collection)')}
            className="whitespace-nowrap bg-white hover:bg-teal-50 text-teal-800 font-bold px-6 py-3 rounded-xl shadow-md transition-colors text-sm flex items-center gap-2"
          >
            <span>Book Home Visit</span>
          </button>
        </div>

      </div>
    </section>
  );
}

