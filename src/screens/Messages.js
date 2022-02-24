import React, { useState } from 'react'
import { StyleSheet } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import MessageCard from '../components/MessageCard'

export default function Messages({ navigation }) {
  const [messages, setMessages] = useState([
    { user: 'Raffi', message: 'Wazzzzaaaaaaap' },
    { user: 'David', message: 'Yo lets meet up' },
    { user: 'Erick', message: 'Where are you bro?' },
    { user: 'Adrian', message: 'Sup my dud' },
    { user: 'Mauricio', message: 'Bruh where are you, did you die?' },
  ])

  return (
    <ScrollView>
      {messages.map((message) => (
        <MessageCard
          name={message.user}
          message={message.message}
          navigation={navigation}
        />
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
