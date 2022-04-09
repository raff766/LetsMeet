import { useFocusEffect } from '@react-navigation/core'
import React, { useCallback, useState, useContext } from 'react'
import { StyleSheet, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import MessageCard from '../components/MessageCard'
import { REQUEST, requestData } from '../core/server'
import { UserContext } from '../core/UserContext'

export default function Messages({ navigation }) {
  const [messages, setMessages] = useState([])
  const { userId } = useContext(UserContext)

  useFocusEffect(
    useCallback(() => {
      requestData(REQUEST.CONVERSATIONS, userId).then((data) => {
        setMessages(data.messages)
      })
    }, [])
  )

  return (
    <ScrollView>
      {messages.map((message) => (
        <View key={message.convoid} style={styles.message}>
          <MessageCard
            name={message.user}
            message={message.message}
            convoId={message.convoid}
            navigation={navigation}
          />
        </View>
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
