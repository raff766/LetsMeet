import React from 'react'
import { View, Text } from 'react-native'
import GlobalStyles from '../core/GlobalStyles'

export default function EventScreen({ route }) {
  const eventData = route.params
  return (
    <View style={{ ...GlobalStyles.background, alignItems: 'flex-start' }}>
      <Text style={GlobalStyles.header}>{eventData.name}</Text>
      <Text>Host: {eventData.host}</Text>
      <Text>Date: {eventData.date}</Text>
      <Text style={GlobalStyles.header}>About</Text>
      <Text>{eventData.description}</Text>
      <Text style={GlobalStyles.header}>Participants</Text>
      {eventData.participants.map((user) => (
        <Text>{user.name}</Text>
      ))}
    </View>
  )
}
