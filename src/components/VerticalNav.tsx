'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navItems = [
  { href: '/', icon: '/home.svg', label: 'Home' },
  { href: '/about-me', icon: '/aboutme.svg', label: 'About Me' },
  { href: '/resume', icon: '/resume.svg', label: 'Resume' },
  { href: '/portfolio', icon: '/portfolio.svg', label: 'Portfolio' },
  { href: '/contact', icon: '/contact.svg', label: 'Contact' },
];

export default function VerticalNav() {
  const pathname = usePathname();

  return (
    <div className="fixed right-8 top-1/2 -translate-y-1/2 z-20">
      <nav className="flex flex-col gap-6">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className="group relative"
              title={item.label}
            >
              <div className={`p-3 rounded-full transition-all duration-300 ${
                isActive
                  ? 'bg-resumify-pink text-white shadow-lg'
                  : 'bg-white text-resumify-gray hover:bg-resumify-pink hover:text-white shadow-md hover:shadow-lg'
              }`}>
                <Image
                  src={item.icon}
                  alt={item.label}
                  width={30}
                  height={30}
                  className="w-[30px] h-[30px]"
                />
              </div>

              {/* Tooltip */}
              <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 px-2 py-1 bg-resumify-dark text-white text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                {item.label}
              </div>
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
