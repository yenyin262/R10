// create query
// return about component
// props to about container

import React, { Component } from "react";
import { View, TouchableOpacity, Text } from "react-native";
import Speaker from "./Speaker";
import styles from "./styles";

class SpeakerContainer extends Component {
  render() {
    const { navigation } = this.props;
    // navigation name of object and navigate directs us to the directed route
    const speaker = navigation.getParam("Speaker");
    return (
      <View style={{ backgroundColor: "black", height: "100%" }}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={{ color: "white", paddingTop: 30 }}>
            X<Text style={styles.faveText}> About the Speaker </Text>
          </Text>
        </TouchableOpacity>
        <Speaker speaker={speaker} />
      </View>
    );
  }
}

export default SpeakerContainer;
