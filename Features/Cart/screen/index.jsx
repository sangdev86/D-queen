import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Bill from './Bill';
import ListCart from './ListCart';

export default function Cart() {
  const bill = useSelector((state) => state.cart.bill);

  return (
    <div id="cart">{bill !== null ? <Bill /> : <ListCart />}</div>
  );
}
