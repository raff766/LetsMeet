import React from 'react'
import { Button, Text } from 'react-native-paper'
import { View } from 'react-native'
import GlobalStyles from '../styles/GlobalStyles'
import { StyleSheet } from 'react-native'
import { UserContext } from '../core/UserContext'

export default function EventScreen({ route }) {
  const eventData = route.params
  
  const onSubmit = useCallback(() => {
    const { userId } = useContext(UserContext)
    sendData(REQUEST.EVENT, {
      userid: userId,
      eventid: eventData["eventid"],
    })
    navigation.goBack()
  }, )

  return (
    <View style={{ ...GlobalStyles.background, alignItems: 'flex-start'}}>
      <View style={{
          width: '100%',
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <Text style={GlobalStyles.header}>{eventData.name}</Text>
        <Button color='red' onPress={() => console.log("Leave Button Pressed")}>
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