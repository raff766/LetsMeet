import React from 'react'
import { Provider as PaperProvider } from 'react-native-paper'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { LightTheme, DarkTheme } from './src/styles/Themes'
import {
  StartScreen,
  LoginScreen,
  RegisterScreen,
  ResetPasswordScreen,
} from './src/screens'
import DashboardTab from './src/routes/DashboardTab'
import EventScreen from './src/screens/EventScreen'
import CreateEventScreen from './src/screens/CreateEventScreen'
import { UserContextProvider } from './src/core/UserContext'
import ChatScreen from './src/screens/ChatScreen'
import Profile from './src/screens/Profile'

const Stack = createStackNavigator()

export default function App() {
  // eslint-disable-next-line no-unused-vars
  const [isDarkTheme, setIsDarkTheme] = React.useState(false)
  const theme = isDarkTheme ? DarkTheme : LightTheme

  return (
    <UserContextProvider>
      <PaperProvider theme={theme}>
        <NavigationContainer theme={theme}>
          <Stack.Navigator
            initialRouteName="StartScreen"
            screenOptions={{
              headerShown: true,
              headerTitle: '',
              headerStyle: {
                height: 60,
                elevation: 0,
                shadowOpacity: 0,
                borderBottomWidth: 0,
              },
            }}>
            <Stack.Screen name="StartScreen" component={StartScreen} />
            <Stack.Screen name="LoginScreen" component={LoginScreen} />
            <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
            <Stack.Screen
              options={{ headerShown: false }}
              name="Dashboard"
              component={DashboardTab}
            />
            <Stack.Screen
              name="ResetPasswordScreen"
              component={ResetPasswordScreen}
            />
            <Stack.Screen name="EventScreen" component={EventScreen} />
            <Stack.Screen
              name="CreateEventScreen"
              component={CreateEventScreen}
              options={{
                headerTitle: 'New event',
              }}
            />
            <Stack.Screen
              name="ChatScreen"
              component={ChatScreen}
              options={({ route }) => {
                return { headerTitle: route.params['name'] }
              }}
            />
            <Stack.Screen name="Profile" component={Profile} />
          </Stack.Navigator>
        </NavigationContainer>
      </PaperProvider>
    </UserContextProvider>
  )
}
