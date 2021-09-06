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
import React, { useEffect, useMemo, useState } from 'react';
import {Image} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import bbcNews from '../../assets/images/bbcNews.png';
import { CustomFlatList } from '../../components/FlatList';
import { Header } from '../../components/Header';
import { ProgressBar } from '../../components/ProgressBar';
import { RootStackParams } from "../../screens/routeParams";
import { ApiCallForData, ApiCallForID, convertWholeToSpecific } from '../../utils/axios';
import styles from './Topstories.style';
import * as theme  from '../../styles/theme';

interface Topstoriesprops {
  navigation :  StackNavigationProp<RootStackParams ,  'Topstories'>;
}

interface idInterface {
  id : number,
  value : number
};

interface storyInterface {
  id : number ,
  url : string,
  title : string
};

 export function TopStories(props:Topstoriesprops) : React.ReactElement{

    const [storyArr , setStoryArr] = useState<storyInterface[]>([]);
  
     async function apiCall() {
            const idData : [] = await ApiCallForID();
            var storyObj : idInterface[] = [];
            idData.forEach((item , i) => {
                  storyObj.push({id : i , value : item});
              });
            console.log('Arrs' ,  storyObj);
            
            //Fetching data with title url and id
            const wholeData : Array<any> = await ApiCallForData(storyObj);
            console.log('Whole Data' , wholeData);
            
            //Converting to Desired data
            setStoryArr(convertWholeToSpecific(wholeData));
     }
     
     useEffect( () => {
               apiCall();
      },[]);

      const memiosedFlatList = useMemo(() => {
               return <CustomFlatList data = {storyArr} navigate = {props.navigation}/>
      } , [storyArr]);
  

    const showActivityIndicator = () => (
                <ProgressBar style = {{flex: 1,
                                                    justifyContent: 'center',
                                                    alignSelf: 'center',
                                                    backgroundColor: theme.colors.black}} />
     )

   return (
              <SafeAreaView style = {styles.container}>
                      <Header title = 'Top stories'  backButtonVisible = {false}/>
                      <Image source = {bbcNews} style = {styles.imageStyle}/>
                        {storyArr.length == 0 ? showActivityIndicator() :  memiosedFlatList}
              </SafeAreaView>
   );
 };
 

 