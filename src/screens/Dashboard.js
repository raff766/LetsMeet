import React from 'react'
import { Image, View } from 'react-native'
import { Text } from 'react-native-paper'
import Button from '../components/Button'
import GlobalStyles from '../core/GlobalStyles'

export default function Dashboard({ navigation }) {
  return (
    <View style={GlobalStyles.background}>
      <Image
        source={require('../assets/meetlogo.png')}
        style={GlobalStyles.logo}
      />
      <Text style={GlobalStyles.header}>Lets Start.</Text>
      <Text style={GlobalStyles.paragraph}>
        You logged in, now it's time to make some new friends!
      </Text>
      <Button
        mode="outlined"
        onPress={() =>
          navigation.reset({
            index: 0,
            routes: [{ name: 'StartScreen' }],
          })
        }>
        Logout
      </Button>
    </View>
  )
}
