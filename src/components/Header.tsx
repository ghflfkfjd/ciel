import React, { useState } from 'react';
import { Volume2, VolumeX, Sparkles, Heart, BookOpen } from 'lucide-react';
import { soundFx } from '../utils/sound';

interface HeaderProps {
  onScrollToSection: (id: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ onScrollToSection }) => {
  const [soundEnabled, setSoundEnabled] = useState<boolean>(true);

  const toggleSound = () => {
    soundFx.enabled = !soundEnabled;
    setSoundEnabled(!soundEnabled);
    if (!soundEnabled) {
      soundFx.playChime();
    }
  };

  const handleNavClick = (id: string) => {
    soundFx.playClick();
    onScrollToSection(id);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-rose-200/60 bg-[#F9F6F0]/85 backdrop-blur-md px-6 py-3.5 transition-all shadow-[0_4px_20px_rgba(200,160,120,0.08)]">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-8">
        {/* Zone 1: Romantic Brand Wordmark */}
        <a
          href="#top"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick('hero');
          }}
          className="group flex items-center gap-3 whitespace-nowrap shrink-0"
        >
          <div className="relative w-9 h-9 rounded-full bg-gradient-to-br from-rose-100 via-rose-50 to-amber-100 border border-rose-300/60 flex items-center justify-center shadow-sm group-hover:scale-105 transition-all">
            <Heart className="w-4 h-4 text-rose-500 fill-rose-400/30" />
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-cinzel font-bold tracking-[0.18em] rose-gold-gradient group-hover:brightness-110 transition-all">
              CIEL VON ELYSIA
            </span>
            <span className="text-[10px] text-rose-700/70 font-mono-hud tracking-widest -mt-1 font-medium uppercase">
              청성기사단장 시엘 · 순애 다이어리
            </span>
          </div>
        </a>

        {/* Zone 2: Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-xs font-semibold tracking-wider text-slate-700 uppercase font-sans-app">
          <button
            onClick={() => handleNavClick('profile')}
            className="hover:text-rose-600 transition-colors whitespace-nowrap shrink-0 cursor-pointer relative py-1 group"
          >
            <span>프로필</span>
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-rose-400 transition-all duration-300 group-hover:w-full" />
          </button>
          <button
            onClick={() => handleNavClick('persona')}
            className="hover:text-rose-600 transition-colors whitespace-nowrap shrink-0 cursor-pointer relative py-1 group"
          >
            <span>3가지 페르소나</span>
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-rose-400 transition-all duration-300 group-hover:w-full" />
          </button>
          <button
            onClick={() => handleNavClick('timeline')}
            className="hover:text-rose-600 transition-colors whitespace-nowrap shrink-0 cursor-pointer relative py-1 group"
          >
            <span>10년의 서사 연표</span>
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-rose-400 transition-all duration-300 group-hover:w-full" />
          </button>
          <button
            onClick={() => handleNavClick('secret')}
            className="hover:text-rose-600 transition-colors whitespace-nowrap shrink-0 cursor-pointer relative py-1 group"
          >
            <span>비밀 공략집</span>
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-rose-400 transition-all duration-300 group-hover:w-full" />
          </button>
          <button
            onClick={() => handleNavClick('gallery')}
            className="hover:text-rose-600 transition-colors whitespace-nowrap shrink-0 cursor-pointer relative py-1 group flex items-center gap-1.5"
          >
            <Sparkles className="w-3.5 h-3.5 text-rose-500 animate-pulse" />
            <span>추억 갤러리</span>
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-rose-400 transition-all duration-300 group-hover:w-full" />
          </button>
        </nav>

        {/* Zone 3: Actions */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={toggleSound}
            title={soundEnabled ? '사운드 끄기' : '사운드 켜기'}
            className="p-2.5 rounded-full bg-white/90 border border-rose-200/80 text-slate-600 hover:text-rose-600 hover:bg-rose-50 transition-all cursor-pointer shadow-sm"
          >
            {soundEnabled ? <Volume2 className="w-4 h-4 text-rose-500" /> : <VolumeX className="w-4 h-4 text-slate-400" />}
          </button>

          <button
            onClick={() => handleNavClick('profile')}
            className="px-5 py-2.5 text-xs font-semibold tracking-wider uppercase text-white bg-gradient-to-r from-rose-500 via-rose-400 to-amber-500 rounded-full shadow-[0_4px_15px_rgba(244,63,94,0.3)] hover:shadow-[0_6px_22px_rgba(244,63,94,0.45)] transition-all whitespace-nowrap shrink-0 cursor-pointer active:scale-95 flex items-center gap-2"
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span>순애 다이어리</span>
          </button>
        </div>
      </div>
    </header>
  );
};
