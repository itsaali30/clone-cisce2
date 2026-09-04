/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { NoticeTicker } from './components/NoticeTicker';
import { VueCodeModal } from './components/VueCodeModal';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ExaminationsPage } from './pages/ExaminationsPage';
import { ResultsPage } from './pages/ResultsPage';
import { ServicesPage } from './pages/ServicesPage';
import { LocateSchoolPage } from './pages/LocateSchoolPage';
import { CircularsPage } from './pages/CircularsPage';
import { CareersPage } from './pages/CareersPage';
import { ContactPage } from './pages/ContactPage';
import { CISCE_NOTICES } from './data/cisceData';
import { Notice, PageId } from './types';

export default function App() {
  const [activePage, setActivePage] = useState<PageId>('home');
  const [selectedNotice, setSelectedNotice] = useState<Notice | null>(null);
  const [isVueModalOpen, setIsVueModalOpen] = useState<boolean>(false);
  const [highContrast, setHighContrast] = useState<boolean>(false);
  const [fontSizeDelta, setFontSizeDelta] = useState<number>(0);

  const handleNavigate = (page: PageId) => {
    setActivePage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectNotice = (notice: Notice | null) => {
    setSelectedNotice(notice);
    if (notice && activePage !== 'circulars') {
      setActivePage('circulars');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleAdjustFontSize = (delta: number) => {
    if (delta === 0) {
      setFontSizeDelta(0);
    } else {
      setFontSizeDelta((prev) => Math.max(-2, Math.min(4, prev + delta)));
    }
  };

  return (
    <div
      className={`min-h-screen flex flex-col font-sans transition-colors duration-200 ${
        highContrast
          ? 'contrast-125 bg-slate-950 text-slate-100'
          : 'bg-slate-50 text-slate-900'
      }`}
      style={{
        fontSize: fontSizeDelta !== 0 ? `${16 + fontSizeDelta}px` : undefined
      }}
    >
      {/* Top Header with accessibility, navigation, and logo */}
      <Header
        activePage={activePage}
        onNavigate={handleNavigate}
        onOpenVueModal={() => setIsVueModalOpen(true)}
        highContrast={highContrast}
        onToggleContrast={() => setHighContrast(!highContrast)}
        fontSize={16 + fontSizeDelta}
        onAdjustFontSize={handleAdjustFontSize}
      />

      {/* Official Notice Ticker */}
      <NoticeTicker
        notices={CISCE_NOTICES}
        onSelectNotice={handleSelectNotice}
        onNavigate={handleNavigate}
      />

      {/* Main Dynamic View */}
      <main className="flex-grow">
        {activePage === 'home' && (
          <HomePage
            onNavigate={handleNavigate}
            onSelectNotice={handleSelectNotice}
          />
        )}

        {activePage === 'about' && (
          <AboutPage onNavigate={handleNavigate} />
        )}

        {activePage === 'examinations' && (
          <ExaminationsPage onNavigate={handleNavigate} />
        )}

        {activePage === 'results' && (
          <ResultsPage onNavigate={handleNavigate} />
        )}

        {activePage === 'services' && (
          <ServicesPage onNavigate={handleNavigate} />
        )}

        {activePage === 'schools' && (
          <LocateSchoolPage onNavigate={handleNavigate} />
        )}

        {activePage === 'circulars' && (
          <CircularsPage
            onNavigate={handleNavigate}
            selectedNotice={selectedNotice}
            onSelectNotice={setSelectedNotice}
          />
        )}

        {activePage === 'careers' && (
          <CareersPage onNavigate={handleNavigate} />
        )}

        {activePage === 'contact' && (
          <ContactPage onNavigate={handleNavigate} />
        )}
      </main>

      {/* Official Council Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenVueModal={() => setIsVueModalOpen(true)}
      />

      {/* Vue.js Single File Component Code Exporter Modal */}
      <VueCodeModal
        isOpen={isVueModalOpen}
        onClose={() => setIsVueModalOpen(false)}
        activePage={activePage}
      />
    </div>
  );
}
