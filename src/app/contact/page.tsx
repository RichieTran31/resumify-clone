'use client';

import MainLayout from '@/components/MainLayout';
import Image from 'next/image';
import { motion } from 'framer-motion';

const contactInfo = [
  {
    icon: '/location.svg',
    title: 'United States',
    description: 'Location',
  },
  {
    icon: '/phone.svg',
    title: '404-820-7894',
    description: 'Phone',
  },
  {
    icon: '/email.svg',
    title: 'richietran11@email.com',
    description: 'Email',
  },
  {
    icon: '/status.svg',
    title: 'Open to Opportunities',
    description: 'Status',
  },
];

export default function Contact() {
  return (
    <MainLayout>
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl font-bold text-resumify-dark mb-8">Contact</h1>
        </motion.div>

        {/* Contact Cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {contactInfo.map((info, index) => (
            <motion.div
              key={info.title}
              className="bg-resumify-pink text-white rounded-lg p-8 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="flex justify-center mb-4">
                <Image
                  src={info.icon}
                  alt={info.description}
                  width={32}
                  height={32}
                  className="w-8 h-8 filter brightness-0 invert"
                />
              </div>
              <h3 className="font-semibold mb-2">{info.title}</h3>
              <p className="text-white/80 text-sm">{info.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Contact Me Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h2 className="text-3xl font-bold text-resumify-dark mb-8">Contact Me</h2>

          {/* Map Container */}
          <div className="bg-gray-200 rounded-lg overflow-hidden shadow-md">
            <div className="aspect-[16/9] bg-gradient-to-br from-blue-200 to-green-200 flex items-center justify-center">
              {/* Embedded Map */}
              <Image
                src="/location.png"
                alt="Map showing location"
                width={800}
                height={450}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Contact Form or Additional Info */}
          <div className="mt-8 bg-white rounded-lg p-8 shadow-md">
            <div className="text-center">
              <h3 className="text-2xl font-semibold text-resumify-dark mb-4">Let's Work Together</h3>
              <p className="text-resumify-gray mb-6 max-w-2xl mx-auto">
              Ready to discuss the problems I can solve? 
              I love building with passionate teams 
              and I’m open to info sessions and conversations with leaders to learn, share, and explore fit.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="mailto:richietran11@email.com"
                  className="px-8 py-3 bg-resumify-pink text-white rounded-full hover:bg-resumify-pink/90 transition-colors font-medium"
                >
                  Send Email
                </a>
                <a
                  href="tel:+4048207894"
                  className="px-8 py-3 border-2 border-resumify-pink text-resumify-pink rounded-full hover:bg-resumify-pink hover:text-white transition-colors font-medium"
                >
                  Call Now
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </MainLayout>
  );
}
