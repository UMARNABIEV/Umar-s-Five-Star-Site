/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { SkillsSection } from './components/SkillsSection';
import { ServicesSection } from './components/ServicesSection';
import { ProjectsSection } from './components/ProjectsSection';
import { WorkflowSection } from './components/WorkflowSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export default function App() {
  const [prefilledService, setPrefilledService] = useState<string>('landing');
  const [prefilledNote, setPrefilledNote] = useState<string>('');

  const handleSelectService = (serviceId: string) => {
    setPrefilledService(serviceId);
  };

  const handleOrderProject = (projectName: string) => {
    setPrefilledNote(`“${projectName}” loyihasiga oʻxshash veb-sayt buyurtma qilmoqchiman.`);
  };

  const handleOpenConsultation = () => {
    setPrefilledNote('Loyiha boʻyicha bepul maslahat olmoqchiman.');
  };

  return (
    <div className="min-h-screen bg-[#faf8ff] text-[#131b2e] flex flex-col font-sans selection:bg-[#3525cd] selection:text-white">
      {/* Editorial Navigation */}
      <Navbar onContactClick={handleOpenConsultation} />

      {/* Main Sections */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero onOpenConsultation={handleOpenConsultation} />

        {/* Section 01: Profile */}
        <AboutSection />

        {/* Section 02: Technologies */}
        <SkillsSection />

        {/* Section 03: Service Sectors */}
        <ServicesSection onSelectService={handleSelectService} />

        {/* Section 04: Projects Portfolio */}
        <ProjectsSection onOrderProject={handleOrderProject} />

        {/* Section 05: Workflow Process */}
        <WorkflowSection />

        {/* Section 06: Testimonials */}
        <TestimonialsSection />

        {/* Section 07: Contact & Inquiries */}
        <ContactSection
          prefilledService={prefilledService}
          prefilledNote={prefilledNote}
        />
      </main>

      {/* Editorial Footer */}
      <Footer />
    </div>
  );
}
