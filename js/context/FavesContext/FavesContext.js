import React, { Component } from "react";
import AsyncStorage from "@react-native-community/async-storage";
//import { getFavs } from "../../config/models";

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

  // testing === to debug
  // componentDidMount() {
  //   this.getFavedSessionIds();
  // }
  //   async getFavedSessionIds() {
  //     return AsyncStorage.getAllKeys().then(keys => {
  //       return AsyncStorage.multiGet(keys).then(result => {
  //         var finalResult = ["a", "b"];
  //         console.log(result, "results");
  //         for (const i of result) {
  //           finalResult[i[0]] = i[0];
  //         }

  //         this.setState({ faveIds: finalResult });
  //         return finalResult;
  //       });
  //     });
  //   }

  async removeFaves(sessionId) {
    try {
      await AsyncStorage.removeItem(sessionId);
      console.log("BANANAS ARE GOOD FOR YOU");

      // return removedItem;
    } catch (error) {
      console.log(error);
    }
    await this.getFavedSessionIds();
  }

  // getFavedSessionIds = async () => {
  //   try {
  //     const myFavs = await getFavs();
  //     const myFavsIds = myFavs.map(favs => favs[0]);
  //     this.setState({ faveIds: myFavsIds });
  //   } catch (e) {
  //     return false;
  //   }
  // };

  async addFaves(sessionId) {
    console.log(sessionId, "sessionid");
    try {
      await AsyncStorage.setItem(sessionId, "savedfave");
      //   const savedItem = await AsyncStorage.setItem(sessionId);
      //   const item = JSON.parse(addItem);
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
          ///{testing to debug
          // ...this.state},
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
