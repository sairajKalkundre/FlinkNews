/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

 import React, { useEffect, useState } from 'react';
 import {
   StyleSheet,
   View,
   Text,
   Image,TouchableOpacity
 } from 'react-native';
 import WebView from 'react-native-webview';
 //import all the components we are going to use.
 import axios from 'react-native-axios';
 import bbcNews from '../../assets/images/bbcNews.png';
 import * as theme from '../../styles/theme';
 import { CustomFlatList} from '../../components/FlatList';
 import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParams } from "../../screens/routeParams";

interface Topstoriesprops {
  navigation :  StackNavigationProp<RootStackParams ,  'Topstories'>;
}


 export function TopStories(props:Topstoriesprops) : React.ReactElement{
   const [data , setData] = useState([{title : 'At an Afghanistan border crossing, people face uncertainty and a long wait' }, 
                                                         {title : 'India Ravi Ashwin omission "may be an issue with personalities and clashes"'}]);

    function navigate(){
        props.navigation.navigate('Specificstory');
        console.log('TRansition');
    }

   return (
     <View style = {{flex : 1 ,alignItems : 'center',backgroundColor :  theme.flatListBgColor}}>
       <Image source = {bbcNews} style = {styles.imageStyle}/>
       <CustomFlatList data = {data} onPress = {navigate}/>

     </View>
   );
 };
 
 const styles = StyleSheet.create({
     imageStyle : {
       height : 100 , 
       width : 100,
       marginTop : 10
     }
 });
 

 