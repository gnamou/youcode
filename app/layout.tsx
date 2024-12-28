import { Footer } from '@/components/layout/Footer';
import { Header } from '@/components/layout/Header';
import { TailwindIndicator } from '@/components/utils/TailwindIndicator';
import { SiteConfig } from '@/lib/site-config';
import { cn } from '@/lib/utils';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { PropsWithChildren } from 'react';
import { Providers } from './Providers';
import './globals.css';
import { getServerSession } from 'next-auth';
import { authOptions } from '../pages/api/auth/[...nextauth]';

const fontSans = Inter({ subsets: ['latin'], variable: '--font-sans' });

export const metadata: Metadata = {
  title: SiteConfig.title,
  description: SiteConfig.description,
};

export default async function RootLayout({ children }: PropsWithChildren) {

  const session = await getServerSession(authOptions)
  
  return (
    <>
      <html lang="en" className="h-full" suppressHydrationWarning>
        <head />
        <body
          className={cn(
            'h-full bg-background font-sans antialiased',
            fontSans.variable
          )}
        >
          <Providers>
            <div className="relative flex min-h-screen flex-col">
              <Header />
              <div className="flex-1">{children}</div>
              <Footer />
            </div>
            <TailwindIndicator />
          </Providers>
        </body>
      </html>
    </>
  );
}