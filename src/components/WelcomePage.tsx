import React from 'react';
import Hero from './home/Hero';
import TrendingBantuan from './home/TrendingBantuan';

export default function WelcomePage() {
  return (
    <div className="flex flex-col">
      <Hero />
      <TrendingBantuan />
    </div>
  );
}