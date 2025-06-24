'use client';

import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';

export default function CoreFeaturesSection() {
  return (
    <section className="relative bg-black text-white px-6 py-24 overflow-hidden">
      {/* Fullscreen Blur Gradient Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-gradient-to-br from-purple-500 via-pink-500 to-blue-500 rounded-full blur-[250px] opacity-50"></div>
        <div className="absolute -bottom-40 -right-40 w-[600px] h-[600px] bg-gradient-to-bl from-blue-500 via-purple-500 to-pink-500 rounded-full blur-[250px] opacity-50"></div>
      </div>

      {/* Fade Overlays */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-black via-black/60 to-transparent z-10 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black via-black/60 to-transparent z-10 pointer-events-none" />

      {/* Background Grid */}
      <div className="absolute inset-0 opacity-10 bg-[url('/grid-pattern.svg')] bg-cover pointer-events-none z-0" />

      {/* Main Feature Cards */}
      <div className="relative max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 z-10">
        {/* Left Card */}
        <Tilt tiltMaxAngleX={6} tiltMaxAngleY={6} glareEnable={false} className="w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-[#111111]/80 to-[#1a1a1a]/80 p-6 rounded-3xl shadow-md backdrop-blur-md ring-1 ring-white/10 hover:ring-white/20"
          >
            <h3 className="text-lg font-semibold mb-3 text-[#66ccff]">Complete Solutions</h3>
            <p className="text-sm text-gray-300">
              From concept to deployment, Arctic44 delivers sleek, custom-built applications
              with scalable architecture, intuitive UI, and SEO-optimized content. Built for
              performance and growth.
            </p>
          </motion.div>
        </Tilt>

        {/* Center Card */}
        <Tilt tiltMaxAngleX={6} tiltMaxAngleY={6} glareEnable={false} className="w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-gradient-to-tr from-[#1e1e1e]/80 to-[#0e0e0e]/80 p-8 rounded-3xl text-center flex items-center justify-center shadow-md backdrop-blur-md ring-1 ring-white/10 hover:ring-white/20"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-[#ccd6f6]">
              Build Custom Software <br /> <span className="text-white">with&nbsp;</span>
              <span className="text-white font-semibold">Power</span>
            </h2>
          </motion.div>
        </Tilt>

        {/* Right Card */}
        <Tilt tiltMaxAngleX={6} tiltMaxAngleY={6} glareEnable={false} className="w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-[#111111]/80 to-[#1a1a1a]/80 p-6 rounded-3xl shadow-md backdrop-blur-md ring-1 ring-white/10 hover:ring-white/20"
          >
            <h3 className="text-lg font-semibold mb-3 text-[#66ccff]">Seamless Integrations</h3>
            <p className="text-sm text-gray-300">
              We handle all necessary integrations—payment gateways, third-party APIs,
              user management, analytics, and more—so you can focus on growth.
            </p>
          </motion.div>
        </Tilt>
      </div>

      {/* Bottom Card */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        viewport={{ once: true }}
        className="relative mt-16 max-w-7xl mx-auto bg-[#0e0e0e]/80 rounded-3xl p-10 text-center shadow-md backdrop-blur-md ring-1 ring-white/10 hover:ring-white/20 z-10"
      >
        <h3 className="text-xl md:text-2xl font-semibold text-white mb-4">
          Modern, Scalable Tech
        </h3>
        <p className="text-sm text-gray-300 leading-relaxed max-w-4xl mx-auto">
          We build your solution using cutting-edge, scalable technologies including TensorFlow, PyTorch, OpenAI, AWS, Azure, GCP, React, Node.js, Python, and Java. 
          Our tech stack is continuously evolving and future-ready, ensuring your mobile or web product remains secure, high-performing, 
          and easy to maintain and scale as your business grows.
        </p>
      </motion.div>
    </section>
  );
}
