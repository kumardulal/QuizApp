import React, { useState } from 'react'
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import questionAnswer from '../component/model/QuestionAnswer';


export default function Quiz() {
    const [currentQuestion, setCurrentQuestion] = useState(questionAnswer.q1.question)
    const [currentOption, setCurrentOption] = useState({ opt1: questionAnswer.q1.opt1, opt2: questionAnswer.q1.opt2, opt3: questionAnswer.q1.opt3 })
    const [next, setNext] = useState("Next")

    const [questionCount, setQuestionCount] = useState(1)

    const [checkAns, setcheckAns] = useState("👩‍🔧 Correct Answer: ??👹")
    //clickedAns is a color changing state of a options after clicked
    const [clickedAnsEffect, setClickedAnsEffect] = useState({ one: styles.optionsText, two: styles.optionsText, three: styles.optionsText })
    const [score, setScore] = useState(0)

    //********** */

    //Answer Validation  -with array of corrent options  number from 1 tp 10 questions.Chnage if u want to rearrange the correct answer,
    const CorrectAnswers = ['1', '3', '1', '1', '2', '3', '1', '2', '1', '2']


    const handleChecking = (optval) => {

        //matching with the correct answer array{CorrectAnswer}
        for (let i = 0; i < CorrectAnswers.length; i++) {
            // index no plus 1 should equal to the Question No.
            if (i + 1 === questionCount) {
                console.log(CorrectAnswers[i])
                // setcheckAns it will get the correct answer Number
                setcheckAns("👩‍🔧 Correct Answer: Option " + CorrectAnswers[i] + " 😋")
                validationcheck();
                function validationcheck() {
                    if ((CorrectAnswers[i] == "1") && (optval === '1')) {

                        // alert("congratulation, Right Answer ")
                        setScore(score + 5)
                        setClickedAnsEffect({ one: styles.optionsTextActive, two: styles.optionsText, three: styles.optionsText })


                    }
                    else if ((CorrectAnswers[i] == "2") && (optval === '2')) {

                        // alert("congratulation, Right Answer ")
                        setScore(score + 5)
                        setClickedAnsEffect({ one: styles.optionsText, two: styles.optionsTextActive, three: styles.optionsText })
                    }
                    else if ((CorrectAnswers[i] == "3") && (optval === '3')) {

                        // alert("congratulation, Right Answer ")
                        setScore(score + 5)
                        setClickedAnsEffect({ one: styles.optionsText, two: styles.optionsText, three: styles.optionsTextActive })
                    }
                    //if wrong answer minus 0.35 points
                    else {
                        setScore(score - 2.5)
                        setClickedAnsEffect({ one: styles.optionsTextwrong, two: styles.optionsTextwrong, three: styles.optionsTextwrong })


                    }

                }
            }

        }


    }
    //following conditin matches then the answer is correct and else answer is incorrect .
    const handleSurrender = () => {
        setcheckAns("Play Next Game Here to know the Answer")
        setTimeout(() => {

            handlenext();
        }, 2000);

    }
    const handlenext = () => {
        setcheckAns("👹 ??")
        setClickedAnsEffect({ one: styles.optionsText, two: styles.optionsText, three: styles.optionsText })
        if (currentQuestion === questionAnswer.q1.question) {
            setQuestionCount(2)
            setCurrentQuestion(questionAnswer.q2.question)
            setCurrentOption({ opt1: questionAnswer.q2.opt1, opt2: questionAnswer.q2.opt2, opt3: questionAnswer.q2.opt3 })
        }
        else if (currentQuestion === questionAnswer.q2.question) {
            setQuestionCount(3)
            setCurrentQuestion(questionAnswer.q3.question)
            setCurrentOption({ opt1: questionAnswer.q3.opt1, opt2: questionAnswer.q3.opt2, opt3: questionAnswer.q3.opt3 })
        }
        else if (currentQuestion === questionAnswer.q3.question) {
            setQuestionCount(4)
            setCurrentQuestion(questionAnswer.q4.question)
            setCurrentOption({ opt1: questionAnswer.q4.opt1, opt2: questionAnswer.q4.opt2, opt3: questionAnswer.q4.opt3 })
        }
        else if (currentQuestion === questionAnswer.q4.question) {
            setQuestionCount(5)
            setCurrentQuestion(questionAnswer.q5.question)
            setCurrentOption({ opt1: questionAnswer.q5.opt1, opt2: questionAnswer.q5.opt2, opt3: questionAnswer.q5.opt3 })
        }
        else if (currentQuestion === questionAnswer.q5.question) {
            setQuestionCount(6)
            setCurrentQuestion(questionAnswer.q6.question)
            setCurrentOption({ opt1: questionAnswer.q6.opt1, opt2: questionAnswer.q6.opt2, opt3: questionAnswer.q6.opt3 })
        }
        else if (currentQuestion === questionAnswer.q6.question) {
            setQuestionCount(7)
            setCurrentQuestion(questionAnswer.q7.question)
            setCurrentOption({ opt1: questionAnswer.q7.opt1, opt2: questionAnswer.q7.opt2, opt3: questionAnswer.q7.opt3 })
        }
        else if (currentQuestion === questionAnswer.q7.question) {
            setQuestionCount(8)
            setCurrentQuestion(questionAnswer.q8.question)
            setCurrentOption({ opt1: questionAnswer.q8.opt1, opt2: questionAnswer.q8.opt2, opt3: questionAnswer.q8.opt3 })
        }
        else if (currentQuestion === questionAnswer.q8.question) {
            setQuestionCount(9)
            setCurrentQuestion(questionAnswer.q9.question)
            setCurrentOption({ opt1: questionAnswer.q9.opt1, opt2: questionAnswer.q9.opt2, opt3: questionAnswer.q9.opt3 })
        }
        else if (currentQuestion === questionAnswer.q9.question) {
            setQuestionCount(10)
            setCurrentQuestion(questionAnswer.q10.question)
            setCurrentOption({ opt1: questionAnswer.q10.opt1, opt2: questionAnswer.q10.opt2, opt3: questionAnswer.q10.opt3 })
            setNext("FINISH")
        }

        else {
            alert(`Your Score: ${score} out of 50. Keep Playing 😁 `)
        }
    }
    return (
        <View style={styles.main}  >
            {/* //score part **********/}
            <View style={{
                height: 90, backgroundColor: "green",
                width: "90%", display: 'flex',
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-around",
                borderBottomEndRadius: 25,
                borderBottomLeftRadius: 55
            }}>
                <Text style={{
                    fontSize: 100,
                    color: "green"
                }}>🕴 </Text>
                <Text style={styles.scorestext}> Your Score : </Text>
                <Text style={{ fontSize: 20, color: 'white', marginRight: 22 }}> {score} </Text>
            </View>
            {/* *************** */}
            <Text style={{
                fontSize: 20,
                fontWeight: "bold",

                padding: 20,
                width: "100%",
                textAlign: "center"
            }}> {questionCount}: {currentQuestion}</Text>
            {/* answer options */}
            <View style={styles.wrapOption}>
                <TouchableOpacity onPress={() => handleChecking("1")}>

                    <Text style={clickedAnsEffect.one}> 1.{currentOption.opt1}</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => handleChecking("2")}
                >
                    <Text style={clickedAnsEffect.two}> 1.{currentOption.opt1}</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => handleChecking("3")}>
                    <Text style={clickedAnsEffect.three}> 1.{currentOption.opt1}</Text>
                </TouchableOpacity>
            </View>
            <View style={{ height: 50, display: "flex", flexDirection: "row" }}>
                <Text style={{ fontSize: 20, color: "white" }}>{checkAns}</Text>
                {/* <Text>{checkAns}</Text> */}
            </View>

            {/* button Next and check */}
            <View style={styles.btmWrapper}>
                <TouchableOpacity
                    onPress={handleSurrender}
                    style={styles.buttons}>
                    <Text>Surrender</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={handlenext}

                    style={styles.buttons}>
                    <Text>{next}</Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}
const styles = StyleSheet.create({
    main: {
        height: "80%",
        width: "100%",
        backgroundColor: "#275b8c",
        display: "flex",
        top: 50,
        alignItems: "center"
    },
    optionsText: {
        backgroundColor: "#8061e2",
        padding: 10,
        fontSize: 20,
        margin: 20,
        width: 300,
        borderTopLeftRadius: 20,
        textAlign: "center"

    },

    //after one of the option is clicked
    optionsTextActive: {
        backgroundColor: "green",
        padding: 10,
        fontSize: 20,
        margin: 20,
        width: 300,
        borderTopLeftRadius: 20,
        textAlign: "center"

    },
    optionsTextwrong: {
        backgroundColor: "red",
        padding: 10,
        fontSize: 20,
        margin: 20,
        width: 300,
        borderTopLeftRadius: 20,
        textAlign: "center"

    },
    scorestext: {
        fontSize: 18,
        fontWeight: "bold",

        textAlign: "center",
        color: "yellow"

    },
    wrapOption: {
        display: "flex",
        flexDirection: "column",
        flexWrap: "wrap",
        justifyContent: "center",


    },
    btmWrapper: {
        display: "flex",
        justifyContent: "space-around",
        flexDirection: "row",
        width: "100%",
        margin: 5
    },
    buttons: {
        width: 150,
        height: 60,
        backgroundColor: "yellow",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
        borderRadius: 20


    }
})
