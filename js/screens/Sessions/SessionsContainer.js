// create query
// return about component
// props to about container

import React, { Component } from "react";
import { View, Text, ActivityIndicator, Platform } from "react-native";
import { Query } from "react-apollo";
import { gql } from "apollo-boost";
import Sessions from "./Sessions";
import { colors } from "../../config/styles";
import FavesContext from "../../context/FavesContext";
import LoaderScreen from "../../components/LoadingScreen";

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
  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     faveIds: []
  //   };
  // }

  // async componentDidMount() {
  //   try {
  //     const myFaves = await this.context.getFavedSessionIds();
  //    return myFaves
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

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

export default SessionsContainer;
