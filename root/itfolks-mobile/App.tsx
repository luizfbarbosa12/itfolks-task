import { ScrollView, StyleSheet, View } from "react-native";
import MainPage from "./src/screens/MainScreen";

export default function App() {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <MainPage />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  }
});
