import React, { useEffect, useState,useRef } from 'react';
 import {
   StyleSheet,
   View,
   ActivityIndicator,
   Text,
   Image,
   Pressable,
 } from 'react-native';
 import WebView from 'react-native-webview';
 import * as theme from '../../styles/theme';
 import { Header } from '../../components/Header';
 import previous from '../../assets/Icons/previous.png';
 import next from '../../assets/Icons/next.png';
import { SafeAreaView } from 'react-native-safe-area-context';
import { CustomWebView } from '../../components/WebView';
import { FloatingButton } from '../../components/Fab';

 const showActivityIndicator = () => (
    <ActivityIndicator 
          color = 'red'
          size = 'large'
          style = {{flex : 1 , justifyContent  : 'center'}}/>
   )


 export function Specificstory() : React.ReactElement{
   return (
     <SafeAreaView style = {{flex : 1}}>
              <Header title = 'Specific Story'/>
                <WebView 
                              javascriptEnabled = {true}
                              domStorageEnabled = {true}
                              renderLoading = {showActivityIndicator}
                              startInLoadingState = {true} 
                              source = {{uri :  "https://www.newyorker.com/science/elements/reverse-innovation-could-save-lives-why-isnt-western-medicine-embracing-it"}}
                              />
                  <FloatingButton />
     </SafeAreaView>
   );
 };
 
 const styles = StyleSheet.create({
     imageStyle : {
       height : 100 , 
       width : 100,
       marginTop : 10
     }
 });
 

 