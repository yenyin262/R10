import React, { Component } from "react";
import AsyncStorage from "@react-native-community/async-storage";

const FavesContext = React.createContext();

class FavesProvider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      faveIds: [],
      finalResult: []
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
        let finalResultx = [];

        for (const i of result) {
          finalResultx.push(i[0]);
        }

        this.setState({ faveIds: finalResultx });
        this.setState({ finalResult: finalResultx });

        return finalResultx;
      });
    });
  }

  async removeFaves(sessionId) {
    try {
      await AsyncStorage.removeItem(sessionId);
    } catch (error) {
      console.log(error);
    }
    await this.getFavedSessionIds();
  }

  async addFaves(sessionId) {
    try {
      await AsyncStorage.setItem(sessionId, "savedfave");
    } catch (error) {
      console.log(error);
    }
    await this.getFavedSessionIds();
  }

  render() {
    return (
      <FavesContext.Provider
        value={{
          getFavedSessionIds: this.getFavedSessionIds.bind(this),
          addFaves: this.addFaves.bind(this),
          removeFaves: this.removeFaves.bind(this),
          faveIds: this.state.faveIds
        }}
      >
        {this.props.children}
      </FavesContext.Provider>
    );
  }
}

export { FavesProvider };
export default FavesContext;
