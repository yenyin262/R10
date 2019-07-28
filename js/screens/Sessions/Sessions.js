import React, { Component } from "react";
import styles from "./styles";
import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  StyleSheet
} from "react-native";
import moment from "moment";
import LinearGradient from "react-native-linear-gradient";
import Icon from "react-native-vector-icons/Ionicons";

favSessionTitle = Platform.select({
  ios: "ios-heart",
  android: "md-heart"
});
//<Icon name={favSessionTitle}/>
// let fn;
// let btnText;

// if (listOfFaves.includes(session.id)) {
//   fn = removesFaves;
// } else {
//   fn = addFaves;
// }
// let favSessionTitle;
// if (listOfFaves.includes(session.id)) {
//   favSessionTitle = Platform.select({
//     ios: "ios-heart",
//     android: "md-heart"
//   });
// } else {
//   favSessionTitle = null;
// }

class Sessions extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoaded: false,
      favesButton: null,
      favSessionTitle: null,
      isFav: false
    };
  }

  // componentDidMount() {
  //   const { session, addFaves, removesFaves, checkForFaves, faveIds } = this.props;
  //   console.log;
  //   console.log(this.state.favesButton, "favesBtn");
  //   checkForFaves()
  //     .then(listOfFaves => {
  //       console.log(listOfFaves, "list");
  //       console.log(session.id);
  //       this.setState({
  //         isLoaded: true,
  //         favesButton: (
  //           <View style={styles.favebuttonContainer}>
  //             <LinearGradient
  //               colors={["#cf392a", "#9963ea"]}
  //               start={{ x: 0.0, y: 1.0 }}
  //               end={{ x: 1.0, y: 0.0 }}
  //               style={[
  //                 StyleSheet.absoluteFill,
  //                 { width: "65%" },
  //                 styles.favebutton
  //               ]}
  //             >
  //               <TouchableOpacity
  //                 onPress={() => {
  //                   listOfFaves.includes(session.id)
  //                     ? removesFaves(session.id)
  //                     : addFaves(session.id);
  //                 }}
  //               >
  //                 <Text style={styles.faveText}>
  //                   {listOfFaves.includes(session.id)
  //                     ? "Remove from Faves"
  //                     : "Add to Faves"}
  //                 </Text>
  //               </TouchableOpacity>
  //             </LinearGradient>
  //           </View>
  //         ),
  //         favSessionTitle: listOfFaves.includes(session.id) ? (
  //           <Icon name={favSessionTitle} size={22} style={styles.heartIcon} />
  //         ) : null
  //       });
  //     })
  //     .catch(error => {
  //       console.log(error);
  //     });
  // }

  // get rid of promise
  // run the component check ran or delete btn

  render() {
    const {
      session,
      speaker,
      navigation,
      faveIds,
      addFaves,
      removesFaves
    } = this.props;

    const isFav = faveIds.includes(session.id);

    return (
      <ScrollView>
        <View>
          <View style={styles.containerTitle}>
            <Text style={styles.locationTitle}>{session.location}</Text>
            {isFav ? (
              <Icon name={favSessionTitle} size={22} style={styles.heartIcon} />
            ) : null}
          </View>
          <Text style={styles.sessionTitle}>{session.title}</Text>

          <Text style={styles.time}>
            {moment(session.startTime).format("LT")}
          </Text>
          <Text style={styles.description}>{session.description}</Text>
          <Text style={styles.subText}>Presented by:</Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Speaker", { Speaker: speaker });
            }}
          >
            <View style={styles.speakerContainer}>
              <Image source={{ uri: speaker.image }} style={styles.image} />

              <Text style={styles.speakerName}>{speaker.name}</Text>
            </View>
          </TouchableOpacity>
          <View style={styles.lineSeparator} />

          <View style={styles.favebuttonContainer}>
            <LinearGradient
              colors={["#cf392a", "#9963ea"]}
              start={{ x: 0.0, y: 1.0 }}
              end={{ x: 1.0, y: 0.0 }}
              style={[
                StyleSheet.absoluteFill,
                { width: "65%" },
                styles.favebutton
              ]}
            >
              <TouchableOpacity
                onPress={() => {
                  isFav ? removesFaves(session.id) : addFaves(session.id);
                }}
              >
                <Text style={styles.faveText}>
                  {isFav ? "Remove from Faves" : "Add to Faves"}
                </Text>
              </TouchableOpacity>
            </LinearGradient>
          </View>
        </View>
      </ScrollView>
    );
  }
}

export default Sessions;
