import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Prime() {
  return (
    <>
      <View style={estilos.topo}>
        <Text style={estilos.titleTopo}>Detalhes do Sistema</Text>
      </View>

      <View style={estilos.listaDescricao}>
        <Text style={estilos.nomeLista}>Lista de compras</Text>
      </View>
      <View>
        <Text style={estilos.descricao}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s
        </Text>
        <Text style={estilos.preco}>R$ 40,00</Text>
      </View>

      <View style={estilos.card}>
        <Text style={estilos.cardTitle}>Produto</Text>
        <Text style={estilos.cardDesc}>Esse é um produto [...]</Text>
      </View>
    </>
  );
}

const estilos = StyleSheet.create({
  topo: {
    width: "100%",
    height: 150,
    backgroundColor: "red",
  },
  titleTopo: {
    width: "100%",
    textAlign: "center",
    paddingTop: 60,
    fontSize: 20,
    color: "white",
    fontWeight: "bold",
  },
  listaDescricao: {
    paddingTop: 20,
    fontSize: 15,
    marginLeft: 20,
  },
  nomeLista: {
    fontWeight: "bold",
  },
  descricao: {
    color: "#00008B",
    paddingTop: 20,
    marginLeft: 20,
    fontSize: 16,
    lineHeight: 26,
  },
  preco: {
    color: "red",
    fontWeight: "bold",
    fontSize: 26,
    marginTop: 8,
    marginLeft: 22,
  },
  card: {
    backgroundColor: "grey",
    width: 200,
    height: 300,
    padding: 20,
    margin: 30,
    borderRadius: 18,
  },
  cardTitle: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  cardDesc: {
    color: "red",
  }
});
