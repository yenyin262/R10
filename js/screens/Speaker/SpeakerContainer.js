// create query
// return about component
// props to about container

import React, { Component } from "react";
import { View, TouchableOpacity, Text } from "react-native";
import Speaker from "./Speaker";
import styles from "./styles";
import Icon from "react-native-vector-icons/Ionicons";

class SpeakerContainer extends Component {
  render() {
    const { navigation } = this.props;
    // navigation name of object and navigate directs us to the directed route
    const speaker = navigation.getParam("Speaker");
    return (
      <View style={{ backgroundColor: "black", height: "100%" }}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <View style={styles.modal}>
            <Icon name="ios-close" size={45} style={styles.icon} />
            <Text style={styles.aboutSpeakerText}> About the Speaker </Text>
          </View>
        </TouchableOpacity>
        <Speaker speaker={speaker} />
      </View>
    );
  }
}

export default SpeakerContainer;
