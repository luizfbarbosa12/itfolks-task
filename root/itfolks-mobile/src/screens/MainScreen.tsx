import React from "react";
import { SafeAreaView, View, Text } from "react-native";
import { styles } from "./MainScreen.styles";
import OperatingMode from "../components/molecules/OperatingMode";
import AmountOfWork from "../components/molecules/AmountOfWork/AmountOfWork";
import BenefitsCheckboxes from "../components/molecules/BenefitsCheckboxes/BenefitsCheckboxes";
const MainPage = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.mainContent}>
        <View style={styles.mainContainer}>
          <Text style={styles.pageTitle}>Workplace details</Text>
          <Text style={styles.subTitle}>Provide the details of the job</Text>
          <OperatingMode />
          <AmountOfWork />
          <BenefitsCheckboxes/>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default MainPage;
