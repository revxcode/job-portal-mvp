// export type JobType = 'FULL_TIME' | 'PART_TIME' | 'CONTRACT' | 'FREELANCE' | 'INTERNSHIP';
// export type WorkMode = 'ONSITE' | 'REMOTE' | 'HYBRID';

// export interface Salary {
//   min: number;
//   max: number;
//   currency: 'IDR' | 'USD';
//   isHidden: boolean;
// }

// export interface Company {
//   name: string;
//   logoUrl: string;
//   websiteUrl?: string;
// }

export interface Job {
  id: string;
  slug: string;
  title: string;
  jobType: string;
  location: string;
  description: string;
  requirements: string[] | null;
  salaryMin: number;
  salaryMax: number;
  companyName: string;
  companyLogoUrl: string;
  postedAt: Date | null;
  closingDate: Date;
  createdAt: Date | null;
  updatedAt: Date | null;
}