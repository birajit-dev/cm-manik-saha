'user client';
import React from 'react';

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
