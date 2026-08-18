import React, { useState } from 'react';
import { X, Heart, Trash2, Copy, Download, Check } from 'lucide-react';
import { CURRENCIES } from '../data/products';
import { downloadImage, copyImageToClipboard } from '../utils/mediaUtils';

export default function WishlistDrawer({
  isOpen,
  onClose,
  wishlistItems,
  onRemoveFromWishlist,
  currency
}) {
  const [copiedItemId, setCopiedItemId] = useState(null);
  const [downloadedItemId, setDownloadedItemId] = useState(null);

  if (!isOpen) return null;

  const curr = CURRENCIES[currency] || CURRENCIES.USD;

  const handleCopy = async (item) => {
    const success = await copyImageToClipboard(item.image);
    if (success) {
      setCopiedItemId(item.id);
      setTimeout(() => setCopiedItemId(null), 2000);
    }
  };

  const handleDownload = async (item) => {
    const fileName = `${item.name.replace(/[^a-zA-Z0-9]/g, '_')}_NaeemAbaya.jpg`;
    const success = await downloadImage(item.image, fileName);
    if (success) {
      setDownloadedItemId(item.id);
      setTimeout(() => setDownloadedItemId(null), 2000);
    }
  };

  return (
    <div className="modal-overlay justify-end p-0">
      <div className="w-full max-w-md h-full bg-[#FAF8F5] border-l border-[#e5e1d8] flex flex-col justify-between shadow-2xl animate-slide-up text-[#1c1c1c]">
        {/* Header */}
        <div className="p-5 border-b border-[#e5e1d8] flex items-center justify-between bg-[#f3f1ec]">
          <div className="flex items-center gap-2">
            <Heart className="w-5 h-5 text-[#b86e4e] fill-[#b86e4e]" />
            <h3 className="font-heading font-bold text-base text-[#1c1c1c] uppercase tracking-wider">
              Saved Media Gallery ({wishlistItems.length})
            </h3>
          </div>
          <button onClick={onClose} className="p-2 text-gray-500 hover:text-black">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* List */}
        <div className="flex-1 overflow-y-auto p-5 space-y-4">
          {wishlistItems.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center text-gray-400 py-12">
              <Heart className="w-12 h-12 text-gray-300 mb-3" />
              <p className="font-heading text-base font-semibold text-[#1c1c1c]">No Saved Items</p>
              <p className="text-xs text-[#6e6b66] mt-1 max-w-xs">
                Click the heart icon on any abaya image to save it here for quick copying & downloading.
              </p>
            </div>
          ) : (
            wishlistItems.map((item) => {
              const isCopied = copiedItemId === item.id;
              const isDownloaded = downloadedItemId === item.id;

              return (
                <div
                  key={item.id}
                  className="p-3.5 rounded-lg bg-white border border-[#e5e1d8] flex gap-3 relative shadow-sm"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-24 object-cover object-center rounded bg-[#e8e4dc]"
                  />

                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-start justify-between">
                        <h4 className="font-heading text-sm font-bold text-[#1c1c1c]">
                          {item.name}
                        </h4>
                        <button
                          onClick={() => onRemoveFromWishlist(item)}
                          className="text-gray-400 hover:text-red-500 p-1"
                          title="Remove from saved"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      <span className="text-xs font-bold text-[#40362e] font-heading mt-1 block">
                        {curr.symbol}{(item.priceUSD * curr.rate).toFixed(0)}
                      </span>
                    </div>

                    <div className="flex items-center gap-2 mt-2">
                      <button
                        type="button"
                        onClick={() => handleCopy(item)}
                        className={`flex-1 py-1.5 px-2 text-[11px] font-semibold uppercase tracking-wider flex items-center justify-center gap-1 rounded transition-colors ${
                          isCopied
                            ? 'bg-emerald-700 text-white'
                            : 'bg-[#40362e]/10 text-[#40362e] hover:bg-[#40362e] hover:text-white'
                        }`}
                      >
                        {isCopied ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
                        <span>{isCopied ? 'Copied' : 'Copy'}</span>
                      </button>

                      <button
                        type="button"
                        onClick={() => handleDownload(item)}
                        className={`flex-1 py-1.5 px-2 text-[11px] font-semibold uppercase tracking-wider flex items-center justify-center gap-1 rounded transition-colors ${
                          isDownloaded
                            ? 'bg-emerald-700 text-white'
                            : 'bg-[#40362e] text-[#f4efe6] hover:bg-[#2a231d]'
                        }`}
                      >
                        {isDownloaded ? <Check className="w-3 h-3" /> : <Download className="w-3 h-3" />}
                        <span>{isDownloaded ? 'Saved' : 'Download'}</span>
                      </button>
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
}
