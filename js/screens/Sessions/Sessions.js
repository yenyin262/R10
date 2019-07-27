// expect data and display it
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

const favSessionTitle = Platform.select({
  ios: "ios-heart",
  android: "md-heart"
});

//<Icon name={favSessionTitle}/>

class Sessions extends Component {
  constructor(props) {
    super(props);

    this.state = { isLoaded: false, favesButton: null };
  }

  componentDidMount() {
    const { session, addFaves, removesFaves, checkForFaves } = this.props;
    checkForFaves()
      .then(listOfFaves => {
        console.log(listOfFaves);
        if (listOfFaves.includes(session.id)) {
          this.setState({
            isLoaded: true,
            favesButton: (
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
                      removesFaves(session.id);
                    }}
                  >
                    <Text style={styles.faveText}> Remove from Faves </Text>
                  </TouchableOpacity>
                </LinearGradient>
              </View>
            )
          });
        } else {
          this.setState({
            isLoaded: true,
            favesButton: (
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
                      addFaves(session.id);
                    }}
                  >
                    <Text style={styles.faveText}> Add to Faves </Text>
                  </TouchableOpacity>
                </LinearGradient>
              </View>
            )
          });
        }
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    const { session, speaker, navigation } = this.props;

    //put checkforFaves in component did mmount change ot class based component
    // .then - have data this.setstate and update this.state.isAdd
    //need to put boolean state if is add - true false = remove
    // this.state.isAdd
    // in render conditionally render or based on what this.state.isAdd is

    return (
      <ScrollView>
        <View>
          <View style={styles.containerTitle}>
            <Text style={styles.locationTitle}>{session.location}</Text>
            <Icon name={favSessionTitle} size={22} style={styles.heartIcon} />
          </View>
          <Text style={styles.sessionTitle}>{session.title}</Text>
          {/* {this.state.isLoaded && this.state.favesButton === true ? (
            <Icon name={favSessionTitle} size={25} />
          ) : null} */}

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
          {this.state.isLoaded && this.state.favesButton}
        </View>
      </ScrollView>
    );
  }
}

export default Sessions;

// if there is faves - show the remove faves
// if no faves - add faves

{
  (" ");
}
{
  /* {checkFaves ? <Icon name="ios-heart" /> : null} */
}
{
  /* {checkFaves ?  <Text style={styles.faveText}> Remove from Faves </Text> :  <Text style={styles.faveText}> Add to from Faves </Text> } */
}

//checkFaves ? notFave : isFave
