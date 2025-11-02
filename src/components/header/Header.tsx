"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { useAuth } from "@/hooks/useAuth";
import { navItems } from "@/data/navItem";
import { colors } from "@/config/colors";
import styles from "./style.module.css";

export default function Header() {
  const { user, signOut, isLoading } = useAuth();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const router = useRouter();
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSignOut = async () => {
    try {
      await signOut();
      setIsDropdownOpen(false);
      router.push('/');
    } catch (error) {
      console.error('Sign out error:', error);
    }
  };

  const handleNavigation = (path: string) => {
    setIsDropdownOpen(false);
    setIsMobileMenuOpen(false);
    router.push(path);
  };

  // Loading state
  if (isLoading) {
    return (
      <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-xl shadow-lg border-b border-primary-100' 
          : 'bg-white/90 backdrop-blur-lg'
      }`}>
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* Logo Skeleton */}
          <div className="flex items-center space-x-3">
            <div className="h-10 w-10 bg-primary-100 rounded-lg animate-pulse"></div>
            <div className="h-6 w-32 bg-primary-100 rounded animate-pulse"></div>
          </div>
          
          {/* Navigation Skeleton */}
          <div className="hidden sm:flex items-center space-x-6">
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="h-4 w-16 bg-primary-100 rounded animate-pulse"></div>
            ))}
          </div>

          {/* Auth Skeleton */}
          <div className="flex items-center space-x-4">
            <div className="h-9 w-20 bg-primary-100 rounded-md animate-pulse"></div>
            <div className="h-9 w-20 bg-primary-100 rounded-md animate-pulse"></div>
          </div>
        </div>
      </header>
    );
  }

  return (
    <>
      <header className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-white/98 backdrop-blur-xl shadow-xl py-2 border-b border-primary-100' 
          : 'bg-white/95 backdrop-blur-lg py-3'
      }`}>
        <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link href="/" className="flex items-center space-x-3 group">
              <motion.div
                whileHover={{ scale: 1.05, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Image
                  src="/logo.png"
                  alt="CodeNest Logo"
                  width={40}
                  height={40}
                  className="object-contain drop-shadow-sm"
                />
              </motion.div>
              <motion.span 
                className="text-2xl font-black tracking-tight text-primary-600 hover:text-primary-700 transition-colors"
                whileHover={{ scale: 1.02 }}
              >
                CodeNest
              </motion.span>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8" aria-label="Main navigation">
            {navItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link
                  href={item.path}
                  className={`${styles.navLink} relative text-sm font-semibold text-gray-700 transition-all duration-300 hover:text-primary-600`}
                >
                  {item.name}
                  <span className={styles.underline}></span>
                </Link>
              </motion.div>
            ))}
          </nav>

          {/* Auth Section */}
          <div className="flex items-center space-x-4">
            {user ? (
              // User is logged in - show profile dropdown
              <div className="relative" ref={dropdownRef}>
                <motion.button
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="flex items-center space-x-3 bg-primary-50 hover:bg-primary-100 rounded-2xl px-4 py-2 transition-all duration-300 shadow-sm hover:shadow-md border border-primary-100"
                >
                  {user.image ? (
                    <Image
                      src={user.image}
                      alt={user.name || 'User'}
                      width={36}
                      height={36}
                      className="rounded-full border-2 border-white shadow-sm"
                    />
                  ) : (
                    <div className="h-9 w-9 rounded-full bg-primary-500 flex items-center justify-center shadow-sm">
                      <span className="text-white text-sm font-bold">
                        {user.name?.charAt(0).toUpperCase() || 'U'}
                      </span>
                    </div>
                  )}
                  <span className="text-sm font-semibold text-gray-700 hidden sm:block max-w-32 truncate">
                    {user.name?.split(' ')[0] || 'User'}
                  </span>
                  <motion.svg
                    animate={{ rotate: isDropdownOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="h-4 w-4 text-primary-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </motion.svg>
                </motion.button>

                {/* Dropdown Menu */}
                <AnimatePresence>
                  {isDropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      className="absolute right-0 mt-3 w-64 bg-white rounded-2xl shadow-2xl py-3 z-50 border border-primary-100 overflow-hidden"
                    >
                      {/* User Info */}
                      <div className="px-4 py-3 bg-primary-50 border-b border-primary-100">
                        <p className="text-sm font-semibold text-gray-900 truncate">{user.name}</p>
                        <p className="text-xs text-gray-500 truncate mt-1">{user.email}</p>
                      </div>
                      
                      {/* Menu Items */}
                      <div className="py-2">
                        {[
                          { icon: '👤', label: 'Your Profile', path: '/profile' },
                          { icon: '📊', label: 'Dashboard', path: '/dashboard' },
                          { icon: '⚙️', label: 'Settings', path: '/dashboard/settings' },
                          { icon: '🎓', label: 'My Courses', path: '/dashboard/courses' },
                        ].map((item, index) => (
                          <motion.button
                            key={item.label}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.05 }}
                            onClick={() => handleNavigation(item.path)}
                            className="flex items-center space-x-3 w-full px-4 py-2.5 text-sm text-gray-700 hover:bg-primary-50 transition-all duration-200 group"
                          >
                            <span className="text-lg">{item.icon}</span>
                            <span className="font-medium group-hover:text-primary-600 transition-colors">
                              {item.label}
                            </span>
                          </motion.button>
                        ))}
                      </div>
                      
                      {/* Sign Out */}
                      <div className="border-t border-primary-100 pt-2">
                        <motion.button
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          onClick={handleSignOut}
                          className="flex items-center space-x-3 w-full px-4 py-2.5 text-sm text-red-600 hover:bg-red-50 transition-all duration-200 group"
                        >
                          <span className="text-lg">🚪</span>
                          <span className="font-medium">Sign out</span>
                        </motion.button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              // User is not logged in - show auth buttons
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="flex items-center space-x-3"
              >
                <Link
                  href="/login"
                  className="hidden sm:block text-sm font-semibold text-gray-700 hover:text-primary-600 transition-colors duration-300 px-4 py-2 rounded-xl hover:bg-primary-50"
                >
                  Login
                </Link>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href="/signup"
                    className="bg-primary-500 hover:bg-primary-600 text-white px-6 py-2.5 rounded-xl text-sm font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    Get Started
                  </Link>
                </motion.div>
              </motion.div>
            )}

            {/* Mobile Menu Button */}
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl bg-primary-50 hover:bg-primary-100 transition-colors duration-300"
            >
              <div className="w-6 h-6 flex flex-col justify-center space-y-1">
                <motion.span
                  animate={{ 
                    rotate: isMobileMenuOpen ? 45 : 0,
                    y: isMobileMenuOpen ? 6 : 0 
                  }}
                  className="w-full h-0.5 bg-primary-600 rounded"
                />
                <motion.span
                  animate={{ opacity: isMobileMenuOpen ? 0 : 1 }}
                  className="w-full h-0.5 bg-primary-600 rounded"
                />
                <motion.span
                  animate={{ 
                    rotate: isMobileMenuOpen ? -45 : 0,
                    y: isMobileMenuOpen ? -6 : 0 
                  }}
                  className="w-full h-0.5 bg-primary-600 rounded"
                />
              </div>
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden bg-white border-t border-primary-100 shadow-2xl"
            >
              <div className="px-4 py-6 space-y-4">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <button
                      onClick={() => handleNavigation(item.path)}
                      className="block w-full text-left py-3 px-4 text-base font-semibold text-gray-700 hover:text-primary-600 hover:bg-primary-50 rounded-xl transition-all duration-300"
                    >
                      {item.name}
                    </button>
                  </motion.div>
                ))}
                
                {!user && (
                  <div className="pt-4 border-t border-primary-100 space-y-3">
                    <button
                      onClick={() => handleNavigation('/login')}
                      className="block w-full text-center py-3 px-4 text-base font-semibold text-gray-700 hover:bg-primary-50 rounded-xl transition-colors"
                    >
                      Login
                    </button>
                    <button
                      onClick={() => handleNavigation('/signup')}
                      className="block w-full text-center py-3 px-4 text-base font-semibold text-white bg-primary-500 hover:bg-primary-600 rounded-xl shadow-lg hover:shadow-xl transition-all"
                    >
                      Get Started
                    </button>
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Spacer for fixed header */}
      <div className="h-16"></div>
    </>
  );
}