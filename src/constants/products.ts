export interface Product {
  slug: string;
  name: string;
  description: string;
  summary: string;
  image: string;
  specs: {
    material: string;
    gsmRange: string;
    sizeRange: string;
    capacity: string;
    closure: string;
    printing: string;
    lamination: string;
    uvTreatment: string;
    certifications: string[];
  };
  applications: string[];
  moq: string;
  leadTime: string;
  faqs: { q: string; a: string }[];
}

export const PRODUCTS: Product[] = [
  {
    slug: 'pp-woven-bags',
    name: 'PP Woven Bags',
    summary: 'Custom-engineered polypropylene sacks for heavy-duty industrial use.',
    description: 'Our PP woven bags are manufactured with high-tenacity polypropylene ribbons. These bags are the backbone of industrial storage, offering incredible tensile strength and durability for various dry bulk commodities.',
    image: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=800&auto=format&fit=crop',
    specs: {
      material: '100% Virgin Polypropylene',
      gsmRange: '45 GSM to 120 GSM',
      sizeRange: 'Width 30cm - 120cm, Length as required',
      capacity: '5kg to 100kg',
      closure: 'Chain stitch, Hemmed, Easy-open handle',
      printing: 'Flexographic up to 4 colors per side',
      lamination: 'PE coating (inner or outer) available',
      uvTreatment: '200 to 1600 hours stability',
      certifications: ['ISO 9001', 'ISO 22000', 'Intertek Tested']
    },
    applications: [
      'Grains & Cereals storage',
      'Animal feed and pet food',
      'Construction minerals (Sand/Cement)',
      'Sugar and Salt packaging',
      'Chemical fertilizers'
    ],
    moq: '10,000 units',
    leadTime: '10-14 Business Days',
    faqs: [
      { q: "What is the maximum GSM you produce?", a: "We typically produce up to 120 GSM for standard sacks, but can engineer higher density weaves for specific industrial applications." },
      { q: "Can these bags be reused?", a: "Standard single-trip bags are highly durable, but for true reuse, we recommend our specialized multi-trip construction methods." }
    ]
  },
  {
    slug: 'fibc-big-bags',
    name: 'FIBC Big Bags',
    summary: 'Flexible Intermediate Bulk Containers with SWL up to 2000kg.',
    description: 'Designed for safe and efficient bulk handling, our FIBCs include Type A, B, C, and D varieties. We focus on Safety Factor ratings (5:1 or 6:1) to ensure cargo integrity.',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=800&auto=format&fit=crop',
    specs: {
      material: 'Circular or U-Panel Woven Polypropylene',
      gsmRange: '140 GSM to 240 GSM',
      sizeRange: 'Standard 90x90x100cm to custom dims',
      capacity: '500kg to 2000kg (SWL)',
      closure: 'Top skirt/spout, Bottom discharge spout',
      printing: '2-color technical labels',
      lamination: 'Optional dust-proofing / Sift proofing',
      uvTreatment: 'Standard UV stabilized for outdoor storage',
      certifications: ['UN Certified (Hazardous)', 'EFIBCA Guidelines', 'ISO 21898']
    },
    applications: [
      'Industrial chemical transport',
      'Aggregates and mining minerals',
      'Food-grade sugar/flour transport',
      'Hazardous waste management',
      'Agricultural seed logistics'
    ],
    moq: '250 units',
    leadTime: '15-20 Business Days',
    faqs: [
      { q: "What is the difference between a 5:1 and 6:1 safety ratio?", a: "5:1 is for single-trip use, meaning the bag is rated to 5x its safe working load. 6:1 is required for multi-trip bags intended for repeated filling and discharge." }
    ]
  },
  {
    slug: 'bopp-laminated-bags',
    name: 'BOPP Laminated Bags',
    summary: 'Photographic quality printed bags for high-end retail packaging.',
    description: 'Combining the strength of PP woven bags with the aesthetic of high-definition printing. Ideal for pet food, rice, and birdseed where brand presentation is critical.',
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=800&auto=format&fit=crop',
    specs: {
      material: 'PP Woven with BOPP film lamination',
      gsmRange: '60 GSM fabric + 18-25 micron film',
      sizeRange: '5kg to 50kg capacity sizes',
      capacity: 'Up to 50kg',
      closure: 'Heat seal, Back seam, Side gusset',
      printing: 'Rotogravure up to 10 colors (Photo quality)',
      lamination: 'Gloss, Matte, or Metallic finishes',
      uvTreatment: 'High UV resistance available',
      certifications: ['FDA compliant', 'EU 10/2011 Food Grade']
    },
    applications: [
      'Premium Pet Food',
      'Rice and Specialized Grains',
      'Charcoal briquettes',
      'Detergent and cleaning supplies',
      'Retail hardware items'
    ],
    moq: '20,000 units',
    leadTime: '25-30 Business Days (Cylinder setup required)',
    faqs: [
      { q: "Is there a setup cost for printing?", a: "Yes, BOPP bags require rotogravure cylinders. There is a one-time cost per set of cylinders, which can be reused for future orders." }
    ]
  }
];
