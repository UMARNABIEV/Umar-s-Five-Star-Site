export interface MetricItem {
  label: string;
  value: string;
  unit?: string;
  subtext: string;
  isAccent?: boolean;
}

export interface SkillItem {
  id: string;
  number: string;
  title: string;
  description: string;
  badge: string;
  icon: string;
  accentColor?: string;
}

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  description: string;
  tags: string[];
  icon: string;
  estimatedTimeline?: string;
  deliverables?: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  clientType: string;
  locationOrBadge: string;
  description: string;
  image: string;
  tags: string[];
  metrics: {
    speedScore?: number;
    completionTime?: string;
    pagesCount?: string;
  };
  details: {
    client: string;
    challenge: string;
    solution: string;
    elementorFeatures: string[];
    performanceHighlights: string[];
    liveDemoNote?: string;
  };
}

export interface WorkflowStep {
  step: string;
  title: string;
  description: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  location: string;
  quote: string;
  platform: 'Fiverr' | 'Toshkent' | 'Mahalliy';
  rating: number;
}

export interface ContactSubmission {
  id: string;
  name: string;
  contact: string;
  serviceType: string;
  message: string;
  submittedAt: string;
}
