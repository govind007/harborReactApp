import React from 'react'
import { IndexAppContainer, IndexLoginSignupContainer } from '@/Containers'
import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator()
// @refresh reset
const MainNavigator = () => {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Home" component={IndexAppContainer} />
      <Drawer.Screen name="LoginSignup" component={IndexLoginSignupContainer} />
    </Drawer.Navigator>
  )
}

export default MainNavigator
