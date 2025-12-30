'use client';

import Sidebar from './Sidebar';
import MobileNav from './MobileNav';
import Link from 'next/link';

interface MainLayoutProps {
  children: React.ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="min-h-screen bg-resumify-light grid-pattern">
      {/* Mobile Navigation */}
      <MobileNav />

      {/* Sidebar - Hidden on mobile */}
      <div className="hidden lg:block">
        <Sidebar />
      </div>

      {/* Main Content Area */}
      <div className="lg:ml-80 min-h-screen pt-20 lg:pt-0">
        <div className="container mx-auto px-4 lg:px-8 lg:pr-8 py-8 lg:py-16">
          {children}
        </div>
      </div>

      {/* Framer Attribution */}
      <div className="fixed bottom-4 right-4 z-10">
        <Link
          href="https://framer.com/"
          className="flex items-center gap-2 text-sm text-resumify-gray hover:text-resumify-dark transition-colors"
          title="Custom website builder for designers, agencies and startups."
        >
          <span>Made in Framer</span>
          <svg width="12" height="12" viewBox="0 0 12 12" className="fill-current">
            <path d="M0 0h12v12H0z"/>
          </svg>
        </Link>
      </div>
    </div>
  );
}
