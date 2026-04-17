export interface Resource {
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  content: string;
  image: string;
}

export const RESOURCES: Resource[] = [
  {
    slug: 'buyers-guide-gsm-selection',
    title: "Buyer's Guide: Understanding GSM and Fabric Density",
    category: "Technical Guide",
    excerpt: "Selecting the correct Grams per Square Meter (GSM) is the most critical decision in industrial packaging. Learn how to optimize for weight vs. cost.",
    content: `Choosing the right fabric density is essential for both the safety of your cargo and the efficiency of your budget. In the world of PP woven bags, GSM (Grams per Square Meter) is the primary metric for quality and strength.\n\n### Why GSM Matters\n\nGSM directly correlates with the tensile strength of the bag. A bag with 50 GSM might be perfect for light animal feed, but would fail catastrophically if used for 50kg of heavy construction aggregate.\n\n### General Guidelines\n\n1. **45-55 GSM**: Light duty. Flour, sugar, salt in 25kg formats.\n2. **60-80 GSM**: Standard duty. Grains, seeds, and 50kg food products.\n3. **90-120 GSM**: Heavy duty. Chemicals, minerals, and abrasive construction materials.\n\n### Cost Optimization\n\nMany producers over-index on GSM, spending 15% more than necessary on packaging. Our engineers work with clients to find the 'Safety Sweet Spot'—the minimum density required to maintain a 5:1 safety factor without wasted material.`,
    image: "https://images.unsplash.com/photo-1579567761406-4684ee0c75b6?q=80&w=800&auto=format&fit=crop"
  },
  {
    slug: 'fibc-safety-factor-explained',
    title: "FIBC Safety Factor: 5:1 vs 6:1 Explained",
    category: "Safety Standard",
    excerpt: "The difference between single-trip and multi-trip big bags can have major legal and safety implications for your logistics.",
    content: "When purchasing FIBCs (Big Bags), you'll see a 'Safety Factor' rating. This isn't just a suggestion—it's a critical safety standard governed by ISO 21898.\n\n### 5:1 SF (Single Trip)\nThese bags are designed to be filled and discharged once. If used again, the structural integrity of the loops and fabric cannot be guaranteed. They are cost-effective for standard export logistics.\n\n### 6:1 SF (Multi-Trip / Heavy Duty)\nConstructed with reinforced seams and much higher GSM fabric. These bags are intended for closed-loop logistics where a bag might be reused several times. They require a rigorous inspection protocol between uses.",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=800&auto=format&fit=crop"
  }
];
