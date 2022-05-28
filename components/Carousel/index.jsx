import React, { useEffect, useRef, useState } from 'react';

import { GrPrevious, GrNext } from 'react-icons/gr';

// props {show: number,
//   data : { src: string, alt: string, classeNameChild: string,text?: any}
// }
export default function Carousel({
  length = 1,
  show,
  children,
  infinityTime = null
}) {
  const carousel = useRef();

  const [scroll, setScroll] = useState(0);
  const [oRing, setoRing] = useState(0);

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

  // const autoRight = () => {
  //   let clientWidth = carousel.current.clientWidth;
  //   const widthItem = clientWidth / show;
  //   let maxWithScroll = length * (1 - show / length) * widthItem;

  //   if (maxWithScroll <= carousel.current.scrollLeft) {
  //     setScroll(0);
  //     setoRing(0);
  //   } else {
  //     setScroll(carousel.current.scrollLeft + widthItem);

  //     setoRing(carousel.current.scrollLeft / widthItem + 1);
  //   }
  // };

  useEffect(() => {
    carousel.current.scrollLeft = scroll;
  }, [scroll]);
  useEffect(() => {
    if (isNaN(infinityTime)) return;
    let play = setInterval(() => {
      navigationItem('right');
    }, infinityTime);
    return () => {
      clearInterval(play);
    };
  });

  const navigationItem = (type) => {
    let clientWidth = carousel.current.clientWidth;
    const widthItem = clientWidth / show;
    let maxWithScroll = length * (1 - show / length) * widthItem;
    if (type == 'left') {
      if (scroll <= 0) {
        setScroll(maxWithScroll);
        setoRing(length - show);
      } else {
        setScroll(scroll - widthItem);

        setoRing(oRing > length - show + 1 ? 0 : oRing - 1);
      }
    }
    if (type === 'right') {
      if (maxWithScroll <= scroll) {
        setScroll(0);
        setoRing(0);
      } else {
        setScroll(scroll + widthItem);

        setoRing(oRing < 0 ? 0 : oRing + 1);
      }
    }
    if (!isNaN(type)) {
      setoRing(type);
      setScroll(type * widthItem);
    }
  };
  // useEffect(() => {
  //   setInterval(() => {
  //     navigationItem('right');
  //   }, 5000);
  // });
  const findByKey = (name) => {
    if (!Array.isArray(children)) return children;
    children.map((child) => {
      if (child.key === name) {
        return child;
      }
      return null;
    });
  };

  const navigation = (length) => {
    const result = [];
    for (let i = 0; i < length - show + 1; i++) {
      result.push(i);
    }
    const active = (item) => {
      if (oRing === item) {
        return ' active';
      }
    };
    return result.map((item) => {
      return (
        <li
          key={item}
          className={`navigation-item  ${active(item)}`}
          onClick={() => navigationItem(item)}
        ></li>
      );
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
      <ul className="carousel-navigation">{navigation(length)}</ul>
    </div>
  );
}
