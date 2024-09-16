import React, { useEffect, useState } from "react";
import { StyleSheet, Text } from "react-native";

export default function Texto() {
  const [texto, setText] = useState("Texto do novo componente");
  useEffect(() => {
    setText("Outro Texto");
  }, []);
  return <Text style={estilos.texto}>{texto}</Text>;
}

const estilos = StyleSheet.create({
  texto: {
    color: "#cd33333",
    fontWeight: "bold",
    fontSize: 26,
    marginLeft: 20,
    marginTop: 8
  }
});
