import { StyleSheet, Dimensions } from 'react-native';

import { colors, fonts, metrics } from '.';

const styles = StyleSheet.create({
    content: {

        backgroundColor: colors.white,
        padding: metrics.padding,

    },
    dsadas:{

    },

    section: {

        backgroundColor: colors.white,
        paddingHorizontal: metrics.padding,

    },

    defaultLine: {
      flexDirection: 'row', 
      alignItems: 'center',
    },

    textRecovery: {

        color: colors.primaryText,
        textDecorationColor: colors.primaryText,
        textDecorationLine: 'underline',
        textDecorationStyle: 'solid'

    },

    viewRecovery: {

        alignItems: 'center',
        flexDirection: 'column',
        marginTop: 20

    },

    meedNameLogin: {

        fontFamily: 'moderna',
        color: colors.white,
        fontSize: 22,
        marginTop: 10,  

    },

    titleForm: {

      fontWeight:'800',
      marginBottom: 20,
      color: colors.dark,
      fontSize: fonts.bigger,

    },

    contentSwitch: {

      padding: 12,
      marginTop: 14,
      borderRadius: 4,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      backgroundColor: colors.greyLight,

    },

    containerTitleLabel: {
        height:  55, 
        marginTop: 10,  
        alignItems: 'center', 
        flexDirection: 'row', 
        paddingHorizontal: 15, 
    },

    textLabel: {
        marginLeft: 10, 
        fontSize: fonts.bigger, 
        fontFamily: fonts.semi_bold,
    },


    containerLogin: {
        flex: 1,
        backgroundColor: colors.primary, 
    },


    containerTextInput: {
        height: 50, 
        alignItems: 'center', 
        flexDirection: 'row',
        marginHorizontal: 30,
        marginVertical: 10,
        borderBottomWidth: StyleSheet.hairlineWidth, 
    },

    textInputStyle: {
        flex: 1,
        marginLeft: 40, 
        textAlign: 'center', 
        color: colors.primary, 
    },

    buttonSearch: {
        width: 40, 
        height: 40, 
        borderRadius: 4, 
        alignItems: 'center', 
        justifyContent: 'center', 
        backgroundColor: colors.primary,
    },

    textError: {
        color: colors.primary, 
        textAlign: 'center',
    },
   
});

export default styles;
