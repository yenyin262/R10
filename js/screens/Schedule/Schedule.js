// expect data and display it
import React from "react";
import { View } from "react-native";
import SessionDataList from "../../components/SessionDataList";
const Schedule = ({ data }) => {
  return (
    <View>
      <SessionDataList data={data.allSessions} />
    </View>
  );
};

export default Schedule;
