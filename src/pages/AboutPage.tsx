import React, { useState } from 'react';
import {
  Award,
  BookOpen,
  Calendar,
  CheckCircle,
  Clock,
  Compass,
  FileCheck,
  Globe2,
  GraduationCap,
  HeartHandshake,
  Landmark,
  Shield,
  Sparkles,
  Users
} from 'lucide-react';
import { LEADERSHIP } from '../data/cisceData';
import { PageId } from '../types';

interface AboutPageProps {
  onNavigate: (page: PageId) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  const [activeSubTab, setActiveSubTab] = useState<'legacy' | 'mission' | 'leadership' | 'committee'>('legacy');

  const milestones = [
    {
      year: '1958',
      title: 'Foundation of the Council',
      description: 'Established following the All India Certificate Examinations Conference under the chairmanship of Maulana Abul Kalam Azad, replacing the Cambridge Syndicate Overseas Certificate with an Indian National Examination.'
    },
    {
      year: '1967',
      title: 'Registration as a National Society',
      description: 'The Council was formally registered as an autonomous society under the Societies Registration Act XXI of 1860.'
    },
    {
      year: '1973',
      title: 'Statutory Recognition',
      description: 'Recognised as a body conducting public examinations under the Delhi School Education Act 1973, Chapter 1, Section 2(s).'
    },
    {
      year: '1990',
      title: 'Introduction of CVE Examination',
      description: 'Launched Certificate of Vocational Education (CVE) to bridge school education with applied industrial and vocational competencies.'
    },
    {
      year: '2020-2025',
      title: 'NEP 2020 Alignment & Digital Governance',
      description: 'Transformation of assessment architecture to competency-based paradigms, introduction of Holistic Progress Cards, and full digital integration with DigiLocker.'
    }
  ];

  return (
    <div className="w-full bg-slate-50 min-h-screen py-8">
      {/* Page Header Banner */}
      <div className="bg-[#0b2545] text-white py-12 px-4 md:px-8 border-b-4 border-amber-500">
        <div className="max-w-7xl mx-auto space-y-3">
          <div className="flex items-center gap-2 text-amber-400 text-xs uppercase font-bold tracking-wider">
            <Landmark className="w-4 h-4" />
            <span>Institutional Profile</span>
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold font-serif tracking-tight">
            About CISCE
          </h1>
          <p className="text-slate-300 text-xs sm:text-sm max-w-3xl leading-relaxed">
            Council for the Indian School Certificate Examinations — an autonomous, non-governmental national board committed to excellence, integrity, and child-centric education.
          </p>
        </div>
      </div>

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8">
        {/* Navigation Sub-tabs */}
        <div className="flex flex-wrap gap-2 border-b border-slate-200 pb-3 mb-8">
          <button
            onClick={() => setActiveSubTab('legacy')}
            className={`px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-colors ${
              activeSubTab === 'legacy'
                ? 'bg-[#0b2545] text-white shadow-xs'
                : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            CISCE Legacy &amp; History
          </button>
          <button
            onClick={() => setActiveSubTab('mission')}
            className={`px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-colors ${
              activeSubTab === 'mission'
                ? 'bg-[#0b2545] text-white shadow-xs'
                : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            Mission &amp; Ethos
          </button>
          <button
            onClick={() => setActiveSubTab('leadership')}
            className={`px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-colors ${
              activeSubTab === 'leadership'
                ? 'bg-[#0b2545] text-white shadow-xs'
                : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            Chairman &amp; Secretary Messages
          </button>
          <button
            onClick={() => setActiveSubTab('committee')}
            className={`px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-colors ${
              activeSubTab === 'committee'
                ? 'bg-[#0b2545] text-white shadow-xs'
                : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            Governance &amp; Executive Body
          </button>
        </div>

        {/* Tab 1: Legacy & History */}
        {activeSubTab === 'legacy' && (
          <div className="space-y-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-8 bg-white p-6 sm:p-8 rounded-xl border border-slate-200 shadow-xs space-y-4 text-slate-700 text-sm leading-relaxed">
                <h2 className="text-xl font-bold text-[#0b2545] font-serif uppercase tracking-wide">
                  Genesis of the Council
                </h2>
                <p>
                  In 1952, an All India Certificate Examinations Conference was held under the Chairmanship of <strong>Maulana Abul Kalam Azad</strong>, Minister for Education. The main purpose of the Conference was to consider the replacement of the overseas Cambridge School Certificate Examination by an All India Examination.
                </p>
                <p>
                  In October 1956, at the meeting of the Inter-State Board for Anglo-Indian Education, a proposal was adopted for the setting up of an Indian Council to administer the University of Cambridge Local Examinations Syndicate's Examination in India.
                </p>
                <p>
                  The inaugural meeting of the Council was held on <strong>3rd November, 1958</strong>. In December 1967, the Council was registered as a Society under the Societies Registration Act, 1860. The Council was listed in the Delhi School Education Act 1973, as a body conducting "public" examinations.
                </p>
                <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r text-xs text-amber-950">
                  <p className="font-bold">Statutory Authority &amp; Equivalence:</p>
                  <p className="mt-1">
                    The Indian Certificate of Secondary Education (ICSE - Class X) and Indian School Certificate (ISC - Class XII) examinations conducted by the Council are recognized by the Association of Indian Universities (AIU), the Department of Education, Government of India, and universities worldwide as equivalent to senior secondary boards.
                  </p>
                </div>
              </div>

              {/* Quick Facts Card */}
              <div className="lg:col-span-4 bg-white p-6 rounded-xl border border-slate-200 shadow-xs space-y-4">
                <h3 className="font-bold text-[#0b2545] text-sm uppercase tracking-wider border-b border-slate-100 pb-2">
                  Institutional Summary
                </h3>
                <div className="text-xs space-y-3">
                  <div>
                    <span className="text-slate-400 block">Established:</span>
                    <span className="font-bold text-slate-800">3rd November 1958</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block">Legal Status:</span>
                    <span className="font-bold text-slate-800">Registered Society (Act XXI of 1860)</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block">Motto:</span>
                    <span className="font-bold text-amber-700 italic">"Viriliter Agite" (Quit Ye Like Men, Be Strong)</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block">Examinations Conducted:</span>
                    <span className="font-bold text-slate-800">ICSE (Class X), ISC (Class XII), CVE (Vocational)</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block">Affiliated Institutions:</span>
                    <span className="font-bold text-slate-800">2,800+ across all Indian states &amp; overseas</span>
                  </div>
                </div>

                <button
                  onClick={() => onNavigate('examinations')}
                  className="w-full bg-[#0b2545] hover:bg-blue-900 text-white text-xs font-bold py-2 rounded uppercase tracking-wider transition-colors"
                >
                  Explore Examinations
                </button>
              </div>
            </div>

            {/* Historical Milestones Timeline */}
            <div className="bg-white p-6 sm:p-8 rounded-xl border border-slate-200 shadow-xs">
              <h3 className="text-lg font-bold text-[#0b2545] font-serif uppercase tracking-wide mb-6">
                Milestones in CISCE History
              </h3>
              <div className="relative border-l-2 border-amber-400 ml-4 pl-6 space-y-6">
                {milestones.map((m, idx) => (
                  <div key={idx} className="relative group">
                    <div className="absolute -left-[31px] top-0 w-4 h-4 rounded-full bg-[#0b2545] border-2 border-amber-400" />
                    <span className="text-xs font-extrabold text-amber-600 tracking-wider bg-amber-50 px-2 py-0.5 rounded">
                      {m.year}
                    </span>
                    <h4 className="text-sm font-bold text-[#0b2545] mt-1">{m.title}</h4>
                    <p className="text-xs text-slate-600 mt-1 leading-relaxed">{m.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Mission & Ethos */}
        {activeSubTab === 'mission' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-xs space-y-3">
              <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-950 flex items-center justify-center">
                <Compass className="w-5 h-5 text-amber-500" />
              </div>
              <h3 className="font-bold text-base text-[#0b2545] font-serif uppercase">The Mission</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                The Council is committed to serving the nation’s children, through high-quality educational endeavours, empowering them to contribute towards a humane, just, and pluralistic society, promoting introspective living, by creating exciting learning opportunities.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-xs space-y-3">
              <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-950 flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-amber-500" />
              </div>
              <h3 className="font-bold text-base text-[#0b2545] font-serif uppercase">The Ethos</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Trust, fairness in assessment, avoidance of rote learning, fostering critical thinking, embracing diversity, and nurturing experiential exploration rather than passive instruction.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-xs space-y-3">
              <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-950 flex items-center justify-center">
                <GraduationCap className="w-5 h-5 text-amber-500" />
              </div>
              <h3 className="font-bold text-base text-[#0b2545] font-serif uppercase">Global Outlook</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Empowering students with comprehensive language command, mathematical logic, and scientific temperament recognized across Harvard, Oxford, Cambridge, IITs, and prestigious global universities.
              </p>
            </div>
          </div>
        )}

        {/* Tab 3: Leadership Messages */}
        {activeSubTab === 'leadership' && (
          <div className="space-y-8">
            {LEADERSHIP.map((leader, idx) => (
              <div key={idx} className="bg-white p-6 sm:p-8 rounded-xl border border-slate-200 shadow-xs flex flex-col md:flex-row gap-6 items-start">
                <div className="w-32 h-32 rounded-xl overflow-hidden border-2 border-amber-400 flex-shrink-0 shadow-sm mx-auto md:mx-0">
                  <img src={leader.image} alt={leader.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </div>
                <div className="space-y-3 flex-1 text-slate-700">
                  <div>
                    <h3 className="text-xl font-bold text-[#0b2545] font-serif">{leader.name}</h3>
                    <p className="text-xs font-bold text-amber-700 uppercase tracking-wide">{leader.title}</p>
                  </div>
                  <blockquote className="border-l-4 border-amber-400 pl-4 py-1 italic text-xs sm:text-sm text-slate-600">
                    "{leader.quote}"
                  </blockquote>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Under dynamic guidance, the Council continues to update subject curriculum in accordance with changing global demands and National Education Policy recommendations. From early foundation years to senior secondary evaluation, our focus is on building responsible, empathetic citizens with sharp analytical acumen.
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tab 4: Governance */}
        {activeSubTab === 'committee' && (
          <div className="bg-white p-6 sm:p-8 rounded-xl border border-slate-200 shadow-xs space-y-6">
            <h3 className="text-lg font-bold text-[#0b2545] font-serif uppercase tracking-wide border-b border-slate-100 pb-3">
              Governance Structure
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              The Council is an autonomous non-governmental body administered by representatives from various premier educational authorities across the Union of India, including:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div className="p-3 bg-slate-50 rounded border border-slate-200">
                <p className="font-bold text-slate-900">• Inter-State Board for Anglo-Indian Education</p>
                <p className="text-slate-500 mt-0.5">Foundational nominating authority and advisory body.</p>
              </div>
              <div className="p-3 bg-slate-50 rounded border border-slate-200">
                <p className="font-bold text-slate-900">• Association of Indian Universities (AIU)</p>
                <p className="text-slate-500 mt-0.5">Providing national university equivalence and moderation.</p>
              </div>
              <div className="p-3 bg-slate-50 rounded border border-slate-200">
                <p className="font-bold text-slate-900">• Association of Schools for the Indian School Certificate (ASISC)</p>
                <p className="text-slate-500 mt-0.5">Representing affiliated school principals and teachers.</p>
              </div>
              <div className="p-3 bg-slate-50 rounded border border-slate-200">
                <p className="font-bold text-slate-900">• Eminent Educationists &amp; State Government Nominees</p>
                <p className="text-slate-500 mt-0.5">State education directorate representation.</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
