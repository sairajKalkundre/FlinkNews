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

type SpecificStoryProps = StackNavigationProp<RootStackParams ,  'Specificstory'>



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
    console.log(route.url);
},[])
   return (
     <SafeAreaView style = {{flex : 1, backgroundColor : '#000'}}>
              <Header title = 'Specific story' backButtonVisible = {true} onPress = {navigate}/>
                <WebView 
                              style = {{flex : 1}}
                              originWhitelist={['*']}
                              javascriptEnabled = {true}
                              domStorageEnabled = {true}
                              renderLoading = {showActivityIndicator}
                              startInLoadingState = {true} 
                              source = {{uri :  "https://www.express.co.uk/news/world/1486258/Angela-merkel-chancellor-german-election-politics-candidate-cdu-europe-chris-parry-news-vn"}}
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
 

 