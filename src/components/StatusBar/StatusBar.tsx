
import React from 'react';
import {View, Text, StyleSheet, Platform} from 'react-native';
import * as theme from '../../styles/theme';

export function StatusBar():React.ReactElement{
  return(
            <View style={[styles.statusBarBackground]}/>
             )
    }
  
const styles = StyleSheet.create({
  statusBarBackground: {
    height: (Platform.OS === 'ios') ? 30 : 0, 
    backgroundColor: theme.colors.black,
  }
})