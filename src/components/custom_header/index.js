import React from 'react';
import {View, Text} from 'react-native';

import styles from './styles';

import {Icon} from '..';
import TouchableScale from 'react-native-touchable-scale';

export const CustomHeader = (props) => {
  const {label} = props;

  return (
    <View style={{justifyContent: 'flex-start'}}>
      <View
        style={{
          backgroundColor: 'transparent',
          flexDirection: 'row',
          alignItems: 'center',
          paddingHorizontal: 15,
          paddingTop: 10,
        }}>
        <TouchableScale
          onPress={() => props.navigation.pop()}
          style={styles.buttonBack}
          activeScale={0.98}>
          <Icon name="left-arrow" size={15} style={{color: '#FFF'}} />
        </TouchableScale>
        <View style={styles.containerText}>
          <Text numberOfLines={1} style={styles.textLabel}>
            {label}
          </Text>
        </View>
      </View>
    </View>
  );
};
