import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Phone, Send } from 'lucide-react';

interface NavbarProps {
  onContactClick?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onContactClick }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('bosh-sahifa');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ['bosh-sahifa', 'mening-haqimda', 'konikmalar', 'xizmatlar', 'loyihalar', 'aloqa'];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#bosh-sahifa', label: 'Bosh sahifa', id: 'bosh-sahifa' },
    { href: '#mening-haqimda', label: 'Men haqimda', id: 'mening-haqimda' },
    { href: '#konikmalar', label: 'Koʻnikmalar', id: 'konikmalar' },
    { href: '#xizmatlar', label: 'Xizmatlar', id: 'xizmatlar' },
    { href: '#loyihalar', label: 'Loyihalar', id: 'loyihalar' },
    { href: '#aloqa', label: 'Aloqa', id: 'aloqa' },
  ];

  return (
    <>
      {/* TOP MINIMAL METADATA TICKER (SWISS EDITORIAL TOUCH) */}
      <aside
        id="top-ticker"
        className="w-full bg-[#f2f3ff] border-b border-[#c7c4d8]/40 py-1.5 px-4 text-xs font-mono text-[#464555]"
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <span className="inline-flex items-center gap-1.5 text-emerald-700 font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
              Yangi loyihalar uchun ochiq
            </span>
            <span className="hidden sm:inline text-[#777587]">|</span>
            <span className="hidden sm:inline">WordPress &amp; Elementor Expert</span>
          </div>
          <div className="flex items-center gap-4 font-mono">
            <span className="text-[#464555]">Toshkent, Oʻzbekiston</span>
            <span className="text-[#777587]">/</span>
            <a
              id="ticker-phone-link"
              className="hover:text-[#3525cd] transition-colors flex items-center gap-1"
              href="tel:+998935531330"
            >
              <Phone className="w-3 h-3 text-[#3525cd]" />
              +998 93 553 13 30
            </a>
          </div>
        </div>
      </aside>

      {/* ARCHITECTURAL HEADER */}
      <header
        id="main-header"
        className={`sticky top-0 z-40 transition-all duration-200 border-b border-[#c7c4d8]/60 ${
          scrolled ? 'bg-[#faf8ff]/95 backdrop-blur-md shadow-xs' : 'bg-[#faf8ff]/90 backdrop-blur-md'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-12 h-20 flex items-center justify-between">
          {/* Minimalist Logo */}
          <a
            id="site-logo"
            className="flex items-baseline gap-1 group"
            href="#bosh-sahifa"
          >
            <span className="font-['Plus_Jakarta_Sans'] tracking-tighter text-2xl font-bold text-[#131b2e] group-hover:text-[#3525cd] transition-colors">
              umar
            </span>
            <span className="font-mono text-sm font-semibold text-[#3525cd]">.dev</span>
            <span className="text-[10px] font-mono ml-2 px-1.5 py-0.5 rounded border border-[#c7c4d8]/60 text-[#464555] bg-white/50">
              2026
            </span>
          </a>

          {/* Clean Editorial Nav Links */}
          <nav id="desktop-nav" className="hidden md:flex items-center gap-8 text-sm font-medium tracking-tight">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  id={`nav-link-${link.id}`}
                  href={link.href}
                  className={`transition-colors relative py-1 ${
                    isActive
                      ? 'text-[#3525cd] font-semibold'
                      : 'text-[#464555] hover:text-[#131b2e]'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#3525cd] rounded-full" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Minimalist CTA & Mobile Toggle */}
          <div className="flex items-center gap-3">
            <a
              id="header-cta-button"
              className="inline-flex items-center justify-center px-5 py-2.5 rounded text-sm font-semibold tracking-tight text-white bg-[#3525cd] hover:bg-[#4f46e5] active:scale-98 transition-all shadow-xs"
              href="#aloqa"
              onClick={onContactClick}
            >
              Bogʻlanish
            </a>

            <button
              id="mobile-menu-toggle"
              type="button"
              className="md:hidden p-2 rounded text-[#131b2e] hover:bg-[#eaedff] transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Menyuni ochish"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {mobileMenuOpen && (
          <div
            id="mobile-drawer"
            className="md:hidden border-b border-[#c7c4d8] bg-[#faf8ff] px-6 py-6 space-y-4 animate-in fade-in duration-200"
          >
            <div className="flex flex-col space-y-3 font-medium text-sm">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`py-2 px-3 rounded flex items-center justify-between ${
                    activeSection === link.id
                      ? 'bg-[#eaedff] text-[#3525cd] font-semibold'
                      : 'text-[#131b2e] hover:bg-[#f2f3ff]'
                  }`}
                >
                  <span>{link.label}</span>
                  <ArrowUpRight className="w-4 h-4 text-[#777587]" />
                </a>
              ))}
            </div>

            <div className="pt-4 border-t border-[#c7c4d8]/60 flex flex-col gap-2 font-mono text-xs text-[#464555]">
              <a
                href="https://t.me/Umar_me"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-[#3525cd] font-semibold py-1"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Telegram: @Umar_me</span>
              </a>
              <a
                href="tel:+998935531330"
                className="flex items-center gap-2 py-1 text-[#131b2e]"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>+998 93 553 13 30</span>
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
