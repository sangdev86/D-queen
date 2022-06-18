import React, { useState } from 'react';

export default function SaleTime({ miliSeconds }) {
  const [hours, setHours] = useState('00:');
  const [minutes, setMinutes] = useState('00:');
  const [seconds, setSeconds] = useState('00');

  const d = new Date();

  const checkTime = (time) => {
    if (time <= 0) {
      return '00';
    } else if (time < 10) {
      return '0' + time;
    } else {
      return time;
    }
  };
  React.useEffect(() => {
    let play = setInterval(() => {
      const now = d.getTime();
      const timeSeconds = (miliSeconds - now) / 1000;
      if (timeSeconds <= 0) {
      } else {
        const h = Math.floor(timeSeconds / 3600);
        const m = Math.floor((timeSeconds % 3600) / 60);
        const s = Math.floor((timeSeconds % 3600) % 60);
        setHours(checkTime(h));
        setMinutes(checkTime(m));
        setSeconds(checkTime(s));
      }
    }, 1000);
    return () => {
      clearInterval(play);
    };
  });

  return (
    <div id="sale-time">
      <span>{hours}</span>
      <span>{minutes}</span>
      <span>{seconds}</span>
    </div>
  );
}
