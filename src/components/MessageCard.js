import React from 'react'
import { Text, StyleSheet, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

export default function MessageCard({
  name,
  message,
  convoId,
  userId,
  navigation,
}) {
  return (
    <View>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('ChatScreen', { name, convoId, userId })
        }
        style={styles.message}>
        <Text style={{ ...styles.text, fontWeight: 'bold' }}>{name}</Text>
        <Text style={styles.text}>{message}</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  message: {
    width: '100%',
    height: 50,
    borderBottomWidth: 1,
    borderColor: 'lightgrey',
    justifyContent: 'center',
  },
  text: {
    marginLeft: 10,
  },
})
