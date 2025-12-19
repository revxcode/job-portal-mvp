import { Job } from '@/types/job';

export const dummyJobs: Job[] = [
  {
    id: "1",
    slug: "senior-frontend-engineer-gojek",
    title: "Senior Frontend Engineer",
    company: {
      name: "Gojek",
      logoUrl: "https://upload.wikimedia.org/wikipedia/commons/9/91/Gojek_logo_2019.svg", // Pastikan URL valid/dummy image
      websiteUrl: "https://gojek.com"
    },
    location: "Jakarta Selatan",
    workMode: "HYBRID",
    jobType: "FULL_TIME",
    salary: {
      min: 15000000,
      max: 25000000,
      currency: "IDR",
      isHidden: false
    },
    // Description pakai HTML biar simulasi Rich Text Editor
    description: "<p>Kami mencari Frontend Engineer yang jago Next.js untuk tim GoFood.</p><p>Tanggung jawab: Optimasi performa web.</p>",
    requirements: [
      "Menguasai React.js & Next.js",
      "Paham TypeScript secara mendalam",
      "Minimal pengalaman 4 tahun"
    ],
    postedAt: "2023-12-18T09:00:00Z",
    closingDate: "2024-01-18T09:00:00Z", // Wajib buat SEO
    isFeatured: true, // Ini nanti dikasih badge "Hot Job" di UI
    applyUrl: "https://career.gojek.com"
  },
  {
    id: "2",
    slug: "laravel-backend-developer-remote",
    title: "Laravel Backend Developer",
    company: {
      name: "StartUp Maju Jalan",
      logoUrl: "https://ui-avatars.com/api/?name=StartUp+Maju&background=random", // Trik: Pake UI Avatars kalau ga ada logo
    },
    location: "Remote (Indonesia)",
    workMode: "REMOTE",
    jobType: "FREELANCE",
    salary: {
      min: 8000000,
      max: 12000000,
      currency: "IDR",
      isHidden: true // Nanti di UI tulisnya "Gaji Kompetitif"
    },
    description: "<p>Dibutuhkan backend dev untuk bantu migrasi legacy code ke Laravel 10.</p>",
    requirements: [
      "Expert di Laravel & MySQL",
      "Bisa membuat REST API yang aman",
      "Disiplin kerja remote"
    ],
    postedAt: "2023-12-17T14:00:00Z",
    closingDate: "2023-12-30T00:00:00Z",
    isFeatured: false,
    applyUrl: "mailto:hrd@majujalan.com"
  }
];