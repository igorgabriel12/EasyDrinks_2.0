import {StyleSheet, Dimensions} from 'react-native';

import {colors, metrics, fonts} from '../../styles';

export default StyleSheet.create({
  containerCard: {
    elevation: 5,
    minHeight: 120,
    marginBottom: 15,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    width: Dimensions.get('window').width * 0.4,
  },

  containerIcon: {
    width: 70,
    height: 70,
    borderRadius: 35,
    alignItems: 'center',
    backgroundColor: '#FFF',
    justifyContent: 'center',
  },

  textLabel: {
    fontWeight: '500',
    color: colors.white,
    fontSize: fonts.regular,
  },
});
