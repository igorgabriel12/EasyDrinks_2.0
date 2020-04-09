import {StyleSheet} from 'react-native';

import {colors, metrics, fonts} from '../../styles';

const styles = StyleSheet.create({
  containerHeaderCategory: {
    paddingTop: 18,
    paddingLeft: 65,
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: '#FFF',
  },

  iconLogo: {
    width: 130,
    height: 130,
  },

  containerTextHeaderCategory: {
    marginLeft: 10,
  },

  textEasy: {
    fontWeight: '500',
    fontSize: fonts.force,
    fontFamily: fonts.semi_bold,
  },

  textDrinks: {
    fontSize: 20,
    fontWeight: '100',
    fontFamily: fonts.regular_text,
  },

  bodyCategory: {
    flex: 1,
    paddingTop: 5,
    flexWrap: 'wrap',
    flexDirection: 'row',
    paddingHorizontal: 30,
    backgroundColor: '#fff',
    justifyContent: 'space-between',
  },

  iconCategory: {
    width: 35,
    height: 35,
  },
});

export default styles;
