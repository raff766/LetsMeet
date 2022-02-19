import React, { useCallback, useState, useContext } from 'react'
import { StyleSheet, View } from 'react-native'
import { Button, Text } from 'react-native-paper'
import TextInput from '../components/TextInput'
import GlobalStyles from '../styles/GlobalStyles'
import DatePicker from '../components/DatePicker'
import { REQUEST, sendData } from '../core/server'
import { UserContext } from '../core/UserContext'

export default function CreateEventScreen({ navigation }) {
  const [name, setName] = useState({ value: '', error: '' })
  const [description, setDescription] = useState({ value: '', error: '' })
  const [date, setDate] = useState(new Date())

  const { userId } = useContext(UserContext)

  const onSubmit = useCallback(() => {
    sendData(REQUEST.EVENT, {
      name: name.value,
      date: date.toISOString().slice(0, 10),
      description: description.value,
      hostId: userId,
      participantIds: [userId],
    })
    navigation.goBack()
  }, [name, date, description])

  return (
    <View style={{ ...GlobalStyles.background, alignItems: 'flex-start' }}>
      <Text style={GlobalStyles.header}>Create a new Event</Text>
      <Text style={GlobalStyles.paragraph}>
        Give your event a name and add a description describing what you'll do.
      </Text>
      <TextInput
        label="Name"
        returnKeyType="next"
        value={name.value}
        onChangeText={(text) => setName({ value: text, error: '' })}
        error={!!name.error}
        errorText={name.error}
      />
      <TextInput
        label="Description"
        returnKeyType="next"
        value={description.value}
        onChangeText={(text) => setDescription({ value: text, error: '' })}
        error={!!description.error}
        errorText={description.error}
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
