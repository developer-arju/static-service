export const healthPackages = [
  {
    id: "basic-wellness",
    title: "Basic Health Checkup",
    subtitle: "Essential baseline blood & vitals screening for routine checkups and young adults.",
    price: 799,
    originalPrice: 1500,
    discount: "47% OFF",
    testsCount: 28,
    tat: "Within 6 Hours",
    fasting: "8-10 Hours Fasting",
    sampleType: "Blood & Urine",
    popular: false,
    badge: "Routine Care",
    keyTests: [
      "Complete Blood Count (CBC - 24 Parameters)",
      "Fasting Blood Sugar (Glucose)",
      "Serum Creatinine (Kidney Screen)",
      "Total Cholesterol & Triglycerides",
      "Urine Routine Examination",
      "Free Doctor Consultation & Blood Pressure Check"
    ]
  },
  {
    id: "diabetic-cardiac",
    title: "Diabetic & Cardiac Wellness",
    subtitle: "Specially designed for sugar control, heart rhythm monitoring, and lipid evaluation.",
    price: 1499,
    originalPrice: 2800,
    discount: "46% OFF",
    testsCount: 42,
    tat: "Same Day",
    fasting: "10-12 Hours Fasting",
    sampleType: "Blood, Urine & ECG",
    popular: true,
    badge: "Most Popular",
    keyTests: [
      "HbA1c (3-Month Average Blood Sugar)",
      "Fasting & Post-Prandial Blood Sugar",
      "Complete Lipid Profile (8 Parameters)",
      "Computerized 12-Lead ECG",
      "Kidney Function Test (Creatinine, Urea)",
      "Liver Enzymes Screen (SGPT)",
      "Doctor Review & Medication Counseling"
    ]
  },
  {
    id: "comprehensive-executive",
    title: "Comprehensive Full Body Panel",
    subtitle: "Master screening covering all vital organs, thyroid, liver, kidney, and cardiovascular markers.",
    price: 2699,
    originalPrice: 5000,
    discount: "46% OFF",
    testsCount: 60,
    tat: "Same Day (8-10h)",
    fasting: "10-12 Hours Fasting",
    sampleType: "Blood, Urine & ECG",
    popular: false,
    badge: "Complete Care",
    keyTests: [
      "Complete Blood Count with ESR (24 Parameters)",
      "Thyroid Profile Total (T3, T4, TSH)",
      "Liver Function Test Complete (11 Parameters)",
      "Renal Function Test with Electrolytes",
      "Lipid Profile Extended (Cholesterol & Fractions)",
      "HbA1c & Fasting Glucose",
      "Computerized 12-Lead ECG",
      "Urine Routine & Microscopic Examination",
      "Priority Senior Doctor Consultation"
    ]
  }
];

export const trustAccreditations = [
  {
    id: "clinic-opd",
    title: "Qualified Medical Doctors",
    code: "Monday – Sunday 8:00 AM - 8:00 PM",
    description: "Daily general physician OPD consultations and dedicated visiting specialist clinics.",
    icon: "Stethoscope"
  },
  {
    id: "lab-precision",
    title: "Automated Laboratory",
    code: "Monday – Sunday 7:30 AM - 5:30 PM",
    description: "Quality diagnostic analyzers delivering reliable, rapid test results with digital reporting.",
    icon: "Microscope"
  },
  {
    id: "emergency-support",
    title: "Mini Casualty & O2",
    code: "Immediate First Aid & Oxygen",
    description: "Observation beds, nebulization equipment, and immediate acute stabilization support.",
    icon: "HeartPulse"
  },
  {
    id: "home-phlebotomy",
    title: "Home Blood Collection",
    code: "Aimcombu & Highway Corridor",
    description: "Trained phlebotomists visiting homes with sterilized cold-carrier kits for elder care.",
    icon: "Home"
  }
];

export const patientReviews = [
  {
    id: 1,
    name: "Mathew Varghese",
    role: "Aimcombu Resident, 58 yrs",
    comment: "DiaMedicare is a blessing on the Pala-Thodupuzha Highway. The doctor listened patiently, and the lab reports were ready within 3 hours. Friendly and courteous staff!",
    rating: 5,
    date: "12 Sep 2026",
    packageUsed: "Diabetic & Cardiac Wellness",
    verified: true
  },
  {
    id: 2,
    name: "Ancy Joseph",
    role: "Teacher, 39 yrs",
    comment: "Called for home blood collection for my mother who is bedridden. The lab phlebotomist was on time at 7:30 AM, very gentle, and sent the reports directly to our WhatsApp.",
    rating: 5,
    date: "06 Sep 2026",
    packageUsed: "Home Blood Collection",
    verified: true
  },
  {
    id: 3,
    name: "Suresh Kumar P.",
    role: "Business Owner, 46 yrs",
    comment: "Had severe wheezing and visited their Mini Casualty. The O2 and nebulisation gave instant relief. Having pharmacy, lab, and clinic under one roof is super convenient.",
    rating: 5,
    date: "29 Aug 2026",
    packageUsed: "O2 + Nebulisation & O.P.",
    verified: true
  }
];
