import React, { useState } from 'react';
import { X, ShieldCheck, CheckCircle, CreditCard, Lock } from 'lucide-react';
import { CURRENCIES } from '../data/products';

export default function CheckoutModal({
  isOpen,
  onClose,
  cartItems,
  currency,
  onOrderComplete
}) {
  if (!isOpen) return null;

  const curr = CURRENCIES[currency] || CURRENCIES.USD;
  const subtotalUSD = cartItems.reduce((acc, item) => acc + item.priceUSD * item.quantity, 0);
  const totalConverted = (subtotalUSD * curr.rate).toFixed(0);

  const [step, setStep] = useState('form'); // 'form' or 'success'
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    address: '',
    city: '',
    country: 'United Arab Emirates',
    paymentMethod: 'card'
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setStep('success');
  };

  return (
    <div className="modal-overlay">
      <div className="relative w-full max-w-xl bg-[#FAF8F5] border border-[#e5e1d8] rounded-sm p-6 md:p-8 shadow-2xl animate-slide-up text-[#1c1c1c]">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-black p-1"
        >
          <X className="w-5 h-5" />
        </button>

        {step === 'form' ? (
          <div>
            <div className="text-center mb-6">
              <span className="tracking-widest-sub block mb-1">SECURE ATELIER CHECKOUT</span>
              <h2 className="font-heading text-2xl font-normal text-[#1c1c1c]">NaeemAbaya Order Details</h2>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              <div>
                <label className="block text-[#40362e] font-bold uppercase tracking-wider mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Sheikha Fatima Al-Hassan"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="w-full bg-white border border-[#e5e1d8] rounded-sm p-2.5 text-xs text-[#1c1c1c] focus:outline-none focus:border-[#40362e]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[#40362e] font-bold uppercase tracking-wider mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="name@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-white border border-[#e5e1d8] rounded-sm p-2.5 text-xs text-[#1c1c1c] focus:outline-none focus:border-[#40362e]"
                  />
                </div>
                <div>
                  <label className="block text-[#40362e] font-bold uppercase tracking-wider mb-1">
                    Country / Region
                  </label>
                  <select
                    value={formData.country}
                    onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                    className="w-full bg-white border border-[#e5e1d8] rounded-sm p-2.5 text-xs text-[#1c1c1c] focus:outline-none focus:border-[#40362e]"
                  >
                    <option value="United Arab Emirates">United Arab Emirates</option>
                    <option value="Saudi Arabia">Saudi Arabia</option>
                    <option value="United Kingdom">United Kingdom</option>
                    <option value="United States">United States</option>
                    <option value="Qatar">Qatar</option>
                    <option value="Kuwait">Kuwait</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-[#40362e] font-bold uppercase tracking-wider mb-1">
                  Delivery Address
                </label>
                <input
                  type="text"
                  required
                  placeholder="Street name, Villa / Apartment No."
                  value={formData.address}
                  onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                  className="w-full bg-white border border-[#e5e1d8] rounded-sm p-2.5 text-xs text-[#1c1c1c] focus:outline-none focus:border-[#40362e]"
                />
              </div>

              {/* Summary box */}
              <div className="p-4 bg-[#f3f1ec] rounded-sm border border-[#e5e1d8] flex justify-between items-center my-4">
                <div>
                  <span className="text-[10px] text-gray-500 uppercase tracking-widest block">Total Payable</span>
                  <span className="font-heading text-lg font-bold text-[#40362e]">{curr.symbol}{totalConverted}</span>
                </div>
                <div className="flex items-center gap-1 text-[11px] text-emerald-700 font-semibold">
                  <ShieldCheck className="w-4 h-4" /> 256-Bit Encrypted
                </div>
              </div>

              <button type="submit" className="btn-dark-earth w-full py-3.5 text-xs">
                CONFIRM & PAY {curr.symbol}{totalConverted}
              </button>
            </form>
          </div>
        ) : (
          <div className="text-center py-8">
            <CheckCircle className="w-16 h-16 text-[#b86e4e] mx-auto mb-4" />
            <h3 className="font-heading text-2xl font-normal text-[#1c1c1c] mb-2">Order Confirmed!</h3>
            <p className="text-xs text-[#6e6b66] mb-6">
              Thank you, <strong className="text-[#1c1c1c]">{formData.fullName}</strong>. Your bespoke NaeemAbaya garment is now being crafted in our Dubai atelier.
            </p>
            <p className="text-[11px] text-gray-500 mb-6">Order Reference: #NA-{Math.floor(100000 + Math.random() * 900000)}</p>
            <button
              onClick={() => {
                onOrderComplete();
                onClose();
              }}
              className="btn-dark-earth py-3 px-8 text-xs"
            >
              CONTINUE SHOPPING
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
