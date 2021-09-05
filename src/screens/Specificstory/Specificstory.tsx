import { StackNavigationProp } from "@react-navigation/stack";
import React, { useEffect, useRef, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import WebView from 'react-native-webview';
import { FloatingButton } from '../../components/Fab';
import { Header } from '../../components/Header';
import { ProgressBar } from '../../components/ProgressBar';
import { RootStackParams } from "../../screens/routeParams";
import styles from './Specificstory.style';

interface SpecificStoryProps {
  navigation :  StackNavigationProp<RootStackParams ,  'Specificstory'>,
  route  : any
}

 const showActivityIndicator = () => (
   <ProgressBar style = {styles.activityIndicatorStyle}/>
   )

 export function Specificstory({navigation , route}: SpecificStoryProps) : React.ReactElement{
    function navigate(){
      console.log('TRansition');
      navigation.goBack();
  }
  const [canGoBack, setCanGoBack] = useState(false);
  const [canGoForward, setCanGoForward] = useState(false);
  const [currentUrl, setCurrentUrl] = useState('');
  const webviewRef = useRef(null);

 const backButtonHandler = () => {
    if (webviewRef.current) webviewRef.current.goBack();
  }
  
  const frontButtonHandler = () => {
    if (webviewRef.current) webviewRef.current.goForward();
  }

  useEffect(() => {
    console.log(route.params)
},[])
   return (
     <SafeAreaView style = {styles.container}>
              <Header title = {route.params.title} backButtonVisible = {true} onPress = {navigate}/>
                <WebView 
                              style = {{flex : 1}}
                              originWhitelist={['*']}
                              javascriptEnabled = {true}
                              domStorageEnabled = {true}
                              renderLoading = {showActivityIndicator}
                              startInLoadingState = {true} 
                              source = {{uri :  route.params.url}}
                              ref = {webviewRef}
                              onNavigationStateChange={navState => {
                                setCanGoBack(navState.canGoBack)
                                setCanGoForward(navState.canGoForward)
                                setCurrentUrl(navState.url)
                              }}
                              />
                  <FloatingButton onNext = {frontButtonHandler} onPrevious = {backButtonHandler}/>
     </SafeAreaView>
   );
 };

 

 