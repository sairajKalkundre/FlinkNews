import React,{useState} from "react";
import { FlatList,Text } from "react-native";
import * as theme from './../../styles/theme';
const flatListItem  = ({item}) => (
    <Text style = {{color : theme.colors.white}}>{item.title}</Text>
) 

export function CustomFlatList(props) : React.ReactElement{
    const [data , setData] = useState([{title : 'Hi' }, {title : 'Hello'}]);
    return(
        <FlatList
            data = {data}
            renderItem = {flatListItem}
        />
    )
}