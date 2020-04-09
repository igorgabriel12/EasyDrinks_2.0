import {StyleSheet} from 'react-native';

import {colors, metrics, fonts} from '../../styles';

const style = StyleSheet.create({
  containerHeader: {
    height: 120,
    paddingHorizontal: 15,
    paddingTop: 10,
  },

  buttonBack: {
    width: 40,
    height: 40,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.orangeLight,
  },

  textTitleScreen: {
    fontWeight: '500',
    color: colors.white,
    fontSize: fonts.bigger,
  },

  searchArea: {
    height: 45,
    marginTop: 10,
    borderRadius: 5,
    paddingLeft: 10,
    backgroundColor: colors.white,
  },

  bodyWhite: {
    flex: 1,
    paddingTop: 15,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: colors.white,
  },

  containerFastFilter: {
    marginBottom: 15,
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 30,
    justifyContent: 'space-between',
  },

  buttonFastFilter: {
    height: 30,
    borderRadius: 15,
    marginVertical: 5,
    alignItems: 'center',
    paddingHorizontal: 10,
    justifyContent: 'center',
  },

  filterButton: {
    zIndex: 5,
    right: 20,
    width: 65,
    height: 65,
    bottom: 20,
    elevation: 5,
    borderRadius: 32.5,
    alignItems: 'center',
    position: 'absolute',
    justifyContent: 'center',
    backgroundColor: colors.white,
  },

  iconFilter: {
    width: 26,
    height: 26,
  },
});

export default style;
