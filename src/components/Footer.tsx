import React from 'react';
import {
  Building2,
  ExternalLink,
  FileText,
  Mail,
  MapPin,
  Phone,
  Shield,
  CheckCircle2,
  Award
} from 'lucide-react';
import { PageId } from '../types';

interface FooterProps {
  onNavigate: (page: PageId) => void;
  onOpenVueModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenVueModal }) => {
  return (
    <footer className="w-full bg-[#07172c] text-slate-300 border-t-4 border-amber-500">
      {/* Top Banner inside Footer */}
      <div className="bg-[#0b2545] border-b border-blue-900/60 py-6 px-4 md:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-amber-500/20 border border-amber-400 flex items-center justify-center text-amber-400 flex-shrink-0">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <p className="text-white font-bold text-sm">Recognized National Board of School Education</p>
              <p className="text-xs text-slate-400">Serving Indian and Overseas education with highest pedagogical standards since 1958.</p>
            </div>
          </div>
          <div className="flex items-center gap-3 flex-wrap">
            <button
              onClick={() => onNavigate('results')}
              className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs px-4 py-2 rounded shadow-xs transition-colors uppercase tracking-wider"
            >
              Verify Marks / Results
            </button>
            <button
              onClick={() => onNavigate('services')}
              className="border border-slate-400 hover:border-white text-white font-medium text-xs px-4 py-2 rounded transition-colors"
            >
              Online Verification Portal
            </button>
            <button
              onClick={onOpenVueModal}
              className="bg-emerald-600/90 hover:bg-emerald-500 text-white font-semibold text-xs px-3 py-2 rounded transition-colors flex items-center gap-1.5"
            >
              Export Vue.js 3 SFC
            </button>
          </div>
        </div>
      </div>

      {/* Main Footer Links & Offices */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Col 1: About Council */}
          <div className="space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-amber-400/20 border border-amber-400 flex items-center justify-center text-amber-300">
                <Shield className="w-4 h-4" />
              </div>
              <span className="text-white font-bold text-base tracking-wide font-serif">CISCE</span>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              The Council for the Indian School Certificate Examinations (CISCE) is committed to serving the nation's children through high-quality educational endeavours, empowering them to contribute towards a humane, just, and pluralistic society.
            </p>
            <div className="text-xs space-y-1 text-slate-400">
              <p>• Recognized by Delhi School Education Act 1973</p>
              <p>• Member, Association of Indian Universities (AIU)</p>
              <p>• Member, Council of Boards of School Education in India (COBSE)</p>
            </div>
          </div>

          {/* Col 2: Registered & Head Offices */}
          <div className="space-y-4">
            <h4 className="text-white font-bold text-sm tracking-wider uppercase border-b border-slate-700 pb-2 flex items-center gap-2">
              <Building2 className="w-4 h-4 text-amber-400" />
              Council Offices
            </h4>
            <div className="text-xs space-y-3">
              <div>
                <p className="font-semibold text-amber-300 flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-amber-400" /> Head Office:
                </p>
                <p className="text-slate-300 mt-0.5">
                  Plot No. 35-36, Sector 6, Pushp Vihar, Saket, New Delhi - 110017
                </p>
                <p className="text-slate-400 text-[11px] mt-0.5">Ph: (011) 29564831 / 33 / 37</p>
              </div>

              <div>
                <p className="font-semibold text-amber-300 flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-amber-400" /> Registered Office:
                </p>
                <p className="text-slate-300 mt-0.5">
                  Pragati House, 3rd Floor, 47-48, Nehru Place, New Delhi - 110019
                </p>
                <p className="text-slate-400 text-[11px] mt-0.5">Ph: (011) 26413820 / 26411706</p>
              </div>

              <div>
                <p className="font-semibold text-amber-300 flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-amber-400" /> General Inquiries:
                </p>
                <p className="text-slate-300 mt-0.5">council@cisce.org | helpdesk@cisce.org</p>
              </div>
            </div>
          </div>

          {/* Col 3: Examination & Academics */}
          <div className="space-y-4">
            <h4 className="text-white font-bold text-sm tracking-wider uppercase border-b border-slate-700 pb-2 flex items-center gap-2">
              <FileText className="w-4 h-4 text-amber-400" />
              Examinations &amp; Portals
            </h4>
            <ul className="text-xs space-y-2">
              <li>
                <button
                  onClick={() => onNavigate('examinations')}
                  className="hover:text-amber-300 text-left transition-colors flex items-center gap-1.5"
                >
                  <span className="text-amber-400">›</span> ICSE Class X Examinations
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('examinations')}
                  className="hover:text-amber-300 text-left transition-colors flex items-center gap-1.5"
                >
                  <span className="text-amber-400">›</span> ISC Class XII Examinations
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('examinations')}
                  className="hover:text-amber-300 text-left transition-colors flex items-center gap-1.5"
                >
                  <span className="text-amber-400">›</span> Specimen Question Papers &amp; Syllabuses
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('results')}
                  className="hover:text-amber-300 text-left transition-colors flex items-center gap-1.5"
                >
                  <span className="text-amber-400">›</span> ICSE / ISC Results &amp; Marks Verification
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('services')}
                  className="hover:text-amber-300 text-left transition-colors flex items-center gap-1.5"
                >
                  <span className="text-amber-400">›</span> Online Verification of Pass Certificates
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('schools')}
                  className="hover:text-amber-300 text-left transition-colors flex items-center gap-1.5"
                >
                  <span className="text-amber-400">›</span> Locate Affiliated Schools
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('circulars')}
                  className="hover:text-amber-300 text-left transition-colors flex items-center gap-1.5"
                >
                  <span className="text-amber-400">›</span> Circulars &amp; Letters to Schools
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Important Links & Compliance */}
          <div className="space-y-4">
            <h4 className="text-white font-bold text-sm tracking-wider uppercase border-b border-slate-700 pb-2 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-amber-400" />
              National Portals
            </h4>
            <ul className="text-xs space-y-2">
              <li>
                <a
                  href="https://www.digilocker.gov.in"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-amber-300 transition-colors flex items-center justify-between group"
                >
                  <span>DigiLocker (Govt. of India)</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-500 group-hover:text-amber-300" />
                </a>
              </li>
              <li>
                <a
                  href="https://nad.gov.in"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-amber-300 transition-colors flex items-center justify-between group"
                >
                  <span>National Academic Depository (NAD)</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-500 group-hover:text-amber-300" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.education.gov.in"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-amber-300 transition-colors flex items-center justify-between group"
                >
                  <span>Ministry of Education (India)</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-500 group-hover:text-amber-300" />
                </a>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('careers')}
                  className="hover:text-amber-300 text-left transition-colors flex items-center gap-1.5"
                >
                  <span className="text-amber-400">›</span> Careers &amp; Vacancies
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('contact')}
                  className="hover:text-amber-300 text-left transition-colors flex items-center gap-1.5"
                >
                  <span className="text-amber-400">›</span> Helpdesk &amp; Grievance Redressal
                </button>
              </li>
            </ul>

            <div className="pt-2">
              <p className="text-[11px] text-slate-400 leading-tight">
                CISCE Care Portal Helpline:
                <br />
                <span className="text-amber-300 font-bold">1800-203-2414</span> (9:00 AM to 6:00 PM)
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Legal & Copyright Bar */}
      <div className="bg-[#040f1f] text-slate-400 text-xs py-5 px-4 md:px-8 border-t border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3 text-center md:text-left">
          <div>
            <p>
              Copyright © 2025-2026 Council for the Indian School Certificate Examinations. All Rights Reserved.
            </p>
            <p className="text-[11px] text-slate-500 mt-0.5">
              Portal Replica of cisceboard.org &amp; cisce.org. Best viewed in modern desktop &amp; mobile browsers.
            </p>
          </div>
          <div className="flex items-center gap-4 text-[11px] flex-wrap justify-center">
            <button onClick={() => onNavigate('about')} className="hover:text-amber-300 transition-colors">
              Terms &amp; Conditions
            </button>
            <span>|</span>
            <button onClick={() => onNavigate('about')} className="hover:text-amber-300 transition-colors">
              Privacy Policy
            </button>
            <span>|</span>
            <button onClick={() => onNavigate('about')} className="hover:text-amber-300 transition-colors">
              Hyperlinking Policy
            </button>
            <span>|</span>
            <button onClick={() => onNavigate('contact')} className="hover:text-amber-300 transition-colors">
              Feedback
            </button>
            <span>|</span>
            <button onClick={onOpenVueModal} className="text-emerald-400 hover:underline font-semibold">
              Vue.js Code Export
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
