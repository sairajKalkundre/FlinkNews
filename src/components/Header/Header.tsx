import React from "react";
import { View,Text, TouchableOpacity, Image } from "react-native";
import pervious from '../../assets/Icons/previous.png'
import styles from './Header.style'
type onPress = () => void;

interface HeaderProps {
    title : string,
    onPress ?:  onPress,
    backButtonVisible : boolean
};


export function Header(props : HeaderProps):React.ReactElement{
    return(
        <View style = {styles.headerContainer}> 
                {props.backButtonVisible ? 
                            <TouchableOpacity onPress = {props.onPress}>
                            <Image source = {pervious} style = {styles.backButtonStyle}/>
                        </TouchableOpacity>
                        :  null}
                <Text style = {styles.textStyle} numberOfLines = {1}>{props.title}</Text>
        </View>
    )
}