export const healthPackages = [
  {
    id: "basic-wellness",
    title: "Basic Wellness Check",
    subtitle: "Essential baseline assessment for young adults and routine annual checkups.",
    price: 999,
    originalPrice: 1999,
    discount: "50% OFF",
    testsCount: 32,
    tat: "Within 8 Hours",
    fasting: "8-10 Hours Fasting",
    sampleType: "Blood & Urine",
    popular: false,
    colorScheme: "slate",
    badge: "Routine Essential",
    keyTests: [
      "Complete Blood Count (CBC - 24 Parameters)",
      "Blood Sugar Fasting (Glucose)",
      "Lipid Profile Basic (Total Chol, Triglycerides)",
      "Kidney Screening (Creatinine & Urea)",
      "Liver Health Screen (SGPT, SGOT)",
      "Urine Routine & Microscopic (10 Parameters)",
      "Free Doctor Consultation Report Analysis"
    ]
  },
  {
    id: "comprehensive-full-body",
    title: "Comprehensive Full Body",
    subtitle: "Our gold standard full-body diagnostic suite covering all vital organs and key vitamins.",
    price: 2499,
    originalPrice: 5200,
    discount: "52% OFF",
    testsCount: 68,
    tat: "Same Day (10 Hours)",
    fasting: "10-12 Hours Fasting",
    sampleType: "Blood & Urine",
    popular: true,
    colorScheme: "teal",
    badge: "Most Popular",
    keyTests: [
      "Complete Blood Count (CBC with ESR - 24 Params)",
      "Extended Lipid Profile (8 Parameters)",
      "Complete Liver Function Test (LFT - 11 Params)",
      "Complete Kidney Function Test (KFT - 9 Params)",
      "Thyroid Profile Total (T3, T4, TSH)",
      "HbA1c Diabetic Control + Average Glucose",
      "Vitamin D3 (25-OH) & Vitamin B12 Levels",
      "Iron Deficiency Panel & Ferritin",
      "Digital ECG (At-Center) or Home Sample Collection",
      "Complimentary Pathologist Review & Summary"
    ]
  },
  {
    id: "executive-health",
    title: "Executive Health & Cardiac",
    subtitle: "In-depth preventive screening designed for 40+ adults with cardiovascular and metabolic risk markers.",
    price: 4299,
    originalPrice: 8500,
    discount: "49% OFF",
    testsCount: 85,
    tat: "12-14 Hours",
    fasting: "10-12 Hours Fasting",
    sampleType: "Blood, Urine & ECG",
    popular: false,
    colorScheme: "navy",
    badge: "Comprehensive Care",
    keyTests: [
      "All 68 tests from Comprehensive Full Body",
      "High-Sensitivity C-Reactive Protein (hs-CRP Cardiac)",
      "Apolipoprotein A1 & B + Lipoprotein (a)",
      "Serum Homocysteine (Cardiovascular Marker)",
      "Pancreatic Amylase & Lipase Screen",
      "Electrolytes Panel (Na, K, Cl, Ionic Calcium)",
      "Digital Chest X-Ray & 12-Lead ECG",
      "Urine Microalbumin/Creatinine Ratio",
      "Dedicated Senior Physician Tele-Consultation"
    ]
  }
];

export const trustAccreditations = [
  {
    id: "nabl",
    title: "NABL Accredited",
    code: "MC-2941 (ISO 15189:2012)",
    description: "National Accreditation Board for Testing and Calibration Laboratories certified standard of analytical excellence.",
    icon: "ShieldCheck"
  },
  {
    id: "iso",
    title: "ISO 9001:2015",
    code: "Quality Management Certified",
    description: "Standardized operating workflows adhering to global healthcare quality management protocols.",
    icon: "Award"
  },
  {
    id: "cold-chain",
    title: "Smart Cold-Chain Logistics",
    code: "2°C - 8°C Monitored",
    description: "Insulated temperature-regulated sample containers with instant digital barcode verification.",
    icon: "Thermometer"
  },
  {
    id: "automation",
    title: "Fully Automated Analyzers",
    code: "Beckman & Roche Platforms",
    description: "Zero manual human transcription errors through direct bidirectional laboratory LIMS integration.",
    icon: "Cpu"
  }
];

export const patientReviews = [
  {
    id: 1,
    name: "Dr. Arvind Mehta",
    role: "Retired Professor, 64 yrs",
    comment: "The phlebotomist was on time at 6:30 AM for the Executive Health package. Smooth venipuncture with zero bruising. I had the verified digital reports in my inbox by 4:00 PM.",
    rating: 5,
    date: "10 Sep 2026",
    packageUsed: "Executive Health Checkup",
    verified: true
  },
  {
    id: 2,
    name: "Sneha Mukherjee",
    role: "Software Architect, 32 yrs",
    comment: "AuraDiagnostics is leagues ahead of traditional diagnostic chains. The website is snappy, booking was a breeze, and the interactive report dashboard explained normal vs abnormal ranges clearly.",
    rating: 5,
    date: "04 Sep 2026",
    packageUsed: "Comprehensive Full Body",
    verified: true
  },
  {
    id: 3,
    name: "Rajeshwar Rao",
    role: "Business Owner, 48 yrs",
    comment: "Booked HbA1c and Lipid Profile for both my parents. The home sample collection service was exceptionally hygienic and polite. Highly recommended for senior care in the city.",
    rating: 5,
    date: "28 Aug 2026",
    packageUsed: "Home Sample Collection",
    verified: true
  }
];

