import { SafeAreaView, ScrollView, StatusBar, StyleSheet } from "react-native";
import MainPage from "./src/screens/MainScreen";
import { PaperProvider } from "react-native-paper";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <PaperProvider>
        <MainPage />
        </PaperProvider>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginTop: StatusBar.currentHeight || 0
  }
});
