import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Button from './component/Button';
import Home from './screen/Home';

export default function App() {
  const [currentpage, setCurrentPage] = useState(<Home />)
  return (
    <View style={styles.container}>
      {/* <Home setCurrentPage={setCurrentPage} /> */}
      {currentpage}
      <Button setCurrentPage={setCurrentPage} />



      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: "lightblue",

  },
});
