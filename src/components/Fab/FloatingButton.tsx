import React from "react";
import {View , Image, StyleSheet, TouchableOpacity} from 'react-native';
import previous from '../../assets/Icons/previous.png';
import next from '../../assets/Icons/next.png';
import * as theme from '../../styles/theme';

interface FloatingProps {
    onPrevious() : void;
    onNext() : void;
}

let size : number = 50 ;

const styles = StyleSheet.create({
    btnContainer : {
        backgroundColor : theme.colors.black , 
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
        <TouchableOpacity style = {styles.btnContainer} onPress = {props.onPrevious}>
                      <Image
                              style = {styles.previousStyle}
                              source = {previous}/>
                  </TouchableOpacity>
      <TouchableOpacity style = {styles.btnContainer} onPress = {props.onNext}>
          <Image
                  style = {styles.nextStyle}
                  source = {next}/>
      </TouchableOpacity>
  </View>
    );
}