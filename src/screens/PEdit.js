import React, { useCallback, useState } from 'react'
import { REQUEST, sendData } from '../core/server'
import { Button } from 'react-native-paper'
import { StyleSheet, Text, View, Image } from 'react-native'
import TextInput from '../components/TextInput'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import TagCard from '../components/TagCard'
import profilestyles from '../styles/profilestyles'

// Allows to edit thet profile screen

export default function PEdit({ route, navigation }) {
  const userId = route.params.userId
  const profile = route.params.profile
  const [name, setName] = useState(profile.name)
  const [bio, setBio] = useState(profile.bio)
  const [tags, setTags] = useState(['hello', 'fuck you'])

  const onSubmit = useCallback(() => {
    sendData(REQUEST.PROFILE, {
      userid: userId,
      name: name.value,
      bio: bio.value,
      tags: profile.tags,
    })
    navigation.goBack()
  }, [name, bio])

  return (
    <View style={profilestyles.pcontainer}>
      <TouchableOpacity onPress={() => {}}>
        <Image
          style={profilestyles.avataredit}
          source={{ uri: 'https://bootdey.com/img/Content/avatar/avatar6.png' }}/>
        <Text style={{ alignSelf: 'center' }}>Tap to Edit Image</Text>
      </TouchableOpacity>
      <View style={profilestyles.action}>
        <Icon name='account' color='black' size={25}/>
        <TextInput
          placeholder='Name'
          placeholderTextColor='#666666'
          returnKeyType="next"
          value={name.value}
          onChangeText={(text) => setName({ value: text, error: '' })}
          autoCorrect={false}
          style={profilestyles.inputOther}
          error={!!name.error}
          errorText={name.error}
        />
      </View>
      {/* make bio container */}
      <View style={profilestyles.action}>
        <Icon name="lead-pencil" color="black" size={25} />
        <TextInput
          placeholder='Bio/Description'
          placeholderTextColor='#666666'
          returnKeyType="next"
          value={bio.value}
          onChangeText={(text) => setBio({ value: text, error: '' })}
          multiline={true}
          autoCorrect={false}
          style={profilestyles.inputOther}
          error={!!bio.error}
          errorText={bio.error}
        />
      </View>
      <View style={profilestyles.action}>
        <Icon name="tag-multiple" color="black" size={25}/>
        <TagCard initialTags={tags} />
      </View>
      <Button mode="contained" style={styles.submit} onPress={onSubmit}>
        Save
      </Button>
    </View>
  )
}

const styles = StyleSheet.create({
  submit: {
    width: '100%',
    marginTop: 15,
  },
})