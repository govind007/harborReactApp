import React from 'react'
import Login from '@/Components/Login'
import Signup from '@/Components/Signup'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

const Tab = createBottomTabNavigator()

const IndexLoginSignupContainer = ({ navigation }) => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Login" component={Login} navigation={navigation} />
      <Tab.Screen name="Sign up" component={Signup} navigation={navigation} />
    </Tab.Navigator>
  )
}

export default IndexLoginSignupContainer
