'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Sidebar() {
  return (
    <div className="fixed left-0 top-0 w-80 h-screen bg-resumify-pink flex flex-col items-center justify-center text-white z-10">
      {/* Profile Image */}
      <div className="mb-6">
        <div className="w-32 h-32 rounded-full border-4 border-white overflow-hidden">
          <Image
            src="/_Richie Tran.jpg"
            alt="Richie Tran"
            width={128}
            height={128}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Name and Title */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-semibold mb-2">Richie Tran</h1>
        <p className="text-lg text-white/90">
          Analytics & Tech<br />
          First Generation Graduate
        </p>
      </div>

      {/* Social Links */}
      <div className="flex gap-4 mb-8">
        <Link href="https://www.linkedin.com/in/richietran-18/" className="hover:scale-110 transition-transform">
          <Image
            src="/linkedin.svg"
            alt="LinkedIn"
            width={24}
            height={24}
            className="w-6 h-6"
          />
        </Link>
      </div>

      {/* Copyright */}
      <div className="absolute bottom-8 text-sm text-white/80">
        © 2025 All rights reserved.
      </div>
    </div>
  );
}
