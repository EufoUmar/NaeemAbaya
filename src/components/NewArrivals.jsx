import React from 'react';
import { NEW_ARRIVALS } from '../data/products';
import ProductCard from './ProductCard';

export default function NewArrivals({
  currency,
  onQuickView,
  onToggleWishlist,
  wishlist
}) {
  return (
    <section id="new-arrivals" className="py-16 md:py-20 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex items-end justify-between mb-10 border-b border-[#e5e1d8] pb-4">
          <div>
            <span className="label-sub text-[#40362e]">HAUTE COUTURE CATALOG</span>
            <h2 className="section-title text-[#1c1c1c]">New Arrivals</h2>
          </div>
          <p className="text-xs text-[#6e6b66] hidden sm:block">
            Click <strong className="text-[#40362e]">Copy</strong> or <strong className="text-[#40362e]">Download</strong> on any abaya picture.
          </p>
        </div>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
          {NEW_ARRIVALS.map((product) => {
            const isWishlisted = wishlist.some((w) => w.id === product.id);

            return (
              <ProductCard
                key={product.id}
                product={product}
                currency={currency}
                isWishlisted={isWishlisted}
                onToggleWishlist={onToggleWishlist}
                onQuickView={onQuickView}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
