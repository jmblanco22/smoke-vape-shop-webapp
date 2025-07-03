// A single source of truth for all product information
export const products = [
  {
    id: 1,
    name: 'Vortex Vape Pen',
    price: '$49.99',
    description: 'A sleek, powerful, and easy-to-use vape pen. Perfect for beginners and veterans alike, offering a smooth and consistent experience.',
    image: 'https://images.unsplash.com/photo-1611281422893-3397a06ac46a?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 2,
    name: 'Cosmic Blueberry E-Liquid',
    price: '$18.99',
    description: 'An explosion of sweet and tangy blueberry flavor. Our premium e-liquid is crafted for maximum flavor and vapor production.',
    image: 'https://images.unsplash.com/photo-1622588258129-84b9e4a42b4d?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 3,
    name: 'Glass Water Pipe',
    price: '$89.99',
    description: 'Expertly crafted from high-quality borosilicate glass, this water pipe delivers smooth, filtered hits every time.',
    image: 'https://images.unsplash.com/photo-1608728999812-d7904499b706?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 4,
    name: 'Titanium Grinder',
    price: '$34.99',
    description: 'A premium 4-piece titanium grinder with a kief catcher. Engineered for a perfect, fluffy grind every time.',
    image: 'https://images.unsplash.com/photo-1614269453326-896f6913e003?q=80&w=800&auto=format&fit=crop'
  },
];

export const getProductById = (id) => {
  // The id from the URL is a string, so we convert it to a number
  return products.find(p => p.id === parseInt(id));
};