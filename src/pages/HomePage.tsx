import React, { useState } from 'react';
import {
  Award,
  BookOpen,
  Building2,
  Calendar,
  CheckCircle2,
  ChevronRight,
  Download,
  ExternalLink,
  Eye,
  FileCheck,
  FileText,
  Globe2,
  GraduationCap,
  Layers,
  Search,
  ShieldCheck,
  Sparkles,
  Trophy,
  Users
} from 'lucide-react';
import { Notice, PageId } from '../types';
import { CISCE_NOTICES, LEADERSHIP, TIMETABLE_SUMMARY } from '../data/cisceData';

interface HomePageProps {
  onNavigate: (page: PageId) => void;
  onSelectNotice: (notice: Notice) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate, onSelectNotice }) => {
  const [activeTab, setActiveTab] = useState<'all' | 'Circular' | 'Notice' | 'Press Release' | 'Tender'>('all');
  const [heroSlide, setHeroSlide] = useState(0);

  const heroSlides = [
    {
      title: "Council for the Indian School Certificate Examinations",
      subtitle: "Dedicated to holistic education, critical inquiry, and character development since 1958.",
      badge: "Session 2025 - 2026",
      ctaText: "Check Exam Timetables",
      action: () => onNavigate('examinations'),
      bgGradient: "from-[#071b36] via-[#0b2545] to-[#133b68]"
    },
    {
      title: "ICSE (Class X) & ISC (Class XII) Results & Verification",
      subtitle: "Authentic online statement of marks, digital certificates on DigiLocker, and institutional verification.",
      badge: "National Evaluation Portal",
      ctaText: "Access Results Portal",
      action: () => onNavigate('results'),
      bgGradient: "from-[#102a4e] via-[#0d3460] to-[#1a4a82]"
    },
    {
      title: "NEP 2020 Aligned Competency-Based Assessments",
      subtitle: "Fostering analytical acumen, scientific inquiry, and global competencies in over 2,800 affiliated schools.",
      badge: "Curriculum Innovation",
      ctaText: "Download Specimen Papers",
      action: () => onNavigate('examinations'),
      bgGradient: "from-[#08203d] via-[#0d2a4f] to-[#154273]"
    }
  ];

  const filteredNotices = activeTab === 'all'
    ? CISCE_NOTICES
    : CISCE_NOTICES.filter(n => n.category === activeTab);

  return (
    <div className="w-full bg-slate-50 min-h-screen">
      {/* Hero Banner Section */}
      <section className="relative w-full overflow-hidden text-white">
        <div className={`w-full bg-gradient-to-r ${heroSlides[heroSlide].bgGradient} py-12 md:py-16 px-4 md:px-8 border-b-4 border-amber-500 transition-all duration-700`}>
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Content */}
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 bg-amber-400/20 text-amber-300 border border-amber-400/30 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                <span>{heroSlides[heroSlide].badge}</span>
              </div>

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight font-serif leading-tight text-white drop-shadow-xs">
                {heroSlides[heroSlide].title}
              </h2>

              <p className="text-sm sm:text-base text-slate-200 max-w-2xl leading-relaxed">
                {heroSlides[heroSlide].subtitle}
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  onClick={heroSlides[heroSlide].action}
                  className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold px-5 py-2.5 rounded-md text-xs sm:text-sm uppercase tracking-wider shadow-md transition-transform active:scale-95 flex items-center gap-2"
                >
                  <span>{heroSlides[heroSlide].ctaText}</span>
                  <ChevronRight className="w-4 h-4" />
                </button>

                <button
                  onClick={() => onNavigate('results')}
                  className="bg-red-600 hover:bg-red-500 text-white font-bold px-5 py-2.5 rounded-md text-xs sm:text-sm uppercase tracking-wider shadow-md transition-colors flex items-center gap-2"
                >
                  <span>Live Results Portal</span>
                </button>

                <button
                  onClick={() => onNavigate('schools')}
                  className="bg-white/10 hover:bg-white/20 text-white border border-white/30 font-semibold px-4 py-2.5 rounded-md text-xs sm:text-sm transition-colors flex items-center gap-2"
                >
                  <Building2 className="w-4 h-4 text-amber-300" />
                  <span>Locate School</span>
                </button>
              </div>

              {/* Slide indicators */}
              <div className="flex items-center gap-2 pt-4">
                {heroSlides.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setHeroSlide(idx)}
                    className={`h-2 rounded-full transition-all ${
                      heroSlide === idx ? 'w-8 bg-amber-400' : 'w-2.5 bg-white/40 hover:bg-white/70'
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>
            </div>

            {/* Right Card: Quick Important Announcements */}
            <div className="lg:col-span-4 bg-white/10 backdrop-blur-md rounded-xl p-5 border border-white/20 shadow-xl space-y-4">
              <div className="flex items-center justify-between border-b border-white/20 pb-2">
                <h3 className="font-bold text-amber-300 text-sm flex items-center gap-2 uppercase tracking-wide">
                  <Calendar className="w-4 h-4" />
                  Examination Dates 2025
                </h3>
                <span className="text-[11px] text-slate-300">Official</span>
              </div>

              <div className="space-y-3">
                {TIMETABLE_SUMMARY.map((item, idx) => (
                  <div key={idx} className="bg-blue-950/60 rounded-lg p-3 border border-blue-800/60">
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-xs text-white">{item.exam}</span>
                      <span className="text-[11px] text-amber-300 font-semibold">Active</span>
                    </div>
                    <p className="text-xs text-slate-300 mt-1">
                      {item.startDate} to {item.endDate}
                    </p>
                    <p className="text-[11px] text-slate-400 mt-0.5">Shift: {item.shift}</p>
                  </div>
                ))}
              </div>

              <button
                onClick={() => onNavigate('examinations')}
                className="w-full text-center bg-white/10 hover:bg-white/20 text-slate-200 text-xs py-2 rounded font-semibold transition-colors flex items-center justify-center gap-1"
              >
                <span>View Complete Timetable &amp; Guidelines</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* Quick Access Action Strip */}
        <div className="bg-[#0b2545] border-b border-slate-200 text-white py-3 px-4 md:px-8">
          <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 text-center">
            <button
              onClick={() => onNavigate('results')}
              className="p-2.5 rounded-lg bg-blue-900/40 hover:bg-blue-800/60 border border-blue-700/50 transition-colors flex flex-col items-center gap-1 group"
            >
              <Award className="w-5 h-5 text-amber-400 group-hover:scale-110 transition-transform" />
              <span className="text-xs font-bold">Results Portal</span>
              <span className="text-[10px] text-slate-300">Marksheets &amp; Recheck</span>
            </button>

            <button
              onClick={() => onNavigate('services')}
              className="p-2.5 rounded-lg bg-blue-900/40 hover:bg-blue-800/60 border border-blue-700/50 transition-colors flex flex-col items-center gap-1 group"
            >
              <FileCheck className="w-5 h-5 text-amber-400 group-hover:scale-110 transition-transform" />
              <span className="text-xs font-bold">Document Verification</span>
              <span className="text-[10px] text-slate-300">Online &amp; Genuineness</span>
            </button>

            <button
              onClick={() => onNavigate('examinations')}
              className="p-2.5 rounded-lg bg-blue-900/40 hover:bg-blue-800/60 border border-blue-700/50 transition-colors flex flex-col items-center gap-1 group"
            >
              <Download className="w-5 h-5 text-amber-400 group-hover:scale-110 transition-transform" />
              <span className="text-xs font-bold">Specimen Papers</span>
              <span className="text-[10px] text-slate-300">ICSE &amp; ISC 2025-26</span>
            </button>

            <button
              onClick={() => onNavigate('schools')}
              className="p-2.5 rounded-lg bg-blue-900/40 hover:bg-blue-800/60 border border-blue-700/50 transition-colors flex flex-col items-center gap-1 group"
            >
              <Building2 className="w-5 h-5 text-amber-400 group-hover:scale-110 transition-transform" />
              <span className="text-xs font-bold">Locate School</span>
              <span className="text-[10px] text-slate-300">2,800+ Affiliated</span>
            </button>

            <button
              onClick={() => onNavigate('circulars')}
              className="col-span-2 sm:col-span-1 p-2.5 rounded-lg bg-blue-900/40 hover:bg-blue-800/60 border border-blue-700/50 transition-colors flex flex-col items-center gap-1 group"
            >
              <FileText className="w-5 h-5 text-amber-400 group-hover:scale-110 transition-transform" />
              <span className="text-xs font-bold">Council Circulars</span>
              <span className="text-[10px] text-slate-300">Official Notices</span>
            </button>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-10 space-y-12">
        {/* Section 1: Notice Board & Examinations Wing (2 Columns) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left 7 Cols: Notice Board & Circulars */}
          <div className="lg:col-span-7 bg-white rounded-xl shadow-xs border border-slate-200 p-6 flex flex-col">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-b border-slate-200 pb-4">
              <div>
                <h3 className="text-lg font-bold text-[#0b2545] font-serif uppercase tracking-wide flex items-center gap-2">
                  <span className="w-2.5 h-6 bg-amber-500 rounded-xs inline-block"></span>
                  Notice Board &amp; Circulars
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  Official announcements, press releases, guidelines, and council notifications.
                </p>
              </div>

              {/* Tabs */}
              <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-md text-xs font-semibold">
                <button
                  onClick={() => setActiveTab('all')}
                  className={`px-2.5 py-1 rounded transition-colors ${
                    activeTab === 'all' ? 'bg-[#0b2545] text-white shadow-xs' : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  All
                </button>
                <button
                  onClick={() => setActiveTab('Circular')}
                  className={`px-2.5 py-1 rounded transition-colors ${
                    activeTab === 'Circular' ? 'bg-[#0b2545] text-white shadow-xs' : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  Circulars
                </button>
                <button
                  onClick={() => setActiveTab('Notice')}
                  className={`px-2.5 py-1 rounded transition-colors ${
                    activeTab === 'Notice' ? 'bg-[#0b2545] text-white shadow-xs' : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  Notices
                </button>
                <button
                  onClick={() => setActiveTab('Press Release')}
                  className={`px-2.5 py-1 rounded transition-colors ${
                    activeTab === 'Press Release' ? 'bg-[#0b2545] text-white shadow-xs' : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  Press
                </button>
              </div>
            </div>

            {/* List of Notices */}
            <div className="divide-y divide-slate-100 mt-2 flex-1">
              {filteredNotices.slice(0, 5).map((notice) => (
                <div
                  key={notice.id}
                  onClick={() => onSelectNotice(notice)}
                  className="py-3.5 px-2 hover:bg-slate-50 rounded-lg cursor-pointer transition-colors group flex items-start justify-between gap-4"
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="text-[11px] font-bold px-2 py-0.5 rounded bg-blue-50 text-blue-900 border border-blue-200">
                        {notice.category}
                      </span>
                      <span className="text-[11px] text-slate-400">{notice.date}</span>
                      {notice.isNew && (
                        <span className="bg-red-600 text-white text-[10px] font-bold px-1.5 py-0.2 rounded-full uppercase">
                          New
                        </span>
                      )}
                    </div>
                    <h4 className="text-sm font-semibold text-slate-900 group-hover:text-blue-900 group-hover:underline leading-snug">
                      {notice.title}
                    </h4>
                    <p className="text-xs text-slate-500 line-clamp-1">{notice.description}</p>
                  </div>

                  <div className="flex items-center gap-2 text-slate-400 group-hover:text-blue-900 flex-shrink-0 pt-2">
                    <span className="text-[11px] text-slate-400 hidden sm:inline">{notice.size}</span>
                    <FileText className="w-4 h-4" />
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-4 mt-auto border-t border-slate-100 flex items-center justify-between">
              <span className="text-xs text-slate-500">Showing latest official announcements</span>
              <button
                onClick={() => onNavigate('circulars')}
                className="text-xs font-bold text-blue-900 hover:text-blue-700 flex items-center gap-1 uppercase tracking-wider"
              >
                <span>View All Circulars</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right 5 Cols: Examination Corner */}
          <div className="lg:col-span-5 space-y-6">
            {/* ICSE Card */}
            <div className="bg-white rounded-xl shadow-xs border border-slate-200 p-5 hover:border-blue-300 transition-colors">
              <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-lg bg-blue-900 text-amber-300 flex items-center justify-center font-bold text-sm">
                    X
                  </div>
                  <div>
                    <h4 className="font-bold text-[#0b2545] text-base">ICSE Examination</h4>
                    <p className="text-xs text-slate-500">Indian Certificate of Secondary Education (Class X)</p>
                  </div>
                </div>
                <span className="bg-amber-100 text-amber-900 font-bold text-[10px] px-2 py-0.5 rounded uppercase">
                  Class 10
                </span>
              </div>

              <div className="grid grid-cols-2 gap-2 mt-4 text-xs font-medium text-slate-700">
                <button
                  onClick={() => onNavigate('examinations')}
                  className="p-2.5 bg-slate-50 hover:bg-blue-50 hover:text-blue-900 rounded border border-slate-200 text-left transition-colors"
                >
                  <span className="font-bold block text-[#0b2545]">Regulations &amp; Syllabus</span>
                  <span className="text-[11px] text-slate-500">All subjects 2025-26</span>
                </button>
                <button
                  onClick={() => onNavigate('examinations')}
                  className="p-2.5 bg-slate-50 hover:bg-blue-50 hover:text-blue-900 rounded border border-slate-200 text-left transition-colors"
                >
                  <span className="font-bold block text-[#0b2545]">Specimen Papers</span>
                  <span className="text-[11px] text-slate-500">Model Question Papers</span>
                </button>
                <button
                  onClick={() => onNavigate('results')}
                  className="p-2.5 bg-slate-50 hover:bg-blue-50 hover:text-blue-900 rounded border border-slate-200 text-left transition-colors"
                >
                  <span className="font-bold block text-[#0b2545]">ICSE Results Portal</span>
                  <span className="text-[11px] text-slate-500">Check Marks &amp; Grades</span>
                </button>
                <button
                  onClick={() => onNavigate('examinations')}
                  className="p-2.5 bg-slate-50 hover:bg-blue-50 hover:text-blue-900 rounded border border-slate-200 text-left transition-colors"
                >
                  <span className="font-bold block text-[#0b2545]">Timetable 2025</span>
                  <span className="text-[11px] text-slate-500">Exam dates &amp; instructions</span>
                </button>
              </div>
            </div>

            {/* ISC Card */}
            <div className="bg-white rounded-xl shadow-xs border border-slate-200 p-5 hover:border-blue-300 transition-colors">
              <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-lg bg-[#0b2545] text-amber-300 flex items-center justify-center font-bold text-sm">
                    XII
                  </div>
                  <div>
                    <h4 className="font-bold text-[#0b2545] text-base">ISC Examination</h4>
                    <p className="text-xs text-slate-500">Indian School Certificate (Class XII)</p>
                  </div>
                </div>
                <span className="bg-amber-100 text-amber-900 font-bold text-[10px] px-2 py-0.5 rounded uppercase">
                  Class 12
                </span>
              </div>

              <div className="grid grid-cols-2 gap-2 mt-4 text-xs font-medium text-slate-700">
                <button
                  onClick={() => onNavigate('examinations')}
                  className="p-2.5 bg-slate-50 hover:bg-blue-50 hover:text-blue-900 rounded border border-slate-200 text-left transition-colors"
                >
                  <span className="font-bold block text-[#0b2545]">Science / Commerce / Arts</span>
                  <span className="text-[11px] text-slate-500">Subject syllabuses</span>
                </button>
                <button
                  onClick={() => onNavigate('examinations')}
                  className="p-2.5 bg-slate-50 hover:bg-blue-50 hover:text-blue-900 rounded border border-slate-200 text-left transition-colors"
                >
                  <span className="font-bold block text-[#0b2545]">Specimen Papers</span>
                  <span className="text-[11px] text-slate-500">Class 12 Practice Papers</span>
                </button>
                <button
                  onClick={() => onNavigate('results')}
                  className="p-2.5 bg-slate-50 hover:bg-blue-50 hover:text-blue-900 rounded border border-slate-200 text-left transition-colors"
                >
                  <span className="font-bold block text-[#0b2545]">ISC Results Portal</span>
                  <span className="text-[11px] text-slate-500">Candidate statement</span>
                </button>
                <button
                  onClick={() => onNavigate('examinations')}
                  className="p-2.5 bg-slate-50 hover:bg-blue-50 hover:text-blue-900 rounded border border-slate-200 text-left transition-colors"
                >
                  <span className="font-bold block text-[#0b2545]">Pupil Performance</span>
                  <span className="text-[11px] text-slate-500">Examiner evaluations</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Section 2: Statistics Strip */}
        <div className="bg-[#0b2545] rounded-2xl p-8 text-white shadow-lg">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <h3 className="text-xl sm:text-2xl font-bold font-serif uppercase tracking-wider text-amber-300">
              CISCE at a Glance
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 mt-1">
              A premier national education board committed to quality school education in India and overseas.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="p-4 bg-blue-950/70 rounded-xl border border-blue-800/50">
              <Building2 className="w-8 h-8 text-amber-400 mx-auto mb-2" />
              <p className="text-2xl sm:text-3xl font-extrabold text-white">2,800+</p>
              <p className="text-xs text-slate-300 mt-1 uppercase font-semibold">Affiliated Schools</p>
              <p className="text-[10px] text-slate-400 mt-0.5">India &amp; International Centres</p>
            </div>

            <div className="p-4 bg-blue-950/70 rounded-xl border border-blue-800/50">
              <GraduationCap className="w-8 h-8 text-amber-400 mx-auto mb-2" />
              <p className="text-2xl sm:text-3xl font-extrabold text-white">2,50,000+</p>
              <p className="text-xs text-slate-300 mt-1 uppercase font-semibold">ICSE Candidates</p>
              <p className="text-[10px] text-slate-400 mt-0.5">Appearing annually for Class X</p>
            </div>

            <div className="p-4 bg-blue-950/70 rounded-xl border border-blue-800/50">
              <Award className="w-8 h-8 text-amber-400 mx-auto mb-2" />
              <p className="text-2xl sm:text-3xl font-extrabold text-white">1,00,000+</p>
              <p className="text-xs text-slate-300 mt-1 uppercase font-semibold">ISC Candidates</p>
              <p className="text-[10px] text-slate-400 mt-0.5">Appearing annually for Class XII</p>
            </div>

            <div className="p-4 bg-blue-950/70 rounded-xl border border-blue-800/50">
              <ShieldCheck className="w-8 h-8 text-amber-400 mx-auto mb-2" />
              <p className="text-2xl sm:text-3xl font-extrabold text-white">65+ Years</p>
              <p className="text-xs text-slate-300 mt-1 uppercase font-semibold">Academic Excellence</p>
              <p className="text-[10px] text-slate-400 mt-0.5">Pioneering holistic standards</p>
            </div>
          </div>
        </div>

        {/* Section 3: Leadership Perspectives */}
        <div>
          <div className="text-center max-w-xl mx-auto mb-8">
            <span className="text-xs font-bold text-amber-600 uppercase tracking-widest">Governance &amp; Vision</span>
            <h3 className="text-2xl font-bold text-[#0b2545] font-serif uppercase tracking-tight mt-1">
              Leadership Perspectives
            </h3>
            <p className="text-xs text-slate-500 mt-1">
              Guiding the educational trajectory of young minds towards intellectual vitality and moral integrity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {LEADERSHIP.map((leader, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl shadow-xs border border-slate-200 p-6 flex flex-col sm:flex-row items-center sm:items-start gap-5 hover:shadow-md transition-shadow"
              >
                <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-amber-400 flex-shrink-0 shadow-sm">
                  <img
                    src={leader.image}
                    alt={leader.name}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="space-y-2 text-center sm:text-left">
                  <h4 className="text-base font-bold text-[#0b2545]">{leader.name}</h4>
                  <p className="text-xs font-semibold text-amber-700 uppercase tracking-wide">{leader.title}</p>
                  <p className="text-xs text-slate-600 italic leading-relaxed">
                    "{leader.quote}"
                  </p>
                  <button
                    onClick={() => onNavigate('about')}
                    className="text-xs font-bold text-blue-900 hover:text-blue-700 inline-flex items-center gap-1 uppercase pt-1"
                  >
                    <span>Read Full Perspective</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section 4: Public Services & Online Facilities Grid */}
        <div className="bg-slate-100/70 rounded-2xl p-8 border border-slate-200 space-y-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <h3 className="text-xl font-bold text-[#0b2545] font-serif uppercase tracking-wide">
                Public Services &amp; Online Portals
              </h3>
              <p className="text-xs text-slate-500 mt-0.5">
                Quick, transparent, and legally binding services for students, schools, and institutions.
              </p>
            </div>
            <button
              onClick={() => onNavigate('services')}
              className="bg-[#0b2545] hover:bg-blue-900 text-white text-xs font-bold px-4 py-2 rounded uppercase tracking-wider transition-colors"
            >
              All Services
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            <div
              onClick={() => onNavigate('services')}
              className="bg-white p-5 rounded-xl border border-slate-200 hover:border-blue-300 hover:shadow-sm transition-all cursor-pointer group"
            >
              <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-900 flex items-center justify-center mb-3 group-hover:bg-[#0b2545] group-hover:text-amber-300 transition-colors">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-sm text-[#0b2545] group-hover:text-blue-800">
                Online Document Verification
              </h4>
              <p className="text-xs text-slate-500 mt-1">
                Authenticate pass certificates and statement of marks for universities, visa processing, and employers.
              </p>
            </div>

            <div
              onClick={() => onNavigate('results')}
              className="bg-white p-5 rounded-xl border border-slate-200 hover:border-blue-300 hover:shadow-sm transition-all cursor-pointer group"
            >
              <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-900 flex items-center justify-center mb-3 group-hover:bg-[#0b2545] group-hover:text-amber-300 transition-colors">
                <Award className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-sm text-[#0b2545] group-hover:text-blue-800">
                Statement of Marks &amp; Recheck
              </h4>
              <p className="text-xs text-slate-500 mt-1">
                View verified marksheets, re-evaluation guidelines, and download digital certificates.
              </p>
            </div>

            <div
              onClick={() => onNavigate('services')}
              className="bg-white p-5 rounded-xl border border-slate-200 hover:border-blue-300 hover:shadow-sm transition-all cursor-pointer group"
            >
              <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-900 flex items-center justify-center mb-3 group-hover:bg-[#0b2545] group-hover:text-amber-300 transition-colors">
                <FileText className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-sm text-[#0b2545] group-hover:text-blue-800">
                Duplicate Certificates &amp; Migration
              </h4>
              <p className="text-xs text-slate-500 mt-1">
                Direct council application for lost, damaged certificates and interstate educational migration.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
