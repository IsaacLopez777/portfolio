export interface Profile {
  name: string;
  title: string;
  location: string;
  phone: string;
  email: string;
  linkedin: string;
  portfolio: string;
}

export interface Project {
  id: string;
  title: string;
  desc?: string;
  description?: string;
  technologies: string[];
  featured: boolean;
  createdAt: Date;
}

export interface Skill {
  category: string;
  technologies: string[];
}