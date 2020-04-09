import React from 'react';
import {StatusBar, View, Text} from 'react-native';

import {colors, fonts, styles} from '../../styles';
import {Icon} from '..';

export const Container = (props) => (
  <View style={[props.style ? props.style : {flex: 1}]}>
    <StatusBar backgroundColor={colors.primary} />

    {props.label && (
      <View style={styles.containerTitleLabel}>
        <Icon name={props.icon} size={25} style={{color: props.color}} />
        <Text style={styles.textLabel}>{props.label}</Text>
      </View>
    )}

    {props.children}
  </View>
);
