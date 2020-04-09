import React from 'react';
import {Text} from 'react-native';

import TouchableScale from 'react-native-touchable-scale';

export const ButtonFilterFast = (props) => {
  const {label = '', checked = false, colorNoChecked = '#FFF'} = props;

  return (
    <TouchableScale
      onPress={props.onPress}
      activeScale={0.99}
      style={[
        props.style ? props.style : {},
        {backgroundColor: checked ? '#FFF6ee' : colorNoChecked},
      ]}>
      <Text style={{color: checked ? '#e5b686' : '#a6a4a2'}}>{label}</Text>
    </TouchableScale>
  );
};
