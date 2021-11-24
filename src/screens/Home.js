import React from 'react'
import { View } from 'react-native'
import { Text } from 'react-native-paper'
import EventCard from '../components/EventCard'
import GlobalStyles from '../core/GlobalStyles'

export default function Home({ navigation }) {
  return (
    <View style={GlobalStyles.background}>
      <Text style={GlobalStyles.header}>Your Events</Text>
      <EventCard
        eventData={{
          name: 'Test Event',
          date: 'October 25, 2021',
          host: 'Raffi',
          participants: 3,
        }}
        navigation={navigation}
      />
    </View>
  )
}
