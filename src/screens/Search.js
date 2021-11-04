import React from 'react'
import { View } from 'react-native'
import { WebView } from 'react-native-webview'
import { Text } from 'react-native-paper'
import GlobalStyles from '../core/GlobalStyles'

export default () => {
  return (
    <View style={GlobalStyles.background}>
      <WebView
        style={{ width: 420, height: 230, flex: 1}}
        javaScriptEnabled={true}
        domStorageEnabled={true}
        source={{ uri: "https://www.google.com/maps/@34.2449095,-118.5258363,13.79z" }}
      />
    </View>    
  )
}
