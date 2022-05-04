import React, { useState } from "react";
import { StyleSheet, Text, View, Image, TextInput, Button } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View>
        <Image
          style={styles.tinyLogo}
          source={require("./assets/pngwing.com.png")}
        />
      </View>
      <View>
        <Text>Carga Horaria</Text>
      </View>
      <View style={styles.container3}>
        <TextInput style={styles.input} keyboardType="numeric"></TextInput>
        <Text style={styles.te}>:</Text>
        <TextInput style={styles.input} keyboardType="numeric"></TextInput>
      </View>
      <View>
        <Text>Hora entrada</Text>
      </View>
      <View style={styles.container3}>
        <TextInput style={styles.input} keyboardType="numeric"></TextInput>
        <Text style={styles.te}>:</Text>
        <TextInput style={styles.input} keyboardType="numeric"></TextInput>
      </View>
      <View style={styles.container2}>
        <Button title="Limpar"></Button>
        <Button title="calcular"></Button>
        <Button title="Dobrada"></Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  container2: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    marginTop: "10%",
  },
  tinyLogo: {
    width: 200,
    height: 100,
  },
  container3: {
    flexDirection: "row",
    width: "25%",
  },
  input: {
    borderWidth: 1,
    borderColor: "black",
    height: "100%",
    width: "40%",
    textAlign: "center",
  },
  text: {},
});
