"use client";

import Link from "next/link";
import Image from "next/image";
import styles from "./style.module.css";
import { navItems } from "@/data/navItem";
import { useAuth } from "@/hooks/useAuth";
import { useState } from "react";

export default function Header() {
  const { user, signOut, isLoading } = useAuth();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleSignOut = async () => {
    try {
      await signOut();
      setIsDropdownOpen(false);
    } catch (error) {
      console.error('Sign out error:', error);
    }
  };

  // Don't show auth state while loading
  if (isLoading) {
    return (
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md shadow-md transition-all duration-300">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/logo.png"
              alt="CodeNest Logo"
              width={40}
              height={40}
              className="object-contain"
            />
            <span className="text-2xl font-extrabold tracking-tight text-indigo-600">
              CodeNest
            </span>
          </Link>
          
          {/* Loading skeleton */}
          <div className="flex items-center space-x-4">
            <div className="h-8 w-20 bg-gray-200 rounded-md animate-pulse"></div>
            <div className="h-8 w-20 bg-gray-200 rounded-md animate-pulse"></div>
          </div>
        </div>
      </header>
    );
  }

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md shadow-md transition-all duration-300">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="/logo.png"
            alt="CodeNest Logo"
            width={40}
            height={40}
            className="object-contain"
          />
          <span className="text-2xl font-extrabold tracking-tight text-indigo-600 hover:text-indigo-700 transition">
            CodeNest
          </span>
        </Link>

        {/* Navigation */}
        <nav className="hidden sm:flex sm:items-center sm:space-x-6 lg:space-x-10" aria-label="Main navigation">
          {navItems.map((item, index) => (
            <Link
              key={index}
              href={item.path}
              className={`${styles.animatedUnderline} text-sm font-medium text-gray-700 transition hover:text-indigo-600`}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Auth Buttons - Conditionally rendered */}
        <div className="flex items-center space-x-4">
          {user ? (
            // User is logged in - show profile dropdown
            <div className="relative">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex items-center space-x-2 bg-gray-100 hover:bg-gray-200 rounded-full px-3 py-2 transition-all duration-200"
              >
                {user.image ? (
                  <Image
                    src={user.image}
                    alt={user.name}
                    width={32}
                    height={32}
                    className="rounded-full"
                  />
                ) : (
                  <div className="h-8 w-8 rounded-full bg-indigo-600 flex items-center justify-center">
                    <span className="text-white text-sm font-medium">
                      {user.name?.charAt(0).toUpperCase()}
                    </span>
                  </div>
                )}
                <span className="text-sm font-medium text-gray-700 hidden sm:block">
                  {user.name}
                </span>
                <svg
                  className={`h-4 w-4 text-gray-500 transition-transform ${
                    isDropdownOpen ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* Dropdown Menu */}
              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-56 bg-white rounded-lg shadow-xl py-2 z-50 border border-gray-200">
                  {/* User Info */}
                  <div className="px-4 py-3 border-b border-gray-100">
                    <p className="text-sm font-medium text-gray-900 truncate">{user.name}</p>
                    <p className="text-sm text-gray-500 truncate">{user.email}</p>
                  </div>
                  
                  {/* Menu Items */}
                  <Link
                    href="/profile"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    Your Profile
                  </Link>
                  <Link
                    href="/dashboard"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    Dashboard
                  </Link>
                  <Link
                    href="/settings"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    Settings
                  </Link>
                  
                  {/* Sign Out */}
                  <div className="border-t border-gray-100 mt-2 pt-2">
                    <button
                      onClick={handleSignOut}
                      className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50 transition-colors"
                    >
                      Sign out
                    </button>
                  </div>
                </div>
              )}
            </div>
          ) : (
            // User is not logged in - show login/signup buttons
            <>
              <Link
                href="/login"
                className="hidden text-sm font-medium text-gray-700 transition hover:text-indigo-600 sm:block"
              >
                Login
              </Link>
              <Link
                href="/signup"
                className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-medium text-white shadow hover:bg-indigo-700 transition"
              >
                Sign Up
              </Link>
            </>
          )}
        </div>
      </div>

      {/* Close dropdown when clicking outside */}
      {isDropdownOpen && (
        <div 
          className="fixed inset-0 z-40" 
          onClick={() => setIsDropdownOpen(false)}
        />
      )}
    </header>
  );
}