import React from 'react';
import {Text, View, ActivityIndicator} from 'react-native';
import TouchableScale from 'react-native-touchable-scale';
import {colors} from '../../styles';

export const Button = (props) => {
  const {label} = props;
  return (
    <TouchableScale
      style={{
        height: 45,
        borderRadius: 3,
        backgroundColor: colors.secondary,
        alignItems: 'center',
        justifyContent: 'center',
      }}
      onPress={props.onPress}
      activeScale={0.95}>
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        {!props.loading && (
          <Text style={{color: colors.primaryText}}>{label}</Text>
        )}
        {props.loading && (
          <ActivityIndicator size="small" color={colors.primary} />
        )}
      </View>
    </TouchableScale>
  );
};
