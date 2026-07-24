import React, { useState } from 'react';
import { Ruler, Scissors, Sparkles, CheckCircle2, ShieldCheck, ArrowRight } from 'lucide-react';
import imgRoyalGoldZari from '../assets/images/abayas/royal_gold_zari.png';

export default function CustomTailoringCalculator({ onAddToCartCustom }) {
  const [height, setHeight] = useState('56');
  const [bust, setBust] = useState('38');
  const [shoulder, setShoulder] = useState('15.5');
  const [sleeveStyle, setSleeveStyle] = useState('Zari Embroidered Cuff');
  const [fabricChoice, setFabricChoice] = useState('Pure Dubai Silk Nida');
  const [colorChoice, setColorChoice] = useState('Royal Onyx Black');

  const [addedNotice, setAddedNotice] = useState(false);

  const handleCustomSubmit = () => {
    const bespokeItem = {
      id: 'custom-tailored-' + Date.now(),
      name: `Bespoke Custom Stitched Abaya (${fabricChoice})`,
      tagline: `Custom Specs: Length ${height}", Bust ${bust}", Sleeve: ${sleeveStyle}`,
      category: 'royal',
      priceUSD: 295,
      rating: 5.0,
      reviewsCount: 1,
      image: imgRoyalGoldZari,
      fabric: fabricChoice,
      color: colorChoice,
      selectedSize: `Bespoke (${height}" Length)`,
      customNotes: `Custom Specs -> Length: ${height}", Bust: ${bust}", Shoulder: ${shoulder}", Sleeve: ${sleeveStyle}, Color: ${colorChoice}`
    };

    onAddToCartCustom(bespokeItem);
    setAddedNotice(true);
    setTimeout(() => setAddedNotice(false), 4000);
  };

  return (
    <section id="tailoring" className="py-20 bg-[#0d0d11] border-b border-[#D4AF37]/20 relative overflow-hidden">
      {/* Glow Effects */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-[#D4AF37]/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#18181f] border border-[#D4AF37]/40 text-[#D4AF37] text-xs font-semibold tracking-widest uppercase mb-4">
            <Scissors className="w-3.5 h-3.5" /> Bespoke Atelier
          </div>
          <h2 className="text-3xl md:text-5xl font-bold font-heading text-white mb-4">
            Custom Measurement <span className="gold-gradient-text">Studio</span>
          </h2>
          <p className="text-gray-300 text-xs md:text-sm font-light leading-relaxed">
            Every woman deserves an abaya that drapes flawlessly. Design your tailored garment with custom sleeve cuts, necklines, and exact length specifications.
          </p>
        </div>

        {/* Studio Box Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Form (8 cols) */}
          <div className="lg:col-span-7 glass-card p-6 md:p-8 rounded-2xl bg-[#141419]/90 border border-[#D4AF37]/30">
            <h3 className="text-lg font-heading font-bold text-white mb-6 flex items-center gap-2">
              <Ruler className="w-5 h-5 text-[#D4AF37]" />
              Configure Your Specs
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
              {/* Length Selection */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-300 mb-2">
                  Abaya Length (Inches)
                </label>
                <select
                  value={height}
                  onChange={(e) => setHeight(e.target.value)}
                  className="w-full bg-[#18181f] border border-[#D4AF37]/30 rounded-lg p-3 text-xs text-white focus:outline-none focus:border-[#D4AF37]"
                >
                  <option value="52">52 Inches (Recommended for Height 5'0" - 5'2")</option>
                  <option value="54">54 Inches (Recommended for Height 5'3" - 5'4")</option>
                  <option value="56">56 Inches (Recommended for Height 5'5" - 5'6")</option>
                  <option value="58">58 Inches (Recommended for Height 5'7" - 5'8")</option>
                  <option value="60">60 Inches (Recommended for Height 5'9"+)</option>
                </select>
              </div>

              {/* Fabric Choice */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-300 mb-2">
                  Fabric Type
                </label>
                <select
                  value={fabricChoice}
                  onChange={(e) => setFabricChoice(e.target.value)}
                  className="w-full bg-[#18181f] border border-[#D4AF37]/30 rounded-lg p-3 text-xs text-white focus:outline-none focus:border-[#D4AF37]"
                >
                  <option value="Pure Dubai Silk Nida">Pure Dubai Silk Nida (Silky & Light)</option>
                  <option value="Royal Plush Velvet">Royal Plush Velvet (Winter Occasion)</option>
                  <option value="Japanese Satin Silk">Japanese Satin Silk (Glossy Sheen)</option>
                  <option value="Breathable Matte Crepe">Breathable Matte Crepe (Everyday)</option>
                </select>
              </div>

              {/* Bust Size */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-300 mb-2">
                  Bust Circumference (Inches)
                </label>
                <input
                  type="number"
                  value={bust}
                  onChange={(e) => setBust(e.target.value)}
                  className="w-full bg-[#18181f] border border-[#D4AF37]/30 rounded-lg p-3 text-xs text-white focus:outline-none focus:border-[#D4AF37]"
                  placeholder="e.g. 38"
                />
              </div>

              {/* Shoulder Width */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-300 mb-2">
                  Shoulder Width (Inches)
                </label>
                <input
                  type="number"
                  value={shoulder}
                  onChange={(e) => setShoulder(e.target.value)}
                  className="w-full bg-[#18181f] border border-[#D4AF37]/30 rounded-lg p-3 text-xs text-white focus:outline-none focus:border-[#D4AF37]"
                  placeholder="e.g. 15.5"
                />
              </div>
            </div>

            {/* Sleeve Style Buttons */}
            <div className="mb-6">
              <label className="block text-xs font-bold uppercase tracking-wider text-gray-300 mb-2">
                Sleeve & Cuff Cut
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {[
                  'Zari Embroidered Cuff',
                  'Bell Flare Sleeve',
                  'Elasticized Wrist',
                  'Kimono Oversized',
                  'Scalloped Lace Cuff',
                  'Fitted Button Cuff'
                ].map((style) => (
                  <button
                    key={style}
                    onClick={() => setSleeveStyle(style)}
                    className={`p-2.5 text-[11px] rounded-lg border text-left font-medium transition-all ${
                      sleeveStyle === style
                        ? 'border-[#D4AF37] bg-[#D4AF37]/20 text-[#F3E5AB] font-bold'
                        : 'border-white/10 bg-[#18181f] text-gray-300 hover:border-gray-400'
                    }`}
                  >
                    {style}
                  </button>
                ))}
              </div>
            </div>

            {/* Submit to Bag */}
            <div className="pt-4 border-t border-white/10 flex items-center justify-between gap-4">
              <div>
                <span className="text-[10px] text-gray-400 uppercase tracking-widest block">Custom Stitching Fee Included</span>
                <span className="text-xl font-bold font-heading text-[#F3E5AB]">$295 USD</span>
              </div>

              <button
                onClick={handleCustomSubmit}
                className="btn-primary py-3 px-6 text-xs uppercase tracking-wider flex items-center gap-2"
              >
                <span>Add Bespoke Fit to Bag</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {addedNotice && (
              <div className="mt-4 p-3 rounded-lg bg-emerald-950/80 border border-emerald-500/50 text-emerald-300 text-xs flex items-center gap-2 animate-slide-up">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                Custom tailored order specifications appended to your bag!
              </div>
            )}
          </div>

          {/* Right Live Preview Card (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <div className="glass-card p-6 rounded-2xl bg-gradient-to-br from-[#18181f] to-[#0f0f14] border border-[#D4AF37]/40 shadow-2xl relative">
              <div className="flex items-center justify-between mb-4 border-b border-white/10 pb-3">
                <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4" /> Bespoke Specification Card
                </span>
                <span className="badge-gold">Custom Atelier</span>
              </div>

              <div className="space-y-3 text-xs mb-6 text-gray-300">
                <div className="flex justify-between border-b border-white/5 pb-2">
                  <span className="text-gray-400">Target Length:</span>
                  <span className="font-bold text-white">{height} Inches</span>
                </div>
                <div className="flex justify-between border-b border-white/5 pb-2">
                  <span className="text-gray-400">Bust Circumference:</span>
                  <span className="font-bold text-white">{bust} Inches</span>
                </div>
                <div className="flex justify-between border-b border-white/5 pb-2">
                  <span className="text-gray-400">Shoulder Width:</span>
                  <span className="font-bold text-white">{shoulder} Inches</span>
                </div>
                <div className="flex justify-between border-b border-white/5 pb-2">
                  <span className="text-gray-400">Selected Sleeve Cut:</span>
                  <span className="font-bold text-[#D4AF37]">{sleeveStyle}</span>
                </div>
                <div className="flex justify-between border-b border-white/5 pb-2">
                  <span className="text-gray-400">Chosen Fabric:</span>
                  <span className="font-bold text-white">{fabricChoice}</span>
                </div>
              </div>

              <div className="p-3.5 rounded-lg bg-black/40 border border-white/5 flex items-center gap-3 text-gray-300 text-xs">
                <ShieldCheck className="w-6 h-6 text-[#D4AF37] shrink-0" />
                <div>
                  <h5 className="font-bold text-white">100% Fit Guarantee</h5>
                  <p className="text-[11px] text-gray-400">Free adjustments if the length varies by more than 0.5 inches.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
