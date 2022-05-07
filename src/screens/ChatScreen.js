/* eslint-disable no-shadow */
import { useFocusEffect } from '@react-navigation/core'
import React, { useEffect, useState, useCallback, useContext} from 'react'
import { GiftedChat } from 'react-native-gifted-chat'
import { socket, REQUEST, requestData } from '../core/server'
import { UserContext } from '../core/UserContext'

export default function ChatScreen({ route }) {
  const convoData = route.params
  const [messages, setMessages] = useState([])
  const { userId } = useContext(UserContext)

  useFocusEffect(
    useCallback(() => {
      requestData(REQUEST.MESSAGES, convoData.convoId).then((data) => {
        setMessages(data.messages)
      })
    }, [])
  )

  socket.on('connect', () => {
    console.log('Connected:', socket.connected);
  });

  const onSend = useCallback((messages = []) => {
    setMessages((previousMessages) =>
      GiftedChat.append(previousMessages, messages)
    )
    socket.emit('send', {'fromUid':userId,
                        'toUid':String(convoData.userId),
                        'convoId':String(convoData.convoId),
                        'message':messages});
    console.log("Sent message!!!!!!");
  }, [])

  const onGetMsg = useCallback((messages = []) => {
    setMessages((previousMessages) =>
      GiftedChat.append(previousMessages, messages['message'][0])
    )
    console.log(messages);
  }, [])

  useEffect(() => {
    socket.on(String(userId) + String(convoData.convid), (msg) => {
      console.log(msg)
      onGetMsg(msg)
    })
  }, [socket])

  return (
    <GiftedChat
      messages={messages}
      onSend={(messages) => onSend(messages)}
      user={{
        _id: userId,
      }}
    />
  )
}