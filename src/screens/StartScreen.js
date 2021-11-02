import React from 'react'
import { Image, View } from 'react-native'
import { Text } from 'react-native-paper'
import Button from '../components/Button'
import GlobalStyles from '../core/GlobalStyles'

export default function StartScreen({ navigation }) {
  return (
    <View style={GlobalStyles.background}>
      <Image
        source={require('../assets/meetlogo.png')}
        style={GlobalStyles.logo}
      />
      <Text style={GlobalStyles.header}>Welcome</Text>
      <Text style={GlobalStyles.paragraph}>Start meeting people now!</Text>
      <Button
        mode="contained"
        onPress={() => navigation.navigate('LoginScreen')}>
        Login
      </Button>
      <Button
        mode="outlined"
        onPress={() => navigation.navigate('RegisterScreen')}>
        Sign Up
      </Button>
    </View>
  )
}
