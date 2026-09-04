import React, { useState } from 'react';
import {
  BookOpen,
  Building,
  Calendar,
  CheckCircle,
  Code2,
  Download,
  FileCheck,
  Globe,
  HelpCircle,
  Mail,
  Menu,
  Phone,
  Search,
  Shield,
  UserCheck,
  Users,
  X
} from 'lucide-react';
import { PageId } from '../types';

interface HeaderProps {
  activePage: PageId;
  onNavigate: (page: PageId) => void;
  onOpenVueModal: () => void;
  highContrast: boolean;
  onToggleContrast: () => void;
  fontSize: number;
  onAdjustFontSize: (delta: number) => void;
}

export const Header: React.FC<HeaderProps> = ({
  activePage,
  onNavigate,
  onOpenVueModal,
  highContrast,
  onToggleContrast,
  fontSize,
  onAdjustFontSize
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const handlePageClick = (page: PageId) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    setActiveDropdown(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="w-full bg-white border-b border-slate-200 sticky top-0 z-40 shadow-sm">
      {/* Top Utility Bar */}
      <div className="bg-[#0b2545] text-slate-200 text-xs py-1.5 px-4 md:px-8 border-b border-blue-950">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          {/* Left: Helpline & Contact */}
          <div className="flex items-center gap-4 flex-wrap">
            <span className="flex items-center gap-1.5 text-amber-300 font-semibold">
              <Phone className="w-3.5 h-3.5" />
              Toll Free: 1800-203-2414
            </span>
            <span className="hidden sm:inline text-slate-400">|</span>
            <span className="hidden sm:flex items-center gap-1 text-slate-300">
              <Mail className="w-3.5 h-3.5" />
              helpdesk@cisce.org
            </span>
            <span className="hidden md:inline text-slate-400">|</span>
            <span className="hidden md:inline text-slate-300">
              Official CISCE Portal: www.cisce.org & cisceboard.org
            </span>
          </div>

          {/* Right: Accessibility Controls & Vue Code Generator */}
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1 bg-blue-950/70 px-2 py-0.5 rounded border border-blue-900 text-[11px]">
              <span className="text-slate-400">Font:</span>
              <button
                onClick={() => onAdjustFontSize(-1)}
                className="hover:text-amber-300 px-1 font-bold"
                title="Decrease font size"
              >
                A-
              </button>
              <button
                onClick={() => onAdjustFontSize(0)}
                className="hover:text-amber-300 px-1 font-semibold"
                title="Reset font size"
              >
                A
              </button>
              <button
                onClick={() => onAdjustFontSize(1)}
                className="hover:text-amber-300 px-1 font-bold"
                title="Increase font size"
              >
                A+
              </button>
            </div>

            <button
              onClick={onToggleContrast}
              className={`px-2 py-0.5 rounded border text-[11px] transition-colors ${
                highContrast
                  ? 'bg-amber-400 text-black border-amber-300 font-bold'
                  : 'bg-blue-950/70 text-slate-300 border-blue-900 hover:text-white'
              }`}
            >
              {highContrast ? 'Standard Mode' : 'High Contrast'}
            </button>

            {/* Vue.js Export button to honor the user's Vue prompt */}
            <button
              onClick={onOpenVueModal}
              className="flex items-center gap-1.5 bg-emerald-600 hover:bg-emerald-500 text-white font-medium px-2.5 py-0.5 rounded text-[11px] transition-colors shadow-xs"
              title="View & copy Vue.js 3 components code"
            >
              <Code2 className="w-3.5 h-3.5" />
              <span>Vue.js Code</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Branding Section */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-3.5 flex flex-col md:flex-row items-center justify-between gap-4">
        <div
          onClick={() => handlePageClick('home')}
          className="flex items-center gap-4 cursor-pointer group"
        >
          {/* CISCE Emblem Crest */}
          <div className="relative w-14 h-14 md:w-16 md:h-16 flex-shrink-0 bg-[#0b2545] rounded-full p-1.5 shadow-md border-2 border-amber-400 flex items-center justify-center text-amber-300">
            <div className="w-full h-full rounded-full border border-amber-400/50 flex flex-col items-center justify-center text-center">
              <Shield className="w-6 h-6 text-amber-400 stroke-[1.8]" />
              <span className="text-[7px] font-bold tracking-tighter text-amber-200 mt-0.5">1958</span>
            </div>
          </div>

          <div>
            <h1 className="text-base sm:text-lg md:text-xl font-extrabold text-[#0b2545] tracking-tight leading-tight uppercase font-serif">
              Council for the Indian School Certificate Examinations
            </h1>
            <p className="text-xs font-semibold text-slate-700 tracking-wide mt-0.5">
              भारतीय स्कूल प्रमाण-पत्र परीक्षा परिषद <span className="text-slate-400">|</span> Established 1958
            </p>
            <p className="text-[11px] text-slate-500 hidden sm:block">
              Conducting Indian Certificate of Secondary Education (ICSE - X) &amp; Indian School Certificate (ISC - XII)
            </p>
          </div>
        </div>

        {/* Quick Direct Buttons */}
        <div className="hidden lg:flex items-center gap-2.5">
          <button
            onClick={() => handlePageClick('results')}
            className="flex items-center gap-2 bg-gradient-to-r from-red-600 to-rose-700 hover:from-red-700 hover:to-rose-800 text-white px-3.5 py-2 rounded-md font-bold text-xs uppercase tracking-wider shadow-sm transition-transform active:scale-95 animate-pulse"
          >
            <span className="w-2 h-2 rounded-full bg-white inline-block"></span>
            Check Results
          </button>

          <button
            onClick={() => handlePageClick('services')}
            className="flex items-center gap-1.5 bg-[#0b2545] hover:bg-blue-900 text-white px-3 py-2 rounded-md font-semibold text-xs transition-colors"
          >
            <FileCheck className="w-4 h-4 text-amber-400" />
            Verification
          </button>

          <button
            onClick={() => handlePageClick('schools')}
            className="flex items-center gap-1.5 border border-slate-300 hover:border-[#0b2545] hover:bg-slate-50 text-slate-800 px-3 py-2 rounded-md font-semibold text-xs transition-colors"
          >
            <Building className="w-4 h-4 text-[#0b2545]" />
            Locate School
          </button>
        </div>

        {/* Mobile menu trigger */}
        <div className="md:hidden flex items-center gap-2 self-end -mt-10">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#0b2545] rounded-md hover:bg-slate-100"
            aria-label="Toggle navigation"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Primary Navigation Bar */}
      <nav className="bg-[#0b2545] text-white border-t border-blue-900">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="hidden md:flex items-center justify-between">
            <div className="flex items-center space-x-1">
              <button
                onClick={() => handlePageClick('home')}
                className={`px-3 py-2.5 text-xs font-semibold uppercase tracking-wider transition-colors border-b-2 ${
                  activePage === 'home'
                    ? 'border-amber-400 text-amber-300 bg-blue-950/60'
                    : 'border-transparent text-slate-100 hover:text-amber-300 hover:bg-blue-900/50'
                }`}
              >
                Home
              </button>

              <button
                onClick={() => handlePageClick('about')}
                className={`px-3 py-2.5 text-xs font-semibold uppercase tracking-wider transition-colors border-b-2 ${
                  activePage === 'about'
                    ? 'border-amber-400 text-amber-300 bg-blue-950/60'
                    : 'border-transparent text-slate-100 hover:text-amber-300 hover:bg-blue-900/50'
                }`}
              >
                About Us
              </button>

              <button
                onClick={() => handlePageClick('examinations')}
                className={`px-3 py-2.5 text-xs font-semibold uppercase tracking-wider transition-colors border-b-2 ${
                  activePage === 'examinations'
                    ? 'border-amber-400 text-amber-300 bg-blue-950/60'
                    : 'border-transparent text-slate-100 hover:text-amber-300 hover:bg-blue-900/50'
                }`}
              >
                Examinations
              </button>

              <button
                onClick={() => handlePageClick('results')}
                className={`px-3 py-2.5 text-xs font-semibold uppercase tracking-wider transition-colors border-b-2 ${
                  activePage === 'results'
                    ? 'border-amber-400 text-amber-300 bg-blue-950/60'
                    : 'border-transparent text-slate-100 hover:text-amber-300 hover:bg-blue-900/50'
                }`}
              >
                Results Portal
              </button>

              <button
                onClick={() => handlePageClick('services')}
                className={`px-3 py-2.5 text-xs font-semibold uppercase tracking-wider transition-colors border-b-2 ${
                  activePage === 'services'
                    ? 'border-amber-400 text-amber-300 bg-blue-950/60'
                    : 'border-transparent text-slate-100 hover:text-amber-300 hover:bg-blue-900/50'
                }`}
              >
                Services
              </button>

              <button
                onClick={() => handlePageClick('schools')}
                className={`px-3 py-2.5 text-xs font-semibold uppercase tracking-wider transition-colors border-b-2 ${
                  activePage === 'schools'
                    ? 'border-amber-400 text-amber-300 bg-blue-950/60'
                    : 'border-transparent text-slate-100 hover:text-amber-300 hover:bg-blue-900/50'
                }`}
              >
                Locate School
              </button>

              <button
                onClick={() => handlePageClick('circulars')}
                className={`px-3 py-2.5 text-xs font-semibold uppercase tracking-wider transition-colors border-b-2 ${
                  activePage === 'circulars'
                    ? 'border-amber-400 text-amber-300 bg-blue-950/60'
                    : 'border-transparent text-slate-100 hover:text-amber-300 hover:bg-blue-900/50'
                }`}
              >
                Circulars &amp; Notices
              </button>

              <button
                onClick={() => handlePageClick('careers')}
                className={`px-3 py-2.5 text-xs font-semibold uppercase tracking-wider transition-colors border-b-2 ${
                  activePage === 'careers'
                    ? 'border-amber-400 text-amber-300 bg-blue-950/60'
                    : 'border-transparent text-slate-100 hover:text-amber-300 hover:bg-blue-900/50'
                }`}
              >
                Careers
              </button>

              <button
                onClick={() => handlePageClick('contact')}
                className={`px-3 py-2.5 text-xs font-semibold uppercase tracking-wider transition-colors border-b-2 ${
                  activePage === 'contact'
                    ? 'border-amber-400 text-amber-300 bg-blue-950/60'
                    : 'border-transparent text-slate-100 hover:text-amber-300 hover:bg-blue-900/50'
                }`}
              >
                Contact Us
              </button>
            </div>

            {/* Quick search badge */}
            <div className="flex items-center gap-2 text-xs text-amber-300 py-1 font-medium">
              <CheckCircle className="w-3.5 h-3.5 text-amber-400" />
              <span>Session 2025-26</span>
            </div>
          </div>

          {/* Mobile Menu Dropdown */}
          {mobileMenuOpen && (
            <div className="md:hidden py-3 space-y-1 border-t border-blue-900/70">
              <button
                onClick={() => handlePageClick('home')}
                className="w-full text-left px-3 py-2 text-sm font-semibold rounded hover:bg-blue-900"
              >
                Home
              </button>
              <button
                onClick={() => handlePageClick('about')}
                className="w-full text-left px-3 py-2 text-sm font-semibold rounded hover:bg-blue-900"
              >
                About CISCE
              </button>
              <button
                onClick={() => handlePageClick('examinations')}
                className="w-full text-left px-3 py-2 text-sm font-semibold rounded hover:bg-blue-900"
              >
                Examinations (ICSE / ISC)
              </button>
              <button
                onClick={() => handlePageClick('results')}
                className="w-full text-left px-3 py-2 text-sm font-bold text-amber-300 rounded hover:bg-blue-900"
              >
                Check Results Portal
              </button>
              <button
                onClick={() => handlePageClick('services')}
                className="w-full text-left px-3 py-2 text-sm font-semibold rounded hover:bg-blue-900"
              >
                Online Services &amp; Verification
              </button>
              <button
                onClick={() => handlePageClick('schools')}
                className="w-full text-left px-3 py-2 text-sm font-semibold rounded hover:bg-blue-900"
              >
                Locate Affiliated School
              </button>
              <button
                onClick={() => handlePageClick('circulars')}
                className="w-full text-left px-3 py-2 text-sm font-semibold rounded hover:bg-blue-900"
              >
                Circulars &amp; Notices
              </button>
              <button
                onClick={() => handlePageClick('careers')}
                className="w-full text-left px-3 py-2 text-sm font-semibold rounded hover:bg-blue-900"
              >
                Careers
              </button>
              <button
                onClick={() => handlePageClick('contact')}
                className="w-full text-left px-3 py-2 text-sm font-semibold rounded hover:bg-blue-900"
              >
                Contact Us
              </button>
              <div className="pt-2 border-t border-blue-900">
                <button
                  onClick={() => {
                    onOpenVueModal();
                    setMobileMenuOpen(false);
                  }}
                  className="w-full text-left px-3 py-2 text-sm font-semibold text-emerald-400 rounded hover:bg-blue-900 flex items-center gap-2"
                >
                  <Code2 className="w-4 h-4" />
                  View Vue.js SFC Components Code
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};
