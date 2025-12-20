import { pgTable, text, timestamp, integer, uuid } from 'drizzle-orm/pg-core';

export const jobs = pgTable('jobs', {
  id: uuid('id').defaultRandom().primaryKey(),
  slug: text('slug').unique().notNull(),
  title: text('title').notNull(),
  jobType: text('job_type').notNull(),
  location: text('location').notNull(),
  description: text('description').notNull(),
  requirements: text('requirements').array(),
  salaryMin: integer('salary_min').notNull(),
  salaryMax: integer('salary_max').notNull(),
  companyName: text('company_name').notNull(),
  companyLogoUrl: text('company_logo_url').notNull(),
  postedAt: timestamp('posted_at').defaultNow(),
  closingDate: timestamp('closing_date').notNull(),
  createdAt: timestamp('created_at').defaultNow(),
  updatedAt: timestamp('updated_at').defaultNow(),
});