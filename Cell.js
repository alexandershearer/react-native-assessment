import React from "react";
import { TouchableHighlight, Text, StyleSheet, View } from "react-native";

export default function Cell({ title, country, fans, year }) {
  return (
    <TouchableHighlight
      style={styles.TouchableHighlight}
      underlayColor="#000"
    >
      <View>
        <View style={styles.view1}>
          <Text style={styles.band_name}>{title}</Text>
          <Text style={styles.country}>{country}</Text>
        </View>
        <View style={styles.view2}>
          <Text style={styles.text}>{year}</Text>
          <Text style={styles.text}>{(fans * 1000).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</Text>
        </View>
      </View>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  view1: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },

  view2: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },

  band_name: {
    color: "#fff",
    fontSize: 26
  },

  country: {
    color: '#999999'
  },

  TouchableHighlight: {
    padding: 20,
    backgroundColor: "#000",
    borderBottomWidth: 2,
    borderColor: "#999999"
  },

  text: {
    fontSize: 20,
    fontFamily: "Futura",
    color: "#fff",
  },
});
