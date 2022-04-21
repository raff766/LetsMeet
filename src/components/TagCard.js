import React, { Component } from 'react';

import {TouchableOpacity, Text, View } from 'react-native';
import Tags from 'react-native-tags';
import profilestyles from '../styles/profilestyles';

class TagCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      initialTags: [],
      initialText: '',
    };
  }

  renderTag = ({ tag, index, onPress, deleteTagOnPress, readonly }) => {
    return (
      <TouchableOpacity
        key={`${tag}-${index}`}
        onPress={onPress}
        style={profilestyles.tag}>
        <Text style={profilestyles.textTag}>{tag}</Text>
      </TouchableOpacity>
    );
  };

  render() {
    return (
      <View style={profilestyles.screen}>
        <Tags
          containerStyle={profilestyles.tagContainer}
          initialText={this.state.initialText}
          textInputProps={{
            placeholderTextColor: '#D6D6D6',
            placeholder: 'Enter your hobbies.',
          }}
          inputStyle={profilestyles.taginput}
          initialTags={this.state.initialTags}
          onChangeTags={this.onChangeTags}
          onTagPress={this.onTagPress}
          renderTag={this.renderTag}
        />
      </View>
    );
  }

  onTagPress = (index, tagLabel, event, deleted) => {
    console.log(index, tagLabel, event, deleted ? 'deleted' : 'not deleted');
  };

  onChangeTags = tags => {
    this.setState({ initialTags: tags });
  };
}

export default TagCard;