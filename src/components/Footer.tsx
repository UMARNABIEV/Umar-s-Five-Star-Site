import React from 'react';
import { ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      id="main-footer"
      className="border-t border-[#c7c4d8]/60 bg-white py-12 text-[#464555] font-mono text-xs"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-6 text-center sm:text-left">
          <a href="#bosh-sahifa" className="font-['Plus_Jakarta_Sans'] font-bold text-lg text-[#131b2e] tracking-tight">
            umar<span className="text-[#3525cd]">.dev</span>
          </a>
          <span className="hidden sm:inline text-[#c7c4d8]">/</span>
          <span>WordPress &amp; Elementor Muhandisi</span>
          <span className="hidden sm:inline text-[#c7c4d8]">/</span>
          <span className="text-[#777587]">© 2026 Barcha huquqlar himoyalangan</span>
        </div>

        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
            <span className="text-[11px] text-[#464555]">Toshkent (UTC+5)</span>
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-[#3525cd] hover:text-[#4f46e5] font-semibold transition-colors p-1"
            aria-label="Yuqoriga qaytish"
          >
            <span>Yuqoriga</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
