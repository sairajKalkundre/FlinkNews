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
   Image,
 } from 'react-native';
 import WebView from 'react-native-webview';
 //import all the components we are going to use.
 import axios from 'react-native-axios';
 import * as theme from '../../styles/theme';

 
 export function Specificstory() : React.ReactElement{
   return (
     <View style = {{flex : 1 ,alignItems : 'center', justifyContent : 'center',backgroundColor :  theme.colors.white}}>
         <Text style = {{color :  theme.colors.white ,  ...theme.typography.type300}}>Specific Story</Text>
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
 

 