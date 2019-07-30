// create query
// return about component
// props to about container

import React, { Component } from "react";
import { View, Text, Platform } from "react-native";
import { Query } from "react-apollo";
import { gql } from "apollo-boost";
import Sessions from "./Sessions";
import FavesContext from "../../context/FavesContext";
import LoaderScreen from "../../components/LoadingScreen";
import PropTypes from "prop-types";

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
    title: "Session",
    headerTitleStyle: {
      color: "white",
      fontSize: 24,
      ...Platform.select({
        android: { marginVertical: 10, fontFamily: "Montserrat-Regular" },
        ios: { marginBottom: 10, fontFamily: "Montserrat" }
      })
    }
  };

  static contextType = FavesContext;

  render() {
    const { navigation } = this.props;

    // navigation name of object and navigate directs us to the directed route
    const session = navigation.getParam("Session");
    console.log(`context test value is ${JSON.stringify(this.context)}`);

    return (
      <View>
        <Query query={QUERY_SPEAKER} variables={{ id: session.id }}>
          {({ loading, data, error }) => {
            if (loading) return <LoaderScreen />;

            if (error) return <Text> Error :(</Text>;

            return (
              // <FavesContext.Consumer>
              //   {value => (
              <Sessions
                speaker={data.Session.speaker}
                session={session}
                // favesFunctionality={value}
                addFaves={this.context.addFaves}
                removesFaves={this.context.removeFaves}
                checkForFaves={this.context.getFavedSessionIds}
                navigation={this.props.navigation}
                faveIds={this.context.faveIds}
              />
              //   )}
              // </FavesContext.Consumer>
            );
          }}
        </Query>
      </View>
    );
  }
}

SessionsContainer.propTypes = {
  navigation: PropTypes.object.isRequired
};
export default SessionsContainer;
