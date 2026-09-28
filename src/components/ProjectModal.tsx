import React from 'react';
import { X, ArrowUpRight, CheckCircle, Zap, Clock, FileText, Send, Star } from 'lucide-react';
import { ProjectItem } from '../types';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
  onOrderSimilar: (projectName: string) => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  onClose,
  onOrderSimilar,
}) => {
  if (!project) return null;

  return (
    <div
      id="project-case-modal"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-[#131b2e]/60 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative bg-white w-full max-w-4xl max-h-[90vh] overflow-y-auto border border-[#c7c4d8] shadow-2xl flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="sticky top-0 z-10 bg-white/95 backdrop-blur-md border-b border-[#c7c4d8]/60 px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="px-2.5 py-1 bg-[#eaedff] text-[#3525cd] font-mono text-xs font-semibold rounded-xs border border-[#c7c4d8]/40">
              {project.category}
            </span>
            <h3 className="font-['Plus_Jakarta_Sans'] text-xl font-bold text-[#131b2e]">
              {project.title}
            </h3>
          </div>

          <button
            id="close-modal-btn"
            type="button"
            onClick={onClose}
            className="p-1.5 rounded text-[#464555] hover:text-[#131b2e] hover:bg-[#f2f3ff] transition-colors"
            aria-label="Yopish"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 md:p-8 space-y-8">
          {/* Main Visual Showcase with High Quality Image */}
          <div className="relative border border-[#c7c4d8]/80 bg-[#f2f3ff] overflow-hidden">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-auto object-cover max-h-[440px]"
            />
            <div className="absolute bottom-3 left-3 bg-white/95 px-3 py-1 text-xs font-mono text-[#131b2e] border border-[#c7c4d8]/60 shadow-xs">
              Mijoz: {project.details.client}
            </div>
          </div>

          {/* Quick Metrics Strip */}
          <div className="grid grid-cols-3 gap-3 border border-[#c7c4d8]/60 bg-[#faf8ff] p-4 font-mono text-xs">
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-emerald-600 shrink-0" />
              <div>
                <span className="text-[#464555] block text-[11px]">PageSpeed</span>
                <span className="font-bold text-[#131b2e] text-sm">
                  {project.metrics.speedScore || 96}/100
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2 border-l border-[#c7c4d8]/40 pl-3">
              <Clock className="w-4 h-4 text-[#3525cd] shrink-0" />
              <div>
                <span className="text-[#464555] block text-[11px]">Tayyorlash muddati</span>
                <span className="font-bold text-[#131b2e] text-sm">
                  {project.metrics.completionTime || '7 kun'}
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2 border-l border-[#c7c4d8]/40 pl-3">
              <FileText className="w-4 h-4 text-[#3525cd] shrink-0" />
              <div>
                <span className="text-[#464555] block text-[11px]">Sahifalar</span>
                <span className="font-bold text-[#131b2e] text-sm">
                  {project.metrics.pagesCount || '8 sahifa'}
                </span>
              </div>
            </div>
          </div>

          {/* Challenge & Technical Solution */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-5 border border-[#c7c4d8]/60 bg-white">
              <span className="font-mono text-xs font-bold text-[#777587] uppercase tracking-wider block mb-2">
                Mijoz Vazifasi (Muammo)
              </span>
              <p className="text-sm text-[#464555] leading-relaxed">
                {project.details.challenge}
              </p>
            </div>

            <div className="p-5 border border-[#c7c4d8]/60 bg-[#faf8ff]">
              <span className="font-mono text-xs font-bold text-[#3525cd] uppercase tracking-wider block mb-2">
                Texnik Yechim
              </span>
              <p className="text-sm text-[#131b2e] leading-relaxed">
                {project.details.solution}
              </p>
            </div>
          </div>

          {/* Architecture Features */}
          <div className="space-y-3">
            <h4 className="font-['Plus_Jakarta_Sans'] text-base font-bold text-[#131b2e]">
              WordPress &amp; Elementor Pro arxitekturasi:
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {project.details.elementorFeatures.map((feat, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-2.5 text-xs text-[#131b2e] p-2.5 bg-[#f2f3ff] border border-[#c7c4d8]/40"
                >
                  <CheckCircle className="w-4 h-4 text-[#3525cd] shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Performance & Quality Note */}
          <div className="p-4 border-l-2 border-[#3525cd] bg-[#eaedff]/50 text-xs text-[#464555] leading-relaxed font-mono">
            {project.details.liveDemoNote}
          </div>
        </div>

        {/* Modal Footer */}
        <div className="sticky bottom-0 bg-[#faf8ff] border-t border-[#c7c4d8]/60 px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2 font-mono text-xs text-[#464555]">
            <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
            <span>Umar Nabiyev tomonidan toʻliq yakunlangan</span>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-xs font-medium text-[#464555] hover:text-[#131b2e] border border-[#c7c4d8] bg-white rounded-xs"
            >
              Yopish
            </button>
            <button
              type="button"
              onClick={() => {
                onOrderSimilar(project.title);
                onClose();
              }}
              className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 px-5 py-2.5 text-xs font-semibold text-white bg-[#3525cd] hover:bg-[#4f46e5] rounded-xs shadow-xs"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Oʻxshash sayt buyurtma qilish</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
