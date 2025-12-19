import { dummyJobs } from '@/lib/dummy-job';
import { JobCard } from '@/components/JobCard';
import JobSearch from '@/components/JobSearch';

interface HomeProps {
  searchParams: Promise<{ q?: string }>
}

export default async function Home({ searchParams }: HomeProps) {
  const { q } = await searchParams;
  const query = q?.toLowerCase() || "";

  const filteredJobs = dummyJobs.filter((job) => {
    return (
      job.title.toLowerCase().includes(query) ||
      job.company.name.toLowerCase().includes(query)
    );
  });

  return (
    <main className="min-h-screen bg-gray-50">

      <div className="bg-white border-b border-gray-200 py-16 mb-12">
        <div className="container mx-auto px-4 text-center max-w-2xl">
          <h1 className="text-4xl font-bold text-gray-900 mb-3 leading-tight">
            Temukan Pekerjaan Impianmu
          </h1>
          <p className="text-base text-gray-500 mb-8">
            Lowongan kerja terkurasi untuk developer Indonesia.
          </p>
          <JobSearch />
        </div>
      </div>

      <div className="container mx-auto px-4 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">

          {filteredJobs.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>

        {filteredJobs.length === 0 && (
          <div className="text-center py-24 text-gray-400">
            <p className="text-sm font-medium">Belum ada lowongan tersedia saat ini.</p>
          </div>
        )}
      </div>
    </main>
  );
}