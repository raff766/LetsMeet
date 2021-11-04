import React from 'react'
import { Text, StyleSheet } from 'react-native'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'

export default function Messages() {
  return (
    <ScrollView>
      <TouchableOpacity style={styles.message}>
        <Text style={{ ...styles.text, fontWeight: 'bold' }}>Erika</Text>
        <Text style={styles.text}>Hey how's it going!</Text>
      </TouchableOpacity>
    </ScrollView>
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
