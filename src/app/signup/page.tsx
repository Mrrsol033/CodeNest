'use client';

import { useAuth } from '@/hooks/useAuth';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function SignupPage() {
  const { user, signInWithGoogle, signInWithGitHub, isLoading } = useAuth();
  const router = useRouter();
  const [error, setError] = useState('');

  useEffect(() => {
    if (user) {
      router.push('/');
    }
  }, [user, router]);

  const handleSocialSignup = async (provider: 'google' | 'github') => {
    setError('');
    try {
      if (provider === 'google') {
        await signInWithGoogle();
      } else {
        await signInWithGitHub();
      }
    } catch (error) {
      setError((error as Error).message);
    }
  };

  if (user) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600 mx-auto"></div>
          <p className="mt-4">Redirecting...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Create your account
          </h2>
        </div>
        
        {error && (
          <div className="bg-red-50 border border-red-200 rounded-md p-4">
            <p className="text-red-600 text-sm text-center">{error}</p>
          </div>
        )}

        <div className="mt-8 space-y-4">
          <button
            onClick={() => handleSocialSignup('google')}
            disabled={isLoading}
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50"
          >
            Sign up with Google
          </button>

          <button
            onClick={() => handleSocialSignup('github')}
            disabled={isLoading}
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 disabled:opacity-50"
          >
            Sign up with GitHub
          </button>
        </div>

        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600">
            Already have an account?{' '}
            <Link href="/login" className="font-medium text-indigo-600 hover:text-indigo-500">
              Sign in
            </Link>
          </p>
        </div>

        <div className="text-center">
          <Link href="/" className="text-sm text-gray-500 hover:text-gray-700">
            ← Back to home
          </Link>
        </div>
      </div>
    </div>
  );
}