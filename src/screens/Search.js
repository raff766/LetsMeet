/* eslint-disable react/jsx-boolean-value */
import { useFocusEffect } from '@react-navigation/core'
import React, { useState, useContext, useCallback } from 'react'
import { View, StyleSheet } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { Button, Text, TextInput } from 'react-native-paper'
import EventCard from '../components/EventCard'
import { REQUEST, requestData } from '../core/server'
import { UserContext } from '../core/UserContext'
import GlobalStyles from '../styles/GlobalStyles'

export default function Search({ navigation }) {
  const [events, setEvents] = useState([])
  const [textFilter, setTextFilter] = useState('')
  const { userId } = useContext(UserContext)

  useFocusEffect(
    useCallback(() => {
      requestData(REQUEST.EVENT).then((data) => {
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
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}>
        <Text style={{ ...GlobalStyles.header, paddingVertical: 0 }}>
          Search For Events
        </Text>
        <TextInput
          label="Search"
          value={textFilter}
          onChangeText={(text) => setTextFilter(text)}
        />
      </View>
      {events.flatMap((event) => {
        if (event.participants.some((user) => user.userid === userId)) return []
        if (!event.name.toLowerCase().includes(textFilter.toLocaleLowerCase()))
          return []
        return (
          <View key={event.eventid} style={styles.eventCardView}>
            <EventCard eventData={event} navigation={navigation} />
          </View>
        )
      })}
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
