import React from 'react';
import heroImage from '../assets/images/abayas/hero_mannequin_beige.png';

export default function Hero({ onExploreClick }) {
  return (
    <section className="relative w-full overflow-hidden bg-[#e5ded4]">
      <div className="max-w-[1440px] mx-auto relative min-h-[70vh] md:min-h-[85vh] flex items-center justify-center">
        <img
          src={heroImage}
          alt="NaeemAbaya Luxury Couture — Beige Abaya on Mannequin"
          className="w-full h-full object-cover object-center absolute inset-0"
        />
        {/* Subtle vignette for depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-black/10 pointer-events-none" />
      </div>
    </section>
  );
}
