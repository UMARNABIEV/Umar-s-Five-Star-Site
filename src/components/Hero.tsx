import React from 'react';
import { ArrowRight, Star, ExternalLink } from 'lucide-react';
import { HERO_METRICS } from '../data/portfolioData';

interface HeroProps {
  onOpenConsultation?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenConsultation }) => {
  return (
    <section
      id="bosh-sahifa"
      className="relative border-b border-[#c7c4d8]/60 overflow-hidden pt-12 md:pt-20 pb-16 md:pb-24 grid-swiss"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-12">
        <div className="flex flex-col gap-6 max-w-5xl">
          {/* Editorial Label */}
          <div className="flex flex-wrap items-center gap-3">
            <span className="font-mono text-xs uppercase tracking-widest text-[#3525cd] font-semibold px-2.5 py-1 bg-[#e2e7ff]/80 border border-[#c7c4d8]/40 rounded-xs">
              Portfolio • No. 01 / 2026
            </span>
            <span className="text-xs font-mono text-[#464555]">
              Elementor Pro &amp; WordPress Specialist
            </span>
          </div>

          {/* Monumental Headline */}
          <h1 className="font-['Plus_Jakarta_Sans'] font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-[68px] leading-[1.08] tracking-tight text-[#131b2e]">
            Biznesingiz uchun{' '}
            <span className="text-[#3525cd] italic font-['Newsreader',serif] font-normal tracking-normal">
              sotuvchi
            </span>{' '}
            va zamonaviy veb-saytlar yarataman.
          </h1>

          {/* Crisp Subtitle */}
          <p className="text-lg md:text-xl text-[#464555] max-w-3xl leading-relaxed pt-2 font-normal">
            WordPress va Elementor yordamida yuqori tezlikda yuklanuvchi, boshqaruvi qulay va
            konversiyaga moʻljallangan arxitekturani noldan quramiz.
          </p>

          {/* Action Bar */}
          <div className="pt-4 flex flex-wrap items-center gap-4">
            <a
              id="hero-consult-btn"
              href="#aloqa"
              onClick={onOpenConsultation}
              className="inline-flex items-center justify-center px-7 py-3.5 bg-[#3525cd] text-white rounded font-semibold text-sm tracking-tight hover:bg-[#4f46e5] active:scale-98 transition-all shadow-xs group"
            >
              <span>Loyiha boʻyicha maslahat olish</span>
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              id="hero-projects-btn"
              href="#loyihalar"
              className="inline-flex items-center justify-center px-6 py-3.5 bg-white text-[#131b2e] border border-[#c7c4d8]/70 rounded text-sm font-medium hover:border-[#3525cd] hover:text-[#3525cd] active:scale-98 transition-all"
            >
              <span>Loyihalarni koʻrish (15+)</span>
            </a>
          </div>
        </div>

        {/* STRUCTURAL METRICS BAR: Swiss Grid Strip */}
        <div
          id="metrics-bar"
          className="mt-16 grid grid-cols-2 md:grid-cols-4 border-t border-l border-[#c7c4d8]/60 bg-white shadow-xs"
        >
          {HERO_METRICS.map((metric, index) => (
            <div
              key={index}
              className="p-6 border-r border-b border-[#c7c4d8]/60 flex flex-col justify-between hover:bg-[#faf8ff] transition-colors"
            >
              <span className="font-mono text-xs text-[#464555] uppercase tracking-wider">
                {metric.label}
              </span>

              <div className="mt-4 flex items-baseline">
                <span
                  className={`font-['Plus_Jakarta_Sans'] text-3xl md:text-4xl font-bold tracking-tight ${
                    metric.label === 'Google PageSpeed' ? 'text-emerald-600' : 'text-[#131b2e]'
                  }`}
                >
                  {metric.value}
                </span>

                {metric.unit === '★' ? (
                  <span className="text-amber-500 font-bold text-xl ml-1 leading-none">★</span>
                ) : metric.unit === 'yil' ? (
                  <span className="text-[#3525cd] font-['Newsreader',serif] italic text-lg ml-1">
                    yil
                  </span>
                ) : metric.unit === 'sayt' ? (
                  <span className="text-[#3525cd] font-mono text-xs ml-1">sayt</span>
                ) : metric.unit === 'ball' ? (
                  <span className="text-emerald-700 font-mono text-xs ml-1">ball</span>
                ) : (
                  <span className="text-xs font-mono text-[#464555] ml-1">{metric.unit}</span>
                )}
              </div>

              <p className="text-xs text-[#464555] mt-2 font-normal">{metric.subtext}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
