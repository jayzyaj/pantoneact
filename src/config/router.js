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

//   const DashboardStackNavigator = createStackNavigator(
//     {
//       Home: Home
//     },
//     {
//       defaultNavigationOptions: ({ navigation }) => {
//         return {
//           headerLeft: (
//             <Icon
//               style={{ paddingLeft: 10 }}
//               onPress={() => navigation.openDrawer()}
//               name="md-menu"
//               size={30}
//             />
//           )
//         };
//       }
//     }
//   );

const UnauthenticatedScreens = createStackNavigator({
    Login: {
        screen: Login
    }
});


const AuthenticatedInitialScreens = createStackNavigator(
    {
        Home: {
            screen: Home
        },
    },
    {
        defaultNavigationOptions: ({ navigation }) => {
            return {
                header:
                    <DrawerHeader
                        headerTitle={navigation.state.routeName}
                        icon="menu"
                        onPress={() => navigation.openDrawer()}
                    />
            };
        }
    }
);

const AppDrawerNavigator = createDrawerNavigator(
    {
        Home: AuthenticatedInitialScreens,
    }, {
        initialRouteName: 'Home',
        contentComponent: DrawerComponent,
        contentOptions: {
            activeTintColor: COLOR.PANTOME
        }
    }
);

const AppSwitchNavigator = createSwitchNavigator(
    {
        Splash: { screen: Splash },
        UnauthenticatedScreens: { screen: UnauthenticatedScreens },
        AuthenticatedInitialScreens: { screen: AppDrawerNavigator }
    }, {
        initialRouteName: 'Splash'
    }
);

const AppContainer = createAppContainer(AppSwitchNavigator);

export default AppContainer