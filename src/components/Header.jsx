import React, { useState } from 'react';
import { ShoppingBag, Heart, Search, Menu, X, Globe } from 'lucide-react';
import { CURRENCIES } from '../data/products';

export default function Header({
  cartCount,
  wishlistCount,
  onOpenCart,
  onOpenWishlist,
  activeCurrency,
  onChangeCurrency,
  searchQuery,
  onSearchChange,
  onNavigateSection
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showCurrencyDropdown, setShowCurrencyDropdown] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#FAF8F5]/90 backdrop-blur-md border-b border-[#e5e1d8]">
      {/* Top Banner Ticker */}
      <div className="bg-[#40362e] text-[#f4efe6] text-[11px] py-1.5 px-4 tracking-widest text-center uppercase font-light flex items-center justify-between">
        <div className="max-w-7xl mx-auto w-full flex items-center justify-between">
          <span className="mx-auto sm:mx-0">COMPLIMENTARY WORLDWIDE EXPRESS SHIPPING ON ALL ORDERS</span>
          <div className="hidden sm:flex items-center gap-4">
            <div className="relative">
              <button
                onClick={() => setShowCurrencyDropdown(!showCurrencyDropdown)}
                className="flex items-center gap-1 hover:text-[#d6be9c] transition-colors py-0.5 px-2 rounded border border-white/20"
              >
                <Globe className="w-3 h-3 text-[#d6be9c]" />
                <span>{CURRENCIES[activeCurrency]?.label}</span>
              </button>
              {showCurrencyDropdown && (
                <div className="absolute right-0 mt-1 w-32 bg-[#40362e] border border-white/20 rounded shadow-2xl py-1 z-50 text-left">
                  {Object.keys(CURRENCIES).map((currKey) => (
                    <button
                      key={currKey}
                      onClick={() => {
                        onChangeCurrency(currKey);
                        setShowCurrencyDropdown(false);
                      }}
                      className={`w-full text-left px-3 py-1.5 text-xs hover:bg-white/10 transition-colors ${
                        activeCurrency === currKey ? 'text-[#d6be9c] font-bold' : 'text-gray-200'
                      }`}
                    >
                      {CURRENCIES[currKey].label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Main Bar */}
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Mobile menu trigger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-[#1c1c1c]"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        {/* Left Nav */}
        <nav className="hidden md:flex items-center gap-8 text-xs font-medium tracking-[0.2em] text-[#40362e] uppercase">
          <button onClick={() => onNavigateSection('new-arrivals')} className="hover:opacity-75 transition-opacity">
            Collection
          </button>
          <button onClick={() => onNavigateSection('seasonal')} className="hover:opacity-75 transition-opacity">
            Seasonal
          </button>
          <button onClick={() => onNavigateSection('our-story')} className="hover:opacity-75 transition-opacity">
            Our Story
          </button>
        </nav>

        {/* Brand Logo - NaeemAbaya */}
        <a href="#" className="font-heading text-2xl md:text-3xl tracking-[0.1em] font-normal text-[#1c1c1c]">
          NaeemAbaya
        </a>

        {/* Right Actions */}
        <div className="flex items-center gap-4">
          <div className="relative hidden lg:block w-40">
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              className="w-full bg-transparent border-b border-[#1c1c1c]/30 text-xs py-1 pl-6 pr-2 text-[#1c1c1c] placeholder-gray-400 focus:outline-none focus:border-[#1c1c1c]"
            />
            <Search className="w-3.5 h-3.5 text-gray-500 absolute left-0 top-1.5" />
          </div>

          <button
            onClick={onOpenWishlist}
            className="relative p-2 text-[#1c1c1c] hover:opacity-70"
            title="Wishlist"
          >
            <Heart className="w-5 h-5 stroke-[1.5]" />
            {wishlistCount > 0 && (
              <span className="absolute top-0 right-0 bg-[#b86e4e] text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-semibold">
                {wishlistCount}
              </span>
            )}
          </button>

          <button
            onClick={onOpenCart}
            className="relative p-2 text-[#1c1c1c] hover:opacity-70 flex items-center gap-1.5"
            title="Shopping Bag"
          >
            <ShoppingBag className="w-5 h-5 stroke-[1.5]" />
            {cartCount > 0 && (
              <span className="bg-[#40362e] text-[#f4efe6] text-[10px] px-1.5 py-0.5 rounded-full font-medium">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#FAF8F5] border-b border-[#e5e1d8] px-6 py-4 flex flex-col gap-4 animate-slide-up">
          <button
            onClick={() => { onNavigateSection('new-arrivals'); setMobileMenuOpen(false); }}
            className="text-left text-xs tracking-widest text-[#40362e] uppercase font-medium"
          >
            Collection
          </button>
          <button
            onClick={() => { onNavigateSection('seasonal'); setMobileMenuOpen(false); }}
            className="text-left text-xs tracking-widest text-[#40362e] uppercase font-medium"
          >
            Seasonal
          </button>
          <button
            onClick={() => { onNavigateSection('our-story'); setMobileMenuOpen(false); }}
            className="text-left text-xs tracking-widest text-[#40362e] uppercase font-medium"
          >
            Our Story
          </button>
        </div>
      )}
    </header>
  );
}
