import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Ionicons, MaterialIcons } from '@expo/vector-icons'
import React, { useContext } from 'react'
import { Image } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Search, Home, Messages } from '../screens'
import profilestyles from '../styles/profilestyles'
import { UserContext } from '../core/UserContext'

const Tab = createBottomTabNavigator()

export default function DashboardTab({ navigation }) {
  const { userId } = useContext(UserContext)
  return (
    <Tab.Navigator
      screenOptions={{
        headerLeft: () => (
          <TouchableOpacity
            style={{ width: 55, height: 55, marginLeft: 10 }}
            onPress={() => navigation.navigate('Profile', userId)}>
            <Image
              style={{
                ...profilestyles.avatar,
                width: 55,
                height: 55,
                marginTop: 0,
              }}
              source={{
                uri: 'https://bootdey.com/img/Content/avatar/avatar6.png',
              }}
            />
          </TouchableOpacity>
        ),
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
