import React from 'react';
import {Text, View} from 'react-native';

import {colors} from '../../styles';
import stylesDefault from './styles';

import TouchableScale from 'react-native-touchable-scale';
import LinearGradient from 'react-native-linear-gradient';

export const ChooseCategoryButton = (props) => {
  const {label = '', icon = <View />} = props;

  return (
    <TouchableScale onPress={props.onPress} activeScale={0.98}>
      <LinearGradient
        colors={colors.vetColorsGradiente}
        style={stylesDefault.containerCard}
        start={{x: 0, y: 0.6}}
        end={{x: 0, y: 1}}>
        <View style={stylesDefault.containerIcon}>{icon}</View>

        <View style={{marginTop: 15}}>
          <Text style={stylesDefault.textLabel}>{label}</Text>
        </View>
      </LinearGradient>
    </TouchableScale>
  );
};
