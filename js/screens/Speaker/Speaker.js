// expect data and display it
import React from "react";
import { View, Text, ScrollView } from "react-native";

const Speaker = ({ speaker }) => {
  console.log(speaker, "at speaker");
  return (
    <ScrollView>
      <View>
        <Text>{speaker.bio}</Text>
        <Text>{session.title}</Text>
        <Text>{speaker.name}</Text>
      </View>
    </ScrollView>
  );
};

export default Speaker;
