import React, { useEffect } from 'react';
import {
  ActivityIndicator, StyleSheet,StatusBar
} from 'react-native';
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParams } from "../../screens/routeParams";
import { SafeAreaView } from 'react-native-safe-area-context';
import WebView from 'react-native-webview';
import { FloatingButton } from '../../components/Fab';
import { Header } from '../../components/Header';

interface SpecificStoryProps {
  navigation :  StackNavigationProp<RootStackParams ,  'Specificstory'>,
  route  : any
}

 const showActivityIndicator = () => (
    <ActivityIndicator 
          color = 'red'
          size = 'large'
          style = {{    position: 'absolute',
                            flex: 1,
                            justifyContent: 'center',
                            alignItems: 'center',
                            height: '100%',
                            width: '100%',
                            backgroundColor: 'white'}}/>
   )

 export function Specificstory({navigation , route}: SpecificStoryProps) : React.ReactElement{
    function navigate(){
      console.log('TRansition');
      navigation.goBack();
  }
  useEffect(() => {
    console.log(route.params)
},[])
   return (
     <SafeAreaView style = {{flex : 1, backgroundColor : '#000'}}>
              <Header title = {route.params.title} backButtonVisible = {true} onPress = {navigate}/>
                <WebView 
                              style = {{flex : 1}}
                              originWhitelist={['*']}
                              javascriptEnabled = {true}
                              domStorageEnabled = {true}
                              renderLoading = {showActivityIndicator}
                              startInLoadingState = {true} 
                              source = {{uri :  route.params.url}}
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
 

 