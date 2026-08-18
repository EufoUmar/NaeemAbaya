import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import NewArrivals from './components/NewArrivals';
import SeasonalCollections from './components/SeasonalCollections';
import OurStory from './components/OurStory';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

import ProductQuickViewModal from './components/ProductQuickViewModal';
import WishlistDrawer from './components/WishlistDrawer';

export default function App() {
  const [currency, setCurrency] = useState('PKR');
  const [searchQuery, setSearchQuery] = useState('');
  
  // Saved Wishlist / Media state
  const [wishlist, setWishlist] = useState([]);

  // Modals & Drawers state
  const [quickViewProduct, setQuickViewProduct] = useState(null);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);

  const handleToggleWishlist = (product) => {
    setWishlist((prev) => {
      const exists = prev.some((item) => item.id === product.id);
      if (exists) {
        return prev.filter((item) => item.id !== product.id);
      } else {
        return [...prev, product];
      }
    });
  };

  const handleNavigateSection = (sectionId) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="app-container min-h-screen bg-[#FAF8F5] text-[#1c1c1c] font-sans antialiased">
      {/* Navigation Header */}
      <Header
        wishlistCount={wishlist.length}
        onOpenWishlist={() => setIsWishlistOpen(true)}
        activeCurrency={currency}
        onChangeCurrency={setCurrency}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        onNavigateSection={handleNavigateSection}
      />

      {/* Main Content Sections */}
      <main className="main-content">
        {/* Hero Section */}
        <Hero onExploreClick={() => handleNavigateSection('new-arrivals')} />

        {/* Section 1: New Arrivals Catalog with Download & Copy image buttons */}
        <NewArrivals
          currency={currency}
          onQuickView={setQuickViewProduct}
          onToggleWishlist={handleToggleWishlist}
          wishlist={wishlist}
        />

        {/* Section 2: Seasonal Collections */}
        <SeasonalCollections
          onExploreCollection={() => handleNavigateSection('new-arrivals')}
        />

        {/* Section 3: Our Story */}
        <OurStory />
      </main>

      {/* Footer Section */}
      <Footer />

      {/* Drawers & Modals */}
      {quickViewProduct && (
        <ProductQuickViewModal
          product={quickViewProduct}
          currency={currency}
          isWishlisted={wishlist.some((w) => w.id === quickViewProduct.id)}
          onClose={() => setQuickViewProduct(null)}
          onToggleWishlist={handleToggleWishlist}
        />
      )}

      <WishlistDrawer
        isOpen={isWishlistOpen}
        onClose={() => setIsWishlistOpen(false)}
        wishlistItems={wishlist}
        onRemoveFromWishlist={handleToggleWishlist}
        currency={currency}
      />

      {/* WhatsApp Floating Button */}
      <WhatsAppButton />
    </div>
  );
}
