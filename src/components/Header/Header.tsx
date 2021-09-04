import React from "react";
import { View,Text } from "react-native";
import * as theme from '../../styles/theme';

interface HeaderProps {
    title : string,
    onPress ?:  void 
};

export function Header(props : HeaderProps):React.ReactElement{
    return(
        <View style = {{height : 40 ,backgroundColor : 'black' , width : '100%',alignItems:'center',justifyContent : 'center'}}> 
                <Text style = {{...theme.typography.headerTypography , color : 'white' }}>{props.title}</Text>
        </View>
    )
}