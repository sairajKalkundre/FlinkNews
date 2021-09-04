import React from "react";
import { FlatList,StyleSheet,Text,View } from "react-native";
import * as theme from './../../styles/theme';

const flatListItem  = ({item}) => (
    <View style = {{padding : 10}}>
         <Text style = {styles.textStyle}>{item.title}</Text>
    </View>
) 

interface FlatListProps {
    data : Array<Object>,
}

const styles = StyleSheet.create({
    textStyle : {
        ...theme.typography.type300 , 
        color : theme.colors.white,
    }
});

export function CustomFlatList(props : FlatListProps) : React.ReactElement{
    const {data } = props
    return(
        <FlatList
            data = {data}
            renderItem = {flatListItem}
        />
    )
}