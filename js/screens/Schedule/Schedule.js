// expect data and display it
import React from "react";
import { View, Text, ScrollView } from "react-native";
// import {formatSessionData} from "../../lib/dataFormatForSchedule"

const Schedule = ({ data }) => {
  return (
    <ScrollView>
      {data.allSessions.map(({ id, startTime, title, location }) => {
        return (
          <View key={id}>
            <View>
              <Text>{startTime}</Text>
            </View>
            <View>
              <Text>{title}</Text>
            </View>
            <View>
              <Text>{location}</Text>
            </View>
          </View>
        );
      })}
    </ScrollView>
  );
};

export default Schedule;
