// create query
// return about component
// props to about container

import React, { Component } from "react";
import { View, Text, StyleSheet, ActivityIndicator } from "react-native";
import { Query } from "react-apollo";
import { gql } from "apollo-boost";
import Schedule from "./Schedule";
import { colors } from "../../config/styles";

class ScheduleContainer extends Component {
  render() {
    return (
      <View>
        <Text>Schedule</Text>
      </View>
    );
  }
}

export default ScheduleContainer;
