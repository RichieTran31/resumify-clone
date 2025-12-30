'use client';

import MainLayout from '@/components/MainLayout';
import PageNav from '@/components/PageNav';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';

/* ==============================
   Types
============================== */
type PortfolioItem = {
  id: string;
  title: string;
  category: 'Data Reporting' | 'Analytics' | 'AI' | string;
  image?: string;
  images?: string[];
  pdf?: string;
  context?: string;
  impact?: string[] | string;
  url?: string;
};

/* ==============================
   Data
============================== */
const portfolioItems: PortfolioItem[] = [
  {
    id: '1',
    title: 'Christmas Sales Analysis',
    category: 'Analytics',
    images: ['/__Holiday_Dashboard_1.png', '/__Holiday_Dashboard_2.png'],
    context: 'Dashboard that analyzes data from an Amazon seller',
    impact: [
      'Identifies best performing categories and SKUs to prioritize',
      'Answers high level questions on demand patterns, customer behavior, and inventory levels',
      'Uses countries, shopping preferences, and purchase frequencies to create customer personas for future marketing strategies'
    ],
  },
  { 
    id: '2',
    title: 'Airline Industries',
    category: 'Analytics',
    images: ['/Airline Dashboardpng.png'],
    context: 'Part of a strategic report that discusses COVID-19 impact on airline industries',
    impact: [
      'Aggregated TSA checkpoint data to highlight worker shorters, restrictions, and other passenger information.',
      'Used the data to explain what happened strategically and highlight where responses could have been improved.',
    ],
  },
  {
    id: '3',
    title: 'Item Request Tracker',
    category: 'Data Reporting',
    image: '/Story Board.png',
    context: 'Aggregates requests from customers based on agile methodology.',
    impact: [
      'Helps product and project managers organizes requests and allocate resources', 
      'Helps leaders track progress and deliverables to ensure timely delivery'
    ],
  },
  {
    id: '4',
    title: 'Production Support',
    category: 'Data Reporting',
    image: '/Production Support.png',
    context: 'Aggregates production support request from customers and internal teams',
    impact: [
      'Helps leaders prioritize outages and address them in a timely manner', 
      'Encourages others to find sustainable solutions to common issues'
    ],
  },
  {
    id: '5',
    title: 'Floaty AI',
    category: 'AI',
    image: '/__FloatyAI.png',
    context: '*** Click navigation icon link at the top right to view ***',
    impact: [
      'Allows users to use multiple LLM APIs in one place', 
      'Consistent user feedback and feature requests', 
      'Potential revenue of 10k USD per month based on pay per use business model',
    ],
    url: 'https://floatyai.com',
  },
  {
    id: '6',
    title: 'Home Depot Analytics',
    category: 'Analytics',
    image: '/Tableau.png',
    context: 'Analyzed the relationship between store tasks and KPIs across the stores nationwide - Current image is 1/3 pages of a story board',
    impact: [
      'Explained seasonality and and action items based on each cluster of stores',
      'Identified overarching trends and potential data gaps.',
      'Used EDA (matplotlib, seaborn) to identify misrecordings, inconsistencies, outliers, and manual entry errors, which were then corrected with stakeholders.'
    ],
  },
  {
    id: '7',
    title: 'Hotel Cancellation Analysis',
    category: 'Analytics',
    image: '/Hotel Cancellation.jpg',
    pdf: '/Hotel Cancellation.pdf',
    context: 'Machine Learning Business Analytics Project analyzing hotel booking cancellations',
    impact: [
      'Used ML models (RF, GBT, NN) to predict booking cancellations',
      'Identified key cancellation drivers: Deposit_Type, Total_of_special_requests, Lead_time',
      'Developed predictive models to flag high-risk bookings for early intervention',
      'Provided actionable insights for dynamic pricing and revenue protection'
    ],
  }
];

const categories = ['All', 'Data Reporting', 'Analytics', 'AI'] as const;

/* ==============================
   Helpers
============================== */
const firstImageOf = (item: PortfolioItem) =>
  (Array.isArray(item.images) && item.images[0]) || item.image || '';

const hasPdf = (item: PortfolioItem) => !!item.pdf;

/* ==============================
   Page
============================== */
export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState<(typeof categories)[number] | 'All'>('All');
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);

  const filteredItems =
    activeCategory === 'All'
      ? portfolioItems
      : portfolioItems.filter((it) => it.category === activeCategory);

  // Lock body scroll when modal is open
  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = selectedItem ? 'hidden' : '';
    return () => {
      document.body.style.overflow = prev;
    };
  }, [selectedItem]);

  return (
    <MainLayout>
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-5xl font-bold text-resumify-dark">Portfolio</h1>
            <PageNav />
          </div>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          className="flex flex-wrap gap-6 mb-12"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
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

        {/* Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {filteredItems.map((item, i) => {
            const thumb = firstImageOf(item);
            return (
              <motion.div
                key={item.id}
                className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.05 * i }}
                whileHover={{ y: -4 }}
                onClick={() => setSelectedItem(item)}
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  {thumb ? (
                    <Image
                      src={thumb}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-110"
                      // Local images load fine; remote ones need unoptimized unless domain is configured
                      unoptimized={thumb.startsWith('http')}
                    />
                  ) : hasPdf(item) ? (
                    <div className="w-full h-full bg-gradient-to-br from-resumify-pink/20 to-resumify-pink/40 flex items-center justify-center">
                      <div className="text-center p-6">
                        <svg
                          className="w-16 h-16 mx-auto mb-4 text-resumify-pink"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                          />
                        </svg>
                        <p className="text-resumify-dark font-medium">PDF Presentation</p>
                      </div>
                    </div>
                  ) : (
                    <div className="w-full h-full bg-gray-200" />
                  )}
                  <div className="absolute inset-0 bg-resumify-pink/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="text-white text-center p-6">
                      <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                      <p className="text-sm opacity-90">{item.category}</p>
                    </div>
                  </div>
                </div>
                <div className="p-4 bg-white">
                  <h3 className="font-semibold text-resumify-dark mb-1">{item.title}</h3>
                  <p className="text-sm text-resumify-gray">{item.category}</p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Empty state */}
        {filteredItems.length === 0 && (
          <motion.div className="text-center py-16" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <p className="text-resumify-gray text-lg">No projects found in this category.</p>
          </motion.div>
        )}
      </div>

      {/* Modal */}
      {selectedItem && <PreviewModal item={selectedItem} onClose={() => setSelectedItem(null)} />}
    </MainLayout>
  );
}

/* ==============================
   Modal with Carousel (simple) or PDF viewer
============================== */
function PreviewModal({ item, onClose }: { item: PortfolioItem; onClose: () => void }) {
  const isPdf = hasPdf(item);
  const images = (item.images && item.images.length > 0 ? item.images : item.image ? [item.image] : []) as string[];
  const slideCount = images.length;
  const [index, setIndex] = useState(0);

  // ESC and arrows
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (!isPdf && slideCount > 1) {
        if (e.key === 'ArrowRight') setIndex((i) => (i + 1) % slideCount);
        if (e.key === 'ArrowLeft') setIndex((i) => (i - 1 + slideCount) % slideCount);
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose, slideCount, isPdf]);

  // Swipe (pointer) — minimal
  const startX = useRef<number | null>(null);
  const deltaX = useRef(0);
  const begin = (e: React.PointerEvent) => {
    startX.current = e.clientX;
    (e.currentTarget as HTMLDivElement).setPointerCapture(e.pointerId);
  };
  const move = (e: React.PointerEvent) => {
    if (startX.current !== null) deltaX.current = e.clientX - startX.current;
  };
  const end = () => {
    if (startX.current !== null) {
      const t = 60;
      if (deltaX.current <= -t) setIndex((i) => (i + 1) % slideCount);
      if (deltaX.current >= t) setIndex((i) => (i - 1 + slideCount) % slideCount);
    }
    startX.current = null;
    deltaX.current = 0;
  };

  const prev = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setIndex((i) => (i - 1 + slideCount) % slideCount);
  };
  const next = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setIndex((i) => (i + 1) % slideCount);
  };

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      role="dialog"
      aria-modal="true"
      aria-label={`${item.title} preview`}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/60" onClick={onClose} />

      {/* Card */}
      <motion.div
        className="relative bg-white rounded-lg shadow-2xl overflow-hidden w-[100%] max-w-[1075px] h-[80vh] z-[101] flex flex-col"
        initial={{ y: 28, scale: 0.96, opacity: 0 }}
        animate={{ y: 0, scale: 1, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 180, damping: 18 }}
      >
        {/* Header */}
        <div className="flex items-start justify-between p-4 border-b">
          <div>
            <h3 className="text-lg font-semibold text-resumify-dark">{item.title}</h3>
            <p className="text-sm text-resumify-gray">{item.category}</p>
          </div>
          <div className="flex items-center gap-2">
            {item.url && (
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full hover:bg-resumify-pink/10 transition-colors group"
                aria-label={`Visit ${item.title}`}
                title={`Visit ${item.url}`}
                onClick={(e) => e.stopPropagation()}
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
                  className="text-resumify-pink group-hover:scale-110 transition-transform"
                >
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                  <polyline points="15 3 21 3 21 9" />
                  <line x1="10" y1="14" x2="21" y2="3" />
                </svg>
              </a>
            )}
            <button onClick={onClose} aria-label="Close" className="text-2xl text-resumify-gray hover:text-resumify-dark">
              &times;
            </button>
          </div>
        </div>

        {/* PDF Viewer or Carousel */}
        {isPdf && item.pdf ? (
          <div className="relative w-full h-[50vh] min-h-0 flex-shrink-0">
            <iframe
              src={item.pdf}
              className="w-full h-full border-0"
              title={`${item.title} PDF`}
            />
          </div>
        ) : (
          <div
            className="relative w-full h-[50vh] md:h-[50vh] select-none"
            style={{ touchAction: slideCount > 1 ? 'none' : 'auto' }}
            onPointerDown={slideCount > 1 ? begin : undefined}
            onPointerMove={slideCount > 1 ? move : undefined}
            onPointerUp={slideCount > 1 ? end : undefined}
            onPointerCancel={slideCount > 1 ? end : undefined}
          >
            <div
              className="h-full flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${index * 100}%)` }}
            >
              {images.map((src, i) => (
                <div key={i} className="relative w-full h-full shrink-0 bg-gray-100 flex items-center justify-center">
                  <Image
                    src={src}
                    alt={`${item.title} – slide ${i + 1}`}
                    fill
                    className="object-contain"
                    sizes="100vw"
                    // Local images fine; remote ones use unoptimized unless domain is whitelisted in next.config
                    unoptimized={src.startsWith('http')}
                    priority={i === 0}
                  />
                </div>
              ))}
            </div>

            {slideCount > 1 && (
              <>
                <button
                  onClick={prev}
                  onPointerDown={(e) => e.stopPropagation()}
                  aria-label="Previous"
                  className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-black/40 text-white p-2 hover:bg-black/60 z-10"
                >
                  ‹
                </button>
                <button
                  onClick={next}
                  onPointerDown={(e) => e.stopPropagation()}
                  aria-label="Next"
                  className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-black/40 text-white p-2 hover:bg-black/60 z-10"
                >
                  ›
                </button>
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                  {images.map((_, i) => (
                    <button
                      key={i}
                      onClick={(e) => {
                        e.stopPropagation();
                        setIndex(i);
                      }}
                      onPointerDown={(e) => e.stopPropagation()}
                      aria-label={`Go to slide ${i + 1}`}
                      className={`h-2.5 w-2.5 rounded-full transition-opacity ${
                        index === i ? 'bg-white opacity-100' : 'bg-white/60 opacity-60 hover:opacity-90'
                      }`}
                    />
                  ))}
                </div>
              </>
            )}
          </div>
        )}

        {/* Text */}
        {(item.context || item.impact) && (
          <div className={`p-6 space-y-4 text-sm bg-white overflow-y-auto flex-shrink-0 border-t ${isPdf ? 'max-h-[25vh]' : ''}`}>
            {item.context && (
              <section>
                <h4 className="font-semibold text-resumify-dark mb-1">Context</h4>
                <p className="text-resumify-gray">{item.context}</p>
              </section>
            )}
            {item.impact && (
              <section>
                <h4 className="font-semibold text-resumify-dark mb-1">Impact</h4>
                <ul className="list-disc pl-4 text-resumify-gray space-y-1">
                  {(Array.isArray(item.impact) ? item.impact : [item.impact]).map((line, i) => (
                    <li key={i}>{line}</li>
                  ))}
                </ul>
              </section>
            )}
          </div>
        )}
      </motion.div>
    </motion.div>
  );
}
