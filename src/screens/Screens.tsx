//Root Navigator
import React from "react";
import { TopStories } from "./TopStories";
import { Specificstory } from "./Specificstory";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { RootStackParams } from "./routeParams";
import { View ,StatusBar} from "react-native";
import * as theme from '../styles/theme';

const RootStack = createStackNavigator<RootStackParams>();

function  renderScreen() : React.ReactElement {
        return(
                <RootStack.Navigator initialRouteName = "Topstories"   screenOptions={{headerShown: false}}>
                    <RootStack.Screen component = {Specificstory} name = "Specificstory"  />
                    <RootStack.Screen component = {TopStories} name = "Topstories" />
                </RootStack.Navigator>
        )
}

export function Screens(): React.ReactElement {
	return (
		<View style={theme.fullScreen}>
			<NavigationContainer >
				{renderScreen()}
			</NavigationContainer>
		</View>
	);
}