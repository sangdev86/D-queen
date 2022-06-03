import React, { useState } from 'react';

import Card from '../Card';

export default function ListCard() {
  const [currentCategory, setCurrentCategory] = useState('Tất cả');
  const api = [
    {
      id: '1',
      category: 'Serum',
      title: 'Sưã rữa mặt dược liệu thiên nhiên  1',
      image: [
        {
          src: '/image/products/SRM.png',
          alt: 'Top Sữa rửa mặt đáng tiền mua nhất 2020 '
        },
        {
          src: '/image/products/SRM.png',
          alt: 'Top Sữa rửa mặt đáng tiền mua nhất 2020 '
        },
        {
          src: '/image/products/SRM.png',
          alt: 'Top Sữa rửa mặt đáng tiền mua nhất 2020 '
        }
      ],

      price: 499000,
      sale: 449000,
      latest: false,
      saleTime: 93323232,
      description:
        "Sửa rửa mặt thiên nhiên cao cấp nhà d'queen chứa thành phần thiên nhiên bảo vệ tối ưa làm da của bạn ",
      impressive: [
        'Dưỡng ẩm',
        'Thải độc làn da',
        'Thông thoáng',
        'Vitamin b2',
        'Ngăn lão hóa',
        'Sinh Collagen'
      ],
      ingredient: 'Thành phần ........'
    },
    {
      id: '2',
      category: 'Sữa rửa mặt',
      title: 'Sưã rữa mặt dược liệu thiên nhiên  2',
      image: [
        {
          src: '/image/products/SRM-1.png',
          alt: 'Top Sữa rửa mặt đáng tiền mua nhất 2020 '
        },
        {
          src: '/image/products/SRM.png',
          alt: 'Top Sữa rửa mặt đáng tiền mua nhất 2020 '
        },
        {
          src: '/image/products/SRM.png',
          alt: 'Top Sữa rửa mặt đáng tiền mua nhất 2020 '
        }
      ],
      price: 499000,
      sale: 449000,
      saleTime: 93323232,

      description:
        "Sửa rửa mặt thiên nhiên cao cấp nhà d'queen chứa thành phần thiên nhiên bảo vệ tối ưa làm da của bạn ",
      impressive: [
        'Dưỡng ẩm',
        'Thải độc làn da',
        'Thông thoáng',
        'Vitamin b2',
        'Ngăn lão hóa',
        'Sinh Collagen'
      ],
      ingredient: 'Thành phần ........'
    },
    {
      id: '3',
      category: 'Chống nắng',
      title: 'Sưã rữa mặt dược liệu thiên nhiên  3',
      image: [
        {
          src: '/image/products/SRM.png',
          alt: 'Top Sữa rửa mặt đáng tiền mua nhất 2020 '
        },
        {
          src: '/image/products/SRM.png',
          alt: 'Top Sữa rửa mặt đáng tiền mua nhất 2020 '
        },
        {
          src: '/image/products/SRM.png',
          alt: 'Top Sữa rửa mặt đáng tiền mua nhất 2020 '
        }
      ],
      price: 499000,
      sale: 449000,
      saleTime: 93323232,

      description:
        "Sửa rửa mặt thiên nhiên cao cấp nhà d'queen chứa thành phần thiên nhiên bảo vệ tối ưa làm da của bạn ",
      impressive: [
        'Dưỡng ẩm',
        'Thải độc làn da',
        'Thông thoáng',
        'Vitamin b2',
        'Ngăn lão hóa',
        'Sinh Collagen'
      ],
      ingredient: 'Thành phần ........'
    },
    {
      id: '4',
      category: 'Kem',
      title: 'Sưã rữa mặt dược liệu thiên nhiên  4',
      image: [
        {
          src: '/image/products/SRM-1.png',
          alt: 'Top Sữa rửa mặt đáng tiền mua nhất 2020 '
        },
        {
          src: '/image/products/SRM.png',
          alt: 'Top Sữa rửa mặt đáng tiền mua nhất 2020 '
        },
        {
          src: '/image/products/SRM.png',
          alt: 'Top Sữa rửa mặt đáng tiền mua nhất 2020 '
        }
      ],
      price: 499000,
      sale: 449000,
      saleTime: 93323232,

      description:
        "Sửa rửa mặt thiên nhiên cao cấp nhà d'queen chứa thành phần thiên nhiên bảo vệ tối ưa làm da của bạn ",
      impressive: [
        'Dưỡng ẩm',
        'Thải độc làn da',
        'Thông thoáng',
        'Vitamin b2',
        'Ngăn lão hóa',
        'Sinh Collagen'
      ],
      ingredient: 'Thành phần ........'
    },
    {
      id: '5',
      category: 'Combo vip',

      title: 'Sưã rữa mặt dược liệu thiên nhiên  5',
      image: [
        {
          src: '/image/products/SRM.png',
          alt: 'Top Sữa rửa mặt đáng tiền mua nhất 2020 '
        },
        {
          src: '/image/products/SRM.png',
          alt: 'Top Sữa rửa mặt đáng tiền mua nhất 2020 '
        },
        {
          src: '/image/products/SRM.png',
          alt: 'Top Sữa rửa mặt đáng tiền mua nhất 2020 '
        }
      ],
      price: 499000,
      sale: 449000,
      saleTime: 93323232,

      description:
        "Sửa rửa mặt thiên nhiên cao cấp nhà d'queen chứa thành phần thiên nhiên bảo vệ tối ưa làm da của bạn ",
      impressive: [
        'Dưỡng ẩm',
        'Thải độc làn da',
        'Thông thoáng',
        'Vitamin b2',
        'Ngăn lão hóa',
        'Sinh Collagen'
      ],
      ingredient: 'Thành phần ........'
    },
    {
      id: '6',
      category: 'Collagen',
      title: 'Sưã rữa mặt dược liệu thiên nhiên  4',
      image: [
        {
          src: '/image/products/SRM-1.png',
          alt: 'Top Sữa rửa mặt đáng tiền mua nhất 2020 '
        },
        {
          src: '/image/products/SRM.png',
          alt: 'Top Sữa rửa mặt đáng tiền mua nhất 2020 '
        },
        {
          src: '/image/products/SRM.png',
          alt: 'Top Sữa rửa mặt đáng tiền mua nhất 2020 '
        }
      ],
      price: 499000,
      sale: 449000,
      saleTime: 93323232,

      description:
        "Sửa rửa mặt thiên nhiên cao cấp nhà d'queen chứa thành phần thiên nhiên bảo vệ tối ưa làm da của bạn ",
      impressive: [
        'Dưỡng ẩm',
        'Thải độc làn da',
        'Thông thoáng',
        'Vitamin b2',
        'Ngăn lão hóa',
        'Sinh Collagen'
      ],
      ingredient: 'Thành phần ........'
    },
    {
      id: '7',
      category: 'Sửa rửa mặt',
      title: 'Sưã rữa mặt dược liệu thiên nhiên  5',
      image: [
        {
          src: '/image/products/SRM.png',
          alt: 'Top Sữa rửa mặt đáng tiền mua nhất 2020 '
        },
        {
          src: '/image/products/SRM.png',
          alt: 'Top Sữa rửa mặt đáng tiền mua nhất 2020 '
        },
        {
          src: '/image/products/SRM.png',
          alt: 'Top Sữa rửa mặt đáng tiền mua nhất 2020 '
        }
      ],
      price: 499000,
      sale: 449000,
      saleTime: 93323232,

      description:
        "Sửa rửa mặt thiên nhiên cao cấp nhà d'queen chứa thành phần thiên nhiên bảo vệ tối ưa làm da của bạn ",
      impressive: [
        'Dưỡng ẩm',
        'Thải độc làn da',
        'Thông thoáng',
        'Vitamin b2',
        'Ngăn lão hóa',
        'Sinh Collagen'
      ],
      ingredient: 'Thành phần ........'
    },
    {
      id: '8',
      category: 'Collagen',
      title: 'Sưã rữa mặt dược liệu thiên nhiên  4',
      image: [
        {
          src: '/image/products/SRM-1.png',
          alt: 'Top Sữa rửa mặt đáng tiền mua nhất 2020 '
        },
        {
          src: '/image/products/SRM.png',
          alt: 'Top Sữa rửa mặt đáng tiền mua nhất 2020 '
        },
        {
          src: '/image/products/SRM.png',
          alt: 'Top Sữa rửa mặt đáng tiền mua nhất 2020 '
        }
      ],
      price: 499000,
      sale: 449000,
      saleTime: 93323232,

      description:
        "Sửa rửa mặt thiên nhiên cao cấp nhà d'queen chứa thành phần thiên nhiên bảo vệ tối ưa làm da của bạn ",
      impressive: [
        'Dưỡng ẩm',
        'Thải độc làn da',
        'Thông thoáng',
        'Vitamin b2',
        'Ngăn lão hóa',
        'Sinh Collagen'
      ],
      ingredient: 'Thành phần ........'
    }
  ];
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
        {api
          .filter((card) => {
            if (currentCategory === 'Tất cả') return card;
            return card.category === currentCategory;
          })
          .map((card, index) => (
            <div className="content-item" key={index}>
              <Card {...card} />
            </div>
          ))}
      </div>
    </div>
  );
}
