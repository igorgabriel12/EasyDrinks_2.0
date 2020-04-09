import { Platform } from 'react-native';

export default {
  padding: 18,
  ...Platform.select({
    ios: { headerHeight: 62, headerPadding: 0 },
    android: { headerHeight: 62, headerPadding: 0 },
  }), 
  tabBarHeight: 50, 
};
