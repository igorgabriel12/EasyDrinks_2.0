import {StyleSheet} from 'react-native';

import {colors, metrics, fonts} from '../../styles';

export default StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },

  containerImage: {
    width: 140,
    height: 140,
    marginBottom: 10,
    borderRadius: 70,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#eee',
  },

  image: {
    width: 90,
    height: 90,
  },

  textHeader: {
    fontSize: 20,
    fontWeight: '500',
    fontFamily: fonts.regular_text,
  },

  textMensage: {
    fontSize: fonts.default,
    color: '#555',
    fontFamily: fonts.regular_text,
    textAlign: 'center',
  },
});
