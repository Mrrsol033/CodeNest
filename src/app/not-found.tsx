// src/app/not-found.tsx
import Link from "next/link";
import Image from "next/image";
import Footer from "@/components/footer/Footer"; // ✅ Keep consistent with your folder name

export default function NotFound() {
  return (
    <>
      {/* Include Header for consistent navigation */}

      <main className="flex min-h-[99vh] flex-col items-center justify-center bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 px-6 text-center">
        <Image
          src="https://cdni.iconscout.com/illustration/premium/thumb/error-404-page-not-available-illustration-svg-download-png-7706458.png"
          alt="404 Not Found Illustration"
          width={400}
          height={500}
          className="w-100"
        />

        <h2 className="mt-4 text-3xl font-semibold text-gray-800">
          Oops! Page Not Found
        </h2>
        <p className="mt-2 max-w-md text-gray-600 text-lg">
          It seems you’ve wandered outside the nest 🪶. The page you’re looking
          for doesn’t exist or is under construction.
        </p>

        <Link
          href="/"
          className="mt-8 inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-6 py-3 text-lg font-medium text-white shadow-lg transition-transform duration-300 hover:-translate-y-1 hover:scale-105 hover:bg-indigo-700"
        >
          Back to Home
        </Link>
      </main>

      <Footer />
    </>
  );
}
