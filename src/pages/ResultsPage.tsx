import React, { useState } from 'react';
import {
  AlertCircle,
  Award,
  CheckCircle2,
  Download,
  ExternalLink,
  FileCheck,
  HelpCircle,
  Printer,
  QrCode,
  RefreshCw,
  Search,
  Shield,
  User
} from 'lucide-react';
import { DEMO_RESULTS } from '../data/cisceData';
import { PageId, StudentResult } from '../types';

interface ResultsPageProps {
  onNavigate: (page: PageId) => void;
}

export const ResultsPage: React.FC<ResultsPageProps> = ({ onNavigate }) => {
  const [course, setCourse] = useState<'ICSE' | 'ISC'>('ICSE');
  const [uid, setUid] = useState('7182934');
  const [indexNo, setIndexNo] = useState('2418042/019');
  const [captchaInput, setCaptchaInput] = useState('');
  const [generatedCaptcha, setGeneratedCaptcha] = useState('9KM8W');
  const [searchedResult, setSearchedResult] = useState<StudentResult | null>(DEMO_RESULTS['7182934']);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const refreshCaptcha = () => {
    const chars = '23456789ABCDEFGHJKLMNPQRSTUVWXYZ';
    let code = '';
    for (let i = 0; i < 5; i++) {
      code += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setGeneratedCaptcha(code);
    setCaptchaInput('');
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    if (!uid || uid.trim().length !== 7) {
      setErrorMessage('Please enter a valid 7-digit Unique Identification Number (UID).');
      return;
    }

    if (!indexNo || !indexNo.includes('/')) {
      setErrorMessage('Please enter a valid Index Number (e.g., 2418042/019).');
      return;
    }

    // Check if result exists in demo records
    const found = DEMO_RESULTS[uid.trim()];
    if (found && found.course === course) {
      setSearchedResult(found);
    } else {
      // Generate a dynamic result for the entered UID so any test number works!
      const generated: StudentResult = {
        uid: uid.trim(),
        indexNo: indexNo.trim(),
        candidateName: 'RISHABH K. MALHOTRA',
        gender: 'MALE',
        dateOfBirth: '18/05/2008',
        schoolName: 'ST. COLUMBA SCHOOL, ASHOK PLACE, NEW DELHI',
        schoolCode: 'DL015',
        course: course,
        year: '2025',
        resultStatus: 'PASS CERTIFICATE AWARDED',
        percentage: 94.8,
        subjects: course === 'ICSE' ? [
          { subject: 'ENGLISH LANGUAGE & LITERATURE', code: '01', theory: 92, practical: 20, total: 92, grade: '1 (ONE)' },
          { subject: 'HINDI', code: '02', theory: 94, practical: 20, total: 94, grade: '1 (ONE)' },
          { subject: 'HISTORY, CIVICS & GEOGRAPHY', code: '50', theory: 95, practical: 20, total: 95, grade: '1 (ONE)' },
          { subject: 'MATHEMATICS', code: '51', theory: 97, practical: 20, total: 97, grade: '1 (ONE)' },
          { subject: 'SCIENCE (PHY, CHEM, BIO)', code: '52', theory: 96, practical: 20, total: 96, grade: '1 (ONE)' },
          { subject: 'COMPUTER APPLICATIONS', code: '86', theory: 100, practical: 100, total: 100, grade: '1 (ONE)' }
        ] : [
          { subject: 'ENGLISH', code: '801', theory: 92, practical: 20, total: 92, grade: '1 (ONE)' },
          { subject: 'MATHEMATICS', code: '860', theory: 96, practical: 20, total: 96, grade: '1 (ONE)' },
          { subject: 'PHYSICS', code: '861', theory: 67, practical: 28, total: 95, grade: '1 (ONE)' },
          { subject: 'CHEMISTRY', code: '862', theory: 68, practical: 29, total: 97, grade: '1 (ONE)' },
          { subject: 'COMPUTER SCIENCE', code: '868', theory: 69, practical: 30, total: 99, grade: '1 (ONE)' }
        ]
      };
      setSearchedResult(generated);
    }
  };

  const loadSample = (sampleCourse: 'ICSE' | 'ISC') => {
    if (sampleCourse === 'ICSE') {
      setCourse('ICSE');
      setUid('7182934');
      setIndexNo('2418042/019');
      setSearchedResult(DEMO_RESULTS['7182934']);
    } else {
      setCourse('ISC');
      setUid('6291045');
      setIndexNo('1219081/045');
      setSearchedResult(DEMO_RESULTS['6291045']);
    }
    setErrorMessage(null);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="w-full bg-slate-50 min-h-screen py-8">
      {/* Banner */}
      <div className="bg-[#0b2545] text-white py-10 px-4 md:px-8 border-b-4 border-amber-500">
        <div className="max-w-7xl mx-auto space-y-2">
          <div className="flex items-center gap-2 text-amber-400 text-xs uppercase font-bold tracking-wider">
            <Award className="w-4 h-4" />
            <span>National Results Portal (Session 2025-2026)</span>
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold font-serif tracking-tight">
            ICSE &amp; ISC Examination Results
          </h1>
          <p className="text-slate-300 text-xs sm:text-sm max-w-3xl leading-relaxed">
            Direct online statement of marks, digital grade evaluation, and authentication for candidate performance.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8 space-y-10">
        {/* Results Lookup Form Container */}
        <div className="bg-white rounded-xl shadow-md border-2 border-[#0b2545]/20 overflow-hidden">
          <div className="bg-[#0b2545] text-white p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <div className="flex items-center gap-2.5">
              <Shield className="w-5 h-5 text-amber-400" />
              <h2 className="font-bold text-sm sm:text-base tracking-wide font-serif uppercase">
                Candidate Result Verification Form
              </h2>
            </div>
            {/* Quick Demo Fill Buttons */}
            <div className="flex items-center gap-2 text-xs">
              <span className="text-slate-300 text-[11px] hidden sm:inline">Load Sample:</span>
              <button
                type="button"
                onClick={() => loadSample('ICSE')}
                className="bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold px-2.5 py-1 rounded text-[11px] uppercase transition-colors"
              >
                Sample ICSE (X)
              </button>
              <button
                type="button"
                onClick={() => loadSample('ISC')}
                className="bg-blue-800 hover:bg-blue-700 text-white font-bold px-2.5 py-1 rounded text-[11px] uppercase transition-colors border border-blue-600"
              >
                Sample ISC (XII)
              </button>
            </div>
          </div>

          <form onSubmit={handleSearch} className="p-6 sm:p-8 space-y-6">
            {errorMessage && (
              <div className="p-3 bg-red-50 border border-red-200 text-red-800 text-xs rounded-lg flex items-center gap-2">
                <AlertCircle className="w-4 h-4 flex-shrink-0 text-red-600" />
                <span>{errorMessage}</span>
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {/* Course */}
              <div className="space-y-1.5">
                <label className="block text-xs font-bold text-[#0b2545] uppercase tracking-wider">
                  Select Course <span className="text-red-500">*</span>
                </label>
                <select
                  value={course}
                  onChange={(e) => setCourse(e.target.value as 'ICSE' | 'ISC')}
                  className="w-full text-xs font-semibold p-2.5 bg-slate-50 border border-slate-300 rounded-md focus:border-[#0b2545] focus:outline-hidden"
                >
                  <option value="ICSE">ICSE (Class X)</option>
                  <option value="ISC">ISC (Class XII)</option>
                </select>
              </div>

              {/* UID */}
              <div className="space-y-1.5">
                <label className="block text-xs font-bold text-[#0b2545] uppercase tracking-wider">
                  Unique ID (UID) <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  maxLength={7}
                  value={uid}
                  onChange={(e) => setUid(e.target.value.replace(/\D/g, ''))}
                  placeholder="7 Digits UID"
                  className="w-full text-xs font-semibold p-2.5 bg-slate-50 border border-slate-300 rounded-md focus:border-[#0b2545] focus:outline-hidden tracking-wider"
                  required
                />
                <span className="text-[10px] text-slate-400">e.g. 7182934</span>
              </div>

              {/* Index No */}
              <div className="space-y-1.5">
                <label className="block text-xs font-bold text-[#0b2545] uppercase tracking-wider">
                  Index Number <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={indexNo}
                  onChange={(e) => setIndexNo(e.target.value)}
                  placeholder="e.g. 2418042/019"
                  className="w-full text-xs font-semibold p-2.5 bg-slate-50 border border-slate-300 rounded-md focus:border-[#0b2545] focus:outline-hidden tracking-wider"
                  required
                />
                <span className="text-[10px] text-slate-400">Format: SchoolCode/CandidateNo</span>
              </div>

              {/* Captcha */}
              <div className="space-y-1.5">
                <label className="block text-xs font-bold text-[#0b2545] uppercase tracking-wider">
                  Security Captcha <span className="text-red-500">*</span>
                </label>
                <div className="flex items-center gap-2">
                  <div className="bg-slate-200 border border-slate-300 px-3 py-2 rounded text-sm font-black tracking-widest text-[#0b2545] select-none font-mono">
                    {generatedCaptcha}
                  </div>
                  <button
                    type="button"
                    onClick={refreshCaptcha}
                    className="p-2 hover:bg-slate-100 rounded text-slate-600 transition-colors"
                    title="Change Captcha"
                  >
                    <RefreshCw className="w-4 h-4" />
                  </button>
                  <input
                    type="text"
                    placeholder="Enter Code"
                    value={captchaInput}
                    onChange={(e) => setCaptchaInput(e.target.value.toUpperCase())}
                    className="w-full text-xs font-semibold p-2.5 bg-slate-50 border border-slate-300 rounded-md focus:border-[#0b2545] focus:outline-hidden uppercase"
                  />
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-slate-200">
              <p className="text-xs text-slate-500">
                Official statement of marks valid for academic purposes. Digital signature verified.
              </p>
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => {
                    setUid('');
                    setIndexNo('');
                    setCaptchaInput('');
                    setSearchedResult(null);
                  }}
                  className="px-4 py-2 text-xs font-bold text-slate-700 hover:bg-slate-100 border border-slate-300 rounded uppercase transition-colors"
                >
                  Reset Form
                </button>
                <button
                  type="submit"
                  className="bg-[#0b2545] hover:bg-blue-900 text-white font-bold text-xs px-6 py-2.5 rounded shadow-sm uppercase tracking-wider transition-all flex items-center gap-2"
                >
                  <Search className="w-4 h-4 text-amber-400" />
                  <span>Show Result</span>
                </button>
              </div>
            </div>
          </form>
        </div>

        {/* Displaying Verified Marksheet / Result Card */}
        {searchedResult && (
          <div id="printable-marksheet" className="bg-white rounded-xl shadow-lg border-2 border-amber-500/40 p-6 sm:p-10 space-y-6 relative overflow-hidden">
            {/* Watermark Crest */}
            <div className="absolute inset-0 flex items-center justify-center opacity-4 pointer-events-none">
              <Shield className="w-96 h-96 text-[#0b2545]" />
            </div>

            {/* Marksheet Top Header */}
            <div className="border-b-2 border-slate-300 pb-6 text-center space-y-1">
              <div className="flex items-center justify-center gap-3 mb-2">
                <div className="w-12 h-12 rounded-full bg-[#0b2545] border-2 border-amber-400 flex items-center justify-center text-amber-300 shadow-xs">
                  <Shield className="w-6 h-6" />
                </div>
              </div>
              <h2 className="text-lg sm:text-2xl font-black text-[#0b2545] font-serif uppercase tracking-wider">
                Council for the Indian School Certificate Examinations
              </h2>
              <p className="text-xs sm:text-sm font-bold text-slate-700 tracking-wide uppercase">
                {searchedResult.course === 'ICSE'
                  ? 'INDIAN CERTIFICATE OF SECONDARY EDUCATION (CLASS - X) EXAMINATION - 2025'
                  : 'INDIAN SCHOOL CERTIFICATE (CLASS - XII) EXAMINATION - 2025'}
              </p>
              <p className="text-xs font-semibold text-amber-800 uppercase tracking-widest">
                STATEMENT OF MARKS
              </p>
            </div>

            {/* Candidate Details Grid */}
            <div className="bg-slate-50/80 p-5 rounded-lg border border-slate-200 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 text-xs">
              <div>
                <span className="text-slate-400 block font-medium">Candidate Name:</span>
                <span className="font-extrabold text-slate-900 text-sm tracking-wide">
                  {searchedResult.candidateName}
                </span>
              </div>
              <div>
                <span className="text-slate-400 block font-medium">Unique ID (UID):</span>
                <span className="font-bold text-slate-900 tracking-wider">
                  {searchedResult.uid}
                </span>
              </div>
              <div>
                <span className="text-slate-400 block font-medium">Index Number:</span>
                <span className="font-bold text-slate-900 tracking-wider">
                  {searchedResult.indexNo}
                </span>
              </div>
              <div>
                <span className="text-slate-400 block font-medium">Gender / D.O.B.:</span>
                <span className="font-bold text-slate-900">
                  {searchedResult.gender} | {searchedResult.dateOfBirth}
                </span>
              </div>
              <div className="sm:col-span-2 md:col-span-4 border-t border-slate-200 pt-2">
                <span className="text-slate-400 block font-medium">School / Centre Name:</span>
                <span className="font-bold text-slate-800">
                  {searchedResult.schoolName} ({searchedResult.schoolCode})
                </span>
              </div>
            </div>

            {/* Marks Table */}
            <div className="overflow-x-auto border border-slate-300 rounded-lg">
              <table className="w-full text-xs text-left">
                <thead className="bg-[#0b2545] text-white uppercase text-[11px]">
                  <tr>
                    <th className="py-3 px-4">Subject Name</th>
                    <th className="py-3 px-4 text-center">Subject Code</th>
                    <th className="py-3 px-4 text-center">Marks Obtained (Total 100)</th>
                    <th className="py-3 px-4 text-center">Grade</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 font-medium">
                  {searchedResult.subjects.map((sub, idx) => (
                    <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
                      <td className="py-3 px-4 font-bold text-slate-900">{sub.subject}</td>
                      <td className="py-3 px-4 text-center text-slate-600 font-mono">{sub.code}</td>
                      <td className="py-3 px-4 text-center font-extrabold text-[#0b2545] text-sm">
                        {sub.total}
                      </td>
                      <td className="py-3 px-4 text-center font-bold text-slate-800">{sub.grade}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Summary & Result Status */}
            <div className="bg-emerald-50 border-2 border-emerald-400/60 p-5 rounded-lg flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="space-y-1 text-center sm:text-left">
                <div className="flex items-center gap-2 justify-center sm:justify-start">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                  <span className="text-xs font-bold text-emerald-800 uppercase tracking-widest">
                    Result Status:
                  </span>
                </div>
                <p className="text-lg font-black text-emerald-900 tracking-wide">
                  {searchedResult.resultStatus}
                </p>
                <p className="text-xs text-slate-600">
                  Aggregate Percentage: <strong className="text-slate-900 font-extrabold">{searchedResult.percentage}%</strong> (English + Top 4 Best Subjects)
                </p>
              </div>

              {/* DigiLocker QR / Authenticity Stamp */}
              <div className="flex items-center gap-4 bg-white p-3 rounded-md border border-emerald-200">
                <div className="w-14 h-14 bg-slate-900 text-white flex items-center justify-center rounded">
                  <QrCode className="w-10 h-10 text-white" />
                </div>
                <div className="text-[11px] text-slate-700 leading-tight">
                  <p className="font-bold text-emerald-800">DigiLocker Verified</p>
                  <p className="text-slate-500 mt-0.5">Scan to verify document cryptographic signature</p>
                </div>
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-slate-200">
              <div className="text-xs text-slate-500">
                Note: Original Pass Certificate and Statement of Marks will be dispatched to the respective school.
              </div>
              <div className="flex items-center gap-3">
                <button
                  onClick={handlePrint}
                  className="bg-white hover:bg-slate-100 text-[#0b2545] border border-slate-300 font-bold text-xs px-4 py-2 rounded uppercase flex items-center gap-1.5 transition-colors"
                >
                  <Printer className="w-4 h-4 text-[#0b2545]" />
                  Print Statement
                </button>
                <button
                  onClick={() => onNavigate('services')}
                  className="bg-[#0b2545] hover:bg-blue-900 text-white font-bold text-xs px-4 py-2 rounded uppercase flex items-center gap-1.5 transition-colors shadow-xs"
                >
                  <FileCheck className="w-4 h-4 text-amber-400" />
                  Apply For Recheck / Verification
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Informational Guidance Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-xs space-y-2">
            <h3 className="font-bold text-[#0b2545] text-sm uppercase">Recheck Guidelines</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Candidates who wish to apply for recheck of their result can do so directly online within 7 days from result declaration. Fee is ₹1,000 per subject. Recheck is restricted strictly to check whether all answers have been evaluated and marks totaled correctly.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-xs space-y-2">
            <h3 className="font-bold text-[#0b2545] text-sm uppercase">DigiLocker Access</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Digital Statement of Marks and Pass Certificates of ICSE and ISC are stored in the DigiLocker repository. Students can sign up with their Aadhaar and mobile number to access verified documents.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-xs space-y-2">
            <h3 className="font-bold text-[#0b2545] text-sm uppercase">Improvement Examinations</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Candidates are permitted to appear for the Improvement Examination in up to two subjects in the subsequent cycle to enhance their academic standing.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
