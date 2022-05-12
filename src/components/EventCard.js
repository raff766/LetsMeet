import React from 'react'
import { Text } from 'react-native-paper'
import { StyleSheet, Image, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

export default function EventCard({ eventData, navigation }) {
  return (
    <TouchableOpacity
      style={styles.card}
      onPress={() => navigation.navigate('EventScreen', eventData)}>
      <View style={{ flexDirection: 'row' }}>
        <Image
          style={styles.image}
          source={{ uri: eventData.image }}
        />
        <View>
          <Text style={styles.title}>{eventData.name}</Text>
          <Text>Date: {eventData.date}</Text>
          <Text>Host: {eventData.host.name}</Text>
          <Text>{eventData.participants.length} People</Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  card: {
    minWidth: '100%',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 63,
    marginBottom: 10,
    marginRight: 20,
    alignSelf: 'center',
  },
})
