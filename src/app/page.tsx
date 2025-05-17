'user client';
import React from 'react';
import Banner from './components/Banner';
import Cities from './components/Cities'; // Changed to default import
import Features from './components/Features';
import Category from './components/Category';
import AtlantaList from './components/AtlantaList';
import Bjp from './components/Bjp';
import About from './components/About';
import Press from './components/Press';
import Timeline from './components/Timeline';
import Video from './components/Video';
import Photos from './components/Photos';
import Follow from './components/Follow';
import Footer from './components/Footer';
export default function HomePage() {
  return (
    <div>
      <Bjp />
      <About />
      <Press />
      <Timeline />
      <Video />
      <Photos />
      <Follow />
      <Footer />
      {/* <Banner />
      <Cities />
      <Features />
      <AtlantaList />
      <Category /> */}
    </div>
  );
}
