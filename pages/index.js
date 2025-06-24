// pages/index.js
import Head from 'next/head';
import HeroSection from '../components/HeroSection';
import ServicesSection from '../components/ServicesSection';
import CoreFeaturesSection from '../components/CoreFeaturesSection';
import InfiniteScrollIcons from '../components/InfiniteScrollIcons';
import MeetProfessionals from '../components/MeetProfessionals';
import Footer from '../components/Footer';
import ContactSection from '../components/ContactSection';



export default function Home() {
  return (
    <>
      <Head>
        <title>Arctic44</title>
        <meta name="description" content="Arctic44 Official Website" />
      </Head>

      {/* You had an extra </div> here, removed it */}
      <div className="relative z-10">
        <HeroSection />
        <main>
          <CoreFeaturesSection />
          <ServicesSection />
          <InfiniteScrollIcons />
          <MeetProfessionals />
          <ContactSection />
          <Footer />
        </main>
      </div>
    </>
  );
}
