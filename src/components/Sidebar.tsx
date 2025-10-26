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
            src="https://media.licdn.com/dms/image/v2/D5603AQGZO6T5x3tsug/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1694300338754?e=1762992000&v=beta&t=RSDlbYCScO_Qop5U4j99vWh5N-9YaLri_1wCHnVPlfw"
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
        <p className="text-lg text-white/90">Data Analyst</p>
      </div>

      {/* Social Links */}
      <div className="flex gap-4 mb-8">
        <Link href="https://www.linkedin.com/in/richietran-18/" className="hover:scale-110 transition-transform">
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
      </div>
      {/* Copyright */}
      <div className="absolute bottom-8 text-sm text-white/80">
        © 2025 All rights reserved.
      </div>
    </div>
  );
}
