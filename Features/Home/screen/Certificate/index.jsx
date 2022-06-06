import React from 'react';

export default function Certifcate() {
  const data = [
    {
      title: "Mỹ Phẩm D'Queen - sản xuất từ nguyên liệu thiên nhiên",
      text: "Giấy kiểm định - Sửa rửa mặt sáng mịn da giữ ẩm D'Queen",
      src: './image/certificate/1.png'
    },
    {
      title:
        "Mỹ Phẩm D'Queen - Dược lành tính đảm bảo an toàn, chất lượng đã được kiểm định",
      text: "Giấy kiểm định Kem - Kem dưỡng trắng da ngăn ngừa lão hóa D'Queen",
      src: './image/certificate/2.png'
    },
    {
      title:
        "Mỹ Phẩm D'Queen - Làn da mịn màng căng bóng dưỡng ẩm, se khít lỗ chân lông",
      text: "Giấy kiểm định - Serum cấp ẩm căng bóng da D'Queen",
      src: './image/certificate/3.png'
    },
    {
      title:
        "Mỹ Phẩm D'Queen - Làn da khỏe mạnh, làm chậm lão hóa tối đa",
      text: "Giấy kiểm định - Kem dưỡng da cao cấp D'Queen",
      src: './image/certificate/4.png'
    },
    {
      title:
        "Mỹ Phẩm D'Queen - Dễ dàng sử dụng, mang lại hiểu quả cao, tiết kiệm thời gian và chi phí ",
      text: "Giấy kiểm định - Dược bảo vệ da chống nắng D'Queen",
      src: './image/certificate/5.png'
    },
    {
      title:
        "Mỹ Phẩm D'Queen - Phù hợp cả nam và nữ, hương thơm nhẹ mang lại cảm giác dễ chịu",
      text: "Giấy kiểm định - Dung dịch vệ sinh nam & nữ D'Queen",
      src: './image/certificate/6.png'
    }
  ];
  return (
    <div id="certificate">
      <div className="container">
        <div className="certificate-wrapper">
          <img src="./image/certificate/1.png" />
        </div>
      </div>
    </div>
  );
}
