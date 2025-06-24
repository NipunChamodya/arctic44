import { motion } from 'framer-motion';
import { FaRocket, FaCogs, FaMobileAlt, FaBullhorn } from 'react-icons/fa';

export default function ServicesSection() {
  const services = [
    {
      icon: <FaRocket size={64} className="text-[#ccd6f6] drop-shadow-glow" />,
      title: 'LAUNCHPAD',
      intro: 'We help you secure your digital space with domains, hosting, and cloud setups built to scale.',
      features: ['Domain Registration', 'Web Hosting', 'Cloud Infrastructure'],
    },
    {
      icon: <FaCogs size={64} className="text-[#ccd6f6] drop-shadow-glow" />,
      title: 'ENGINE ROOM',
      intro: 'We design and build fast, secure websites and systems that power your business online.',
      features: ['Websites', 'E-Commerce', 'Full-Stack Development'],
    },
    {
      icon: <FaMobileAlt size={64} className="text-[#ccd6f6] drop-shadow-glow" />,
      title: 'MOBILE & AI LAB',
      intro: 'We build smart apps with AI that engage, adapt, and scale on any device.',
      features: ['Mobile Apps', 'AI Features', 'App Integrations'],
    },
    {
      icon: <FaBullhorn size={64} className="text-[#ccd6f6] drop-shadow-glow" />,
      title: 'BRAND BOOST',
      intro: 'We make your brand visible with campaigns, SEO, and social strategies that drive results.',
      features: ['SEO', 'SEM'],
    },
  ];

  return (
    <section id="services" className="bg-black text-white pt-[80px] pb-[80px] px-6 relative overflow-hidden">
      {/* Header */}
      <div className="max-w-6xl mx-auto text-center mb-16 relative z-10">
        <p className="text-sm text-gray-400 mb-1">Our Service</p>
        <h2 className="text-[40px] font-extrabold mb-3 leading-tight">
          <span className="text-white" style={{ WebkitTextStroke: '1px white', color: 'transparent' }}>
            Tech that feels
          </span>{' '}
          <span className="text-[#ccd6f6]">out of this world</span>
        </h2>
        <p className="text-sm font-medium text-[#8db4f5]">
          We boost brands so much it feels like running a space programme on here!
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto relative z-10">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            viewport={{ once: true }}
            className="bg-[#111111] border border-[#1a1a1a] rounded-2xl px-6 pt-[40px] pb-[40px] flex flex-col justify-between text-center shadow-xl hover:shadow-[#66ccff]/30 transition-all duration-300 hover:ring-2 hover:ring-[#66ccff]/50"
          >
            {/* Icon */}
            <div className="mb-6 flex justify-center">{service.icon}</div>

            {/* Title + Intro */}
            <div>
              <h3 className="text-white font-bold mb-4 tracking-wide" style={{ fontSize: '22px' }}>
                {service.title}
              </h3>
              <p className="text-[#a5a5a5] text-sm mb-4 px-2">
                <span className="text-[#8db4f5] font-semibold block mb-1">
                  {service.intro.split('.')[0]}.
                </span>
                {service.intro.split('.').slice(1).join('.')}
              </p>
              <ul className="text-sm font-medium text-[#ccd6f6] mt-4 space-y-2">
                {service.features.map((item, i) => (
                  <li key={i} className="flex items-center justify-center gap-2">
                    <span className="w-2 h-2 rounded-sm bg-[#ccd6f6] inline-block" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA Button with vibration */}
            <motion.button
              whileTap={{ scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 300, damping: 15 }}
              className="mt-6 bg-[#ccd6f6] text-black font-semibold py-2 px-4 rounded-lg hover:bg-white transition"
              onClick={() => {
                if (typeof window !== 'undefined' && 'vibrate' in navigator) {
                  navigator.vibrate(10); // Haptic feedback for mobile
                }
              }}
            >
              Get Started
            </motion.button>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
