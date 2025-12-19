import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4 py-12">
      <div className="text-center max-w-md">
        <div className="mb-8">
          <p className="text-6xl font-bold text-gray-200 mb-2">404</p>
          <div className="w-12 h-1 bg-gray-200 mx-auto"></div>
        </div>
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">Halaman Tidak Ditemukan</h2>
        <p className="text-gray-500 text-sm mb-8 leading-relaxed">
          Maaf, lowongan yang kamu cari mungkin sudah dihapus atau URL-nya salah.
        </p>
        <Link
          href="/"
          className="inline-block bg-gray-900 text-white px-6 py-2.5 rounded-lg font-medium hover:bg-gray-800 transition-all duration-300 text-sm"
        >
          Kembali ke Beranda
        </Link>
      </div>
    </div>
  );
}