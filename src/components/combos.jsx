import Img21 from '../assets/children.png';     // 21 - Sugar Plain
import Img22 from '../assets/jaggery.png';      // 22 - Jaggery Plain
import Img23 from '../assets/sugar.png';        // 23 - Sugar Dryfruits
import Img24 from '../assets/jelly.png';        // 24 - Jaggery Dryfruits
import Img25 from '../assets/mango.png';        // 25 - Chocolate
import Img26 from '../assets/nature.png';       // 26 - Boost
import Img27 from '../assets/palm.png';         // 27 - Honey
import Img28 from '../assets/traditional.png';  // 28 - Palm Jelly

const combos = [
  {
    id: 21,
    name: "Classic Sugar Delight",
    price: 349,
    originalPrice: Math.round(349 * 1.2),
    category: "combos",
    description: "A traditional Andhra treat with fine sugar layers.",
    image: Img21,
    moreImages: [Img21, Img21, Img21],
    ordersLastWeek: 1,
    topSeller: false,
  },
  {
    id: 22,
    name: "Golden Jaggery Wrap",
    price: 349,
    originalPrice: Math.round(349 * 1.2),
    category: "combos",
    description: "Rich jaggery wrapped in delicate rice paper sheets.",
    image: Img22,
    moreImages: [Img22, Img22, Img22],
    ordersLastWeek: 2,
    topSeller: true,
  },
  {
    id: 23,
    name: "Royal Sugar Fusion",
    price: 449,
    originalPrice: Math.round(449 * 1.2),
    category: "combos",
    description: "Loaded with premium dry fruits and sweetened elegance.",
    image: Img23,
    moreImages: [Img23, Img23, Img23],
    ordersLastWeek: 3,
    topSeller: true,
  },
  {
    id: 24,
    name: "Nutty Jaggery Essence",
    price: 449,
    originalPrice: Math.round(449 * 1.2),
    category: "combos",
    description: "Crunchy dry fruits paired with earthy jaggery flavors.",
    image: Img24,
    moreImages: [Img24, Img24, Img24],
    ordersLastWeek: 4,
    topSeller: false,
  },
  {
    id: 25,
    name: "Choco Bliss Rolls",
    price: 499,
    originalPrice: Math.round(499 * 1.2),
    category: "combos",
    description: "Chocolate-packed layers for sweet indulgence lovers.",
    image: Img25,
    moreImages: [Img25, Img25, Img25],
    ordersLastWeek: 5,
    topSeller: true,
  },
  {
    id: 26,
    name: "Energy Boost Treat",
    price: 499,
    originalPrice: Math.round(499 * 1.2),
    category: "combos",
    description: "A unique blend of nutrition and nostalgic flavors.",
    image: Img26,
    moreImages: [Img26, Img26, Img26],
    ordersLastWeek: 6,
    topSeller: false,
  },
  {
    id: 27,
    name: "Honey Glaze Crunch",
    price: 549,
    originalPrice: Math.round(549 * 1.2),
    category: "combos",
    description: "Pure honey sweetness infused into crispy layers.",
    image: Img27,
    moreImages: [Img27, Img27, Img27],
    ordersLastWeek: 7,
    topSeller: false,
  },
  {
    id: 28,
    name: "Palm Nectar Rolls",
    price: 449,
    originalPrice: Math.round(449 * 1.2),
    category: "combos",
    description: "A tropical twist with palm jelly richness.",
    image: Img28,
    moreImages: [Img28, Img28, Img28],
    ordersLastWeek: 8,
    topSeller: true,
  },
];

export default combos;
