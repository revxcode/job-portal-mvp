import { db } from './index';
import { jobs } from '@/db/schema';
import { dummyJobs } from '@/lib/dummy-job';

async function main() {
  console.log('🌱 Seeding start...');

  const dataToInsert = dummyJobs.map(job => ({
    slug: job.slug,
    title: job.title,
    jobType: job.jobType,
    location: job.location,
    description: job.description,
    requirements: job.requirements,
    salaryMin: job.salaryMin,
    salaryMax: job.salaryMax,
    companyName: job.companyName,
    companyLogoUrl: job.companyLogoUrl,
    closingDate: job.closingDate ? new Date(job.closingDate) : new Date(),
    postedAt: job.postedAt ? new Date(job.postedAt) : new Date(),
  }));

  await db.insert(jobs).values(dataToInsert);

  console.log('✅ Seeding done!');
  process.exit(0);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});