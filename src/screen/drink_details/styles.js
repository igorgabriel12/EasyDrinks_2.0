import {StyleSheet, Dimensions} from 'react-native';

import {colors, metrics, fonts} from '../../styles';

const styles = StyleSheet.create({
  bodyWhite: {
    flexShrink: 1,
    paddingTop: 15,
    marginTop: -15,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: '#FeFeFe',
    minHeight: Dimensions.get('window').height - 40,
  },

  headerBody: {
    marginTop: 15,
    marginBottom: 10,
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 10,
  },

  labelText: {
    height: 30,
    borderRadius: 15,
    marginVertical: 5,
    alignItems: 'center',
    paddingHorizontal: 10,
    justifyContent: 'center',
    backgroundColor: '#FFF6ee',
  },
  containerInfos: {
    flexShrink: 1,
    elevation: 1,
    borderRadius: 5,
    paddingVertical: 10,
    marginHorizontal: 15,
    backgroundColor: '#FFF',
  },

  igradienteLine: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 42,
    borderBottomWidth: 0.3,
    borderBottomColor: colors.greyLight,
  },

  headerInfos: {
    marginLeft: 0,
    marginBottom: 10,
    flexDirection: 'row',
  },

  tick: {
    width: 5,
    height: 30,
    backgroundColor: colors.primary,
  },

  bodyInfos: {
    flexShrink: 1,
    marginLeft: 5,
    flexDirection: 'row',
    paddingHorizontal: 20,
  },

  textLabelInfos: {
    fontSize: fonts.default,
    fontFamily: fonts.semi_bold,
  },

  containerLabelInfos: {
    height: 30,
    marginLeft: 20,
    justifyContent: 'center',
  },

  textInfos: {
    color: '#888',
    fontSize: fonts.regular,
    fontFamily: fonts.semi_bold,
  },
});

export default styles;
