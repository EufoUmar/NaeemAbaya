import React, { useState } from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
    }
  };

  return (
    <footer className="bg-[#f2eae1] text-[#1c1c1c] border-t border-[#e5e1d8]">
      {/* Newsletter Banner - Join the NaeemAbaya Club */}
      <div className="max-w-4xl mx-auto px-6 py-20 text-center">
        <h2 className="font-heading text-3xl md:text-4xl font-normal mb-3 text-[#1c1c1c]">
          Join the NaeemAbaya Club
        </h2>
        <p className="text-xs md:text-sm text-[#6e6b66] font-light max-w-lg mx-auto mb-10">
          Receive early access to new drops, private sales & exclusive editorial content.
        </p>

        {subscribed ? (
          <div className="inline-flex items-center gap-2 p-4 rounded-sm bg-[#40362e] text-[#f4efe6] text-xs uppercase tracking-widest animate-slide-up">
            <CheckCircle2 className="w-4 h-4 text-[#d6be9c]" />
            Welcome to the NaeemAbaya Club. Check your inbox for your 10% VIP code!
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="max-w-md mx-auto flex items-center border-b border-[#1c1c1c] pb-2">
            <input
              type="email"
              required
              placeholder="Your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-transparent text-xs text-[#1c1c1c] placeholder-gray-500 py-1.5 focus:outline-none"
            />
            <button
              type="submit"
              className="text-xs font-semibold tracking-[0.2em] uppercase text-[#40362e] hover:opacity-75 shrink-0 pl-4"
            >
              SIGN UP
            </button>
          </form>
        )}
      </div>

      {/* Main Footer Links */}
      <div className="border-t border-[#e5e1d8] py-12 bg-[#ebe1d5]">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8 text-xs text-[#6e6b66]">
          <div>
            <h3 className="font-heading text-lg font-normal text-[#1c1c1c] mb-3">NaeemAbaya</h3>
            <p className="font-light leading-relaxed">
              Haute Couture Modest Fashion Atelier.<br />
              Dubai • Riyadh • London
            </p>
          </div>

          <div>
            <h4 className="font-bold text-[#1c1c1c] uppercase tracking-wider mb-3">Collection</h4>
            <ul className="space-y-2 font-light">
              <li><a href="#new-arrivals" className="hover:text-[#1c1c1c]">New Arrivals</a></li>
              <li><a href="#seasonal" className="hover:text-[#1c1c1c]">The Ramadan Edit</a></li>
              <li><a href="#seasonal" className="hover:text-[#1c1c1c]">Eid al-Fitr '26</a></li>
              <li><a href="#new-arrivals" className="hover:text-[#1c1c1c]">Bespoke Tailoring</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-[#1c1c1c] uppercase tracking-wider mb-3">Customer Care</h4>
            <ul className="space-y-2 font-light">
              <li><a href="#" className="hover:text-[#1c1c1c]">Custom Sizing Guide</a></li>
              <li><a href="#" className="hover:text-[#1c1c1c]">Worldwide Express Delivery</a></li>
              <li><a href="#" className="hover:text-[#1c1c1c]">Returns & Exchanges</a></li>
              <li><a href="#" className="hover:text-[#1c1c1c]">Atelier Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-[#1c1c1c] uppercase tracking-wider mb-3">Boutiques</h4>
            <p className="font-light leading-relaxed mb-2">
              Dubai Mall Flagship, UAE<br />
              Kingdom Centre, Riyadh, KSA
            </p>
            <p className="text-[11px] text-[#40362e]">© 2026 NaeemAbaya. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
