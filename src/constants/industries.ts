export interface Industry {
  slug: string;
  name: string;
  image: string;
  challenge: string;
  description: string;
  solutions: string[]; // slugs of products
}

export const INDUSTRIES: Industry[] = [
  {
    slug: 'agriculture',
    name: 'Agriculture & Feed',
    image: 'https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?q=80&w=1200&auto=format&fit=crop',
    challenge: 'Agricultural products are diverse, ranging from fine powders to large grains and seeds. Packaging must protect against moisture, prevent sifting, and be durable enough for rough handling in rural environments.',
    description: 'We provide high-strength bags that empower farmers and seed producers to store and transport their yields safely. Our bags are designed to withstand long storage periods and environmental exposure.',
    solutions: ['pp-woven-bags', 'leno-mesh-bags', 'fibc-big-bags']
  },
  {
    slug: 'construction',
    name: 'Construction & Cement',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f496f04?q=80&w=1200&auto=format&fit=crop',
    challenge: 'Common construction materials like cement, sand, and aggregates are heavy and often abrasive. Packaging needs extreme bursting strength and sift-proofing to prevent material loss.',
    description: 'Our construction-grade sacks and FIBCs are built for high-speed filling lines and heavy-duty site logistics. We offer laminated and valve bags optimized for the cement industry.',
    solutions: ['pp-woven-bags', 'fibc-big-bags']
  },
  {
    slug: 'food-beverage',
    name: 'Food & Beverage',
    image: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=1200&auto=format&fit=crop',
    challenge: 'Food-grade components require strict hygiene. Packaging must be produced in certified clean-room environments to prevent contamination.',
    description: 'We maintain dedicated food-grade production lines. Our bags are FDA/EU compliant and designed for ingredient integrity.',
    solutions: ['pp-woven-bags', 'bopp-laminated-bags', 'fibc-big-bags']
  },
  {
    slug: 'mining-minerals',
    name: 'Mining & Minerals',
    image: 'https://images.unsplash.com/photo-1578319439584-104c94d37305?q=80&w=1200&auto=format&fit=crop',
    challenge: 'Abrasive minerals and heavy ores demand the highest burst strength and puncture resistance for global transport.',
    description: 'Our heavy-duty woven sacks and reinforced FIBCs are engineered for high-density materials and mechanical handling.',
    solutions: ['pp-woven-bags', 'fibc-big-bags']
  },
  {
    slug: 'retail-packaging',
    name: 'Retail & Consumer',
    image: 'https://images.unsplash.com/photo-1534452203293-494d7ddbf7e0?q=80&w=1200&auto=format&fit=crop',
    challenge: 'High-end retail products need both durability and photographic quality branding to win on the shelf.',
    description: 'Our BOPP laminated range provides photorealistic 10-color printing with high-gloss finishes for premium consumer brands.',
    solutions: ['bopp-laminated-bags']
  }
];
