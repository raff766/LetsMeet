import React, { useCallback, useContext } from 'react'
import { Button, Text } from 'react-native-paper'
import { View } from 'react-native'
import GlobalStyles from '../styles/GlobalStyles'
import { StyleSheet } from 'react-native'
import { REQUEST, sendData } from '../core/server'
import { UserContext } from '../core/UserContext'

export default function EventScreen({ route, navigation }) {
  const eventData = route.params
  const { userId } = useContext(UserContext)

  const removeEvent = useCallback(() => {
    sendData(REQUEST.REMOVEEVENT, {
      eventid: eventData['eventid'],
      userid: userId,
    })
    navigation.goBack()
  }, [])

  return (
    <View style={{ ...GlobalStyles.background, alignItems: 'flex-start'}}>
      <View style={{
          width: '100%',
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <Text style={GlobalStyles.header}>{eventData.name}</Text>
        <Button color='red' onPress={removeEvent}>
          Leave
        </Button>
      </View>
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