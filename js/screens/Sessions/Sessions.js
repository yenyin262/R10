// expect data and display it
import React from "react";
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

const Sessions = ({
  session,
  speaker,
  navigation,
  addFaves,
  removesFaves,
  checkForFaves
}) => {
  let favesButton;

  // let myFaves = await checkForFaves(session.id)
  // if number is in allowed, render add button
  // otherwise, render delete button
  console.log(checkForFaves, "checking ");

  // if (allowed.includes(randomNumber)) {

  //put checkforFaves in component did mmount change ot class based component
  // .then - have data this.setstate and update this.state.isAdd
  //need to put boolean state if is add - true false = remove
  // this.state.isAdd
  // in render conditionally render or based on what this.state.isAdd is

  checkForFaves(session.id)
    .then(listOfFaves => {
      console.log(listOfFaves);
      if (listOfFaves.includes(session.id)) {
        favesButton = (
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
        );
      } else {
        favesButton = (
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
        );
      }
    })
    .catch(error => {
      console.log(error);
    });

  return (
    <ScrollView>
      <View>
        <Text style={styles.locationTitle}>{session.location}</Text>

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
            <Image source={{ uri: speaker.image }} style={styles.avatar} />

            <Text style={styles.speakerName}>{speaker.name}</Text>
          </View>
        </TouchableOpacity>

        <View style={styles.lineSeparator} />
        {/* {favesButton} */}
        {/* <View style={styles.favebuttonContainer}>
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
            <TouchableOpacity onPress={() => {}}>
              <Text style={styles.faveText}> Remove from Faves </Text>
            </TouchableOpacity>
          </LinearGradient>
        </View> */}
      </View>
    </ScrollView>
  );
};

export default Sessions;
// export default withNavigation(Sessions);

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
