import React from 'react';
import { useDispatch } from 'react-redux';
import { ACTIONS } from '../../../components/reducer/actions';
import Categories from './Categories';
import Envents from './Envents';

export default function Home() {
  const dispatch = useDispatch();

  return <div id="home">Content</div>;
}
