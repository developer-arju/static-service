export const coreServices = [
  {
    id: "doctor-consultation",
    title: "Doctor Consultation",
    malayalamTitle: "ഡോക്ടർ സേവനങ്ങൾ",
    icon: "Stethoscope",
    description: "Expert outpatient medical consultations with experienced general physicians and visiting specialists for comprehensive healthcare.",
    highlights: ["Experienced General Physicians", "Prescription & Follow-up Care", "Preventive Health Advice", "Morning & Evening OPD Slots"],
    badge: "OPD Consultation"
  },
  {
    id: "op-services",
    title: "O.P. Services",
    malayalamTitle: "ഒ.പി. സേവനങ്ങൾ",
    icon: "ClipboardPlus",
    description: "Full-spectrum Out-Patient care including minor clinical procedures, vitals monitoring, wound dressing, and routine injections.",
    highlights: ["Blood Pressure & Sugar Check", "Dressing & Minor Wound Care", "IV & IM Injection Administration", "Routine Health Screenings"],
    badge: "Walk-in Care"
  },
  {
    id: "mini-casualty",
    title: "Mini Casualty",
    malayalamTitle: "മിനി കാഷ്വാലിറ്റി",
    icon: "Bed",
    description: "Immediate emergency triage, observation beds, first aid, acute stabilization, and urgent symptomatic relief.",
    highlights: ["Observation & Rest Beds", "Emergency First Aid Support", "Immediate Pain Management", "Stabilization & Swift Referral"],
    badge: "Urgent Relief"
  },
  {
    id: "medical-lab",
    title: "Medical Lab",
    malayalamTitle: "മെഡിക്കൽ ലാബ്",
    icon: "Microscope",
    description: "Fully equipped diagnostic laboratory for hematology, clinical biochemistry, urine analysis, and rapid pathology reports.",
    highlights: ["Fully Automated Analyzers", "Fast & Accurate Report Turnaround", "Routine & Preventive Blood Panels", "Certified Lab Technicians"],
    badge: "7:30 AM - 5:30 PM"
  },
  {
    id: "clinical-pharmacy",
    title: "Clinical Pharmacy",
    malayalamTitle: "ക്ലിനിക്കൽ ഫാർമസി",
    icon: "Pill",
    description: "Well-stocked dispensary carrying genuine branded pharmaceuticals, chronic medicines, surgical items, and OTC wellness products.",
    highlights: ["100% Genuine Branded Medicines", "Diabetic & Cardiac Medications", "Nebulization Kits & Surgical Items", "Professional Pharmacist Advice"],
    badge: "On-Site Dispensary"
  },
  {
    id: "ecg",
    title: "ECG (Electrocardiogram)",
    malayalamTitle: "ഇ.സി.ജി.",
    icon: "Activity",
    description: "Computerized 12-lead digital ECG recording for quick cardiac assessment, arrhythmia detection, and pre-procedure clearance.",
    highlights: ["Computerized 12-Lead Tracing", "Instant ECG Printouts", "Chest Pain & Palpitation Screening", "Report Review by Doctors"],
    badge: "Instant Results"
  },
  {
    id: "o2-nebulisation",
    title: "O2 + Nebulisation",
    malayalamTitle: "ഓക്സിജൻ നെബുലൈസേഷൻ",
    icon: "Wind",
    description: "Medical oxygen support and therapeutic aerosol nebulization for immediate relief in asthma, wheezing, COPD, and respiratory distress.",
    highlights: ["Medical Oxygen Cylinder Support", "Pediatric & Adult Nebulizers", "Bronchospasm Relief", "Comfortable Recliner Care"],
    badge: "Respiratory Care"
  },
  {
    id: "home-blood-collection",
    title: "Home Blood Collection",
    malayalamTitle: "ഹോം ബ്ലഡ് കളക്ഷൻ",
    icon: "Droplets",
    description: "Convenient doorstep sample collection across Aimcombu and the Pala-Thodupuzha Highway corridor by trained phlebotomists.",
    highlights: ["Doorstep Visit at Your Preferred Time", "Vacuum Barcoded Tubes", "Ideal for Seniors & Bedridden Patients", "Reports via WhatsApp & Email"],
    badge: "Doorstep Service"
  }
];

export const allTests = [
  {
    id: "cbc",
    name: "Complete Blood Count (CBC) with ESR",
    category: "pathology",
    categoryLabel: "Medical Lab",
    code: "DM-CBC-01",
    price: 300,
    tat: "3-4 Hours",
    fasting: "No fasting required",
    sampleType: "Blood (EDTA)",
    parameters: 24,
    description: "Evaluates overall health and checks for anemia, viral infections, inflammation, and platelet counts.",
    popular: true
  },
  {
    id: "blood-sugar",
    name: "Fasting & Post-Prandial Blood Sugar (FBS / PPBS)",
    category: "pathology",
    categoryLabel: "Medical Lab",
    code: "DM-GLU-02",
    price: 100,
    tat: "1-2 Hours",
    fasting: "Fasting (8-10 hrs) & 2 hrs after meal",
    sampleType: "Fluoride Plasma",
    parameters: 2,
    description: "Essential diagnostic check for diabetes screening and monitoring glycemic management.",
    popular: true
  },
  {
    id: "lipid",
    name: "Lipid Profile (Cholesterol Panel)",
    category: "pathology",
    categoryLabel: "Medical Lab",
    code: "DM-LIP-03",
    price: 550,
    tat: "4-6 Hours",
    fasting: "10-12 hours fasting required",
    sampleType: "Serum",
    parameters: 8,
    description: "Measures Total Cholesterol, HDL, LDL, VLDL, and Triglycerides for cardiovascular assessment.",
    popular: true
  },
  {
    id: "thyroid",
    name: "Thyroid Profile Total (T3, T4, TSH)",
    category: "pathology",
    categoryLabel: "Medical Lab",
    code: "DM-THY-04",
    price: 450,
    tat: "Same Day",
    fasting: "Morning fasting preferred",
    sampleType: "Serum",
    parameters: 3,
    description: "Complete screening of thyroid gland vitality to diagnose hypo or hyperthyroidism.",
    popular: true
  },
  {
    id: "hba1c",
    name: "HbA1c (Glycated Hemoglobin)",
    category: "pathology",
    categoryLabel: "Medical Lab",
    code: "DM-HBA-05",
    price: 400,
    tat: "3 Hours",
    fasting: "No fasting required",
    sampleType: "Whole Blood",
    parameters: 2,
    description: "Reflects average blood sugar control over the past 3 months for diabetic patients.",
    popular: true
  },
  {
    id: "lft",
    name: "Liver Function Test (LFT)",
    category: "pathology",
    categoryLabel: "Medical Lab",
    code: "DM-LFT-06",
    price: 650,
    tat: "5 Hours",
    fasting: "8 hours fasting required",
    sampleType: "Serum",
    parameters: 11,
    description: "Measures Bilirubin, SGOT, SGPT, Alkaline Phosphatase, and Protein levels.",
    popular: false
  },
  {
    id: "rft",
    name: "Renal / Kidney Function Test (RFT/KFT)",
    category: "pathology",
    categoryLabel: "Medical Lab",
    code: "DM-RFT-07",
    price: 650,
    tat: "4 Hours",
    fasting: "No fasting required",
    sampleType: "Serum",
    parameters: 6,
    description: "Evaluates Serum Creatinine, Blood Urea, and Uric Acid levels for kidney health.",
    popular: false
  },
  {
    id: "ecg-scan",
    name: "Computerized 12-Lead ECG",
    category: "cardiac",
    categoryLabel: "ECG",
    code: "DM-ECG-08",
    price: 250,
    tat: "Instant (15 mins)",
    fasting: "No fasting required",
    sampleType: "Clinical Tracing",
    parameters: 1,
    description: "Rapid electrical tracing to detect cardiac rhythm changes, ischemia, and heart status.",
    popular: true
  },
  {
    id: "urine-routine",
    name: "Urine Routine & Microscopic Examination",
    category: "pathology",
    categoryLabel: "Medical Lab",
    code: "DM-URN-09",
    price: 150,
    tat: "2 Hours",
    fasting: "Clean catch midstream sample",
    sampleType: "Urine",
    parameters: 12,
    description: "Screens for urinary tract infections (UTI), kidney disorders, and metabolic indicators.",
    popular: true
  }
];
