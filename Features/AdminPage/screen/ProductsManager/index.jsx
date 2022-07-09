import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Loading from '../../../../components/Loading';
import Table from '../../../../components/Table';

export default function ProductsManager() {
  // const isFetching = useSelector((state) => state.home.isFetching);
  // const allProducts = useSelector((state) => state.home.allProducts);
  const props = () => ({
    body: [
      {
        images: [
          {
            src: 'https://firebasestorage.googleapis.com/v0/b/dqueen-dev.appspot.com/o/sua-rua-mat-duoc-lieu-thien-nhien-moi-noi-1%2F2cd8b126-b134-4778-bb62-1a4fb79781d5-91517229.jpg?alt=media',
            alt: 'Top Sữa rửa mặt đáng tiền mua nhất 2021',
            _id: '62c8591486f1165f5b4741de'
          },
          {
            src: 'https://firebasestorage.googleapis.com/v0/b/dqueen-dev.appspot.com/o/sua-rua-mat-duoc-lieu-thien-nhien-moi-noi-1%2F55548804-1c65-4448-b463-eb76b4b5cda2-avatar.jpg?alt=media',
            alt: 'Top Sữa rửa mặt đáng tiền mua nhất 2022',
            _id: '62c8591486f1165f5b4741df'
          }
        ],

        _id: '62c8591386f1165f5b4741dc',
        name: 'Sữa rửa mặt dược liệu thiên nhiên mới nổi 1',
        amount: 15,
        category: 'Sữa rửa mặt',
        price: 33333,
        sale: 450000,
        lastest: true,

        description:
          "Sửa rửa mặt thiên nhiên cao cấp nhà d'queen chứa thành phần thiên nhiên bảo vệ tối ưa làm da của bạn. Sửa rửa mặt thiên nhiên cao cấp nhà d'queen chứa thành phần thiên nhiên bảo vệ tối ưa làm da của bạn.",
        impressive: [
          'Dưỡng ẩm',
          'Thải độc làn da',
          'Thông thoáng',
          'Vitamin b2',
          'Ngăn lão hóa',
          'Sinh Collagen'
        ],
        ingredient: ['Rể cây ô rô', 'Cam thảo'],
        uses: [
          'Giúp da trắng sáng, căng bóng và mịn màng',
          'Tăng cường độ ẩm cho da',
          'Nuôi dưỡng da khoẻ mạnh',
          'Ngăn ngừa lão hoá',
          'Phục hồi da, mờ nếp nhăng'
        ],

        saleTime: null,
        youtube: {
          title: 'Bạn sẽ thấy khác biệt sau 3 ngày sử dụng',
          src: 'https://www.youtube.com/embed/hGu_K8YGBD8',
          seo: "D'Queen Akari Phan"
        },
        slug: 'sua-rua-mat-duoc-lieu-thien-nhien-moi-noi-1'
      },
      {
        images: [
          {
            src: 'https://firebasestorage.googleapis.com/v0/b/dqueen-dev.appspot.com/o/sua-rua-mat-duoc-lieu-thien-nhien-moi-noi-1%2F2cd8b126-b134-4778-bb62-1a4fb79781d5-91517229.jpg?alt=media',
            alt: 'Top Sữa rửa mặt đáng tiền mua nhất 2021',
            _id: '62c8591486f1165f5b4741de'
          },
          {
            src: 'https://firebasestorage.googleapis.com/v0/b/dqueen-dev.appspot.com/o/sua-rua-mat-duoc-lieu-thien-nhien-moi-noi-1%2F55548804-1c65-4448-b463-eb76b4b5cda2-avatar.jpg?alt=media',
            alt: 'Top Sữa rửa mặt đáng tiền mua nhất 2022',
            _id: '62c8591486f1165f5b4741df'
          }
        ],

        _id: '62c8591386f1165f5b4741dc',
        name: 'Sữa rửa mặt dược liệu thiên nhiên mới nổi 1',
        amount: 15,
        category: 'Sữa rửa mặt',
        price: 499000,
        sale: 450000,
        lastest: false,

        description:
          "Sửa rửa mặt thiên nhiên cao cấp nhà d'queen chứa thành phần thiên nhiên bảo vệ tối ưa làm da của bạn. Sửa rửa mặt thiên nhiên cao cấp nhà d'queen chứa thành phần thiên nhiên bảo vệ tối ưa làm da của bạn.",
        impressive: [
          'Dưỡng ẩm',
          'Thải độc làn da',
          'Thông thoáng',
          'Vitamin b2',
          'Ngăn lão hóa',
          'Sinh Collagen'
        ],
        ingredient: ['Rể cây ô rô', 'Cam thảo'],
        uses: [
          'Giúp da trắng sáng, căng bóng và mịn màng',
          'Tăng cường độ ẩm cho da',
          'Nuôi dưỡng da khoẻ mạnh',
          'Ngăn ngừa lão hoá',
          'Phục hồi da, mờ nếp nhăng'
        ],

        saleTime: null,
        youtube: {
          title: 'Bạn sẽ thấy khác biệt sau 3 ngày sử dụng',
          src: 'https://www.youtube.com/embed/hGu_K8YGBD8',
          seo: "D'Queen Akari Phan"
        },
        slug: 'sua-rua-mat-duoc-lieu-thien-nhien-moi-noi-1'
      }
    ],
    typeRequest: 'post',
    post: {
      asyncActionForm: [
        {
          bodyAPI: {
            name: { type: 'text', name: 'Tên Sản Phẩm' },
            images: 'image',
            category: 'text',
            price: 'text',
            sale: 'text',
            lastest: {
              type: 'select',
              render: () => {
                return [
                  { value: true, label: 'Đặt vào nhóm Event' },
                  { value: false, label: 'Không Event' }
                ].map(({ value, label }, index) => (
                  <option key={index} value={value}>
                    {label}
                  </option>
                ));
              }
            }
          },
          action: null
        }
      ]
    },
    fetchSubAction: [],
    fetchMainAction: null
  });
  return (
    <section id="products-manager">
      <Table {...props()} />
    </section>
  );
}
