import React, { useState } from "react";
import { View, Text } from "react-native";
import { styles } from "./AmountOfWork.styles";
import amountOfWork from "../../../data/AmountOfWork.json";
import { Chip } from "react-native-paper";

const AmountOfWork = () => {
  const [selectedChip, setSelectedChip] = useState("");

  const handleChipPress = (item: string) => {
    setSelectedChip(item);
  };
  return (
    <View style={styles.section2}>
      <Text style={styles.h3Text}>Estimated amount of work</Text>
      <View style={styles.chip}>
        {amountOfWork.map((item, index) => {
          const isSelected = item === selectedChip;
          return (
            <Chip
              key={index}
              mode="outlined"
              selected={isSelected}
              selectedColor={isSelected ? "#007AFF" : 'grey'}
              onPress={() => handleChipPress(item)}
            >
              {item}
            </Chip>
          );
        })}
      </View>
    </View>
  );
};

export default AmountOfWork;
