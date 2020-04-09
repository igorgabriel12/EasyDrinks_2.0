import React from 'react';
import {StatusBar} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';
import {colors, fonts, styles} from '../../styles';

export const GradientContainer = (props) => (
  <LinearGradient
    colors={['#FFab48', '#FFbe57', '#FFc25b']}
    style={[props.style == undefined ? {flex: 1} : props.style]}
    start={{x: 0, y: 0.5}}
    end={{x: 0, y: 1}}>
    <StatusBar backgroundColor={colors.primary} />
    {props.children}
  </LinearGradient>
);
