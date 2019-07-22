// create query
// return about component
// props to about container

import React, { Component } from "react";
import { View, Text, StyleSheet, ActivityIndicator } from "react-native";
import { Query } from "react-apollo";
import { gql } from "apollo-boost";
import Speaker from "./Speaker";
import { colors } from "../../config/styles";

class SpeakerContainer extends Component {
  render() {
    return (
      <View>
        <Text>Speaker</Text>
      </View>
    );
  }
}

export default SpeakerContainer;
