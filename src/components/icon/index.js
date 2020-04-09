import React from 'react';
import {View} from 'react-native';
import IconCustom from '../../styles/icons.js';
import {Icon as IconNative} from 'native-base';

export const Icon = (props) => {
  const {type = 'Custom'} = props;

  if (type !== 'Custom') {
    return (
      <IconNative name={props.name} size={props.size} style={props.style} />
    );
  }

  return <IconCustom name={props.name} size={props.size} style={props.style} />;
};
