import { StyleSheet } from "react-native";
import { colors, fonts } from "../../config/styles";

const styles = StyleSheet.create({
  favesText: {
    fontSize: 20,
    ...Platform.select({
      android: {
        fontFamily: fonts.baseFontRegular
      },
      ios: { fontFamily: fonts.baseFont }
    })
  }
});

export default styles;
