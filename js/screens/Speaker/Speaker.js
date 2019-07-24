// expect data and display it
import React from "react";
import { View, Text, ScrollView, Image } from "react-native";

const Speaker = ({ speaker }) => {
  console.log(speaker, "at speaker");
  return (
    <ScrollView>
      <View>
        <Text>{speaker.bio}</Text>
        <Image source={{ uri: speaker.image }} />
        <Text>{speaker.name}</Text>
      </View>
    </ScrollView>
  );
};

export default Speaker;
