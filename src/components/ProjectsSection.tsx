import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';
import { ProjectItem } from '../types';
import { ProjectModal } from './ProjectModal';

interface ProjectsSectionProps {
  onOrderProject?: (projectName: string) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ onOrderProject }) => {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const filterTabs = [
    { id: 'all', label: 'Barcha loyihalar' },
    { id: 'clinic', label: 'Tibbiyot' },
    { id: 'legal', label: 'Yuridik & Korporativ' },
    { id: 'industry', label: 'Ishlab chiqarish' },
    { id: 'fiverr', label: 'Fiverr Xalqaro' },
  ];

  const filteredProjects = PROJECTS.filter((p) => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'clinic') return p.id === 'medcare-plus';
    if (activeFilter === 'legal') return p.id === 'lexconsult-legal';
    if (activeFilter === 'industry') return p.id === 'apex-manufacturing';
    if (activeFilter === 'fiverr') return p.id === 'grand-auto-logistics';
    return true;
  });

  const handleOrderSimilar = (projectName: string) => {
    if (onOrderProject) {
      onOrderProject(projectName);
    }
    const contactSec = document.getElementById('aloqa');
    if (contactSec) {
      contactSec.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <section
        id="loyihalar"
        className="py-20 border-b border-[#c7c4d8]/60 bg-[#faf8ff]"
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-12">
          {/* Header Row */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="font-mono text-xs uppercase tracking-widest text-[#3525cd] font-bold">
                  04 / Loyihalar
                </span>
                <div className="h-px w-10 bg-[#3525cd]"></div>
              </div>
              <h2 className="font-['Plus_Jakarta_Sans'] text-3xl font-bold tracking-tight text-[#131b2e]">
                Muvaffaqiyatli loyihalar
              </h2>
            </div>

            <div className="flex items-center gap-3">
              <span className="font-mono text-xs text-[#464555] border border-[#c7c4d8]/60 px-3 py-1.5 rounded-xs bg-white shadow-2xs">
                Jami: 15+ Topshirilgan sayt
              </span>
            </div>
          </div>

          {/* Filter Bar (Editorial Tabs) */}
          <div className="flex items-center gap-2 mb-8 overflow-x-auto pb-2 scrollbar-none font-mono text-xs">
            {filterTabs.map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveFilter(tab.id)}
                className={`px-3 py-1.5 rounded-xs border transition-colors whitespace-nowrap ${
                  activeFilter === tab.id
                    ? 'bg-[#3525cd] text-white border-[#3525cd] font-semibold'
                    : 'bg-white text-[#464555] border-[#c7c4d8]/60 hover:border-[#3525cd] hover:text-[#131b2e]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Projects 2-Column Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {filteredProjects.map((project) => (
              <article
                key={project.id}
                id={`project-card-${project.id}`}
                className="bg-white border border-[#c7c4d8]/70 overflow-hidden flex flex-col group hover:border-[#3525cd] hover:shadow-sm transition-all duration-300"
              >
                {/* Project Image Aspect 16:10 */}
                <div
                  className="relative overflow-hidden aspect-[16/10] bg-[#e2e7ff] border-b border-[#c7c4d8]/60 cursor-pointer"
                  onClick={() => setSelectedProject(project)}
                >
                  <img
                    alt={`${project.title} Veb-sayt dizayni`}
                    className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500 ease-out"
                    src={project.image}
                    loading="lazy"
                  />
                  <div
                    className={`absolute top-3 left-3 bg-white/95 border border-[#c7c4d8]/60 px-2.5 py-1 text-[11px] font-mono font-semibold ${
                      project.id === 'grand-auto-logistics'
                        ? 'text-emerald-800'
                        : 'text-[#131b2e]'
                    }`}
                  >
                    {project.category}
                  </div>
                </div>

                {/* Card Content Area */}
                <div className="p-8 flex flex-col justify-between flex-grow">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <h3
                        onClick={() => setSelectedProject(project)}
                        className="font-['Plus_Jakarta_Sans'] text-2xl font-bold text-[#131b2e] cursor-pointer hover:text-[#3525cd] transition-colors"
                      >
                        {project.title}
                      </h3>
                      <span
                        className={`font-mono text-xs font-semibold ${
                          project.id === 'grand-auto-logistics'
                            ? 'text-emerald-600'
                            : 'text-[#3525cd]'
                        }`}
                      >
                        {project.locationOrBadge}
                      </span>
                    </div>

                    <p className="text-sm text-[#464555] leading-relaxed mb-6 font-normal">
                      {project.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[#c7c4d8]/40 flex items-center justify-between font-mono text-xs">
                    <div className="flex items-center gap-2 text-[#464555] flex-wrap">
                      {project.tags.map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className="bg-[#f2f3ff] px-2 py-0.5 rounded-xs border border-[#c7c4d8]/40"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <button
                      type="button"
                      onClick={() => setSelectedProject(project)}
                      className="inline-flex items-center gap-1 text-[#3525cd] font-semibold hover:underline cursor-pointer py-1"
                    >
                      <span>Tafsilot</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onOrderSimilar={handleOrderSimilar}
      />
    </>
  );
};
