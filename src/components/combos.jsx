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
    name: "Sugar Plain Putharekulu",
    price: 349,
    originalPrice: Math.round(349 * 1.2),
    category: "combos",
    description: "Traditional sweet with sugar layers, made with love.",
    image: Img21,
    moreImages: [Img21, Img21, Img21],
    ordersLastWeek: 1,
    topSeller: false,
  },
  {
    id: 22,
    name: "Jaggery Plain Putharekulu",
    price: 349,
    originalPrice: Math.round(349 * 1.2),
    category: "combos",
    description: "Delightful blend of jaggery and tradition.",
    image: Img22,
    moreImages: [Img22, Img22, Img22],
    ordersLastWeek: 2,
    topSeller: true,
  },
  {
    id: 23,
    name: "Sugar Dryfruits Putharekulu",
    price: 449,
    originalPrice: Math.round(449 * 1.2),
    category: "combos",
    description: "Stuffed with premium dry fruits and sweet sugar.",
    image: Img23,
    moreImages: [Img23, Img23, Img23],
    ordersLastWeek: 3,
    topSeller: true,
  },
  {
    id: 24,
    name: "Jaggery Dryfruits Putharekulu",
    price: 449,
    originalPrice: Math.round(449 * 1.2),
    category: "combos",
    description: "Wholesome jaggery with dry fruits inside.",
    image: Img24,
    moreImages: [Img24, Img24, Img24],
    ordersLastWeek: 4,
    topSeller: false,
  },
  {
    id: 25,
    name: "Chocolate Dryfruits Putharekulu",
    price: 499,
    originalPrice: Math.round(499 * 1.2),
    category: "combos",
    description: "A chocolaty twist to a traditional treat.",
    image: Img25,
    moreImages: [Img25, Img25, Img25],
    ordersLastWeek: 5,
    topSeller: true,
  },
  {
    id: 26,
    name: "Boost Dryfruits Putharekulu",
    price: 499,
    originalPrice: Math.round(499 * 1.2),
    category: "combos",
    description: "Get boosted with our sweet and nutty delight.",
    image: Img26,
    moreImages: [Img26, Img26, Img26],
    ordersLastWeek: 6,
    topSeller: false,
  },
  {
    id: 27,
    name: "Honey Dryfruits Putharekulu",
    price: 549,
    originalPrice: Math.round(549 * 1.2),
    category: "combos",
    description: "Sweetened with nature's own nectar and dry fruits.",
    image: Img27,
    moreImages: [Img27, Img27, Img27],
    ordersLastWeek: 7,
    topSeller: false,
  },
  {
    id: 28,
    name: "Palm Jelly (Thati Thandra)",
    price: 449,
    originalPrice: Math.round(449 * 1.2),
    category: "combos",
    description: "Rare treat made with thati thandra (palm jelly).",
    image: Img28,
    moreImages: [Img28, Img28, Img28],
    ordersLastWeek: 8,
    topSeller: true,
  },
];

export default combos;
