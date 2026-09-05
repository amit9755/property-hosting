import { useState } from 'react';
import { Send } from 'lucide-react';
import { lookingFor, propertyTypes, locations, budgetRanges, CONTACT } from '../data/properties';

const initialState = {
  name: '',
  phone: '',
  lookingFor: '',
  propertyType: '',
  location: '',
  budget: '',
  message: '',
};

export default function LeadForm() {
  const [form, setForm] = useState(initialState);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Build WhatsApp message
    const msg = [
      `*New Property Enquiry*`,
      `Name: ${form.name}`,
      `Phone: ${form.phone}`,
      `Looking To: ${form.lookingFor || 'Not specified'}`,
      `Property Type: ${form.propertyType || 'Not specified'}`,
      `Location: ${form.location || 'Not specified'}`,
      `Budget: ${form.budget || 'Not specified'}`,
      form.message ? `Message: ${form.message}` : '',
    ]
      .filter(Boolean)
      .join('\n');

    window.open(`https://wa.me/917014158171?text=${encodeURIComponent(msg)}`, '_blank');
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setForm(initialState);
    }, 4000);
  };

  return (
    <section id="enquiry" className="py-16 lg:py-24 bg-white" aria-labelledby="form-heading">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-start">
          {/* Left info panel */}
          <div className="lg:col-span-2">
            <p className="text-gold-600 font-semibold text-sm uppercase tracking-widest mb-3">Get In Touch</p>
            <h2 id="form-heading" className="section-title mb-4">
              Send Your Property Enquiry
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Fill in your details and Ravindra Singh will get back to you personally with suitable property options.
            </p>

            {/* Quick contact */}
            <div className="space-y-3">
              <a
                href={CONTACT.phoneHref}
                className="flex items-center gap-3 p-4 bg-navy-50 hover:bg-navy-100 rounded-xl transition-colors group"
              >
                <div className="bg-navy-900 p-2.5 rounded-lg">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-white">
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-gray-500 font-medium">Call Directly</p>
                  <p className="text-navy-900 font-bold text-sm">{CONTACT.phone}</p>
                </div>
              </a>

              <a
                href={CONTACT.whatsappGeneral}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-4 bg-green-50 hover:bg-green-100 rounded-xl transition-colors group"
              >
                <div className="bg-green-500 p-2.5 rounded-lg">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-white">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-gray-500 font-medium">Prefer WhatsApp?</p>
                  <p className="text-green-700 font-bold text-sm">Chat with Ravindra Singh</p>
                </div>
              </a>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            <div className="bg-white border border-gray-100 rounded-2xl shadow-lg p-6 sm:p-8">
              {submitted ? (
                <div className="text-center py-10">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-8 h-8 text-green-500">
                      <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <h3 className="font-heading font-bold text-navy-900 text-xl mb-2">Enquiry Sent!</h3>
                  <p className="text-gray-500 text-sm">Ravindra Singh will contact you shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-1.5">
                        Your Name <span className="text-red-400">*</span>
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Enter your name"
                        className="w-full border border-gray-200 rounded-lg px-3.5 py-2.5 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-gold-400 focus:border-transparent placeholder-gray-400 transition-colors"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-1.5">
                        Phone Number <span className="text-red-400">*</span>
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        required
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="Your mobile number"
                        className="w-full border border-gray-200 rounded-lg px-3.5 py-2.5 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-gold-400 focus:border-transparent placeholder-gray-400 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="lookingFor" className="block text-sm font-semibold text-gray-700 mb-1.5">
                        Looking For
                      </label>
                      <select
                        id="lookingFor"
                        name="lookingFor"
                        value={form.lookingFor}
                        onChange={handleChange}
                        className="w-full border border-gray-200 rounded-lg px-3.5 py-2.5 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-gold-400 focus:border-transparent bg-white transition-colors"
                      >
                        <option value="">Select...</option>
                        {lookingFor.map((o) => <option key={o} value={o}>{o}</option>)}
                      </select>
                    </div>
                    <div>
                      <label htmlFor="propertyType" className="block text-sm font-semibold text-gray-700 mb-1.5">
                        Property Type
                      </label>
                      <select
                        id="propertyType"
                        name="propertyType"
                        value={form.propertyType}
                        onChange={handleChange}
                        className="w-full border border-gray-200 rounded-lg px-3.5 py-2.5 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-gold-400 focus:border-transparent bg-white transition-colors"
                      >
                        <option value="">Select type...</option>
                        {propertyTypes.filter((t) => t !== 'All Types').map((t) => <option key={t} value={t}>{t}</option>)}
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="location" className="block text-sm font-semibold text-gray-700 mb-1.5">
                        Preferred Location
                      </label>
                      <select
                        id="location"
                        name="location"
                        value={form.location}
                        onChange={handleChange}
                        className="w-full border border-gray-200 rounded-lg px-3.5 py-2.5 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-gold-400 focus:border-transparent bg-white transition-colors"
                      >
                        <option value="">Select area...</option>
                        {locations.filter((l) => l !== 'All Locations').map((l) => <option key={l} value={l}>{l}</option>)}
                      </select>
                    </div>
                    <div>
                      <label htmlFor="budget" className="block text-sm font-semibold text-gray-700 mb-1.5">
                        Budget
                      </label>
                      <select
                        id="budget"
                        name="budget"
                        value={form.budget}
                        onChange={handleChange}
                        className="w-full border border-gray-200 rounded-lg px-3.5 py-2.5 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-gold-400 focus:border-transparent bg-white transition-colors"
                      >
                        <option value="">Select budget...</option>
                        {budgetRanges.filter((b) => b !== 'Any Budget').map((b) => <option key={b} value={b}>{b}</option>)}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-1.5">
                      Message (Optional)
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={3}
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Any specific requirements or questions..."
                      className="w-full border border-gray-200 rounded-lg px-3.5 py-2.5 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-gold-400 focus:border-transparent placeholder-gray-400 resize-none transition-colors"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 bg-navy-900 hover:bg-navy-800 text-white font-bold py-3.5 rounded-xl text-base transition-all duration-200 shadow-md hover:shadow-lg active:scale-95"
                  >
                    <Send size={17} />
                    Submit Enquiry via WhatsApp
                  </button>

                  <p className="text-center text-xs text-gray-400">
                    Your details will be shared directly with Ravindra Singh via WhatsApp.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
