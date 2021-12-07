import React, { useState } from 'react'
import { Button } from 'react-native-paper'
import { View, Platform } from 'react-native'
import DateTimePicker from '@react-native-community/datetimepicker'

export default function DatePicker({ onPicked }) {
  const [date, setDate] = useState(new Date())
  const [show, setShow] = useState(false)

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date
    setShow(Platform.OS === 'ios')
    setDate(currentDate)
    onPicked(currentDate)
  }

  return (
    <View>
      <View>
        <Button onPress={() => setShow(true)}>{date.toDateString()}</Button>
      </View>
      {show && <DateTimePicker value={date} onChange={onChange} />}
    </View>
  )
}
