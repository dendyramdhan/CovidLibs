import React from 'react'
import { createStackNavigator } from 'react-navigation-stack'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { Fonts } from '../Themes'
import { Platform } from 'react-native'
import { apply, colors } from 'osmicsx'
import Icon from 'react-native-vector-icons/FontAwesome5'

// Import Styles

// Import Screens
import HomeScreen from '../Containers/HomeScreen'
import NewsScreen from '../Containers/NewsScreen'
import GlobalScreen from '../Containers/GlobalScreen'

const OS = Platform.OS

 export default createBottomTabNavigator({
    Home: {
        screen: createStackNavigator({
            HomeScreen
        }, {
            headerMode: 'screen',
            navigationOptions: navigation => ({
                tabBarIcon: ({ focused, tintColor }) =>
                    <Icon name="home" size={25} color={tintColor} solid />
            })
        })
    },
    News: {
        screen: createStackNavigator({
            NewsScreen
        }, {
            headerMode: 'screen',
            navigationOptions: navigation => ({
                tabBarIcon: ({ focused, tintColor }) =>
                    <Icon name="newspaper" size={25} color={tintColor} solid />
            })
        })
    },
    Global: {
        screen: createStackNavigator({
            GlobalScreen
        }, {
            headerMode: 'screen',
            navigationOptions: navigation => ({
                tabBarIcon: ({ focused, tintColor }) =>
                    <Icon name="globe-americas" size={25} color={tintColor} solid />
            })
        })
    }
 }, {
     initialRouteName: 'Home',
     tabBarOptions: {
         activeTintColor: colors["green-500"],
         inactiveTintColor: colors["gray-500"],
         style: apply([
             "bg-gray-900",
             "p-4"
         ]),
         labelStyle: {
             fontFamily: Fonts.type.bold,
             fontSize: 12,
         },
         showLabel: false,
     },
     allowFontScalling: false,
 })