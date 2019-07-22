// expect data and display it
import React from "react";
import { View, Text, ScrollView } from "react-native";
// import { SectionList } from "react-native-gesture-handler";
// import { formatSessionData } from "../../lib/dataFormatForSchedule";
import SessionDataList from "../../components/SessionDataList";
const Schedule = ({ data }) => {
  return (
    <View>
      <SessionDataList data={data.allSessions} />
    </View>
  );
};

// <Scroll>

{
  /* <SectionList
  // need to get data
  data={data.allSessions}
  data={formatSessionData(data)}
  // render each item in each data of array
  renderItem={({ session }) => (
    <View>
      <View>
        <Text>{session.startTime}</Text>
      </View>
      <View>
        <Text>{session.title}</Text>
      </View>
      <View>
        <Text>{session.title}</Text>
      </View>
    </View>
  )}
  KeyExtractor={session => "" + session.id}
/>; */
}

export default Schedule;
// {data.allSessions.map(({ id, startTime, title, location }) => {
//   return (
//     <View key={id}>
//       <View>
//         <Text>{startTime}</Text>
//       </View>
//       <View>
//         <Text>{title}</Text>
//       </View>
//       <View>
//         <Text>{location}</Text>
//       </View>
//     </View>
//   );
// })}
