import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet, Alert } from "react-native";

const LoginForm = () => {
  // Consts para definir o estados das variaveis
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // Função do formulario
  const handleSubmit = () => {
    // Verifica se os campos estão preenchidos
    if (username === "" || password === "") {
      // se escutar erro emite um alerta
      Alert.alert("Erro, Por favor, preencha todos os campos.");
    } else {
      // caso esteja presciso ele alerta com bem vindo
      Alert.alert(`Sucesso, Bem-vindo, ${username}!`);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Nome de usuário:</Text>
      <TextInput
        style={styles.input}
        value={username}
        onChangeText={setUsername}
        placeholder="Digite seu nome"
      />
      <Text style={styles.label}>Senha:</Text>
      <TextInput
        style={styles.input}
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        placeholder="Digite sua senha"
      />
      <Button title="Entrar" onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 8,
  },
});

export default LoginForm;
