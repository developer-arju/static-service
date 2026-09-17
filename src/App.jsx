import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Packages from './components/Packages';
import TrustAndAccreditation from './components/TrustAndAccreditation';
import EnquiryForm from './components/EnquiryForm';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BookingModal from './components/BookingModal';
import { Calendar, PhoneCall, MessageCircle } from 'lucide-react';

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTestOrPackage, setSelectedTestOrPackage] = useState('');

  // Handle opening modal with or without prefilled test
  const handleOpenBooking = (testName = '') => {
    setSelectedTestOrPackage(testName);
    setIsModalOpen(true);
  };

  // Handle selecting test directly into the main on-page Enquiry Form
  const handleSelectForOnPageForm = (name) => {
    setSelectedTestOrPackage(name);
    const enquiryEl = document.getElementById('enquiry');
    if (enquiryEl) {
      enquiryEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleExploreTests = () => {
    const catalogEl = document.getElementById('test-catalog');
    if (catalogEl) {
      catalogEl.scrollIntoView({ behavior: 'smooth' });
    } else {
      const servicesEl = document.getElementById('services');
      if (servicesEl) servicesEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 selection:bg-teal-100 selection:text-teal-900">
      
      {/* Top Header & Sticky Navigation */}
      <Header 
        onOpenBooking={() => handleOpenBooking()} 
      />

      {/* Main Content Area */}
      <main className="flex-grow">
        
        {/* Hero Section */}
        <Hero 
          onOpenBooking={() => handleOpenBooking()}
          onExploreTests={handleExploreTests}
        />

        {/* Services & Test Directory Section */}
        <Services 
          onSelectTestForBooking={handleSelectForOnPageForm}
        />

        {/* Diagnostic Packages Section */}
        <Packages 
          onSelectPackageForBooking={handleSelectForOnPageForm}
        />

        {/* Accreditations, Quality Protocols & Patient Reviews */}
        <TrustAndAccreditation />

        {/* Interactive Booking / Enquiry Form Section */}
        <EnquiryForm 
          prefilledTest={selectedTestOrPackage}
          onClearPrefilled={() => setSelectedTestOrPackage('')}
        />

        {/* Contact & Map Section */}
        <Contact />

      </main>

      {/* Footer with Legal Disclaimers */}
      <Footer />

      {/* Quick Booking Modal Component */}
      <BookingModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        defaultTest={selectedTestOrPackage}
      />

      {/* Mobile Floating Sticky Action Bar (visible on small screens) */}
      <div className="fixed bottom-0 inset-x-0 z-30 lg:hidden bg-white/95 backdrop-blur-md border-t border-slate-200 p-2.5 flex items-center justify-between gap-2 shadow-2xl">
        <a
          href="tel:+919876543210"
          className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-slate-100 text-slate-800 font-semibold text-xs border border-slate-200"
        >
          <PhoneCall className="w-4 h-4 text-teal-700" />
          <span>Call</span>
        </a>

        <a
          href="https://wa.me/919876543210?text=Hello%20AuraDiagnostics%2C%20I%20would%20like%20to%20book%20a%20test."
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-emerald-50 text-emerald-800 font-semibold text-xs border border-emerald-200"
        >
          <MessageCircle className="w-4 h-4 text-emerald-600" />
          <span>WhatsApp</span>
        </a>

        <button
          onClick={() => handleOpenBooking()}
          className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-teal-700 text-white font-semibold text-xs shadow-md"
        >
          <Calendar className="w-4 h-4" />
          <span>Book Test</span>
        </button>
      </div>

    </div>
  );
}

