/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { HeritageHero } from './components/HeritageHero';
import { PillarExplorer } from './components/PillarExplorer';
import { InteractiveSimulators } from './components/InteractiveSimulators';
import { PolymathGallery } from './components/PolymathGallery';
import { IksAiInquirer } from './components/IksAiInquirer';
import { IksQuizQuest } from './components/IksQuizQuest';
import { CuratorialModal } from './components/CuratorialModal';
import { ChapterCatalogView } from './components/ChapterCatalogView';
import { HouseOfBhosaleEpicView, EpicType } from './components/HouseOfBhosaleEpicView';
import { Footer } from './components/Footer';
import { Hotspot } from './data/iksData';

export default function App() {
  const [currentView, setCurrentView] = useState<'spotlight' | 'chronicles' | 'epic-triptych'>('spotlight');
  const [selectedEpic, setSelectedEpic] = useState<EpicType>('ramayana');
  const [activeSection, setActiveSection] = useState<string>('hero');
  const [selectedHotspot, setSelectedHotspot] = useState<Hotspot | null>(null);
  const [isQuizOpen, setIsQuizOpen] = useState<boolean>(false);

  // Sync with browser URL hash for authentic standalone page behavior
  useEffect(() => {
    const handleHashSync = () => {
      const hash = window.location.hash;
      if (hash.startsWith('#/epic/')) {
        const ep = hash.replace('#/epic/', '') as EpicType;
        if (ep === 'ramayana' || ep === 'mahabharat' || ep === 'bhosale') {
          setSelectedEpic(ep);
          setCurrentView('epic-triptych');
        }
      } else if (hash === '#/chronicles') {
        setCurrentView('chronicles');
      }
    };

    handleHashSync();
    window.addEventListener('hashchange', handleHashSync);
    return () => window.removeEventListener('hashchange', handleHashSync);
  }, []);

  const handleOpenEpic = (epic: EpicType) => {
    setSelectedEpic(epic);
    setCurrentView('epic-triptych');
    window.location.hash = `#/epic/${epic}`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigate = (sectionId: string) => {
    if (currentView !== 'spotlight') {
      setCurrentView('spotlight');
      window.location.hash = '';
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 50);
    } else {
      setActiveSection(sectionId);
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleDiveInside = () => {
    setCurrentView('chronicles');
    window.location.hash = '#/chronicles';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#070a10] text-slate-100 selection:bg-amber-500 selection:text-slate-950">
      {/* Top Bar Navigation */}
      <Header
        activeSection={
          currentView === 'chronicles'
            ? 'chronicles'
            : currentView === 'epic-triptych'
            ? 'epic'
            : activeSection
        }
        onNavigate={(sec) => {
          if (sec === 'chronicles') {
            handleDiveInside();
          } else if (sec === 'epic') {
            handleOpenEpic('bhosale');
          } else if (sec === 'hero' && currentView !== 'spotlight') {
            setCurrentView('spotlight');
            window.location.hash = '';
            window.scrollTo({ top: 0, behavior: 'smooth' });
          } else {
            handleNavigate(sec);
          }
        }}
        onOpenQuiz={() => setIsQuizOpen(true)}
      />

      {/* Main Content Area */}
      <main>
        {currentView === 'epic-triptych' ? (
          /* Dedicated Web Page for Ramayana / Mahabharat / House of Bhosale Triptych */
          <HouseOfBhosaleEpicView
            initialEpic={selectedEpic}
            onBackToChronicles={() => {
              setCurrentView('chronicles');
              window.location.hash = '#/chronicles';
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onOpenSimulator={() => {
              setCurrentView('spotlight');
              window.location.hash = '';
              setTimeout(() => {
                const element = document.getElementById('simulations');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }, 50);
            }}
          />
        ) : currentView === 'chronicles' ? (
          /* The Long Continuous Website Image Asset matching user reference */
          <ChapterCatalogView
            onBackToSpotlight={() => {
              setCurrentView('spotlight');
              window.location.hash = '';
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onOpenEpicPortal={(epic) => handleOpenEpic(epic)}
            onOpenSimulator={() => {
              setCurrentView('spotlight');
              window.location.hash = '';
              setTimeout(() => {
                const element = document.getElementById('simulations');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }, 50);
            }}
          />
        ) : (
          /* Primary Spotlight Portal Experience */
          <>
            {/* 1. Heritage Spotlight Hero (recreating the user's interface image) */}
            <HeritageHero
              onSelectHotspot={(hotspot) => setSelectedHotspot(hotspot)}
              onExplorePillars={handleDiveInside}
            />

            {/* 2. The 6 Knowledge Pillars of IKS */}
            <PillarExplorer />

            {/* 3. Interactive Laboratory Simulators (Sundial, Baudhayana, Panini, Metallurgy) */}
            <InteractiveSimulators />

            {/* 4. Pioneering Sages & Polymaths Gallery */}
            <PolymathGallery />

            {/* 5. Inquire into IKS with Scholarly AI */}
            <IksAiInquirer />
          </>
        )}
      </main>

      {/* Curatorial Detail Modal for Hotspots */}
      <CuratorialModal
        hotspot={selectedHotspot}
        onClose={() => setSelectedHotspot(null)}
        onNavigateToSimulator={() => {
          if (currentView === 'chronicles') {
            setCurrentView('spotlight');
          }
          setTimeout(() => {
            const el = document.getElementById('simulations');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }, 50);
        }}
      />

      {/* IKS Knowledge Challenge Modal */}
      <IksQuizQuest
        isOpen={isQuizOpen}
        onClose={() => setIsQuizOpen(false)}
      />

      {/* Footer */}
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}
