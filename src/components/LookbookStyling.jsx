import React, { useState } from 'react';
import { LOOKBOOK_SETS } from '../data/products';
import { Sparkles, Check, ArrowRight } from 'lucide-react';

export default function LookbookStyling({ onSelectAbayaFromLookbook }) {
  const [selectedSet, setSelectedSet] = useState(LOOKBOOK_SETS[0]);

  return (
    <section id="lookbook" className="py-20 bg-[#0a0a0c] border-b border-[#D4AF37]/20">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#18181f] border border-[#D4AF37]/40 text-[#D4AF37] text-xs font-semibold tracking-widest uppercase mb-4">
            <Sparkles className="w-3.5 h-3.5" /> Virtual Stylist
          </div>
          <h2 className="text-3xl md:text-5xl font-bold font-heading text-white mb-4">
            Curated <span className="gold-gradient-text">Ensemble Lookbook</span>
          </h2>
          <p className="text-gray-300 text-xs md:text-sm font-light leading-relaxed">
            Pair your abaya with matching inner slips, silk sheilas, and luxury accessories for a seamless modest silhouette.
          </p>
        </div>

        {/* Lookbook Tabs */}
        <div className="flex justify-center gap-3 mb-10 overflow-x-auto pb-2">
          {LOOKBOOK_SETS.map((set) => (
            <button
              key={set.id}
              onClick={() => setSelectedSet(set)}
              className={`py-2.5 px-5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all whitespace-nowrap ${
                selectedSet.id === set.id
                  ? 'bg-[#D4AF37] text-black shadow-[0_0_15px_rgba(212,175,55,0.4)]'
                  : 'bg-[#18181f] text-gray-300 border border-white/10 hover:border-[#D4AF37]'
              }`}
            >
              {set.title}
            </button>
          ))}
        </div>

        {/* Selected Set Detail Display */}
        <div className="glass-card p-6 md:p-10 rounded-2xl bg-[#121216] border border-[#D4AF37]/30 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center max-w-5xl mx-auto">
          {/* Image */}
          <div className="lg:col-span-6 relative aspect-[3/4] overflow-hidden rounded-xl bg-black/40">
            <img
              src={selectedSet.image}
              alt={selectedSet.title}
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute top-4 left-4">
              <span className="badge-gold backdrop-blur-md">Haute Couture Ensemble</span>
            </div>
          </div>

          {/* Details breakdown */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
            <div>
              <h3 className="text-2xl font-bold font-heading text-white mb-2">
                {selectedSet.title}
              </h3>
              <p className="text-xs text-gray-400 font-light mb-6">
                Curated by Naeem Abaya Senior Stylists in Dubai Flagship Atelier.
              </p>

              <div className="space-y-4">
                <div className="p-3.5 rounded-lg bg-[#18181f] border border-white/10 flex items-start gap-3">
                  <span className="p-1 rounded bg-[#D4AF37]/20 text-[#D4AF37]">
                    <Check className="w-4 h-4" />
                  </span>
                  <div>
                    <h4 className="text-xs font-bold text-white uppercase tracking-wider">Primary Abaya</h4>
                    <p className="text-xs text-[#F3E5AB] font-serif">{selectedSet.abaya}</p>
                  </div>
                </div>

                <div className="p-3.5 rounded-lg bg-[#18181f] border border-white/10 flex items-start gap-3">
                  <span className="p-1 rounded bg-[#D4AF37]/20 text-[#D4AF37]">
                    <Check className="w-4 h-4" />
                  </span>
                  <div>
                    <h4 className="text-xs font-bold text-white uppercase tracking-wider">Matching Inner Slip</h4>
                    <p className="text-xs text-gray-300">{selectedSet.innerDress}</p>
                  </div>
                </div>

                <div className="p-3.5 rounded-lg bg-[#18181f] border border-white/10 flex items-start gap-3">
                  <span className="p-1 rounded bg-[#D4AF37]/20 text-[#D4AF37]">
                    <Check className="w-4 h-4" />
                  </span>
                  <div>
                    <h4 className="text-xs font-bold text-white uppercase tracking-wider">Silk Sheila / Hijab</h4>
                    <p className="text-xs text-gray-300">{selectedSet.sheila}</p>
                  </div>
                </div>

                <div className="p-3.5 rounded-lg bg-[#18181f] border border-white/10 flex items-start gap-3">
                  <span className="p-1 rounded bg-[#D4AF37]/20 text-[#D4AF37]">
                    <Check className="w-4 h-4" />
                  </span>
                  <div>
                    <h4 className="text-xs font-bold text-white uppercase tracking-wider">Recommended Accessories</h4>
                    <p className="text-xs text-gray-300">{selectedSet.accessories}</p>
                  </div>
                </div>
              </div>
            </div>

            <button
              onClick={() => onSelectAbayaFromLookbook(selectedSet.abaya)}
              className="btn-primary py-3.5 text-xs uppercase tracking-wider w-full flex items-center justify-center gap-2"
            >
              <span>Explore {selectedSet.abaya}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
