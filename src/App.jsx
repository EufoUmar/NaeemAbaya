import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import NewArrivals from './components/NewArrivals';
import SeasonalCollections from './components/SeasonalCollections';
import OurStory from './components/OurStory';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

import ProductQuickViewModal from './components/ProductQuickViewModal';
import CartDrawer from './components/CartDrawer';
import WishlistDrawer from './components/WishlistDrawer';
import CheckoutModal from './components/CheckoutModal';

export default function App() {
  const [currency, setCurrency] = useState('PKR');
  const [searchQuery, setSearchQuery] = useState('');
  
  // Cart & Wishlist state
  const [cartItems, setCartItems] = useState([]);
  const [wishlist, setWishlist] = useState([]);

  // Modals & Drawers state
  const [quickViewProduct, setQuickViewProduct] = useState(null);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

  // Handlers
  const handleAddToCart = (product) => {
    setCartItems((prev) => {
      const existing = prev.find(
        (item) => item.id === product.id && item.selectedSize === (product.selectedSize || '56')
      );
      if (existing) {
        return prev.map((item) =>
          item.id === product.id && item.selectedSize === (product.selectedSize || '56')
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prev, { ...product, quantity: 1, selectedSize: product.selectedSize || '56' }];
      }
    });
    setIsCartOpen(true);
  };

  const handleUpdateQuantity = (itemToUpdate, newQty) => {
    if (newQty <= 0) {
      handleRemoveFromCart(itemToUpdate);
      return;
    }
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === itemToUpdate.id && item.selectedSize === itemToUpdate.selectedSize
          ? { ...item, quantity: newQty }
          : item
      )
    );
  };

  const handleRemoveFromCart = (itemToRemove) => {
    setCartItems((prev) =>
      prev.filter(
        (item) => !(item.id === itemToRemove.id && item.selectedSize === itemToRemove.selectedSize)
      )
    );
  };

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
        cartCount={cartItems.reduce((acc, item) => acc + item.quantity, 0)}
        wishlistCount={wishlist.length}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenWishlist={() => setIsWishlistOpen(true)}
        activeCurrency={currency}
        onChangeCurrency={setCurrency}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        onNavigateSection={handleNavigateSection}
      />

      {/* Main Content Sections */}
      <main className="main-content">
        {/* Hero Section with Mannequin Beige Abaya photo matching user image */}
        <Hero onExploreClick={() => handleNavigateSection('new-arrivals')} />

        {/* Section 1: New Arrivals (The Sahara Drape, Oasis Silk Abaya, Pearl Crepe Kaftan) */}
        <NewArrivals
          currency={currency}
          onQuickView={setQuickViewProduct}
          onAddToCart={handleAddToCart}
          onToggleWishlist={handleToggleWishlist}
          wishlist={wishlist}
        />

        {/* Section 2: Seasonal Collections (The Ramadan Edit, Eid al-Fitr '26, Signature Noir) */}
        <SeasonalCollections
          onExploreCollection={() => handleNavigateSection('new-arrivals')}
        />

        {/* Section 3: Our Story ("Crafted for the Modern Woman, Rooted in Heritage.") */}
        <OurStory />
      </main>

      {/* Footer Section ("Join the NaeemAbaya Club") */}
      <Footer />

      {/* Drawers & Modals */}
      {quickViewProduct && (
        <ProductQuickViewModal
          product={quickViewProduct}
          currency={currency}
          isWishlisted={wishlist.some((w) => w.id === quickViewProduct.id)}
          onClose={() => setQuickViewProduct(null)}
          onAddToCart={handleAddToCart}
          onToggleWishlist={handleToggleWishlist}
        />
      )}

      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveFromCart}
        currency={currency}
        onProceedCheckout={() => {
          setIsCartOpen(false);
          setIsCheckoutOpen(true);
        }}
      />

      <WishlistDrawer
        isOpen={isWishlistOpen}
        onClose={() => setIsWishlistOpen(false)}
        wishlistItems={wishlist}
        onRemoveFromWishlist={handleToggleWishlist}
        onAddToCart={handleAddToCart}
        currency={currency}
      />

      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
        cartItems={cartItems}
        currency={currency}
        onOrderComplete={() => {
          setCartItems([]);
          setIsCheckoutOpen(false);
        }}
      />

      {/* WhatsApp Floating Button — links to 03472661808 */}
      <WhatsAppButton />
    </div>
  );
}
