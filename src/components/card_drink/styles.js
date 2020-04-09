import {StyleSheet, Dimensions} from 'react-native';

import {colors, metrics, fonts} from '../../styles';

export default StyleSheet.create({
  btn: {
    alignItems: 'center',
    flexDirection: 'column',
    borderRadius: 4,
    paddingVertical: 15,
    marginBottom: 10,
    backgroundColor: colors.primary,
  },

  textBtn: {
    fontSize: fonts.default,
    fontFamily: fonts.regular_text,
    fontWeight: '800',
  },

  // btn primary

  'btn-primary': {
    backgroundColor: colors.primary,
  },

  'btn-text-primary': {
    color: colors.white,
  },

  // btn outline

  'btn-outline': {
    backgroundColor: colors.greyLight,
    borderColor: colors.greyLight,
  },

  'btn-text-primary-outline': {
    color: colors.for,
  },

  'btn-text-big': {
    fontFamily: fonts.regular_text,
    fontSize: fonts.big,
  },

  'btn-text-regular': {
    fontFamily: fonts.regular_text,
    fontSize: fonts.regular,
  },

  containerCardClinicas: {
    minHeight: 120,
    elevation: 5,
    marginBottom: 15,
    borderRadius: 10,
    overflow: 'hidden',
    marginHorizontal: 15,
  },

  bodyCardClinicas: {
    flex: 1,
    flexDirection: 'row',
  },

  leftContainer: {
    justifyContent: 'center',
  },

  contentContainerLeft: {
    width: 80,
    height: 85,
    margin: 15,
    marginRight: 10,
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: '#fff',
  },

  textAbr: {
    fontFamily: fonts.regular_text,
    fontSize: 40,
    color: '#0B62E3',
    fontWeight: 'bold',
    textAlign: 'center',
  },

  containerCenter: {
    flex: 1,
    marginRight: 5,
    paddingVertical: 15,
    justifyContent: 'center',
  },

  textDefault: {
    fontFamily: fonts.regular_text,
    fontSize: fonts.regular,
    color: '#fff',
    textAlign: 'left',
    fontWeight: 'bold',
  },

  containerRight: {
    minHeight: 120,
    justifyContent: 'center',
  },

  semiCirculo: {
    width: 55,
    elevation: 5,
    opacity: 0.15,
    minHeight: 110,
    backgroundColor: '#fff',
    borderTopStartRadius: 60,
    borderBottomStartRadius: 60,
  },

  iconSemiCirculo: {
    color: '#fff',
    rotation: 180,
    marginRight: 15,
  },

  containerIconArrow: {
    top: 0,
    right: 0,
    width: 50,
    bottom: 0,
    position: 'absolute',
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
});
