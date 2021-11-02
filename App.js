import React from 'react'
import { Provider as PaperProvider } from 'react-native-paper'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { LightTheme, DarkTheme } from './src/core/Themes'
import {
  StartScreen,
  LoginScreen,
  RegisterScreen,
  ResetPasswordScreen,
  Dashboard,
} from './src/screens'

const Stack = createStackNavigator()

export default function App() {
  const [isDarkTheme, setIsDarkTheme] = React.useState(true)
  const theme = isDarkTheme ? DarkTheme : LightTheme

  return (
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
          <Stack.Screen name="Dashboard" component={Dashboard} />
          <Stack.Screen
            name="ResetPasswordScreen"
            component={ResetPasswordScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  )
}
