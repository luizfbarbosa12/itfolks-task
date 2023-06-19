import React, { useState } from "react";
import { SafeAreaView, View, Text, FlatList } from "react-native";
import { styles } from "./MainScreen.styles";
import InputComponent from "../components/atoms/InputComponent";
import CheckboxComponent from "../components/atoms/CheckboxComponent";
import operatingModeCheckboxes from "../data/operatingModeCheckboxes.json";
import AmountOfWork from "../data/AmountOfWork.json";
import benefitsCheckboxes from "../data/benefitsCheckboxes.json";
const MainPage = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.mainContent}>
        <View style={styles.mainContainer}>
          <Text style={styles.pageTitle}>Workplace details</Text>
          <Text styles={styles.subTitle}>Provide the details of the job</Text>
          <View style={styles.operatingMode}>
            <Text style={styles.h3Text}>Operating mode</Text>
            <View>
              {operatingModeCheckboxes.map((item, index) => {
                return <CheckboxComponent key={index} label={item} />;
              })}
            </View>
            <InputComponent />
          </View>
          <View style={styles.section2}>
            <Text style={styles.h3Text}>Estimated amount of work</Text>
            {AmountOfWork.map((item, index) => {
              return <CheckboxComponent key={index} label={item} />;
            })}
          </View>
          <View style={styles.section3}>
            <Text style={styles.h3Text}>Benefits (Optional)</Text>
            <View>
              {/* <FlatList
                data={benefitsCheckboxes}
                keyExtractor={item => item}
                renderItem={({ item }) => (
                  <CheckboxComponent key={item} label={item} />
                )}
              /> */}
              {benefitsCheckboxes.map((item) => {
                return <CheckboxComponent key={item} label={item} />
              })}
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default MainPage;
