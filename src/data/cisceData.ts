import { CareerOpening, Notice, School, ServiceItem, SpecimenPaper, StudentResult } from '../types';

export const CISCE_NOTICES: Notice[] = [
  {
    id: 'n1',
    title: 'Timetable for ICSE (Class X) and ISC (Class XII) Year 2025-2026 Board Examinations',
    date: 'February 24, 2025',
    category: 'Circular',
    isNew: true,
    size: '1.4 MB',
    description: 'Detailed schedule and subject-wise examination timetable for Class X and Class XII regular and improvement examinations.'
  },
  {
    id: 'n2',
    title: 'Availability of Specimen Question Papers and Marking Schemes for Examination Year 2025-2026',
    date: 'January 18, 2025',
    category: 'Notice',
    isNew: true,
    size: '850 KB',
    description: 'Specimen papers aligned with competency-focused questions and the National Education Policy (NEP) guidelines.'
  },
  {
    id: 'n3',
    title: 'Advisory on Online Document Verification Portal for Affiliated Schools and Employers',
    date: 'January 05, 2025',
    category: 'Circular',
    isNew: false,
    size: '620 KB',
    description: 'Mandatory verification procedures for genuine validation of Pass Certificates and Statement of Marks.'
  },
  {
    id: 'n4',
    title: 'Public Notice: Caution against unauthorized and fake websites claiming to represent CISCE',
    date: 'December 28, 2024',
    category: 'Press Release',
    isNew: false,
    size: '410 KB',
    description: 'Stakeholders are advised that www.cisce.org and cisceboard.org are official online portals of the Council.'
  },
  {
    id: 'n5',
    title: 'Instructions for Conduct of Practical Examinations in Science, Computers, and Home Science',
    date: 'December 15, 2024',
    category: 'Notice',
    isNew: false,
    size: '980 KB',
    description: 'Standard operating procedures for external and internal examiners for ISC & ICSE practical assessments.'
  },
  {
    id: 'n6',
    title: 'Invitation of Tenders for Supply of Security Hologram Pass Certificates and Stationery',
    date: 'November 30, 2024',
    category: 'Tender',
    isNew: false,
    size: '2.1 MB',
    description: 'Notice inviting sealed bids from authorized security printing presses for examination stationery.'
  }
];

export const SPECIMEN_PAPERS: SpecimenPaper[] = [
  { id: 'sp-1', exam: 'ICSE', year: '2025', subject: 'English Language (Paper 1)', size: '1.1 MB' },
  { id: 'sp-2', exam: 'ICSE', year: '2025', subject: 'Literature in English (Paper 2)', size: '890 KB' },
  { id: 'sp-3', exam: 'ICSE', year: '2025', subject: 'Mathematics', size: '1.4 MB' },
  { id: 'sp-4', exam: 'ICSE', year: '2025', subject: 'Physics (Science Paper 1)', size: '1.2 MB' },
  { id: 'sp-5', exam: 'ICSE', year: '2025', subject: 'Chemistry (Science Paper 2)', size: '1.3 MB' },
  { id: 'sp-6', exam: 'ICSE', year: '2025', subject: 'Biology (Science Paper 3)', size: '1.1 MB' },
  { id: 'sp-7', exam: 'ICSE', year: '2025', subject: 'History & Civics', size: '940 KB' },
  { id: 'sp-8', exam: 'ICSE', year: '2025', subject: 'Geography', size: '1.5 MB' },
  { id: 'sp-9', exam: 'ICSE', year: '2025', subject: 'Computer Applications', size: '1.2 MB' },
  { id: 'sp-10', exam: 'ICSE', year: '2025', subject: 'Economics / Commercial Studies', size: '820 KB' },
  { id: 'sp-11', exam: 'ISC', year: '2025', subject: 'English Language (Paper 1)', size: '990 KB' },
  { id: 'sp-12', exam: 'ISC', year: '2025', subject: 'Literature in English (Paper 2)', size: '1.0 MB' },
  { id: 'sp-13', exam: 'ISC', year: '2025', subject: 'Mathematics', size: '1.8 MB' },
  { id: 'sp-14', exam: 'ISC', year: '2025', subject: 'Physics', size: '1.6 MB' },
  { id: 'sp-15', exam: 'ISC', year: '2025', subject: 'Chemistry', size: '1.5 MB' },
  { id: 'sp-16', exam: 'ISC', year: '2025', subject: 'Biology', size: '1.4 MB' },
  { id: 'sp-17', exam: 'ISC', year: '2025', subject: 'Computer Science', size: '1.3 MB' },
  { id: 'sp-18', exam: 'ISC', year: '2025', subject: 'Accountancy', size: '1.7 MB' },
  { id: 'sp-19', exam: 'ISC', year: '2025', subject: 'Economics', size: '1.2 MB' },
  { id: 'sp-20', exam: 'ISC', year: '2025', subject: 'Commerce & Business Studies', size: '1.1 MB' }
];

export const CISCE_SCHOOLS: School[] = [
  {
    id: 'sch-1',
    name: 'The Cathedral and John Connon School',
    code: 'MA001',
    state: 'Maharashtra',
    city: 'Mumbai',
    pincode: '400001',
    type: 'Co-Ed',
    category: 'Day School',
    levels: ['ICSE (Class X)', 'ISC (Class XII)'],
    principal: 'Dr. S. Mukherjee',
    phone: '+91-22-22001282',
    email: 'principal@cathedral-school.com',
    address: '6, Purshottamdas Thakurdas Marg, Fort, Mumbai',
    affiliationYear: 1961
  },
  {
    id: 'sch-2',
    name: 'La Martiniere College',
    code: 'UP012',
    state: 'Uttar Pradesh',
    city: 'Lucknow',
    pincode: '226001',
    type: 'Boys',
    category: 'Day & Boarding',
    levels: ['ICSE (Class X)', 'ISC (Class XII)'],
    principal: 'Mr. C. McFarland',
    phone: '+91-522-2238411',
    email: 'principal@lamartinierelucknow.org',
    address: 'Post Box No. 42, La Martiniere Road, Lucknow',
    affiliationYear: 1959
  },
  {
    id: 'sch-3',
    name: "St. Xavier's Collegiate School",
    code: 'WB005',
    state: 'West Bengal',
    city: 'Kolkata',
    pincode: '700016',
    type: 'Boys',
    category: 'Day School',
    levels: ['ICSE (Class X)', 'ISC (Class XII)'],
    principal: 'Rev. Fr. M. Thamacin SJ',
    phone: '+91-33-22551171',
    email: 'office@sxcs.edu.in',
    address: '30, Mother Teresa Sarani (Park Street), Kolkata',
    affiliationYear: 1958
  },
  {
    id: 'sch-4',
    name: 'The Doon School',
    code: 'UT003',
    state: 'Uttarakhand',
    city: 'Dehradun',
    pincode: '248001',
    type: 'Boys',
    category: 'Boarding School',
    levels: ['ICSE (Class X)', 'ISC (Class XII)'],
    principal: 'Dr. J. Raghavan',
    phone: '+91-135-2526400',
    email: 'info@doonschool.com',
    address: 'Mall Road, Kishan Nagar, Dehradun',
    affiliationYear: 1960
  },
  {
    id: 'sch-5',
    name: 'Bishop Cotton Boys School',
    code: 'KA008',
    state: 'Karnataka',
    city: 'Bengaluru',
    pincode: '560001',
    type: 'Boys',
    category: 'Day & Boarding',
    levels: ['ICSE (Class X)', 'ISC (Class XII)'],
    principal: 'Prof. John K. Ebenezar',
    phone: '+91-80-22213608',
    email: 'contact@bishopcottonboysschool.edu.in',
    address: 'St. Marks Road, Bengaluru',
    affiliationYear: 1962
  },
  {
    id: 'sch-6',
    name: 'Modern High School for Girls',
    code: 'WB019',
    state: 'West Bengal',
    city: 'Kolkata',
    pincode: '700019',
    type: 'Girls',
    category: 'Day School',
    levels: ['ICSE (Class X)', 'ISC (Class XII)'],
    principal: 'Mrs. D. Kar',
    phone: '+91-33-22875373',
    email: 'contact@mhsforgirls.edu.in',
    address: '78, Syed Amir Ali Avenue, Kolkata',
    affiliationYear: 1964
  },
  {
    id: 'sch-7',
    name: 'The Frank Anthony Public School',
    code: 'DL002',
    state: 'Delhi',
    city: 'New Delhi',
    pincode: '110014',
    type: 'Co-Ed',
    category: 'Day School',
    levels: ['ICSE (Class X)', 'ISC (Class XII)'],
    principal: 'Mr. I. T. Myers',
    phone: '+91-11-26435944',
    email: 'fapsdelhi@gmail.com',
    address: 'Lajpat Nagar IV, Near Moolchand Metro, New Delhi',
    affiliationYear: 1959
  },
  {
    id: 'sch-8',
    name: 'Sishya School',
    code: 'TN004',
    state: 'Tamil Nadu',
    city: 'Chennai',
    pincode: '600020',
    type: 'Co-Ed',
    category: 'Day School',
    levels: ['ICSE (Class X)', 'ISC (Class XII)'],
    principal: 'Mrs. Omana Thomas',
    phone: '+91-44-24911742',
    email: 'sishya@sishya.com',
    address: 'New No. 2, Padmanabha Nagar, Adyar, Chennai',
    affiliationYear: 1974
  }
];

export const DEMO_RESULTS: Record<string, StudentResult> = {
  // ICSE Sample Candidate 1
  '7182934': {
    uid: '7182934',
    indexNo: '2418042/019',
    candidateName: 'AARAV R. SHARMA',
    gender: 'MALE',
    dateOfBirth: '14/08/2009',
    schoolName: 'ST. XAVIER HIGH SCHOOL, NEW DELHI',
    schoolCode: 'DL042',
    course: 'ICSE',
    year: '2025',
    resultStatus: 'PASS CERTIFICATE AWARDED',
    percentage: 96.4,
    subjects: [
      { subject: 'ENGLISH LANGUAGE & LITERATURE', code: '01', theory: 94, practical: 20, total: 94, grade: '1 (ONE)' },
      { subject: 'HINDI (SECOND LANGUAGE)', code: '02', theory: 96, practical: 20, total: 96, grade: '1 (ONE)' },
      { subject: 'HISTORY, CIVICS & GEOGRAPHY', code: '50', theory: 95, practical: 20, total: 95, grade: '1 (ONE)' },
      { subject: 'MATHEMATICS', code: '51', theory: 98, practical: 20, total: 98, grade: '1 (ONE)' },
      { subject: 'SCIENCE (PHY, CHEM, BIO)', code: '52', theory: 97, practical: 20, total: 97, grade: '1 (ONE)' },
      { subject: 'COMPUTER APPLICATIONS', code: '86', theory: 100, practical: 100, total: 100, grade: '1 (ONE)' }
    ]
  },
  // ISC Sample Candidate 2
  '6291045': {
    uid: '6291045',
    indexNo: '1219081/045',
    candidateName: 'ANANYA SEN',
    gender: 'FEMALE',
    dateOfBirth: '22/11/2007',
    schoolName: 'THE CATHEDRAL & JOHN CONNON SCHOOL, MUMBAI',
    schoolCode: 'MA001',
    course: 'ISC',
    year: '2025',
    resultStatus: 'PASS CERTIFICATE AWARDED',
    percentage: 97.25,
    subjects: [
      { subject: 'ENGLISH (COMPULSORY)', code: '801', theory: 95, practical: 20, total: 95, grade: '1 (ONE)' },
      { subject: 'MATHEMATICS', code: '860', theory: 98, practical: 20, total: 98, grade: '1 (ONE)' },
      { subject: 'PHYSICS', code: '861', theory: 68, practical: 29, total: 97, grade: '1 (ONE)' },
      { subject: 'CHEMISTRY', code: '862', theory: 69, practical: 30, total: 99, grade: '1 (ONE)' },
      { subject: 'COMPUTER SCIENCE', code: '868', theory: 69, practical: 30, total: 99, grade: '1 (ONE)' }
    ]
  }
};

export const PUBLIC_SERVICES: ServiceItem[] = [
  {
    id: 'doc-verify',
    title: 'Online Verification of Documents',
    description: 'Instant verification of authenticity for Statement of Marks and Pass Certificates issued by CISCE for university admissions, overseas verification, and employment.',
    fee: '₹1,500 per document',
    deliveryTime: '3 - 5 Working Days',
    eligibility: 'Institutions, Employers, Emigration Authorities, Students',
    iconName: 'ShieldCheck'
  },
  {
    id: 'dup-cert',
    title: 'Issue of Duplicate Certificates & Marksheets',
    description: 'Application for duplicate Pass Certificate, Statement of Marks, or Migration Certificate in case of loss, theft, or damage of original credentials.',
    fee: '₹2,000 per document',
    deliveryTime: '15 - 20 Working Days',
    eligibility: 'Candidate with police FIR / affidavit',
    iconName: 'Copy'
  },
  {
    id: 'mig-cert',
    title: 'Migration Certificate Issuance',
    description: 'Official council migration certificate for ICSE / ISC pass-outs seeking admission to other national or international education boards and universities.',
    fee: '₹500 standard / ₹1,000 urgent',
    deliveryTime: '2 - 7 Working Days',
    eligibility: 'All passed candidates',
    iconName: 'FileText'
  },
  {
    id: 'correction',
    title: 'Correction in Name / Date of Birth / Particulars',
    description: 'Correction of typographical discrepancies in candidate name, father’s name, mother’s name, or date of birth based on school admission register records.',
    fee: '₹1,000 per entry',
    deliveryTime: '30 Working Days',
    eligibility: 'Through Head of the Affiliated School',
    iconName: 'Edit3'
  },
  {
    id: 'digilocker',
    title: 'DigiLocker Integration Service',
    description: 'Legally valid digital credentials available on Government of India DigiLocker portal. Digital marksheets and certificates have equal standing under IT Act 2000.',
    fee: 'Free of Cost',
    deliveryTime: 'Instant',
    eligibility: 'All students with Aadhaar card linked',
    iconName: 'CloudDownload'
  },
  {
    id: 'affiliation',
    title: 'School Affiliation & Provisional Recognition',
    description: 'Online application, inspection scheduling, and compliance portal for schools seeking provisional or permanent affiliation to CISCE for ICSE / ISC.',
    fee: 'As per Council Rules',
    deliveryTime: 'Scheduled cycle',
    eligibility: 'Registered Educational Trusts / Societies',
    iconName: 'Building2'
  }
];

export const CAREER_OPENINGS: CareerOpening[] = [
  {
    id: 'car-1',
    title: 'Education Officer (Curriculum Development - STEM)',
    department: 'Research, Development & Consultancy Division (RDCD)',
    location: 'Pushp Vihar, New Delhi',
    type: 'Full Time / Permanent',
    lastDate: 'March 31, 2025',
    vacancies: 3,
    qualification: "Master's Degree with B.Ed / M.Ed, minimum 10 years experience in senior secondary school teaching / curriculum design.",
    payScale: 'Level 11 (₹67,700 - ₹2,08,700) + allowances'
  },
  {
    id: 'car-2',
    title: 'Senior Systems Analyst / Database Administrator',
    department: 'Information Technology Division',
    location: 'Pragati House, Nehru Place, New Delhi',
    type: 'Full Time / Regular',
    lastDate: 'April 10, 2025',
    vacancies: 2,
    qualification: 'B.Tech / B.E. / MCA in Computer Science with minimum 8 years experience in high-volume examination management platforms.',
    payScale: 'Level 10 (₹56,100 - ₹1,77,500) + allowances'
  },
  {
    id: 'car-3',
    title: 'Assistant Secretary (Examinations & Affiliation)',
    department: 'Examinations Wing',
    location: 'Pushp Vihar, New Delhi',
    type: 'Full Time / Regular',
    lastDate: 'April 20, 2025',
    vacancies: 2,
    qualification: 'Post Graduate degree with 12+ years administrative experience in central/state education boards or recognized universities.',
    payScale: 'Level 12 (₹78,800 - ₹2,09,200) + allowances'
  }
];

export const LEADERSHIP = [
  {
    name: 'Dr. G. Immanuel',
    title: "Chairman, CISCE",
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop&q=80',
    quote: "Education must nurture compassion, inquiry, and intellectual resilience. The Council remains dedicated to providing an enriching learning experience that prepares young minds for a dynamic global landscape."
  },
  {
    name: 'Dr. Joseph Emmanuel',
    title: "Chief Executive & Secretary, CISCE",
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&auto=format&fit=crop&q=80',
    quote: "Our curriculum emphasizes holistic development, analytical mastery, and values. We are transforming pedagogical standards across all affiliated institutions in harmony with NEP 2020."
  }
];

export const TIMETABLE_SUMMARY = [
  { exam: 'ICSE (Class X)', startDate: 'February 18, 2025', endDate: 'March 27, 2025', shift: '11:00 AM (2 to 2.5 hours)' },
  { exam: 'ISC (Class XII)', startDate: 'February 13, 2025', endDate: 'April 05, 2025', shift: '02:00 PM (3 hours)' },
  { exam: 'CVE (Vocational)', startDate: 'March 01, 2025', endDate: 'March 22, 2025', shift: '10:00 AM (3 hours)' }
];
