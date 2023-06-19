import React from "react";
import { View, Text } from "react-native";
import CheckboxComponent from "../../atoms/CheckboxComponent";
import { styles } from "./BenefitsCheckboxes.styles";
import benefitsCheckboxes from "../../../data/benefitsCheckboxes.json";
const BenefitsCheckboxes = () => {
  return (
    <View style={styles.section3}>
      <Text style={styles.h3Text}>Benefits (Optional)</Text>
      <View>
        {benefitsCheckboxes.map(item => {
          return <CheckboxComponent key={item} label={item} />;
        })}
      </View>
    </View>
  );
};

export default BenefitsCheckboxes;
