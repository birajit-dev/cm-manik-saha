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
export default function HomePage() {
  return (
    <div>
      <Bjp />
      <About />
      <Press />
      {/* <Banner /> */}
      <Cities />
      <Features />
      <AtlantaList />
      <Category />
    </div>
  );
}
