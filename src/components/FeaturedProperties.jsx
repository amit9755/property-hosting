import { properties } from '../data/properties';
import PropertyCard from './PropertyCard';
import { CONTACT } from '../data/properties';

export default function FeaturedProperties() {
  return (
    <section id="properties" className="py-16 lg:py-24 bg-white" aria-labelledby="properties-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-gold-600 font-semibold text-sm uppercase tracking-widest mb-2">Property Listings</p>
          <h2 id="properties-heading" className="section-title">
            Featured Properties
          </h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            Browse our current listings across Jaipur. Contact Ravindra Singh for availability, pricing and site visits.
          </p>
          <div className="mt-3 inline-flex items-center gap-2 bg-amber-50 border border-amber-200 text-amber-700 text-xs font-medium px-3 py-1.5 rounded-full">
            <span className="w-2 h-2 rounded-full bg-amber-400 inline-block"></span>
            Demo listings — Real properties will be added soon
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {properties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>

        {/* CTA */}
        <div className="text-center bg-navy-900 rounded-2xl py-10 px-6">
          <h3 className="text-2xl font-heading font-bold text-white mb-2">
            Looking for a specific property?
          </h3>
          <p className="text-white/70 mb-6 text-sm sm:text-base">
            Share your requirements with Ravindra Singh and get matched with the right property.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href={CONTACT.whatsappGeneral}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-green-500 hover:bg-green-400 text-white font-bold px-6 py-3 rounded-xl transition-all duration-200 active:scale-95"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              WhatsApp Your Requirement
            </a>
            <a
              href={CONTACT.phoneHref}
              className="w-full sm:w-auto flex items-center justify-center gap-2 border-2 border-white/30 hover:border-white text-white font-bold px-6 py-3 rounded-xl transition-all duration-200 hover:bg-white/10 active:scale-95"
            >
              Call Ravindra Singh
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
