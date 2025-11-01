'use client';
import { useContext } from 'react';
import { AuthContext } from '@/components/context/AuthProvider';
import { signIn as nextAuthSignIn, signOut as nextAuthSignOut } from 'next-auth/react';

interface SignInCredentials {
  email: string;
  password: string;
}

interface User {
  id: string;
  email: string;
  name: string;
  image?: string;
}

interface AuthHook {
  user: User | null;
  isLoading: boolean;
  error: string | null;
  signIn: (credentials: SignInCredentials) => Promise<void>;
  signInWithGoogle: () => Promise<void>;
  signInWithGitHub: () => Promise<void>;
  signOut: () => Promise<void>;
}

export function useAuth(): AuthHook {
  const context = useContext(AuthContext);
  
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  const signIn = async ({ email, password }: SignInCredentials): Promise<void> => {
    try {
      const result = await nextAuthSignIn('credentials', {
        redirect: false,
        email,
        password,
      });

      if (result?.error) {
        throw new Error(result.error);
      }
    } catch (error) {
      throw new Error(error instanceof Error ? error.message : 'Sign in failed');
    }
  };

  const signInWithGoogle = async (): Promise<void> => {
    try {
      await nextAuthSignIn('google', { 
        redirect: true,
        callbackUrl: '/' 
      });
    } catch (error) {
      throw new Error('Google sign in failed');
    }
  };

  const signInWithGitHub = async (): Promise<void> => {
    try {
      await nextAuthSignIn('github', { 
        redirect: true,
        callbackUrl: '/' 
      });
    } catch (error) {
      throw new Error('GitHub sign in failed');
    }
  };

  const signOut = async (): Promise<void> => {
    try {
      await nextAuthSignOut({ 
        redirect: false 
      });
    } catch (error) {
      throw new Error('Sign out failed');
    }
  };

  return { 
    ...context, 
    signIn, 
    signOut, 
    signInWithGoogle, 
    signInWithGitHub 
  };
}