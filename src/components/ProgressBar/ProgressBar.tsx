import React from "react";
import { ActivityIndicator,ActivityIndicatorProps} from "react-native";
import * as theme from '../../styles/theme';
export function ProgressBar(prop:ActivityIndicatorProps) : React.ReactElement {
    return(
            <ActivityIndicator 
                        color = {theme.colors.red}
                        size = 'large'
                        style = {prop.style}/>
                    )
    }