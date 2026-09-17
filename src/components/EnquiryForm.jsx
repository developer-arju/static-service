import React, { useState, useEffect } from 'react';
import { 
  Send, 
  CheckCircle2, 
  Calendar, 
  Clock, 
  MapPin, 
  User, 
  Phone, 
  Mail, 
  FileText, 
  Home, 
  Sparkles,
  ShieldCheck,
  RefreshCw
} from 'lucide-react';
import { allTests } from '../data/testsData';
import { healthPackages } from '../data/packagesData';

export default function EnquiryForm({ prefilledTest, onClearPrefilled }) {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    selectedItem: '',
    preferredDate: '',
    preferredSlot: 'Morning (06:30 AM - 10:00 AM)',
    requestHomeCollection: false,
    address: '',
    notes: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Set initial prefilled test if passed from Packages or Services
  useEffect(() => {
    if (prefilledTest) {
      setFormData((prev) => ({
        ...prev,
        selectedItem: prefilledTest,
        requestHomeCollection: prefilledTest.toLowerCase().includes('home') ? true : prev.requestHomeCollection
      }));
    }
  }, [prefilledTest]);

  // Set tomorrow as minimum date
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const minDateStr = tomorrow.toISOString().split('T')[0];

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate quick network processing
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      if (onClearPrefilled) onClearPrefilled();
    }, 600);
  };

  const handleReset = () => {
    setFormData({
      fullName: '',
      phone: '',
      email: '',
      selectedItem: '',
      preferredDate: '',
      preferredSlot: 'Morning (06:30 AM - 10:00 AM)',
      requestHomeCollection: false,
      address: '',
      notes: ''
    });
    setIsSubmitted(false);
  };

  return (
    <section id="enquiry" className="py-16 md:py-24 bg-gradient-to-b from-slate-50 to-teal-50/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-teal-100/70 border border-teal-200 text-teal-800 text-xs font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5 text-teal-600" />
            <span>Instant Slot Reservation</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Book a Diagnostic Test or Home Collection
          </h2>
          <p className="mt-3 text-base text-slate-600 max-w-xl mx-auto">
            Fill out your details below. Our clinical coordinator will verify test requirements and confirm your appointment within 15 minutes.
          </p>
        </div>

        {/* Card Form Container */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-xl shadow-slate-200/60 border border-slate-200/90 relative overflow-hidden">
          
          {isSubmitted ? (
            /* Sleek Success Confirmation State */
            <div className="text-center py-8 px-4 space-y-6 animate-in fade-in zoom-in-95 duration-300">
              <div className="w-20 h-20 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-inner">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <div className="space-y-2 max-w-md mx-auto">
                <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                  Booking Request Confirmed
                </span>
                <h3 className="text-2xl font-extrabold text-slate-900">
                  Thank you, {formData.fullName || 'Valued Patient'}!
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Our lab coordinator will call you within <strong className="text-slate-900 font-semibold">15 minutes</strong> to confirm your slot, verify fasting guidelines, and dispatch your phlebotomist.
                </p>
              </div>

              {/* Booking Summary Box */}
              <div className="bg-slate-50 rounded-2xl p-5 border border-slate-200 text-left max-w-md mx-auto space-y-2.5 text-xs text-slate-700">
                <div className="flex justify-between py-1 border-b border-slate-200/60">
                  <span className="text-slate-500">Test / Package:</span>
                  <strong className="text-slate-900 text-right">{formData.selectedItem || 'General Health Panel'}</strong>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-200/60">
                  <span className="text-slate-500">Contact Number:</span>
                  <strong className="text-slate-900">{formData.phone}</strong>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-200/60">
                  <span className="text-slate-500">Preferred Slot:</span>
                  <strong className="text-slate-900">{formData.preferredDate || 'Tomorrow'} ({formData.preferredSlot.split(' ')[0]})</strong>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-slate-500">Service Mode:</span>
                  <strong className="text-teal-700 font-bold">
                    {formData.requestHomeCollection ? 'Home Sample Collection' : 'Center Walk-In Visit'}
                  </strong>
                </div>
                {formData.requestHomeCollection && formData.address && (
                  <div className="pt-1 text-slate-500 text-[11px]">
                    Address: {formData.address}
                  </div>
                )}
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                <button
                  onClick={handleReset}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl border border-slate-200 text-slate-700 text-xs font-semibold hover:bg-slate-50 transition-colors"
                >
                  <RefreshCw className="w-3.5 h-3.5" />
                  <span>Book Another Test</span>
                </button>
                <a
                  href="tel:+919876543210"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl bg-teal-700 text-white text-xs font-semibold hover:bg-teal-800 transition-colors"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Call Us Directly</span>
                </a>
              </div>
            </div>
          ) : (
            /* Interactive Booking Form */
            <form onSubmit={handleSubmit} className="space-y-6">
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {/* Full Name */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                    Patient Full Name <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                      <User className="w-4 h-4" />
                    </div>
                    <input
                      type="text"
                      name="fullName"
                      required
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="e.g., Rohit Sharma"
                      className="w-full pl-10 pr-4 py-3 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-transparent transition-all"
                    />
                  </div>
                </div>

                {/* Phone Number */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                    Contact Phone Number <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                      <Phone className="w-4 h-4" />
                    </div>
                    <input
                      type="tel"
                      name="phone"
                      required
                      pattern="[0-9\+\-\s]{10,15}"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 98765 43210"
                      className="w-full pl-10 pr-4 py-3 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-transparent transition-all"
                    />
                  </div>
                </div>

                {/* Email Address */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                    Email Address (For Reports) <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                      <Mail className="w-4 h-4" />
                    </div>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="rohit@example.com"
                      className="w-full pl-10 pr-4 py-3 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-transparent transition-all"
                    />
                  </div>
                </div>

                {/* Test / Package Selector Dropdown */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                    Select Test or Package <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                      <FileText className="w-4 h-4" />
                    </div>
                    <select
                      name="selectedItem"
                      required
                      value={formData.selectedItem}
                      onChange={handleChange}
                      className="w-full pl-10 pr-8 py-3 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-transparent transition-all appearance-none cursor-pointer"
                    >
                      <option value="">-- Choose Diagnostic Test / Package --</option>
                      <optgroup label="Popular Preventive Packages">
                        {healthPackages.map((pkg) => (
                          <option key={pkg.id} value={pkg.title}>
                            {pkg.title} (₹{pkg.price})
                          </option>
                        ))}
                      </optgroup>
                      <optgroup label="Individual Pathology & Radiology Tests">
                        {allTests.map((t) => (
                          <option key={t.id} value={t.name}>
                            {t.name} (₹{t.price})
                          </option>
                        ))}
                      </optgroup>
                      <option value="Custom Consultation / Other Tests">Other / Doctor Prescription Upload</option>
                    </select>
                  </div>
                </div>

                {/* Preferred Date */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                    Preferred Date <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                      <Calendar className="w-4 h-4" />
                    </div>
                    <input
                      type="date"
                      name="preferredDate"
                      min={minDateStr}
                      required
                      value={formData.preferredDate}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-3 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-transparent transition-all"
                    />
                  </div>
                </div>

                {/* Preferred Slot */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                    Preferred Time Slot <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                      <Clock className="w-4 h-4" />
                    </div>
                    <select
                      name="preferredSlot"
                      required
                      value={formData.preferredSlot}
                      onChange={handleChange}
                      className="w-full pl-10 pr-8 py-3 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-transparent transition-all appearance-none cursor-pointer"
                    >
                      <option value="Morning (06:30 AM - 10:00 AM)">Morning (06:30 AM - 10:00 AM) [Ideal for Fasting]</option>
                      <option value="Midday (10:00 AM - 02:00 PM)">Midday (10:00 AM - 02:00 PM)</option>
                      <option value="Evening (02:00 PM - 07:00 PM)">Evening (02:00 PM - 07:00 PM)</option>
                    </select>
                  </div>
                </div>

              </div>

              {/* Home Sample Collection Toggle */}
              <div className="pt-2">
                <label className="relative flex items-start gap-3 p-4 rounded-2xl bg-teal-50/70 border border-teal-200 cursor-pointer hover:bg-teal-50 transition-colors">
                  <input
                    type="checkbox"
                    name="requestHomeCollection"
                    checked={formData.requestHomeCollection}
                    onChange={handleChange}
                    className="mt-1 w-4 h-4 text-teal-600 rounded border-slate-300 focus:ring-teal-500 focus:ring-offset-0 cursor-pointer"
                  />
                  <div>
                    <div className="flex items-center gap-2">
                      <Home className="w-4 h-4 text-teal-700" />
                      <span className="text-sm font-bold text-slate-900">
                        Request Home Sample Collection
                      </span>
                      <span className="text-[10px] font-semibold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-full">
                        Free Service
                      </span>
                    </div>
                    <p className="text-xs text-slate-600 mt-0.5">
                      Our certified phlebotomist will arrive with sterilized cold-chain vials at your home address.
                    </p>
                  </div>
                </label>
              </div>

              {/* Expandable Address Field if Home Collection checked */}
              {formData.requestHomeCollection && (
                <div className="space-y-2 animate-in fade-in slide-in-from-top-2 duration-200">
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                    Full Home Address & Landmark <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute top-3.5 left-3.5 text-slate-400">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <textarea
                      name="address"
                      required={formData.requestHomeCollection}
                      rows={2}
                      value={formData.address}
                      onChange={handleChange}
                      placeholder="Apartment / House No., Society Name, Street, Landmark, Pin code"
                      className="w-full pl-10 pr-4 py-3 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-transparent transition-all"
                    />
                  </div>
                </div>
              )}

              {/* Submit Button */}
              <div className="pt-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 px-6 rounded-2xl bg-teal-700 hover:bg-teal-800 text-white font-bold text-base shadow-lg shadow-teal-700/25 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                      <span>Securing Your Slot...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Confirm Appointment Request</span>
                    </>
                  )}
                </button>
              </div>

              {/* Privacy and verification note */}
              <div className="flex items-center justify-center gap-2 text-xs text-slate-500 text-center">
                <ShieldCheck className="w-4 h-4 text-teal-600" />
                <span>We respect your medical privacy. No spam. Instant 15-minute coordinator callback.</span>
              </div>

            </form>
          )}

        </div>

      </div>
    </section>
  );
}

