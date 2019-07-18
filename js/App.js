import React, { Component } from "react";
import { View } from "react-native";
import client from "./config/api";
import { ApolloProvider } from "react-apollo";

import AboutScreen from "./screens/About";

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <View>
          <AboutScreen />
        </View>
      </ApolloProvider>
    );
  }
}

export default App;
