import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import Card from '../Card';

export default function ListCard() {
  const [currentCategory, setCurrentCategory] = useState('Tất cả');

  const allProducts = useSelector((state) => state.home.allProducts);
  const categories = [
    'Tất cả',
    'Serum',
    'Chống nắng',
    'Sửa rửa mặt',
    'Kem',
    'Combo VIP',
    'Collagen'
  ];

  const active = (item) => {
    if (item === currentCategory) {
      return 'active';
    }
    return '';
  };

  return (
    <div id="list-card">
      <ul className="category">
        {categories.map((item, index) => (
          <li
            onClick={() => setCurrentCategory(item)}
            key={index}
            className={active(item)}
          >
            {item}
          </li>
        ))}
      </ul>
      <div className="bottom-content">
        {allProducts !== null
          ? allProducts
              .filter((card) => {
                if (currentCategory === 'Tất cả') return card;
                return card.category === currentCategory;
              })
              .map((card, index) => (
                <div className="content-item" key={index}>
                  <Card {...card} />
                </div>
              ))
          : ''}
      </div>
    </div>
  );
}
