import React, { Component } from "react";
import AsyncStorage from "@react-native-community/async-storage";
// create context is what
// allows us to do similar things to a global state
// create a context component insert a value
const FavesContext = React.createContext();

class FavesProvider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      faveIds: [],
      finalResult: [],
      test: true
    };
  }
  async componentDidMount() {
    await this.getFavedSessionIds();
    const { finalResult } = this.state;
    this.setState({ faveIds: finalResult });
  }
  async getFavedSessionIds() {
    return AsyncStorage.getAllKeys().then(keys => {
      return AsyncStorage.multiGet(keys).then(result => {
        var finalResultx = [];
        console.log(result, "results");
        for (const i of result) {
          finalResultx.push(i[0]);
        }

        this.setState({ faveIds: finalResultx });
        this.setState({ finalResult: finalResultx });
        console.log(finalResultx, "myFaves");
        return finalResultx;
      });
    });
  }

  async removeFaves(sessionId) {
    try {
      await AsyncStorage.removeItem(sessionId);
      console.log("BANANAS ARE GOOD FOR YOU");
    } catch (error) {
      console.log(error);
    }
    await this.getFavedSessionIds();
  }

  async addFaves(sessionId) {
    console.log(sessionId, "sessionid");
    try {
      await AsyncStorage.setItem(sessionId, "savedfave");
    } catch (error) {
      console.log(error);
    }
    await this.getFavedSessionIds();
  }

  render() {
    return (
      //FavesContext.Provider - is the beginning where we put values
      // so we can use later
      <FavesContext.Provider
        value={{
          getFavedSessionIds: this.getFavedSessionIds.bind(this),
          addFaves: this.addFaves.bind(this),
          removeFaves: this.removeFaves.bind(this),
          faveIds: this.state.faveIds,
          test: this.state.test
        }}
      >
        {this.props.children}
      </FavesContext.Provider>
    );
  }
}

export { FavesProvider };
export default FavesContext;
