import React from "react";
import {
  View,
  Text,
  ScrollView,
  Image,
  StyleSheet,
  TouchableOpacity,
  Linking
} from "react-native";
import styles from "./styles";
import LinearGradient from "react-native-linear-gradient";
import PropTypes from "prop-types";
import { colors } from "../../config/styles";

const Speaker = ({ speaker }) => {
  return (
    <ScrollView>
      <View style={styles.speakerView}>
        <Image source={{ uri: speaker.image }} style={styles.img} />
        <Text style={styles.subText}>{speaker.name}</Text>
        <Text style={styles.speakerBio}>{speaker.bio}</Text>
        <View style={styles.readMorebuttonContainer}>
          <LinearGradient
            colors={[colors.Purple, colors.Blue]}
            start={{ x: 0.0, y: 1.0 }}
            end={{ x: 1.0, y: 0.0 }}
            style={[StyleSheet.absoluteFill, styles.readMorebutton]}
          >
            <TouchableOpacity onPress={() => Linking.openURL(speaker.url)}>
              <Text style={styles.readMoreText}> Read More on Wikipedia </Text>
            </TouchableOpacity>
          </LinearGradient>
        </View>
      </View>
    </ScrollView>
  );
};

Speaker.propTypes = {
  speaker: PropTypes.object.isRequired
};

export default Speaker;
