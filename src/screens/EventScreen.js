import React from 'react'
import { Text } from 'react-native-paper'
import { View } from 'react-native'
import GlobalStyles from '../styles/GlobalStyles'
import { StyleSheet } from 'react-native'

export default function EventScreen({ route }) {
  const eventData = route.params
  return (
    <View style={{ ...GlobalStyles.background, alignItems: 'flex-start' }}>
      <Text style={GlobalStyles.header}>{eventData.name}</Text>
      <View style={styles.eventInfo}>
        <Text>Host: {eventData.host.name}</Text>
        <Text>Date: {eventData.date}</Text>
      </View>
      <Text style={GlobalStyles.header}>About</Text>
      <Text style={styles.eventInfo}>{eventData.description}</Text>
      <Text style={GlobalStyles.header}>Participants</Text>
      <View style={styles.eventInfo}>
        {eventData.participants.map((user) => (
          <Text key={user.userid}>{user.name}</Text>
        ))}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  eventInfo: {
    backgroundColor: '#ddd',
    padding: 10,
    borderRadius: 20,
  },
})