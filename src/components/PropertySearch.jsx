import { useState } from 'react';
import { Search } from 'lucide-react';
import { lookingFor, propertyTypes, locations, budgetRanges, CONTACT } from '../data/properties';

export default function PropertySearch() {
  const [form, setForm] = useState({
    lookingFor: 'Buy',
    propertyType: '',
    location: '',
    budget: '',
  });

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const msg = `Hello Ravindra Ji, I am looking to *${form.lookingFor}* a *${form.propertyType || 'property'}* in *${form.location || 'Jaipur'}*. Budget: *${form.budget || 'Open'}*. Please guide me.`;
    window.open(`https://wa.me/919636961082?text=${encodeURIComponent(msg)}`, '_blank');
  };

  return (
    <section className="relative -mt-6 z-20 pb-16" aria-label="Property search">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden">
          {/* Header */}
          <div className="bg-navy-900 px-6 py-4 flex items-center gap-3">
            <Search size={20} className="text-gold-400" />
            <h2 className="text-white font-semibold text-base">Find Your Perfect Property in Jaipur</h2>
          </div>

          <form onSubmit={handleSubmit} className="p-5 sm:p-6">
            {/* Looking For tabs */}
            <div className="mb-5">
              <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">I am looking to</p>
              <div className="flex gap-2">
                {lookingFor.map((opt) => (
                  <button
                    key={opt}
                    type="button"
                    onClick={() => setForm((prev) => ({ ...prev, lookingFor: opt }))}
                    className={`flex-1 py-2.5 rounded-lg text-sm font-semibold border transition-all duration-200 ${
                      form.lookingFor === opt
                        ? 'bg-navy-900 text-white border-navy-900 shadow-md'
                        : 'bg-white text-gray-600 border-gray-200 hover:border-navy-400 hover:text-navy-900'
                    }`}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </div>

            {/* Dropdowns */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-5">
              <div>
                <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">
                  Property Type
                </label>
                <select
                  name="propertyType"
                  value={form.propertyType}
                  onChange={handleChange}
                  className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-gold-400 focus:border-transparent bg-gray-50 hover:border-gray-300 transition-colors"
                >
                  {propertyTypes.map((t) => (
                    <option key={t} value={t === 'All Types' ? '' : t}>
                      {t}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">
                  Location
                </label>
                <select
                  name="location"
                  value={form.location}
                  onChange={handleChange}
                  className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-gold-400 focus:border-transparent bg-gray-50 hover:border-gray-300 transition-colors"
                >
                  {locations.map((l) => (
                    <option key={l} value={l === 'All Locations' ? '' : l}>
                      {l}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">
                  Budget
                </label>
                <select
                  name="budget"
                  value={form.budget}
                  onChange={handleChange}
                  className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-gold-400 focus:border-transparent bg-gray-50 hover:border-gray-300 transition-colors"
                >
                  {budgetRanges.map((b) => (
                    <option key={b} value={b === 'Any Budget' ? '' : b}>
                      {b}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full bg-gold-500 hover:bg-gold-600 text-white font-bold py-3.5 rounded-xl text-base transition-all duration-200 shadow-md hover:shadow-lg active:scale-95 flex items-center justify-center gap-2"
            >
              <Search size={18} />
              Find Property
            </button>

            <p className="text-center text-xs text-gray-400 mt-3">
              Your enquiry will be sent directly to Ravindra Singh via WhatsApp
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
