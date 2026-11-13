import { useState } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";

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

  return (
    <View style={estilos.body}>
      <View style={estilos.container}>
        <Text style={estilos.h1}>Interactividad con el DOM</Text>
        <Text style={estilos.description}>
          Haz clic en el botón para incrementar el contador y registrar la hora exacta del evento en la tabla.
        </Text>
        <Text style={estilos.counterBox}>{contador}</Text>
        <TouchableOpacity
          style={estilos.btnClick}
          onPress={incrementarContador}
        >
          <Text style={estilos.btnText}>¡Haz Clic Aquí!</Text>
        </TouchableOpacity>
        <View style={estilos.tableContainer}>
          <View style={estilos.tableHeader}>
            <Text style={[estilos.th, estilos.cellNumero]}>N° Clic</Text>
            <Text style={[estilos.th, estilos.cellHora]}>Hora</Text>
          </View>

          <ScrollView style={estilos.tableBody}>
            {registros.map((item, index) => (
              <View
                key={item.id}
                style={[
                  estilos.tr,
                  index % 2 === 0 ? estilos.trEven : null,
                ]}
              >
                <Text style={[estilos.td, estilos.cellNumero]}>{item.numero}</Text>
                <Text style={[estilos.td, estilos.cellHora]}>{item.hora}</Text>
              </View>
            ))}
          </ScrollView>
        </View>
      </View>
    </View>
  );
}

const estilos = StyleSheet.create({
  body: { flex: 1, backgroundColor: "#f4f7f6", justifyContent: "center", alignItems: "center", padding: 20 },
  container: { backgroundColor: "#ffffff", padding: 20, borderRadius: 12, width: "100%", maxWidth: 380, elevation: 4, alignItems: "center" },
  h1: { fontSize: 20, fontWeight: "bold", color: "#333", textAlign: "center", marginBottom: 8 },
  description: { fontSize: 13, color: "#666", textAlign: "center", marginBottom: 15 },
  counterBox: { fontSize: 48, color: "#2196F3", fontWeight: "bold", marginBottom: 20 },
  btnClick: { backgroundColor: "#4CAF50", padding: 12, borderRadius: 8, width: "100%", alignItems: "center", marginBottom: 20 },
  btnText: { color: "white", fontSize: 16, fontWeight: "bold" },
  tableContainer: { width: "100%", maxHeight: 180, borderWidth: 1, borderColor: "#ddd", borderRadius: 6 },
  tableHeader: { flexDirection: "row", backgroundColor: "#f8f9fa", borderBottomWidth: 1, borderBottomColor: "#ddd", paddingVertical: 8 },
  tableBody: { maxHeight: 130 },
  tr: { flexDirection: "row", borderBottomWidth: 1, borderBottomColor: "#eee", paddingVertical: 8 },
  trEven: { backgroundColor: "#fafafa" },
  td: { fontSize: 13, color: "#333", textAlign: "center" },
  th: { fontSize: 13, fontWeight: "bold", color: "#333", textAlign: "center" },
  cellNumero: { flex: 1 },
  cellHora: { flex: 1 },
});