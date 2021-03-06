import React from "react";
import { FlatList,StyleSheet,Text,TouchableOpacity,View } from "react-native";
import * as theme from './../../styles/theme';
import { StackNavigationProp } from "@react-navigation/stack";

interface FlatListProps {
    data : Array<Object>,
    navigate :  any;
}

const styles = StyleSheet.create({
    textStyle : {
        ...theme.typography.type300 , 
        color : theme.colors.white,
    }
});

export function CustomFlatList(props : FlatListProps) : React.ReactElement{
    const {data ,navigate} = props
    const flatListItem  = ({item}) => (
        <View style = {{padding : 10}}>
            <TouchableOpacity onPress = {() => navigate.navigate("Specificstory" , {
                url : item.url,
                title : item.title
            })}>
                <Text style = {styles.textStyle}><Text >{'\u2022' + ' '}  </Text>{item.title}</Text>
             </TouchableOpacity>
        </View>
    ) 
    
    return(
        
        <FlatList
            data = {data}
            renderItem = {flatListItem}
            maxToRenderPerBatch = {10}
        />
        
    )
}