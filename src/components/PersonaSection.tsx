import React, { useState } from 'react';
import { Sparkles, Quote, Heart } from 'lucide-react';
import { PERSONAS, PersonaInfo } from '../data/cielData';
import { soundFx } from '../utils/sound';

export const PersonaSection: React.FC = () => {
  const [selectedPersona, setSelectedPersona] = useState<PersonaInfo>(PERSONAS[1]); // Default to Fox mode (② 연출 모드)

  const handleTabChange = (persona: PersonaInfo) => {
    soundFx.playClick();
    setSelectedPersona(persona);
  };

  return (
    <section id="persona" className="py-24 bg-cream-paper border-y border-rose-200/60 relative text-slate-800">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-rose-100/80 border border-rose-300/70 text-xs font-mono-hud text-rose-800 uppercase tracking-widest shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-rose-500" />
            <span>PERSONA DIARY SPREAD</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif-kr font-bold text-slate-900">
            상황에 따라 달라지는 <span className="pure-love-text">시엘의 3가지 모습</span>
          </h2>
          <p className="text-sm md:text-base text-slate-600 font-sans-app font-normal">
            차가운 제국 기사단장으로서의 상징부터, 소꿉친구 앞에서의 어설픈 여우짓, 
            그리고 마침내 연기할 여력마저 해제되었을 때의 애틋한 맨얼굴을 조명합니다.
          </p>
        </div>

        {/* Persona Bookmark Tab Controls */}
        <div className="flex items-center justify-center gap-2.5 p-2 bg-white/80 rounded-2xl border border-rose-200/80 max-w-2xl mx-auto mb-12 shadow-sm backdrop-blur-md">
          {PERSONAS.map((p) => {
            const isActive = selectedPersona.id === p.id;
            return (
              <button
                key={p.id}
                onClick={() => handleTabChange(p)}
                className={`flex-1 py-3 px-4 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer font-sans-app ${
                  isActive
                    ? 'bg-gradient-to-r from-rose-500 via-rose-400 to-amber-500 text-white shadow-[0_4px_15px_rgba(244,63,94,0.3)]'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-rose-50/60'
                }`}
              >
                <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[11px] font-bold ${
                  isActive ? 'bg-white text-rose-600' : 'bg-rose-100 text-rose-700'
                }`}>
                  {p.numberTag}
                </span>
                <span className="whitespace-nowrap shrink-0">{p.name}</span>
              </button>
            );
          })}
        </div>

        {/* Selected Persona Main Card Display Spread */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center parchment-panel p-6 sm:p-10 shadow-xl relative border border-rose-200/80">
          {/* Left Column: Polaroid Artwork Frame */}
          <div className="lg:col-span-5 space-y-4">
            <div className="relative rotate-[-1deg] hover:rotate-0 transition-transform duration-500">
              {/* Corner Washi Tape */}
              <div className="washi-tape washi-tape-rose -top-3 left-6 rotate-[-15deg]" />
              <div className="washi-tape washi-tape-gold -top-3 right-6 rotate-[15deg]" />

              <div className="polaroid-card">
                <div className="relative rounded overflow-hidden aspect-[3/4] bg-amber-50">
                  <img
                    src={selectedPersona.mainImage}
                    alt={selectedPersona.name}
                    className="w-full h-full object-cover object-top transition-transform duration-700 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent" />

                  <div className="absolute bottom-3 left-3 right-3 p-3 rounded bg-white/90 backdrop-blur-md border border-rose-100 shadow-sm space-y-0.5">
                    <div className="text-[10px] text-rose-600 font-mono-hud flex items-center gap-1 uppercase tracking-widest font-semibold">
                      <Heart className="w-3 h-3 text-rose-500 fill-rose-400" />
                      <span>{selectedPersona.numberTag} MODE</span>
                    </div>
                    <div className="text-base font-serif-kr font-bold text-slate-900">{selectedPersona.title}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Scent & Outfit Specs */}
            <div className="grid grid-cols-2 gap-3 text-xs">
              <div className="p-3.5 rounded-xl bg-white border border-rose-100 shadow-sm">
                <span className="text-rose-700 block mb-1 font-mono-hud text-[10px] font-medium uppercase">시엘의 향기</span>
                <span className="font-semibold text-slate-900 font-serif-kr">{selectedPersona.scent}</span>
              </div>
              <div className="p-3.5 rounded-xl bg-white border border-rose-100 shadow-sm">
                <span className="text-rose-700 block mb-1 font-mono-hud text-[10px] font-medium uppercase">외형 &amp; 복장</span>
                <span className="font-semibold text-slate-900 truncate block font-serif-kr">{selectedPersona.outfit}</span>
              </div>
            </div>
          </div>

          {/* Right Column: Literary Prose & Character Description */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-3">
              <div className="flex flex-wrap items-center gap-3">
                <span className="px-3.5 py-1 rounded-full bg-rose-100 border border-rose-200 text-rose-800 text-xs font-semibold">
                  {selectedPersona.numberTag} {selectedPersona.name}
                </span>
                <span className="text-xs text-slate-600 font-sans-app">말투: {selectedPersona.speechStyle}</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-serif-kr font-bold pure-love-text">{selectedPersona.title}</h3>
              <p className="text-sm text-slate-700 font-sans-app leading-relaxed font-normal">{selectedPersona.subtitle}</p>
            </div>

            {/* Story Prose Narrative Paragraph */}
            <div className="p-5.5 rounded-2xl bg-white border border-rose-200/80 text-sm font-serif-kr text-slate-800 leading-relaxed space-y-2 shadow-sm">
              <p>{selectedPersona.storyProse}</p>
            </div>

            {/* Behavioral Traits */}
            <div className="space-y-2.5">
              <div className="text-xs text-rose-800 font-mono-hud uppercase tracking-widest font-semibold">주요 성격 및 대표 행동</div>
              <div className="flex flex-wrap gap-2">
                {selectedPersona.traits.map((trait, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 rounded-full bg-rose-50 border border-rose-200 text-rose-800 text-xs font-semibold shadow-xs"
                  >
                    <span>{trait}</span>
                  </span>
                ))}
              </div>
            </div>

            {/* Quote Spotlight */}
            <div className="p-5.5 journal-quote relative shadow-sm space-y-2">
              <Quote className="w-9 h-9 text-rose-300/40 absolute top-3 right-4" />
              <div className="text-[11px] font-mono-hud text-rose-600 uppercase tracking-widest font-semibold">CHARACTER QUOTE</div>
              <p className="text-sm md:text-base font-serif-kr italic text-slate-900 leading-relaxed">
                {selectedPersona.quote}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
