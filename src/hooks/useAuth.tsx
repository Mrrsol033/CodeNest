'use client';
import { useContext } from 'react';
import { AuthContext } from '@/context/AuthProvider';
import { signIn as nextAuthSignIn, signOut as nextAuthSignOut } from 'next-auth/react';

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used inside AuthProvider');

  const signIn = async ( email, password) => {
    const result = await nextAuthSignIn('credentials', {
      redirect: false,
      email,
      password,
    });

    if (result?.error) {
      throw new Error(result.error);
    }

    return result;
  };

  const signInWithGoogle = async () => {
    await nextAuthSignIn('google', { redirect: true });
  };

  const signInWithGitHub = async () => {
    await nextAuthSignIn('github', { redirect: true });
  };

  const signOut = async () => {
    await nextAuthSignOut({ redirect: false });
  };

  return { ...context, signIn, signOut, signInWithGoogle, signInWithGitHub };
}

