import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Ionicons, MaterialIcons } from '@expo/vector-icons'
import React from 'react'
import { Image } from 'react-native'
import { Search, Home, Messages } from '../screens'

const Tab = createBottomTabNavigator()

export default function DashboardTab() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerTitleAlign: 'center',
        headerTitle: () => (
          <Image
            source={require('../assets/meetlogo.png')}
            style={{
              flex: 1,
              width: 210,
              height: 80,
            }}
          />
        ),
      }}>
      <Tab.Screen
        options={{
          tabBarIcon: ({ color, size }) => {
            return <Ionicons name="home" size={size} color={color} />
          },
        }}
        name="Home"
        component={Home}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ color, size }) => {
            return <Ionicons name="search" size={size} color={color} />
          },
        }}
        name="Search"
        component={Search}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ color, size }) => {
            return <MaterialIcons name="message" size={size} color={color} />
          },
        }}
        name="Messages"
        component={Messages}
      />
    </Tab.Navigator>
  )
}
