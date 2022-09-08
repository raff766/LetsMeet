import React from 'react'

import { TouchableOpacity, Text, View } from 'react-native'
import Tags from 'react-native-tags'
import profilestyles from '../styles/profilestyles'

export default function TagCard({ initialTags, onChangedTags }) {
  const renderTag = ({ tag, index, onPress }) => {
    return (
      <TouchableOpacity
        key={`${tag}-${index}`}
        onPress={onPress}
        style={profilestyles.tag}>
        <Text style={profilestyles.textTag}>{tag}</Text>
      </TouchableOpacity>
    )
  }

  return (
    <View style={profilestyles.screen}>
      <Tags
        containerStyle={profilestyles.tagContainer}
        textInputProps={{
          placeholderTextColor: '#D6D6D6',
          placeholder: 'Enter your hobbies.',
        }}
        inputStyle={profilestyles.taginput}
        initialTags={initialTags}
        onChangeTags={(tags) => {
          if (onChangedTags) onChangedTags(tags)
        }}
        renderTag={renderTag}
      />
    </View>
  )
}
