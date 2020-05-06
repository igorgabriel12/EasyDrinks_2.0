import React from 'react';
import { useSelector } from 'react-redux';
import { Root } from 'native-base';
import createRouter from './Routes';

export default () => {
  // console.disableYellowBox = true;
  const filters = useSelector((state) => state.filters);
  console.log({ filters });
  return createRouter(filters);
};
