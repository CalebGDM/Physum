import {
  View,
  Text,
  FlatList,
  ScrollView,
  Alert,
  TouchableOpacity,
  Platform,
} from "react-native";
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
import { LessonStackParamList, RootStackParamList } from "../../../types";
import Animated, { SlideInDown, SlideOutDown } from "react-native-reanimated";
import useApplyHeaderWorkaround from "../../../hooks/useAplyHeaderWorks";
import { Analytics, Auth, DataStore } from "aws-amplify";
import { Quiz, QuizQuestion, QuizResult } from "../../models";
import LoadingScreen from "../LoadingScreen";

const QuizScreen = ({ navigation, route }: RootStackParamList<"Quiz">) => {
  const [quiz, setQuiz] = useState<Quiz | undefined>(undefined);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [questions, setQuestions] = useState<QuizQuestion[]>([]);
  const question = questions[questionIndex];
  const [selectedAnswers, setSelectedAnswers] = useState<string[]>([]);
  useApplyHeaderWorkaround(navigation.setOptions);
  const [answeredCorrectly, setAnswerCorrectly] = useState<boolean | undefined>(
    undefined
  );
  const [numberOfCorrectAnswers, setNumberOfCorrectAnswers] = useState(0);
  const [wrongAnswersIDs, setWorngAnswersIds] = useState<string[]>([]);
  const [previousResoult, setPreviousResults] = useState<
    QuizResult | undefined
  >();
  const quizId = route.params.id;

  useEffect(() => {
    if (quizId) {
      Analytics.record({
        name: "quizOpened",
        attributes: { quizId: quizId },
      });
    }
  }, [quizId]);
  useEffect(() => {
    DataStore.query(Quiz, quizId).then(setQuiz);
  }, [quizId]);
  console.log(quiz);

  useEffect(() => {
    if (quiz) {
      (async () => {
        const questions = await DataStore.query(QuizQuestion);
        setQuestions(questions.filter((q) => q.quizID == quiz.id));

        const userData = await Auth.currentAuthenticatedUser();
        const quizResults = await DataStore.query(QuizResult);

        const myQuizResult = quizResults.filter(
          (qr) => qr.quizID == quiz.id && qr.sub == userData?.attributes.sub
        );

        const myPreviousResult = myQuizResult.reduce(
          (acc: undefined | QuizResult, curr) =>
            !acc || curr.attemps > acc.attemps ? curr : acc,
          undefined
        );
        setPreviousResults(myPreviousResult);

        // obtener resultados anteriores
      })();
    }
  }, [quiz]);
  console.log(questions);

  useEffect(() => {
    if (answeredCorrectly == false && !wrongAnswersIDs.includes(question.id)) {
      setWorngAnswersIds([...wrongAnswersIDs, question.id]);
    }
  }, [answeredCorrectly]);

  useEffect(() => {
    (async () => {
      if (questionIndex == questions.length && questionIndex > 0) {
        const userData = await Auth.currentAuthenticatedUser();
        if (quiz && userData) {
          const precentage = numberOfCorrectAnswers / questions.length
          const attemps = previousResoult ? previousResoult.attemps + 1 : 1
          DataStore.save(
            new QuizResult({
              sub: userData?.attributes.sub,
              nofQuestions: questions.length,
              nofCorretAnswers: numberOfCorrectAnswers,
              precentage,
              failedQuestions: wrongAnswersIDs,
              attemps,
              quizID: quiz?.id,
            })
          );
          Analytics.record({
            name: "quisFinished",
            attributes: {
              quizId: quizId,
            },
            metrics: {
              percentage: precentage,
              attemp: attemps,
            }
          });
        }

       

        navigation.navigate("EndQuiz", {
          numberOfQuestions: questions.length,
          numberOfCorrectAnswers: numberOfCorrectAnswers,
        });
        return;
      }

      setAnswerCorrectly(undefined);
      setSelectedAnswers([]);
    })();
  }, [questionIndex]);

  const isButtonDisabled = selectedAnswers.length == 0;
  const onChoicePressed = (choice: string) => {
    if (!question) {
      return;
    }
    setSelectedAnswers((currentSelectedAnswers) => {
      if (currentSelectedAnswers.includes(choice)) {
        return currentSelectedAnswers.filter((answer) => answer != choice);
      } else {
        if (question.correctAnswers && question?.correctAnswers?.length > 1) {
          return [...currentSelectedAnswers, choice];
        } else {
          return [choice];
        }
      }
    });
  };

  const onSubmit = () => {
    if (!question) {
      return;
    }
    if (selectedAnswers.length != question?.correctAnswers?.length) {
      setAnswerCorrectly(false);
      return;
    }
    const isCorrect = question.correctAnswers.every((answer) =>
      selectedAnswers.includes(answer)
    );
    setAnswerCorrectly(isCorrect);
    if (isCorrect) {
      setNumberOfCorrectAnswers((n) => n + 1);
    }
  };

  const onContinue = () => {
    setQuestionIndex((index) => index + 1);
  };

  if (!question) {
    return <LoadingScreen />;
  }

  return (
    <>
      <ProgressBar
        progress={questionIndex / questions.length}
        style={{ borderRadius: 0, height: 15, justifyContent: "center" }}
      />
      <View
        style={[GStyles.screen, { backgroundColor: Colors.light.primary[500] }]}
      >
        <Text style={[Title.Secondary, { textAlign: "center" }]}>
          {question?.question}
        </Text>

        {/* Opciones */}
        {question.choises && (
          <View style={{ flex: 1 }}>
            <FlatList
              data={question.choises}
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
              horizontal={false}
              columnWrapperStyle={{ flex: 1, marginLeft: "5%" }}
            />
          </View>
        )}
        <CustomButtom
          text="Siguiente Pregunta"
          color={Colors.light.secondary[500]}
          disabled={isButtonDisabled}
          onPress={onSubmit}
          style={{ marginBottom: Platform.OS === "ios" ? 30 : 10 }}
        />
      </View>

      {answeredCorrectly == true && (
        <Animated.View
          entering={SlideInDown}
          exiting={SlideOutDown}
          style={[
            styles.correctAnswerBox,
            { backgroundColor: Colors.light.secondary[100] },
          ]}
        >
          <Text
            style={[Title.Secondary, { color: Colors.light.secondary[700] }]}
          >
            ¡Correcto!
          </Text>
          <CustomButtom
            text="Siguiente Pregunta"
            color={Colors.light.secondary[500]}
            onPress={onContinue}
            style={{ marginTop: 10, marginBottom: 20 }}
          />
        </Animated.View>
      )}

      {answeredCorrectly == false && (
        <Animated.View
          entering={SlideInDown}
          exiting={SlideOutDown}
          style={[
            styles.correctAnswerBox,
            { backgroundColor: Colors.light.tertiary[100] },
          ]}
        >
          <Text
            style={[Title.Secondary, { color: Colors.light.tertiary[700] }]}
          >
            ¡Incorrecto!
          </Text>
          <CustomButtom
            text="Siguiente Pregunta"
            color={Colors.light.tertiary[500]}
            onPress={onContinue}
            style={{ marginTop: 10, marginBottom: 20 }}
          />
        </Animated.View>
      )}
    </>
  );
};

export default QuizScreen;
