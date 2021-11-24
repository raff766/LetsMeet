import React from 'react'
import { View, Text } from 'react-native'

export default function EventScreen({ route }) {
  const eventData = route.params
  return (
    <View>
      <Text>{eventData.name}</Text>
      <Text>Date: {eventData.date}</Text>
      <Text>Host: {eventData.host}</Text>
      <Text>{eventData.participants} People</Text>
    </View>
  )
}
