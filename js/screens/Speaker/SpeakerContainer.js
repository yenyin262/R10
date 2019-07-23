// create query
// return about component
// props to about container

import React, { Component } from "react";
import { View, Text, StyleSheet, ActivityIndicator } from "react-native";
import { Query } from "react-apollo";
import { gql } from "apollo-boost";
import Speaker from "./Speaker";
import { colors } from "../../config/styles";
import { QUERY_SPEAKER } from "../Sessions/SessionsContainer";

class SpeakerContainer extends Component {
  render() {
    const { navigation } = this.props;
    // navigation name of object and navigate directs us to the directed route
    const speaker = navigation.getParam("Speaker");
    return (
      <View>
        <Query query={QUERY_SPEAKER} variables={{ id: speaker.id }}>
          {({ loading, data, error }) => {
            if (loading)
              return (
                <ActivityIndicator
                  animating={true}
                  size="large"
                  color={colors.Purple}
                  // style={styles.indicator}
                />
              );

            if (error) return <Text> Error :(</Text>;

            return <Speaker speaker={data.Session.speaker} session={session} />;
          }}
        </Query>
      </View>
    );
  }
}

export default SpeakerContainer;
