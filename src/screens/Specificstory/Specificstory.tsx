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

 const showActivityIndicator = () => (
    <ActivityIndicator 
          color = 'red'
          size = 'large'
          style = {{flex : 1 , justifyContent  : 'center'}}/>
 );

 export function Specificstory() : React.ReactElement{
   return (
     <SafeAreaView style = {{flex : 1}}>
       <Header title = 'Specific Story'/>
         <WebView 
                      javaScriptEnabled = {true}
                      domStorageEnabled = {true}
                      renderLoading = {showActivityIndicator}
                      startInLoadingState = {true} 
                      source = {{uri :  "https://www.newyorker.com/science/elements/reverse-innovation-could-save-lives-why-isnt-western-medicine-embracing-it"}}
                      />
            <View style = {{flexDirection : 'row', alignItems : 'center', justifyContent : 'center' ,position  : 'absolute' , flex : 1,bottom : 0,width : '100%'}}>
                  <Pressable style = {{backgroundColor : '#000' , height : 50 ,width : 50,marginLeft : 10, marginBottom : 10,justifyContent : 'center' ,borderRadius : 50/2}}>
                                <Image
                                        style = {{height : 45 , width : 45,position : 'absolute',justifyContent : 'flex-end'}}
                                        source = {previous}/>
                            </Pressable>
                <Pressable style = {{backgroundColor : '#000' , height : 50 ,width : 50,marginLeft : 10, marginBottom : 10,justifyContent : 'center' ,borderRadius : 50/2}}>
                    <Image
                            style = {{height : 45 , width : 45, left: 5,position : 'absolute',justifyContent : 'flex-end'}}
                            source = {next}/>
                </Pressable>
            </View>
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
 

 