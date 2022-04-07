import React from 'react'
import { Text, View, Image} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { profilestyles } from '../../styles/ProfileStyle'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import PEdit from '../../screens/Profile'

// change all profilestyles into GlobalStyles


export default function Profile({route, navigation }) {
  let name = route.params
    return (
      <View>
          <View style={profilestyles.header}>
            <TouchableOpacity
            onPress={()=> navigation.navigate("PEdit", name)}>
              <Icon name='account-edit' size={50} style={profilestyles.editlogo}/> 
            </TouchableOpacity>
          </View>
          {/* Base image as profile screen, later on would take photo from phone or camera */}
         <Image style={profilestyles.avatar} source={{uri: 'https://bootdey.com/img/Content/avatar/avatar6.png'}}/>
          <View style={profilestyles.body}>
            <View>
                <Text style={profilestyles.info}>- College Student at Cal State - Northridge</Text>
            </View>
            <View>    
                <Text style={profilestyles.description}>- Likes Music, Hanging out with friends and sleeping.</Text>
            </View>
            <View style={profilestyles.bodyContent}>
            </View>
        </View>
      </View>
    );
}
