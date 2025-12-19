export type JobType = 'FULL_TIME' | 'PART_TIME' | 'CONTRACT' | 'FREELANCE' | 'INTERNSHIP';
export type WorkMode = 'ONSITE' | 'REMOTE' | 'HYBRID';

export interface Salary {
  min: number;
  max: number;
  currency: 'IDR' | 'USD';
  isHidden: boolean;
}

export interface Company {
  name: string;
  logoUrl: string;
  websiteUrl?: string;
}

export interface Job {
  id: string;
  slug: string;
  title: string;
  company: Company;
  location: string;
  workMode: WorkMode;
  jobType: JobType;
  salary: Salary;
  description: string;
  requirements: string[];
  postedAt: string;
  closingDate: string;
  isFeatured: boolean;
  applyUrl: string;
}