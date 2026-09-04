import React, { useState, useEffect } from 'react';
import { Bell, ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react';
import { Notice, PageId } from '../types';

interface NoticeTickerProps {
  notices: Notice[];
  onSelectNotice: (notice: Notice) => void;
  onNavigate: (page: PageId) => void;
}

export const NoticeTicker: React.FC<NoticeTickerProps> = ({
  notices,
  onSelectNotice,
  onNavigate
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused || notices.length === 0) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % notices.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [isPaused, notices.length]);

  const currentNotice = notices[currentIndex];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % notices.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + notices.length) % notices.length);
  };

  if (!currentNotice) return null;

  return (
    <div className="bg-amber-500/15 border-b border-amber-500/30 text-slate-900 py-2 px-4 md:px-8">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-3 text-xs md:text-sm">
        <div className="flex items-center gap-2.5 flex-1 min-w-0">
          <div className="flex items-center gap-1.5 bg-[#0b2545] text-amber-300 font-bold px-2.5 py-1 rounded text-[11px] uppercase tracking-wider flex-shrink-0 shadow-xs">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
            </span>
            <Bell className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Notice Board</span>
          </div>

          <div
            onClick={() => onSelectNotice(currentNotice)}
            className="cursor-pointer hover:underline text-slate-800 font-medium truncate flex-1 flex items-center gap-2"
          >
            <span className="text-blue-900 font-semibold text-xs hidden md:inline">
              [{currentNotice.category}]
            </span>
            <span className="truncate">{currentNotice.title}</span>
            {currentNotice.isNew && (
              <span className="bg-red-600 text-white text-[10px] font-bold px-1.5 py-0.2 rounded-full uppercase flex-shrink-0 animate-bounce">
                New
              </span>
            )}
          </div>
        </div>

        <div className="flex items-center gap-1 flex-shrink-0 text-slate-700">
          <button
            onClick={handlePrev}
            className="p-1 hover:bg-amber-200/60 rounded transition-colors"
            title="Previous notice"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={() => setIsPaused(!isPaused)}
            className="p-1 hover:bg-amber-200/60 rounded transition-colors"
            title={isPaused ? 'Resume scroll' : 'Pause scroll'}
          >
            {isPaused ? <Play className="w-3.5 h-3.5 text-blue-900" /> : <Pause className="w-3.5 h-3.5 text-slate-700" />}
          </button>
          <button
            onClick={handleNext}
            className="p-1 hover:bg-amber-200/60 rounded transition-colors"
            title="Next notice"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
          <span className="text-slate-400 mx-1">|</span>
          <button
            onClick={() => onNavigate('circulars')}
            className="text-[11px] font-bold text-[#0b2545] hover:underline uppercase"
          >
            View All
          </button>
        </div>
      </div>
    </div>
  );
};
