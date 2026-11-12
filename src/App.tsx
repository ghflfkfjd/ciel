import React from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { PersonaSection } from './components/PersonaSection';
import { StoryLoreSection } from './components/StoryLoreSection';
import { GallerySection } from './components/GallerySection';
import { Footer } from './components/Footer';

export default function App() {
  const handleScrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div id="top" className="min-h-screen bg-cream-paper text-slate-800 font-sans-app selection:bg-rose-200 selection:text-rose-950">
      {/* Top Header Navigation */}
      <Header onScrollToSection={handleScrollToSection} />

      {/* Main Storybook Content */}
      <main>
        {/* Profile & Hero Polaroid Journal Showcase */}
        <HeroSection onScrollToSection={handleScrollToSection} />

        {/* 3 Personas Analysis Spread */}
        <PersonaSection />

        {/* 10-Year Story Timeline & Bedside Secret Manual */}
        <StoryLoreSection />

        {/* 124 Illustration Scrapbook Gallery */}
        <GallerySection />
      </main>

      {/* Footer */}
      <Footer onScrollToTop={handleScrollToTop} />
    </div>
  );
}
