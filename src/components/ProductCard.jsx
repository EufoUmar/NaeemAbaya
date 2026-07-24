import React from 'react';
import { Star, Heart, Eye, ShoppingBag, Check } from 'lucide-react';
import { CURRENCIES } from '../data/products';

export default function ProductCard({
  product,
  currency,
  isWishlisted,
  isInCart,
  onToggleWishlist,
  onAddToCart,
  onQuickView
}) {
  const curr = CURRENCIES[currency] || CURRENCIES.USD;
  const convertedPrice = (product.priceUSD * curr.rate).toFixed(0);

  return (
    <div className="glass-card group relative flex flex-col overflow-hidden rounded-xl bg-[#141419] border border-[#D4AF37]/20 hover:border-[#D4AF37]/60 transition-all duration-300">
      {/* Product Image Container */}
      <div className="relative aspect-[3/4] overflow-hidden bg-black/40">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
          loading="lazy"
        />

        {/* Badges Overlay */}
        <div className="absolute top-3 left-3 flex flex-col gap-1.5 z-10">
          {product.isBestSeller && <span className="badge-gold">Best Seller</span>}
          {product.isNew && <span className="badge-new">New Release</span>}
        </div>

        {/* Wishlist Heart Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onToggleWishlist(product);
          }}
          className={`absolute top-3 right-3 p-2.5 rounded-full backdrop-blur-md transition-all z-10 ${
            isWishlisted
              ? 'bg-[#c98a96] text-white border border-[#c98a96]'
              : 'bg-black/60 text-gray-300 border border-white/10 hover:text-[#D4AF37] hover:border-[#D4AF37]'
          }`}
          aria-label="Wishlist"
        >
          <Heart className={`w-4 h-4 ${isWishlisted ? 'fill-white' : ''}`} />
        </button>

        {/* Hover Quick View Button */}
        <div className="absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2 z-10">
          <button
            onClick={() => onQuickView(product)}
            className="w-full py-2.5 px-4 rounded-lg bg-[#18181f]/90 border border-[#D4AF37] text-white text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-[#D4AF37] hover:text-black transition-colors"
          >
            <Eye className="w-3.5 h-3.5" />
            Quick Preview
          </button>
        </div>
      </div>

      {/* Product Details Box */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          {/* Rating */}
          <div className="flex items-center gap-1.5 text-xs text-amber-400 mb-1.5">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3 h-3 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <span className="text-gray-400 text-[11px]">({product.reviewsCount})</span>
          </div>

          {/* Title */}
          <h3
            onClick={() => onQuickView(product)}
            className="font-heading text-sm md:text-base font-semibold text-white group-hover:text-[#D4AF37] transition-colors cursor-pointer line-clamp-1 mb-1"
          >
            {product.name}
          </h3>

          <p className="text-xs text-gray-400 font-light line-clamp-1 mb-3">
            {product.fabric} • {product.color}
          </p>
        </div>

        {/* Footer Price & Add Button */}
        <div className="flex items-center justify-between border-t border-white/5 pt-3 mt-2">
          <div>
            <span className="text-[10px] uppercase tracking-widest text-gray-400 block">Price</span>
            <span className="text-base font-bold text-[#F3E5AB] font-heading">
              {curr.symbol}{convertedPrice}
            </span>
          </div>

          <button
            onClick={() => onAddToCart(product)}
            className={`py-2 px-3.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all ${
              isInCart
                ? 'bg-emerald-950 text-emerald-300 border border-emerald-500/40'
                : 'bg-[#D4AF37]/15 hover:bg-[#D4AF37] text-[#D4AF37] hover:text-black border border-[#D4AF37]/40'
            }`}
          >
            {isInCart ? (
              <>
                <Check className="w-3.5 h-3.5" />
                In Bag
              </>
            ) : (
              <>
                <ShoppingBag className="w-3.5 h-3.5" />
                Add to Bag
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
