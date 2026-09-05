import { ClipboardList, Search, MapPin, CheckCircle } from 'lucide-react';

const steps = [
  {
    icon: ClipboardList,
    step: '01',
    title: 'Tell Us Your Requirement',
    desc: 'Share your property needs — type, location, budget and any preferences via call or WhatsApp.',
  },
  {
    icon: Search,
    step: '02',
    title: 'Get Matching Properties',
    desc: 'Ravindra Singh will shortlist the best-matching properties from current listings and his network.',
  },
  {
    icon: MapPin,
    step: '03',
    title: 'Visit & Evaluate',
    desc: 'Schedule site visits at your convenience and evaluate properties with personalized guidance.',
  },
  {
    icon: CheckCircle,
    step: '04',
    title: 'Complete Your Deal',
    desc: 'Finalize the deal with full support through documentation, negotiation and handover.',
  },
];

export default function HowItWorks() {
  return (
    <section className="py-16 lg:py-24 bg-white" aria-labelledby="how-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-gold-600 font-semibold text-sm uppercase tracking-widest mb-2">Simple Process</p>
          <h2 id="how-heading" className="section-title">
            How It Works
          </h2>
          <p className="section-subtitle max-w-xl mx-auto">
            A straightforward 4-step process to find and finalize your property in Jaipur.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connector line (desktop) */}
          <div className="hidden lg:block absolute top-10 left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-gold-200 via-gold-400 to-gold-200 z-0" />

          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div key={idx} className="relative z-10 flex flex-col items-center text-center group">
                {/* Icon circle */}
                <div className="relative mb-5">
                  <div className="w-20 h-20 rounded-full bg-navy-50 group-hover:bg-navy-900 border-2 border-navy-100 group-hover:border-navy-900 flex items-center justify-center transition-all duration-300 shadow-sm">
                    <Icon size={28} className="text-navy-700 group-hover:text-gold-400 transition-colors duration-300" />
                  </div>
                  <span className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-gold-500 text-white text-xs font-bold flex items-center justify-center shadow-md">
                    {step.step}
                  </span>
                </div>
                <h3 className="font-heading font-semibold text-navy-900 text-base mb-2">{step.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed max-w-[200px]">{step.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
