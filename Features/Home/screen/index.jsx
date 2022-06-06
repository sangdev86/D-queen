import React from 'react';
import { useDispatch } from 'react-redux';
import Banner from '../../../components/Banner';
import Certifcate from './Certificate';
import Chanels from './Chanels';
import Customers from './Customers';
import Event from './Event';
import FeedBack from './FeedBack';
import Founder from './Founder';
import Introduce from './Introduce';
import LatestProduct from './LatestProduct';
import ListProduct from './ListProduct';

export default function Home() {
  const dispatch = useDispatch();

  return (
    <div id="home">
      <Banner />
      <Event />
      <Introduce />
      <Founder />
      <FeedBack />
      <LatestProduct />
      <Customers />
      <ListProduct />
      <Certifcate />
      <Chanels />
    </div>
  );
}
