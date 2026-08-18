import React, { useState } from 'react';
import { X, ShoppingBag, Trash2, Plus, Minus, Tag, ArrowRight, Sparkles, Copy, Check } from 'lucide-react';
import { CURRENCIES } from '../data/products';

export default function CartDrawer({
  isOpen,
  onClose,
  cartItems,
  onUpdateQuantity,
  onRemoveItem,
  currency,
  onProceedCheckout
}) {
  const [promoCode, setPromoCode] = useState('');
  const [discountPercent, setDiscountPercent] = useState(0);
  const [promoMsg, setPromoMsg] = useState('');
  const [copiedItemId, setCopiedItemId] = useState(null);

  if (!isOpen) return null;

  const curr = CURRENCIES[currency] || CURRENCIES.USD;

  // Function to copy cart item image to clipboard
  const handleCopyImage = async (imgSrc, itemKey) => {
    try {
      const img = new Image();
      img.crossOrigin = 'anonymous';
      img.src = imgSrc;

      await new Promise((resolve, reject) => {
        if (img.complete) resolve();
        else {
          img.onload = resolve;
          img.onerror = () => reject(new Error('Image failed to load'));
        }
      });

      const canvas = document.createElement('canvas');
      canvas.width = img.naturalWidth || img.width || 300;
      canvas.height = img.naturalHeight || img.height || 400;
      const ctx = canvas.getContext('2d');
      ctx.drawImage(img, 0, 0);

      const blob = await new Promise((resolve) => canvas.toBlob(resolve, 'image/png'));

      if (blob && navigator.clipboard && window.ClipboardItem) {
        await navigator.clipboard.write([
          new ClipboardItem({ 'image/png': blob })
        ]);
        setCopiedItemId(itemKey);
        setTimeout(() => setCopiedItemId(null), 2500);
        return;
      }
    } catch (err) {
      console.warn('Image blob copy failed, falling back to copying image URL:', err);
    }

    // Fallback to copying absolute URL
    try {
      const fullUrl = imgSrc.startsWith('http') ? imgSrc : new URL(imgSrc, window.location.href).href;
      await navigator.clipboard.writeText(fullUrl);
      setCopiedItemId(itemKey);
      setTimeout(() => setCopiedItemId(null), 2500);
    } catch (err) {
      console.error('Failed to copy image link:', err);
    }
  };

  // Subtotal in USD
  const subtotalUSD = cartItems.reduce((acc, item) => acc + item.priceUSD * item.quantity, 0);

  const applyPromo = () => {
    if (promoCode.trim().toUpperCase() === 'ELEGANCE10') {
      setDiscountPercent(10);
      setPromoMsg('10% VIP Discount Applied!');
    } else {
      setDiscountPercent(0);
      setPromoMsg('Invalid promo code');
    }
  };

  const discountAmountUSD = (subtotalUSD * discountPercent) / 100;
  const finalTotalUSD = Math.max(0, subtotalUSD - discountAmountUSD);

  const convertedSubtotal = (subtotalUSD * curr.rate).toFixed(0);
  const convertedDiscount = (discountAmountUSD * curr.rate).toFixed(0);
  const convertedTotal = (finalTotalUSD * curr.rate).toFixed(0);

  // Free shipping threshold ($200 USD)
  const freeShippingThresholdUSD = 200;
  const shippingProgress = Math.min(100, (subtotalUSD / freeShippingThresholdUSD) * 100);
  const remainingForFreeShipping = Math.max(0, freeShippingThresholdUSD - subtotalUSD);

  return (
    <div className="modal-overlay justify-end p-0">
      <div className="w-full max-w-md h-full bg-[#121216] border-l border-[#D4AF37]/30 flex flex-col justify-between shadow-2xl animate-slide-up">
        {/* Drawer Header */}
        <div className="p-5 border-b border-white/10 flex items-center justify-between bg-[#0a0a0c]">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-5 h-5 text-[#D4AF37]" />
            <h3 className="font-heading font-bold text-base text-white uppercase tracking-wider">
              Shopping Bag ({cartItems.reduce((acc, item) => acc + item.quantity, 0)})
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-gray-400 hover:text-white rounded-full hover:bg-white/5 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Free Shipping Bar */}
        <div className="bg-[#18181f] px-5 py-3 border-b border-white/5">
          <div className="flex justify-between text-xs mb-1.5 font-medium">
            {remainingForFreeShipping > 0 ? (
              <span className="text-gray-300">
                Add <strong className="text-[#D4AF37]">{curr.symbol}{(remainingForFreeShipping * curr.rate).toFixed(0)}</strong> for Free Express Shipping
              </span>
            ) : (
              <span className="text-emerald-400 flex items-center gap-1 font-bold">
                <Sparkles className="w-3.5 h-3.5" /> Congratulations! You unlocked Free Worldwide Express Shipping!
              </span>
            )}
          </div>
          <div className="w-full h-1.5 bg-black/60 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-[#AA7C11] via-[#D4AF37] to-[#F3E5AB] transition-all duration-500"
              style={{ width: `${shippingProgress}%` }}
            ></div>
          </div>
        </div>

        {/* Cart Items List */}
        <div className="flex-1 overflow-y-auto p-5 space-y-4">
          {cartItems.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center text-gray-400 py-12">
              <ShoppingBag className="w-12 h-12 text-[#D4AF37]/40 mb-3" />
              <p className="font-heading text-base font-semibold text-white">Your Bag is Empty</p>
              <p className="text-xs text-gray-500 mt-1 max-w-xs">
                Explore our Haute Couture collection and add your bespoke items.
              </p>
            </div>
          ) : (
            cartItems.map((item, idx) => {
              const itemKey = item.id + (item.selectedSize || '') + idx;
              const isCopied = copiedItemId === itemKey;

              return (
                <div
                  key={itemKey}
                  className="p-3.5 rounded-xl bg-[#18181f] border border-white/5 flex gap-3 relative group/card hover:border-[#D4AF37]/20 transition-all"
                >
                  {/* Image container with copy overlay button */}
                  <div className="relative flex-shrink-0 group/img">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-20 h-24 object-cover object-center rounded-lg bg-black/40 border border-white/5"
                    />
                    <button
                      type="button"
                      onClick={() => handleCopyImage(item.image, itemKey)}
                      title="Copy Image"
                      className={`absolute bottom-1 right-1 p-1.5 rounded-md text-xs backdrop-blur-md transition-all shadow-lg ${
                        isCopied
                          ? 'bg-emerald-600 text-white scale-110'
                          : 'bg-black/75 text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black border border-[#D4AF37]/40'
                      }`}
                    >
                      {isCopied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                    </button>
                  </div>

                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-start justify-between gap-1">
                        <h4 className="font-heading text-xs font-bold text-white line-clamp-1">
                          {item.name}
                        </h4>
                        <button
                          type="button"
                          onClick={() => onRemoveItem(item)}
                          className="text-gray-500 hover:text-red-400 p-1 flex-shrink-0"
                          title="Remove"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      <span className="text-[11px] text-[#D4AF37] font-medium block mt-0.5">
                        Size: {item.selectedSize || 'Standard 56'}
                      </span>

                      {item.customNotes && (
                        <p className="text-[10px] text-gray-400 italic line-clamp-1">
                          {item.customNotes}
                        </p>
                      )}

                      {/* Explicit "Copy Image" Action Button */}
                      <div className="mt-2">
                        <button
                          type="button"
                          onClick={() => handleCopyImage(item.image, itemKey)}
                          className={`inline-flex items-center gap-1.5 text-[10px] font-semibold px-2 py-1 rounded-md border transition-all ${
                            isCopied
                              ? 'bg-emerald-500/20 border-emerald-500/40 text-emerald-400'
                              : 'bg-white/5 border-white/10 text-gray-300 hover:text-[#D4AF37] hover:border-[#D4AF37]/50 hover:bg-[#D4AF37]/10'
                          }`}
                        >
                          {isCopied ? (
                            <>
                              <Check className="w-3 h-3 text-emerald-400" />
                              <span>Image Copied!</span>
                            </>
                          ) : (
                            <>
                              <Copy className="w-3 h-3 text-[#D4AF37]" />
                              <span>Copy Image</span>
                            </>
                          )}
                        </button>
                      </div>
                    </div>

                    <div className="flex items-center justify-between mt-2">
                      {/* Quantity controls */}
                      <div className="flex items-center border border-white/10 rounded-md bg-black/40">
                        <button
                          type="button"
                          onClick={() => onUpdateQuantity(item, item.quantity - 1)}
                          className="p-1 text-gray-400 hover:text-white"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="px-2 text-xs font-bold text-white">{item.quantity}</span>
                        <button
                          type="button"
                          onClick={() => onUpdateQuantity(item, item.quantity + 1)}
                          className="p-1 text-gray-400 hover:text-white"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>

                      <span className="text-xs font-bold text-[#F3E5AB] font-heading">
                        {curr.symbol}{((item.priceUSD * item.quantity) * curr.rate).toFixed(0)}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* Drawer Footer & Checkout */}
        {cartItems.length > 0 && (
          <div className="p-5 border-t border-white/10 bg-[#0a0a0c] space-y-4">
            {/* Promo Code input */}
            <div className="flex gap-2">
              <div className="relative flex-1">
                <input
                  type="text"
                  placeholder="Promo Code (e.g. ELEGANCE10)"
                  value={promoCode}
                  onChange={(e) => setPromoCode(e.target.value)}
                  className="w-full bg-[#18181f] border border-white/15 rounded-lg py-2 pl-8 pr-3 text-xs text-white uppercase placeholder-gray-500 focus:outline-none focus:border-[#D4AF37]"
                />
                <Tag className="w-3.5 h-3.5 text-gray-400 absolute left-2.5 top-2.5" />
              </div>
              <button
                type="button"
                onClick={applyPromo}
                className="py-2 px-3 rounded-lg bg-[#D4AF37]/20 border border-[#D4AF37]/40 text-[#D4AF37] text-xs font-bold uppercase hover:bg-[#D4AF37] hover:text-black transition-colors"
              >
                Apply
              </button>
            </div>

            {promoMsg && (
              <p className={`text-[11px] font-semibold ${discountPercent > 0 ? 'text-emerald-400' : 'text-rose-400'}`}>
                {promoMsg}
              </p>
            )}

            {/* Calculations */}
            <div className="space-y-1.5 text-xs text-gray-300 pt-2 border-t border-white/5">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>{curr.symbol}{convertedSubtotal}</span>
              </div>

              {discountPercent > 0 && (
                <div className="flex justify-between text-emerald-400 font-semibold">
                  <span>VIP Discount ({discountPercent}%)</span>
                  <span>-{curr.symbol}{convertedDiscount}</span>
                </div>
              )}

              <div className="flex justify-between">
                <span>Estimated Shipping</span>
                <span>{remainingForFreeShipping <= 0 ? 'FREE' : `${curr.symbol}${(15 * curr.rate).toFixed(0)}`}</span>
              </div>

              <div className="flex justify-between text-sm font-bold text-white pt-2 border-t border-white/10 font-heading">
                <span>Total Amount</span>
                <span className="text-[#F3E5AB] text-base">{curr.symbol}{convertedTotal}</span>
              </div>
            </div>

            {/* Checkout Button */}
            <button
              type="button"
              onClick={onProceedCheckout}
              className="btn-primary w-full py-4 text-xs uppercase tracking-widest flex items-center justify-center gap-2"
            >
              <span>Proceed to Checkout</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

