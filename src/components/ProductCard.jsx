import React, { useState } from 'react';
import { Star, Heart, Eye, Copy, Download, Check } from 'lucide-react';
import { CURRENCIES } from '../data/products';
import { downloadImage, copyImageToClipboard } from '../utils/mediaUtils';

export default function ProductCard({
  product,
  currency,
  isWishlisted,
  onToggleWishlist,
  onQuickView
}) {
  const curr = CURRENCIES[currency] || CURRENCIES.USD;
  const convertedPrice = (product.priceUSD * curr.rate).toFixed(0);

  const [copied, setCopied] = useState(false);
  const [downloaded, setDownloaded] = useState(false);

  const handleCopy = async (e) => {
    e?.stopPropagation();
    const success = await copyImageToClipboard(product.image);
    if (success) {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleDownload = async (e) => {
    e?.stopPropagation();
    const fileName = `${product.name.replace(/[^a-zA-Z0-9]/g, '_')}_NaeemAbaya.jpg`;
    const success = await downloadImage(product.image, fileName);
    if (success) {
      setDownloaded(true);
      setTimeout(() => setDownloaded(false), 2000);
    }
  };

  return (
    <div className="glass-card group relative flex flex-col overflow-hidden rounded-xl bg-[#141419] border border-[#D4AF37]/20 hover:border-[#D4AF37]/60 transition-all duration-300 shadow-xl">
      {/* Product Image Container */}
      <div className="relative aspect-[3/4] overflow-hidden bg-black/40">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
          loading="lazy"
        />

        {/* Badges Overlay */}
        <div className="absolute top-3 left-3 flex flex-col gap-1.5 z-10 pointer-events-none">
          {product.isBestSeller && <span className="badge-gold">Best Seller</span>}
          {product.isNew && <span className="badge-new">New Release</span>}
        </div>

        {/* Quick Action Overlay Buttons on Picture (Top Right) */}
        <div className="absolute top-3 right-3 flex items-center gap-1.5 z-10">
          {/* Wishlist Button */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onToggleWishlist(product);
            }}
            className={`p-2 rounded-full backdrop-blur-md transition-all shadow-md ${
              isWishlisted
                ? 'bg-[#c98a96] text-white border border-[#c98a96]'
                : 'bg-black/65 text-gray-300 border border-white/15 hover:text-[#D4AF37] hover:border-[#D4AF37]'
            }`}
            title={isWishlisted ? 'Saved in Wishlist' : 'Save to Wishlist'}
            aria-label="Wishlist"
          >
            <Heart className={`w-3.5 h-3.5 ${isWishlisted ? 'fill-white' : ''}`} />
          </button>
        </div>

        {/* Floating Media Toolbar on Picture (Bottom Overlay) */}
        <div className="absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-90 sm:opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center gap-2 z-10">
          <button
            type="button"
            onClick={handleCopy}
            title="Copy Image to Clipboard"
            className={`flex-1 py-2 px-2.5 rounded-lg text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-1.5 backdrop-blur-md transition-all border ${
              copied
                ? 'bg-emerald-600 text-white border-emerald-500'
                : 'bg-black/75 text-[#D4AF37] border-[#D4AF37]/50 hover:bg-[#D4AF37] hover:text-black'
            }`}
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5" />
                <span>Copied!</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5" />
                <span>Copy</span>
              </>
            )}
          </button>

          <button
            type="button"
            onClick={handleDownload}
            title="Download Image File"
            className={`flex-1 py-2 px-2.5 rounded-lg text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-1.5 backdrop-blur-md transition-all border ${
              downloaded
                ? 'bg-emerald-600 text-white border-emerald-500'
                : 'bg-[#D4AF37]/20 text-[#F3E5AB] border-[#D4AF37]/60 hover:bg-[#D4AF37] hover:text-black'
            }`}
          >
            {downloaded ? (
              <>
                <Check className="w-3.5 h-3.5" />
                <span>Downloaded</span>
              </>
            ) : (
              <>
                <Download className="w-3.5 h-3.5" />
                <span>Save</span>
              </>
            )}
          </button>

          <button
            type="button"
            onClick={() => onQuickView(product)}
            title="Quick View Details"
            className="p-2 rounded-lg bg-black/75 text-gray-300 hover:text-white border border-white/20 hover:border-[#D4AF37]"
          >
            <Eye className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Product Details Box */}
      <div className="p-4 md:p-5 flex-1 flex flex-col justify-between">
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

        {/* Footer Price & Download / Copy Action Buttons */}
        <div className="flex items-center justify-between border-t border-white/5 pt-3 mt-1 gap-2">
          <div>
            <span className="text-[10px] uppercase tracking-widest text-gray-400 block">Catalog Price</span>
            <span className="text-sm md:text-base font-bold text-[#F3E5AB] font-heading">
              {curr.symbol}{convertedPrice}
            </span>
          </div>

          <div className="flex items-center gap-1.5">
            <button
              type="button"
              onClick={handleCopy}
              className={`py-1.5 px-2.5 rounded-md text-[11px] font-medium flex items-center gap-1 border transition-all ${
                copied
                  ? 'bg-emerald-500/20 border-emerald-500/50 text-emerald-400'
                  : 'bg-white/5 border-white/10 text-gray-300 hover:text-[#D4AF37] hover:border-[#D4AF37]/50 hover:bg-[#D4AF37]/10'
              }`}
              title="Copy Image to Clipboard"
            >
              {copied ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3 text-[#D4AF37]" />}
              <span>{copied ? 'Copied' : 'Copy'}</span>
            </button>

            <button
              type="button"
              onClick={handleDownload}
              className={`py-1.5 px-2.5 rounded-md text-[11px] font-medium flex items-center gap-1 border transition-all ${
                downloaded
                  ? 'bg-emerald-500/20 border-emerald-500/50 text-emerald-400'
                  : 'bg-[#D4AF37]/15 border-[#D4AF37]/40 text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black'
              }`}
              title="Download High-Res Image"
            >
              {downloaded ? <Check className="w-3 h-3" /> : <Download className="w-3 h-3" />}
              <span>{downloaded ? 'Saved' : 'Download'}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
