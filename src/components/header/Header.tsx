import Link from "next/link";
import styles from "./style.module.css";
import Image from "next/image";
import { navItems } from "@/data/navItem";


export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md shadow-md transition-all duration-300">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        
        {/* --- Logo --- */}
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="/logo.png"       // <-- your public/logo.png
            alt="CodeNest Logo"
            width={40}            // adjust the size
            height={40}           // adjust the size
            className="object-contain"
          />
          <span className="text-2xl font-extrabold tracking-tight text-indigo-600 hover:text-indigo-700 transition">
            CodeNest
          </span>
        </Link>

        {/* --- Navigation --- */}
        <nav
          className="hidden sm:flex sm:items-center sm:space-x-6 lg:space-x-10"
          aria-label="Main navigation"
        >
          {navItems.map((item,index) => (
            <Link
              key={index}
              href={item.name}
              className={`${styles.animatedUnderline} text-sm font-medium text-gray-700 transition hover:text-indigo-600`}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* --- Auth Buttons --- */}
        <div className="flex items-center space-x-4">
          <Link
            href="/login"
            className="hidden text-sm font-medium text-gray-700 transition hover:text-indigo-600 sm:block"
          >
            Login
          </Link>
          <Link
            href="/signup"
            className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-medium text-white shadow hover:bg-indigo-700  transition"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </header>
  );
}
