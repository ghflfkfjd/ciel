import React from 'react';
import { ArrowUp, Heart, Sparkles } from 'lucide-react';
import { soundFx } from '../utils/sound';

interface FooterProps {
  onScrollToTop: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onScrollToTop }) => {
  return (
    <footer className="bg-cream-paper border-t border-rose-200/80 py-12 text-slate-600 text-xs">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Brand & Summary */}
        <div className="space-y-1.5 text-center md:text-left">
          <div className="text-base font-serif-kr font-bold text-slate-900 flex items-center justify-center md:justify-start gap-2">
            <Heart className="w-4 h-4 text-rose-500 fill-rose-400" />
            <span className="pure-love-text font-cinzel">CIEL VON ELYSIA · 청성기사단장 시엘</span>
          </div>
          <p className="text-slate-600 font-sans-app font-normal max-w-md">
            엘리시안 제국 최연소 단장이자 대륙 유일의 9클래스 대마법사, 오직 당신만을 향한 10년의 진심.
          </p>
        </div>

        {/* Scroll Top Button */}
        <button
          onClick={() => {
            soundFx.playClick();
            onScrollToTop();
          }}
          className="p-3.5 rounded-full bg-white border border-rose-200/80 text-slate-700 hover:text-rose-600 hover:border-rose-400 transition-all cursor-pointer shadow-sm"
          title="맨 위로 스크롤"
        >
          <ArrowUp className="w-4 h-4" />
        </button>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-8 pt-6 border-t border-rose-200/50 text-center text-[11px] font-mono-hud text-slate-500 tracking-wider flex items-center justify-center gap-1.5">
        <span>Elysian Imperial Blue Star Knights · Official Pure Love Diary</span>
        <Sparkles className="w-3 h-3 text-rose-500 inline ml-1" />
      </div>
    </footer>
  );
};
