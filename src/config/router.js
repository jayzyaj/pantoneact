import Splash from '../screens/splash'
import {
    createSwitchNavigator,
    createAppContainer,
    createDrawerNavigator,
    createStackNavigator
  } from 'react-navigation';

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

//   const AppDrawerNavigator = createDrawerNavigator({
//     Dashboard: {
//       screen: DashboardStackNavigator
//     }
//   });
  
  const AppSwitchNavigator = createSwitchNavigator({
    Splash: { screen: Splash },
    // UnauthenticatedScreens: { screen: WelcomeScreen },
    // Dashboard: { screen: AppDrawerNavigator }
  }, {
      initialRouteName: 'Splash'
    });
  
  const AppContainer = createAppContainer(AppSwitchNavigator);

  export default AppContainer