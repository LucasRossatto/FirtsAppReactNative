import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet, Alert } from "react-native";

export default function CadNews() {
  
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    senha: "",
    telefone: "",
    endereco: "",
    cidade: "",
    estado: "",
  });

  const handleChange = (name, value) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    const { username, email, senha, telefone, endereco, cidade, estado } = formData;

    if (
      username === "" ||
      email === "" ||
      senha === "" ||
      telefone === "" ||
      endereco === "" ||
      cidade === "" ||
      estado === ""
    ) {
      Alert.alert("Erro", "Por favor, preencha todos os campos.");
    } else {
      Alert.alert("Sucesso", `Bem-vindo, ${username}!`);
      console.log("Nome:", username);
      console.log("Email:", email);
      console.log("Senha:", senha);
      console.log("Telefone:", telefone);
      console.log("Endereço:", endereco);
      console.log("Cidade:", cidade);
      console.log("Estado:", estado);

      limparcampos();
    }
  };

  const limparcampos = () => {
    setFormData({
        username: "",
        email: "",
        senha: "",
        telefone: "",
        endereco: "",
        cidade: "",
        estado: "",
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Nome de usuário:</Text>
      <TextInput
        style={styles.input}
        value={formData.username}
        onChangeText={(value) => handleChange("username", value)}
        placeholder="Digite seu nome"
      />
      <Text style={styles.label}>Email:</Text>
      <TextInput
        style={styles.input}
        value={formData.email}
        onChangeText={(value) => handleChange("email", value)}
        placeholder="Digite seu email"
      />
      <Text style={styles.label}>Senha:</Text>
      <TextInput
        style={styles.input}
        value={formData.password}
        onChangeText={(value) => handleChange("senha", value)}
        secureTextEntry={true}
        placeholder="Digite sua senha"
      />
      <Text style={styles.label}>Telefone:</Text>
      <TextInput
        style={styles.input}
        value={formData.phone}
        onChangeText={(value) => handleChange("telefone", value)}
        placeholder="Digite seu telefone"
      />
      <Text style={styles.label}>Endereço:</Text>
      <TextInput
        style={styles.input}
        value={formData.address}
        onChangeText={(value) => handleChange("endereco", value)}
        placeholder="Digite seu endereço"
      />
      <Text style={styles.label}>Cidade:</Text>
      <TextInput
        style={styles.input}
        value={formData.city}
        onChangeText={(value) => handleChange("cidade", value)}
        placeholder="Digite sua cidade"
      />
      <Text style={styles.label}>Estado:</Text>
      <TextInput
        style={styles.input}
        value={formData.state}
        onChangeText={(value) => handleChange("estado", value)}
        placeholder="Digite seu estado"
      />
      <Button title="Entrar" onPress={handleSubmit} />
      {Object.values(formData).every((field) => field) && (
        <Text>
          Nome: {formData.username} Email: {formData.email} Senha: {formData.senha} 
          Telefone: {formData.telefone} Endereço: {formData.endereco} 
          Cidade: {formData.cidade} Estado: {formData.estado}
          novaSenha: {"*".repeat(formData.senha.length)}
        </Text>
      )}
    </View>
  );
}

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
