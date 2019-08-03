import { StyleSheet } from "react-native";
import { fonts } from "../../config/styles";

const styles = StyleSheet.create({
  favesText: {
    fontSize: 20,
    ...Platform.select({
      android: {
        fontFamily: fonts.baseFontRegular
      },
      ios: { fontFamily: fonts.baseFont }
    })
  },
  lineSeparator: {
    borderBottomColor: colors.LightGrey,
    borderBottomWidth: 1
  }
});

export default styles;
