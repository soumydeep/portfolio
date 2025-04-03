export interface Experience {
  period: string;
  role: string;
  company: string;
  description: string;
  link?: string;
}

export interface Project {
  title: string;
  description: string;
  technologies: string[];
  image: string;
  demoLink?: string;
  githubLink?: string;
  features?: string[];
  challenges?: string;
}