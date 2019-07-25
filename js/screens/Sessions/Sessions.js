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

const Sessions = ({ session, speaker, navigation, favesFunctionality }) => {
  console.log(favesFunctionality, "this is a speaker");
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
                // console.log(favesFunctionality.getFavedSessionIds, "Functions");
                const isFave = favesFunctionality.addFaves(session.id);
                const notFave = favesFunctionality.removeFaves(session.id);
                const checkFaves = favesFunctionality.getFavedSessionIds.includes(
                  session.id
                );
              }}
              // underlayColor="#fff"
            >
              <Text style={styles.faveText}> Remove from Faves </Text>
            </TouchableOpacity>
          </LinearGradient>
        </View>
      </View>
    </ScrollView>
  );
};

export default Sessions;
// export default withNavigation(Sessions);

// if there is faves - show the remove faves
// if no faves - add faves
