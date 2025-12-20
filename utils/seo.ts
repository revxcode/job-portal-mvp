import { Job } from "@/types/job";

function generateJobSchema(job: Job) {
  return {
    '@context': 'https://schema.org',
    '@type': 'JobPosting',
    title: job.title,
    description: job.description,
    identifier: {
      '@type': 'PropertyValue',
      name: job.companyName,
      value: job.id,
    },
    datePosted: job.postedAt ? new Date(job.postedAt).toISOString() : undefined,
    validThrough: job.closingDate ? new Date(job.closingDate).toISOString() : undefined,
    employmentType: job.jobType,
    hiringOrganization: {
      '@type': 'Organization',
      name: job.companyName,
      logo: job.companyLogoUrl,
    },
    jobLocation: {
      '@type': 'Place',
      address: {
        '@type': 'PostalAddress',
        addressLocality: job.location,
        addressCountry: 'ID',
      },
    },
    baseSalary: {
      '@type': 'MonetaryAmount',
      currency: 'IDR',
      value: {
        '@type': 'QuantitativeValue',
        minValue: job.salaryMin,
        maxValue: job.salaryMax,
        unitText: 'MONTH',
      },
    },
  };
}

export { generateJobSchema };