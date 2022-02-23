import React, { useState, useCallback, useEffect } from 'react'
import { GiftedChat } from 'react-native-gifted-chat'

// chat now displays, need to figure out a way to store the message or for now have the 
// messages sent be stored - ie leave message leave page and messages remain there when \
// returning to original user chat
// Also for some reason "Send" is only showing "Sen" 

export default function Chatscreen({ route }) {
    let name = route.params;
    const [messages, setMessages] = useState([]);
 
    useEffect(() => {  
      setMessages([
      {
        _id: 1,
             text: 'This is a test',
            createdAt: new Date(),
        user: {
            _id: 2,
            name: 'React Native',
            avatar: 'https://placeimg.com/140/140/any',
        },
       },
     ])
     }, [])
  
  const onSend = useCallback((messages = []) => {
    setMessages(previousMessages => GiftedChat.append(previousMessages, messages))
  }, [])

    return(
        <GiftedChat
        messages={messages}
        onSend={messages => onSend(messages)}
        user={{
          _id: 1,
        }}
      />
    );
}
