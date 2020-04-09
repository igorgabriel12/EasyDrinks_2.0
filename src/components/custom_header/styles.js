import { StyleSheet, Dimensions } from 'react-native';

import { colors, metrics, fonts } from '../../styles';

const style = StyleSheet.create({
  buttonBack: {
    width: 40, 
    height: 40, 
    borderRadius: 5, 
    alignItems: 'center', 
    justifyContent: 'center',
    backgroundColor: colors.orangeLight, 
  },

  containerText: {
    height: 30, 
    marginLeft: 10, 
    maxWidth: '80%', 
    borderRadius: 5, 
  },

  textLabel: {
    color: colors.white, 
    fontSize: fonts.big, 
    fontFamily: fonts.bold,
  },

});

export default style;
