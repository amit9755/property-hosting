import { Home, TrendingUp, Map, Key, Building2, MessageSquare } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

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
  const { t, language } = useLanguage();
  const serviceText = language === 'hi'
    ? [['प्रॉपर्टी खरीदें', 'अपनी जरूरत के अनुसार आवासीय और व्यावसायिक प्रॉपर्टी खोजें।'], ['प्रॉपर्टी बेचें', 'सच्चे खरीदार खोजने और लेन-देन पूरा करने में सहायता पाएं।'], ['प्लॉट और जमीन', 'जयपुर में आवासीय प्लॉट और जमीन के अवसर देखें।'], ['किराए की प्रॉपर्टी', 'किराए के लिए उपयुक्त घर, फ्लैट और व्यावसायिक जगह खोजें।'], ['व्यावसायिक प्रॉपर्टी', 'दुकान, ऑफिस और व्यावसायिक प्रॉपर्टी खरीदें, बेचें या लीज़ पर लें।'], ['प्रॉपर्टी सलाह', 'महत्वपूर्ण प्रॉपर्टी निर्णय से पहले स्थानीय मार्गदर्शन पाएं।']]
    : services.map(({ title, desc }) => [title, desc]);
  return (
    <section id="services" className="py-16 lg:py-24 bg-gray-50" aria-labelledby="services-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-gold-600 font-semibold text-sm uppercase tracking-widest mb-2">{t.sections.servicesLabel}</p>
          <h2 id="services-heading" className="section-title">
            {t.sections.servicesTitle}
          </h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            {t.sections.servicesIntro}
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className={`card bg-white border border-gray-100 ${service.border} p-6 group cursor-default`}
              >
                <div className={`inline-flex p-3 rounded-xl ${service.color} mb-4 transition-transform group-hover:scale-110 duration-300`}>
                  <Icon size={24} />
                </div>
                <h3 className="text-lg font-heading font-semibold text-navy-900 mb-2">{serviceText[index][0]}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{serviceText[index][1]}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
