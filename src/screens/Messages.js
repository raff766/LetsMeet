import React, { useState } from 'react'
import { Text, StyleSheet } from 'react-native'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import MessageCard from '../components/MessageCard'

export default function Messages() {
  const [messages, setMessages] = useState([
    { user: 'Raffi', message: 'Hello there' },
    { user: 'David', message: 'Test' },
    { user: 'Erick', message: '3' },
    { user: 'Adrian', message: '4' },
    { user: 'Mauricio', message: '5' },
  ])

  return (
    <ScrollView>
      {messages.map((message) => (
        <MessageCard name={message.user} message={message.message} />
      ))}
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
