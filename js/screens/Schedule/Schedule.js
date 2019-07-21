// expect data and display it
import React from "react";
import { View, Text, ScrollView } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { formatSessionData } from "../../lib/dataFormatForSchedule";

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

// <Scroll>

{
  /* <SectionList
  // need to get data
  section={data}
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
  KeyExtractor={session => session.id}
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
