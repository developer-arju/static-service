export const serviceCategories = [
  {
    id: "pathology",
    title: "Blood & Pathology Tests",
    icon: "FlaskConical",
    description: "Fully automated biochemistry, hematology, immunology, and hormonal assay testing with high-precision analyzers.",
    highlights: ["Complete Blood Count (CBC)", "Lipid Profile & Cardiac Risk", "Thyroid Profile (T3, T4, TSH)", "Diabetes HbA1c & Fasting Glucose"],
    badge: "Most Requested"
  },
  {
    id: "radiology",
    title: "Advanced Radiology & Imaging",
    icon: "Activity",
    description: "Low-radiation digital radiography, high-resolution 4D color Doppler ultrasound, and digital ECG diagnostics.",
    highlights: ["Digital Chest & Bone X-Ray", "Abdominal & Pelvic Ultrasound", "12-Lead Digital ECG", "2D Echocardiography"],
    badge: "Digital Precision"
  },
  {
    id: "preventive",
    title: "Health Checkup Packages",
    icon: "HeartPulse",
    description: "Curated multi-parameter health assessments designed for early detection, lifestyle evaluation, and disease prevention.",
    highlights: ["Comprehensive Full Body", "Cardiac Care & Lipid Risk", "Senior Citizen Wellness", "Women's Health Screen"],
    badge: "30-50% Savings"
  },
  {
    id: "home-collection",
    title: "Home Sample Collection",
    icon: "Home",
    description: "Trained, vaccinated phlebotomists collect samples safely at your doorstep with certified temperature-controlled cold chain kits.",
    highlights: ["Book slot in under 60 seconds", "Available 6:00 AM - 7:00 PM daily", "Smart barcode tracking on tubes", "Instant digital report via WhatsApp/Email"],
    badge: "Doorstep Care"
  }
];

export const allTests = [
  {
    id: "cbc",
    name: "Complete Blood Count (CBC) with ESR",
    category: "pathology",
    categoryLabel: "Pathology",
    code: "TEST-CBC-01",
    price: 350,
    tat: "4-6 Hours",
    fasting: "No fasting required",
    sampleType: "Whole Blood (EDTA)",
    parameters: 24,
    description: "Evaluates overall health and detects a wide range of disorders including anemia, infection, and leukemia.",
    popular: true
  },
  {
    id: "lipid",
    name: "Lipid Profile - Extended",
    category: "pathology",
    categoryLabel: "Pathology",
    code: "TEST-LIP-02",
    price: 650,
    tat: "6 Hours",
    fasting: "10-12 hours fasting required",
    sampleType: "Serum",
    parameters: 8,
    description: "Measures Total Cholesterol, HDL, LDL, VLDL, and Triglycerides to evaluate cardiovascular risk.",
    popular: true
  },
  {
    id: "thyroid",
    name: "Thyroid Profile Total (T3, T4, TSH)",
    category: "pathology",
    categoryLabel: "Pathology",
    code: "TEST-THY-03",
    price: 499,
    tat: "6 Hours",
    fasting: "Fasting preferred (morning)",
    sampleType: "Serum",
    parameters: 3,
    description: "Comprehensive assessment of thyroid gland functioning to detect hypo or hyperthyroidism.",
    popular: true
  },
  {
    id: "hba1c",
    name: "HbA1c (Glycosylated Hemoglobin) with eAG",
    category: "pathology",
    categoryLabel: "Pathology",
    code: "TEST-GLU-04",
    price: 450,
    tat: "4 Hours",
    fasting: "No fasting required",
    sampleType: "Whole Blood",
    parameters: 2,
    description: "Reflects average blood sugar control over the past 2 to 3 months for effective diabetes management.",
    popular: true
  },
  {
    id: "lft",
    name: "Liver Function Test (LFT)",
    category: "pathology",
    categoryLabel: "Pathology",
    code: "TEST-LFT-05",
    price: 750,
    tat: "6 Hours",
    fasting: "8-10 hours fasting required",
    sampleType: "Serum",
    parameters: 11,
    description: "Measures SGOT, SGPT, Bilirubin, Alkaline Phosphatase, and Protein levels to gauge hepatic vitality.",
    popular: false
  },
  {
    id: "kft",
    name: "Kidney Function Test (KFT / RFT) with Electrolytes",
    category: "pathology",
    categoryLabel: "Pathology",
    code: "TEST-KFT-06",
    price: 800,
    tat: "6 Hours",
    fasting: "No fasting required",
    sampleType: "Serum & Urine",
    parameters: 9,
    description: "Evaluates Creatinine, Blood Urea Nitrogen, Uric Acid, Sodium, and Potassium levels.",
    popular: false
  },
  {
    id: "vitd",
    name: "Vitamin D3 (25-Hydroxy)",
    category: "pathology",
    categoryLabel: "Pathology",
    code: "TEST-VIT-07",
    price: 999,
    tat: "Same Day",
    fasting: "No fasting required",
    sampleType: "Serum",
    parameters: 1,
    description: "Essential test for bone strength, calcium absorption, immune health, and chronic fatigue screening.",
    popular: true
  },
  {
    id: "vitb12",
    name: "Vitamin B12 (Cyanocobalamin)",
    category: "pathology",
    categoryLabel: "Pathology",
    code: "TEST-VIT-08",
    price: 799,
    tat: "Same Day",
    fasting: "Fasting preferred",
    sampleType: "Serum",
    parameters: 1,
    description: "Detects deficiencies impacting nerve function, red blood cell synthesis, and cognitive alertness.",
    popular: false
  },
  {
    id: "xray-chest",
    name: "Digital Chest X-Ray (PA View)",
    category: "radiology",
    categoryLabel: "Radiology",
    code: "RAD-XRY-01",
    price: 450,
    tat: "1 Hour",
    fasting: "No fasting required",
    sampleType: "Radiology Imaging",
    parameters: 1,
    description: "Low-dose digital imaging for lung infections, pneumonia, cardiomegaly, and thoracic conditions.",
    popular: true
  },
  {
    id: "usg-abdomen",
    name: "Ultrasound Whole Abdomen & Pelvis",
    category: "radiology",
    categoryLabel: "Radiology",
    code: "RAD-USG-02",
    price: 1350,
    tat: "2 Hours",
    fasting: "Full bladder & 4-6h fasting",
    sampleType: "Ultrasound Scan",
    parameters: 1,
    description: "Detailed sonographic imaging of liver, kidneys, gallbladder, pancreas, spleen, and pelvic organs.",
    popular: true
  },
  {
    id: "ecg-12lead",
    name: "12-Lead Computerized Digital ECG",
    category: "radiology",
    categoryLabel: "Radiology",
    code: "RAD-ECG-03",
    price: 300,
    tat: "30 Minutes",
    fasting: "No fasting required",
    sampleType: "Cardiac Tracing",
    parameters: 1,
    description: "Rapid electrical activity recording to identify arrhythmias, ischemia, and heart stress.",
    popular: true
  }
];

