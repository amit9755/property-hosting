// ============================================================
// PROPERTY DATA - Edit this file to update property listings
// ============================================================

export const CONTACT = {
  name: 'Ravindra Singh',
  business: 'Ravindra Singh Property Consultant',
  phone: '9636961082',
  phoneHref: 'tel:9636961082',
  whatsapp: 'https://wa.me/919636961082',
  whatsappEnquiry: (propertyName) =>
    `https://wa.me/919636961082?text=Hello%20Ravindra%20Ji%2C%20I%20am%20interested%20in%20the%20property%3A%20${encodeURIComponent(propertyName)}.%20Please%20share%20more%20details.`,
  whatsappGeneral:
    'https://wa.me/919636961082?text=Hello%20Ravindra%20Ji%2C%20I%20am%20looking%20for%20a%20property%20in%20Jaipur.%20Please%20help%20me.',
  city: 'Jaipur',
  state: 'Rajasthan',
  mapEmbedUrl:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d114356.0!2d75.7873!3d26.9124!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396c4adf4c57e281%3A0xce1c63a0cf22e09!2sJaipur%2C%20Rajasthan!5e0!3m2!1sen!2sin!4v1700000000000',
};

// ============================================================
// DEMO PROPERTIES - Replace with real listings when available
// Each property has an "isDemo: true" flag for easy identification
// ============================================================

export const properties = [
  {
    id: 1,
    isDemo: true,
    type: 'Flat',
    title: '3 BHK Flat in Mansarovar',
    location: 'Mansarovar, Jaipur',
    price: '55 Lakh',
    priceValue: 5500000,
    size: '1350 sq ft',
    bedrooms: 3,
    bathrooms: 2,
    status: 'For Sale',
    description: 'Spacious 3 BHK flat in a well-connected Mansarovar society with parking and modern amenities.',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=600&q=80',
    features: ['Parking', 'Lift', 'Security', 'Water Supply'],
  },
  {
    id: 2,
    isDemo: true,
    type: 'Plot',
    title: 'Residential Plot in Jagatpura',
    location: 'Jagatpura, Jaipur',
    price: '38 Lakh',
    priceValue: 3800000,
    size: '200 sq yd',
    bedrooms: null,
    bathrooms: null,
    status: 'For Sale',
    description: 'Clear title residential plot in a fast-developing area of Jagatpura. Ready for construction.',
    image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=600&q=80',
    features: ['Clear Title', 'Corner Plot', 'Road Facing', 'Approved Layout'],
  },
  {
    id: 3,
    isDemo: true,
    type: 'House',
    title: 'Independent House in Vaishali Nagar',
    location: 'Vaishali Nagar, Jaipur',
    price: '1.2 Crore',
    priceValue: 12000000,
    size: '1800 sq ft',
    bedrooms: 4,
    bathrooms: 3,
    status: 'For Sale',
    description: 'Well-maintained independent house with a garden in a prime Vaishali Nagar locality.',
    image: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=600&q=80',
    features: ['Garden', 'Parking', 'Modular Kitchen', 'Terrace'],
  },
  {
    id: 4,
    isDemo: true,
    type: 'Flat',
    title: '2 BHK Flat for Rent — Malviya Nagar',
    location: 'Malviya Nagar, Jaipur',
    price: '12,000/month',
    priceValue: 12000,
    size: '950 sq ft',
    bedrooms: 2,
    bathrooms: 2,
    status: 'For Rent',
    description: 'Ready-to-move 2 BHK flat on 2nd floor with all basic amenities in Malviya Nagar.',
    image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=600&q=80',
    features: ['Furnished', 'Parking', 'Security', 'Lift'],
  },
  {
    id: 5,
    isDemo: true,
    type: 'Commercial',
    title: 'Commercial Shop on Tonk Road',
    location: 'Tonk Road, Jaipur',
    price: '45 Lakh',
    priceValue: 4500000,
    size: '300 sq ft',
    bedrooms: null,
    bathrooms: null,
    status: 'For Sale',
    description: 'Ground floor commercial shop with high footfall on main Tonk Road. Ideal for retail or office.',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80',
    features: ['Ground Floor', 'Main Road', 'High Footfall', 'Power Backup'],
  },
  {
    id: 6,
    isDemo: true,
    type: 'Villa',
    title: 'Premium Villa in Pratap Nagar',
    location: 'Pratap Nagar, Jaipur',
    price: '2.5 Crore',
    priceValue: 25000000,
    size: '3200 sq ft',
    bedrooms: 5,
    bathrooms: 4,
    status: 'For Sale',
    description: 'Luxurious villa with premium fittings, private garden and 2-car garage in Pratap Nagar.',
    image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=600&q=80',
    features: ['Private Garden', '2-Car Garage', 'Swimming Pool', 'CCTV Security'],
  },
];

export const propertyTypes = [
  'All Types',
  'Flat',
  'House',
  'Villa',
  'Plot',
  'Land',
  'Commercial Property',
  'Shop',
  'Office',
];

export const locations = [
  'All Locations',
  'Mansarovar',
  'Vaishali Nagar',
  'Malviya Nagar',
  'Jagatpura',
  'Pratap Nagar',
  'Sanganer',
  'Tonk Road',
  'Ajmer Road',
  'C-Scheme',
  'Civil Lines',
  'Durgapura',
  'Jhotwara',
  'Vidhyadhar Nagar',
  'Amer',
  'Kalwar Road',
  'Other',
];

export const budgetRanges = [
  'Any Budget',
  'Under \u20b925 Lakh',
  '\u20b925\u201350 Lakh',
  '\u20b950 Lakh\u2013\u20b91 Crore',
  '\u20b91\u20132 Crore',
  '\u20b92 Crore+',
];

export const lookingFor = ['Buy', 'Sell', 'Rent'];

export const areasList = [
  { name: 'Mansarovar', desc: 'Well-planned residential hub' },
  { name: 'Vaishali Nagar', desc: 'Premium residential area' },
  { name: 'Malviya Nagar', desc: 'Popular for families & flats' },
  { name: 'Jagatpura', desc: 'Fast-growing south Jaipur' },
  { name: 'Pratap Nagar', desc: 'Modern township & villas' },
  { name: 'Sanganer', desc: 'Affordable plots & housing' },
  { name: 'Tonk Road', desc: 'Commercial & residential belt' },
  { name: 'Ajmer Road', desc: 'NH-48 corridor development' },
  { name: 'C-Scheme', desc: 'Premium central Jaipur' },
  { name: 'Civil Lines', desc: 'Upscale bungalow area' },
  { name: 'Durgapura', desc: 'Developing south-west zone' },
  { name: 'Jhotwara', desc: 'North Jaipur growth area' },
  { name: 'Vidhyadhar Nagar', desc: 'Planned residential sector' },
  { name: 'Amer', desc: 'Heritage town near Pink City' },
  { name: 'Kalwar Road', desc: 'Emerging north Jaipur plots' },
];
