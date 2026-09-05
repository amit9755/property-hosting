import { Home, TrendingUp, Map, Key, Building2, MessageSquare } from 'lucide-react';

const services = [
  {
    icon: Home,
    title: 'Buy Property',
    desc: 'Find residential and commercial properties that match your requirements.',
    color: 'bg-blue-50 text-blue-600',
    border: 'hover:border-blue-200',
  },
  {
    icon: TrendingUp,
    title: 'Sell Property',
    desc: 'Get assistance in finding genuine buyers and completing your property transaction.',
    color: 'bg-green-50 text-green-600',
    border: 'hover:border-green-200',
  },
  {
    icon: Map,
    title: 'Plots & Land',
    desc: 'Explore residential plots and land opportunities across Jaipur.',
    color: 'bg-amber-50 text-amber-600',
    border: 'hover:border-amber-200',
  },
  {
    icon: Key,
    title: 'Rental Property',
    desc: 'Find suitable homes, flats and commercial spaces for rent.',
    color: 'bg-purple-50 text-purple-600',
    border: 'hover:border-purple-200',
  },
  {
    icon: Building2,
    title: 'Commercial Property',
    desc: 'Buy, sell or lease shops, offices and commercial properties.',
    color: 'bg-rose-50 text-rose-600',
    border: 'hover:border-rose-200',
  },
  {
    icon: MessageSquare,
    title: 'Property Consultation',
    desc: 'Get local guidance before making an important property decision.',
    color: 'bg-teal-50 text-teal-600',
    border: 'hover:border-teal-200',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-16 lg:py-24 bg-gray-50" aria-labelledby="services-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-gold-600 font-semibold text-sm uppercase tracking-widest mb-2">What We Offer</p>
          <h2 id="services-heading" className="section-title">
            Our Property Services
          </h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            From finding your dream home to selling your property — we provide end-to-end assistance across Jaipur.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className={`card bg-white border border-gray-100 ${service.border} p-6 group cursor-default`}
              >
                <div className={`inline-flex p-3 rounded-xl ${service.color} mb-4 transition-transform group-hover:scale-110 duration-300`}>
                  <Icon size={24} />
                </div>
                <h3 className="text-lg font-heading font-semibold text-navy-900 mb-2">{service.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{service.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
