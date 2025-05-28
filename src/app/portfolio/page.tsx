'use client';

import MainLayout from '@/components/MainLayout';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useState } from 'react';

const portfolioItems = [
  {
    id: 'tech-innovators-hub',
    title: 'Tech Innovators Hub',
    category: 'Web Design',
    image: 'https://ext.same-assets.com/477590935/2566009625.jpeg',
  },
  {
    id: 'urban-harvest-festival-poster',
    title: 'Urban Harvest Festival Poster',
    category: 'Graphic Design',
    image: 'https://ext.same-assets.com/477590935/3832520800.jpeg',
  },
  {
    id: 'global-wellness-network-optimization',
    title: 'Global Wellness Network Optimization',
    category: 'SEO',
    image: 'https://ext.same-assets.com/477590935/3053120345.jpeg',
  },
  {
    id: 'culinary-delights-rebrand',
    title: 'Culinary Delights Rebrand',
    category: 'Branding',
    image: 'https://ext.same-assets.com/477590935/4250373845.jpeg',
  },
  {
    id: 'ecosolutions-ecommerce-platform',
    title: 'EcoSolutions E-Commerce Platform',
    category: 'Web Design',
    image: 'https://ext.same-assets.com/477590935/1513336760.jpeg',
  },
];

const categories = ['All', 'Web Design', 'Graphic Design', 'SEO', 'Branding'];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredItems = activeCategory === 'All'
    ? portfolioItems
    : portfolioItems.filter(item => item.category === activeCategory);

  return (
    <MainLayout>
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl font-bold text-resumify-dark mb-8">Portfolio</h1>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          className="flex flex-wrap gap-6 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`text-lg font-medium transition-colors ${
                activeCategory === category
                  ? 'text-resumify-pink border-b-2 border-resumify-pink'
                  : 'text-resumify-gray hover:text-resumify-pink'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Portfolio Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              whileHover={{ y: -5 }}
            >
              <Link href={`/portfolio/${item.id}`}>
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-resumify-pink/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="text-white text-center p-6">
                      <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                      <p className="text-sm opacity-90">{item.category}</p>
                    </div>
                  </div>
                </div>
              </Link>

              {/* Title underneath */}
              <div className="p-4 bg-white">
                <h3 className="font-semibold text-resumify-dark mb-1">{item.title}</h3>
                <p className="text-sm text-resumify-gray">{item.category}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Show message if no items in category */}
        {filteredItems.length === 0 && (
          <motion.div
            className="text-center py-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-resumify-gray text-lg">No projects found in this category.</p>
          </motion.div>
        )}
      </div>
    </MainLayout>
  );
}
