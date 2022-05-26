import React, { Fragment } from 'react';
import { GiChestnutLeaf } from 'react-icons/gi';
import Card from '../../../../components/Card';
import Carousel from '../../../../components/Carousel';
export default function Event() {
  const api = [
    {
      id: '1',
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
    }
  ];
  return (
    <div id="event">
      <div className="container">
        <div className="top-title left">
          <div className="layout-left">
            <span className="icon">
              <GiChestnutLeaf />
            </span>

            <h2>Event</h2>
          </div>
          <div className="layout-right">
            <span>Tất cả sản phẩm</span>
          </div>
        </div>
        <div className="bottom-content">
          <Carousel show={4} length={api.length}>
            <Fragment key="item">
              {api.map((card, index) => (
                <Fragment key={index}>
                  <Card {...card} />
                </Fragment>
              ))}
            </Fragment>
          </Carousel>
        </div>
      </div>
    </div>
  );
}
