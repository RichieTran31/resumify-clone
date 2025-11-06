'use client';

import MainLayout from '@/components/MainLayout';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const roles = ['Customer Obsessed', 'Outcome Focused', 'Ownership Driven', 'Narrative over Numbers'];

export default function Home() {
  const [currentRole, setCurrentRole] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <MainLayout>
      <div className="flex items-center justify-center min-h-[calc(100vh-8rem)]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          {/* Left Side - Text Content */}
          <motion.div
            className="text-center lg:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              className="text-6xl lg:text-7xl font-bold text-resumify-dark mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Richie <span className="text-resumify-black">Tran</span>
            </motion.h1>

            <div className="text-2xl lg:text-3xl text-resumify-gray mb-8">
              <span>I'm </span>
              <motion.span
                key={currentRole}
                className="text-resumify-pink font-semibold"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                {roles[currentRole]}
              </motion.span>
            </div>
          </motion.div>

          {/* Right Side - Illustration */}
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="relative">
              <Image
                src="/MultiTask.png"
                alt="Graphic of a busy person multitasking"
                width={600}
                height={500}
                className="w-full h-auto max-w-lg"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>
    </MainLayout>
  );
}
