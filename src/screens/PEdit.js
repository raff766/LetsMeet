import React from 'react'
import { Text, View, Image, TextInput } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import TagCard from '../components/TagCard'
import profilestyles from '../styles/profilestyles'

// Allows to edit thet profile screen

export default function PEdit({ route }) {
  let username = route.params
  return (
    <View style={profilestyles.pcontainer}>
      <TouchableOpacity onPress={() => {}}>
        <Image
          style={profilestyles.avataredit}
          source={{ uri: 'https://bootdey.com/img/Content/avatar/avatar6.png' }}/>
        <Text style={{ alignSelf: 'center' }}>Tap to Edit Image</Text>
      </TouchableOpacity>
      {/* <Text style={{ fontSize: 20, alignItems: 'center', margin: 10 }}>
        {username}
      </Text> */}
      <View>
        <View style={profilestyles.action}>
          <Icon name="account" color="black" size={25} />
          <TextInput
            placeholder="User Name"
            placeholderTextColor="#666666"
            autoCorrect={false}
            style={profilestyles.inputOther}
          />
        </View>
        <View style={profilestyles.action}>
              <Icon name='account' color='black' size={25}/>
              <TextInput style={profilestyles.inputOther}
                    placeholder='Name'
                    placeholderTextColor='#666666'
                    autoCorrect={false}/>
        </View>
        {/* make bio container */}
        <View style={profilestyles.action}>
          <Icon name="lead-pencil" color="black" size={25} />
          <TextInput
            placeholder='Bio/Description'
            placeholderTextColor='#666666'
            multiline={true}
            autoCorrect={false}
            style={profilestyles.inputOther}
          />
        </View>
        <View style={profilestyles.action}>
          <Icon name="tag-multiple" color="black" size={25}/>
          <TagCard></TagCard>
        </View>
      </View>
    </View>
  )
}
