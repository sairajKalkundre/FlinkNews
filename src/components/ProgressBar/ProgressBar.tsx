import React from "react";
import { ActivityIndicator,ActivityIndicatorProps} from "react-native";

export function ProgressBar(prop:ActivityIndicatorProps) : React.ReactElement {
    return(
            <ActivityIndicator 
                        color = 'red'
                        size = 'large'
                        style = {prop.style}/>
                    )
    }