import React from "react";
import {View , Pressable , Image, StyleSheet} from 'react-native';
import previous from '../../assets/Icons/previous.png';
import next from '../../assets/Icons/next.png';

interface FloatingProps {

}

let size : number = 50 ;

const styles = StyleSheet.create({
    btnContainer : {
        backgroundColor : '#000' , 
        height : size ,
        width : size,
        marginLeft : 10, 
        marginBottom : 10,
        justifyContent : 'center' ,
        borderRadius : size / 2
    },
    previousStyle : {
        height : 45 , 
        width : 45,
        position : 'absolute',
        justifyContent : 'flex-end'
    },
    nextStyle : {
        height : 45 , 
        width : 45, 
        left: 5,
        position : 'absolute',
        justifyContent : 'flex-end'
    }
});

export function FloatingButton(props : FloatingProps) : React.ReactElement{
    return(
        <View style = {{flexDirection : 'row', alignItems : 'center', justifyContent : 'center' ,position  : 'absolute' , flex : 1,bottom : 0,width : '100%' , backgroundColor : 'transparent'}}>
        <Pressable style = {styles.btnContainer}>
                      <Image
                              style = {styles.previousStyle}
                              source = {previous}/>
                  </Pressable>
      <Pressable style = {styles.btnContainer}>
          <Image
                  style = {styles.nextStyle}
                  source = {next}/>
      </Pressable>
  </View>
    );
}