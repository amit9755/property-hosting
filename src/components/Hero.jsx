import { Phone, MessageCircle, Search, MapPin } from 'lucide-react';
import { CONTACT } from '../data/properties';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      aria-label="Hero section"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1600&q=85')",
        }}
        role="img"
        aria-label="Jaipur real estate property background"
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy-950/90 via-navy-900/80 to-navy-800/70" />

      {/* Decorative gold line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gold-500 to-transparent" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-24 pt-32 text-center">
        {/* Trust badge */}
        <div className="inline-flex items-center gap-2 bg-gold-500/20 border border-gold-500/40 text-gold-300 text-xs sm:text-sm font-medium px-4 py-2 rounded-full mb-6 backdrop-blur-sm">
          <MapPin size={14} />
          Local Jaipur Property Expertise
        </div>

        {/* Business name */}
        <p className="text-gold-400 font-medium text-sm sm:text-base tracking-widest uppercase mb-3 font-sans">
          Ravindra Singh Property Consultant
        </p>

        {/* Main headline */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-white leading-tight mb-5 text-balance">
          Find the Right Property{' '}
          <span className="text-gold-400">in Jaipur</span>
        </h1>

        {/* Subheading */}
        <p className="text-lg sm:text-xl text-white/75 max-w-2xl mx-auto mb-10 leading-relaxed">
          Trusted Property Consultant in Jaipur — Helping You Buy, Sell &amp; Rent with Confidence.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-12">
          <a
            href={CONTACT.phoneHref}
            className="w-full sm:w-auto flex items-center justify-center gap-2 bg-gold-500 hover:bg-gold-400 text-navy-900 font-bold px-7 py-3.5 rounded-xl transition-all duration-200 shadow-lg hover:shadow-gold-500/30 hover:shadow-xl active:scale-95 text-base"
          >
            <Phone size={18} />
            Call Now
          </a>
          <a
            href={CONTACT.whatsappGeneral}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto flex items-center justify-center gap-2 bg-green-500 hover:bg-green-400 text-white font-bold px-7 py-3.5 rounded-xl transition-all duration-200 shadow-lg hover:shadow-green-500/30 hover:shadow-xl active:scale-95 text-base"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            WhatsApp Us
          </a>
          <a
            href="#properties"
            className="w-full sm:w-auto flex items-center justify-center gap-2 border-2 border-white/50 hover:border-white text-white font-bold px-7 py-3.5 rounded-xl transition-all duration-200 hover:bg-white/10 active:scale-95 text-base backdrop-blur-sm"
          >
            <Search size={18} />
            View Properties
          </a>
        </div>

        {/* Stats row */}
        <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10">
          {[
            { label: 'Jaipur Based', value: 'Local Expert' },
            { label: 'Property Types', value: 'Residential & Commercial' },
            { label: 'Service', value: 'Personalized Assistance' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-gold-400 font-heading font-bold text-lg sm:text-xl">{stat.value}</p>
              <p className="text-white/60 text-xs sm:text-sm mt-0.5">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M0 60L1440 60L1440 20C1200 60 960 0 720 20C480 40 240 0 0 20L0 60Z" fill="white" />
        </svg>
      </div>
    </section>
  );
}
