import React, { useState } from 'react';
import {
  AlertCircle,
  Bell,
  Calendar,
  ChevronRight,
  Download,
  Eye,
  FileCheck,
  FileText,
  Filter,
  Search,
  Shield,
  X
} from 'lucide-react';
import { CISCE_NOTICES } from '../data/cisceData';
import { Notice, PageId } from '../types';

interface CircularsPageProps {
  onNavigate: (page: PageId) => void;
  selectedNotice: Notice | null;
  onSelectNotice: (notice: Notice | null) => void;
}

export const CircularsPage: React.FC<CircularsPageProps> = ({
  onNavigate,
  selectedNotice,
  onSelectNotice
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('ALL');
  const [searchQuery, setSearchQuery] = useState('');
  const [downloadMsg, setDownloadMsg] = useState<string | null>(null);

  const filtered = CISCE_NOTICES.filter((n) => {
    const matchCat = activeCategory === 'ALL' || n.category === activeCategory;
    const matchSearch =
      n.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (n.description && n.description.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchCat && matchSearch;
  });

  const handleDownload = (n: Notice) => {
    setDownloadMsg(`Downloading official circular: ${n.title} (${n.size || '1.2 MB'})...`);
    setTimeout(() => {
      setDownloadMsg(null);
    }, 3500);
  };

  return (
    <div className="w-full bg-slate-50 min-h-screen py-8">
      {/* Banner */}
      <div className="bg-[#0b2545] text-white py-12 px-4 md:px-8 border-b-4 border-amber-500">
        <div className="max-w-7xl mx-auto space-y-3">
          <div className="flex items-center gap-2 text-amber-400 text-xs uppercase font-bold tracking-wider">
            <Bell className="w-4 h-4" />
            <span>Official Communications</span>
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold font-serif tracking-tight">
            Circulars, Notices &amp; Press Releases
          </h1>
          <p className="text-slate-300 text-xs sm:text-sm max-w-3xl leading-relaxed">
            Archive of official communications, letters to affiliated schools, tenders, and public notifications issued by the Council.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8 space-y-8">
        {downloadMsg && (
          <div className="p-4 bg-emerald-100 border border-emerald-300 text-emerald-900 rounded-lg text-xs font-semibold shadow-xs">
            {downloadMsg}
          </div>
        )}

        {/* Search & Category Filter */}
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Categories */}
          <div className="flex flex-wrap items-center gap-1.5 bg-slate-100 p-1.5 rounded-lg text-xs font-semibold w-full sm:w-auto">
            {['ALL', 'Circular', 'Notice', 'Press Release', 'Tender'].map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3 py-1.5 rounded-md transition-colors ${
                  activeCategory === cat
                    ? 'bg-[#0b2545] text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {cat === 'ALL' ? 'All Communications' : `${cat}s`}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full sm:w-72">
            <Search className="w-4 h-4 absolute left-3 top-3 text-slate-400" />
            <input
              type="text"
              placeholder="Search circulars..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full text-xs pl-9 pr-3 py-2 bg-slate-50 border border-slate-300 rounded-lg focus:border-[#0b2545] focus:outline-hidden"
            />
          </div>
        </div>

        {/* Notices List */}
        <div className="bg-white rounded-xl border border-slate-200 shadow-xs divide-y divide-slate-100">
          {filtered.map((item) => (
            <div
              key={item.id}
              className="p-5 sm:p-6 hover:bg-slate-50/80 transition-colors flex flex-col md:flex-row items-start md:items-center justify-between gap-4 group"
            >
              <div className="space-y-1.5 flex-1">
                <div className="flex items-center gap-2.5 flex-wrap">
                  <span className="text-[11px] font-bold px-2.5 py-0.5 rounded bg-blue-50 text-blue-900 border border-blue-200">
                    {item.category}
                  </span>
                  <span className="text-xs text-slate-500 flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-slate-400" />
                    {item.date}
                  </span>
                  {item.isNew && (
                    <span className="bg-red-600 text-white text-[10px] font-bold px-2 py-0.5 rounded-full uppercase">
                      Active
                    </span>
                  )}
                </div>

                <h3
                  onClick={() => onSelectNotice(item)}
                  className="text-sm sm:text-base font-bold text-[#0b2545] group-hover:text-blue-700 cursor-pointer transition-colors"
                >
                  {item.title}
                </h3>

                <p className="text-xs text-slate-600 max-w-4xl leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="flex items-center gap-2.5 flex-shrink-0 self-end md:self-center">
                <button
                  onClick={() => onSelectNotice(item)}
                  className="px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs rounded transition-colors flex items-center gap-1"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>Read Notice</span>
                </button>
                <button
                  onClick={() => handleDownload(item)}
                  className="px-3 py-1.5 bg-[#0b2545] hover:bg-blue-900 text-white font-bold text-xs rounded transition-colors flex items-center gap-1 shadow-xs"
                >
                  <Download className="w-3.5 h-3.5 text-amber-400" />
                  <span>PDF ({item.size})</span>
                </button>
              </div>
            </div>
          ))}

          {filtered.length === 0 && (
            <div className="p-12 text-center text-slate-500 text-xs">
              No circulars found matching the filter criteria.
            </div>
          )}
        </div>

        {/* Notice View Modal (Letterhead preview) */}
        {selectedNotice && (
          <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl max-w-2xl w-full p-6 sm:p-8 space-y-6 shadow-2xl relative max-h-[90vh] overflow-y-auto">
              <button
                onClick={() => onSelectNotice(null)}
                className="absolute top-4 right-4 p-1 rounded-full hover:bg-slate-100 text-slate-500"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Official Council Letterhead */}
              <div className="text-center border-b-2 border-slate-300 pb-5 space-y-1">
                <div className="w-12 h-12 rounded-full bg-[#0b2545] border-2 border-amber-400 flex items-center justify-center text-amber-300 mx-auto mb-2">
                  <Shield className="w-6 h-6" />
                </div>
                <h2 className="text-base sm:text-lg font-black text-[#0b2545] font-serif uppercase tracking-wider">
                  Council for the Indian School Certificate Examinations
                </h2>
                <p className="text-[11px] text-slate-500">
                  Pragati House, 3rd Floor, 47-48, Nehru Place, New Delhi - 110019
                </p>
                <p className="text-xs font-bold text-slate-700 uppercase tracking-widest pt-1">
                  OFFICIAL COUNCIL {selectedNotice.category.toUpperCase()}
                </p>
              </div>

              {/* Meta */}
              <div className="flex justify-between text-xs text-slate-600 border-b border-slate-100 pb-2">
                <span>Ref: CISCE/EXAM/2025/084</span>
                <span className="font-semibold">Date: {selectedNotice.date}</span>
              </div>

              {/* Notice Body */}
              <div className="text-xs sm:text-sm text-slate-800 space-y-4 leading-relaxed">
                <p className="font-bold text-[#0b2545]">
                  To: All Heads of CISCE Affiliated Schools
                </p>
                <p className="font-bold uppercase text-slate-900">
                  Subject: {selectedNotice.title}
                </p>
                <p>Dear Principal / Head of School,</p>
                <p>
                  {selectedNotice.description}
                </p>
                <p>
                  All Heads of Schools are requested to bring the contents of this communication to the notice of all concerned students, parents, and academic faculty members for smooth and synchronized compliance with Council regulations.
                </p>
                <p>
                  For further clarifications, please liaise with the respective Technical Helpdesk or write directly to <span className="font-mono text-blue-900">helpdesk@cisce.org</span>.
                </p>
              </div>

              {/* Signature */}
              <div className="pt-4 border-t border-slate-200 flex justify-between items-end text-xs">
                <div>
                  <p className="font-bold text-slate-900">Dr. Joseph Emmanuel</p>
                  <p className="text-slate-500">Chief Executive &amp; Secretary</p>
                </div>
                <button
                  onClick={() => handleDownload(selectedNotice)}
                  className="bg-[#0b2545] hover:bg-blue-900 text-white font-bold text-xs px-4 py-2 rounded uppercase flex items-center gap-1.5 transition-colors"
                >
                  <Download className="w-3.5 h-3.5 text-amber-400" />
                  Download Official Copy
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
