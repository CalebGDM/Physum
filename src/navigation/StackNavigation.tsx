import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../types";
import LessonsScreen from "../screens/LessonsScreen";
import NotFoundScreen from "../screens/NotFoundScreen";
import QuizEndScreen from "../screens/QuizEndScreen";
import QuizScreen from "../screens/QuizScreen";
import SignUpScreen from "../screens/SignUpScreen";
import StartScreen from "../screens/StartScreen";
import TopicScreen from "../screens/TopicScreen";
import BottomTabNavigator from "./BottomTabNav";

const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="SignUp" component={SignUpScreen} options={{ headerShown: false }}/>
      <Stack.Screen name="Start" component={StartScreen} options={{ headerShown: false }}/>
      <Stack.Screen name="Root" component={BottomTabNavigator} options={{ headerShown: false }} />
      <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
      <Stack.Screen name="Quiz" component={QuizScreen}/>
      <Stack.Screen name="EndQuiz" component={QuizEndScreen}/>
      <Stack.Screen name="Topic" component={TopicScreen}/>
    </Stack.Navigator>
  );
}

export default RootNavigator