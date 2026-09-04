export type PageId =
  | 'home'
  | 'about'
  | 'examinations'
  | 'results'
  | 'services'
  | 'schools'
  | 'circulars'
  | 'careers'
  | 'contact';

export interface Notice {
  id: string;
  title: string;
  date: string;
  category: 'Notice' | 'Circular' | 'Press Release' | 'Tender';
  isNew?: boolean;
  pdfUrl?: string;
  size?: string;
  description?: string;
}

export interface ExamInfo {
  code: string;
  name: string;
  level: string;
  description: string;
  subjectsCount: number;
  totalCandidates: string;
  passPercentage: string;
}

export interface SpecimenPaper {
  id: string;
  exam: 'ICSE' | 'ISC';
  year: string;
  subject: string;
  semester?: string;
  size: string;
}

export interface School {
  id: string;
  name: string;
  code: string;
  state: string;
  city: string;
  pincode: string;
  type: 'Co-Ed' | 'Boys' | 'Girls';
  category: 'Day School' | 'Boarding School' | 'Day & Boarding';
  levels: string[];
  principal: string;
  phone: string;
  email: string;
  address: string;
  affiliationYear: number;
}

export interface ResultQuery {
  course: 'ICSE' | 'ISC';
  uid: string;
  indexNo: string;
  captcha: string;
}

export interface SubjectMark {
  subject: string;
  code: string;
  theory: number;
  practical: number;
  total: number;
  grade: string;
}

export interface StudentResult {
  uid: string;
  indexNo: string;
  candidateName: string;
  gender: string;
  dateOfBirth: string;
  schoolName: string;
  schoolCode: string;
  course: 'ICSE' | 'ISC';
  year: string;
  resultStatus: 'PASS CERTIFICATE AWARDED' | 'ELIGIBLE FOR COMPARTMENT' | 'UNSUCCESSFUL';
  percentage: number;
  subjects: SubjectMark[];
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  fee: string;
  deliveryTime: string;
  eligibility: string;
  iconName: string;
}

export interface CareerOpening {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  lastDate: string;
  vacancies: number;
  qualification: string;
  payScale: string;
}
