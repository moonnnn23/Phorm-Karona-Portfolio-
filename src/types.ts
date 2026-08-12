export interface CareerMilestone {
  year: string;
  role: string;
  company: string;
  brands?: string[];
  focusAreas: string[];
  description?: string;
}

export interface ManagedBrand {
  id: string;
  name: string;
  category: string;
  isLaunchedByPhorm?: boolean;
  tagline: string;
  highlights: string[];
  logoText: string;
  logoUrl?: string;
  image: string;
}

export interface MarketingActivity {
  id: string;
  title: string;
  brand: string;
  category: string;
  description: string;
  photos: string[];
  metrics?: string;
}

export interface MarketingEvent {
  id: string;
  title: string;
  brand: string;
  location: string;
  date: string;
  type: 'Keynote Launch' | 'Mall Pop-up' | 'Outdoor Roadshow' | 'KOL Unboxing' | 'Automotive Launch' | 'Trade Activation';
  description: string;
  photos: string[];
  highlights: string[];
}

export interface TeamMemberRole {
  title: string;
  count: number;
  description: string;
  iconName: string;
}

export interface CapabilityCategory {
  category: string;
  icon: string;
  skills: string[];
}

export interface IndustryExperienceItem {
  industry: string;
  subCategories: string[];
  brands: string[];
  icon: string;
}

export interface Certification {
  title: string;
  issuer: string;
  badge: string;
  icon: string;
}

export interface ToolCategory {
  category: string;
  tools: { name: string; icon?: string; badge?: string }[];
}

export interface AIStrategyResponse {
  brandName: string;
  targetAudience: string;
  growthTactics: string[];
  suggestedChannels: string[];
  keyPerformanceIndicators: string[];
  phormInsight: string;
}
