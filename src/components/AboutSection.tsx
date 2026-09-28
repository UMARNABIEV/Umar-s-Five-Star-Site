import React from 'react';
import { Send, Phone, CheckCircle2 } from 'lucide-react';
import { UMAR_PHOTO_URL, PROFILE_STATS } from '../data/portfolioData';

export const AboutSection: React.FC = () => {
  return (
    <section
      id="mening-haqimda"
      className="py-20 border-b border-[#c7c4d8]/60 bg-[#f2f3ff]/40"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-12">
        {/* Section Tag */}
        <div className="flex items-center gap-2 mb-8">
          <span className="font-mono text-xs uppercase tracking-widest text-[#3525cd] font-bold">
            01 / Profil
          </span>
          <div className="h-px w-12 bg-[#3525cd]"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Umar Portrait Representation with Editorial Framing */}
          <div className="lg:col-span-5">
            <div className="relative bg-white p-2 border border-[#c7c4d8]/80 shadow-xs">
              <div className="overflow-hidden aspect-square bg-[#e2e7ff]">
                <img
                  alt="Umar Nabiyev — WordPress & Elementor Mutaxassisi"
                  className="w-full h-full object-cover object-center grayscale hover:grayscale-0 transition-all duration-700 ease-out"
                  src={UMAR_PHOTO_URL}
                  loading="lazy"
                />
              </div>

              <div className="p-4 bg-white border-t border-[#c7c4d8]/50 flex items-center justify-between font-mono text-xs">
                <div>
                  <span className="font-bold text-[#131b2e] block">Umar Nabiyev</span>
                  <span className="text-[#464555] text-[11px]">
                    WordPress &amp; Elementor Developer
                  </span>
                </div>

                <div className="flex items-center gap-1.5 text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-xs border border-emerald-200">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse"></span>
                  <span className="text-[10px] font-semibold">Toshkent, UZ</span>
                </div>
              </div>
            </div>
          </div>

          {/* Editorial Narrative & Background */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-6">
            <h2 className="font-['Plus_Jakarta_Sans'] text-3xl sm:text-4xl font-bold tracking-tight text-[#131b2e]">
              Salom, men Umar! Saytingizni eng yuqori darajada yaratib beraman.
            </h2>

            <p className="text-[#464555] leading-relaxed text-base sm:text-lg font-normal">
              Oʻzbekistonda yashab, butun dunyo boʻylab tadbirkorlar va kompaniyalarga WordPress
              hamda Elementor orqali oʻz bizneslarini raqamli maydonda kengaytirishga yordam beraman.
            </p>

            <p className="text-[#464555] leading-relaxed text-sm sm:text-base font-normal">
              Fiverr xalqaro platformasida 5 ta murakkab xalqaro loyihani 100% muvaffaqiyat bilan
              yakunlab, toʻliq 5 yulduzli baho olganman. Men bilan ishlashda siz shunchaki sayt
              emas, balki boshqarish oson boʻlgan qulay boshqaruv paneli, oʻta tez yuklanuvchi kod
              va doimiy texnik masʼuliyatga ega boʻlasiz.
            </p>

            {/* 4-Stat Box Micro-grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
              {PROFILE_STATS.map((stat, idx) => (
                <div
                  key={idx}
                  className="p-3.5 bg-white border border-[#c7c4d8]/60 hover:border-[#3525cd] transition-colors"
                >
                  <span className="font-mono text-[11px] text-[#464555] block uppercase">
                    {stat.label}
                  </span>
                  <span className="font-['Plus_Jakarta_Sans'] text-xl font-bold text-[#3525cd] mt-0.5 block">
                    {stat.value}
                  </span>
                </div>
              ))}
            </div>

            {/* Direct Quick Contact CTAs */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <a
                id="about-telegram-btn"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#3525cd] text-white rounded text-sm font-semibold hover:bg-[#4f46e5] active:scale-98 transition-colors shadow-xs"
                href="https://t.me/Umar_me"
                rel="noopener noreferrer"
                target="_blank"
              >
                <Send className="w-4 h-4" />
                <span>Telegramda yozish</span>
              </a>

              <a
                id="about-phone-btn"
                className="inline-flex items-center gap-2 px-5 py-3 bg-white border border-[#c7c4d8]/70 text-[#131b2e] rounded text-sm font-medium hover:border-[#3525cd] hover:text-[#3525cd] active:scale-98 transition-colors"
                href="tel:+998935531330"
              >
                <Phone className="w-4 h-4 text-[#3525cd]" />
                <span>+998 93 553 13 30</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
