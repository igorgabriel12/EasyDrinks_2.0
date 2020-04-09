import {StyleSheet} from 'react-native';

import {colors, metrics, fonts} from '../../styles';

export default StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },

  containerBlack: {
    flex: 1,
    backgroundColor: 'rgba(10, 10, 10, 0.5)',
    justifyContent: 'center',
  },

  containerWhite: {
    minHeight: 400,
    backgroundColor: '#fff',
    borderRadius: 15,
    marginHorizontal: 30,
    overflow: 'hidden',
  },

  containerHeaderModal: {
    height: 50,
    alignItems: 'center',
    flexDirection: 'row',
    marginHorizontal: 15,
    justifyContent: 'space-between',
  },

  buttonClearFilter: {
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
  },

  buttonFastFilter: {
    height: 30,
    marginLeft: 10,
    marginBottom: 10,
    borderRadius: 15,
    alignItems: 'center',
    paddingHorizontal: 10,
    justifyContent: 'center',
  },

  containerListOfGlass: {
    flexWrap: 'wrap',
    flexDirection: 'row',
  },

  headerInfos: {
    marginLeft: 15,
    marginBottom: 10,
    alignItems: 'center',
    flexDirection: 'row',
  },

  containerListOfIgradients: {
    flexWrap: 'wrap',
    marginBottom: 10,
    flexDirection: 'row',
  },

  tick: {
    width: 5,
    height: 30,
    borderRadius: 2.5,
    backgroundColor: colors.primary,
  },

  bodyInfos: {
    marginLeft: 5,
    flexDirection: 'row',
    paddingHorizontal: 20,
  },

  containerLabelInfos: {
    height: 40,
    marginLeft: 10,

    flexDirection: 'row',
    alignItems: 'center',
    // justifyContent: 'center',
  },

  textLabelInfos: {
    fontSize: fonts.default,
    fontFamily: fonts.semi_bold,
  },

  searchIgradiente: {
    flex: 1,
    padding: 0,
    color: '#888',
    minWidth: 120,
    color: '#a6a4a2',
    marginLeft: 8,
    fontSize: fonts.default,
    fontFamily: fonts.regular_text,
  },

  textClearFilter: {
    color: '#a6a4a2',
    fontSize: fonts.regular,
    fontFamily: fonts.regular_text,
  },

  footerModal: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 50,
  },

  btnCancel: {
    flex: 1,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },

  textCancel: {
    color: '#e5b686',
    fontSize: fonts.big,
    fontFamily: fonts.semi_bold,
    fontWeight: '500',
  },

  btnApplyFiter: {
    flex: 1,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFF6ee',
  },

  textApplyFilter: {
    color: '#e5b686',
    fontSize: fonts.big,
    fontFamily: fonts.semi_bold,
  },

  containerLoading: {
    height: 30,
    width: 300,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
