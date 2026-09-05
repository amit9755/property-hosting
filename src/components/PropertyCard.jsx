import { MapPin, Maximize2, Bed, Bath, MessageCircle } from 'lucide-react';
import { CONTACT } from '../data/properties';

export default function PropertyCard({ property }) {
  const { title, type, location, price, size, bedrooms, bathrooms, status, description, image, isDemo, features } =
    property;

  const statusColor =
    status === 'For Sale'
      ? 'bg-green-100 text-green-700'
      : status === 'For Rent'
      ? 'bg-blue-100 text-blue-700'
      : 'bg-gray-100 text-gray-600';

  return (
    <article className="card bg-white border border-gray-100 overflow-hidden group">
      {/* Image */}
      <div className="relative h-52 overflow-hidden bg-gray-100">
        <img
          src={image}
          alt={`${title} - ${type} in ${location}`}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-wrap gap-2">
          <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${statusColor}`}>{status}</span>
          <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-navy-900/80 text-white backdrop-blur-sm">
            {type}
          </span>
        </div>
        {isDemo && (
          <div className="absolute top-3 right-3">
            <span className="text-xs font-medium px-2 py-1 rounded bg-amber-400/90 text-amber-900 backdrop-blur-sm">
              Demo
            </span>
          </div>
        )}
        {/* Price overlay */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-navy-900/80 to-transparent px-4 py-3">
          <p className="text-white font-heading font-bold text-xl">
            {status === 'For Rent' ? '' : '\u20b9'}{price}
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="font-heading font-semibold text-navy-900 text-base leading-snug mb-1.5 line-clamp-2">
          {title}
        </h3>

        <div className="flex items-center gap-1.5 text-gray-500 text-sm mb-3">
          <MapPin size={13} className="text-gold-500 shrink-0" />
          <span className="truncate">{location}</span>
        </div>

        {/* Specs */}
        <div className="flex items-center gap-4 text-sm text-gray-600 mb-3 pb-3 border-b border-gray-100">
          <span className="flex items-center gap-1">
            <Maximize2 size={13} className="text-gray-400" />
            {size}
          </span>
          {bedrooms && (
            <span className="flex items-center gap-1">
              <Bed size={13} className="text-gray-400" />
              {bedrooms} Bed
            </span>
          )}
          {bathrooms && (
            <span className="flex items-center gap-1">
              <Bath size={13} className="text-gray-400" />
              {bathrooms} Bath
            </span>
          )}
        </div>

        <p className="text-gray-500 text-sm leading-relaxed mb-4 line-clamp-2">{description}</p>

        {/* Enquire Button */}
        <a
          href={CONTACT.whatsappEnquiry(title)}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold py-2.5 rounded-lg text-sm transition-all duration-200 active:scale-95"
        >
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
          Enquire Now
        </a>
      </div>
    </article>
  );
}
