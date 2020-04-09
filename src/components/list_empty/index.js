import React from 'react';
import {View, Text, Image} from 'react-native';

import styles from './styles';

import {colors} from '../../styles';

export const ListEmpty = (props) => {
  const {loading} = props;

  if (loading) {
    return <View />;
  } else {
    return (
      <View style={styles.container}>
        <View style={styles.containerImage}>
          <Image
            source={require('../../assets/images/cocktail_none.png')}
            style={styles.image}
          />
        </View>
        <Text style={styles.textHeader}>Nothing around here!</Text>
        <Text style={styles.textMensage}>No drinks found.</Text>
      </View>
    );
  }
};
