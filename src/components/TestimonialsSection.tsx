import React from 'react';
import { Star } from 'lucide-react';
import { TESTIMONIALS } from '../data/portfolioData';

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-20 border-b border-[#c7c4d8]/60 bg-[#faf8ff]">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-14">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="font-mono text-xs uppercase tracking-widest text-[#3525cd] font-bold">
                06 / Sharhlar
              </span>
              <div className="h-px w-10 bg-[#3525cd]"></div>
            </div>
            <h2 className="font-['Plus_Jakarta_Sans'] text-3xl font-bold tracking-tight text-[#131b2e]">
              Mijozlar nima deyishadi?
            </h2>
          </div>
          <span className="font-mono text-xs text-[#464555]">
            Fiverr va mahalliy mijozlar sharhlari
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white border border-[#c7c4d8]/60 p-8 flex flex-col justify-between hover:border-[#3525cd] transition-colors"
            >
              <div>
                {/* 5 Stars */}
                <div className="flex items-center gap-1 text-amber-500 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-500 text-amber-500" />
                  ))}
                </div>

                <blockquote className="text-sm text-[#131b2e] leading-relaxed mb-6 font-normal">
                  {testimonial.quote}
                </blockquote>
              </div>

              <div className="pt-4 border-t border-[#c7c4d8]/40 flex items-center justify-between font-mono text-xs">
                <div>
                  <span className="font-bold text-[#131b2e] block">{testimonial.name}</span>
                  <span className="text-[#464555] text-[11px]">{testimonial.role}</span>
                </div>

                {testimonial.platform === 'Fiverr' ? (
                  <span className="text-emerald-700 font-semibold bg-emerald-50 px-2 py-0.5 border border-emerald-200 rounded-xs">
                    Fiverr
                  </span>
                ) : (
                  <span className="text-[#3525cd] font-semibold bg-[#e2e7ff]/60 px-2 py-0.5 border border-[#c7c4d8]/40 rounded-xs">
                    Toshkent
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
