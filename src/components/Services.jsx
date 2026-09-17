import React, { useState, useMemo } from 'react';
import { 
  FlaskConical, 
  Activity, 
  HeartPulse, 
  Home, 
  Search, 
  Clock, 
  Droplet, 
  ArrowRight,
  Sparkles,
  CheckCircle2,
  Calendar
} from 'lucide-react';
import { serviceCategories, allTests } from '../data/testsData';

export default function Services({ onSelectTestForBooking }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Map category icons
  const getIcon = (iconName) => {
    switch (iconName) {
      case 'FlaskConical': return FlaskConical;
      case 'Activity': return Activity;
      case 'HeartPulse': return HeartPulse;
      case 'Home': return Home;
      default: return FlaskConical;
    }
  };

  // Filter tests based on category and search query
  const filteredTests = useMemo(() => {
    return allTests.filter((test) => {
      const matchesCategory = selectedCategory === 'all' || test.category === selectedCategory;
      const matchesSearch = 
        test.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        test.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        test.code.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [searchQuery, selectedCategory]);

  return (
    <section id="services" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 border border-teal-200 text-teal-700 text-xs font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Comprehensive Diagnostic Care</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Our Core Clinical & Diagnostic Services
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600">
            Equipped with cutting-edge analytical systems to provide accurate, reliable, and swift test findings for doctors and patients.
          </p>
        </div>

        {/* 4 Core Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {serviceCategories.map((service) => {
            const Icon = getIcon(service.icon);
            return (
              <div 
                key={service.id}
                className="bg-slate-50 hover:bg-white rounded-2xl p-6 border border-slate-200/80 hover:border-teal-300 shadow-sm hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-teal-100/70 text-teal-700 group-hover:bg-teal-700 group-hover:text-white transition-colors duration-200 flex items-center justify-center shadow-sm">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-slate-200/60 text-slate-700">
                      {service.badge}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-teal-800 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    {service.description}
                  </p>

                  <ul className="space-y-2 border-t border-slate-200/60 pt-3 mb-4">
                    {service.highlights.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  onClick={() => {
                    setSelectedCategory(service.id === 'home-collection' ? 'pathology' : service.id);
                    const directoryEl = document.getElementById('test-catalog');
                    if (directoryEl) directoryEl.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="mt-2 text-xs font-semibold text-teal-700 hover:text-teal-900 flex items-center gap-1 group-hover:translate-x-1 transition-transform"
                >
                  <span>Explore Tests in this category</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            );
          })}
        </div>

        {/* Interactive Search & Filter Catalog Section */}
        <div id="test-catalog" className="bg-slate-50 rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-sm">
          
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
            <div>
              <h3 className="text-2xl font-bold text-slate-900">
                Search & Filter Tests Catalog
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                Browse our individual clinical tests, report delivery timelines, and transparent pricing.
              </p>
            </div>

            {/* Category Filter Tabs */}
            <div className="flex flex-wrap items-center gap-2">
              {[
                { id: 'all', label: 'All Tests' },
                { id: 'pathology', label: 'Pathology & Blood' },
                { id: 'radiology', label: 'Radiology & Scans' },
              ].map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-medium transition-all ${
                    selectedCategory === cat.id
                      ? 'bg-teal-700 text-white shadow-sm'
                      : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
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
              placeholder="Search tests by name, keyword, or code (e.g., CBC, Thyroid, Lipid, X-Ray, Sugar)..."
              className="w-full pl-11 pr-4 py-3.5 rounded-2xl bg-white border border-slate-300 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-transparent transition-all shadow-sm"
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
          {filteredTests.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredTests.map((test) => (
                <div 
                  key={test.id}
                  className="bg-white rounded-2xl p-5 border border-slate-200/90 hover:border-teal-400 shadow-sm hover:shadow-md transition-all duration-200 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[10px] font-bold text-teal-700 bg-teal-50 px-2 py-0.5 rounded-md border border-teal-100 uppercase">
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

                    <div className="space-y-1.5 text-xs text-slate-600 bg-slate-50/70 p-2.5 rounded-xl mb-4">
                      <div className="flex items-center gap-2">
                        <Clock className="w-3.5 h-3.5 text-teal-600 shrink-0" />
                        <span>Report TAT: <strong className="text-slate-800">{test.tat}</strong></span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Droplet className="w-3.5 h-3.5 text-teal-600 shrink-0" />
                        <span>Sample: <strong className="text-slate-800">{test.sampleType}</strong></span>
                      </div>
                      <div className="text-[11px] text-amber-700 bg-amber-50 px-1.5 py-0.5 rounded">
                        {test.fasting}
                      </div>
                    </div>
                  </div>

                  <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
                    <div>
                      <span className="text-xs text-slate-400 block font-medium">Test Price</span>
                      <span className="text-lg font-extrabold text-slate-900">
                        ₹{test.price}
                      </span>
                    </div>

                    <button
                      onClick={() => onSelectTestForBooking(test.name)}
                      className="inline-flex items-center gap-1.5 bg-teal-50 hover:bg-teal-700 text-teal-700 hover:text-white font-semibold text-xs px-3.5 py-2 rounded-xl transition-colors duration-200 border border-teal-200 hover:border-teal-700"
                    >
                      <Calendar className="w-3.5 h-3.5" />
                      <span>Book Test</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12 bg-white rounded-2xl border border-dashed border-slate-200">
              <Search className="w-8 h-8 text-slate-300 mx-auto mb-2" />
              <p className="text-slate-700 font-medium text-sm">No tests matching "{searchQuery}"</p>
              <p className="text-slate-400 text-xs mt-1">Try searching for Thyroid, Blood, Ultrasound, or Glucose.</p>
              <button
                onClick={() => { setSearchQuery(''); setSelectedCategory('all'); }}
                className="mt-3 text-xs text-teal-700 font-semibold hover:underline"
              >
                Reset Search Filters
              </button>
            </div>
          )}

        </div>

      </div>
    </section>
  );
}

