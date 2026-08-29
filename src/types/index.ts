export type ProgramSlug = 
  | 'basic'
  | 'coding'
  | 'media'
  | 'sports'
  | 'project'
  | 'teacher-training';

export interface CurriculumItem {
  step: number;
  title: string;
  description: string;
  keywords?: string[];
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface Program {
  slug: ProgramSlug;
  title: string;
  englishTitle: string;
  subtitle: string;
  shortDescription: string;
  fullDescription: string;
  tags: string[];
  targetAudience: string[];
  recommendedGrade: string;
  durationExample: string;
  learningGoals: string[];
  curriculum: CurriculumItem[];
  activities: {
    title: string;
    description: string;
    icon?: string;
  }[];
  expectedOutcomes: string[];
  faq: FAQItem[];
  image: string;
  color: string;
}

export interface Achievement {
  id: string;
  year: string;
  title: string;
  subtitle?: string;
  result: string;
  role: string; // e.g. "우승팀 코치 윤현삼", "학생팀 지도"
  category: 'WORLD' | 'NATIONAL' | 'REGIONAL' | 'SCHOOL' | 'RESEARCH';
  description: string;
  studentStory: string;
  image: string;
  isWorldChampion?: boolean;
  badge?: string;
  location?: string;
}

export type PortfolioCategory = 'ALL' | 'EDUCATION' | 'CODING' | 'SPORTS' | 'MEDIA' | 'PROJECT' | 'TRAINING';

export interface PortfolioItem {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  category: PortfolioCategory;
  categoryLabel: string;
  client: string;
  period: string;
  description: string;
  challenge: string;
  solution: string;
  results: string[];
  tags: string[];
  image: string;
  featured?: boolean;
}

export type ArticleCategory = 'ALL' | 'DRONE BASIC' | 'DRONE CLASS' | 'DRONE SAFETY' | 'DRONE MEDIA' | 'DRONE FUTURE';

export interface Article {
  slug: string;
  title: string;
  excerpt: string;
  category: ArticleCategory;
  categoryLabel: string;
  date: string;
  readTime: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  tags: string[];
  image: string;
  content: {
    lead: string;
    sections: {
      heading: string;
      body: string[];
      quote?: string;
      bulletPoints?: string[];
    }[];
    conclusion: string;
  };
}

export interface PressItem {
  id: string;
  organization: string;
  title: string;
  date: string;
  description: string;
  link?: string;
  category: string;
  image: string;
  badge?: string;
}

export interface VideoItem {
  id: string;
  title: string;
  category: '배우는 드론' | '찍는 드론' | '즐기는 드론' | '수업하는 드론';
  subCategory: string;
  duration: string;
  description: string;
  youtubeUrl: string;
  thumbnail: string;
}

export interface ContactFormData {
  inquiryType: string;
  organization: string;
  name: string;
  email: string;
  phone: string;
  targetGroup: string;
  studentCount: string;
  preferredDate: string;
  sessionCount: string;
  location: string;
  message: string;
  privacyAgreed: boolean;
}
