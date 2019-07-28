// expect data and display it
import React from "react";
import {
  View,
  Text,
  ScrollView,
  Image,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Linking
} from "react-native";
import styles from "./styles";
import LinearGradient from "react-native-linear-gradient";
import PropTypes from "prop-types";

// const { height, width } = Dimensions.get("window");

const Speaker = ({ speaker }) => {
  return (
    <ScrollView>
      <View style={styles.speakerView}>
        <Image source={{ uri: speaker.image }} style={styles.img} />
        <Text style={styles.subText}>{speaker.name}</Text>
        <Text style={styles.speakerBio}>{speaker.bio}</Text>
        <View style={styles.readMorebuttonContainer}>
          <LinearGradient
            colors={["#9963ea", "#8797D6"]}
            start={{ x: 0.0, y: 1.0 }}
            end={{ x: 1.0, y: 0.0 }}
            style={[
              StyleSheet.absoluteFill,
              { width: "80%" },
              styles.readMorebutton
            ]}
          >
            <TouchableOpacity onPress={() => Linking.openURL(speaker.url)}>
              <Text style={styles.readMoreText}> Read more on Wikipedia </Text>
            </TouchableOpacity>
          </LinearGradient>
        </View>
      </View>
    </ScrollView>
  );
};

// Speaker.propTypes = {
//   speaker: PropTypes.Object.isRequired
// };

export default Speaker;
