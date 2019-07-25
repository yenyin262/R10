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

// const { height, width } = Dimensions.get("window");

const Speaker = ({ speaker }) => {
  console.log(speaker, "at speaker");

  return (
    <ScrollView>
      <View
        style={{
          height: "95%",
          width: "90%",
          marginHorizontal: 15,
          marginTop: 50,
          backgroundColor: "white",
          alignSelf: "center",
          borderRadius: 20
        }}
      >
        <Image source={{ uri: speaker.image }} style={styles.avatar} />
        <Text style={styles.subText}>{speaker.name}</Text>
        <Text style={styles.speakerBio}>{speaker.bio}</Text>
        <View style={styles.favebuttonContainer}>
          <LinearGradient
            colors={["#cf392a", "#9963ea"]}
            start={{ x: 0.0, y: 1.0 }}
            end={{ x: 1.0, y: 0.0 }}
            style={[
              StyleSheet.absoluteFill,
              { width: "80%" },
              styles.favebutton
            ]}
          >
            <TouchableOpacity onPress={() => Linking.openURL(speaker.url)}>
              <Text style={styles.faveText}> Read more on Wikipedia </Text>
            </TouchableOpacity>
          </LinearGradient>
        </View>
      </View>
    </ScrollView>
  );
};

export default Speaker;
