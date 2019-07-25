// create query
// return about component
// props to about container

import React, { Component } from "react";
import { View, Text, ActivityIndicator } from "react-native";
import { Query } from "react-apollo";
import { gql } from "apollo-boost";
import Sessions from "./Sessions";
import { colors } from "../../config/styles";
import FavesContext from "../../context/FavesContext";

const QUERY_SPEAKER = gql`
  query getSpeaker($id: ID!) {
    Session(id: $id) {
      speaker {
        id
        bio
        image
        name
        url
      }
    }
  }
`;

class SessionsContainer extends Component {
  static navigationOptions = {
    title: "Sessions",
    headerTitleStyle: {
      color: "white",
      fontSize: 24,
      fontFamily: "Montserrat",
      marginBottom: 10
    }
  };

  static contextType = FavesContext;
  render() {
    const { navigation } = this.props;

    // navigation name of object and navigate directs us to the directed route
    const session = navigation.getParam("Session");

    console.log(session, "my session");
    return (
      <View>
        <Query query={QUERY_SPEAKER} variables={{ id: session.id }}>
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

            return (
              <FavesContext.Consumer>
                {value => (
                  <Sessions
                    speaker={data.Session.speaker}
                    session={session}
                    favesFunctionality={value}
                    // addFaves={this.context.addFaves}
                    // removesFaves={this.context.removeFaves}
                    // checkForFaves={this.context.getFavedSessionIds}
                    navigation={this.props.navigation}
                  />
                )}
              </FavesContext.Consumer>
            );
          }}
        </Query>
      </View>
    );
  }
}

export default SessionsContainer;
