import React, { useState } from 'react';
import {
  Briefcase,
  Building,
  CheckCircle2,
  Clock,
  FileText,
  HelpCircle,
  MapPin,
  Send,
  Users,
  X
} from 'lucide-react';
import { CAREER_OPENINGS } from '../data/cisceData';
import { CareerOpening, PageId } from '../types';

interface CareersPageProps {
  onNavigate: (page: PageId) => void;
}

export const CareersPage: React.FC<CareersPageProps> = ({ onNavigate }) => {
  const [selectedJob, setSelectedJob] = useState<CareerOpening | null>(null);
  const [appliedJob, setAppliedJob] = useState<string | null>(null);
  const [candidateName, setCandidateName] = useState('');
  const [candidateEmail, setCandidateEmail] = useState('');
  const [candidateExp, setCandidateExp] = useState('10');

  const handleApply = (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedJob) {
      setAppliedJob(selectedJob.title);
      setSelectedJob(null);
    }
  };

  return (
    <div className="w-full bg-slate-50 min-h-screen py-8">
      {/* Banner */}
      <div className="bg-[#0b2545] text-white py-12 px-4 md:px-8 border-b-4 border-amber-500">
        <div className="max-w-7xl mx-auto space-y-3">
          <div className="flex items-center gap-2 text-amber-400 text-xs uppercase font-bold tracking-wider">
            <Briefcase className="w-4 h-4" />
            <span>Opportunities at Council</span>
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold font-serif tracking-tight">
            Careers &amp; Recruitment
          </h1>
          <p className="text-slate-300 text-xs sm:text-sm max-w-3xl leading-relaxed">
            Join the Council for the Indian School Certificate Examinations and contribute towards shaping high-standard national pedagogy and examination administration.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8 space-y-8">
        {appliedJob && (
          <div className="p-4 bg-emerald-100 border border-emerald-300 text-emerald-900 rounded-lg text-xs font-semibold flex items-center justify-between shadow-xs">
            <span>Your application for <strong>"{appliedJob}"</strong> has been successfully registered. CISCE HR will contact shortlisted candidates.</span>
            <button onClick={() => setAppliedJob(null)} className="text-emerald-700 font-bold hover:underline">
              Dismiss
            </button>
          </div>
        )}

        <div className="bg-white p-6 sm:p-8 rounded-xl border border-slate-200 shadow-xs space-y-3 text-xs sm:text-sm text-slate-700">
          <h2 className="text-lg font-bold text-[#0b2545] font-serif uppercase tracking-wide">
            Work Culture &amp; Professional Values
          </h2>
          <p className="leading-relaxed">
            CISCE offers a vibrant, meritocratic environment that values academic rigor, operational discipline, and technological innovation. Employees enjoy standard 7th Central Pay Commission scales, provident fund, medical allowances, and continuous capacity development opportunities.
          </p>
        </div>

        {/* Vacancies List */}
        <div className="space-y-4">
          <h3 className="text-base font-bold text-[#0b2545] uppercase tracking-wider">
            Current Openings (Session 2025)
          </h3>

          <div className="grid grid-cols-1 gap-6">
            {CAREER_OPENINGS.map((job) => (
              <div
                key={job.id}
                className="bg-white p-6 rounded-xl border border-slate-200 shadow-xs hover:border-blue-300 transition-all flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
              >
                <div className="space-y-2 flex-1">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="bg-blue-50 text-blue-900 border border-blue-200 text-[11px] font-bold px-2.5 py-0.5 rounded">
                      {job.department}
                    </span>
                    <span className="text-xs text-amber-700 font-semibold bg-amber-50 px-2 py-0.5 rounded">
                      {job.type}
                    </span>
                  </div>

                  <h4 className="text-base font-bold text-[#0b2545]">{job.title}</h4>

                  <div className="flex flex-wrap gap-4 text-xs text-slate-500">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-slate-400" />
                      {job.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-slate-400" />
                      Last Date: <strong>{job.lastDate}</strong>
                    </span>
                    <span className="flex items-center gap-1">
                      <Users className="w-3.5 h-3.5 text-slate-400" />
                      Vacancies: <strong>{job.vacancies}</strong>
                    </span>
                  </div>

                  <div className="text-xs text-slate-600 pt-1 space-y-1">
                    <p><strong>Qualification:</strong> {job.qualification}</p>
                    <p><strong>Remuneration / Pay:</strong> {job.payScale}</p>
                  </div>
                </div>

                <div className="flex-shrink-0 self-end md:self-center">
                  <button
                    onClick={() => setSelectedJob(job)}
                    className="bg-[#0b2545] hover:bg-blue-900 text-white font-bold text-xs px-5 py-2.5 rounded uppercase tracking-wider transition-colors shadow-xs"
                  >
                    Apply Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Application Modal */}
        {selectedJob && (
          <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl max-w-lg w-full p-6 sm:p-8 space-y-5 shadow-2xl relative">
              <button
                onClick={() => setSelectedJob(null)}
                className="absolute top-4 right-4 p-1 rounded-full hover:bg-slate-100 text-slate-500"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="border-b border-slate-200 pb-3">
                <span className="text-[11px] font-bold text-blue-900 bg-blue-50 px-2 py-0.5 rounded border border-blue-200">
                  {selectedJob.department}
                </span>
                <h3 className="text-lg font-bold text-[#0b2545] font-serif mt-1.5">
                  Application for {selectedJob.title}
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  Pay Scale: {selectedJob.payScale}
                </p>
              </div>

              <form onSubmit={handleApply} className="space-y-4 text-xs">
                <div>
                  <label className="block font-bold text-slate-700 mb-1 uppercase">Full Name</label>
                  <input
                    type="text"
                    value={candidateName}
                    onChange={(e) => setCandidateName(e.target.value)}
                    placeholder="e.g. Dr. Sunita Banerjee"
                    className="w-full p-2.5 bg-slate-50 border border-slate-300 rounded font-semibold focus:border-[#0b2545] focus:outline-hidden"
                    required
                  />
                </div>

                <div>
                  <label className="block font-bold text-slate-700 mb-1 uppercase">Email Address</label>
                  <input
                    type="email"
                    value={candidateEmail}
                    onChange={(e) => setCandidateEmail(e.target.value)}
                    placeholder="sunita.banerjee@email.com"
                    className="w-full p-2.5 bg-slate-50 border border-slate-300 rounded font-semibold focus:border-[#0b2545] focus:outline-hidden"
                    required
                  />
                </div>

                <div>
                  <label className="block font-bold text-slate-700 mb-1 uppercase">Years of Relevant Experience</label>
                  <input
                    type="number"
                    value={candidateExp}
                    onChange={(e) => setCandidateExp(e.target.value)}
                    className="w-full p-2.5 bg-slate-50 border border-slate-300 rounded font-semibold focus:border-[#0b2545] focus:outline-hidden"
                    required
                  />
                </div>

                <div>
                  <label className="block font-bold text-slate-700 mb-1 uppercase">Resume / Curriculum Vitae (PDF)</label>
                  <input
                    type="file"
                    className="w-full text-slate-600 file:mr-3 file:py-1.5 file:px-3 file:rounded file:border-0 file:text-xs file:font-semibold file:bg-blue-900 file:text-white hover:file:bg-blue-800"
                    required
                  />
                </div>

                <div className="flex items-center justify-end gap-3 pt-3 border-t border-slate-200">
                  <button
                    type="button"
                    onClick={() => setSelectedJob(null)}
                    className="px-4 py-2 border border-slate-300 text-slate-700 font-bold rounded uppercase"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="bg-[#0b2545] hover:bg-blue-900 text-white font-bold px-5 py-2 rounded uppercase tracking-wider"
                  >
                    Submit Application
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
