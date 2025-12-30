'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect } from 'react';

const navItems = [
  { href: '/about-me', icon: '/aboutme.svg', label: 'About Me' },
  { href: '/resume', icon: '/resume.svg', label: 'Resume' },
  { href: '/portfolio', icon: '/portfolio.svg', label: 'Portfolio' },
  { href: '/contact', icon: '/contact.svg', label: 'Contact' },
];

export default function PageNav() {
  const pathname = usePathname();
  const router = useRouter();

  const currentIndex = navItems.findIndex((item) => item.href === pathname);

  const goToPrevious = () => {
    const index = navItems.findIndex((item) => item.href === pathname);
    if (index > 0) {
      router.push(navItems[index - 1].href);
    } else {
      // Loop to last item
      router.push(navItems[navItems.length - 1].href);
    }
  };

  const goToNext = () => {
    const index = navItems.findIndex((item) => item.href === pathname);
    if (index < navItems.length - 1) {
      router.push(navItems[index + 1].href);
    } else {
      // Loop to first item
      router.push(navItems[0].href);
    }
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Only handle arrow keys if not typing in an input/textarea
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) {
        return;
      }

      if (e.key === 'ArrowLeft') {
        e.preventDefault();
        const index = navItems.findIndex((item) => item.href === pathname);
        if (index > 0) {
          router.push(navItems[index - 1].href);
        } else {
          router.push(navItems[navItems.length - 1].href);
        }
      } else if (e.key === 'ArrowRight') {
        e.preventDefault();
        const index = navItems.findIndex((item) => item.href === pathname);
        if (index < navItems.length - 1) {
          router.push(navItems[index + 1].href);
        } else {
          router.push(navItems[0].href);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [pathname, router]);

  return (
    <div className="inline-flex items-center gap-2 ml-auto">
      {/* Left Arrow */}
      <button
        onClick={goToPrevious}
        className="p-1.5 rounded-full bg-white/90 backdrop-blur-sm text-resumify-gray hover:bg-resumify-pink hover:text-white shadow-md hover:shadow-lg transition-all duration-300"
        aria-label="Previous page"
        title="Previous page (Left Arrow)"
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="15 18 9 12 15 6" />
        </svg>
      </button>

      {navItems.map((item) => {
        const isActive = pathname === item.href;
        return (
          <Link
            key={item.href}
            href={item.href}
            className="group relative"
            title={item.label}
          >
            <div className={`p-1.5 rounded-full transition-all duration-300 ${
              isActive
                ? 'bg-resumify-pink text-white shadow-lg'
                : 'bg-white/90 backdrop-blur-sm text-resumify-gray hover:bg-resumify-pink/20 hover:text-resumify-pink shadow-md hover:shadow-lg'
            }`}>
              <Image
                src={item.icon}
                alt={item.label}
                width={32}
                height={32}
                className="w-8 h-8"
              />
            </div>

            {/* Tooltip */}
            <div className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 px-2 py-1 bg-resumify-dark text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
              {item.label}
            </div>
          </Link>
        );
      })}

      {/* Right Arrow */}
      <button
        onClick={goToNext}
        className="p-1.5 rounded-full bg-white/90 backdrop-blur-sm text-resumify-gray hover:bg-resumify-pink hover:text-white shadow-md hover:shadow-lg transition-all duration-300"
        aria-label="Next page"
        title="Next page (Right Arrow)"
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="9 18 15 12 9 6" />
        </svg>
      </button>
    </div>
  );
}

