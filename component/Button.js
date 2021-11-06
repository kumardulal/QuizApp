import React, { useState } from 'react'
import { TouchableOpacity, Text } from 'react-native'
import Home from '../screen/Home'
import Quiz from '../screen/Quiz'


export default function Button({ setCurrentPage }) {
    const [buttonName, setButtonName] = useState("Start Quiz")

    const handlepress = () => {

        if (buttonName === "Start Quiz") {
            setCurrentPage(<Quiz />)
            setButtonName("Quit")
        }

        else {
            setCurrentPage(<Home />)
            setButtonName("Start Quiz")

        }

    }
    return (
        //button
        <TouchableOpacity
            onPress={handlepress}
            style={{
                height: 60,
                width: 300,
                backgroundColor: "orange",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 20,
                margin: 20
            }}>
            <Text>{buttonName}</Text>
        </TouchableOpacity>

    )
}
