import React from 'react';
import { Scissors, Sparkles, Gem } from 'lucide-react';

export default function OurStory() {
  return (
    <section id="our-story" className="py-24 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column Image (Tailor Craftsmanship) */}
          <div className="lg:col-span-6">
            <div className="aspect-[4/5] rounded-sm overflow-hidden bg-[#e5ded4] shadow-xl relative">
              <img
                src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&q=80&w=1000"
                alt="NaeemAbaya Tailor Craftsmanship"
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>

          {/* Right Column Content */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <span className="label-sub">OUR STORY</span>

            <h2 className="font-heading text-3xl md:text-5xl font-normal leading-tight text-[#1c1c1c] mb-6">
              Crafted for the Modern Woman, Rooted in Heritage.
            </h2>

            <p className="text-xs md:text-sm text-[#6e6b66] font-light leading-relaxed mb-8">
              At <strong className="font-semibold text-[#1c1c1c]">NaeemAbaya</strong>, we believe modest clothing is an expression of identity. Every piece is meticulously handcrafted with luxury materials, tailored to provide timeless elegance and comfort for every occasion.
            </p>

            {/* Feature Bullet 1 */}
            <div className="flex items-start gap-4 mb-6">
              <div className="p-2 rounded-full bg-[#f3f1ec] text-[#40362e] border border-[#e5e1d8] mt-0.5">
                <Scissors className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#1c1c1c]">
                  Custom Tailoring
                </h4>
                <p className="text-xs text-[#6e6b66] font-light mt-0.5">
                  Designed to fit your body & proportions.
                </p>
              </div>
            </div>

            {/* Feature Bullet 2 */}
            <div className="flex items-start gap-4 mb-10">
              <div className="p-2 rounded-full bg-[#f3f1ec] text-[#40362e] border border-[#e5e1d8] mt-0.5">
                <Gem className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#1c1c1c]">
                  Fine Materials
                </h4>
                <p className="text-xs text-[#6e6b66] font-light mt-0.5">
                  Hand-selected silks, crepes & organza.
                </p>
              </div>
            </div>

            {/* Button */}
            <div>
              <button className="btn-dark-earth">
                OUR STORY
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
