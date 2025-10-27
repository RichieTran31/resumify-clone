'use client';

import MainLayout from '@/components/MainLayout';
import Image from 'next/image';
import { motion } from 'framer-motion';

const services = [
  {
    title: 'Communication & Roadmapping',
    description: 'Clear communicator skilled at gathering requirements and aligning the right teams → Consistently delivering projects that exceed stakeholder expectations.',
  },
  {
    title: 'AI & Emerging Technology Integration',
    description: 'Experience in agents and dozens of LLMs -> Scalable AI solutions that boost productivity and provides higher quality solutions.',
  },
  {
    title: 'Technical Fluency',
    description: 'Hands on experience in SQL, ETL, and BI tools -> Excellent data pipelines design and query logic for reliable reporting and business-ready insights.',
  },
  {
    title: 'Leadership & Knowledge Sharing',
    description: 'Innate desire and joy in teaching others -> Mentored 15+ coworkers, managers, and students in SQL & BI Tools (Tableau and PowerBI).',
  },
];


const testimonials = [
  {
    name: 'Zhaohu (Johnathan) Fan',
    company: 'Business Analytics Graduate Professor @ Georgia Tech',
    image: '\_Zhaohu Johnathan Fan.webp',
    rating: 5,
    text: 'During a Fortune 500 project, he developed a sustainable analytics dashboard that demonstrated both technical skill and strategic insight. His clear communication, innovative problem-solving, and strong contributions in corporate meetings and presentations set him apart as a driven and effective analyst lead.',
  },
  {
    name: 'Davis King',
    company: 'Senior Analytics Consultant @ Analytic Vizion',
    image: '\_Davis King.jpg',
    rating: 5,
    text: 'As Richie’s mentor during a business analytics practicum with Home Depot leaders, I was impressed by his initiative and leadership. He drove the project forward, led stakeholder discussions, and challenged my analytical thinking as an MBA graduate.',
  },
  {
    name: 'Jim Holman',
    company: 'Director of Technology Advisory Services @ Cherry Bekaert',
    image: '\_Jim Holman.jpg',
    rating: 5,
    text: 'I saw that Richie brought a fresh perspective and positive attitude during each meeting he was in. He learns technical tools extremely quickly and is a consise communicator when facing problems and presenting solutions.',
  },
  {
    name: 'Kabeer Alabi',
    company: 'Software Engineer @ Floaty AI',
    image: '\_Kabeer Alabi.png',
    rating: 5,
    text: 'Richie consistently brings new ideas, shows accountability, and keeps our product roadmap on track. His collaborative and optimistic attitude makes him a reliable and enjoyable teammate.',
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
  { label: 'First Cousins', value: '+30' },
  { label: '', value: 'First Generation Graduate' },

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
          <h1 className="text-5xl font-bold text-resumify-dark mb-8">
            About <span className="text-resumify-pink">Me</span>
          </h1>
          <p className="text-lg text-resumify-gray leading-relaxed max-w-4xl">
            Richie Tran leads enterprise and department-level reporting initiatives, combining technical precision with strategic project management.
            From planning and OKRs to forecasting, his focus is on delivering insights that are not only valuable but also intuitive for leadership to act on.
            By blending expertise in reporting, data modeling, and modern analytics tools with strong stakeholder management and roadmap execution, Richie consistently drives high-impact, on-time reporting solutions that enhance decision-making across the organization.
        </p>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          className="grid grid-cols-2 lg:grid-cols-4 gap-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div>
            <h3 className="text-resumify-pink font-semibold mb-2">Citizenship</h3>
            <p className="text-resumify-gray">US</p>
          </div>
          <div>
            <h3 className="text-resumify-pink font-semibold mb-2">Location</h3>
            <p className="text-resumify-gray">Atlanta, USA</p>
          </div>
          <div>
            <h3 className="text-resumify-pink font-semibold mb-2">Email</h3>
            <p className="text-resumify-gray">richietran11@email.com</p>
          </div>
          <div>
            <h3 className="text-resumify-pink font-semibold mb-2">Phone</h3>
            <p className="text-resumify-gray">+1 404 820 7894</p>
          </div>
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
        <motion.div
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
        </motion.div>

        {/* Fun Facts */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
        >
        <h2 className="text-3xl font-bold text-resumify-dark mb-8">Fun Facts</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl font-bold text-resumify-pink mb-1">{stat.value}</div>
                <div className="text-md text-resumify-gray">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </MainLayout>
  );
}
