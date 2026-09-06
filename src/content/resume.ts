/* ============================================================
   YOUR WORDS LIVE HERE
   ------------------------------------------------------------
   This is the only file you need to edit to change the text
   on your website. Change anything between the quotes, save
   the file, and the site updates itself. Nothing else in the
   project needs to be touched.
   ============================================================ */

export const person = {
  name: 'Sahil Gohel',
  role: 'Principal Consultant — AI & Analytics',
  location: 'London, UK',
  email: 'sahilgohel91@gmail.com',
  phone: '+44 7778 157299',
  linkedin: {
    label: 'linkedin.com/in/gohelsahil',
    url: 'https://www.linkedin.com/in/gohelsahil',
  },
  github: {
    label: 'github.com/Sahil-Prometheus',
    url: 'https://github.com/Sahil-Prometheus',
  },
  // The one-sentence promise under your name.
  tagline: 'I help enterprises turn AI and analytics into outcomes people trust.',
};

export const profile = {
  heading: 'Profile',
  paragraphs: [
    'Strategic analytics and consulting leader with nine years of experience advising Fortune 50 and global enterprises across retail, FMCG, technology, and financial services.',
    'I deliver analytics transformations and AI-driven solutions that grow revenue and earn client trust — leading cross-functional teams, advising senior stakeholders, and translating complex data into decisions people act on.',
  ],
};

// The four numbers shown on the landing screen. They count up
// when the page loads. Suffix appears after the number (%, +).
export const stats = [
  { value: 9, suffix: '', label: 'Years of experience' },
  { value: 100, suffix: '%', label: 'Project renewal rate' },
  { value: 60, suffix: '%', label: 'Faster insight delivery' },
  { value: 25, suffix: '+', label: 'Specialists overseen' },
];

export interface Role {
  company: string;
  title: string;
  period: string;
  location: string;
  highlights: string[];
  // One number worth remembering from this role.
  // accent: true paints it vermillion — keep it to one role only.
  metric: { value: string; label: string; accent?: boolean };
}

export const experience: Role[] = [
  {
    company: 'Kantar',
    title: 'Principal Consultant, Analytics UK',
    period: '2023 — Present',
    location: 'London',
    highlights: [
      'Spearheaded a conversational AI solution integrating brand tracker, panel, ad spend, and sales data — owning it from sales deck and demo tools through client demos and iterative product improvement.',
      'Won three first-time client accounts (“new logos”) by converting leads and leading proposals, expanding the company’s portfolio and revenue base.',
      'Acted as the go-to resource for high-stakes sales conversations, crafting proposals and straw-man solutions for key opportunities.',
      'Led strategic data initiatives and BI automation, cutting insight delivery time by 60% and raising data adoption across global teams.',
      'Provided indirect oversight of 25+ analysts, scientists, designers, researchers, and offshore teams.',
    ],
    metric: { value: '100%', label: 'project renewal rate', accent: true },
  },
  {
    company: 'Kantar',
    title: 'Director — Data Strategy & Engineering',
    period: '2021 — 2023',
    location: 'Remote',
    highlights: [
      'Advised multiple Fortune 50 companies on data strategy, pricing, and resourcing, driving strategic decisions across global brands.',
      'Managed diverse analytics portfolios, exceeding revenue targets through innovative, scalable solutions.',
      'Led the design and adoption of advanced analytics frameworks, improving operational efficiency and client satisfaction.',
    ],
    metric: { value: 'F50', label: 'clients advised on data strategy' },
  },
  {
    company: 'Cartesian Consulting',
    title: 'Consultant',
    period: '2017 — 2021',
    location: 'Mumbai',
    highlights: [
      'Owned accounts for multi-billion-dollar clients across retail, insurance, FMCG, and automotive, aligning analytics solutions with business goals.',
      'Managed analytics teams delivering NPS improvement, demand forecasting, and personalised sales targeting.',
      'Optimised inventory for a major electronics retailer and built a Dealer Health Index for a global tractor manufacturer.',
    ],
    metric: { value: '4', label: 'industries served as account owner' },
  },
];

export interface Project {
  year: string;
  title: string;
  description: string;
}

export const projects: Project[] = [
  {
    year: '2025',
    title: 'Conversational AI pilot',
    description:
      'Rolled out a conversational AI tool built on brand tracker data for a leading client.',
  },
  {
    year: '2024',
    title: 'Connected insights ecosystem',
    description:
      'Linked brand tracker, panel, Nielsen, ad spend, and CSAT data into unified decision-making dashboards.',
  },
  {
    year: '2023',
    title: 'Portfolio optimisation',
    description:
      'Recommended Jobs-To-Be-Done to R&D teams at one of the largest tobacco and vape producers.',
  },
  {
    year: '2022',
    title: 'Hyper-personalised SKU recommendations',
    description: 'Drove retailer uptake for a global FMCG giant.',
  },
  {
    year: '2020',
    title: 'Marketing mix models',
    description: 'Optimised marketing spend for a luxury beauty retailer.',
  },
  {
    year: '2019',
    title: 'NLP-driven NPS analysis',
    description: 'Identified NPS drivers for a leading life insurance provider.',
  },
];

export interface SkillGroup {
  label: string;
  skills: string[];
}

export const expertise: SkillGroup[] = [
  {
    label: 'AI & Analytics',
    skills: [
      'AI & machine learning implementation',
      'Dashboard design',
      'Insights & storytelling',
    ],
  },
  {
    label: 'Client Craft',
    skills: [
      'Client advisory & stakeholder management',
      'Proposal development & sales enablement',
      'Solution embedding',
    ],
  },
  {
    label: 'Leadership',
    skills: [
      'Cross-functional team leadership',
      'Consensus building',
      'Conflict resolution',
    ],
  },
];

// The Skills & Stack section follows the way an AI engagement
// moves from deciding what to build, through delivery, to adoption.
export interface EngagementPhase {
  title: string;
  description: string;
  capabilities: string[];
}

export interface StackGroup {
  label: string;
  technologies: string;
}

export const skillsStack = {
  heading: 'What I do, in the order an engagement needs it',
  introduction:
    'Most AI work dies between phases — a good idea nobody can build, or a working build nobody adopts. I cover all three.',
  phases: [
    {
      title: 'Frame',
      description: 'Working out what is worth building, and what it is worth.',
      capabilities: [
        'AI opportunity assessment',
        'Analytics & measurement strategy',
        'Business cases and pricing',
        'Proposals and sales enablement',
        'Scoping and resourcing',
      ],
    },
    {
      title: 'Build',
      description: 'Getting a working thing in front of real users.',
      capabilities: [
        'Data harmonisation and governance',
        'LLM orchestration and retrieval',
        'Evaluation and model testing',
        'Prototyping and delivery',
        'Security and access review',
      ],
    },
    {
      title: 'Land',
      description: 'Making sure it is still used six months later.',
      capabilities: [
        'Solution embedding and adoption',
        'Senior stakeholder management',
        'Cross-functional team leadership',
        'Insights and storytelling',
        'Dashboards and BI automation',
      ],
    },
  ] satisfies EngagementPhase[],
  stack: [
    {
      label: 'Data and AI',
      technologies:
        'Python, SQL, Postgres, Claude API, retrieval and evaluation design, local models (Llama, Gemma, Qwen)',
    },
    {
      label: 'Build',
      technologies: 'React, TypeScript, Supabase, Vercel, GitHub CI/CD, Cursor, Figma',
    },
    {
      label: 'Enterprise',
      technologies: 'Power BI, Tableau, Azure, Microsoft 365',
    },
  ] satisfies StackGroup[],
};

export const education = {
  degrees: [
    {
      title: 'MBA',
      school: 'Indian Institute of Management',
      place: 'Rohtak, India',
      period: '2015 — 2017',
    },
    {
      title: 'B.Sc. Business Economics',
      school: 'University of Ljubljana',
      place: 'Ljubljana, Slovenia',
      period: '2011 — 2014',
    },
  ],
  certificates: [
    { title: 'HBX Core Pre-MBA', school: 'Harvard Business School', year: '2015' },
    { title: 'Big Data Research', school: 'London School of Economics', year: '2015' },
  ],
  languages: [
    { name: 'English', level: 'Native' },
    { name: 'Hindi', level: 'Native' },
    { name: 'Gujarati', level: 'Native' },
    { name: 'French', level: 'Elementary' },
  ],
};

export const contact = {
  heading: 'Let’s talk',
  note: 'I’m currently open to senior roles in AI implementation, AI product management, and analytics consulting. The best way to reach me is by email — I reply within a day.',
};
