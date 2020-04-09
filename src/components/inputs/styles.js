import {
    StyleSheet,
    Dimensions,
} from 'react-native';

import {
    colors,
    fonts,
    metrics
} from '../../styles';

const styles = StyleSheet.create({

    contentInput: {

        flexDirection: 'column',
        marginBottom: 20, 
   
    },

    labelInput: {

        fontSize: fonts.regular,
        color: colors.grey,

    },

    sectionInput: {

        flexDirection: 'row',
        alignItems: 'center',
        flex: 1,
        marginTop: 4,
        

    },

    inputView: {

        flex: 1,
        flexDirection: 'column',

    },

    inputDefault: {

        fontSize: fonts.default,
        color: colors.dark,
        paddingLeft: 0,   
        height: 44, 

    },  


    icon: {

        fontSize: 20,
        color: colors.dark, 

    },


    iconView: {

        width: 20,
        height: 20,
        backgroundColor: colors.dark,

    },

    iconInput: {

        width: 20,
        height: 20,
        backgroundColor: colors.dark,

    },

    borderInput: {

        height: 1,
        backgroundColor: colors.greyLight,

    },

    // focused

    textinput_focused: {
        backgroundColor: 'red',
        color: 'white'
    },


    // icons 

    iconDefault: {

        position: 'absolute',

    },


});

export default styles;