import React from 'react';
import {
  Hospital,
  Building2,
  Scale,
  Factory,
  Layers,
  FileCode2,
  ArrowRight,
} from 'lucide-react';
import { SERVICES } from '../data/portfolioData';

interface ServicesSectionProps {
  onSelectService?: (serviceId: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'local_hospital':
        return <Hospital className="w-5 h-5 text-[#3525cd]" />;
      case 'corporate_fare':
        return <Building2 className="w-5 h-5 text-[#3525cd]" />;
      case 'gavel':
        return <Scale className="w-5 h-5 text-[#3525cd]" />;
      case 'factory':
        return <Factory className="w-5 h-5 text-[#3525cd]" />;
      case 'filter_alt':
        return <Layers className="w-5 h-5 text-[#3525cd]" />;
      case 'integration_instructions':
        return <FileCode2 className="w-5 h-5 text-[#3525cd]" />;
      default:
        return <Building2 className="w-5 h-5 text-[#3525cd]" />;
    }
  };

  const handleCardClick = (serviceId: string) => {
    if (onSelectService) {
      onSelectService(serviceId);
    }
    const contactSection = document.getElementById('aloqa');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="xizmatlar"
      className="py-20 border-b border-[#c7c4d8]/60 bg-[#f2f3ff]/40"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-14">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="font-mono text-xs uppercase tracking-widest text-[#3525cd] font-bold">
                03 / Yoʻnalishlar
              </span>
              <div className="h-px w-10 bg-[#3525cd]"></div>
            </div>
            <h2 className="font-['Plus_Jakarta_Sans'] text-3xl font-bold tracking-tight text-[#131b2e]">
              Kimlar uchun xizmat koʻrsataman?
            </h2>
          </div>
          <p className="text-sm text-[#464555] max-w-md font-normal leading-relaxed">
            Har bir sohaning oʻziga xos ehtiyojlariga moslashtirilgan, ishonchli va sotuv keltiruvchi arxitektura.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              onClick={() => handleCardClick(service.id)}
              className="bg-white border border-[#c7c4d8]/60 p-8 flex flex-col justify-between hover:border-[#3525cd] hover:shadow-sm cursor-pointer transition-all duration-200 group"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="w-10 h-10 rounded-xs border border-[#c7c4d8]/60 flex items-center justify-center text-[#3525cd] bg-[#f2f3ff] group-hover:bg-[#e2e7ff] transition-colors">
                    {getServiceIcon(service.icon)}
                  </span>
                  <span className="font-mono text-xs text-[#777587]">
                    {service.number}
                  </span>
                </div>

                <h3 className="font-['Plus_Jakarta_Sans'] text-xl font-bold text-[#131b2e] mb-3 group-hover:text-[#3525cd] transition-colors">
                  {service.title}
                </h3>

                <p className="text-sm text-[#464555] leading-relaxed mb-6 font-normal">
                  {service.description}
                </p>
              </div>

              <div>
                <div className="pt-4 border-t border-[#c7c4d8]/40 flex items-center justify-between font-mono text-xs text-[#464555]">
                  <div className="flex items-center gap-2 flex-wrap">
                    {service.tags.map((tag, tagIdx) => (
                      <span
                        key={tagIdx}
                        className="px-2 py-0.5 bg-[#f2f3ff] border border-[#c7c4d8]/40 rounded-xs text-[11px]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <span className="text-[#3525cd] text-xs font-semibold flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    Tanlash <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
