// create query
// return about component
// props to about container

import React, { Component } from "react";
import { View, Text, StyleSheet, ActivityIndicator } from "react-native";
import Speaker from "./Speaker";

class SpeakerContainer extends Component {
  render() {
    const { navigation } = this.props;
    // navigation name of object and navigate directs us to the directed route
    const speaker = navigation.getParam("Speaker");
    return (
      <View>
        <Speaker speaker={speaker} />
      </View>
    );
  }
}

export default SpeakerContainer;
