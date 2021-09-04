import React from 'react';
import {
  ActivityIndicator, StyleSheet
} from 'react-native';
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParams } from "../../screens/routeParams";
import { SafeAreaView } from 'react-native-safe-area-context';
import WebView from 'react-native-webview';
import { FloatingButton } from '../../components/Fab';
import { Header } from '../../components/Header';

interface SpecificStoryProps {
  navigation :  StackNavigationProp<RootStackParams ,  'Specificstory'>;

}

 const showActivityIndicator = () => (
    <ActivityIndicator 
          color = 'red'
          size = 'large'
          style = {{flex : 1 , justifyContent  : 'center'}}/>
   )

 export function Specificstory(props : SpecificStoryProps) : React.ReactElement{
    function navigate(){
      console.log('TRansition');
      props.navigation.goBack();
  }
   return (
     <SafeAreaView style = {{flex : 1}}>
              <Header title = 'Specific story' backButtonVisible = {true} onPress = {navigate}/>
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
 

 