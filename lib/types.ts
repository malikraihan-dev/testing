export interface BlogPostMeta {
  slug: string;
  title: string;
  date: string;
  description: string;
  tags: string[];
  readTime: string;
}

export interface BlogPost extends BlogPostMeta {
  content: string;
}

export interface ProjectCaseStudy {
  slug: string;
  title: string;
  tagline: string;
  stack: string[];
  problem: string;
  approach: string;
  architecture: string[];
  result: string[];
  demoUrl?: string;
  repoUrl?: string;
  images?: string[];
}

export interface Certification {
  title: string;
  issuer: string;
  year: string;
  skills: string[];
  credentialUrl?: string;
}