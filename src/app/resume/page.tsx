'use client';

import MainLayout from '@/components/MainLayout';
import Image from 'next/image';
import { motion } from 'framer-motion';

const experience = [
  {
    period: '2012 - Current',
    company: 'Google',
    title: 'Senior UI Designer',
    description: 'Strategic Senior UI Designer blending aesthetics and functionality to elevate user experiences.',
  },
  {
    period: '2010 - 2012',
    company: 'Meta',
    title: 'Junior UI Designer',
    description: 'Enthusiastic Junior UI Designer, blending creativity with a strong foundation in design principles to contribute fresh ideas to collaborative projects.',
  },
];

const education = [
  {
    year: '2009',
    institution: 'University',
    degree: 'Web Design',
    description: 'Mastering user experience and responsive design for visually appealing and functional websites.',
  },
  {
    year: '2008',
    institution: 'Meta',
    degree: 'Graphic Design',
    description: 'Skilled in visual communication, typography, and multimedia design to craft compelling visual narratives.',
  },
];

const designSkills = [
  { name: 'Web Design', level: 95 },
  { name: 'Branding', level: 70 },
  { name: 'Logo Design', level: 90 },
  { name: 'Graphic Design', level: 80 },
];

const codingSkills = [
  { name: 'HTML', level: 100 },
  { name: 'JavaScript', level: 80 },
  { name: 'CSS', level: 95 },
  { name: 'React.js', level: 65 },
];

const softSkills = [
  'Communication',
  'Time Management',
  'Leadership',
  'Empathy',
  'Listening',
  'Problem-solving',
  'Teamwork',
  'Organization',
  'Conflict Management',
  'Creativity',
  'Persuasion',
  'Critical Thinking',
];

const certifications = [
  {
    title: 'Web Design',
    subtitle: 'Responsive Design',
    date: '19 April 2020',
    image: 'https://ext.same-assets.com/455434306/2245594702.jpeg',
  },
  {
    title: 'Graphic Design',
    subtitle: 'Color theory and fundamentals',
    date: '20 August 2021',
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

            {/* Certifications */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-resumify-dark mb-8">Certifications</h2>
              <div className="space-y-6">
                {certifications.map((cert, index) => (
                  <div key={`cert-${cert.title}-${cert.date}`} className="flex gap-4 bg-white p-4 rounded-lg shadow-md">
                    <Image
                      src={cert.image}
                      alt={cert.title}
                      width={80}
                      height={60}
                      className="w-20 h-15 object-cover rounded"
                    />
                    <div className="flex-1">
                      <h3 className="font-semibold text-resumify-dark">{cert.title}</h3>
                      <p className="text-resumify-gray text-sm">{cert.subtitle}</p>
                      <p className="text-resumify-gray text-sm">{cert.date}</p>
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
                Design <span className="text-resumify-pink">Skills</span>
              </h2>
              <div className="space-y-6">
                {designSkills.map((skill) => (
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
                Coding <span className="text-resumify-pink">Skills</span>
              </h2>
              <div className="space-y-6">
                {codingSkills.map((skill) => (
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
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
