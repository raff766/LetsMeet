import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Ionicons from '@expo/vector-icons/Ionicons'
import React from 'react'
import { Home } from '../screens'
import Search from '../screens/Search'

const Tab = createBottomTabNavigator()

export default () => {
  return (
    <Tab.Navigator screenOptions={{ headerTitle: '' }}>
      <Tab.Screen
        options={{
          tabBarIcon: ({ focused, color, size }) => {
            return <Ionicons name={'home'} size={size} color={color} />
          },
        }}
        name="Home"
        component={Home}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ focused, color, size }) => {
            return <Ionicons name={'search'} size={size} color={color} />
          },
        }}
        name="Search"
        component={Search}
      />
    </Tab.Navigator>
  )
}
