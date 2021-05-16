import React from 'react'
import Login from '@/Components/Login'
import Signup from '@/Components/Signup'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'

const Tab = createMaterialTopTabNavigator()

const IndexLoginSignupContainer = ({ navigation }) => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Login" component={Login} navigation={navigation} />
      <Tab.Screen name="Sign up" component={Signup} navigation={navigation} />
    </Tab.Navigator>
  )
}

export default IndexLoginSignupContainer
