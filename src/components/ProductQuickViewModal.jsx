import React, { useState } from 'react';
import { X, Star, Ruler, Sparkles, Heart, Copy, Download, Check } from 'lucide-react';
import { CURRENCIES } from '../data/products';
import { downloadImage, copyImageToClipboard } from '../utils/mediaUtils';

export default function ProductQuickViewModal({
  product,
  currency,
  isWishlisted,
  onClose,
  onToggleWishlist
}) {
  const [selectedSize, setSelectedSize] = useState(product?.sizes?.[0] || '56 (M/L)');
  const [activeTab, setActiveTab] = useState('details');
  
  // Custom bespoke measurements
  const [bustInch, setBustInch] = useState('38');
  const [lengthInch, setLengthInch] = useState('56');
  const [sleeveInch, setSleeveInch] = useState('27');

  const [copied, setCopied] = useState(false);
  const [downloaded, setDownloaded] = useState(false);

  if (!product) return null;

  const curr = CURRENCIES[currency] || CURRENCIES.USD;
  const convertedPrice = (product.priceUSD * curr.rate).toFixed(0);

  const handleCopy = async () => {
    const success = await copyImageToClipboard(product.image);
    if (success) {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleDownload = async () => {
    const fileName = `${product.name.replace(/[^a-zA-Z0-9]/g, '_')}_NaeemAbaya.jpg`;
    const success = await downloadImage(product.image, fileName);
    if (success) {
      setDownloaded(true);
      setTimeout(() => setDownloaded(false), 2000);
    }
  };

  return (
    <div className="modal-overlay">
      <div className="relative w-full max-w-4xl bg-[#121216] border border-[#D4AF37]/30 rounded-2xl overflow-hidden shadow-2xl animate-slide-up max-h-[90vh] flex flex-col md:flex-row">
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/60 text-gray-300 hover:text-white border border-white/10 hover:border-[#D4AF37]"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Left Side: Product Image Display with Media Action Overlays */}
        <div className="w-full md:w-1/2 bg-black/60 relative aspect-square md:aspect-auto group">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover object-center"
          />
          
          <div className="absolute top-4 left-4 flex gap-2 z-10 pointer-events-none">
            <span className="badge-gold backdrop-blur-md">Haute Couture</span>
            {product.isBestSeller && <span className="badge-gold backdrop-blur-md">Top Selling</span>}
          </div>

          {/* Picture Action Buttons Bar (Bottom-left overlay) */}
          <div className="absolute bottom-4 left-4 right-4 flex gap-2 z-10">
            <button
              type="button"
              onClick={handleCopy}
              className={`flex-1 py-2 px-3 rounded-lg text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-1.5 backdrop-blur-md transition-all border ${
                copied
                  ? 'bg-emerald-600 text-white border-emerald-500'
                  : 'bg-black/75 text-[#D4AF37] border-[#D4AF37]/50 hover:bg-[#D4AF37] hover:text-black'
              }`}
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4" />
                  <span>Image Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4" />
                  <span>Copy Image</span>
                </>
              )}
            </button>

            <button
              type="button"
              onClick={handleDownload}
              className={`flex-1 py-2 px-3 rounded-lg text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-1.5 backdrop-blur-md transition-all border ${
                downloaded
                  ? 'bg-emerald-600 text-white border-emerald-500'
                  : 'bg-[#D4AF37]/20 text-[#F3E5AB] border-[#D4AF37]/60 hover:bg-[#D4AF37] hover:text-black'
              }`}
            >
              {downloaded ? (
                <>
                  <Check className="w-4 h-4" />
                  <span>Downloaded!</span>
                </>
              ) : (
                <>
                  <Download className="w-4 h-4" />
                  <span>Download Image</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Right Side: Details & Configurator */}
        <div className="w-full md:w-1/2 p-6 overflow-y-auto flex flex-col justify-between">
          <div>
            {/* Header info */}
            <div className="flex items-center justify-between gap-2 mb-2">
              <span className="text-xs uppercase tracking-widest text-[#D4AF37] font-semibold">
                {product.category.toUpperCase()} COLLECTION
              </span>
              <div className="flex items-center gap-1 text-xs text-amber-400">
                <Star className="w-3.5 h-3.5 fill-amber-400" />
                <span className="font-bold">{product.rating}</span>
                <span className="text-gray-400">({product.reviewsCount} reviews)</span>
              </div>
            </div>

            <h2 className="text-2xl font-bold font-heading text-white mb-2">
              {product.name}
            </h2>

            <p className="text-xs text-gray-300 font-light mb-4 leading-relaxed">
              {product.tagline}
            </p>

            {/* Price */}
            <div className="flex items-baseline gap-3 mb-6 border-b border-white/10 pb-4">
              <span className="text-2xl font-bold text-[#F3E5AB] font-heading">
                {curr.symbol}{convertedPrice}
              </span>
              <span className="text-xs text-gray-400">Pure Frontend Catalog • Instant Media Download</span>
            </div>

            {/* Tabs for Info */}
            <div className="flex gap-4 border-b border-white/10 mb-4 text-xs font-semibold uppercase tracking-wider">
              <button
                type="button"
                onClick={() => setActiveTab('details')}
                className={`pb-2 border-b-2 transition-colors ${
                  activeTab === 'details' ? 'border-[#D4AF37] text-[#D4AF37]' : 'border-transparent text-gray-400'
                }`}
              >
                Fabric & Specs
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('care')}
                className={`pb-2 border-b-2 transition-colors ${
                  activeTab === 'care' ? 'border-[#D4AF37] text-[#D4AF37]' : 'border-transparent text-gray-400'
                }`}
              >
                Garment Care
              </button>
            </div>

            {activeTab === 'details' && (
              <div className="text-xs text-gray-300 space-y-2 mb-6">
                <p><strong className="text-white">Fabric Material:</strong> {product.fabric}</p>
                <p><strong className="text-white">Color Palette:</strong> {product.color}</p>
                <p className="text-gray-400 leading-relaxed pt-1">{product.description}</p>
              </div>
            )}

            {activeTab === 'care' && (
              <div className="text-xs text-gray-300 space-y-2 mb-6">
                <p className="flex items-center gap-2"><Sparkles className="w-4 h-4 text-[#D4AF37]" /> {product.careInstructions}</p>
                <p className="text-gray-400">Includes complimentary dust bag & velvet hanger.</p>
              </div>
            )}

            {/* Size Selector */}
            <div className="mb-6">
              <div className="flex items-center justify-between mb-2">
                <label className="text-xs font-bold text-gray-200 uppercase tracking-wider flex items-center gap-1.5">
                  <Ruler className="w-3.5 h-3.5 text-[#D4AF37]" />
                  Select Abaya Length & Size
                </label>
              </div>

              <div className="grid grid-cols-3 gap-2">
                {product.sizes.map((sz) => (
                  <button
                    key={sz}
                    type="button"
                    onClick={() => setSelectedSize(sz)}
                    className={`py-2 px-2 text-xs rounded-lg border font-medium transition-all ${
                      selectedSize === sz
                        ? 'border-[#D4AF37] bg-[#D4AF37]/20 text-[#F3E5AB] font-bold shadow-[0_0_10px_rgba(212,175,55,0.2)]'
                        : 'border-white/10 bg-[#18181f] text-gray-300 hover:border-gray-400'
                    }`}
                  >
                    {sz}
                  </button>
                ))}
              </div>
            </div>

            {/* Custom Bespoke measurement inputs if Custom selected */}
            {selectedSize.includes('Custom') && (
              <div className="mb-6 p-4 rounded-xl bg-[#18181f] border border-[#D4AF37]/40 space-y-3">
                <div className="flex items-center gap-2 text-xs text-[#D4AF37] font-bold uppercase">
                  <Sparkles className="w-4 h-4" /> Custom Bespoke Measurements (Inches)
                </div>
                <div className="grid grid-cols-3 gap-3 text-xs">
                  <div>
                    <label className="block text-[11px] text-gray-400 mb-1">Bust (in)</label>
                    <input
                      type="number"
                      value={bustInch}
                      onChange={(e) => setBustInch(e.target.value)}
                      className="w-full bg-black/60 border border-white/20 rounded p-1.5 text-white"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] text-gray-400 mb-1">Length (in)</label>
                    <input
                      type="number"
                      value={lengthInch}
                      onChange={(e) => setLengthInch(e.target.value)}
                      className="w-full bg-black/60 border border-white/20 rounded p-1.5 text-white"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] text-gray-400 mb-1">Sleeve (in)</label>
                    <input
                      type="number"
                      value={sleeveInch}
                      onChange={(e) => setSleeveInch(e.target.value)}
                      className="w-full bg-black/60 border border-white/20 rounded p-1.5 text-white"
                    />
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Media Action Buttons Footer */}
          <div className="pt-4 border-t border-white/10 flex items-center gap-3">
            <button
              type="button"
              onClick={() => onToggleWishlist(product)}
              className={`p-3 rounded-xl border transition-all ${
                isWishlisted
                  ? 'bg-[#c98a96] text-white border-[#c98a96]'
                  : 'bg-[#18181f] text-gray-300 border-white/10 hover:border-[#D4AF37] hover:text-[#D4AF37]'
              }`}
              title="Save to Wishlist"
            >
              <Heart className={`w-5 h-5 ${isWishlisted ? 'fill-white' : ''}`} />
            </button>

            <button
              type="button"
              onClick={handleCopy}
              className={`py-3 px-4 rounded-xl text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 border transition-all ${
                copied
                  ? 'bg-emerald-600 text-white border-emerald-500'
                  : 'bg-black/60 text-[#D4AF37] border-[#D4AF37]/50 hover:bg-[#D4AF37] hover:text-black'
              }`}
            >
              {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
              <span>{copied ? 'Copied Image' : 'Copy Image'}</span>
            </button>

            <button
              type="button"
              onClick={handleDownload}
              className={`btn-primary flex-1 py-3.5 text-xs tracking-widest uppercase flex items-center justify-center gap-2 ${
                downloaded ? 'bg-emerald-600 text-white border-emerald-500' : ''
              }`}
            >
              {downloaded ? <Check className="w-4 h-4" /> : <Download className="w-4 h-4" />}
              <span>{downloaded ? 'Downloaded' : 'Download Picture'}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
