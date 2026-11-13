import { useState } from "react";
import {ScrollView,StyleSheet,Text,TouchableOpacity,View,} from "react-native";

export default function App() {
  const [contador, setContador] = useState(0);
  const [registros, setRegistros] = useState<any[]>([]);