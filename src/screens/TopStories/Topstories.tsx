/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

 import { StackNavigationProp } from "@react-navigation/stack";
import React, { useState } from 'react';
import {
  Image, StyleSheet
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import bbcNews from '../../assets/images/bbcNews.png';
import { CustomFlatList } from '../../components/FlatList';
import { Header } from '../../components/Header';
import { RootStackParams } from "../../screens/routeParams";
import styles from './Topstories.style';
import * as theme from '../../styles/theme';

interface Topstoriesprops {
  navigation :  StackNavigationProp<RootStackParams ,  'Topstories'>;
}

 export function TopStories(props:Topstoriesprops) : React.ReactElement{
   const [data , setData] = useState([{title : 'At an Afghanistan border crossing, people face uncertainty and a long wait' }, 
                                                         {title : 'India Ravi Ashwin omission "may be an issue with personalities and clashes"'}]);

    function navigate(){
        props.navigation.navigate('Specificstory');
    }

   return (
     <SafeAreaView style = {styles.container}>
       <Header title = 'Top stories'  backButtonVisible = {false}/>
       <Image source = {bbcNews} style = {styles.imageStyle}/>
       <CustomFlatList data = {data} onPress = {navigate}/>
     </SafeAreaView>
   );
 };
 

 