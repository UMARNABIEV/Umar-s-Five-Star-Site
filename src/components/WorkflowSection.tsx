import React from 'react';
import { WORKFLOW_STEPS } from '../data/portfolioData';

export const WorkflowSection: React.FC = () => {
  return (
    <section className="py-20 border-b border-[#c7c4d8]/60 bg-[#f2f3ff]/30">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-12">
        <div className="max-w-3xl mb-14">
          <div className="flex items-center gap-2 mb-2">
            <span className="font-mono text-xs uppercase tracking-widest text-[#3525cd] font-bold">
              05 / Ish Tartibi
            </span>
            <div className="h-px w-10 bg-[#3525cd]"></div>
          </div>
          <h2 className="font-['Plus_Jakarta_Sans'] text-3xl font-bold tracking-tight text-[#131b2e]">
            Loyihani qanday amalga oshiramiz?
          </h2>
          <p className="text-sm text-[#464555] mt-2 font-normal leading-relaxed">
            4 bosqichli oddiy, shaffof va oʻz vaqtida kutilgan natijani kafolatlovchi aniq tizim.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-t border-l border-[#c7c4d8]/60 shadow-xs bg-white">
          {WORKFLOW_STEPS.map((step) => (
            <div
              key={step.step}
              className="p-8 border-r border-b border-[#c7c4d8]/60 bg-white flex flex-col justify-between hover:bg-[#faf8ff] transition-colors"
            >
              <div>
                <span className="font-['Plus_Jakarta_Sans'] text-4xl font-extrabold text-[#c7c4d8]/80 block mb-6">
                  {step.step}
                </span>

                <h3 className="font-['Plus_Jakarta_Sans'] text-lg font-bold text-[#131b2e] mb-2">
                  {step.title}
                </h3>

                <p className="text-sm text-[#464555] leading-relaxed font-normal">
                  {step.description}
                </p>
              </div>

              <div className="mt-6 pt-3 border-t border-[#c7c4d8]/30 font-mono text-[11px] text-[#777587]">
                Bosqich {step.step} / 04
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
