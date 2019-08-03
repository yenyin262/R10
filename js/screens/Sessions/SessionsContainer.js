import React, { Component } from "react";
import { View, Text, Platform } from "react-native";
import { Query } from "react-apollo";
import { gql } from "apollo-boost";
import Sessions from "./Sessions";
import FavesContext from "../../context/FavesContext";
import LoaderScreen from "../../components/LoadingScreen";
import PropTypes from "prop-types";
import { fonts } from "../../config/styles";

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
        android: { marginVertical: 10, fontFamily: fonts.baseFontRegular },
        ios: { marginBottom: 10, fontFamily: fonts.baseFont }
      })
    }
  };

  static contextType = FavesContext;

  render() {
    const { navigation } = this.props;

    const session = navigation.getParam("Session");

    return (
      <View>
        <Query query={QUERY_SPEAKER} variables={{ id: session.id }}>
          {({ loading, data, error }) => {
            if (loading) return <LoaderScreen />;

            if (error) return <Text> Error :(</Text>;

            return (
              <Sessions
                speaker={data.Session.speaker}
                session={session}
                addFaves={this.context.addFaves}
                removesFaves={this.context.removeFaves}
                checkForFaves={this.context.getFavedSessionIds}
                navigation={this.props.navigation}
                faveIds={this.context.faveIds}
              />
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
