import React from 'react';
import { 
  ShieldCheck, 
  Award, 
  Thermometer, 
  Cpu, 
  Star, 
  Quote, 
  CheckCircle2, 
  Check 
} from 'lucide-react';
import { trustAccreditations, patientReviews } from '../data/packagesData';

export default function TrustAndAccreditation() {
  const getAccreditationIcon = (iconName) => {
    switch (iconName) {
      case 'ShieldCheck': return ShieldCheck;
      case 'Award': return Award;
      case 'Thermometer': return Thermometer;
      case 'Cpu': return Cpu;
      default: return ShieldCheck;
    }
  };

  return (
    <section id="about" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 border border-teal-200 text-teal-700 text-xs font-semibold mb-3">
            <Award className="w-3.5 h-3.5" />
            <span>Accreditations & Trust</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Certified Quality You Can Rely On
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600">
            Adhering to strict international laboratory benchmarks to ensure every microgram, cell count, and biomarker is measured with flawless precision.
          </p>
        </div>

        {/* Accreditations & Quality Standards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {trustAccreditations.map((item) => {
            const Icon = getAccreditationIcon(item.icon);
            return (
              <div
                key={item.id}
                className="bg-slate-50/80 rounded-2xl p-6 border border-slate-200/80 hover:border-teal-300 transition-all hover:shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-teal-700 text-white flex items-center justify-center mb-4 shadow-sm shadow-teal-700/20">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-slate-900 text-lg mb-1">
                    {item.title}
                  </h3>
                  <span className="inline-block text-[11px] font-bold text-teal-700 bg-teal-50 px-2 py-0.5 rounded border border-teal-100 mb-3">
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

        {/* Clinical Quality Assurance Highlight Banner */}
        <div className="bg-slate-900 text-slate-200 rounded-3xl p-8 sm:p-10 mb-20 border border-slate-800">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-7 space-y-4 text-left">
              <span className="text-teal-400 font-mono text-xs uppercase tracking-wider font-bold">
                Quality Protocol
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                Our 4-Stage Pathology Quality Control
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                From pre-analytical vacuum tube barcoding to post-analytical review by certified M.D. Pathologists, every specimen passes 4 verification checkpoints.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="flex items-center gap-2 text-xs text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0" />
                  <span>Dual daily calibration with Bio-Rad controls</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0" />
                  <span>Bidirectional LIMS host communication</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0" />
                  <span>Automated reflex testing for abnormal values</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0" />
                  <span>Immediate critical alert phone calls to doctor</span>
                </div>
              </div>
            </div>

            <div className="md:col-span-5 bg-slate-800/80 rounded-2xl p-6 border border-slate-700 text-center">
              <div className="text-4xl font-extrabold text-teal-400 font-sans mb-1">
                99.8%
              </div>
              <div className="text-sm font-semibold text-white mb-2">
                External Quality Assurance (EQAS) Score
              </div>
              <p className="text-xs text-slate-400 leading-relaxed mb-4">
                Ranked in top 1% across 1,200 peer pathology centers in regional inter-laboratory proficiency trials.
              </p>
              <div className="inline-flex items-center gap-1.5 text-xs text-teal-300 font-semibold bg-teal-900/40 px-3 py-1 rounded-full border border-teal-700/50">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>CMC Vellore EQAS Enrolled</span>
              </div>
            </div>
          </div>
        </div>

        {/* Patient Reviews Section */}
        <div>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900">
              Trusted by 50,000+ Patients
            </h3>
            <p className="text-sm text-slate-500 mt-1">
              Read real experiences from patients who trust AuraDiagnostics for their routine and specialized health assessments.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {patientReviews.map((review) => (
              <div 
                key={review.id}
                className="bg-slate-50/70 rounded-2xl p-6 border border-slate-200/80 flex flex-col justify-between hover:shadow-md transition-shadow relative"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    {/* Star Rating */}
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
                        <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 shrink-0" />
                      )}
                    </div>
                    <span className="text-xs text-slate-500 block">
                      {review.role}
                    </span>
                  </div>

                  <span className="text-[10px] font-semibold text-teal-700 bg-teal-50 px-2 py-0.5 rounded border border-teal-100">
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

