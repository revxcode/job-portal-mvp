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
  postedAt: string | Date | null;
  closingDate: string | Date;
  createdAt: Date | null;
  updatedAt: Date | null;
}