import React from 'react';
import {Text, View, Image, Dimensions} from 'react-native';

import {colors} from '../../styles';
import stylesDefault from './styles';

import TouchableScale from 'react-native-touchable-scale';

export const CardImage = (props) => {
  const {item = {}} = props;

  return (
    <View
      style={{
        elevation: 5,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        width: Dimensions.get('window').width * 0.48,
        height: parseInt(Math.random() * 20 + 12) * 10,
      }}
    />
  );
};
