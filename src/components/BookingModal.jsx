import React, { useState, useEffect } from 'react';
import { 
  X, 
  Send, 
  CheckCircle2, 
  Calendar, 
  Clock, 
  User, 
  Phone, 
  Mail, 
  FileText, 
  Home, 
  MapPin, 
  ShieldCheck,
  RefreshCw
} from 'lucide-react';
import { allTests } from '../data/testsData';
import { healthPackages } from '../data/packagesData';

export default function BookingModal({ isOpen, onClose, defaultTest }) {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    selectedItem: defaultTest || '',
    preferredDate: '',
    preferredSlot: 'Morning (06:30 AM - 10:00 AM)',
    requestHomeCollection: false,
    address: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    if (defaultTest) {
      setFormData((prev) => ({
        ...prev,
        selectedItem: defaultTest,
        requestHomeCollection: defaultTest.toLowerCase().includes('home') ? true : prev.requestHomeCollection
      }));
    }
  }, [defaultTest]);

  // Handle escape key to close
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

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
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
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
      address: ''
    });
    setIsSuccess(false);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      
      {/* Backdrop overlay */}
      <div 
        className="fixed inset-0"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Card */}
      <div className="relative bg-white rounded-3xl max-w-xl w-full p-6 sm:p-8 shadow-2xl border border-slate-100 z-10 max-h-[90vh] overflow-y-auto">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {isSuccess ? (
          <div className="text-center py-6 space-y-5 animate-in zoom-in-95 duration-200">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div className="space-y-1">
              <span className="text-[11px] font-bold text-emerald-700 uppercase tracking-wider bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                Confirmed
              </span>
              <h3 className="text-2xl font-bold text-slate-900">
                Appointment Requested!
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 max-w-sm mx-auto">
                Thank you, <strong>{formData.fullName}</strong>. Our lab coordinator will call you within 15 minutes to confirm.
              </p>
            </div>

            <div className="bg-slate-50 rounded-2xl p-4 text-left text-xs space-y-2 text-slate-700 border border-slate-200">
              <div className="flex justify-between">
                <span className="text-slate-500">Test:</span>
                <strong className="text-slate-900">{formData.selectedItem || 'General Health Test'}</strong>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Phone:</span>
                <strong className="text-slate-900">{formData.phone}</strong>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Service:</span>
                <strong className="text-teal-700">
                  {formData.requestHomeCollection ? 'Home Sample Collection' : 'Center Walk-In'}
                </strong>
              </div>
            </div>

            <div className="flex items-center justify-center gap-3 pt-2">
              <button
                onClick={handleReset}
                className="px-4 py-2 border border-slate-200 rounded-xl text-xs font-semibold text-slate-700 hover:bg-slate-50"
              >
                Book Another Test
              </button>
              <button
                onClick={onClose}
                className="px-6 py-2 bg-teal-700 text-white rounded-xl text-xs font-semibold hover:bg-teal-800"
              >
                Close Window
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="mb-6">
              <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-teal-700 bg-teal-50 px-2.5 py-0.5 rounded-md mb-2">
                <Calendar className="w-3.5 h-3.5" />
                <span>Quick Appointment Form</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                Schedule a Test
              </h3>
              <p className="text-xs text-slate-500 mt-0.5">
                Reserve your slot with priority lab processing.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                    <User className="w-4 h-4" />
                  </div>
                  <input
                    type="text"
                    required
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Patient's full name"
                    className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-xs sm:text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-teal-600"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                      <Phone className="w-4 h-4" />
                    </div>
                    <input
                      type="tel"
                      required
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 98765 43210"
                      className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-xs sm:text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-teal-600"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                      <Mail className="w-4 h-4" />
                    </div>
                    <input
                      type="email"
                      required
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="patient@example.com"
                      className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-xs sm:text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-teal-600"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Test or Package <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                    <FileText className="w-4 h-4" />
                  </div>
                  <select
                    required
                    name="selectedItem"
                    value={formData.selectedItem}
                    onChange={handleChange}
                    className="w-full pl-9 pr-8 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-xs sm:text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-teal-600 cursor-pointer"
                  >
                    <option value="">-- Select Test or Health Package --</option>
                    <optgroup label="Packages">
                      {healthPackages.map((p) => (
                        <option key={p.id} value={p.title}>
                          {p.title} (₹{p.price})
                        </option>
                      ))}
                    </optgroup>
                    <optgroup label="Tests">
                      {allTests.map((t) => (
                        <option key={t.id} value={t.name}>
                          {t.name} (₹{t.price})
                        </option>
                      ))}
                    </optgroup>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Date <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="date"
                    required
                    name="preferredDate"
                    min={minDateStr}
                    value={formData.preferredDate}
                    onChange={handleChange}
                    className="w-full px-3 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-xs sm:text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-teal-600"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Time Slot <span className="text-red-500">*</span>
                  </label>
                  <select
                    required
                    name="preferredSlot"
                    value={formData.preferredSlot}
                    onChange={handleChange}
                    className="w-full px-3 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-xs sm:text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-teal-600 cursor-pointer"
                  >
                    <option value="Morning (06:30 AM - 10:00 AM)">Morning (06:30 - 10:00 AM)</option>
                    <option value="Midday (10:00 AM - 02:00 PM)">Midday (10:00 AM - 02:00 PM)</option>
                    <option value="Evening (02:00 PM - 07:00 PM)">Evening (02:00 - 07:00 PM)</option>
                  </select>
                </div>
              </div>

              {/* Home Sample Collection Toggle */}
              <div>
                <label className="flex items-center gap-2 p-3 rounded-xl bg-teal-50/70 border border-teal-200 cursor-pointer">
                  <input
                    type="checkbox"
                    name="requestHomeCollection"
                    checked={formData.requestHomeCollection}
                    onChange={handleChange}
                    className="w-4 h-4 text-teal-600 rounded border-slate-300 focus:ring-teal-500"
                  />
                  <span className="text-xs font-bold text-slate-800">
                    Request Doorstep Home Sample Collection
                  </span>
                </label>
              </div>

              {formData.requestHomeCollection && (
                <div className="animate-in fade-in duration-200">
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Home Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required={formData.requestHomeCollection}
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    placeholder="House/Flat No., Building, Area, Landmark"
                    className="w-full px-3 py-2 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-xs focus:bg-white focus:outline-none focus:ring-2 focus:ring-teal-600"
                  />
                </div>
              )}

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 rounded-xl bg-teal-700 hover:bg-teal-800 text-white font-bold text-sm shadow-md transition-colors flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <div className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Submit Booking</span>
                    </>
                  )}
                </button>
              </div>

            </form>
          </div>
        )}

      </div>
    </div>
  );
}

