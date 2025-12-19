import Link from 'next/link';
import Image from 'next/image';
import { Job } from '@/types/job';
import { formatIDR } from '@/utils/currency';
import { formatDate } from '@/utils/date';

const getJobTypeColor = (type: string) => {
  switch (type) {
    case 'FULL_TIME': return 'bg-blue-100 text-blue-700';
    case 'PART_TIME': return 'bg-orange-100 text-orange-700';
    case 'FREELANCE': return 'bg-purple-100 text-purple-700';
    default: return 'bg-gray-100 text-gray-700';
  }
};

interface JobCardProps {
  job: Job;
}

export const JobCard = ({ job }: JobCardProps) => {
  const companyInitial = job.company.name.charAt(0).toUpperCase();

  return (
    <Link
      href={`/jobs/${job.slug}`}
      className="block group"
    >
      <div className="bg-white border border-gray-200 rounded-lg p-5 hover:border-gray-300 hover:shadow-sm transition-all duration-300">

        <div className="flex items-start gap-3 mb-4">
          <div className="flex shrink-0">
            {job.company.logoUrl ? (
              <Image
                src={`https://ui-avatars.com/api/?name=${encodeURI(job.company.name)}&background=random`}
                alt={job.company.name}
                width={200}
                height={200}
                className="w-11 h-11 rounded-md object-contain border border-gray-100"
                unoptimized
              />
            ) : (
              <div className="w-11 h-11 rounded-md bg-linear-to-br from-gray-700 to-gray-900 flex items-center justify-center text-white font-semibold text-sm">
                {companyInitial}
              </div>
            )}
          </div>

          <div className="flex-1 min-w-0">
            <h3 className="font-semibold text-base text-gray-900 group-hover:text-gray-700 transition-colors truncate">
              {job.title}
            </h3>
            <p className="text-xs text-gray-500 mt-0.5">{job.company.name}</p>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mb-4">
          <span className={`text-xs font-medium px-2 py-1 rounded-full ${getJobTypeColor(job.jobType)}`}>
            {job.jobType.replace('_', ' ')}
          </span>

          <span className="bg-gray-50 text-gray-700 text-xs font-medium px-2 py-1 rounded-full border border-gray-200">
            {job.workMode}
          </span>
        </div>

        <div className="flex items-center justify-between pt-3 border-t border-gray-100">
          <div className="flex flex-col">
            <span className="text-xs text-gray-400 font-medium">Salary</span>
            <span className="text-sm font-semibold text-gray-900 mt-1">
              {formatIDR(job.salary.min, job.salary.isHidden)}
              {!job.salary.isHidden && ` - ${formatIDR(job.salary.max)}`}
            </span>
          </div>

          <div className="text-right">
            <span className="text-xs text-gray-400 font-medium">Posted</span>
            <p className="text-xs text-gray-600 font-medium mt-1">
              {formatDate(job.postedAt)}
            </p>
          </div>
        </div>

      </div>
    </Link>
  );
};