import { useFocusEffect } from '@react-navigation/core'
import React, { useCallback, useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { Button, Text } from 'react-native-paper'
import EventCard from '../components/EventCard'
import { REQUEST, requestData } from '../core/server'
import GlobalStyles from '../styles/GlobalStyles'

export default function Home({ navigation }) {
  const [events, setEvents] = useState([])
  useFocusEffect(
    useCallback(
      () => requestData(REQUEST.EVENT, (data) => setEvents(data.events)),
      []
    )
  )

  return (
    <ScrollView
      contentContainerStyle={{
        ...GlobalStyles.background,
        flex: 0,
      }}>
      <View
        style={{
          width: '100%',
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <Text style={{ ...GlobalStyles.header, paddingVertical: 0 }}>
          Your Events
        </Text>
        <Button onPress={() => navigation.navigate('CreateEventScreen')}>
          Create
        </Button>
      </View>
      {events.map((event) => (
        <View key={event.eventid} style={styles.eventCardView}>
          <EventCard eventData={event} navigation={navigation} />
        </View>
      ))}
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  eventCardView: {
    marginVertical: 10,
  },
})
