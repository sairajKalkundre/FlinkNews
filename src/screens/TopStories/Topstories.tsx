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
import React, { useEffect, useState,useMemo } from 'react';
import {
  Image, StyleSheet,ActivityIndicator
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import bbcNews from '../../assets/images/bbcNews.png';
import { CustomFlatList } from '../../components/FlatList';
import { Header } from '../../components/Header';
import { RootStackParams } from "../../screens/routeParams";
import styles from './Topstories.style';
import * as theme from '../../styles/theme';
import axios , {AxiosResponse} from 'react-native-axios';
import {ProgressBar} from '../../components/ProgressBar';
interface Topstoriesprops {
  navigation :  StackNavigationProp<RootStackParams ,  'Topstories'>;
}

 export function TopStories(props:Topstoriesprops) : React.ReactElement{

      interface storyInterface {
              id : number ,
              url : string,
              title : string
     };

    const [storyArr , setStoryArr] = useState<storyInterface[]>([]);
    var arr : number[];

    interface idInterface {
          id : number,
          value : number
      };

     var storyObj : idInterface[] = [];

    async function apiCallForID () {
                  await axios.get('https://hacker-news.firebaseio.com/v0/topstories.json')
                  .then(function (response : AxiosResponse) {
                              arr = response.data;
                  })
                  .catch(function (error) { 
                                  console.log(error);
                            });
                  arr.forEach((item , i) => {
                            storyObj.push({id : i , value : item});
                  });
                  console.log('Array' , storyObj);
                  apiCallForData(storyObj);
     }

     async function apiCallForData(objID :  Array<idInterface>){
          let wholeStoryArr : Array<any> = [];
          let promises = [];
            for (var i = 0; i < objID.length; i++) {
                 let url : string = 'https://hacker-news.firebaseio.com/v0/item/'+objID[i].value+'.json';
                  promises.push(
                      axios.get<storyInterface[]>(url).then((response : AxiosResponse) => {
                            wholeStoryArr.push(response.data);
                      }));
                  }       
            Promise.all(promises).then(() => 
                              convertWholeToSpecific(wholeStoryArr)
                              );
     }

     function convertWholeToSpecific(arr : Array<any>){
          let specificStory : storyInterface[] = [];
          arr.forEach((item , i) => {
            specificStory.push({id : item.id , title : item.title , url : item.url});
         });
         console.log('Specific Arr ' , specificStory); 
         setStoryArr(specificStory);
     }

     useEffect( () => {
              apiCallForID();
      },[]);

      const memiosedFlatList = useMemo(() => {
               return <CustomFlatList data = {storyArr} navigate = {props.navigation}/>
      } , [storyArr]);
  

    const showActivityIndicator = () => (
      <ProgressBar style = {{   flex: 1,
                                justifyContent: 'center',
                                alignSelf: 'center',
                                backgroundColor: 'black'}} />
 
     )

   return (
     <SafeAreaView style = {styles.container}>
       <Header title = 'Top stories'  backButtonVisible = {false}/>
       <Image source = {bbcNews} style = {styles.imageStyle}/>
        {storyArr.length == 0 ? showActivityIndicator() :  memiosedFlatList}
     </SafeAreaView>
   );
 };
 

 