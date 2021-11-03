import React from 'react'
import { View } from 'react-native'
import { Text } from 'react-native-paper'
import GlobalStyles from '../core/GlobalStyles'

export default () => {
  return (
    <View style={GlobalStyles.background}>
      <View style={{ justifyContent: 'center', flex: 1 }}>
        <Text>Search</Text>
      </View>
    </View>
  )
}
