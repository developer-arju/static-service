import React, { useState, useMemo } from 'react';
import { 
  Stethoscope, 
  ClipboardPlus, 
  Bed, 
  Microscope, 
  Pill, 
  Activity, 
  Wind, 
  Droplets, 
  Search, 
  Clock, 
  Droplet, 
  ArrowRight,
  CheckCircle2,
  Calendar,
  Sparkles
} from 'lucide-react';
import { coreServices, allTests } from '../data/testsData';

export default function Services({ onSelectTestForBooking }) {
  const [searchQuery, setSearchQuery] = useState('');

  // Map icons for the 8 core services
  const getIcon = (iconName) => {
    switch (iconName) {
      case 'Stethoscope': return Stethoscope;
      case 'ClipboardPlus': return ClipboardPlus;
      case 'Bed': return Bed;
      case 'Microscope': return Microscope;
      case 'Pill': return Pill;
      case 'Activity': return Activity;
      case 'Wind': return Wind;
      case 'Droplets': return Droplets;
      default: return Microscope;
    }
  };

  // Filter individual tests based on search query
  const filteredTests = useMemo(() => {
    return allTests.filter((test) => {
      const query = searchQuery.toLowerCase();
      return (
        test.name.toLowerCase().includes(query) ||
        test.description.toLowerCase().includes(query) ||
        test.code.toLowerCase().includes(query)
      );
    });
  }, [searchQuery]);

  return (
    <section id="services" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-amber-400/40 text-amber-400 text-xs font-bold mb-3 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>OUR SERVICES • ഞങ്ങളുടെ സേവനങ്ങൾ</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Complete Medical & Diagnostic Services
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600">
            Dedicated outpatient care, diagnostic pathology, immediate casualty support, and pharmacy under one roof in Aimcombu.
          </p>
        </div>

        {/* 8 Core Service Cards Grid (Matching Poster) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {coreServices.map((service, idx) => {
            const Icon = getIcon(service.icon);
            return (
              <div 
                key={service.id}
                className="bg-slate-50 hover:bg-white rounded-3xl p-6 border border-slate-200/90 hover:border-amber-400 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-slate-900 text-amber-400 group-hover:bg-amber-500 group-hover:text-slate-950 transition-colors duration-200 flex items-center justify-center shadow-md border border-amber-500/30">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] uppercase font-extrabold tracking-wider px-2 py-0.5 rounded-full bg-amber-100 text-amber-900 border border-amber-200">
                      {service.badge}
                    </span>
                  </div>

                  <div className="mb-2">
                    <h3 className="text-lg font-black text-slate-900 group-hover:text-amber-600 transition-colors leading-snug">
                      {service.title}
                    </h3>
                    <p className="text-xs font-bold text-amber-700 font-sans mt-0.5">
                      {service.malayalamTitle}
                    </p>
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    {service.description}
                  </p>

                  <ul className="space-y-2 border-t border-slate-200/80 pt-3 mb-4">
                    {service.highlights.map((item, hIdx) => (
                      <li key={hIdx} className="flex items-start gap-2 text-xs text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  onClick={() => onSelectTestForBooking(service.title)}
                  className="mt-2 w-full py-2 px-3 rounded-xl bg-slate-200/70 group-hover:bg-amber-500 group-hover:text-slate-950 text-slate-800 text-xs font-bold transition-all duration-200 flex items-center justify-center gap-1.5"
                >
                  <span>Book / Enquire</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            );
          })}
        </div>

        {/* Malayalam Services Summary Banner (Exact from Poster) */}
        <div className="bg-slate-900 text-slate-100 rounded-3xl p-8 sm:p-10 mb-20 border border-amber-500/30 shadow-xl">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <div className="flex items-center justify-center gap-2 text-amber-400 font-bold text-xl sm:text-2xl">
              <span>🌿</span>
              <span>ഞങ്ങളുടെ സേവനങ്ങൾ</span>
              <span>🌿</span>
            </div>
            <p className="text-xs text-slate-400 mt-1">
              ഏയിംകൊമ്പ്, പാലാ - തൊടുപുഴ ഹൈവേ | ഫോൺ: 9072243372, 9072243991
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center sm:text-left">
            <div className="p-3 bg-slate-800/80 rounded-2xl border border-slate-700/60">
              <p className="text-xs text-amber-400 font-bold mb-1">01. കൺസൾട്ടേഷൻ</p>
              <p className="text-sm font-bold text-white">ഡോക്ടർ സേവനങ്ങൾ</p>
            </div>
            <div className="p-3 bg-slate-800/80 rounded-2xl border border-slate-700/60">
              <p className="text-xs text-amber-400 font-bold mb-1">02. ഒ. പി.</p>
              <p className="text-sm font-bold text-white">ഒ. പി. സേവനങ്ങൾ</p>
            </div>
            <div className="p-3 bg-slate-800/80 rounded-2xl border border-slate-700/60">
              <p className="text-xs text-amber-400 font-bold mb-1">03. കാഷ്വാലിറ്റി</p>
              <p className="text-sm font-bold text-white">മിനി കാഷ്വാലിറ്റി</p>
            </div>
            <div className="p-3 bg-slate-800/80 rounded-2xl border border-slate-700/60">
              <p className="text-xs text-amber-400 font-bold mb-1">04. ലാബ് ടെസ്റ്റ്</p>
              <p className="text-sm font-bold text-white">മെഡിക്കൽ ലാബ്</p>
            </div>
            <div className="p-3 bg-slate-800/80 rounded-2xl border border-slate-700/60">
              <p className="text-xs text-amber-400 font-bold mb-1">05. മരുന്നുകൾ</p>
              <p className="text-sm font-bold text-white">ക്ലിനിക്കൽ ഫാർമസി</p>
            </div>
            <div className="p-3 bg-slate-800/80 rounded-2xl border border-slate-700/60">
              <p className="text-xs text-amber-400 font-bold mb-1">06. ഹൃദയ പരിശോധന</p>
              <p className="text-sm font-bold text-white">ഇ.സി.ജി. (ECG)</p>
            </div>
            <div className="p-3 bg-slate-800/80 rounded-2xl border border-slate-700/60">
              <p className="text-xs text-amber-400 font-bold mb-1">07. ശ്വാസകോശ പരിചരണം</p>
              <p className="text-sm font-bold text-white">ഓക്സിജൻ നെബുലൈസേഷൻ</p>
            </div>
            <div className="p-3 bg-slate-800/80 rounded-2xl border border-slate-700/60">
              <p className="text-xs text-amber-400 font-bold mb-1">08. ഹോം കളക്ഷൻ</p>
              <p className="text-sm font-bold text-white">ഹോം ബ്ലഡ് കളക്ഷൻ</p>
            </div>
          </div>
        </div>

        {/* Interactive Search Catalog for Medical Lab Tests */}
        <div id="test-catalog" className="bg-slate-50 rounded-3xl p-6 sm:p-10 border border-slate-200/90 shadow-sm">
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div>
              <h3 className="text-2xl font-black text-slate-900">
                Medical Lab Tests & Pricing
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                Lab Hours: <strong>7:30 AM – 5:30 PM</strong> (Monday – Sunday) • Home collection available
              </p>
            </div>

            <span className="text-xs font-bold text-slate-700 bg-white px-3 py-1.5 rounded-xl border border-slate-200 self-start sm:self-auto">
              Same-Day Fast Reporting
            </span>
          </div>

          {/* Search Input Bar */}
          <div className="relative mb-6">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-slate-400" />
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search tests by name (e.g., Blood Sugar, CBC, Cholesterol, Thyroid, ECG, Urine)..."
              className="w-full pl-11 pr-4 py-3.5 rounded-2xl bg-white border border-slate-300 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all shadow-sm"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute inset-y-0 right-0 pr-4 flex items-center text-xs text-slate-400 hover:text-slate-600"
              >
                Clear
              </button>
            )}
          </div>

          {/* Tests Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredTests.map((test) => (
              <div 
                key={test.id}
                className="bg-white rounded-2xl p-5 border border-slate-200/90 hover:border-amber-400 shadow-sm hover:shadow-md transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-bold text-amber-800 bg-amber-50 px-2 py-0.5 rounded-md border border-amber-200 uppercase">
                      {test.categoryLabel}
                    </span>
                    <span className="text-[11px] text-slate-400 font-mono">
                      {test.code}
                    </span>
                  </div>

                  <h4 className="font-bold text-slate-900 text-base mb-1.5 leading-snug">
                    {test.name}
                  </h4>
                  <p className="text-xs text-slate-500 line-clamp-2 mb-3">
                    {test.description}
                  </p>

                  <div className="space-y-1.5 text-xs text-slate-600 bg-slate-50/80 p-2.5 rounded-xl mb-4">
                    <div className="flex items-center gap-2">
                      <Clock className="w-3.5 h-3.5 text-teal-600 shrink-0" />
                      <span>Report TAT: <strong className="text-slate-800">{test.tat}</strong></span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Droplet className="w-3.5 h-3.5 text-rose-500 shrink-0" />
                      <span>Sample: <strong className="text-slate-800">{test.sampleType}</strong></span>
                    </div>
                    <div className="text-[11px] text-amber-800 bg-amber-50/80 px-1.5 py-0.5 rounded">
                      {test.fasting}
                    </div>
                  </div>
                </div>

                <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
                  <div>
                    <span className="text-xs text-slate-400 block font-medium">Price</span>
                    <span className="text-lg font-black text-slate-900">
                      ₹{test.price}
                    </span>
                  </div>

                  <button
                    onClick={() => onSelectTestForBooking(test.name)}
                    className="inline-flex items-center gap-1.5 bg-amber-50 hover:bg-amber-500 text-amber-900 hover:text-slate-950 font-bold text-xs px-3.5 py-2 rounded-xl transition-colors duration-200 border border-amber-200 hover:border-amber-500"
                  >
                    <Calendar className="w-3.5 h-3.5" />
                    <span>Book Test</span>
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
