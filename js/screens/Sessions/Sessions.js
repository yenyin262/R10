// expect data and display it
import React from "react";
import styles from "./styles";
import { View, Text, ScrollView, Image, StyleSheet } from "react-native";
import moment from "moment";

const Sessions = ({ session, speaker }) => {
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
        <View style={styles.speakerContainer}>
          <Image source={{ uri: speaker.image }} style={styles.avatar} />
          <Text style={styles.speakerName}>{speaker.name}</Text>
        </View>
        <View style={styles.lineSeparator} />
      </View>
    </ScrollView>
  );
};

export default Sessions;
