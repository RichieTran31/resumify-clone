'use client';

import MainLayout from '@/components/MainLayout';
import Image from 'next/image';
import { motion } from 'framer-motion';

const services = [
  {
    title: 'Web Design',
    description: 'I craft digital experiences that not only captivate but also engage your audience. From intuitive user interfaces to responsive layouts, my designs seamlessly blend form and function.',
  },
  {
    title: 'Graphic Design',
    description: 'Graphics are the language of visual communication, and I am fluent in creating designs that speak volumes. From eye-catching logos to compelling marketing collateral, each project is a canvas for storytelling.',
  },
  {
    title: 'SEO',
    description: 'Beyond the visual realm, I understand the importance of visibility. My expertise in SEO ensures that your digital presence not only looks good but also performs exceptionally.',
  },
  {
    title: 'Branding',
    description: 'Your brand is your identity, and I am here to make it unforgettable. Through meticulous branding strategies, I help businesses carve out a distinctive space in their industries.',
  },
];

const testimonials = [
  {
    name: 'Jane Smith',
    company: 'XYZ Company',
    image: 'https://ext.same-assets.com/2705408383/329400.jpeg',
    rating: 5,
    text: 'Richie transformed our vision into a visual masterpiece. His creativity and attention to detail are unmatched. We couldn\'t be happier with the results.',
  },
  {
    name: 'Sarah Brown',
    company: 'PQP Inc.',
    image: 'https://ext.same-assets.com/2705408383/3266291688.jpeg',
    rating: 5,
    text: 'Richie exceeded our expectations in every way. His designs not only look great but also align perfectly with our brand values. A true professional.',
  },
  {
    name: 'Richie Tran',
    company: 'ABC Corporation',
    image: 'https://ext.same-assets.com/2705408383/1719142224.jpeg',
    rating: 5,
    text: 'Richie has a unique ability to understand the essence of a brand and translate it into visually compelling designs. Working with him was a pleasure.',
  },
  {
    name: 'Mark Johnson',
    company: 'LMN Enterprises',
    image: 'https://ext.same-assets.com/2705408383/4186157281.jpeg',
    rating: 5,
    text: 'Richie brought our ideas to life with a creative flair that sets him apart. His work has had a significant impact on our brand\'s image and market presence.',
  },
];

const brands = [
  { name: 'Apple', image: 'https://ext.same-assets.com/2705408383/3678453440.png' },
  { name: 'Google', image: 'https://ext.same-assets.com/2705408383/2869606868.png' },
  { name: 'IBM', image: 'https://ext.same-assets.com/2705408383/1187235485.png' },
  { name: 'Microsoft', image: 'https://ext.same-assets.com/2705408383/67518248.webp' },
  { name: 'HP', image: 'https://ext.same-assets.com/2705408383/1674273462.png' },
];

const stats = [
  { label: 'Happy Clients', value: '+1K' },
  { label: 'Working Hours', value: '+5K' },
  { label: 'Projects', value: '+200' },
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
            I'm a passionate graphic and web designer with a mission to transform ideas into visually stunning realities.
            With a keen eye for detail and a commitment to delivering unparalleled design solutions, I bring creativity
            and functionality together to elevate your brand.
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
            <h3 className="text-resumify-pink font-semibold mb-2">Age</h3>
            <p className="text-resumify-gray">28</p>
          </div>
          <div>
            <h3 className="text-resumify-pink font-semibold mb-2">Location</h3>
            <p className="text-resumify-gray">Los Angeles, USA</p>
          </div>
          <div>
            <h3 className="text-resumify-pink font-semibold mb-2">Email</h3>
            <p className="text-resumify-gray">jwilson@email.com</p>
          </div>
          <div>
            <h3 className="text-resumify-pink font-semibold mb-2">Phone</h3>
            <p className="text-resumify-gray">+0123 123 456 789</p>
          </div>
        </motion.div>

        {/* My Work */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h2 className="text-3xl font-bold text-resumify-dark mb-8">
            My <span className="text-resumify-pink">Work</span>
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

        {/* Happy Clients */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-resumify-dark mb-8">Happy Clients</h2>
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-4xl font-bold text-resumify-pink mb-2">{stat.value}</div>
                <div className="text-resumify-gray">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </MainLayout>
  );
}
