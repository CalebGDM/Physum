import { View, Text, FlatList, ScrollView, Alert } from "react-native";
import React, { useEffect, useState } from "react";
import { styles } from "./QuizScreenStyle";
import { getTheme } from "../../components/Themed";
import Colors from "../../constants/Colors";
import { GStyles } from "../../constants/GeneralStyles";
import { Title } from "../../constants/Texts";
import quiz from "../../../assets/data/quiz";
import QuizAnswer from "../../components/QuizAnswer";
import CustomButtom from "../../components/CustomButtom";
import ProgressBar from "../../components/ProgressBar";

const QuizScreen = () => {
  const theme = getTheme();
  const [questionIndex, setQuestionIndex] = useState(0);
  const [question, setQuestion] = useState(quiz[questionIndex]);
  const [selectedAnswers, setSelectedAnswers] = useState<string[]>([]);
  const [answeredCorrectly, setAnswerCorrectly] = useState<boolean | undefined>(
    undefined
  );
  const [numberOfCorrectAnswers, setNumberOfCorrectAnswers] = useState(0)

  useEffect(() => {
    if(questionIndex == quiz.length){
      Alert.alert("Quiz Terminado", `Consestaste correctamente ${numberOfCorrectAnswers} de ${quiz.length}.`)
      return;
    }
    setQuestion(quiz[questionIndex]);
    setAnswerCorrectly(undefined);
    setSelectedAnswers([]);
  }, [questionIndex]);

  const isButtonDisabled = selectedAnswers.length == 0;
  const onChoicePressed = (choice: string) => {
    setSelectedAnswers((currentSelectedAnswers) => {
      if (currentSelectedAnswers.includes(choice)) {
        return currentSelectedAnswers.filter((answer) => answer != choice);
      } else {
        if (question.correctAnswer.length > 1) {
          return [...currentSelectedAnswers, choice];
        } else {
          return [choice];
        }
      }
    });
  };

  const onSubmit = () => {
    if (selectedAnswers.length != question.correctAnswer.length) {
      setAnswerCorrectly(false);
      return;
    }
    const isCorrect = question.correctAnswer.every((answer) =>
      selectedAnswers.includes(answer)
    );
    setAnswerCorrectly(isCorrect);
    if(isCorrect){
      setNumberOfCorrectAnswers((n) => n + 1)
    }
  };

  const onContinue = () => {
    setQuestionIndex((index) => index + 1);
  };
  return (
    <>
      <ProgressBar progress={(questionIndex / quiz.length) } style={{borderRadius: 0, height: 15, justifyContent: 'center'}}/>
      <ScrollView
        style={[
          GStyles.screen,
          { backgroundColor: Colors[theme].primary[500] },
        ]}
      >
        <Text style={[Title.Secondary, { textAlign: "center" }]}>
          {question.question}
        </Text>
        {/* Opciones */}
        <FlatList
          data={question.choices}
          renderItem={({ item }) => (
            <QuizAnswer
              answer={item}
              onPress={onChoicePressed}
              isSelected={selectedAnswers.includes(item)}
              disabled={answeredCorrectly != undefined}
            />
          )}
          numColumns={2}
          scrollEnabled={false}
        />

        <CustomButtom
          text="Siguiente Pregunta"
          color={Colors[theme].secondary[500]}
          disabled={isButtonDisabled}
          onPress={onSubmit}
        />
      </ScrollView>
      {answeredCorrectly == true && (
        <View
          style={[
            styles.correctAnswerBox,
            { backgroundColor: Colors[theme].secondary[100] },
          ]}
        >
          <Text
            style={[Title.Secondary, { color: Colors[theme].secondary[700] }]}
          >
            ¡Correcto!
          </Text>
          <CustomButtom
            text="Siguiente Pregunta"
            color={Colors[theme].secondary[500]}
            onPress={onContinue}
            style={{ marginTop: 10, marginBottom: 20 }}
          />
        </View>
      )}

      {answeredCorrectly == false && (
        <View
          style={[
            styles.correctAnswerBox,
            { backgroundColor: Colors[theme].tertiary[100] },
          ]}
        >
          <Text
            style={[Title.Secondary, { color: Colors[theme].tertiary[700] }]}
          >
            ¡Incorrecto!
          </Text>
          <CustomButtom
            text="Siguiente Pregunta"
            color={Colors[theme].tertiary[500]}
            onPress={onContinue}
            style={{ marginTop: 10, marginBottom: 20 }}
          />
        </View>
      )}
    </>
  );
};

export default QuizScreen;