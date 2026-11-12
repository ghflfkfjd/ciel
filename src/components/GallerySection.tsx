import React, { useState } from 'react';
import { GALLERY_IMAGES, CielImage } from '../data/cielData';
import { Maximize2, X, Download, Quote, Sparkles, Heart } from 'lucide-react';
import { soundFx } from '../utils/sound';

export const GallerySection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedModalImage, setSelectedModalImage] = useState<CielImage | null>(null);

  const categories = [
    { key: 'all', label: `전체 보기 (${GALLERY_IMAGES.length})` },
    { key: 'fox', label: '🦊 여우짓 & 연출' },
    { key: 'public', label: '⚔️ 제국 기사단장' },
    { key: 'private', label: '☕ 일상 & 코코아' },
    { key: 'combat', label: '❄️ 전투 & 9클래스' },
    { key: 'vulnerable', label: '💓 맨얼굴 & 수줍음' },
  ];

  const filteredImages =
    activeCategory === 'all'
      ? GALLERY_IMAGES
      : GALLERY_IMAGES.filter((img) => img.category === activeCategory);

  const handleOpenModal = (img: CielImage) => {
    soundFx.playClick();
    setSelectedModalImage(img);
  };

  const handleCloseModal = () => {
    setSelectedModalImage(null);
  };

  // Helper for giving subtle random-like tilt to polaroids
  const getTiltClass = (idx: number) => {
    const tilts = ['rotate-[-1deg]', 'rotate-[1deg]', 'rotate-[-1.5deg]', 'rotate-[0.5deg]', 'rotate-0'];
    return tilts[idx % tilts.length];
  };

  const getTapeClass = (idx: number) => {
    const tapes = ['washi-tape-rose', 'washi-tape-gold', 'washi-tape-cyan', 'washi-tape'];
    return tapes[idx % tapes.length];
  };

  return (
    <section id="gallery" className="py-24 bg-cream-paper relative text-slate-800 border-b border-rose-200/60">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-rose-100/80 border border-rose-300/70 text-xs font-mono-hud text-rose-800 uppercase tracking-widest shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-rose-500" />
            <span>MEMORIES SCRAPBOOK GALLERY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif-kr font-bold text-slate-900">
            시엘의 순간들 <span className="pure-love-text">추억 앨범 갤러리</span>
          </h2>
          <p className="text-sm md:text-base text-slate-600 font-sans-app font-normal">
            제국 기사단장의 우아한 자태부터 당신 앞에서의 소중한 어리광까지, 총 {GALLERY_IMAGES.length}종의 일러스트 스크랩 컬렉션을 감상하세요.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => {
                soundFx.playClick();
                setActiveCategory(cat.key);
              }}
              className={`px-5 py-2.5 rounded-full text-xs font-semibold font-sans-app transition-all duration-300 cursor-pointer ${
                activeCategory === cat.key
                  ? 'bg-gradient-to-r from-rose-500 via-rose-400 to-amber-500 text-white shadow-[0_4px_15px_rgba(244,63,94,0.3)]'
                  : 'bg-white border border-rose-200/80 text-slate-700 hover:text-slate-900 hover:bg-rose-50/50'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Gallery Image Polaroid Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-7">
          {filteredImages.map((img, idx) => (
            <div
              key={img.id}
              onClick={() => handleOpenModal(img)}
              className={`relative ${getTiltClass(idx)} hover:rotate-0 transition-transform duration-500 cursor-pointer`}
            >
              {/* Corner Washi Tape Accent */}
              <div className={`washi-tape ${getTapeClass(idx)} -top-2 left-1/2 -translate-x-1/2 ${idx % 2 === 0 ? 'rotate-[-6deg]' : 'rotate-[5deg]'}`} />

              <div className="polaroid-card group">
                <div className="relative rounded overflow-hidden aspect-[3/4] bg-amber-50">
                  <img
                    src={img.path}
                    alt={img.title}
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />

                  {/* Soft Vignette Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent opacity-60 group-hover:opacity-85 transition-opacity" />

                  {/* Zoom Icon Badge */}
                  <div className="absolute top-2.5 right-2.5 p-1.5 rounded-full bg-white/90 text-rose-600 opacity-0 group-hover:opacity-100 transition-opacity border border-rose-200 shadow-sm z-10">
                    <Maximize2 className="w-3.5 h-3.5" />
                  </div>
                </div>

                {/* Polaroid Bottom Caption */}
                <div className="pt-2.5 pb-1 space-y-0.5">
                  <div className="text-[10px] font-mono-hud text-rose-700 uppercase tracking-widest font-semibold flex items-center gap-1">
                    <Heart className="w-2.5 h-2.5 text-rose-500 fill-rose-400" />
                    <span>{img.category}</span>
                  </div>
                  <div className="text-sm font-serif-kr font-bold text-slate-900 truncate">{img.title}</div>
                  {img.quote && (
                    <div className="text-xs text-slate-600 font-serif-kr italic line-clamp-1">
                      {img.quote}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal framed as an Art Book Reader Page */}
        {selectedModalImage && (
          <div
            className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
            onClick={handleCloseModal}
          >
            <div
              className="relative max-w-4xl w-full parchment-panel border border-rose-200/80 rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row bg-[#FFFDF8]"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Corner Washi Tape */}
              <div className="washi-tape washi-tape-rose -top-3 left-12 rotate-[-12deg]" />

              {/* Close Button */}
              <button
                onClick={handleCloseModal}
                className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-white text-slate-700 hover:text-rose-600 border border-rose-200 transition-colors cursor-pointer shadow-sm"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Image Column */}
              <div className="md:w-1/2 bg-amber-50/50 aspect-[3/4] max-h-[70vh] md:max-h-[85vh] p-4 flex items-center justify-center">
                <div className="polaroid-card w-full h-full p-2 flex items-center justify-center bg-white shadow-md">
                  <img
                    src={selectedModalImage.path}
                    alt={selectedModalImage.title}
                    className="max-w-full max-h-full object-contain rounded"
                  />
                </div>
              </div>

              {/* Info Column */}
              <div className="md:w-1/2 p-6 sm:p-8 flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <span className="stamp-badge">
                    {selectedModalImage.category}
                  </span>

                  <h3 className="text-2xl font-serif-kr font-bold pure-love-text">{selectedModalImage.title}</h3>
                  <p className="text-sm text-slate-700 font-sans-app leading-relaxed font-normal">{selectedModalImage.description}</p>

                  {selectedModalImage.quote && (
                    <div className="p-4 journal-quote text-sm font-serif-kr italic text-slate-900 space-y-1">
                      <Quote className="w-4 h-4 text-rose-500" />
                      <div>{selectedModalImage.quote}</div>
                    </div>
                  )}
                </div>

                <div className="pt-4 border-t border-rose-100 flex items-center justify-between text-xs text-slate-500">
                  <span className="font-mono-hud text-[11px] text-slate-500 truncate max-w-[180px]">{selectedModalImage.path}</span>
                  <a
                    href={selectedModalImage.path}
                    target="_blank"
                    rel="noreferrer"
                    className="px-4 py-2 rounded-full bg-gradient-to-r from-rose-500 to-amber-500 text-white font-bold font-sans-app transition-all flex items-center gap-1.5 shadow-md"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>원본 확대</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
