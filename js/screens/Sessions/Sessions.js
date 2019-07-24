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

const Sessions = ({ session, speaker, addFaves, navigation }) => {
  console.log(speaker, "this is a speaker");
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
        <LinearGradient
          colors={["#cf392a", "#9963ea"]}
          start={{ x: 0.0, y: 1.0 }}
          end={{ x: 1.0, y: 0.0 }}
          style={[
            StyleSheet.absoluteFill,
            { height: 120, width: "100%" },
            styles.loginScreenButton
          ]}
        >
          <TouchableOpacity
            // style=
            onPress={() => addFaves(session.id)}
            // underlayColor="#fff"
          >
            <Text style={styles.loginText}>Add to Favorites </Text>
          </TouchableOpacity>
        </LinearGradient>
      </View>
    </ScrollView>
  );
};

export default Sessions;
// export default withNavigation(Sessions);
