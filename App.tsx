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
  TouchableOpacity,
  Image,
  FlatList
} from 'react-native';
import WebView from 'react-native-webview';
//import all the components we are going to use.
import axios from 'react-native-axios';
import bbcNews from './src/assets/images/bbcNews.png';
import * as theme from './src/styles/theme';
import { CustomFlatList
 } from './src/components/FlatList';
const flatListItem  = ({item}) => (
    <Text style = {{color : theme.colors.white}}>{item.title}</Text>
) 

const App = () => {
  const [data , setData] = useState([{title : 'Hi' }, {title : 'Hello'}]);
  // useEffect(() => {
  //   let url = 'https://hacker-news.firebaseio.com/v0/topstories.json';
  //      axios.get(url)
  //      .then(function (response) {
  //        setData(response);
  //        console.log('Response' , response.data);
  //      })
  //      .catch(function (error) {
  //        console.log('Error' , error);
  //      });
  // });



  return (
    <View style = {{flex : 1 ,alignItems : 'center',backgroundColor :  theme.flatListBgColor}}>
      <Image source = {bbcNews} style = {{height : 100 , width : 100}}/>
      <CustomFlatList data = {data}/>
    </View>
  );
};

const styles = StyleSheet.create({

});

export default App;
