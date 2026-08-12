import {
  CareerMilestone,
  ManagedBrand,
  TeamMemberRole,
  CapabilityCategory,
  IndustryExperienceItem,
  Certification,
  ToolCategory
} from '../types';

export const PHORM_INFO = {
  name: 'Phorm Karona',
  title: 'DIGITAL MARKETING MANAGER',
  subtitle: 'Brand Strategist • Marketing Leader • Growth Professional',
  location: 'Phnom Penh, Cambodia',
  email: 'karonaphorm123@gmail.com',
  phone: '+855 17 932 183',
  tagline: 'Building market-leading tech brands and driving integrated growth in Cambodia.',
  experienceYears: '7+',
  brandsManagedCount: '9',
  teamMembersCount: '14',
  brandsLaunchedCount: '5',
  bio: 'A results-oriented Digital Marketing Manager with 7+ years of professional marketing experience, specializing in integrated marketing strategy, brand development, product launches, retail activations, performance marketing, influencer marketing, and business growth. Currently leading marketing operations for 9 technology brands in Cambodia while managing a 14-member multidisciplinary marketing team.'
};

export const CAREER_JOURNEY: CareerMilestone[] = [
  {
    year: '2018 – 2021',
    role: 'QUALITY ASSURANCE & QUALITY CONTROL',
    company: 'HONLY FOOD & BEVERAGE',
    focusAreas: [
      'Operations & Quality Control',
      'Quality Management Systems',
      'Standard Operating Procedures (SOP)',
      'Process Improvement & Standardization',
      'Cross-Functional Team Collaboration'
    ],
    description: 'Built operational discipline and process standardization foundational to high-stakes campaign execution.'
  },
  {
    year: '2021 – 2022',
    role: 'ASSISTANT MARKETING MANAGER',
    company: 'MEDIALOAD AGENCY',
    focusAreas: [
      'Integrated Marketing Strategy',
      'Multi-Industry Campaign Planning',
      'Influencer & KOL Relationship Management',
      'Creative Campaign Execution',
      'Project Management & Media Production'
    ],
    description: 'Spearheaded creative strategy and viral content workflows for diverse corporate agency clients.'
  },
  {
    year: '2022 – 2023',
    role: 'DIGITAL MARKETING SUPERVISOR',
    company: 'HGB GROUP',
    brands: ['BMW Cambodia', 'Mazda Cambodia', 'Kia Cambodia', 'Volvo Cars Cambodia'],
    focusAreas: [
      'Automotive Performance Marketing',
      'High-Intent Lead Generation',
      'Google Ads & Search Engine Marketing (SEM)',
      'Facebook & Meta Advertising Strategy',
      'YouTube Video Marketing & Retargeting',
      'Automotive Customer Acquisition & Showroom Traffic'
    ],
    description: 'Managed premium automotive digital ecosystems to drive high-converting lead flows into luxury showrooms.'
  },
  {
    year: '2023 – 2025',
    role: 'DIGITAL MARKETING SUPERVISOR',
    company: 'BAY OF LIGHTS ENTERTAINMENT',
    brands: [
      'Bay of Lights Entertainment',
      'Nitro Kart Circuit',
      'Sihanoukville Adventure Club',
      'Summer Bay Beach Club & Cabins',
      'Sihanoukville Marina Club',
      'Waterfront Weddings Sihanoukville'
    ],
    focusAreas: [
      'Multi-Brand Lifestyle Marketing',
      'Omnichannel Paid Advertising',
      'Social Media Growth & Content Strategy',
      'Large-Scale Event Promotion',
      'Entertainment & Hospitality Activation'
    ],
    description: 'Architected destination marketing and digital funnels across 6 premium entertainment and hospitality ventures.'
  },
  {
    year: '2025 – PRESENT',
    role: 'DIGITAL MARKETING MANAGER',
    company: 'TECH ZONE GROUP',
    brands: [
      'Tech Zone Cambodia',
      'Amazfit Cambodia',
      'Kospet Cambodia',
      'Noise Cambodia',
      'Imilab KH',
      'Cossy Cambodia',
      'Deerma KH',
      'Dreame Cambodia',
      'Navee Cambodia'
    ],
    focusAreas: [
      'Overall Brand Management & Strategy',
      'Consumer Electronics Marketing',
      'New Product Launches & Market Entry',
      'Retail & Trade Marketing Activations',
      'Omnichannel Digital Advertising',
      'KOL & Influencer Strategy',
      '14-Member Team Leadership & Business Growth'
    ],
    description: 'Leading total marketing operations for 9 consumer technology brands across retail, e-commerce, and experiential activations.'
  }
];

export const MANAGED_BRANDS: ManagedBrand[] = [
  {
    id: 'tech-zone',
    name: 'Tech Zone Cambodia',
    category: 'Consumer Tech Retail Chain',
    isLaunchedByPhorm: false,
    tagline: 'Leading consumer electronics retail ecosystem in Cambodia.',
    highlights: ['Retail Expansion', 'Brand Partnerships', 'Omnichannel Strategy'],
    logoText: 'TECH ZONE',
    image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'amazfit',
    name: 'Amazfit Cambodia',
    category: 'Smartwatches & Fitness Tech',
    isLaunchedByPhorm: false,
    tagline: 'Premium smartwatch and health tracking technology.',
    highlights: ['Keynote Product Launches', 'Influencer Endorsements', 'Retail Pop-ups'],
    logoText: 'AMAZFIT',
    image: 'https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'kospet',
    name: 'Kospet Cambodia',
    category: 'Rugged Smartwatches',
    isLaunchedByPhorm: false,
    tagline: 'Military-grade smartwatch technology for outdoor enthusiasts.',
    highlights: ['Product Launch Events', 'KOL Outdoor Testing', 'Digital Performance'],
    logoText: 'KOSPET',
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'noise',
    name: 'Noise Cambodia',
    category: 'Smart Wearables & Audio',
    isLaunchedByPhorm: false,
    tagline: 'Youth-centric smart wearables and wireless audio solutions.',
    highlights: ['TikTok Ads Expansion', 'Lifestyle Marketing', 'Mall Activations'],
    logoText: 'NOISE',
    image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'imilab',
    name: 'Imilab KH',
    category: 'Smart Home & Security',
    isLaunchedByPhorm: true,
    tagline: 'Intelligent AI home security cameras and smart living.',
    highlights: ['Cambodia Market Entry', 'Full Brand Launch', 'Trade Marketing'],
    logoText: 'IMILAB',
    image: 'https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'cossy',
    name: 'Cossy Cambodia',
    category: 'Smart Gadgets & Accessories',
    isLaunchedByPhorm: true,
    tagline: 'Innovative everyday tech accessories and gadgets.',
    highlights: ['Brand Positioning', 'Social Media Launch', 'Consignment Partners'],
    logoText: 'COSSY',
    image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'deerma',
    name: 'Deerma KH',
    category: 'Smart Home Appliances',
    isLaunchedByPhorm: true,
    tagline: 'Modern, high-design household appliances.',
    highlights: ['Product Demonstrations', 'E-Commerce Launch', 'AEON Mall Roadshows'],
    logoText: 'DEERMA',
    image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'dreame',
    name: 'Dreame Cambodia',
    category: 'Robotic Vacuums & Cleaners',
    isLaunchedByPhorm: true,
    tagline: 'Next-generation smart home cleaning robotics.',
    highlights: ['Go-To-Market Strategy', 'Premium Retail Displays', 'KOL Reviews'],
    logoText: 'DREAME',
    image: 'https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'navee',
    name: 'Navee Cambodia',
    category: 'Electric E-Scooters & Mobility',
    isLaunchedByPhorm: true,
    tagline: 'Smart urban e-mobility electric scooters.',
    highlights: ['Experiential Test Rides', 'Eden Garden Pop-Up', 'Paid Search & Meta'],
    logoText: 'NAVEE',
    image: 'https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&q=80&w=800'
  }
];

export const TEAM_STRUCTURE: TeamMemberRole[] = [
  { title: 'Assistant Marketing Manager', count: 1, description: 'Operational support, cross-brand alignment, and project execution management.', iconName: 'UserCheck' },
  { title: 'Brand Supervisors', count: 2, description: 'Direct brand portfolio management, trade partner execution, and campaign monitoring.', iconName: 'ShieldCheck' },
  { title: 'Digital Marketing Executive', count: 1, description: 'Performance ad management, budget optimization, and analytics reporting.', iconName: 'BarChart2' },
  { title: 'Content Creators', count: 5, description: 'Copywriting, TikTok content, social media storytelling, and local engagement.', iconName: 'Edit3' },
  { title: 'Graphic Designers', count: 2, description: 'Key visual creation, POSM print design, retail displays, and social media graphics.', iconName: 'Palette' },
  { title: 'Video Editors', count: 2, description: 'High-converting ad video edits, event recap reels, and YouTube commercial edits.', iconName: 'Video' },
  { title: 'Photographer & Videographer', count: 1, description: 'Product photography, event coverage, launch visuals, and studio assets.', iconName: 'Camera' }
];

export const BRAND_LAUNCH_STEPS = [
  { step: '01', title: 'Market Research', desc: 'Analyzing local Cambodian tech landscape, competitor pricing, and buyer habits.' },
  { step: '02', title: 'Brand Positioning', desc: 'Establishing unique value propositions suited for local tech adoption.' },
  { step: '03', title: 'Go-To-Market Strategy', desc: 'Formulating pricing, distribution channels, and launch timelines.' },
  { step: '04', title: 'Launch Campaign', desc: 'Orchestrating simultaneous online teasers and high-impact launch events.' },
  { step: '05', title: 'Influencer Marketing', desc: 'Partnering with top tech KOLs for authentic unboxings and reviews.' },
  { step: '06', title: 'Retail Activation', desc: 'Deploying point-of-sale materials, interactive displays, and store branding.' },
  { step: '07', title: 'Content Strategy', desc: 'Publishing localized high-definition video, feature infographics, and blogs.' },
  { step: '08', title: 'Paid Advertising', desc: 'Running targeted Meta, TikTok, and Google Ads for immediate demand capture.' },
  { step: '09', title: 'Partnership Development', desc: 'Securing retail partner consignments and corporate channel placements.' },
  { step: '10', title: 'Sales Activation', desc: 'Driving special launch promotions, bundle deals, and e-commerce conversions.' }
];

export const RETAIL_LOCATIONS = [
  { name: 'AEON Mall Phnom Penh', type: 'Flagship Retail Pop-ups & Roadshows', city: 'Phnom Penh' },
  { name: 'AEON Mall Sen Sok City', type: 'High-Traffic Consumer Tech Activations', city: 'Phnom Penh' },
  { name: 'Eden Garden', type: 'Lifestyle & Experiential Product Launches', city: 'Phnom Penh' }
];

export const RETAIL_PARTNERS = [
  { name: 'Game Land', role: 'Gaming & Gadget Retail Partner' },
  { name: 'Space Bunny', role: 'Lifestyle & Tech Accessories Partner' },
  { name: 'Retail Channel Partners', role: 'Electronics Store Consignment' },
  { name: 'Corporate Partners', role: 'B2B Tech Distribution' }
];

export const CAPABILITIES: CapabilityCategory[] = [
  {
    category: 'STRATEGY',
    icon: 'Target',
    skills: ['Marketing Strategy', 'Brand Strategy', 'Go-To-Market Strategy', 'Business Growth Strategy', 'Competitor Intelligence', 'Market Expansion']
  },
  {
    category: 'DIGITAL',
    icon: 'Globe',
    skills: ['Performance Marketing', 'Meta Ads (Facebook/IG)', 'TikTok Ads Manager', 'Google Ads (Search/Display)', 'YouTube Video Ads', 'SEO / SEM']
  },
  {
    category: 'BRAND',
    icon: 'Award',
    skills: ['Brand Management', 'Brand Positioning', 'Product Launches', 'Consumer Marketing', 'KOL & Influencer Strategy', 'Brand Identity Systems']
  },
  {
    category: 'OFFLINE',
    icon: 'ShoppingBag',
    skills: ['Retail Marketing', 'Trade Marketing', 'Pop-Up Events & Roadshows', 'In-Store Activations', 'POSM & Merchandising', 'Event Management']
  },
  {
    category: 'GROWTH',
    icon: 'TrendingUp',
    skills: ['Influencer Marketing', 'Channel Partnerships', 'E-Commerce Marketing', 'Customer Acquisition', 'Funnel Analytics & Tracking', 'ROI Optimization']
  },
  {
    category: 'LEADERSHIP',
    icon: 'Users',
    skills: ['14-Member Team Leadership', 'Budget Management & Allocation', 'Cross-Functional Collaboration', 'Agency & Vendor Management', 'SOP & Process Design']
  }
];

export const INDUSTRIES: IndustryExperienceItem[] = [
  {
    industry: 'CONSUMER TECHNOLOGY',
    subCategories: ['Smartwatches', 'Consumer Electronics', 'Smart Home Appliances', 'E-Mobility Technology'],
    brands: ['Tech Zone', 'Amazfit', 'Kospet', 'Noise', 'Imilab', 'Cossy', 'Deerma', 'Dreame', 'Navee'],
    icon: 'Cpu'
  },
  {
    industry: 'AUTOMOTIVE',
    subCategories: ['Luxury Vehicles', 'Consumer Automotive', 'Showroom Experience', 'Lead Gen'],
    brands: ['BMW Cambodia', 'Mazda Cambodia', 'Kia Cambodia', 'Volvo Cars Cambodia'],
    icon: 'Car'
  },
  {
    industry: 'ENTERTAINMENT & HOSPITALITY',
    subCategories: ['Entertainment Venues', 'Motorsport & Adventure', 'Beach Clubs & Resorts', 'Weddings & Venues'],
    brands: ['Bay of Lights', 'Nitro Kart Circuit', 'Sihanoukville Adventure Club', 'Summer Bay', 'Marina Club'],
    icon: 'Compass'
  },
  {
    industry: 'MARKETING AGENCY',
    subCategories: ['Multi-Industry Marketing', 'Viral Video Production', 'KOL Campaigns', 'Digital Strategy'],
    brands: ['Mediaload Agency Client Roster'],
    icon: 'Layers'
  },
  {
    industry: 'FOOD & BEVERAGE',
    subCategories: ['Quality Assurance', 'Operations Management', 'Process SOPs', 'Product Consistency'],
    brands: ['Honly Food & Beverage'],
    icon: 'Coffee'
  }
];

export const TOOL_CATEGORIES: ToolCategory[] = [
  {
    category: 'Advertising Platforms',
    tools: [
      { name: 'Meta Ads Manager', badge: 'Expert' },
      { name: 'TikTok Ads Manager', badge: 'Advanced' },
      { name: 'Google Ads', badge: 'Certified' },
      { name: 'YouTube Ads', badge: 'Advanced' },
      { name: 'LinkedIn Ads', badge: 'Proficient' }
    ]
  },
  {
    category: 'Analytics & Search',
    tools: [
      { name: 'Google Analytics 4', badge: 'Proficient' },
      { name: 'Google Search Console', badge: 'Proficient' },
      { name: 'Meta Pixel & Conversion API', badge: 'Expert' }
    ]
  },
  {
    category: 'Creative & Video Production',
    tools: [
      { name: 'Adobe Photoshop', badge: 'Creative' },
      { name: 'Adobe Illustrator', badge: 'Creative' },
      { name: 'Premiere Pro', badge: 'Video' },
      { name: 'CapCut Pro', badge: 'Short-Form' },
      { name: 'Canva Pro', badge: 'Layouts' }
    ]
  },
  {
    category: 'Project Management & Collaboration',
    tools: [
      { name: 'Asana', badge: 'Workflow' },
      { name: 'Jira', badge: 'Agile' },
      { name: 'Slack / Teams', badge: 'Comms' }
    ]
  },
  {
    category: 'AI Tools for Marketing',
    tools: [
      { name: 'ChatGPT', badge: 'Prompting' },
      { name: 'Gemini AI', badge: 'Strategy' },
      { name: 'Claude', badge: 'Copywriting' }
    ]
  }
];

export const CERTIFICATIONS: Certification[] = [
  { title: 'Digital Marketing Certification', issuer: 'HubSpot Academy', badge: 'HubSpot Certified', icon: 'Award' },
  { title: 'Digital Marketing Master Course', issuer: 'LinkedIn Learning', badge: 'Master Level', icon: 'CheckCircle2' },
  { title: 'SEO Professional Training', issuer: 'Udemy', badge: 'SEO Specialist', icon: 'Search' },
  { title: 'AI Tools for Marketing & Content Creation', issuer: 'Industry Professional', badge: 'AI Practitioner', icon: 'Sparkles' },
  { title: 'Diploma in Project Management', issuer: 'Alison', badge: 'Diploma Level', icon: 'Briefcase' },
  { title: 'Diploma in Google Ads', issuer: 'Alison', badge: 'Diploma Level', icon: 'Target' },
  { title: 'Fundamentals of Digital Marketing', issuer: 'Google Digital Garage', badge: 'Google Certified', icon: 'Globe' }
];

export const PHILOSOPHY_PRINCIPLES = [
  { principle: 'STRATEGY', desc: 'Build with purpose.', detail: 'Every campaign starts with clear audience insights, competitive intelligence, and measurable business objectives.' },
  { principle: 'CREATIVITY', desc: 'Make brands memorable.', detail: 'Stand out from noise with bold visual storytelling, localized content frameworks, and high-impact launch moments.' },
  { principle: 'DATA', desc: 'Make decisions with evidence.', detail: 'Continuously track conversions, CPC, CTR, CPA, and ROI to optimize performance and budget allocation.' },
  { principle: 'EXPERIENCE', desc: 'Connect digital and physical.', detail: 'Seamlessly link online advertising with mall pop-ups, retail displays, roadshows, and in-person engagement.' },
  { principle: 'GROWTH', desc: 'Turn marketing into business results.', detail: 'Marketing must directly drive sales, market share, retail distribution, and long-term customer equity.' }
];

export const VALUE_PROPOSITIONS = [
  {
    num: '01',
    title: 'STRATEGIC THINKING',
    summary: 'Turn business objectives into actionable marketing strategies.',
    detail: 'Ability to translate high-level commercial targets into clear go-to-market roadmaps, media plans, and team directives that deliver quantifiable growth.'
  },
  {
    num: '02',
    title: 'BRAND BUILDING',
    summary: 'Develop and scale brands from market entry to long-term growth.',
    detail: 'Proven track record of taking 5 international tech brands from zero awareness to leading market positions in Cambodia through integrated campaigns.'
  },
  {
    num: '03',
    title: 'FULL-FUNNEL MARKETING',
    summary: 'Connect awareness, engagement, conversion, and retention.',
    detail: 'Designing complete customer journeys across Meta, TikTok, Google, YouTube, local influencers, and physical retail touchpoints.'
  },
  {
    num: '04',
    title: 'TEAM LEADERSHIP',
    summary: 'Build multidisciplinary teams and improve execution.',
    detail: 'Directly leading and mentoring a 14-member marketing team including graphic designers, video editors, content creators, and brand supervisors.'
  },
  {
    num: '05',
    title: 'BUSINESS GROWTH',
    summary: 'Connect marketing activities with sales, customer acquisition, and business objectives.',
    detail: 'Relentlessly focused on lead generation, showroom traffic, e-commerce sales, and consignment channel expansion.'
  }
];
