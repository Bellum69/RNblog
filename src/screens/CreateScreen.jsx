import React, { useState } from "react";
import { View, Text, TextInput } from "react-native";
import { s } from "../styles";

export const CreateScreen = () => {
  const [inputs, setInputs] = useState({
    title: "",
    story: "",
  });

  return (
    <View>
      <Text style={s.postName}>CreateScreen</Text>
      <TextInput
        style={s.inputs}
        placeholder="title"
        onChangeText={(text) => setInputs({ ...inputs, title: text })}
        defaultValue={inputs.title}
      ></TextInput>
      <TextInput
        style={s.inputs}
        placeholder="Add story"
        onChangeText={(text) => setInputs({ ...inputs, story: text })}
        defaultValue={inputs.story}
        multiline
      ></TextInput>
    </View>
  );
};
