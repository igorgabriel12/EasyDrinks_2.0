import React from 'react';
import {View, Text, Image} from 'react-native';

import {Icon} from '..';
import TouchableScale from 'react-native-touchable-scale';
import LinearGradient from 'react-native-linear-gradient';

import stylesCustom from './styles';

export const CardDrink = (props) => {
  const {item} = props;

  return (
    <TouchableScale onPress={props.onPress} activeScale={0.98}>
      <LinearGradient
        colors={['#FFab48', '#FFbe57', '#FFc25b']}
        style={stylesCustom.containerCardClinicas}
        start={{x: 0.5, y: 0}}
        end={{x: 2, y: 0}}>
        <View style={stylesCustom.bodyCardClinicas}>
          <View style={stylesCustom.leftContainer}>
            <View style={stylesCustom.contentContainerLeft}>
              <Image
                style={{flex: 1, height: null, width: null}}
                source={{uri: item.strDrinkThumb}}
              />
            </View>
          </View>
          <View style={[stylesCustom.containerCenter]}>
            <View>
              <Text
                style={[
                  stylesCustom.textDefault,
                  {fontSize: 20, fontWeight: 'bold'},
                ]}>
                {item.strDrink}
              </Text>
            </View>
          </View>
          <View style={stylesCustom.containerRight}>
            <View style={stylesCustom.containerIconArrow}>
              <Icon
                name="left-arrow"
                size={22}
                style={stylesCustom.iconSemiCirculo}
              />
            </View>
            <View style={stylesCustom.semiCirculo} />
          </View>
        </View>
      </LinearGradient>
    </TouchableScale>
  );
};
