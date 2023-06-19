import React from "react";
import { View, Text } from "react-native";
import CheckboxComponent from "../../atoms/CheckboxComponent";
import InputComponent from "../../atoms/InputComponent";
import operatingModeCheckboxes from '../../../data/operatingModeCheckboxes.json'
import { styles } from "./OperatingMode.styles";

const OperatingMode = () => {
  return (
    <View style={styles.operatingMode}>
      <Text style={styles.h3Text}>Operating mode</Text>
      <View>
        {operatingModeCheckboxes.map((item, index) => {
          return <CheckboxComponent key={index} label={item} />;
        })}
      </View>
      <InputComponent />
    </View>
  );
};

export default OperatingMode;
