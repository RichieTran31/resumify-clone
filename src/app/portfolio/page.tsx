'use client';

import MainLayout from '@/components/MainLayout';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const portfolioItems = [
  {
    id: 'tech-innovators-hub',
    title: 'Christmas Sales Analysis',
    category: 'Data Reporting',
    image: 'https://ext.same-assets.com/477590935/2566009625.jpeg',
    context: 'Analyzed Q4 seasonal sales patterns and regional performance.',
    impact: ['Improved forecast accuracy by 18%', 'Enabled better inventory allocation'],
  },
  {
    id: 'urban-harvest-festival-poster',
    title: 'CTO OKR Report',
    category: 'Data Reporting',
    image: 'https://ext.same-assets.com/477590935/3832520800.jpeg',
    context: 'Built interactive OKR tracking dashboards for the CTO organization.',
    impact: ['Reduced manual updates by 60%', 'Aligned KPIs across 8 departments'],
  },
  {
    id: 'global-wellness-network-optimization',
    title: 'Dashboard Health Tracker',
    category: 'Data Reporting',
    image: 'https://ext.same-assets.com/477590935/3053120345.jpeg',
    context: 'Automated report monitoring to detect broken visuals and data drift.',
    impact: ['Decreased downtime 45%', 'Increased reporting reliability'],
  },
  {
    id: 'culinary-delights-rebrand',
    title: 'Product Resiliency',
    category: 'Data Reporting',
    image: 'https://ext.same-assets.com/477590935/4250373845.jpeg',
    context: 'Modeled product failure scenarios to improve system resiliency.',
    impact: ['Identified 3 major bottlenecks', 'Cut incident response time by 25%'],
  },
  {
    id: 'ecosolutions-ecommerce-platform',
    title: 'Floaty AI',
    category: 'AI',
    image: 'https://ext.same-assets.com/477590935/1513336760.jpeg',
    context: 'Developed an AI platform integrating multiple LLM APIs for productivity tools.',
    impact: ['Enabled dynamic model switching', 'Improved team efficiency 30%'],
  },
];

const categories = ['All', 'Data Reporting', 'Analytics', 'AI'];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedItem, setSelectedItem] = useState<any>(null);

  const filteredItems =
    activeCategory === 'All'
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeCategory);

  const openPreview = (item: any) => setSelectedItem(item);
  const closePreview = () => setSelectedItem(null);

  // Prevent body scroll when modal open
  useEffect(() => {
    document.body.style.overflow = selectedItem ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [selectedItem]);

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
              className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              whileHover={{ y: -5 }}
              onClick={() => openPreview(item)}
            >
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

      {/* Preview Modal */}
      {selectedItem && <PreviewModal item={selectedItem} onClose={closePreview} />}
    </MainLayout>
  );
}

/* ==============================
   Modal Component
   ============================== */
function PreviewModal({ item, onClose }: any) {
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      {/* Dark backdrop */}
      <div
        className="absolute inset-0 bg-black/60"
        onClick={onClose}
      />

      {/* Modal card */}
      <motion.div
        className="relative bg-white rounded-lg shadow-2xl overflow-hidden w-[90%] max-w-4xl z-10"
        initial={{ y: 30, scale: 0.95, opacity: 0 }}
        animate={{ y: 0, scale: 1, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 180, damping: 18 }}
      >
        {/* Header */}
        <div className="flex items-start justify-between p-4 border-b">
          <div>
            <h3 className="text-lg font-semibold text-resumify-dark">{item.title}</h3>
            <p className="text-sm text-resumify-gray">{item.category}</p>
          </div>
          <button
            onClick={onClose}
            aria-label="Close preview"
            className="text-2xl text-resumify-gray hover:text-resumify-dark"
          >
            &times;
          </button>
        </div>

        {/* Body */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
          <div className="relative aspect-[4/3] w-full rounded-lg overflow-hidden border">
            <Image src={item.image} alt={item.title} fill className="object-cover" />
          </div>

          <div className="space-y-4 text-sm">
            <section>
              <h4 className="font-semibold text-resumify-dark mb-1">Context</h4>
              <p className="text-resumify-gray">
                {item.context || 'Add details about the business problem, data, or tools used.'}
              </p>
            </section>

            <section>
              <h4 className="font-semibold text-resumify-dark mb-1">Impact</h4>
              <ul className="list-disc pl-4 text-resumify-gray space-y-1">
                {(Array.isArray(item.impact) ? item.impact : [item.impact]).map(
                  (line: string, i: number) => (
                    <li key={i}>{line}</li>
                  )
                )}
              </ul>
            </section>

            <div className="pt-2 flex gap-3">
              <Link
                href={`/portfolio/${item.id}`}
                className="px-4 py-2 bg-resumify-pink text-white rounded-md text-sm hover:opacity-90"
              >
                View Full Page
              </Link>
              <button
                onClick={onClose}
                className="px-4 py-2 border rounded-md text-sm text-resumify-dark hover:bg-black/5"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
