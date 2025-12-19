import Link from 'next/link';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { dummyJobs } from '@/lib/dummy-job';
import { formatIDR } from '@/utils/currency';
import { formatDate } from '@/utils/date';
import { generateJobSchema } from '@/utils/seo';
import { Job } from '@/types/job';
import Image from 'next/image';

interface PageProps {
  params: Promise<{ slug: string }>;
}

function getJob(slug: string): Job | undefined {
  return dummyJobs.find((j) => j.slug === slug);
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const job = getJob(slug);

  if (!job) {
    return { title: 'Lowongan Tidak Ditemukan' };
  }

  return {
    title: `${job.title} di ${job.company.name}`,
    description: `Lamar lowongan ${job.title} di ${job.company.name} sekarang. Gaji: ${formatIDR(job.salary.min, job.salary.isHidden)}.`,
    openGraph: {
      images: [job.company.logoUrl || '']
    }
  };
}

export default async function JobDetailPage({ params }: PageProps) {
  const { slug } = await params;

  const job = getJob(slug);

  if (!job) {
    notFound();
  }

  const jsonLd = generateJobSchema(job);

  return (
    <main className="min-h-screen bg-gray-50 py-10">

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="container mx-auto px-4 max-w-4xl">

        <Link href="/" className="text-gray-500 hover:text-blue-600 text-sm mb-6 inline-block font-medium">
          &larr; Kembali ke Lowongan
        </Link>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">

          <div className="p-8 border-b border-gray-100">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
              <div>
                <h1 className="text-3xl font-bold text-gray-900 mb-2">{job.title}</h1>
                <div className="flex items-center gap-2 text-gray-600 font-medium">
                  <span>{job.company.name}</span>
                  <span>&bull;</span>
                  <span>{job.location}</span>
                </div>
              </div>

              <div className="w-16 h-16 rounded-lg bg-gray-100 border border-gray-200 flex items-center justify-center overflow-hidden">
                {job.company.logoUrl ? (
                  <Image src={job.company.logoUrl} alt={job.company.name} width={200} height={200} className="w-full h-full object-contain" />
                ) : (
                  <span className="text-2xl font-bold text-gray-400">
                    {job.company.name.charAt(0)}
                  </span>
                )}
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4 mt-6">
              <span className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-semibold">
                {job.jobType.replace('_', ' ')}
              </span>
              <span className="text-gray-900 font-bold">
                {formatIDR(job.salary.min, job.salary.isHidden)}
                {!job.salary.isHidden && ' - ' + formatIDR(job.salary.max)}
                <span className="text-gray-400 font-normal text-sm"> / bulan</span>
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3">

            <div className="md:col-span-2 p-8 border-r border-gray-100">
              <h2 className="text-lg font-bold text-gray-900 mb-4">Deskripsi Pekerjaan</h2>

              <div
                className="prose max-w-none text-gray-600 leading-relaxed space-y-4"
                dangerouslySetInnerHTML={{ __html: job.description }}
              />

              <h2 className="text-lg font-bold text-gray-900 mt-8 mb-4">Persyaratan</h2>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                {job.requirements.map((req, index) => (
                  <li key={index}>{req}</li>
                ))}
              </ul>
            </div>

            <div className="p-8 bg-gray-50 flex flex-col gap-6">
              <div className="p-4 bg-white rounded-xl border border-gray-200 shadow-sm">
                <p className="text-sm text-gray-500 mb-1">Batas Lamaran</p>
                <p className="font-semibold text-gray-900">{formatDate(job.closingDate)}</p>
              </div>

              <a
                href={job.applyUrl}
                target="_blank"
                className="w-full block text-center bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-xl transition-all shadow-lg shadow-blue-200"
              >
                Lamar Sekarang
              </a>

              <p className="text-xs text-center text-gray-400">
                Hati-hati terhadap penipuan. Jangan berikan data rekening pribadi.
              </p>
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}