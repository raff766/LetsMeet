import React, { useCallback, useState } from 'react'
import { Button } from 'react-native-paper'
import { StyleSheet, Text, View, Image } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import TextInput from '../components/TextInput'
import { REQUEST, sendData } from '../core/server'
import TagCard from '../components/TagCard'
import profilestyles from '../styles/profilestyles'

// Allows to edit thet profile screen

export default function PEdit({ route, navigation }) {
  const userId = route.params.userId
  const profile = route.params.profile
  const [name, setName] = useState(profile.name)
  const [bio, setBio] = useState(profile.bio)
  const [tags, setTags] = useState(profile.tags)

  const onSubmit = useCallback(() => {
    sendData(REQUEST.PROFILE, {
      userid: userId,
      name,
      bio,
      tags,
    }).then(() => navigation.goBack())
  }, [name, bio, tags])

  return (
    <View style={profilestyles.pcontainer}>
      <TouchableOpacity>
        <Image
          style={profilestyles.avataredit}
          source={{ uri: 'https://bootdey.com/img/Content/avatar/avatar6.png' }}
        />
        <Text style={{ alignSelf: 'center' }}>Tap to Edit Image</Text>
      </TouchableOpacity>
      <View style={profilestyles.action}>
        <Icon
          name="account"
          style={profilestyles.icon}
          color="black"
          size={25}
        />
        <TextInput
          placeholder="Name"
          placeholderTextColor="#666666"
          returnKeyType="next"
          value={name}
          onChangeText={(text) => setName(text)}
          autoCorrect={false}
          style={profilestyles.inputOther}
          error={!!name.error}
          errorText={name.error}
        />
      </View>
      {/* make bio container */}
      <View style={profilestyles.action}>
        <Icon
          style={profilestyles.icon}
          name="lead-pencil"
          color="black"
          size={25}
        />
        <TextInput
          placeholder="Bio/Description"
          placeholderTextColor="#666666"
          returnKeyType="next"
          value={bio}
          onChangeText={(text) => setBio(text)}
          multiline
          autoCorrect={false}
          style={profilestyles.bioinputOther}
          error={!!bio.error}
          errorText={bio.error}
        />
      </View>
      <View style={profilestyles.action}>
        <Icon
          style={profilestyles.icon}
          name="tag-multiple"
          color="black"
          size={25}
        />
        <TagCard initialTags={tags} onChangedTags={setTags} />
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
