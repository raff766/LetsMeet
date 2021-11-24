import React from 'react'
import { Text, StyleSheet } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

export default function EventCard({ eventData, navigation }) {
  return (
    <TouchableOpacity
      style={styles.card}
      onPress={() => navigation.navigate('EventScreen', eventData)}>
      <Text style={styles.title}>{eventData.name}</Text>
      <Text>Date: {eventData.date}</Text>
      <Text>Host: {eventData.host}</Text>
      <Text>{eventData.participants} People</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  card: {
    alignSelf: 'flex-start',
    minWidth: '100%',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
})
