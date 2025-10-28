'use client';

import MainLayout from '@/components/MainLayout';
import Image from 'next/image';
import { motion } from 'framer-motion';

const experience = [
  {
    period: 'Current',
    company: 'FIS',
    title: 'Data Analyst',
    description: 'Data Analyst in the CTO Strategic Planning Office delivering enterprise-level reporting and supporting data-backed decisions',
  },
  {
    period: '2022 - 2024',
    company: 'Various', 
    title: 'General Analyst - Individual Contributor',
    description: '4 internships + part time roles in IT, Consulting, and Finance to learn more about different industries',
  },
];

const education = [
  {
    year: '2026',
    institution: 'Georgia Institute of Technology',
    degree: 'Master of Analytics',
    description: 'Current part-time master student focusing on Statistics & Business Analytics',
  },
  {
    year: '2024',
    institution: 'Georgia Institute of Technology',
    degree: 'Bachelor of Science in Business Administration',
    description: 'Concentration in IT management & Business Analytics, graduating with highest honors',
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
  { name: 'Languages - Python, JavaScript, HTML/CSS', level: 85 },
  { name: 'Integration Platforms - Power Automate, Altreyx, SSIS', level: 75 },
];

const businessSkills = [
  { name: 'Excel', level: 100 },
  { name: 'Project Management - Jira, Trello, Smartsheet', level: 85 },
  { name: 'Statistics', level: 80 },
  { name: 'Financial Modeling', level: 75 },
  { name: 'Process Optimization', level: 85 },
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

const certifications = [
  {
    title: 'Zell Miller Scholarship',
    subtitle: 'Full Tuition Scholarship to the #1 School in the State of Georgia',
    date: 'December 2024',
    image: 'https://ext.same-assets.com/455434306/2245594702.jpeg',
  },
  {
    title: 'Valedictorian',
    subtitle: 'GPA Rank 1 out of 300+ Seniors (4.5)',
    date: 'May 2021',
    image: 'https://ext.same-assets.com/455434306/1948768588.jpeg',
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
  return (
    <MainLayout>
      <div className="max-w-6xl mx-auto space-y-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl font-bold text-resumify-dark mb-8">Resume</h1>
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
    </MainLayout>
  );
}
