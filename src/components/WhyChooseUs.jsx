import { MapPin, UserCheck, Handshake, Eye, Target, Phone } from 'lucide-react';
import { CONTACT } from '../data/properties';

const points = [
  {
    icon: MapPin,
    title: 'Local Jaipur Market Knowledge',
    desc: 'Deep understanding of Jaipur localities, pricing trends and upcoming areas.',
  },
  {
    icon: UserCheck,
    title: 'Personalized Property Assistance',
    desc: 'One-on-one guidance tailored to your specific requirements and budget.',
  },
  {
    icon: Handshake,
    title: 'Buyer & Seller Support',
    desc: 'Dedicated support for both buyers and sellers through every step of the process.',
  },
  {
    icon: Eye,
    title: 'Transparent Deal Process',
    desc: 'Clear communication and honest advice — no hidden costs or misleading claims.',
  },
  {
    icon: Target,
    title: 'Budget-Based Property Matching',
    desc: 'We find properties that genuinely match your requirements and financial range.',
  },
  {
    icon: Phone,
    title: 'Direct Personal Assistance',
    desc: 'You deal directly with Ravindra Singh — no middlemen, no delays.',
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-16 lg:py-24 bg-navy-900 relative overflow-hidden" aria-labelledby="why-heading">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-64 h-64 rounded-full border-2 border-white" />
        <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full border-2 border-white" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full border-2 border-white" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-gold-400 font-semibold text-sm uppercase tracking-widest mb-2">Why Us</p>
          <h2 id="why-heading" className="text-3xl md:text-4xl font-heading font-bold text-white leading-tight">
            Why Choose Ravindra Singh?
          </h2>
          <p className="text-white/60 mt-3 text-lg max-w-2xl mx-auto">
            Committed to making your property journey smooth, transparent and stress-free.
          </p>
        </div>

        {/* Points Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
          {points.map((point, idx) => {
            const Icon = point.icon;
            return (
              <div
                key={idx}
                className="flex gap-4 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-gold-500/40 rounded-xl p-5 transition-all duration-300 group"
              >
                <div className="shrink-0 mt-0.5">
                  <div className="bg-gold-500/20 group-hover:bg-gold-500/30 p-2.5 rounded-lg transition-colors">
                    <Icon size={20} className="text-gold-400" />
                  </div>
                </div>
                <div>
                  <h3 className="text-white font-semibold text-sm mb-1.5">{point.title}</h3>
                  <p className="text-white/55 text-sm leading-relaxed">{point.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center border-t border-white/10 pt-10">
          <p className="text-white/70 text-base mb-5">
            Have a property requirement? Talk directly with Ravindra Singh.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href={CONTACT.phoneHref}
              className="flex items-center gap-2 bg-gold-500 hover:bg-gold-400 text-navy-900 font-bold px-6 py-3 rounded-xl transition-all duration-200 active:scale-95"
            >
              <Phone size={17} />
              Call Now: {CONTACT.phone}
            </a>
            <a
              href="#enquiry"
              className="flex items-center gap-2 border-2 border-white/30 hover:border-white text-white font-semibold px-6 py-3 rounded-xl transition-all duration-200 hover:bg-white/10 active:scale-95"
            >
              Send Enquiry
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
