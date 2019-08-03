import React, { Component } from "react";
import { View, Text, Platform } from "react-native";
import { Query } from "react-apollo";
import { gql } from "apollo-boost";
import About from "./About";
import LoaderScreen from "../../components/LoadingScreen";
import { colors, fonts } from "../../config/styles";

const QUERY_ABOUT = gql`
  query {
    allConducts {
      id
      title
      description
    }
  }
`;
class AboutContainer extends Component {
  static navigationOptions = {
    title: "About",
    headerTitleStyle: {
      color: "white",
      fontSize: 24,
      ...Platform.select({
        android: { marginVertical: 10, fontFamily: fonts.baseFontRegular },
        ios: { marginBottom: 10, fontFamily: fonts.baseFont }
      })
    }
  };
  render() {
    return (
      <View>
        <Query query={QUERY_ABOUT}>
          {({ loading, data, error }) => {
            if (loading) return <LoaderScreen />;
            if (error) return <Text> Error :(</Text>;
            return <About data={data} />;
          }}
        </Query>
      </View>
    );
  }
}

export default AboutContainer;
