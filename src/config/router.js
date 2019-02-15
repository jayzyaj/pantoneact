import React from 'react'

import {
    createSwitchNavigator,
    createAppContainer,
    createDrawerNavigator,
    createStackNavigator
} from 'react-navigation';

import { COLOR } from './styles'

import Home from "../screens/home";
import Login from "../screens/login";
import Splash from '../screens/splash'

import DrawerComponent from "../components/drawer"
import DrawerHeader from '../components/header';

const UnauthenticatedScreens = createStackNavigator(
    { // Screens
        Login: { screen: Login }
    }
);


const AuthenticatedInitialScreens = createStackNavigator(
    { // Screens
        Home: {
            screen: Home
        },
    }, { // Default options
        defaultNavigationOptions: ({ navigation }) => {
            return {
                header:
                    <DrawerHeader // Default header component
                        headerTitle={navigation.state.routeName}
                        icon="menu"
                        onPress={() => navigation.openDrawer()}
                    />
            };
        }
    }
);

const AppDrawerNavigator = createDrawerNavigator(
    { // Screens
        Home: AuthenticatedInitialScreens,
    }, { // Default options
        initialRouteName: 'Home',
        contentComponent: DrawerComponent, // Default drawer component
        contentOptions: {
            activeTintColor: COLOR.PANTOME
        }
    }
);

const AppSwitchNavigator = createSwitchNavigator(
    { // Screens
        Splash: { screen: Splash },
        UnauthenticatedScreens: { screen: UnauthenticatedScreens },
        AuthenticatedInitialScreens: { screen: AppDrawerNavigator }
    }, { // Default options
        initialRouteName: 'Splash'
    }
);

const AppContainer = createAppContainer(AppSwitchNavigator);

export default AppContainer