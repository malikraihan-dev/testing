export interface ProjectCaseStudy {
  slug: string;
  title: string;
  tagline: string;
  stack: string[];
  problem: string;
  approach: string;
  architecture: string[];
  result: string[];
  images?: string[];
  demoUrl?: string;
  repoUrl?: string;
}

export interface Certification {
  title: string;
  issuer: string;
  year: string;
  credentialUrl?: string;
  skills: string[];
}

export interface BlogPostMeta {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
}
