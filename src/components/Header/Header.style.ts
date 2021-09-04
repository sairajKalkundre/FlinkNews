import { ViewStyle , TextStyle,StyleSheet,ImageStyle } from "react-native";
import * as theme from '../../styles/theme';

interface Style {
        headerContainer :  ViewStyle,
        textStyle :  TextStyle , 
        backButtonStyle : ImageStyle
}

export default StyleSheet.create<Style>({
    headerContainer  : {
        height : 45 ,
        flexDirection : 'row',
        backgroundColor : 'black' , 
        width : '100%',
        alignItems:'center',
    },
    textStyle : {
        ...theme.typography.headerTypography , 
        color : 'white',
        marginLeft : 10
    },
    backButtonStyle : {
        height : 30, 
        width : 30,
        top : 2,
        alignSelf : 'flex-start'
    }
}) ;