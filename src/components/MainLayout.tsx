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

      
    </div>
  );
}
