import { StatusBar, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight || 0,
    flex: 1,
    flexDirection: "column",
    paddingVertical: 20,
    paddingHorizontal: 24
  },
  mainContent: {
    gap: 16
  },
  pageTitle: {
    fontSize: 26,
    fontWeight: "700",
    paddingLeft: 0,
    paddingTop: 8
  },
  subTitle: {
    fontSize: 16,
  },
  mainContainer: {
    gap: 16,
    flexDirection: "column"
  },
  h3Text: {
    fontSize: 18,
    fontWeight: "500"
  },
});
