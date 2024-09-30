import React, { useEffect, useState } from "react";
import { StyleSheet, Button, Text, View } from "react-native";

export default function Contador() {
  const [count, setCount] = useState(0);
  const [msg, setMsg] = useState(' ');

  useEffect(() =>{
    setMsg('O valor do count foi atualizado' + count + 'Vez(es)')
  }, [count]);
  return (
    <>
      <Text style={estilos.texto}>Voce clicou aqui {count} </Text>
      <Text>{msg}</Text>
      <View style={estilos.ButtonList}>
        <Button
          onPress={() => {
            setCount(count + 1);
          }}
          title="Cliquei aqui"
        />
      </View>

      <View style={estilos.ButtonList}>
        <Button
          title="Diminuir"
          onPress={() => {
            setCount(count - 1);
          }}
        />
      </View>
    </>
  );
}

const estilos = StyleSheet.create({
  ButtonList: {
    padding: 10,
  },
  texto: {
    color: "#cd33333",
    fontWeight: "bold",
    fontSize: 26,
    marginLeft: 20,
    marginTop: 8,
  },
});
