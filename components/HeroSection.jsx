'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

export default function HeroSection() {
  const [scrolled, setScrolled] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const router = useRouter();

  // Android vibration
  const isAndroid = typeof navigator !== 'undefined' && /android/i.test(navigator.userAgent);
  const vibrateAndroid = () => {
    if (isAndroid && navigator.vibrate) {
      navigator.vibrate(10);
    }
  };

  // Animated words
  const words = ['Develop', 'Launch', 'Scale'];
  const [wordIndex, setWordIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % words.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Liquid Glass Navbar */}
      <header
        className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-6xl px-6 py-3 rounded-3xl
        transition-all duration-300 overflow-hidden
        ${scrolled
          ? 'bg-[rgba(255,255,255,0.1)] backdrop-blur-2xl border border-white/30 shadow-xl scale-95 saturate-150'
          : 'bg-[rgba(255,255,255,0.05)] backdrop-blur-xl border border-white/20 shadow-md saturate-200'}`}
        style={{
          WebkitBackdropFilter: 'blur(30px) saturate(180%)',
          backdropFilter: 'blur(10px) saturate(180%)',
          background: `radial-gradient(600px at ${mousePosition.x}px ${mousePosition.y}px, rgba(255,255,255,0.1), transparent 80%)`,
          boxShadow: scrolled
            ? '0 8px 32px 0 rgba(31, 38, 135, 0.37)'
            : '0 4px 12px 0 rgba(31, 38, 135, 0.25)',
        }}
      >
        <div className="flex justify-between items-center relative z-10">
          {/* Logo and Name */}
          <div className="flex items-center space-x-3">
            <Image src="/logonavbar.png" alt="Arctic44 Logo" width={100} height={40} />
            <span className="text-white font-bold text-lg">
              <span className="text-[#6699cc]"></span>
            </span>
          </div>

          {/* Navigation Links with hover underline */}
          <nav className="hidden md:flex space-x-6 text-sm">
            <Link href="#" className="text-gray-300 hover:text-white hover:border-b-2 hover:border-white transition">Home</Link>
            <Link href="#services" className="text-gray-300 hover:text-white hover:border-b-2 hover:border-white transition">Services</Link>
            <Link href="#blogs" className="text-gray-300 hover:text-white hover:border-b-2 hover:border-white transition">Blogs</Link>
            <Link href="#about" className="text-gray-300 hover:text-white hover:border-b-2 hover:border-white transition">About Us</Link>
            <Link href="/careers" className="text-gray-300 hover:text-white hover:border-b-2 hover:border-white transition">Careers</Link>
          </nav>

          {/* CTA Button */}
          <Link href="#contact">
            <button
              className="bg-[#ccd6f6] text-black font-semibold py-2 px-4 rounded-xl shadow hover:bg-white transition flex items-center gap-2"
              onClick={vibrateAndroid}
            >
              Get in Touch <span></span>
            </button>
          </Link>
        </div>
      </header>

      {/* Hero Content */}
      <div className="flex flex-col items-center justify-center text-center px-6 min-h-screen">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-gray-800 text-white px-4 py-2 rounded-full text-sm mb-6 border border-gray-600"
        >
          Unlocking innovation in every lock
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold mb-6"
        >
          <AnimatePresence mode="wait">
            <motion.span
              key={wordIndex}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.4 }}
              className="inline-block text-[#ccd6f6] pr-2"
            >
              {words[wordIndex]}
            </motion.span>
          </AnimatePresence>
          your vision with <span className="text-white">Arctic44</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-gray-400 max-w-2xl mb-8"
        >
          We turn everyday challenges into opportunities by combining creativity, technology, and practical thinking.
          Our goal is to build smart, efficient solutions that move people and businesses forward.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="flex space-x-4"
        >
          <button
            className="bg-[#ccd6f6] text-black font-semibold py-3 px-6 rounded-xl hover:bg-white transition"
            onClick={vibrateAndroid}
          >
            Contact Professionals
          </button>
          <button
            className="text-white font-medium hover:underline transition"
            onClick={vibrateAndroid}
          >
            Explore
          </button>
        </motion.div>
      </div>

      {/* Bottom Navigation Panel - Mobile only */}
      <nav className="fixed bottom-0 left-0 right-0 bg-black/80 backdrop-blur-md border-t border-white/20 text-white flex justify-around items-center py-3 md:hidden z-50">
        <Link href="#" className="flex flex-col items-center text-xs hover:text-[#6699cc] hover:underline transition" onClick={vibrateAndroid}>
          <span></span>
          <span>Home</span>
        </Link>
        <Link href="#services" className="flex flex-col items-center text-xs hover:text-[#6699cc] hover:underline transition" onClick={vibrateAndroid}>
          <span></span>
          <span>Services</span>
        </Link>
        <Link href="#blogs" className="flex flex-col items-center text-xs hover:text-[#6699cc] hover:underline transition" onClick={vibrateAndroid}>
          <span></span>
          <span>Blogs</span>
        </Link>
        <Link href="#contact" className="flex flex-col items-center text-xs hover:text-[#6699cc] hover:underline transition" onClick={vibrateAndroid}>
          <span></span>
          <span>Contact</span>
        </Link>
        <Link href="/careers" className="flex flex-col items-center text-xs hover:text-[#6699cc] hover:underline transition" onClick={vibrateAndroid}>
          <span></span>
          <span>Careers</span>
        </Link>
      </nav>
    </div>
  );
}
