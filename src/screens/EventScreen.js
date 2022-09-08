import React, { useContext } from 'react'
import { Button, Text } from 'react-native-paper'
import { View, StyleSheet, Image } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import GlobalStyles from '../styles/GlobalStyles'
import { REQUEST, sendData } from '../core/server'
import { UserContext } from '../core/UserContext'

export default function EventScreen({ route, navigation }) {
  const eventData = route.params
  const { userId } = useContext(UserContext)

  const removeEvent = () => {
    sendData(REQUEST.REMOVEEVENT, {
      eventid: eventData['eventid'],
      userid: userId,
    }).then(() => navigation.goBack())
  }

  const leaveEvent = () => {
    sendData(REQUEST.LEAVEEVENT, {
      eventid: eventData['eventid'],
      userid: userId,
    }).then(() => navigation.goBack())
  }

  const joinEvent = () => {
    sendData(REQUEST.PARTICIPANT, {
      eventid: eventData['eventid'],
      userid: userId,
    }).then(() => navigation.goBack())
  }

  const actionButton = () => {
    if (userId === eventData.host.userid) {
      return (
        <Button color="red" onPress={removeEvent}>
          Delete
        </Button>
      )
    }

    if (eventData.participants.some((user) => user.userid === userId)) {
      return (
        <Button color="red" onPress={leaveEvent}>
          Leave
        </Button>
      )
    }
    return (
      <Button color="blue" onPress={joinEvent}>
        Join
      </Button>
    )
  }

  return (
    <View style={{ ...GlobalStyles.background, alignItems: 'flex-start' }}>
      <View
        style={{
          width: '100%',
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <Text style={GlobalStyles.header}>{eventData.name}</Text>
        {actionButton()}
      </View>
      <Image style={styles.image} source={{ uri: eventData.image }} />
      <Text style={GlobalStyles.header}>About</Text>
      <View style={styles.eventInfo}>
        <Text>Host: {eventData.host.name}</Text>
        <Text>Date: {eventData.date}</Text>
        <Text>Description: {eventData.description}</Text>
      </View>
      <Text style={GlobalStyles.header}>Location</Text>
      <View style={styles.eventInfo}>
        <Text>{eventData.location}</Text>
      </View>
      <Text style={GlobalStyles.header}>Participants</Text>
      <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
        {eventData.participants.map((user) => (
          <View key={user.userid} style={styles.userInfo}>
            <TouchableOpacity
              onPress={() => navigation.navigate('Profile', user)}>
              <Text>{user.name}</Text>
            </TouchableOpacity>
          </View>
        ))}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  eventInfo: {
    backgroundColor: '#ececec',
    padding: 15,
    borderRadius: 20,
  },
  userInfo: {
    flexDirection: 'row',
    backgroundColor: '#ddd',
    padding: 15,
    borderRadius: 20,
    margin: 5,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 5,
    marginBottom: 10,
    alignSelf: 'center',
  },
})
