import React, { Component } from "react";
import {
  View,
  Text,
  SectionList,
  StyleSheet,
  TouchableOpacity
} from "react-native";
import { withNavigation } from "react-navigation";
import { formatSessionData } from "../../lib/dataFormatForSchedule";
import moment from "moment";

class SessionDataList extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { data, navigation } = this.props;
    console.log(navigation, "navigation");

    const formatSchedule = formatSessionData(data);

    console.log(formatSchedule, "format");
    return (
      <View>
        <SectionList
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => {
                console.log(navigation, "nav");
                navigation.navigate("Session", { Session: item });
              }}
            >
              <View key={item.id}>
                <View>
                  <Text>{item.title}</Text>
                </View>
                <View>
                  <Text>{item.location}</Text>
                </View>
              </View>
            </TouchableOpacity>
          )}
          sections={formatSchedule}
          ItemSeparatorComponent={() => <View style={styles.separator} />}
          renderSectionHeader={({ section: { title } }) => (
            <Text>{moment(title).format("LT")}</Text>
            // this title is the section title each data belongs to that title
            // <Text>{title}</Text>
          )}
          keyExtractor={data => "" + data.id}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  separator: {
    padding: 10,
    borderBottomColor: "grey",
    borderBottomWidth: 1
  }
});

export default withNavigation(SessionDataList);
