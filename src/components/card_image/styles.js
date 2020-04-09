import { StyleSheet, Dimensions } from 'react-native';

import { colors, metrics, fonts } from '../../styles';


export default StyleSheet.create({
	containerImage: { 
		elevation: 5,
		borderRadius: 10,
		alignItems: 'center',
		justifyContent: 'center',
		// width: Dimensions.get('window').width*0.48,
		width: 100,
		height: parseInt(Math.random() * 20 + 12) * 10,
	},


});




