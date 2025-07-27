// A single source of truth for all product information
export const products = [
  {
    id: 1,
    name: 'Vortex Vape Pen',
    price: '$49.99',
    description: 'A sleek, powerful, and easy-to-use vape pen. Perfect for beginners and veterans alike, offering a smooth and consistent experience.',
    image: require('../images/vape-pen.jpg') // 2nd image
  },
  {
    id: 2,
    name: 'Cosmic Blueberry E-Liquid',
    price: '$18.99',
    description: 'An explosion of sweet and tangy blueberry flavor. Our premium e-liquid is crafted for maximum flavor and vapor production.',
    image: require('../images/e-liquid.jpg') // 3rd image
  },
  {
    id: 3,
    name: 'Glass Water Pipe',
    price: '$89.99',
    description: 'Expertly crafted from high-quality borosilicate glass, this water pipe delivers smooth, filtered hits every time.',
    image: require('../images/glasswaterpipe.jpg') // 1st image
  },
  {
    id: 4,
    name: 'Titanium Grinder',
    price: '$34.99',
    description: 'A premium 4-piece titanium grinder with a kief catcher. Engineered for a perfect, fluffy grind every time.',
    image: require('../images/grinder.jpg') // 4th image
  },
];

export const getProductById = (id) => {
  // The id from the URL is a string, so we convert it to a number
  return products.find(p => p.id === parseInt(id));
};
export default products;