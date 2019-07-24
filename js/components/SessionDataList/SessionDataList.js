import React, { Component } from "react";
import { View, Text, SectionList, TouchableOpacity } from "react-native";
import styles from "./style";
import { withNavigation } from "react-navigation";
import { formatSessionData } from "../../lib/dataFormatForSchedule";
import moment from "moment";
// import Icon from "react-native-vector-icons/Ionicons";

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
                <View style={styles.container}>
                  <View>
                    <Text style={styles.title}>{item.title}</Text>
                  </View>
                  <View>
                    <Text style={styles.location}>{item.location}</Text>
                    {/* <Icon name="ios-heart-empty" /> */}
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          )}
          sections={formatSchedule}
          ItemSeparatorComponent={() => <View style={styles.separator} />}
          renderSectionHeader={({ section: { title } }) => (
            <Text style={styles.time}>{moment(title).format("LT")}</Text>
            // this title is the section title each data belongs to that title
            // <Text>{title}</Text>
          )}
          keyExtractor={data => "" + data.id}
        />
      </View>
    );
  }
}

export default withNavigation(SessionDataList);
