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
            src="https://ext.same-assets.com/627721302/178899629.jpeg"
            alt="John Wilson"
            width={128}
            height={128}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Name and Title */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-semibold mb-2">John Wilson</h1>
        <p className="text-lg text-white/90">Web Designer</p>
      </div>

      {/* Social Links */}
      <div className="flex gap-4 mb-8">
        <Link href="https://www.linkedin.com/" className="hover:scale-110 transition-transform">
          <Image
            src="https://ext.same-assets.com/627721302/3783633550.svg"
            alt="LinkedIn"
            width={24}
            height={24}
            className="w-6 h-6"
          />
        </Link>
        <Link href="https://www.facebook.com/" className="hover:scale-110 transition-transform">
          <Image
            src="https://ext.same-assets.com/627721302/2563901416.svg"
            alt="Facebook"
            width={24}
            height={24}
            className="w-6 h-6"
          />
        </Link>
        <Link href="https://twitter.com/home" className="hover:scale-110 transition-transform">
          <Image
            src="https://ext.same-assets.com/627721302/548389142.svg"
            alt="Twitter"
            width={24}
            height={24}
            className="w-6 h-6"
          />
        </Link>
      </div>

      {/* Get Template Button */}
      <Link
        href="https://raquelsoftware.lemonsqueezy.com/checkout/buy/e3663e13-ad11-4e4b-8950-f5939cc840e3"
        className="px-8 py-3 bg-white/20 border-2 border-white text-white rounded-full hover:bg-white hover:text-resumify-pink transition-colors font-medium"
      >
        Get Template
      </Link>

      {/* Copyright */}
      <div className="absolute bottom-8 text-sm text-white/80">
        © 2023 All rights reserved.
      </div>
    </div>
  );
}
