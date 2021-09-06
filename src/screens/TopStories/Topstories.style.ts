import { StyleSheet, ViewStyle ,  ImageStyle} from "react-native";
import * as theme from '../../styles/theme';

interface Style {
    container : ViewStyle,
    imageStyle : ImageStyle
}

export default StyleSheet.create<Style>({
    container : {
        flex : 1 ,
        alignItems : 'center',
        backgroundColor :  theme.colors.black
    },
    imageStyle  : {
        height : 100 , 
        width : 100,
        marginTop : 10
    }
});