import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "./HeroSection.module.css"; // import CSS module

export default function HeroSection() {
  return (
    <section className="bg-gray-50 py-12">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="max-w-4xl mx-auto mb-4 text-4xl font-bold leading-tight text-gray-900 sm:leading-tight sm:text-5xl lg:text-6xl lg:leading-tight">
            Learn to Code. <span className="text-indigo-600">Build Your Future.</span>
          </p>
          <h1 className="max-w-2xl mx-auto px-6 text-lg text-gray-600 font-inter">
            CodeNest offers interactive coding courses and projects to help you master programming and launch your tech career.
          </h1>

          {/* Custom CSS Button */}
          <div className="px-8 sm:items-start sm:justify-center sm:px-0 sm:space-x-5 sm:flex mt-9">
            <Link href="/" className={styles.button} role="button">
              Start Coding Now
               <svg viewBox="0 0 180 60" preserveAspectRatio="none">
                    <rect x="0" y="0" width="180" height="60" rx="7" ry="7"></rect>
               </svg>
            </Link>
          </div>
        </div>
      </div>

      <div className="bg-gray-50">
        <div className="relative mx-auto mt-4 md:mt-8">
          <div className="lg:max-w-4xl lg:mx-auto">
            <Image
              className="px-4 md:px-8 rounded-xl"
              src="https://images.unsplash.com/photo-1628277613967-6abca504d0ac"
              alt="Coding illustration"
              width={1200}
              height={800}
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
