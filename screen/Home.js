import React from 'react'
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function Home() {

    return (
        <SafeAreaView style={styles.container}>
            <Text style={{
                fontSize: 50,
                padding: 15,
                backgroundColor: "#53a3e5",
                color: "white",
                fontWeight: "bold",
                width: 350,
                textAlign: "center",
                marginTop: 80


            }}>🕵️‍♂️ WOW Quiz</Text>
            <View style={{ backgroundColor: "purple", padding: 20, width: "100%", position: "static", }}>
                <Text style={{ fontSize: 20 }}>Wrong Answer:"-2.5 points"</Text>
                <Text style={{ fontSize: 18 }}>Right Answer:"5 points"</Text>
                <Text style={{ fontSize: 15 }}>Surrender:"0 points"</Text>
                <Text style={{ fontSize: 15, color: "red" }}>Time for Each Question:"6 seconds"</Text>

            </View>
            <Text style={{ fontSize: 200 }}>👨‍💻</Text>
            <Text style={{
                fontSize: 25,
                marginLeft: 10,
                marginRight: 10,
                backgroundColor: '#adf7c3',
                padding: 25,
                borderTopRightRadius: 65
            }}> “A good programmer is someone who always looks both ways before crossing a one-way street.”-Doug Linder. </Text>




            <StatusBar style="auto" />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,

        alignItems: 'center',
        justifyContent: 'space-around',
        backgroundColor: "#275b8c",
    },
});
