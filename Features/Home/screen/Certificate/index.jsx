import React, { Fragment } from 'react';
import { useDispatch } from 'react-redux';
import Carousel from '../../../../components/Carousel';
import { ACTIONS } from '../../../../components/reducer/actions';

export default function Certifcate() {
  const [image, setImage] = React.useState(-1);
  const dispatch = useDispatch();
  const itemModal = (src) => (
    <img
      src={src}
      style={{
        height: '90vh',
        width: '100%',
        objectFit: 'contain',
        cursor: 'default'
      }}
    />
  );
  const data = [
    {
      title: "D'Queen - sản xuất từ nguyên liệu thiên nhiên",
      text: "Giấy kiểm định - Sửa rửa mặt sáng mịn da giữ ẩm D'Queen",
      src: './image/certificate/1.png'
    },
    {
      title:
        "D'Queen - Dược lành tính đảm bảo an toàn, chất lượng đã được kiểm định",
      text: "Giấy kiểm định - Kem dưỡng trắng da ngăn ngừa lão hóa D'Queen",
      src: './image/certificate/2.png'
    },
    {
      title:
        "D'Queen - Làn da mịn màng căng bóng dưỡng ẩm, se khít lỗ chân lông",
      text: "Giấy kiểm định - Serum cấp ẩm căng bóng da D'Queen",
      src: './image/certificate/3.png'
    },
    {
      title: "D'Queen - Làn da khỏe mạnh, làm chậm lão hóa tối đa",
      text: "Giấy kiểm định - Kem dưỡng da cao cấp D'Queen",
      src: './image/certificate/4.png'
    },
    {
      title:
        "D'Queen - Dễ dàng sử dụng, mang lại hiệu quả cao, tiết kiệm thời gian và chi phí ",
      text: "Giấy kiểm định - Dược bảo vệ da chống nắng D'Queen",
      src: './image/certificate/5.png'
    },
    {
      title:
        "D'Queen - Phù hợp cả nam và nữ, hương thơm nhẹ mang lại cảm giác dễ chịu",
      text: "Giấy kiểm định - Dung dịch vệ sinh nam & nữ D'Queen",
      src: './image/certificate/6.png'
    }
  ];
  const handleChange = (index) => {
    if (index === image) {
      setImage(-1);
    } else {
      setImage(index);
    }
  };
  return (
    <div id="certificate">
      <div className="container">
        <div className="certificate-wrapper">
          <Carousel show={1} length={data.length} infinityTime={4000}>
            <Fragment>
              {data.map((item, index) => {
                const { title, src, text } = item;
                return (
                  <div className="wrapper-carousel-item" key={index}>
                    <h3>&quot;{title}&quot;</h3>
                    <p>{text}</p>
                    <div className="button-wrapper">
                      <span
                        className="button-primary"
                        onClick={() =>
                          dispatch(
                            ACTIONS.modal(true, itemModal(src))
                          )
                        }
                      >
                        Xem
                      </span>
                    </div>
                  </div>
                );
              })}
            </Fragment>
          </Carousel>
        </div>
      </div>
    </div>
  );
}
