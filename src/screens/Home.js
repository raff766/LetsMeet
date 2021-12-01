import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { Button, Text } from 'react-native-paper'
import EventCard from '../components/EventCard'
import GlobalStyles from '../core/GlobalStyles'

export default function Home({ navigation }) {
  const [events, setEvents] = useState([
    {
      key: 0,
      name: 'Test Event',
      date: 'October 25, 2021',
      description: 'Hey, everyone! Welcome to our test event!',
      host: 'Raffi',
      participants: [
        { email: 'raff@gmail.com', name: 'Raffi' },
        { email: 'Mau@gmail.com', name: 'Mau' },
        { email: 'David@gmail.com', name: 'David' },
      ],
    },
    {
      key: 1,
      name: 'Test Event',
      date: 'October 25, 2021',
      description: 'Hey, everyone! Welcome to our test event!',
      host: 'Raffi',
      participants: [
        { email: 'raff@gmail.com', name: 'Raffi' },
        { email: 'Mau@gmail.com', name: 'Mau' },
        { email: 'David@gmail.com', name: 'David' },
      ],
    },
    {
      key: 2,
      name: 'Test Event',
      date: 'October 25, 2021',
      description: 'Hey, everyone! Welcome to our test event!',
      host: 'Raffi',
      participants: [
        { email: 'raff@gmail.com', name: 'Raffi' },
        { email: 'Mau@gmail.com', name: 'Mau' },
        { email: 'David@gmail.com', name: 'David' },
      ],
    },
    {
      key: 3,
      name: 'Test Event',
      date: 'October 25, 2021',
      description: 'Hey, everyone! Welcome to our test event!',
      host: 'Raffi',
      participants: [
        { email: 'raff@gmail.com', name: 'Raffi' },
        { email: 'Mau@gmail.com', name: 'Mau' },
        { email: 'David@gmail.com', name: 'David' },
      ],
    },
    {
      key: 4,
      name: 'Test Event',
      date: 'October 25, 2021',
      description: 'Hey, everyone! Welcome to our test event!',
      host: 'Raffi',
      participants: [
        { email: 'raff@gmail.com', name: 'Raffi' },
        { email: 'Mau@gmail.com', name: 'Mau' },
        { email: 'David@gmail.com', name: 'David' },
      ],
    },
    {
      key: 5,
      name: 'Test Event',
      date: 'October 25, 2021',
      description: 'Hey, everyone! Welcome to our test event!',
      host: 'Raffi',
      participants: [
        { email: 'raff@gmail.com', name: 'Raffi' },
        { email: 'Mau@gmail.com', name: 'Mau' },
        { email: 'David@gmail.com', name: 'David' },
      ],
    },
    {
      key: 6,
      name: 'Test Event1',
      date: 'October 25, 2021',
      description: 'Hey, everyone! Welcome to our test event!',
      host: 'Raffi',
      participants: [
        { email: 'raff@gmail.com', name: 'Raffi' },
        { email: 'Mau@gmail.com', name: 'Mau' },
        { email: 'David@gmail.com', name: 'David' },
      ],
    },
  ])

  return (
    <ScrollView
      contentContainerStyle={{
        ...GlobalStyles.background,
        flex: 0,
        alignItems: 'flex-start',
      }}>
      <View
        style={{
          minWidth: '100%',
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
        <View style={styles.eventCardView}>
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
