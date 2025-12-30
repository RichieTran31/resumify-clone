'use client';

import MainLayout from '@/components/MainLayout';
import PageNav from '@/components/PageNav';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const experience = [
  {
    period: '2025 - Current',
    company: 'FIS',
    title: 'Data Analyst',
    description: 'Data Analyst in the CTO Strategic Planning Office delivering enterprise-level reporting and supporting data-backed decisions',
  },
  {
    period: '2022 - 2024',
    company: 'Various', 
    title: 'General Analyst - Individual Contributor',
    description: 'Completed 4 internships and part-time roles across Enterprise IT, Consulting, and Investment Banking, driving process optimization, financial reporting, and investment analysis while strengthening stakeholder management skills.',
  },
];

const education = [
  {
    year: '2025',
    institution: 'Georgia Institute of Technology',
    degree: 'Master of Analytics',
    description: 'Concentration in Data Science, Machine Learning & Business Analytics',
  },
  {
    year: '2024',
    institution: 'Georgia Institute of Technology',
    degree: 'Bachelor of Science in Business Administration',
    description: 'Concentration in IT Management & Business Analytics, graduating with highest honors',
  },
];


const Extracurriculars = [
  {
    year: '2010 - Current',
    institution: 'TNTT Lê Bảo Tịnh - ATL ', // change to organization
    degree: 'Youth Leader', // change to position
    description: 'Church education and serving the Vietnamese Catholic community in the north and south metro Atlanta region',
  },
  {
    year: '2018 - 2020',
    institution: 'Various', // change to organization
    degree: 'Volunteer Educator', // change to position
    description: 'Various volunteering opportunities focused on educating underserved communities with organizations including The Young People\'s Project, Georgia State Academy for Future Teachers, and Walking in Authority Council.',
  },
];

const technologySkills = [
  { name: 'BI Tools - PowerBI, Tableau', level: 95 },
  { name: 'SQL - SSMS, Fabric', level: 75 },
  { name: 'Languages - Python (Scikit-learn, Pandas, Pytorch), R', level: 85 },
  { name: 'Integration Platforms - Power Automate, SSIS', level: 75 },
];

const businessSkills = [
  { name: 'Excel', level: 100 },
  { name: 'Project Management - Jira, Trello, Smartsheet', level: 85 },
  { name: 'Stakeholder Management', level: 90 },
  { name: 'Communication', level: 95 },
  { name: 'Process Optimization', level: 90 },
];

const softSkills = [
  'Communication',
  'Leadership',
  'Emotional Intelligence',
  'Strategic Thinking',
  'Problem Solving',
  'Team Collaboration',
  'Accountability',
  'Adaptability',
  'Decision Making',
  'Mentorship & Coaching',
];

const domains = [
  'Product Analytics',
  'Product Management',
  'Machine Learning',
  'Data Analytics',
  'Technology Strategy',
];

const certifications = [
  {
    title: 'Zell Miller Scholarship',
    subtitle: 'Full Tuition Scholarship to the #1 School in the State of Georgia',
    date: 'December 2024',
    image: '/Zell Miller.png',
  },
  {
    title: 'Valedictorian',
    subtitle: 'GPA Rank 1 out of 300+ Seniors (4.5)',
    date: 'May 2021',
    image: '/Valedictorian.jpg',
  },
];

function ProgressBar({ skill }: { skill: { name: string; level: number } }) {
  return (
    <div className="space-y-2">
      <div className="flex justify-between items-center">
        <span className="text-resumify-dark font-medium">{skill.name}</span>
        <span className="text-resumify-gray">{skill.level}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2">
        <motion.div
          className="bg-resumify-pink h-2 rounded-full"
          initial={{ width: 0 }}
          animate={{ width: `${skill.level}%` }}
          transition={{ duration: 1.5, delay: 0.5 }}
        />
      </div>
    </div>
  );
}

export default function Resume() {
  const [showPdfModal, setShowPdfModal] = useState(false);

  // Lock body scroll when modal is open
  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = showPdfModal ? 'hidden' : '';
    return () => {
      document.body.style.overflow = prev;
    };
  }, [showPdfModal]);

  return (
    <MainLayout>
      <div className="max-w-6xl mx-auto space-y-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-5xl font-bold text-resumify-dark">Resume</h1>
            <PageNav />
          </div>
          <div className="flex items-center gap-4">
          <button
            onClick={() => setShowPdfModal(true)}
            className="p-2 rounded-full hover:bg-resumify-pink/10 transition-colors group"
            aria-label="View PDF Resume"
            title="Click to view PDF resume"
          >
            <svg
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-resumify-pink group-hover:scale-110 transition-transform"
            >
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
              <polyline points="14 2 14 8 20 8" />
              <line x1="16" y1="13" x2="8" y2="13" />
              <line x1="16" y1="17" x2="8" y2="17" />
              <polyline points="10 9 9 9 8 9" />
            </svg>
          </button>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left Column */}
          <div className="space-y-12">
            {/* Experience */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="text-3xl font-bold text-resumify-dark mb-8">Experience</h2>
              <div className="space-y-8">
                {experience.map((exp, index) => (
                  <div key={`exp-${exp.company}-${exp.period}`} className="relative pl-8 border-l-2 border-resumify-pink">
                    <div className="absolute -left-2 top-0 w-4 h-4 bg-resumify-pink rounded-full" />
                    <div className="space-y-2">
                      <div className="text-sm text-resumify-gray">{exp.period}</div>
                      <div className="text-sm text-resumify-gray">{exp.company}</div>
                      <h3 className="text-xl font-semibold text-resumify-dark">{exp.title}</h3>
                      <p className="text-resumify-gray">{exp.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Education */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <h2 className="text-3xl font-bold text-resumify-dark mb-8">Education</h2>
              <div className="space-y-8">
                {education.map((edu, index) => (
                  <div key={`edu-${edu.institution}-${edu.year}`} className="relative pl-8 border-l-2 border-resumify-pink">
                    <div className="absolute -left-2 top-0 w-4 h-4 bg-resumify-pink rounded-full" />
                    <div className="space-y-2">
                      <div className="text-sm text-resumify-gray">{edu.year}</div>
                      <div className="text-sm text-resumify-gray">{edu.institution}</div>
                      <h3 className="text-xl font-semibold text-resumify-dark">{edu.degree}</h3>
                      <p className="text-resumify-gray">{edu.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
            
            {/* Extracurriculars */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-resumify-dark mb-8">Volunteer</h2>
              <div className="space-y-8">
                {Extracurriculars.map((edu, index) => (
                  <div key={`edu-${edu.institution}-${edu.year}`} className="relative pl-8 border-l-2 border-resumify-pink">
                    <div className="absolute -left-2 top-0 w-4 h-4 bg-resumify-pink rounded-full" />
                    <div className="space-y-2">
                      <div className="text-sm text-resumify-gray">{edu.year}</div>
                      <div className="text-sm text-resumify-gray">{edu.institution}</div>
                      <h3 className="text-xl font-semibold text-resumify-dark">{edu.degree}</h3>
                      <p className="text-resumify-gray">{edu.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Column */}
          <div className="space-y-12">
            {/* Design Skills */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="text-3xl font-bold text-resumify-dark mb-8">
                Technology <span className="text-resumify-pink">Skills</span>
              </h2>
              <div className="space-y-6">
                {technologySkills.map((skill) => (
                  <ProgressBar key={skill.name} skill={skill} />
                ))}
              </div>
            </motion.div>

            {/* Coding Skills */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <h2 className="text-3xl font-bold text-resumify-dark mb-8">
                Business <span className="text-resumify-pink">Skills</span>
              </h2>
              <div className="space-y-6">
                {businessSkills.map((skill) => (
                  <ProgressBar key={skill.name} skill={skill} />
                ))}
              </div>
            </motion.div>

            {/* Soft Skills */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-resumify-dark mb-8">
                Soft <span className="text-resumify-pink">Skills</span>
              </h2>
              <div className="flex flex-wrap gap-3">
                {softSkills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-resumify-pink text-white rounded-full text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Domains */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              <h2 className="text-3xl font-bold text-resumify-dark mb-8">
                <span className="text-resumify-pink">Domains</span>
              </h2>
              <div className="flex flex-wrap gap-3">
                {domains.map((domain) => (
                  <span
                    key={domain}
                    className="px-4 py-2 bg-resumify-pink text-white rounded-full text-sm font-medium"
                  >
                    {domain}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Accolades */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <h2 className="text-3xl font-bold text-resumify-dark mb-8">Accolades</h2>
              <div className="space-y-6">
                {certifications.map((cert, index) => (
                <div key={`cert-${cert.title}-${cert.date}`} className="flex gap-3 bg-white p-3 rounded-md shadow-sm">
                  <Image
                    src={cert.image}
                    alt={cert.title}
                    width={32}
                    height={24}
                    className="w-12 h-10 object-contain rounded"
                  />
                  <div className="flex-1 text-sm">
                    <h3 className="font-semibold text-resumify-dark">{cert.title}</h3>
                    <p className="text-resumify-gray text-xs">{cert.subtitle}</p>
                    <p className="text-resumify-gray text-xs">{cert.date}</p>
                  </div>
                </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* PDF Modal */}
      {showPdfModal && (
        <PdfModal onClose={() => setShowPdfModal(false)} />
      )}
    </MainLayout>
  );
}

/* ==============================
   PDF Modal Component
============================== */
function PdfModal({ onClose }: { onClose: () => void }) {
  // ESC key handler
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose]);

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      role="dialog"
      aria-modal="true"
      aria-label="Resume PDF"
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/60" onClick={onClose} />

      {/* Modal Card */}
      <motion.div
        className="relative bg-white rounded-lg shadow-2xl overflow-hidden w-[95%] max-w-5xl h-[90vh] z-[101] flex flex-col"
        initial={{ y: 28, scale: 0.96, opacity: 0 }}
        animate={{ y: 0, scale: 1, opacity: 1 }}
        exit={{ y: 28, scale: 0.96, opacity: 0 }}
        transition={{ type: 'spring', stiffness: 180, damping: 18 }}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b bg-white">
          <h3 className="text-lg font-semibold text-resumify-dark">Resume PDF</h3>
          <button
            onClick={onClose}
            aria-label="Close"
            className="text-2xl text-resumify-gray hover:text-resumify-dark transition-colors"
          >
            &times;
          </button>
        </div>

        {/* PDF Viewer */}
        <div className="flex-1 overflow-hidden bg-gray-100">
          <iframe
            src="/Richie Tran Resume.pdf"
            className="w-full h-full border-0"
            title="Resume PDF"
          />
        </div>
      </motion.div>
    </motion.div>
  );
}
