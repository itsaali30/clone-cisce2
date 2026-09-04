import React, { useState } from 'react';
import {
  AlertCircle,
  Building2,
  CheckCircle2,
  Clock,
  Copy,
  Download,
  Edit3,
  ExternalLink,
  FileCheck,
  FileText,
  HelpCircle,
  Search,
  ShieldCheck
} from 'lucide-react';
import { PUBLIC_SERVICES } from '../data/cisceData';
import { PageId } from '../types';

interface ServicesPageProps {
  onNavigate: (page: PageId) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onNavigate }) => {
  const [selectedServiceId, setSelectedServiceId] = useState<string>('doc-verify');
  const [applicantType, setApplicantType] = useState<'Student' | 'Institution' | 'Employer'>('Student');
  const [candidateUid, setCandidateUid] = useState('7182934');
  const [examCourse, setExamCourse] = useState<'ICSE' | 'ISC'>('ICSE');
  const [examYear, setExamYear] = useState('2024');
  const [applicantName, setApplicantName] = useState('Rahul Verma');
  const [applicantEmail, setApplicantEmail] = useState('rahul.verma@example.com');
  const [applicantPhone, setApplicantPhone] = useState('+91 98765 43210');
  const [applicationRef, setApplicationRef] = useState<string | null>(null);

  // Status tracking state
  const [trackingId, setTrackingId] = useState('CISCE-VER-2025-8941');
  const [trackedStatus, setTrackedStatus] = useState<any>(null);

  const handleSubmitApplication = (e: React.FormEvent) => {
    e.preventDefault();
    const randomCode = Math.floor(1000 + Math.random() * 9000);
    const ref = `CISCE-${selectedServiceId.toUpperCase().slice(0, 3)}-2025-${randomCode}`;
    setApplicationRef(ref);
  };

  const handleTrack = (e: React.FormEvent) => {
    e.preventDefault();
    if (trackingId.trim()) {
      setTrackedStatus({
        ref: trackingId.trim(),
        service: 'Online Verification of Documents',
        status: 'UNDER SCRUTINY & ARCHIVAL VERIFICATION',
        dateSubmitted: '02-Mar-2025',
        expectedCompletion: '07-Mar-2025',
        verificationOfficer: 'Joint Secretary (Verification Cell), Pushp Vihar, New Delhi'
      });
    }
  };

  return (
    <div className="w-full bg-slate-50 min-h-screen py-8">
      {/* Banner */}
      <div className="bg-[#0b2545] text-white py-12 px-4 md:px-8 border-b-4 border-amber-500">
        <div className="max-w-7xl mx-auto space-y-3">
          <div className="flex items-center gap-2 text-amber-400 text-xs uppercase font-bold tracking-wider">
            <ShieldCheck className="w-4 h-4" />
            <span>Public Services Portal</span>
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold font-serif tracking-tight">
            Online Services &amp; Document Verification
          </h1>
          <p className="text-slate-300 text-xs sm:text-sm max-w-3xl leading-relaxed">
            Direct council facilities for genuineness verification of marksheets, issue of duplicate pass certificates, migration certificates, and track application status.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8 space-y-12">
        {/* Services Grid */}
        <div>
          <h2 className="text-lg font-bold text-[#0b2545] font-serif uppercase tracking-wide mb-6">
            Available Online Council Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PUBLIC_SERVICES.map((srv) => (
              <div
                key={srv.id}
                onClick={() => setSelectedServiceId(srv.id)}
                className={`p-6 rounded-xl border transition-all cursor-pointer flex flex-col justify-between ${
                  selectedServiceId === srv.id
                    ? 'bg-white border-2 border-amber-500 shadow-md ring-2 ring-amber-400/20'
                    : 'bg-white border-slate-200 hover:border-blue-300 hover:shadow-xs'
                }`}
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="w-9 h-9 rounded-lg bg-blue-50 text-[#0b2545] flex items-center justify-center font-bold">
                      <FileCheck className="w-5 h-5 text-amber-500" />
                    </span>
                    <span className="text-xs font-bold text-amber-800 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
                      {srv.fee}
                    </span>
                  </div>
                  <h3 className="font-bold text-[#0b2545] text-base">{srv.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{srv.description}</p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-slate-400" />
                    {srv.deliveryTime}
                  </span>
                  <span className="font-bold text-[#0b2545] uppercase">
                    {selectedServiceId === srv.id ? 'Selected' : 'Select'}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Application Form & Tracking (2 Columns) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left 7 Cols: Service Request Form */}
          <div className="lg:col-span-7 bg-white rounded-xl shadow-xs border border-slate-200 p-6 sm:p-8 space-y-6">
            <div className="border-b border-slate-200 pb-4">
              <h3 className="text-lg font-bold text-[#0b2545] font-serif uppercase tracking-wide">
                Apply for Selected Service
              </h3>
              <p className="text-xs text-slate-500 mt-0.5">
                Current service: <strong>{PUBLIC_SERVICES.find(s => s.id === selectedServiceId)?.title}</strong>
              </p>
            </div>

            {applicationRef ? (
              <div className="p-6 bg-emerald-50 border-2 border-emerald-400 rounded-xl space-y-4">
                <div className="flex items-center gap-2.5 text-emerald-800">
                  <CheckCircle2 className="w-6 h-6 text-emerald-600 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-base">Application Submitted Successfully!</h4>
                    <p className="text-xs text-emerald-700">Official CISCE Acknowledgment generated.</p>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-lg border border-emerald-200 space-y-2 text-xs">
                  <div className="flex justify-between">
                    <span className="text-slate-500">Reference Number:</span>
                    <span className="font-mono font-black text-[#0b2545] text-sm">{applicationRef}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Candidate UID:</span>
                    <span className="font-bold text-slate-800">{candidateUid}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Course / Year:</span>
                    <span className="font-bold text-slate-800">{examCourse} ({examYear})</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Processing Fee:</span>
                    <span className="font-bold text-amber-700">{PUBLIC_SERVICES.find(s => s.id === selectedServiceId)?.fee}</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <button
                    onClick={() => {
                      setTrackingId(applicationRef);
                      setApplicationRef(null);
                    }}
                    className="bg-[#0b2545] hover:bg-blue-900 text-white font-bold text-xs px-4 py-2 rounded uppercase tracking-wider transition-colors"
                  >
                    Track This Request
                  </button>
                  <button
                    onClick={() => setApplicationRef(null)}
                    className="border border-slate-300 text-slate-700 hover:bg-slate-100 font-bold text-xs px-4 py-2 rounded uppercase transition-colors"
                  >
                    New Application
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmitApplication} className="space-y-5 text-xs">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-bold text-slate-700 mb-1 uppercase">Applicant Category</label>
                    <select
                      value={applicantType}
                      onChange={(e) => setApplicantType(e.target.value as any)}
                      className="w-full p-2.5 bg-slate-50 border border-slate-300 rounded font-semibold focus:border-[#0b2545] focus:outline-hidden"
                    >
                      <option value="Student">Individual Candidate / Student</option>
                      <option value="Institution">University / College / Institute</option>
                      <option value="Employer">Corporate Employer / Verifier</option>
                    </select>
                  </div>

                  <div>
                    <label className="block font-bold text-slate-700 mb-1 uppercase">Course Examination</label>
                    <select
                      value={examCourse}
                      onChange={(e) => setExamCourse(e.target.value as any)}
                      className="w-full p-2.5 bg-slate-50 border border-slate-300 rounded font-semibold focus:border-[#0b2545] focus:outline-hidden"
                    >
                      <option value="ICSE">ICSE (Class X)</option>
                      <option value="ISC">ISC (Class XII)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block font-bold text-slate-700 mb-1 uppercase">Candidate UID (7 Digits)</label>
                    <input
                      type="text"
                      maxLength={7}
                      value={candidateUid}
                      onChange={(e) => setCandidateUid(e.target.value)}
                      placeholder="e.g. 7182934"
                      className="w-full p-2.5 bg-slate-50 border border-slate-300 rounded font-semibold focus:border-[#0b2545] focus:outline-hidden tracking-wider"
                      required
                    />
                  </div>

                  <div>
                    <label className="block font-bold text-slate-700 mb-1 uppercase">Year of Examination</label>
                    <input
                      type="text"
                      value={examYear}
                      onChange={(e) => setExamYear(e.target.value)}
                      placeholder="e.g. 2024"
                      className="w-full p-2.5 bg-slate-50 border border-slate-300 rounded font-semibold focus:border-[#0b2545] focus:outline-hidden"
                      required
                    />
                  </div>

                  <div>
                    <label className="block font-bold text-slate-700 mb-1 uppercase">Contact Person Name</label>
                    <input
                      type="text"
                      value={applicantName}
                      onChange={(e) => setApplicantName(e.target.value)}
                      className="w-full p-2.5 bg-slate-50 border border-slate-300 rounded font-semibold focus:border-[#0b2545] focus:outline-hidden"
                      required
                    />
                  </div>

                  <div>
                    <label className="block font-bold text-slate-700 mb-1 uppercase">Contact Email</label>
                    <input
                      type="email"
                      value={applicantEmail}
                      onChange={(e) => setApplicantEmail(e.target.value)}
                      className="w-full p-2.5 bg-slate-50 border border-slate-300 rounded font-semibold focus:border-[#0b2545] focus:outline-hidden"
                      required
                    />
                  </div>
                </div>

                <div className="p-4 bg-slate-50 border border-slate-200 rounded-lg space-y-1 text-slate-600">
                  <p className="font-bold text-[#0b2545]">Document Upload Requirement:</p>
                  <p className="text-[11px]">
                    Please attach scanned copy of Marksheet, Pass Certificate, or School Transfer Certificate in PDF/JPEG format (Maximum 5MB).
                  </p>
                  <input
                    type="file"
                    className="mt-2 text-[11px] text-slate-600 file:mr-3 file:py-1 file:px-3 file:rounded file:border-0 file:text-xs file:font-semibold file:bg-blue-900 file:text-white hover:file:bg-blue-800"
                  />
                </div>

                <div className="flex items-center justify-between pt-2">
                  <span className="text-xs text-slate-500">
                    Calculated Council Fee: <strong className="text-amber-700 font-bold">{PUBLIC_SERVICES.find(s => s.id === selectedServiceId)?.fee}</strong>
                  </span>
                  <button
                    type="submit"
                    className="bg-[#0b2545] hover:bg-blue-900 text-white font-bold px-6 py-2.5 rounded uppercase tracking-wider transition-colors shadow-xs"
                  >
                    Submit &amp; Generate Challan
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Right 5 Cols: Track Status Box & Guidelines */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-xl shadow-xs border border-slate-200 p-6 space-y-4">
              <h3 className="font-bold text-[#0b2545] text-base font-serif uppercase tracking-wide border-b border-slate-100 pb-2">
                Track Application Status
              </h3>
              <p className="text-xs text-slate-500">
                Enter your CISCE Application Reference ID to check the current stage of verification or document dispatch.
              </p>

              <form onSubmit={handleTrack} className="space-y-3">
                <input
                  type="text"
                  value={trackingId}
                  onChange={(e) => setTrackingId(e.target.value)}
                  placeholder="e.g. CISCE-VER-2025-8941"
                  className="w-full text-xs font-semibold p-2.5 bg-slate-50 border border-slate-300 rounded uppercase font-mono tracking-wider focus:border-[#0b2545] focus:outline-hidden"
                  required
                />
                <button
                  type="submit"
                  className="w-full bg-[#0b2545] hover:bg-blue-900 text-white font-bold text-xs py-2.5 rounded uppercase tracking-wider transition-colors"
                >
                  Check Real-Time Status
                </button>
              </form>

              {trackedStatus && (
                <div className="p-4 bg-blue-50/60 border border-blue-200 rounded-lg space-y-2 text-xs mt-4">
                  <div className="flex justify-between border-b border-blue-200 pb-1">
                    <span className="text-slate-500">Application ID:</span>
                    <span className="font-bold text-[#0b2545] font-mono">{trackedStatus.ref}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Service:</span>
                    <span className="font-semibold text-slate-800">{trackedStatus.service}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Status:</span>
                    <span className="font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded text-[10px]">
                      {trackedStatus.status}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Date Received:</span>
                    <span className="text-slate-700">{trackedStatus.dateSubmitted}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Expected Delivery:</span>
                    <span className="text-slate-700 font-bold">{trackedStatus.expectedCompletion}</span>
                  </div>
                  <p className="text-[10px] text-slate-500 pt-1 border-t border-blue-100">
                    Handled by: {trackedStatus.verificationOfficer}
                  </p>
                </div>
              )}
            </div>

            <div className="bg-amber-50 p-6 rounded-xl border border-amber-200 space-y-3 text-xs text-amber-950">
              <h4 className="font-bold text-sm uppercase flex items-center gap-1.5">
                <AlertCircle className="w-4 h-4 text-amber-600" />
                Important Notice on Legal Validity
              </h4>
              <p className="leading-relaxed">
                As per the Information Technology Act 2000, documents downloaded via DigiLocker and verified on this portal carry equal legal weight to physical certificates. For overseas apostille or embassy attestations, physical verification stamps can be dispatched via speed post.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
