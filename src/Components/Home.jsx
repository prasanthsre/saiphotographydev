import React from 'react';

import Hero from './Hero';
import OurExplain from './OurExplain';
import VideoShow from './VideoShow';
import WhyChooseUs from './WhyChooseUs';
import Cover from './cover';
import ImageSliders from './ImageSliders';
import About from './About';
import Services from './Services';
import Contact from './Contact'; // ✅ use your Contact component, not lucide-react
import Footer from './Footer';
import Header from './Header';
import { ServicesCard } from './ServicesCard';

const Home = () => {
  return (
    <div>
      {/* Header is global, but if you want it inside Home keep it here */}
      <Header />

      {/* Sections with IDs for smooth scrolling */}
      <section id="home">
        <Hero />
      </section>

  <OurExplain /> 
      <VideoShow />
      <WhyChooseUs />
      <Cover />
      <ImageSliders />

      <section id="about">
        <About />
      </section>

      <section id="services">
        <Services />
        <ServicesCard />
      </section>

      <section id="contact">
        <Contact />
      </section>

      <Footer />
    </div>
  );
};

export default Home;
