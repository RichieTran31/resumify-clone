'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const navItems = [
  { href: '/', icon: '/aboutme.svg', label: 'About Me' },
  { href: '/resume', icon: '/resume.svg', label: 'Resume' },
  { href: '/portfolio', icon: '/portfolio.svg', label: 'Portfolio' },
  { href: '/contact', icon: '/contact.svg', label: 'Contact' },
];

export default function MobileNav() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="lg:hidden">
      {/* Mobile Header */}
      <div className="fixed top-0 left-0 right-0 bg-resumify-pink text-white z-50 px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Image
              src="/_Richie Tran.jpg"
              alt="Richie Tran"
              width={40}
              height={40}
              className="w-10 h-10 rounded-full border-2 border-white object-cover"
            />
            <div>
              <h1 className="font-semibold">Richie Tran</h1>
              <p className="text-sm text-white/80">Data Analyst</p>
            </div>
          </div>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="fill-current">
              <path d="M3 12h18M3 6h18M3 18h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/50 z-40" onClick={() => setIsOpen(false)} />
      )}

      {/* Mobile Menu */}
      <div className={`fixed top-0 right-0 h-full w-64 bg-white z-50 transform transition-transform duration-300 ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className="p-6 pt-20">
          <nav className="space-y-4">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center gap-3 p-3 rounded-lg transition-colors ${
                    isActive
                      ? 'bg-resumify-pink text-white'
                      : 'text-resumify-gray hover:bg-resumify-pink/10 hover:text-resumify-pink'
                  }`}
                >
                  <Image
                    src={item.icon}
                    alt={item.label}
                    width={30}
                    height={30}
                    className="w-[30px] h-[30px]"
                  />
                  <span className="font-medium">{item.label}</span>
                </Link>
              );
            })}
          </nav>
        </div>
      </div>
    </div>
  );
}
