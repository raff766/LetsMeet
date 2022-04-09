/* eslint-disable no-shadow */
import { useFocusEffect } from '@react-navigation/core'
import React, { useState, useCallback } from 'react'
import { GiftedChat } from 'react-native-gifted-chat'
import { REQUEST, requestData } from '../core/server'

// chat now displays, need to figure out a way to store the message or for now have the
// messages sent be stored - ie leave message leave page and messages remain there when \
// returning to original user chat
// Also for some reason "Send" is only showing "Sen"

export default function ChatScreen({ route }) {
  const convoData = route.params
  const [messages, setMessages] = useState([])

  useFocusEffect(
    useCallback(() => {
      requestData(REQUEST.MESSAGES, convoData['convoId']).then((data) => {
        setMessages(data.messages)
      })
    }, [])
  )

  const onSend = useCallback((messages = []) => {
    setMessages((previousMessages) =>
      GiftedChat.append(previousMessages, messages)
    )
  }, [])

  return (
    <GiftedChat
      messages={messages}
      onSend={(messages) => onSend(messages)}
      user={{
        _id: 1,
      }}
    />
  )
}
