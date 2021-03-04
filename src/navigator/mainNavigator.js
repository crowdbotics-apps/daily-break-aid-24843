import React from "react"
import { createDrawerNavigator } from "@react-navigation/drawer"
import { NavigationContainer } from "@react-navigation/native"

import SplashScreen from "../features/SplashScreen"
import SideMenu from "./sideMenu"
//@BlueprintImportInsertion
import UserProfile211441Navigator from '../features/UserProfile211441/navigator';
import Tutorial211440Navigator from '../features/Tutorial211440/navigator';
import NotificationList211412Navigator from '../features/NotificationList211412/navigator';
import Settings211411Navigator from '../features/Settings211411/navigator';
import Settings211403Navigator from '../features/Settings211403/navigator';
import UserProfile211401Navigator from '../features/UserProfile211401/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {
  //@BlueprintNavigationInsertion
UserProfile211441: { screen: UserProfile211441Navigator },
Tutorial211440: { screen: Tutorial211440Navigator },
NotificationList211412: { screen: NotificationList211412Navigator },
Settings211411: { screen: Settings211411Navigator },
Settings211403: { screen: Settings211403Navigator },
UserProfile211401: { screen: UserProfile211401Navigator },

  /** new navigators can be added here */
  SplashScreen: {
    screen: SplashScreen
  }
}

const Drawer = createDrawerNavigator()

const AppContainer = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={props => <SideMenu {...props} />}>
        {Object.keys(AppNavigator).map(s => (
          <Drawer.Screen name={s} component={AppNavigator[s].screen} />
        ))}
      </Drawer.Navigator>
    </NavigationContainer>
  )
}

export default AppContainer
