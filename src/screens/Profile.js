import { useFocusEffect } from '@react-navigation/core'
import React, { useCallback, useState, useContext } from 'react'
import { REQUEST, requestData, sendData } from '../core/server'
import { Text, View, Image } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import profilestyles from '../styles/profilestyles'
import { UserContext } from '../core/UserContext'

// change all profilestyles into GlobalStyles

export default function Profile({ route, navigation }) {
  const currUserId = route.params.userid
  const { userId } = useContext(UserContext)
  const [profile, setProfile] = useState({})
  const [tags, setTags] = useState([])
  const [convoId, setConvoId] = useState(-1)

  useFocusEffect(
    useCallback(() => {
      requestData(REQUEST.PROFILE, currUserId).then((data) => {
        setProfile(data)
        setTags(data.tags)
      }).then(() => {
        if (currUserId != userId) {
          sendData(REQUEST.CONVERSATION, {
            userid: userId,
            other_userid: currUserId,
          }).then((data) => setConvoId(data.convoid))
        }
      })
    }, [])
  )

  const actionButton = () => {
    if (currUserId == userId) {
      return (
        <TouchableOpacity onPress={() => navigation.navigate('PEdit', { userId, profile })}>
          <Icon name="account-edit" size={50} style={profilestyles.editlogo} />
        </TouchableOpacity>
      )
    } else {
      const name = route.params.name
      const userId = currUserId
      return (
        <TouchableOpacity onPress={() => navigation.navigate('ChatScreen', { name, convoId, userId } )}>
          <Icon name="chat-plus" size={50} style={profilestyles.editlogo} />
        </TouchableOpacity>
      )
    }
  }

  const interests = () => {
    if (tags.length != 0)
      return (
        <View style={profilestyles.line}>
          <Text style={profilestyles.interests}>Interests</Text>
        </View>
      )
  }

  const logoutButton = () => {
    if (currUserId == userId)
      return (
        <View style={{ flex: 1, justifyContent: 'flex-end', marginBottom: 40, marginLeft: 10 }}>
          <TouchableOpacity onPress={() => navigation.navigate('StartScreen')}>
            <Icon name="logout" size={50} style={profilestyles.editlogo}/>
          </TouchableOpacity>
        </View>
      )
  }

  return (
    <View style={{flex: 1}}>
      <View style={profilestyles.header}>
        {actionButton()}
      </View>
      {/* Base image as profile screen, later on would take photo from phone or camera */}
      <Image
        style={profilestyles.avatar}
        source={{ uri: 'https://bootdey.com/img/Content/avatar/avatar6.png' }}
      />

      <View style={profilestyles.body}>
        <Text style={profilestyles.name}>
          {profile.name}
        </Text>
        <Text style={profilestyles.bio}>
          {profile.bio}
        </Text>
        {interests()}
        <View style={profilestyles.tagsWrap}>
          {tags.map((tag, index) => (
            <View key={index} style={profilestyles.tags}>
              <Text>{tag}</Text>
            </View>
          ))}
        </View>
      </View>
      {logoutButton()}
    </View>
  )
}