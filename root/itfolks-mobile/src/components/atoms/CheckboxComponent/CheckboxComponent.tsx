import React, { useState } from "react";
import { View, Text } from "react-native";
import { CheckBox } from "react-native-elements";
import { styles } from "./Checkbox.styles";

interface CheckboxComponentProps {
  label?: string;
}
const CheckboxComponent = ({ label }: CheckboxComponentProps) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxToggle = () => {
    setIsChecked(!isChecked);
  };

  return (
    <View style={styles.wrapper}>
      <CheckBox
        checked={isChecked}
        onPress={handleCheckboxToggle}
        containerStyle={{ backgroundColor: "transparent", borderWidth: 0 }}
      />
      <Text>{label}</Text>
    </View>
  );
};

export default CheckboxComponent;
