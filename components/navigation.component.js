import React from "react";
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import { HomeScreen } from "./home.component";
import { DetailsScreen } from "./details.component";
import { BottomNavigation,BottomNavigationTab } from "@ui-kitten/components";

const {Navigator, Screen} = createBottomTabNavigator()

const BottomTabBar = ({navigation,state}) =>{
    
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  return (
    <BottomNavigation selectedIndex={selectedIndex}
    onSelect={index => {
        setSelectedIndex(index)
        navigation.navigate(state.routeNames[index])}}>
        <BottomNavigationTab title='HOME'/>
        <BottomNavigationTab title='DETAILS'/>
    </BottomNavigation>)}


const HomeNavigator =() =>(
    <Navigator  screenOptions={{
        headerShown: false
      }} tabBar={props => <BottomTabBar {...props} />}>
        <Screen name="Home" component={HomeScreen}/>
        <Screen name="Details" component={DetailsScreen}/>
    </Navigator>
)

export const AppNavigator = (props) => (
    <NavigationContainer>
        <HomeNavigator/>
        {/* <BottomTabBar {...props}></BottomTabBar> */}
    </NavigationContainer>
)