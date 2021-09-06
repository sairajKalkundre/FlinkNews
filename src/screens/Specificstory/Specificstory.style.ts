import { ImageStyle , ViewStyle,StyleSheet, ActivityIndicatorProps} from "react-native";
import * as theme from '../../styles/theme';

interface Style {
    container : ViewStyle;
    imageStyle : ImageStyle,
    activityIndicatorStyle :  ActivityIndicatorProps
}

export default StyleSheet.create<Style>({
    container : {
        flex : 1, 
        backgroundColor : theme.colors.black
    },
    imageStyle : {
        height : 100 , 
        width : 100,
        marginTop : 10
    },
    activityIndicatorStyle : {
            position: 'absolute',
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                height: '100%',
                width: '100%',
                backgroundColor: theme.colors.grey
    }
})
