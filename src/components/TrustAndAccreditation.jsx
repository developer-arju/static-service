import React from 'react';
import { 
  Stethoscope, 
  Microscope, 
  HeartPulse, 
  Home, 
  Star, 
  CheckCircle2, 
  Award,
  Sparkles
} from 'lucide-react';
import { trustAccreditations, patientReviews } from '../data/packagesData';

export default function TrustAndAccreditation() {
  const getAccreditationIcon = (iconName) => {
    switch (iconName) {
      case 'Stethoscope': return Stethoscope;
      case 'Microscope': return Microscope;
      case 'HeartPulse': return HeartPulse;
      case 'Home': return Home;
      default: return Award;
    }
  };

  return (
    <section id="about" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-900 text-xs font-bold mb-3">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            <span>Why Choose DiaMedicare</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Caring, Community-Focused Healthcare
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600">
            Conveniently situated at Aimcombu on the Pala-Thodupuzha Highway to serve families with reliable medical attention and diagnostic accuracy.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {trustAccreditations.map((item) => {
            const Icon = getAccreditationIcon(item.icon);
            return (
              <div
                key={item.id}
                className="bg-slate-50 rounded-2xl p-6 border border-slate-200/80 hover:border-amber-400 transition-all hover:shadow-md flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-slate-900 text-amber-400 flex items-center justify-center mb-4 shadow-sm border border-amber-500/30">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-slate-900 text-lg mb-1">
                    {item.title}
                  </h3>
                  <span className="inline-block text-[11px] font-bold text-amber-800 bg-amber-50 px-2 py-0.5 rounded border border-amber-200 mb-3">
                    {item.code}
                  </span>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Clinical Assurance & Highway Location Callout */}
        <div className="bg-slate-900 text-slate-200 rounded-3xl p-8 sm:p-10 mb-20 border border-amber-500/30 shadow-xl">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-7 space-y-4 text-left">
              <span className="text-amber-400 font-mono text-xs uppercase tracking-wider font-extrabold">
                Patient-Centric Facility
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                Healthcare When You Need It Most
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Whether it's a routine sugar check before breakfast, consultation with a physician, or urgent nebulization for asthma, DiaMedicare provides compassionate, immediate clinical attention 7 days a week.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="flex items-center gap-2 text-xs text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Experienced Doctors for OPD</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Fully stocked on-site pharmacy</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Digital 12-lead ECG recording</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Oxygen & nebulization support</span>
                </div>
              </div>
            </div>

            <div className="md:col-span-5 bg-slate-800/90 rounded-2xl p-6 border border-slate-700 text-center">
              <div className="text-3xl font-black text-amber-400 font-sans mb-1">
                7 Days a Week
              </div>
              <div className="text-sm font-bold text-white mb-2">
                Continuous Community Service
              </div>
              <p className="text-xs text-slate-400 leading-relaxed mb-4">
                Open from 7:30 AM in the morning for fasting blood tests and through 8:00 PM in the evening for physician consultations.
              </p>
              <div className="inline-flex items-center gap-1.5 text-xs text-amber-300 font-bold bg-amber-950/60 px-3.5 py-1.5 rounded-full border border-amber-700/50">
                <span>Aimcombu, Pala-Thodupuzha Highway</span>
              </div>
            </div>
          </div>
        </div>

        {/* Patient Reviews Section */}
        <div>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h3 className="text-2xl sm:text-3xl font-black text-slate-900">
              What Our Patients Say
            </h3>
            <p className="text-sm text-slate-500 mt-1">
              Feedback from patients and families who trust DiaMedicare for clinic and diagnostic needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {patientReviews.map((review) => (
              <div 
                key={review.id}
                className="bg-slate-50 rounded-2xl p-6 border border-slate-200/80 flex flex-col justify-between hover:shadow-md transition-shadow"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-1 text-amber-400">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <span className="text-[11px] text-slate-400">
                      {review.date}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic mb-6">
                    "{review.comment}"
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-200/60 flex items-center justify-between">
                  <div>
                    <div className="flex items-center gap-1.5">
                      <span className="font-bold text-slate-900 text-sm">
                        {review.name}
                      </span>
                      {review.verified && (
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      )}
                    </div>
                    <span className="text-xs text-slate-500 block">
                      {review.role}
                    </span>
                  </div>

                  <span className="text-[10px] font-bold text-amber-800 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
                    {review.packageUsed}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
