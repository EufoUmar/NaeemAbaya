import React from 'react';
import { NEW_ARRIVALS, CURRENCIES } from '../data/products';
import { Heart, Eye, ShoppingBag } from 'lucide-react';

export default function NewArrivals({
  currency,
  onQuickView,
  onAddToCart,
  onToggleWishlist,
  wishlist
}) {
  const curr = CURRENCIES[currency] || CURRENCIES.USD;

  return (
    <section id="new-arrivals" className="py-20 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex items-end justify-between mb-12 border-b border-[#e5e1d8] pb-4">
          <div>
            <span className="label-sub">COLLECTION</span>
            <h2 className="section-title">New Arrivals</h2>
          </div>
          <button
            onClick={() => {}}
            className="text-xs font-medium tracking-[0.2em] uppercase text-[#40362e] hover:opacity-70 transition-opacity pb-1"
          >
            VIEW ALL
          </button>
        </div>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {NEW_ARRIVALS.map((product) => {
            const convertedPrice = (product.priceUSD * curr.rate).toFixed(2);
            const isWishlisted = wishlist.some((w) => w.id === product.id);

            return (
              <div key={product.id} className="group flex flex-col cursor-pointer">
                {/* Image Aspect ratio card */}
                <div
                  onClick={() => onQuickView(product)}
                  className="img-wrapper aspect-[3/4] mb-4 relative rounded-sm bg-[#e8e4dc]"
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover object-center"
                    loading="lazy"
                  />

                  {/* Wishlist Heart */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onToggleWishlist(product);
                    }}
                    className="absolute top-3 right-3 p-2 rounded-full bg-white/80 backdrop-blur-sm text-[#1c1c1c] hover:bg-white transition-colors"
                  >
                    <Heart className={`w-4 h-4 ${isWishlisted ? 'fill-[#b86e4e] text-[#b86e4e]' : ''}`} />
                  </button>

                  {/* Quick view overlay */}
                  <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onQuickView(product);
                      }}
                      className="bg-white/90 hover:bg-white text-[#1c1c1c] text-xs font-medium uppercase tracking-wider py-2.5 px-4 rounded-sm flex items-center gap-2 transition-colors"
                    >
                      <Eye className="w-3.5 h-3.5" /> Quick View
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onAddToCart(product);
                      }}
                      className="bg-[#40362e] hover:bg-[#26201b] text-white text-xs font-medium uppercase tracking-wider py-2.5 px-4 rounded-sm flex items-center gap-2 transition-colors"
                    >
                      <ShoppingBag className="w-3.5 h-3.5" /> Add
                    </button>
                  </div>
                </div>

                {/* Info below image */}
                <div className="text-center">
                  <h3
                    onClick={() => onQuickView(product)}
                    className="font-heading text-lg text-[#1c1c1c] hover:text-[#b38b59] transition-colors mb-1"
                  >
                    {product.name}
                  </h3>
                  <p className="text-xs text-[#6e6b66] font-light">
                    {curr.symbol}{convertedPrice}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
