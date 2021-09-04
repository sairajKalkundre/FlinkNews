import React from "react";
import { FlatList,StyleSheet,Text,TouchableOpacity,View } from "react-native";
import * as theme from './../../styles/theme';
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParams } from "../../screens/routeParams";


interface FlatListProps {
    data : Array<Object>,
    onPress() : void
    // navigation :  StackNavigationProp<RootStackParams ,  'Topstories'>;
}

const styles = StyleSheet.create({
    textStyle : {
        ...theme.typography.type300 , 
        color : theme.colors.white,
    }
});

export function CustomFlatList(props : FlatListProps) : React.ReactElement{
    const {data , onPress} = props

    const flatListItem  = ({item}) => (
        <View style = {{padding : 10}}>
            <TouchableOpacity onPress = {onPress}>
                <Text style = {styles.textStyle}>{item.title}</Text>
             </TouchableOpacity>
        </View>
    ) 
    
    return(
        <FlatList
            data = {data}
            renderItem = {flatListItem}
        />
        
    )
}