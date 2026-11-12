import React, { useState, useEffect } from 'react';
import { Shield, Heart, Snowflake, Flame, Quote, ChevronRight, Sparkles, Bookmark } from 'lucide-react';
import { CIEL_PROFILE } from '../data/cielData';
import { soundFx } from '../utils/sound';

interface HeroSectionProps {
  onScrollToSection: (id: string) => void;
}

const HERO_PORTRAITS = [
  {
    path: '/assets/aistudio/1___2_bcb48e79.png',
    tag: '여우 같은 소꿉친구',
    title: '신발끈이 또 풀렸단 말이야...',
    quote: '“어라... 멍청아, 신발끈이 또 풀렸단 말이야... 나 손 얼어서 안 묶어지는데, 다정하게 묶어줄 거지?”',
  },
  {
    path: '/assets/aistudio/1____3_e0d3814a.png',
    tag: '청성 기사단장',
    title: '제국 최연소 9클래스 지휘관',
    quote: '“북방 마수 동향 보고를 검토 중이다. 단장으로서 그 어떤 위협도 허용하지 않는다.”',
  },
  {
    path: '/assets/aistudio/1____d29c77e0.webp',
    tag: '대륙 유일 대마법사',
    title: '백&흑 양극체질의 영웅',
    quote: '“전 부대, 마법 장벽 전개! 청성 기사단이 이 영토를 끝까지 수호한다!”',
  },
  {
    path: '/assets/aistudio/1___63bf295b.webp',
    tag: '방어막이 무너진 순간',
    title: '당신의 품에서만 허락되는 맨얼굴',
    quote: '“...오늘은 좀 지치네. 미안해, 연기도 못하겠어... 그냥 옆에 조금만 있어 주면 안 돼?”',
  },
];

export const HeroSection: React.FC<HeroSectionProps> = ({ onScrollToSection }) => {
  const [activeIdx, setActiveIdx] = useState<number>(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % HERO_PORTRAITS.length);
    }, 6500);
    return () => clearInterval(timer);
  }, []);

  const currentPortrait = HERO_PORTRAITS[activeIdx];

  return (
    <section id="hero" className="relative pt-10 pb-20 md:py-24 overflow-hidden bg-cream-paper text-slate-800">
      {/* Delicate Vignette Lighting & Subtle Warm Sunbeam Overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="absolute top-10 left-10 w-[500px] h-[500px] bg-amber-200/40 rounded-full blur-[110px]" />
        <div className="absolute bottom-10 right-1/4 w-[550px] h-[550px] bg-rose-200/50 rounded-full blur-[120px]" />
      </div>

      <div id="profile" className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Top Kicker Stamp Label */}
        <div className="flex items-center gap-3 mb-8">
          <span className="stamp-badge shadow-sm">
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-400/40" />
            PURE LOVE STORYBOOK · 01
          </span>
          <span className="text-slate-400 text-xs font-mono-hud">/</span>
          <span className="text-xs font-serif-kr text-slate-500 italic">“10년 동안 당신만을 바라본 기사단장의 은밀한 기록”</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Title Prose & Parchment Cards */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif-kr font-bold tracking-tight text-slate-900 leading-[1.25]">
                완벽한 기사단장의 <br />
                <span className="pure-love-text">
                  은밀하고 달콤한 어리광
                </span>
              </h1>
              <p className="text-base md:text-lg text-slate-700 font-sans-app leading-relaxed max-w-2xl font-normal">
                21세 최연소 단장에 오른 대륙 유일의 9클래스 대마법사 <strong className="text-rose-700 font-semibold">시엘</strong>. 
                공적으로는 얼음처럼 서늘한 지휘관이지만, 10년 지기 소꿉친구인 당신 앞에서는 
                일부러 신발끈을 못 묶는 척하며 온기를 갈구하는 귀엽고 사랑스러운 여우가 됩니다.
              </p>
            </div>

            {/* Quotation Highlight Card - Journal Quote */}
            <div className="p-6.5 journal-quote relative shadow-sm space-y-3">
              <Quote className="w-10 h-10 text-rose-300/30 absolute top-4 right-4" />
              <div className="flex items-center gap-2.5 text-xs font-mono-hud">
                <span className="px-3 py-1 rounded-full bg-rose-100 text-rose-800 font-semibold border border-rose-200">
                  {currentPortrait.tag}
                </span>
                <span className="text-slate-600">· {currentPortrait.title}</span>
              </div>
              <p className="text-base font-serif-kr italic text-slate-900 leading-relaxed pt-1">
                {currentPortrait.quote}
              </p>
            </div>

            {/* Spec Parchment Cards Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5">
              <div className="p-4 parchment-panel hover-paper-lift">
                <div className="text-[11px] text-rose-700 mb-1 flex items-center gap-1.5 font-mono-hud font-medium">
                  <Shield className="w-3.5 h-3.5 text-rose-500" />
                  <span>신분 &amp; 계급</span>
                </div>
                <div className="text-xs font-bold text-slate-900 truncate font-serif-kr">{CIEL_PROFILE.role}</div>
              </div>

              <div className="p-4 parchment-panel hover-paper-lift">
                <div className="text-[11px] text-amber-700 mb-1 flex items-center gap-1.5 font-mono-hud font-medium">
                  <Snowflake className="w-3.5 h-3.5 text-amber-600" />
                  <span>마법 수준</span>
                </div>
                <div className="text-xs font-bold text-slate-900 truncate font-serif-kr">9클래스 백&amp;흑 양극체질</div>
              </div>

              <div className="p-4 parchment-panel-rose hover-paper-lift">
                <div className="text-[11px] text-rose-700 mb-1 flex items-center gap-1.5 font-mono-hud font-medium">
                  <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-400" />
                  <span>관계 &amp; 성격</span>
                </div>
                <div className="text-xs font-bold text-slate-900 truncate font-serif-kr">10년 소꿉친구 (INFJ-D)</div>
              </div>

              <div className="p-4 parchment-panel-gold hover-paper-lift">
                <div className="text-[11px] text-amber-800 mb-1 flex items-center gap-1.5 font-mono-hud font-medium">
                  <Flame className="w-3.5 h-3.5 text-amber-600" />
                  <span>비밀 동거</span>
                </div>
                <div className="text-xs font-bold text-slate-900 truncate font-serif-kr">당신의 집 눌러앉음 🤫</div>
              </div>
            </div>

            {/* Navigation Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={() => {
                  soundFx.playClick();
                  onScrollToSection('persona');
                }}
                className="px-7 py-3.5 rounded-full text-xs font-semibold tracking-wider uppercase text-white bg-gradient-to-r from-rose-500 via-rose-400 to-amber-500 shadow-[0_4px_18px_rgba(244,63,94,0.35)] hover:shadow-[0_6px_25px_rgba(244,63,94,0.5)] transition-all flex items-center gap-2 cursor-pointer active:scale-95"
              >
                <span>3가지 페르소나 펼치기</span>
                <ChevronRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => {
                  soundFx.playClick();
                  onScrollToSection('timeline');
                }}
                className="px-6 py-3.5 rounded-full text-xs font-semibold tracking-wider text-slate-700 bg-white border border-rose-200 hover:border-rose-400 hover:text-rose-600 transition-all cursor-pointer shadow-sm font-sans-app"
              >
                10년의 서사 연표
              </button>
            </div>
          </div>

          {/* Right Column: Physical Polaroid Scrapbook Photo Card */}
          <div className="lg:col-span-5 relative">
            {/* Polaroid Frame with Realistic Washi Tape Corner Accents */}
            <div className="relative rotate-[-1deg] hover:rotate-0 transition-transform duration-500">
              {/* Top-Left Washi Tape Strip */}
              <div className="washi-tape washi-tape-rose -top-3 -left-4 rotate-[-25deg]" />
              {/* Top-Right Washi Tape Strip */}
              <div className="washi-tape washi-tape-gold -top-3 -right-4 rotate-[20deg]" />

              <div className="polaroid-card group">
                <div className="relative rounded overflow-hidden aspect-[3/4] bg-amber-50">
                  <img
                    src={currentPortrait.path}
                    alt={currentPortrait.title}
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent" />

                  {/* Top Stamp Tag */}
                  <div className="absolute top-3 left-3 z-10">
                    <span className="px-3 py-1 rounded-full text-[11px] font-bold bg-white/95 text-rose-700 border border-rose-200 shadow-md">
                      {currentPortrait.tag}
                    </span>
                  </div>
                </div>

                {/* Polaroid Caption Area */}
                <div className="pt-3.5 pb-1 px-1 flex items-center justify-between">
                  <div>
                    <div className="text-[10px] font-mono-hud text-rose-600 uppercase tracking-widest font-semibold flex items-center gap-1">
                      <Sparkles className="w-3 h-3 text-rose-400" />
                      MEMORIES OF CIEL
                    </div>
                    <div className="text-base font-serif-kr font-bold text-slate-900 mt-0.5">{currentPortrait.title}</div>
                  </div>

                  <div className="w-8 h-8 rounded-full bg-rose-100 border border-rose-300 flex items-center justify-center text-rose-600 shrink-0">
                    <Heart className="w-4 h-4 fill-rose-500 text-rose-500" />
                  </div>
                </div>
              </div>
            </div>

            {/* Thumbnail Selectors */}
            <div className="flex items-center justify-center gap-3 mt-6">
              {HERO_PORTRAITS.map((p, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    soundFx.playClick();
                    setActiveIdx(idx);
                  }}
                  className={`relative w-14 h-18 rounded-md overflow-hidden border-2 transition-all cursor-pointer shadow-sm ${
                    activeIdx === idx
                      ? 'border-rose-500 scale-105 shadow-[0_4px_15px_rgba(244,63,94,0.35)]'
                      : 'border-slate-200 opacity-60 hover:opacity-100'
                  }`}
                >
                  <img src={p.path} alt={p.title} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
