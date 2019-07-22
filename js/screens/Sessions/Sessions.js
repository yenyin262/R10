// expect data and display it
import React from "react";
import { View, Text, ScrollView, Image } from "react-native";

const Sessions = ({ session, speaker }) => {
  console.log(speaker);
  return (
    <ScrollView>
      <View>
        <Text>{session.location}</Text>
        <Text>{session.title}</Text>
        <Text>{speaker.name}</Text>
        <Image source={{ uri: speaker.image }} />
      </View>
    </ScrollView>
  );
};

export default Sessions;
