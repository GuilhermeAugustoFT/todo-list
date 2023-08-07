import { TextInput, TouchableOpacity, View, Image } from "react-native";
import { styles } from "./styles";
import { Dispatch, SetStateAction, useState } from "react";

interface Props {
  placeholder?: string;
  value: string;
  onChange: Dispatch<SetStateAction<string>>,
  onPress: () => void;
}

export default function Input({ placeholder, value, onChange, onPress }: Props) {
    const [isFocused, setIsFocused] = useState(false);

  return (
    <View style={styles.container}>
      <TextInput
        style={[styles.input, isFocused && styles.inputFocused]}
        placeholder={placeholder}
        placeholderTextColor={"#808080"}
        value={value}
        onChangeText={onChange}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Image
          source={require("../../../assets/add-button.png")}
          style={styles.buttonImage}
        />
      </TouchableOpacity>
    </View>
  );
}
