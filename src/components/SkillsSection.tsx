import React from 'react';
import { Code2, LayoutDashboard, Palette, Image as ImageIcon, Rocket } from 'lucide-react';
import { SKILLS } from '../data/portfolioData';

export const SkillsSection: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'code':
        return <Code2 className="w-5 h-5 text-[#3525cd]" />;
      case 'dashboard_customize':
        return <LayoutDashboard className="w-5 h-5 text-[#3525cd]" />;
      case 'palette':
        return <Palette className="w-5 h-5 text-[#3525cd]" />;
      case 'photo_library':
        return <ImageIcon className="w-5 h-5 text-[#3525cd]" />;
      case 'rocket_launch':
        return <Rocket className="w-5 h-5 text-emerald-600" />;
      default:
        return <Code2 className="w-5 h-5 text-[#3525cd]" />;
    }
  };

  return (
    <section id="konikmalar" className="py-20 border-b border-[#c7c4d8]/60 bg-[#faf8ff]">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-12">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="font-mono text-xs uppercase tracking-widest text-[#3525cd] font-bold">
                02 / Texnologiyalar
              </span>
              <div className="h-px w-10 bg-[#3525cd]"></div>
            </div>
            <h2 className="font-['Plus_Jakarta_Sans'] text-3xl font-bold tracking-tight text-[#131b2e]">
              Dasturlash va dizayn qurollarim
            </h2>
          </div>
          <span className="hidden md:inline font-mono text-xs text-[#464555] bg-[#eaedff] px-3 py-1 rounded-xs border border-[#c7c4d8]/50">
            Core Stack / Production Grade
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 border-t border-l border-[#c7c4d8]/60 shadow-xs bg-white">
          {SKILLS.map((skill) => (
            <div
              key={skill.id}
              className="p-6 border-r border-b border-[#c7c4d8]/60 bg-white flex flex-col justify-between hover:bg-[#faf8ff] group transition-colors"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-xs text-[#3525cd] font-bold">
                    {skill.number}
                  </span>
                  <div className="p-1.5 rounded bg-[#f2f3ff] group-hover:bg-[#eaedff] transition-colors">
                    {getIcon(skill.icon)}
                  </div>
                </div>

                <h3 className="font-['Plus_Jakarta_Sans'] text-lg font-bold text-[#131b2e] mb-2">
                  {skill.title}
                </h3>

                <p className="text-xs text-[#464555] leading-relaxed font-normal">
                  {skill.description}
                </p>
              </div>

              <div
                className={`mt-6 pt-3 border-t border-[#c7c4d8]/30 font-mono text-xs font-semibold ${
                  skill.accentColor || 'text-[#3525cd]'
                }`}
              >
                {skill.badge}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
