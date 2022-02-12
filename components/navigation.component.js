import React from "react";
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import { HomeScreen } from "./home.component";
import { DetailsScreen } from "./details.component";

const {Navigator, Screen} = createNativeStackNavigator()

const HomeNavigator =() =>(
    <Navigator headerMode='none'>
        <Screen name="Home" component={HomeScreen}/>
        <Screen name="Details" component={DetailsScreen}/>
    </Navigator>
)

export const AppNavigator = () => (
    <NavigationContainer>
        <HomeNavigator/>
    </NavigationContainer>
)