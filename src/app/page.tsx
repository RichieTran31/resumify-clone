'use client';

import MainLayout from '@/components/MainLayout';
import PageNav from '@/components/PageNav';
import Image from 'next/image';
import { motion } from 'framer-motion';


const services = [
  {
    title: 'Cross-Functional Collaboration',
    description: 'Partner with product, engineering, and operations teams to gather requirements, clarify objectives, and support delivery of data-driven solutions.',
  },
  {
    title: 'Operational Analytics & Insight Generation',
    description: 'Analyze performance metrics and reporting dashboards to identify trends, gaps, and opportunities for process improvement.',
  },
  {
    title: 'Reporting & Process Documentation',
    description: 'Develop structured documentation, workflow diagrams, and status updates to support feature rollouts, Agile planning, and operational alignment.',
  },
  {
    title: 'Continuous Learning & Professional Growth',
    description: 'Adapt quickly to new tools and environments, actively seeking feedback and opportunities to strengthen communication, analytical, and leadership skills.',
  },
];

const testimonials = [
  {
    name: 'Richie Tran',
    company: 'FIS - Data Analyst',
    image: '\_Richie Tran.jpg',
    rating: 5,
    text: 'Top G',
  },
  {
    name: 'Hossam Farid',
    company: 'Floaty AI - CEO',
    image: '\Hossam.jpg',
    rating: 5,
    text: 'Goated',
  }
];

const brands = [
  { name: 'NCR', image: '/NCR.png' },
  { name: 'The Home Depot', image: '/The Home Depot.svg' },
  { name: 'FIS', image: '/FIS.png' },
  { name: 'Koch Industries', image: '/Koch Industries.png' },
  { name: 'Teradata', image: '/Teradata.png' },
  { name: 'Cherry Bekaert', image: '/Cherry Bekaert.svg' },
];

const stats = [
  { label: 'Developed Reports', value: '+20' },
  { label: 'Teaching Volunteer Hours', value: '+200' },
  { label: 'Cities Visited', value: '+10' }
];

export default function AboutMe() {
  return (
    <MainLayout>
      <div className="max-w-6xl mx-auto space-y-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center justify-between flex-wrap gap-4 mb-8">
            <h1 className="text-5xl font-bold text-resumify-dark">
              About <span className="text-resumify-pink">Me</span>
            </h1>
            <PageNav />
          </div>
          <p className="text-lg text-resumify-gray leading-relaxed max-w-4xl">
          Kabeer Alabi is a software and data professional with a passion for leveraging technology to solve complex problems. With experience in backend development and data analysis, Kabeer has a proven track record of delivering impactful solutions that drive business success. As a first-generation graduate, Kabeer is committed to continuous learning and growth in the tech industry.
         </p>
        </motion.div>

        {/* My Work */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h2 className="text-3xl font-bold text-resumify-dark mb-8">
            My <span className="text-resumify-pink">Strengths</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={service.title} className="space-y-4">
                <h3 className="text-xl font-semibold text-resumify-dark">{service.title}</h3>
                <p className="text-resumify-gray leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Recommendations */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-resumify-dark mb-8">Recommendations</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={testimonial.name} className="bg-white rounded-lg p-6 shadow-md">
                <div className="flex items-start gap-4 mb-4">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={60}
                    height={60}
                    className="w-15 h-15 rounded-full object-cover"
                  />
                  <div className="flex-1">
                    <h4 className="font-semibold text-resumify-dark">{testimonial.name}</h4>
                    <p className="text-resumify-gray text-sm">{testimonial.company}</p>
                  </div>
                </div>
                <p className="text-resumify-gray leading-relaxed mb-4">"{testimonial.text}"</p>
                <div className="flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={`star-${testimonial.name}-${i}`} className="text-yellow-400">★</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Worked With */}
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-resumify-dark mb-8">Worked With</h2>
          <div className="flex flex-wrap justify-center items-center gap-12">
            {brands.map((brand) => (
              <div key={brand.name} className="grayscale hover:grayscale-0 transition-all duration-300">
                <Image
                  src={brand.image}
                  alt={`${brand.name} logo`}
                  width={80}
                  height={60}
                  className="h-12 w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </motion.div> */}

        {/* Fun Facts */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
        >
        <h2 className="text-3xl font-bold text-resumify-dark mb-8">Fun Facts</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-4xl font-bold text-resumify-pink mb-1">{stat.value}</div>
                <div className="text-lg text-resumify-gray">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </MainLayout>
  );
}
