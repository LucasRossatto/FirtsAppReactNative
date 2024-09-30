import { StatusBar } from "expo-status-bar";
import {ScrollView } from "react-native";
import Prime from "./src/Telas/Prime";
import Texto from "./src/Components/Texto";
import Contador from "./src/Components/Contador";
import Timer from "./src/Components/TImer";
import LoginForm from "./src/Components/Form";
import CadNews from "./src/Components/CadNews";

export default function App() {
  return (
    <ScrollView>
      <Prime />
      <Texto />
      <CadNews/>
      <Contador/>
      <StatusBar style="auto" />
      <Timer/>
      <LoginForm/>
    </ScrollView>
  );
}
