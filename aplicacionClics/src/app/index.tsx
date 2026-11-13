import { useState } from "react";
import {ScrollView,StyleSheet,Text,TouchableOpacity,View,} from "react-native";

export default function App() {
  const [contador, setContador] = useState(0);
  const [registros, setRegistros] = useState<any[]>([]);

  const incrementarContador = () => {
    const nuevoContador = contador + 1;
    const ahora = new Date();
    const horaFormateada = ahora.toLocaleTimeString();

    setContador(nuevoContador);

    const nuevoRegistro = {
      id: Date.now().toString(),
      numero: nuevoContador,
      hora: horaFormateada,
    };
    setRegistros([nuevoRegistro, ...registros]);
  };