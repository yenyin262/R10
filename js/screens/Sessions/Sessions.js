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
import PropTypes from "prop-types";

class Sessions extends Component {
  constructor(props) {
    super(props);
  }

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
              colors={["#9963ea", "#8797D6"]}
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

// Sessions.propTypes = {
//   session: PropTypes.Object.isRequired,
//   speaker: PropTypes.Object.isRequired,
//   navigation: PropTypes.Object,
//   // faveIds: PropTypes.array.isRequired,
//   addFaves: PropTypes.func,
//   removesFaves: PropTypes.func
// };

export default Sessions;
