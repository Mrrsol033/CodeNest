'use client';
import { SessionProvider } from 'next-auth/react';
import AuthProvider from '@/components/context/AuthProvider';
import ThemeProvider from '@/components/context/ThemeProvider';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <SessionProvider>
      <ThemeProvider>
      <AuthProvider>
        {children}
      </AuthProvider>
      </ThemeProvider>
    </SessionProvider>
  );
}