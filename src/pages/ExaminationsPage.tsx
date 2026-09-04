import React, { useState } from 'react';
import {
  AlertCircle,
  Award,
  BookOpen,
  Calendar,
  CheckCircle,
  Clock,
  Download,
  FileCheck,
  FileSpreadsheet,
  FileText,
  Filter,
  GraduationCap,
  Layers,
  Search
} from 'lucide-react';
import { SPECIMEN_PAPERS, TIMETABLE_SUMMARY } from '../data/cisceData';
import { PageId, SpecimenPaper } from '../types';

interface ExaminationsPageProps {
  onNavigate: (page: PageId) => void;
}

export const ExaminationsPage: React.FC<ExaminationsPageProps> = ({ onNavigate }) => {
  const [activeTab, setActiveTab] = useState<'icse' | 'isc' | 'specimen' | 'timetable' | 'cve'>('icse');
  const [specimenClass, setSpecimenClass] = useState<'ALL' | 'ICSE' | 'ISC'>('ALL');
  const [searchQuery, setSearchQuery] = useState('');
  const [downloadNotification, setDownloadNotification] = useState<string | null>(null);

  const filteredPapers = SPECIMEN_PAPERS.filter((paper) => {
    const matchClass = specimenClass === 'ALL' || paper.exam === specimenClass;
    const matchSearch = paper.subject.toLowerCase().includes(searchQuery.toLowerCase());
    return matchClass && matchSearch;
  });

  const handleDownload = (paper: SpecimenPaper) => {
    setDownloadNotification(`Downloading ${paper.exam} ${paper.year} - ${paper.subject}...`);
    setTimeout(() => {
      setDownloadNotification(null);
    }, 3500);
  };

  return (
    <div className="w-full bg-slate-50 min-h-screen py-8">
      {/* Banner */}
      <div className="bg-[#0b2545] text-white py-12 px-4 md:px-8 border-b-4 border-amber-500">
        <div className="max-w-7xl mx-auto space-y-3">
          <div className="flex items-center gap-2 text-amber-400 text-xs uppercase font-bold tracking-wider">
            <BookOpen className="w-4 h-4" />
            <span>Academic Portal</span>
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold font-serif tracking-tight">
            Examinations &amp; Syllabuses
          </h1>
          <p className="text-slate-300 text-xs sm:text-sm max-w-3xl leading-relaxed">
            Curriculum frameworks, regulations, specimen question papers, and official timetables for ICSE (Class X), ISC (Class XII), and CVE.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8">
        {downloadNotification && (
          <div className="mb-6 p-4 bg-emerald-100 border border-emerald-300 text-emerald-900 rounded-lg text-xs font-semibold flex items-center justify-between shadow-xs">
            <span>{downloadNotification}</span>
            <span className="text-[11px] text-emerald-700 font-bold">PDF Ready</span>
          </div>
        )}

        {/* Tab Navigation */}
        <div className="flex flex-wrap gap-2 border-b border-slate-200 pb-3 mb-8">
          <button
            onClick={() => setActiveTab('icse')}
            className={`px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-colors ${
              activeTab === 'icse'
                ? 'bg-[#0b2545] text-white shadow-xs'
                : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            ICSE (Class X)
          </button>
          <button
            onClick={() => setActiveTab('isc')}
            className={`px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-colors ${
              activeTab === 'isc'
                ? 'bg-[#0b2545] text-white shadow-xs'
                : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            ISC (Class XII)
          </button>
          <button
            onClick={() => setActiveTab('specimen')}
            className={`px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-colors ${
              activeTab === 'specimen'
                ? 'bg-[#0b2545] text-white shadow-xs'
                : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            Specimen Question Papers
          </button>
          <button
            onClick={() => setActiveTab('timetable')}
            className={`px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-colors ${
              activeTab === 'timetable'
                ? 'bg-[#0b2545] text-white shadow-xs'
                : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            Examination Timetable 2025
          </button>
          <button
            onClick={() => setActiveTab('cve')}
            className={`px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-colors ${
              activeTab === 'cve'
                ? 'bg-[#0b2545] text-white shadow-xs'
                : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            CVE (Vocational)
          </button>
        </div>

        {/* Tab 1: ICSE Class X */}
        {activeTab === 'icse' && (
          <div className="space-y-8">
            <div className="bg-white p-6 sm:p-8 rounded-xl border border-slate-200 shadow-xs space-y-6">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-100 pb-4">
                <div>
                  <h2 className="text-xl font-bold text-[#0b2545] font-serif uppercase tracking-wide">
                    Indian Certificate of Secondary Education (ICSE - Class X)
                  </h2>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Designed to provide an examination in a course of general education, in accordance with the recommendations of the National Education Policy.
                  </p>
                </div>
                <span className="bg-blue-50 text-blue-900 border border-blue-200 text-xs font-bold px-3 py-1 rounded-full uppercase">
                  Class 10
                </span>
              </div>

              {/* ICSE Curriculum Structure Groups */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-slate-50 p-5 rounded-lg border border-slate-200 space-y-2">
                  <h3 className="font-bold text-[#0b2545] text-sm uppercase">Group I (Compulsory)</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    All subjects are compulsory. External Examination with 20% internal assessment:
                  </p>
                  <ul className="text-xs space-y-1 text-slate-700 font-medium">
                    <li>• English (Language &amp; Literature)</li>
                    <li>• Second Language (Indian Language)</li>
                    <li>• History, Civics &amp; Geography</li>
                  </ul>
                </div>

                <div className="bg-slate-50 p-5 rounded-lg border border-slate-200 space-y-2">
                  <h3 className="font-bold text-[#0b2545] text-sm uppercase">Group II (Electives)</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Candidates select minimum 2 and maximum 3 subjects:
                  </p>
                  <ul className="text-xs space-y-1 text-slate-700 font-medium">
                    <li>• Mathematics</li>
                    <li>• Science (Physics, Chemistry, Biology)</li>
                    <li>• Economics / Commercial Studies</li>
                    <li>• Modern Foreign Language / Environmental</li>
                  </ul>
                </div>

                <div className="bg-slate-50 p-5 rounded-lg border border-slate-200 space-y-2">
                  <h3 className="font-bold text-[#0b2545] text-sm uppercase">Group III (Skill/Applied)</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Candidates select 1 subject with 50% internal and 50% external assessment:
                  </p>
                  <ul className="text-xs space-y-1 text-slate-700 font-medium">
                    <li>• Computer Applications</li>
                    <li>• Economic Applications / Commercial</li>
                    <li>• Art / Performing Arts / Physical Education</li>
                    <li>• Cookery / Fashion Designing / Yoga</li>
                  </ul>
                </div>
              </div>

              <div className="bg-blue-50/60 p-4 rounded-lg border border-blue-200 text-xs text-slate-700 space-y-2">
                <h4 className="font-bold text-blue-950 flex items-center gap-1.5">
                  <CheckCircle className="w-4 h-4 text-emerald-600" />
                  Conditions for Award of Pass Certificate
                </h4>
                <p>
                  Candidates must enter for six or seven subjects and achieve a minimum pass mark of <strong>33%</strong> in at least five subjects including English, together with a pass grade in Socially Useful Productive Work (SUPW) and Community Service.
                </p>
              </div>

              <div className="flex items-center gap-3 pt-2">
                <button
                  onClick={() => setActiveTab('specimen')}
                  className="bg-[#0b2545] hover:bg-blue-900 text-white font-bold text-xs px-4 py-2.5 rounded uppercase tracking-wider transition-colors flex items-center gap-1.5"
                >
                  <Download className="w-4 h-4 text-amber-400" />
                  Download ICSE Specimen Papers
                </button>
                <button
                  onClick={() => onNavigate('results')}
                  className="border border-[#0b2545] text-[#0b2545] hover:bg-slate-100 font-bold text-xs px-4 py-2.5 rounded uppercase tracking-wider transition-colors"
                >
                  Check ICSE Results
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: ISC Class XII */}
        {activeTab === 'isc' && (
          <div className="space-y-8">
            <div className="bg-white p-6 sm:p-8 rounded-xl border border-slate-200 shadow-xs space-y-6">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-100 pb-4">
                <div>
                  <h2 className="text-xl font-bold text-[#0b2545] font-serif uppercase tracking-wide">
                    Indian School Certificate (ISC - Class XII)
                  </h2>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Recognised by the Association of Indian Universities (AIU) for entry into university degree courses in India and globally.
                  </p>
                </div>
                <span className="bg-blue-50 text-blue-900 border border-blue-200 text-xs font-bold px-3 py-1 rounded-full uppercase">
                  Class 12
                </span>
              </div>

              {/* Streams */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-slate-50 p-5 rounded-lg border border-slate-200 space-y-2">
                  <h3 className="font-bold text-[#0b2545] text-sm uppercase">Science Stream</h3>
                  <p className="text-xs text-slate-600">
                    High analytical and laboratory assessment standards:
                  </p>
                  <ul className="text-xs space-y-1 text-slate-700 font-medium">
                    <li>• English (Compulsory)</li>
                    <li>• Physics (Theory + Practical)</li>
                    <li>• Chemistry (Theory + Practical)</li>
                    <li>• Mathematics / Biology</li>
                    <li>• Computer Science / Biotechnology</li>
                  </ul>
                </div>

                <div className="bg-slate-50 p-5 rounded-lg border border-slate-200 space-y-2">
                  <h3 className="font-bold text-[#0b2545] text-sm uppercase">Commerce Stream</h3>
                  <p className="text-xs text-slate-600">
                    Solid grounding in finance, trade, and economic models:
                  </p>
                  <ul className="text-xs space-y-1 text-slate-700 font-medium">
                    <li>• English (Compulsory)</li>
                    <li>• Accountancy</li>
                    <li>• Commerce &amp; Business Studies</li>
                    <li>• Economics</li>
                    <li>• Mathematics / Business Mathematics</li>
                  </ul>
                </div>

                <div className="bg-slate-50 p-5 rounded-lg border border-slate-200 space-y-2">
                  <h3 className="font-bold text-[#0b2545] text-sm uppercase">Humanities Stream</h3>
                  <p className="text-xs text-slate-600">
                    Wide breadth of inquiry into society and culture:
                  </p>
                  <ul className="text-xs space-y-1 text-slate-700 font-medium">
                    <li>• English (Compulsory)</li>
                    <li>• History / Political Science</li>
                    <li>• Sociology / Psychology</li>
                    <li>• Geography / Economics</li>
                    <li>• Mass Media / Elective English</li>
                  </ul>
                </div>
              </div>

              <div className="bg-amber-50 p-4 rounded-lg border border-amber-200 text-xs text-amber-950 space-y-1">
                <p className="font-bold">Pass Standard:</p>
                <p>
                  Candidates must attain pass marks of at least <strong>35%</strong> in English and three other subjects along with a satisfactory grade in Socially Useful Productive Work (SUPW).
                </p>
              </div>

              <div className="flex items-center gap-3 pt-2">
                <button
                  onClick={() => setActiveTab('specimen')}
                  className="bg-[#0b2545] hover:bg-blue-900 text-white font-bold text-xs px-4 py-2.5 rounded uppercase tracking-wider transition-colors flex items-center gap-1.5"
                >
                  <Download className="w-4 h-4 text-amber-400" />
                  Download ISC Specimen Papers
                </button>
                <button
                  onClick={() => onNavigate('results')}
                  className="border border-[#0b2545] text-[#0b2545] hover:bg-slate-100 font-bold text-xs px-4 py-2.5 rounded uppercase tracking-wider transition-colors"
                >
                  Check ISC Results
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Tab 3: Specimen Papers */}
        {activeTab === 'specimen' && (
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-xs space-y-4">
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                <div>
                  <h2 className="text-lg font-bold text-[#0b2545] font-serif uppercase tracking-wide">
                    Specimen Question Papers (Year 2025-2026)
                  </h2>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Model papers reflecting pattern of question papers, marking scheme, and competency guidelines.
                  </p>
                </div>

                {/* Filters */}
                <div className="flex flex-wrap items-center gap-2">
                  <div className="flex items-center bg-slate-100 p-1 rounded-md text-xs font-semibold">
                    <button
                      onClick={() => setSpecimenClass('ALL')}
                      className={`px-3 py-1 rounded transition-colors ${
                        specimenClass === 'ALL' ? 'bg-[#0b2545] text-white' : 'text-slate-700'
                      }`}
                    >
                      All
                    </button>
                    <button
                      onClick={() => setSpecimenClass('ICSE')}
                      className={`px-3 py-1 rounded transition-colors ${
                        specimenClass === 'ICSE' ? 'bg-[#0b2545] text-white' : 'text-slate-700'
                      }`}
                    >
                      ICSE (Class X)
                    </button>
                    <button
                      onClick={() => setSpecimenClass('ISC')}
                      className={`px-3 py-1 rounded transition-colors ${
                        specimenClass === 'ISC' ? 'bg-[#0b2545] text-white' : 'text-slate-700'
                      }`}
                    >
                      ISC (Class XII)
                    </button>
                  </div>

                  <div className="relative">
                    <Search className="w-3.5 h-3.5 absolute left-2.5 top-2.5 text-slate-400" />
                    <input
                      type="text"
                      placeholder="Search subject..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="text-xs pl-8 pr-3 py-1.5 border border-slate-300 rounded-md focus:outline-hidden focus:border-[#0b2545]"
                    />
                  </div>
                </div>
              </div>

              {/* Table of Papers */}
              <div className="overflow-x-auto border border-slate-200 rounded-lg">
                <table className="w-full text-xs text-left">
                  <thead className="bg-[#0b2545] text-white uppercase text-[11px] font-semibold">
                    <tr>
                      <th className="py-3 px-4">Examination</th>
                      <th className="py-3 px-4">Subject</th>
                      <th className="py-3 px-4">Academic Year</th>
                      <th className="py-3 px-4">File Size</th>
                      <th className="py-3 px-4 text-right">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {filteredPapers.map((paper) => (
                      <tr key={paper.id} className="hover:bg-slate-50 transition-colors">
                        <td className="py-3 px-4 font-bold text-[#0b2545]">
                          <span className="bg-blue-50 text-blue-900 border border-blue-200 px-2 py-0.5 rounded">
                            {paper.exam}
                          </span>
                        </td>
                        <td className="py-3 px-4 font-semibold text-slate-800">
                          {paper.subject}
                        </td>
                        <td className="py-3 px-4 text-slate-500">{paper.year}</td>
                        <td className="py-3 px-4 text-slate-400">{paper.size}</td>
                        <td className="py-3 px-4 text-right">
                          <button
                            onClick={() => handleDownload(paper)}
                            className="bg-[#0b2545] hover:bg-blue-900 text-white font-bold px-3 py-1.5 rounded transition-colors inline-flex items-center gap-1 text-[11px]"
                          >
                            <Download className="w-3 h-3 text-amber-300" />
                            <span>Download PDF</span>
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* Tab 4: Timetable */}
        {activeTab === 'timetable' && (
          <div className="bg-white p-6 sm:p-8 rounded-xl border border-slate-200 shadow-xs space-y-6">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-100 pb-4">
              <div>
                <h2 className="text-xl font-bold text-[#0b2545] font-serif uppercase tracking-wide">
                  Official Timetables (Session 2025-2026)
                </h2>
                <p className="text-xs text-slate-500 mt-0.5">
                  Confirmed examination dates for ICSE and ISC theory examinations.
                </p>
              </div>
              <button
                onClick={() => setDownloadNotification('Downloading Complete Timetable PDF...')}
                className="bg-[#0b2545] hover:bg-blue-900 text-white font-bold text-xs px-3.5 py-2 rounded uppercase flex items-center gap-1.5 transition-colors"
              >
                <Download className="w-3.5 h-3.5 text-amber-400" />
                Download Datesheet PDF
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* ICSE Schedule Box */}
              <div className="p-5 bg-slate-50 rounded-xl border border-slate-200 space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="font-bold text-[#0b2545] text-sm uppercase">ICSE (Class X) Schedule</h3>
                  <span className="text-xs font-bold text-amber-700 bg-amber-100 px-2 py-0.5 rounded">11:00 AM Shift</span>
                </div>
                <div className="text-xs space-y-2 text-slate-700">
                  <div className="p-2 bg-white rounded border border-slate-200 flex justify-between">
                    <span>English Language (Paper 1)</span>
                    <span className="font-bold text-[#0b2545]">18 Feb 2025</span>
                  </div>
                  <div className="p-2 bg-white rounded border border-slate-200 flex justify-between">
                    <span>Literature in English (Paper 2)</span>
                    <span className="font-bold text-[#0b2545]">21 Feb 2025</span>
                  </div>
                  <div className="p-2 bg-white rounded border border-slate-200 flex justify-between">
                    <span>History &amp; Civics (H.C.G. Paper 1)</span>
                    <span className="font-bold text-[#0b2545]">25 Feb 2025</span>
                  </div>
                  <div className="p-2 bg-white rounded border border-slate-200 flex justify-between">
                    <span>Geography (H.C.G. Paper 2)</span>
                    <span className="font-bold text-[#0b2545]">28 Feb 2025</span>
                  </div>
                  <div className="p-2 bg-white rounded border border-slate-200 flex justify-between">
                    <span>Mathematics</span>
                    <span className="font-bold text-[#0b2545]">05 Mar 2025</span>
                  </div>
                  <div className="p-2 bg-white rounded border border-slate-200 flex justify-between">
                    <span>Physics (Science Paper 1)</span>
                    <span className="font-bold text-[#0b2545]">10 Mar 2025</span>
                  </div>
                  <div className="p-2 bg-white rounded border border-slate-200 flex justify-between">
                    <span>Chemistry (Science Paper 2)</span>
                    <span className="font-bold text-[#0b2545]">14 Mar 2025</span>
                  </div>
                  <div className="p-2 bg-white rounded border border-slate-200 flex justify-between">
                    <span>Biology (Science Paper 3)</span>
                    <span className="font-bold text-[#0b2545]">19 Mar 2025</span>
                  </div>
                  <div className="p-2 bg-white rounded border border-slate-200 flex justify-between">
                    <span>Computer Applications / Commercial Studies</span>
                    <span className="font-bold text-[#0b2545]">24 Mar 2025</span>
                  </div>
                </div>
              </div>

              {/* ISC Schedule Box */}
              <div className="p-5 bg-slate-50 rounded-xl border border-slate-200 space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="font-bold text-[#0b2545] text-sm uppercase">ISC (Class XII) Schedule</h3>
                  <span className="text-xs font-bold text-amber-700 bg-amber-100 px-2 py-0.5 rounded">02:00 PM Shift</span>
                </div>
                <div className="text-xs space-y-2 text-slate-700">
                  <div className="p-2 bg-white rounded border border-slate-200 flex justify-between">
                    <span>English - Paper 1 (English Language)</span>
                    <span className="font-bold text-[#0b2545]">13 Feb 2025</span>
                  </div>
                  <div className="p-2 bg-white rounded border border-slate-200 flex justify-between">
                    <span>English - Paper 2 (Literature in English)</span>
                    <span className="font-bold text-[#0b2545]">17 Feb 2025</span>
                  </div>
                  <div className="p-2 bg-white rounded border border-slate-200 flex justify-between">
                    <span>Commerce / Chemistry</span>
                    <span className="font-bold text-[#0b2545]">24 Feb 2025</span>
                  </div>
                  <div className="p-2 bg-white rounded border border-slate-200 flex justify-between">
                    <span>Mathematics</span>
                    <span className="font-bold text-[#0b2545]">03 Mar 2025</span>
                  </div>
                  <div className="p-2 bg-white rounded border border-slate-200 flex justify-between">
                    <span>Physics - Paper 1 (Theory)</span>
                    <span className="font-bold text-[#0b2545]">07 Mar 2025</span>
                  </div>
                  <div className="p-2 bg-white rounded border border-slate-200 flex justify-between">
                    <span>Accountancy</span>
                    <span className="font-bold text-[#0b2545]">12 Mar 2025</span>
                  </div>
                  <div className="p-2 bg-white rounded border border-slate-200 flex justify-between">
                    <span>Biology - Paper 1 (Theory)</span>
                    <span className="font-bold text-[#0b2545]">17 Mar 2025</span>
                  </div>
                  <div className="p-2 bg-white rounded border border-slate-200 flex justify-between">
                    <span>Economics</span>
                    <span className="font-bold text-[#0b2545]">21 Mar 2025</span>
                  </div>
                  <div className="p-2 bg-white rounded border border-slate-200 flex justify-between">
                    <span>Computer Science - Paper 1 (Theory)</span>
                    <span className="font-bold text-[#0b2545]">28 Mar 2025</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 5: CVE Vocational */}
        {activeTab === 'cve' && (
          <div className="bg-white p-6 sm:p-8 rounded-xl border border-slate-200 shadow-xs space-y-4">
            <h2 className="text-xl font-bold text-[#0b2545] font-serif uppercase tracking-wide">
              Certificate of Vocational Education (CVE - Year 12)
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              The Certificate of Vocational Education (CVE) has been crafted to equip students with direct job-market capabilities alongside core academic literacy. Designed for candidates who have passed Class X (ICSE or equivalent), CVE builds professional competencies in applied business, software technology, hospitality, and design.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 bg-slate-50 rounded border border-slate-200">
                <h4 className="font-bold text-xs text-[#0b2545] uppercase">Key Industry Tracks:</h4>
                <p className="text-xs text-slate-600 mt-1">
                  Accounting &amp; Auditing, Information Technology, Graphic Design, Hospitality &amp; Tourism, Front Office Operations.
                </p>
              </div>
              <div className="p-4 bg-slate-50 rounded border border-slate-200">
                <h4 className="font-bold text-xs text-[#0b2545] uppercase">Equivalence:</h4>
                <p className="text-xs text-slate-600 mt-1">
                  Recognized by the Ministry of Human Resource Development (Govt of India) and AIU for vertical mobility into vocational degree programs.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
