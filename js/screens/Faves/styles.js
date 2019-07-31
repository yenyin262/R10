import { StyleSheet } from "react-native";
import { colors, fonts } from "../../config/styles";

const styles = StyleSheet.create({
  favesText: {
    fontSize: 20,
    color: "black",
    ...Platform.select({
      android: {
        fontFamily: "Montserrat-Regular"
      },
      ios: { fontFamily: fonts.baseFont }
    })
  }
});

export default styles;
