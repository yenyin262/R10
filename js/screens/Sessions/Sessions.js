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
import Icon from "react-native-vector-icons/Ionicons";
import PropTypes from "prop-types";
import { colors } from "../../config/styles";

const Sessions = ({
  session,
  speaker,
  navigation,
  addFaves,
  removesFaves,
  faveIds
}) => {
  const isFav = faveIds.includes(session.id);

  const favSessionTitle = Platform.select({
    ios: "ios-heart",
    android: "md-heart"
  });
  return (
    <ScrollView>
      <View>
        <View style={styles.containerTitle}>
          <Text style={styles.locationTitle}>{session.location}</Text>
          {isFav ? (
            <Icon name={favSessionTitle} size={22} style={styles.favIcon} />
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
            colors={[colors.Purple, colors.Blue]}
            start={{ x: 0.0, y: 1.0 }}
            end={{ x: 1.0, y: 0.0 }}
            style={[StyleSheet.absoluteFill, styles.favebutton]}
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
};

Sessions.propTypes = {
  session: PropTypes.object.isRequired,
  speaker: PropTypes.object.isRequired,
  navigation: PropTypes.object,
  faveIds: PropTypes.array.isRequired,
  addFaves: PropTypes.func,
  removesFaves: PropTypes.func
};

export default Sessions;
