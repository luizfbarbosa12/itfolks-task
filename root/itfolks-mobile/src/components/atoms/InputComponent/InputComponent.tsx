import React, { useState } from "react";
import { View, TextInput, Text } from "react-native";
import { styles } from "./InputComponent.styles";
const InputComponent = () => {
  const [townInput, setTownInput] = useState<string | undefined>("");

  const handleInputChange = (text: string) => {
    setTownInput(text);
  };

  return (
    <View>
      <TextInput
        style={styles.input}
        value={townInput}
        onChangeText={handleInputChange}
        placeholder="Insert your city name"
      />
      <Text style={styles.label}>Town</Text>
    </View>
  );
};

export default InputComponent;
