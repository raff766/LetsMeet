import React from 'react'
import { View, Text } from 'react-native'
import GlobalStyles from '../styles/GlobalStyles'

export default function EventScreen({ route }) {
  const eventData = route.params
  return (
    <View style={{ ...GlobalStyles.background, alignItems: 'flex-start' }}>
      <Text style={GlobalStyles.header}>{eventData.name}</Text>
      <Text>Host: {eventData.host.name}</Text>
      <Text>Date: {eventData.date}</Text>
      <Text style={GlobalStyles.header}>About</Text>
      <Text>{eventData.description}</Text>
      <Text style={GlobalStyles.header}>Participants</Text>
      {eventData.participants.map((user) => (
        <Text key={user.userid}>{user.name}</Text>
      ))}
    </View>
  )
}
