import React from 'react';
import { ArrowRight } from 'lucide-react';
import imgChampagneSatin from '../assets/images/abayas/champagne_satin_silk.png';
import imgRoyalGoldZari  from '../assets/images/abayas/royal_gold_zari.png';
import imgSaharaDrape    from '../assets/images/abayas/sahara_drape_black.png';

export default function SeasonalCollections({ onExploreCollection }) {
  return (
    <section id="seasonal" className="py-20 bg-[#f3f1ec]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-14">
          <span className="label-sub">CURATED SETS</span>
          <h2 className="section-title">Seasonal Collections</h2>
        </div>

        {/* Asymmetric Grid — Large left, two stacked right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-stretch">

          {/* Left Feature Card — The Ramadan Edit */}
          <div className="lg:col-span-7 relative group overflow-hidden rounded-sm min-h-[500px] flex flex-col justify-end p-8 md:p-12 text-white bg-[#1a1a18]">
            <img
              src={imgChampagneSatin}
              alt="The Ramadan Edit"
              className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 opacity-80"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent pointer-events-none" />

            <div className="relative z-10">
              <span className="text-[10px] tracking-[0.25em] uppercase text-[#d6be9c] font-semibold mb-2 block">
                EXCLUSIVE
              </span>
              <h3 className="font-heading text-3xl md:text-5xl font-normal mb-3 text-white">
                The Ramadan Edit
              </h3>
              <p className="text-xs md:text-sm text-gray-200 font-light mb-6">
                Graceful Silk &amp; Satin Elegance
              </p>
              <button
                onClick={() => onExploreCollection('ramadan')}
                className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#d6be9c] hover:text-white transition-colors border-b border-[#d6be9c] pb-1"
              >
                <span>EXPLORE EDIT</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right Column Stack */}
          <div className="lg:col-span-5 flex flex-col gap-4">

            {/* Top — Eid al-Fitr */}
            <div className="relative group overflow-hidden rounded-sm flex-1 min-h-[240px] flex flex-col justify-end p-6 text-white bg-[#1a1a18]">
              <img
                src={imgRoyalGoldZari}
                alt="Eid al-Fitr '26"
                className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 opacity-75"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />

              <div className="relative z-10">
                <h4 className="font-heading text-2xl font-normal mb-2 text-white">
                  Eid al-Fitr '26
                </h4>
                <button
                  onClick={() => onExploreCollection('eid')}
                  className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#d6be9c] hover:text-white transition-colors border-b border-[#d6be9c] pb-0.5"
                >
                  SHOP NOW
                </button>
              </div>
            </div>

            {/* Bottom — Signature Noir */}
            <div className="relative group overflow-hidden rounded-sm flex-1 min-h-[240px] flex flex-col justify-end p-6 text-white bg-[#1a1a18]">
              <img
                src={imgSaharaDrape}
                alt="Signature Noir"
                className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 opacity-75"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />

              <div className="relative z-10">
                <h4 className="font-heading text-2xl font-normal mb-2 text-white">
                  Signature Noir
                </h4>
                <button
                  onClick={() => onExploreCollection('noir')}
                  className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#d6be9c] hover:text-white transition-colors border-b border-[#d6be9c] pb-0.5"
                >
                  EXPLORE LOOKS
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
