import React from 'react';
import './Combo.css';

const comboProducts = [
  {
    id: 1,
    name: 'Classic Combo Box',
    image: '/images/combo1.jpg',
    price: '₹499',
  },
  {
    id: 2,
    name: 'Festive Delight Pack',
    image: '/images/combo2.jpg',
    price: '₹699',
  },
  {
    id: 3,
    name: 'Dry Fruit Special Combo',
    image: '/images/combo3.jpg',
    price: '₹899',
  },
];

const suggestedProducts = [
  {
    id: 1,
    name: 'Chocolate Putharekulu',
    image: '/images/suggest1.jpg',
    price: '₹120',
  },
  {
    id: 2,
    name: 'Jaggery Putharekulu',
    image: '/images/suggest2.jpg',
    price: '₹100',
  },
  {
    id: 3,
    name: 'Dry Fruit Putharekulu',
    image: '/images/suggest3.jpg',
    price: '₹150',
  },
];

const Combo = () => {
  return (
    <div className="combo-container">
      <h2 className="combo-heading">Our Combo Offers</h2>
      <div className="product-grid">
        {comboProducts.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.price}</p>
          </div>
        ))}
      </div>

      <h2 className="combo-heading">You May Also Like</h2>
      <div className="product-grid">
        {suggestedProducts.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Combo;
