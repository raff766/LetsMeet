import { useFocusEffect } from '@react-navigation/core'
import React, { useCallback, useState, useContext } from 'react'
import { StyleSheet, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { Button, Text } from 'react-native-paper'
import EventCard from '../components/EventCard'
import { REQUEST, requestData } from '../core/server'
import { UserContext } from '../core/UserContext'
import GlobalStyles from '../styles/GlobalStyles'

export default function Home({ navigation }) {
  const [events, setEvents] = useState([])
  const { userId } = useContext(UserContext)

  useFocusEffect(
    useCallback(() => {
      requestData(REQUEST.USEREVENTS, userId).then((data) => {
        setEvents(data.events)
      })
    }, [])
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
    backgroundColor: '#ade',
    padding: 12,
    borderRadius: 10,
  },
})
