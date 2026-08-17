import React from "react";
import { StyleSheet, Text, View } from "react-native";

// Funciones y variables
export default function All() {
  const NombreUsuario = "Luis Fernando";

  const ObtenerSaludo = (NombreUsuario: string) => {
    return `Buenas tardes ${NombreUsuario}! Bienvenido.`;
  };

  // Condicionales
  const edad = 17;

  const ValidarEdad = (edad: number) => {
    return edad >= 18 ? "Estado: Mayor de Edad" : "Estado: Menor de edad";
  };

  // Bucles .map()
  const ListaProductos = [
    { id: 1, nombre: "Laptop", precio: "Lps. 6,500" },
    { id: 2, nombre: "Mouse", precio: "Lps. 250" },
    { id: 3, nombre: "Audifonos Sony WHX-1400", precio: "Lps. 5,000" },
  ];

  return (
    <View style={styles.container}>
      {/* Ejercicio A */}
      <View style={styles.seccion}>
        <Text style={styles.titulo}>Funciones y Variables</Text>
        <Text style={styles.texto}>Usuario: {NombreUsuario}</Text>
        <Text style={styles.resultado}>{ObtenerSaludo(NombreUsuario)}</Text>
      </View>

      {/* Ejercicio B */}
      <View style={styles.seccion}>
        <Text style={styles.titulo}>Condiciones</Text>
        <Text style={styles.texto}>Edad: {edad} años</Text>
        <Text style={styles.resultado}>{ValidarEdad(edad)}</Text>
      </View>

      {/* Bucles con .map() */}
      <View style={styles.seccion}>
        <Text style={styles.titulo}>Bucles con .Map</Text>
        {ListaProductos.map((item) => (
          <Text key={item.id} style={styles.itemLista}>
            {item.nombre} - {item.precio}
          </Text>
        ))}
      </View>
    </View>
  );
}

// StyleSheet
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  seccion: {
    backgroundColor: '#ffffff',
    padding: 15,
    borderRadius: 8,
    marginBottom: 20,
    elevation: 2,
  },
  titulo: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#0284c7',
    marginBottom: 8,
  },
  texto: {
    fontSize: 14,
    color: '#333333',
  },
  resultado: {
    fontSize: 14,
    fontWeight: '600',
    color: '#16a34a',
    marginTop: 4,
  },
  itemLista: {
    fontSize: 14,
    color: '#4b5563',
    marginVertical: 2,
  },
});