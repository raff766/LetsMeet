import React, { useCallback, useState, useContext } from 'react'
import { StyleSheet, View } from 'react-native'
import { Button, Text } from 'react-native-paper'
import TextInput from '../components/TextInput'
import GlobalStyles from '../styles/GlobalStyles'
import DatePicker from '../components/DatePicker'
import { REQUEST, sendData } from '../core/server'
import { UserContext } from '../core/UserContext'

export default function CreateEventScreen({ navigation }) {
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [location, setLocation] = useState('')
  const [date, setDate] = useState(new Date())

  const { userId } = useContext(UserContext)

  const onSubmit = useCallback(() => {
    sendData(REQUEST.EVENT, {
      name: name,
      date: date.toISOString().slice(0, 10),
      description: description,
      hostId: userId,
      location: location,
      participantIds: [userId],
    }).then(() => navigation.goBack())
  }, [name, date, description, location])

  return (
    <View style={{ ...GlobalStyles.background, alignItems: 'flex-start' }}>
      <Text style={GlobalStyles.header}>Create a new Event</Text>
      <Text style={GlobalStyles.paragraph}>
        Give your event a name and add a description describing what you'll do.
      </Text>
      <TextInput
        label="Name"
        returnKeyType="next"
        value={name}
        onChangeText={(text) => setName(text)}
      />
      <TextInput
        label="Description"
        returnKeyType="next"
        value={description}
        onChangeText={(text) => setDescription(text)}
      />
      <TextInput
        label="Location"
        returnKeyType="next"
        value={location}
        onChangeText={(text) => setLocation(text)}
      />
      <Text style={GlobalStyles.paragraph}>
        Choose what date you will be hosting your event.
      </Text>
      <DatePicker onPicked={setDate} />
      <Button mode="contained" style={styles.submit} onPress={onSubmit}>
        Submit
      </Button>
    </View>
  )
}

const styles = StyleSheet.create({
  submit: {
    width: '100%',
    marginTop: 12,
  },
})
