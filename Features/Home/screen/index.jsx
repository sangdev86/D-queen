import React from 'react';
import { useDispatch } from 'react-redux';

import Event from './Event';
import Introduce from './Introduce';

export default function Home() {
  const dispatch = useDispatch();

  return (
    <div id="home">
      <Event />
      <Introduce />
    </div>
  );
}
