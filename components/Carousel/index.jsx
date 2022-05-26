import React, { useEffect, useRef, useState } from 'react';

import { GrPrevious, GrNext } from 'react-icons/gr';

// props {show: number,
//   data : { src: string, alt: string, classeNameChild: string,text?: any}
// }
export default function Carousel({ length = 1, show, children }) {
  const carousel = useRef();

  const [scroll, setScroll] = useState(0);

  // const breakPoint = () => {
  //   let clientWidth = carousel.current.clientWidth;
  //   if (clientWidth >= 500 && clientWidth < 769) {
  //     return 1;
  //   } else if (clientWidth >= 769 && clientWidth < 992) {
  //     return 2;
  //   } else if (clientWidth >= 992 && clientWidth < 1200) {
  //     return 4;
  //   } else {
  //     return 1;
  //   }
  // };

  useEffect(() => {
    carousel.current.scrollLeft = scroll;
  }, [scroll]);

  const navigationItem = (type) => {
    let clientWidth = carousel.current.clientWidth;
    const widthItem = clientWidth / show;
    let maxWithScroll = length * (1 - show / length) * widthItem;

    // console.log('max', maxWithScroll);
    // console.log('widthItem', widthItem);
    if (type == 'left') {
      if (scroll <= 0) {
        setScroll(maxWithScroll);
      } else {
        setScroll(scroll - widthItem);
      }
    }
    if (type === 'right') {
      if (maxWithScroll <= scroll) {
        setScroll(0);
      } else {
        setScroll(scroll + clientWidth / show);
      }
    }
  };
  const findByKey = (name) => {
    if (!Array.isArray(children)) return children;
    children.map((child) => {
      if (child.key === name) {
        return child;
      }
      return null;
    });
  };
  return (
    <div id="carousel">
      <div
        className="arrow left-arrow"
        onClick={() => navigationItem('left')}
      >
        <GrPrevious className="arrow-detail" />
      </div>
      <div
        className="arrow right-arrow"
        onClick={() => navigationItem('right')}
      >
        <GrNext className="arrow-detail " />
      </div>
      <div className={'style style-' + show} ref={carousel}>
        {findByKey('item')}
      </div>
    </div>
  );
}
