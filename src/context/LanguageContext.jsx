import { createContext, useContext, useEffect, useState } from 'react';

const translations = {
  en: {
    nav: { home: 'Home', properties: 'Properties', services: 'Services', areas: 'Areas', about: 'About', contact: 'Contact' },
    common: { whatsapp: 'WhatsApp', whatsappUs: 'WhatsApp Us', callNow: 'Call Now', call: 'Call', viewProperties: 'View Properties' },
    hero: {
      badge: 'Local Jaipur Property Expertise',
      eyebrow: 'Ravindra Singh Property Consultant',
      title: 'Find the Right Property',
      titleAccent: 'in Jaipur',
      subtitle: 'Trusted Property Consultant in Jaipur — Helping You Buy, Sell & Rent with Confidence.',
      stats: [['Local Expert', 'Jaipur Based'], ['Residential & Commercial', 'Property Types'], ['Personalized Assistance', 'Service']],
    },
    search: {
      title: 'Find Your Perfect Property in Jaipur',
      lookingTo: 'I am looking to',
      propertyType: 'Property Type',
      location: 'Location',
      budget: 'Budget',
      submit: 'Find Property',
      note: 'Your enquiry will be sent directly to Ravindra Singh via WhatsApp',
    },
    sections: {
      servicesLabel: 'What We Offer', servicesTitle: 'Our Property Services', servicesIntro: 'From finding your dream home to selling your property — we provide end-to-end assistance across Jaipur.',
      listingsLabel: 'Property Listings', listingsTitle: 'Featured Properties', listingsIntro: 'Browse our current listings across Jaipur. Contact Ravindra Singh for availability, pricing and site visits.', demo: 'Demo listings — Real properties will be added soon',
      areasLabel: 'Coverage', areasTitle: 'Jaipur Areas We Serve', areasIntro: 'We help buyers, sellers and tenants across all major localities in Jaipur.',
      processLabel: 'Simple Process', processTitle: 'How It Works', processIntro: 'A straightforward 4-step process to find and finalize your property in Jaipur.',
      whyLabel: 'Why Us', whyTitle: 'Why Choose Ravindra Singh?', whyIntro: 'Committed to making your property journey smooth, transparent and stress-free.',
      callNow: 'Call Now', whatsapp: 'WhatsApp Us', enquiry: 'Send Enquiry', specific: 'Looking for a specific property?', matched: 'Share your requirements with Ravindra Singh and get matched with the right property.',
    },
    about: { label: 'About', title: 'Your Local Property Consultant in Jaipur', first: 'Ravindra Singh helps property buyers, sellers and tenants navigate the Jaipur real-estate market with personalized assistance and local market knowledge.', second: 'Whether you are looking to buy your first home, invest in a plot, sell a property at the right price or find a rental in the right locality — Ravindra Singh provides direct, honest guidance with your best interest in mind.', specialization: 'Specialization', city: 'City', services: 'Services', contact: 'Contact', residential: 'Residential & Commercial', serviceValue: 'Buy, Sell, Rent, Consult' },
    contact: { label: 'Contact', title: 'Get In Touch', intro: 'Ready to buy, sell or rent? Reach out to Ravindra Singh directly.', consultant: 'Property Consultant', phone: 'Phone', location: 'Location', call: 'Call Ravindra Singh', whatsapp: 'WhatsApp Ravindra Singh' },
    form: { label: 'Get In Touch', title: 'Send Your Property Enquiry', intro: 'Fill in your details and Ravindra Singh will get back to you personally with suitable property options.', callDirect: 'Call Directly', prefer: 'Prefer WhatsApp?', chat: 'Chat with Ravindra Singh', sent: 'Enquiry Sent!', sentInfo: 'Ravindra Singh will contact you shortly.', submit: 'Submit Enquiry via WhatsApp', shared: 'Your details will be shared directly with Ravindra Singh via WhatsApp.' },
    prompt: {
      eyebrow: 'Welcome to your Jaipur property journey',
      title: 'Choose your language',
      subtitle: 'Select your preferred language for a more comfortable experience.',
      english: 'English',
      hindi: 'हिन्दी',
      continue: 'Continue',
      change: 'Language',
    },
  },
  hi: {
    nav: { home: 'होम', properties: 'प्रॉपर्टीज़', services: 'सेवाएं', areas: 'क्षेत्र', about: 'हमारे बारे में', contact: 'संपर्क' },
    common: { whatsapp: 'व्हाट्सऐप', whatsappUs: 'व्हाट्सऐप करें', callNow: 'अभी कॉल करें', call: 'कॉल', viewProperties: 'प्रॉपर्टीज़ देखें' },
    hero: {
      badge: 'जयपुर की स्थानीय प्रॉपर्टी विशेषज्ञता',
      eyebrow: 'रविंद्र सिंह प्रॉपर्टी कंसल्टेंट',
      title: 'सही प्रॉपर्टी खोजें',
      titleAccent: 'जयपुर में',
      subtitle: 'जयपुर के भरोसेमंद प्रॉपर्टी कंसल्टेंट — खरीदने, बेचने और किराए पर लेने में आपकी मदद।',
      stats: [['स्थानीय विशेषज्ञ', 'जयपुर आधारित'], ['आवासीय और व्यावसायिक', 'प्रॉपर्टी प्रकार'], ['व्यक्तिगत सहायता', 'सेवा']],
    },
    search: {
      title: 'जयपुर में अपनी सही प्रॉपर्टी खोजें',
      lookingTo: 'मैं प्रॉपर्टी चाहता/चाहती हूं',
      propertyType: 'प्रॉपर्टी का प्रकार',
      location: 'स्थान',
      budget: 'बजट',
      submit: 'प्रॉपर्टी खोजें',
      note: 'आपकी पूछताछ सीधे रविंद्र सिंह को व्हाट्सऐप पर भेजी जाएगी',
    },
    sections: {
      servicesLabel: 'हमारी सेवाएं', servicesTitle: 'हमारी प्रॉपर्टी सेवाएं', servicesIntro: 'अपना घर खोजने से लेकर प्रॉपर्टी बेचने तक — जयपुर में हम पूरी सहायता प्रदान करते हैं।',
      listingsLabel: 'प्रॉपर्टी लिस्टिंग', listingsTitle: 'विशेष प्रॉपर्टीज़', listingsIntro: 'जयपुर में हमारी वर्तमान लिस्टिंग देखें। उपलब्धता, कीमत और साइट विज़िट के लिए रविंद्र सिंह से संपर्क करें।', demo: 'डेमो लिस्टिंग — वास्तविक प्रॉपर्टीज़ जल्द जोड़ी जाएंगी',
      areasLabel: 'कवरेज', areasTitle: 'जयपुर के वे क्षेत्र जहां हम सेवा देते हैं', areasIntro: 'हम जयपुर के सभी प्रमुख क्षेत्रों में खरीदारों, विक्रेताओं और किरायेदारों की मदद करते हैं।',
      processLabel: 'सरल प्रक्रिया', processTitle: 'यह कैसे काम करता है', processIntro: 'जयपुर में अपनी प्रॉपर्टी खोजने और तय करने की सरल 4-चरणीय प्रक्रिया।',
      whyLabel: 'हमें क्यों चुनें', whyTitle: 'रविंद्र सिंह को क्यों चुनें?', whyIntro: 'आपकी प्रॉपर्टी यात्रा को आसान, पारदर्शी और तनाव-मुक्त बनाने के लिए प्रतिबद्ध।',
      callNow: 'अभी कॉल करें', whatsapp: 'व्हाट्सऐप करें', enquiry: 'पूछताछ भेजें', specific: 'क्या आप कोई खास प्रॉपर्टी खोज रहे हैं?', matched: 'अपनी जरूरत रविंद्र सिंह के साथ साझा करें और सही प्रॉपर्टी पाएं।',
    },
    about: { label: 'हमारे बारे में', title: 'जयपुर के आपके स्थानीय प्रॉपर्टी कंसल्टेंट', first: 'रविंद्र सिंह प्रॉपर्टी खरीदारों, विक्रेताओं और किरायेदारों को जयपुर के रियल एस्टेट बाजार में व्यक्तिगत सहायता और स्थानीय जानकारी के साथ मार्गदर्शन देते हैं।', second: 'चाहे आप अपना पहला घर खरीदना चाहते हों, प्लॉट में निवेश करना चाहते हों, सही कीमत पर प्रॉपर्टी बेचना चाहते हों या सही क्षेत्र में किराया ढूंढना चाहते हों — रविंद्र सिंह आपके हित में सीधी और ईमानदार सलाह देते हैं।', specialization: 'विशेषज्ञता', city: 'शहर', services: 'सेवाएं', contact: 'संपर्क', residential: 'आवासीय और व्यावसायिक', serviceValue: 'खरीदें, बेचें, किराए पर लें, सलाह' },
    contact: { label: 'संपर्क', title: 'संपर्क करें', intro: 'खरीदने, बेचने या किराए पर लेने के लिए तैयार हैं? रविंद्र सिंह से सीधे संपर्क करें।', consultant: 'प्रॉपर्टी कंसल्टेंट', phone: 'फोन', location: 'स्थान', call: 'रविंद्र सिंह को कॉल करें', whatsapp: 'रविंद्र सिंह को व्हाट्सऐप करें' },
    form: { label: 'संपर्क करें', title: 'अपनी प्रॉपर्टी पूछताछ भेजें', intro: 'अपनी जानकारी भरें और रविंद्र सिंह आपको उपयुक्त प्रॉपर्टी विकल्पों के साथ व्यक्तिगत रूप से जवाब देंगे।', callDirect: 'सीधे कॉल करें', prefer: 'व्हाट्सऐप पसंद है?', chat: 'रविंद्र सिंह से चैट करें', sent: 'पूछताछ भेज दी गई!', sentInfo: 'रविंद्र सिंह जल्द आपसे संपर्क करेंगे।', submit: 'व्हाट्सऐप पर पूछताछ भेजें', shared: 'आपकी जानकारी सीधे रविंद्र सिंह के साथ व्हाट्सऐप पर साझा की जाएगी।' },
    prompt: {
      eyebrow: 'आपकी जयपुर प्रॉपर्टी यात्रा में स्वागत है',
      title: 'अपनी भाषा चुनें',
      subtitle: 'सुविधाजनक अनुभव के लिए अपनी पसंदीदा भाषा चुनें।',
      english: 'English',
      hindi: 'हिन्दी',
      continue: 'जारी रखें',
      change: 'भाषा',
    },
  },
};

const LanguageContext = createContext(null);

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(() => localStorage.getItem('preferred-language') || 'en');
  const [showPrompt, setShowPrompt] = useState(true);

  useEffect(() => {
    localStorage.setItem('preferred-language', language);
    document.documentElement.lang = language === 'hi' ? 'hi' : 'en';
  }, [language]);

  const chooseLanguage = (nextLanguage) => {
    setLanguage(nextLanguage);
    localStorage.setItem('preferred-language', nextLanguage);
    setShowPrompt(false);
  };

  return (
    <LanguageContext.Provider value={{ language, t: translations[language], chooseLanguage, showPrompt, setShowPrompt }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}