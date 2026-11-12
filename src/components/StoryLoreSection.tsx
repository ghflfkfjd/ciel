import React, { useState } from 'react';
import { BookOpen, Clock, Heart, ShieldAlert, Bookmark, Sparkles } from 'lucide-react';
import { TIMELINE, SECRET_PLANS, CIEL_PROFILE } from '../data/cielData';
import { soundFx } from '../utils/sound';

export const StoryLoreSection: React.FC = () => {
  const [activePlanIdx, setActivePlanIdx] = useState<number>(0);

  const activePlan = SECRET_PLANS[activePlanIdx];

  return (
    <section id="timeline" className="py-24 bg-cream-paper relative overflow-hidden text-slate-800 border-b border-rose-200/60">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-rose-100/80 border border-rose-300/70 text-xs font-mono-hud text-rose-800 uppercase tracking-widest shadow-sm">
            <BookOpen className="w-3.5 h-3.5 text-rose-500" />
            <span>NARRATIVE CHRONICLE &amp; SECRET DIARY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif-kr font-bold text-slate-900">
            10년의 인연, 그리고 <span className="pure-love-text">침대 밑 비밀 공략집</span>
          </h2>
          <p className="text-sm md:text-base text-slate-600 font-sans-app font-normal">
            시엘이 왜 허술한 척을 연출할 수밖에 없는지, 10년 전 신발끈의 첫 기억부터 
            그녀가 소중하게 숨겨둔 연애 공략 지침서까지의 서사를 다룹니다.
          </p>
        </div>

        {/* 1. Timeline Chronology */}
        <div className="mb-20">
          <h3 className="text-xl font-serif-kr font-bold pure-love-text mb-8 flex items-center gap-2.5">
            <Clock className="w-5 h-5 text-rose-500" />
            <span>시엘과 Ⓤ의 10년 서사 연표</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {TIMELINE.map((event, idx) => (
              <div
                key={idx}
                className="p-6 parchment-panel hover:border-rose-300 transition-all space-y-3 relative group shadow-sm hover-paper-lift"
              >
                <div className="text-2xl font-bold font-cinzel text-rose-600">{event.age}</div>
                <div>
                  <h4 className="text-base font-serif-kr font-bold text-slate-900 group-hover:text-rose-600 transition-colors">
                    {event.title}
                  </h4>
                  <div className="text-[11px] text-rose-700 font-mono-hud font-medium mt-0.5">{event.subtitle}</div>
                </div>
                <p className="text-xs text-slate-600 font-sans-app leading-relaxed font-normal">{event.description}</p>
                <div className="pt-3 border-t border-rose-100 text-[11px] font-sans-app text-rose-900 leading-relaxed font-medium">
                  💡 <span className="font-semibold text-rose-700">서사적 영향:</span> {event.impact}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 2. Grid: Secret Manual 《소꿉친구 공략 지침서》 & Emotional Signals */}
        <div id="secret" className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start pt-6">
          {/* Left Column: Bedside Secret Manual Reader */}
          <div className="lg:col-span-7 rounded-3xl p-6 sm:p-8 parchment-panel-gold border border-amber-300/70 shadow-lg relative">
            {/* Corner Washi Tape */}
            <div className="washi-tape washi-tape-gold -top-3 left-10 rotate-[-8deg]" />

            <div className="flex items-center justify-between mb-6 pb-4 border-b border-amber-200">
              <div className="flex items-center gap-2.5">
                <Bookmark className="w-5 h-5 text-amber-600" />
                <div>
                  <h4 className="text-lg font-serif-kr font-bold text-slate-900">《소꿉친구 공략 지침서》</h4>
                  <div className="text-xs text-amber-800 font-mono-hud font-medium">시엘이 침대 밑에 몰래 숨겨둔 비밀 노트</div>
                </div>
              </div>

              <span className="px-3.5 py-1 rounded-full bg-amber-100 border border-amber-300 text-xs font-mono-hud font-bold text-amber-900">
                제 {activePlan.number} 항
              </span>
            </div>

            {/* Notebook Content Viewer */}
            <div className="space-y-6">
              <div className="p-6 rounded-2xl bg-white border border-amber-200/80 space-y-4 shadow-xs">
                <div className="text-base font-serif-kr font-bold text-amber-900 flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500 shadow-[0_0_8px_rgba(245,158,11,0.6)]" />
                  <span>{activePlan.title}</span>
                </div>
                <p className="text-sm text-slate-800 font-serif-kr leading-relaxed italic p-4.5 rounded-xl bg-amber-50/70 border border-amber-200/60">
                  “{activePlan.content}”
                </p>
                <div className="pt-2 text-xs text-slate-700 font-sans-app leading-relaxed">
                  📌 <span className="font-semibold text-amber-800">시엘의 자체 실행 평가:</span> {activePlan.result}
                </div>
              </div>

              {/* Plan Switcher Tabs */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                {SECRET_PLANS.map((plan, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      soundFx.playClick();
                      setActivePlanIdx(idx);
                    }}
                    className={`p-3 rounded-xl text-xs font-semibold font-mono-hud transition-all text-center cursor-pointer ${
                      activePlanIdx === idx
                        ? 'bg-amber-400 text-slate-950 font-bold shadow-sm border border-amber-500'
                        : 'bg-white border border-amber-200 text-slate-700 hover:text-slate-900'
                    }`}
                  >
                    제 {plan.number} 항
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Emotional Signals & World Lore */}
          <div className="lg:col-span-5 space-y-6">
            {/* Emotional Signals Card */}
            <div className="p-6 sm:p-8 rounded-3xl parchment-panel-rose border border-rose-200/80 space-y-5 shadow-lg">
              <h4 className="text-lg font-serif-kr font-bold text-slate-900 flex items-center gap-2">
                <Heart className="w-5 h-5 text-rose-500 fill-rose-400" />
                <span>시엘의 감정 신호 가이드</span>
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed font-normal">
                시엘의 감정은 말보다 특유의 신체 반응과 마력 변화로 먼저 드러납니다.
              </p>

              <div className="space-y-3">
                {CIEL_PROFILE.emotionalSignals.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl bg-white border border-rose-100 flex items-start gap-3 shadow-xs"
                  >
                    <span className="w-2 h-2 rounded-full bg-rose-400 mt-1.5 shrink-0" />
                    <div className="text-xs">
                      <div className="font-bold text-rose-800 font-serif-kr">{item.signal}</div>
                      <div className="text-slate-600 mt-0.5 font-normal">{item.meaning}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* World Companions */}
            <div className="p-6 rounded-3xl parchment-panel border border-amber-200/80 space-y-4 shadow-sm">
              <h4 className="text-base font-serif-kr font-bold pure-love-text flex items-center gap-2">
                <ShieldAlert className="w-4 h-4 text-rose-500" />
                <span>세계관 &amp; 주위 동료</span>
              </h4>

              <div className="space-y-3 text-xs text-slate-700">
                <div className="p-3 rounded-xl bg-white border border-amber-100">
                  <span className="font-bold text-rose-800 font-serif-kr">레온 하르트 (31세 부단장):</span>
                  <span className="text-slate-600 ml-1.5 font-normal">
                    정중한 존댓말을 쓰며 시엘의 비밀 동거를 수습하고 은폐해줌. 잦은 위장병 보유.
                  </span>
                </div>

                <div className="p-3 rounded-xl bg-white border border-amber-100">
                  <span className="font-bold text-rose-800 font-serif-kr">푸딩이 (집 고양이):</span>
                  <span className="text-slate-600 ml-1.5 font-normal">
                    시엘의 감정 마력 유출에 반응하여 동실동실 둥둥 뜨는 귀여운 집 고양이.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
