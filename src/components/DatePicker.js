import React, { useState } from 'react'
import { Button } from 'react-native-paper'
import { View, Platform } from 'react-native'
import DateTimePicker from '@react-native-community/datetimepicker'

export default function DatePicker({ onPicked }) {
  const [date, setDate] = useState(new Date())
  const [showDate, setShowDate] = useState(false)
  const [showTime, setShowTime] = useState(false)

  const onChooseDate = (event, selectedDate) => {
    const currentDate = selectedDate || date
    setShowDate(Platform.OS === 'ios')
    setDate(currentDate)
    setShowTime(true)
    onPicked(currentDate)
  }

  const onChooseTime = (event, selectedTime) => {
    const currentDate = date
    currentDate.setTime(selectedTime.getTime())
    setShowTime(Platform.OS === 'ios')
    setDate(currentDate)
    onPicked(currentDate)
  }

  function formatAMPM(dateToFormat) {
    let hours = dateToFormat.getHours()
    let minutes = dateToFormat.getMinutes()
    const ampm = hours >= 12 ? 'pm' : 'am'
    hours %= 12
    hours = hours || 12 // the hour '0' should be '12'
    minutes = minutes < 10 ? '0' + minutes : minutes
    const strTime = hours + ':' + minutes + ' ' + ampm
    return strTime
  }

  return (
    <View>
      <View>
        <Button onPress={() => setShowDate(true)}>
          {date.toLocaleDateString() + ' ' + formatAMPM(date)}
        </Button>
      </View>
      {showDate && <DateTimePicker value={date} onChange={onChooseDate} />}
      {showTime && (
        <DateTimePicker value={date} onChange={onChooseTime} mode="time" />
      )}
    </View>
  )
}
