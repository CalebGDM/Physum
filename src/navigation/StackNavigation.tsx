import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../types";
import ConfirmAccountScreen from "../screens/ConfirmAccountScreen";
import LogInScreen from "../screens/LogInScreen";
import NotFoundScreen from "../screens/NotFoundScreen";
import QuizEndScreen from "../screens/QuizEndScreen";
import QuizScreen from "../screens/QuizScreen";
import ResetPassordScrren from "../screens/ResetPassordScrren";
import ResetPasswordCodeScreen from "../screens/ResetPasswordCodeScreen";
import SignInScreen from "../screens/SignInScreen";
import StartScreen from "../screens/StartScreen";
import TopicScreen from "../screens/TopicScreen";
import BottomTabNavigator from "./BottomTabNav";

const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Start" component={StartScreen} options={{ headerShown: false }}/>
      <Stack.Screen name="LogIn" component={LogInScreen} options={{ headerShown: false }}/>
      <Stack.Screen name="SignIn" component={SignInScreen} options={{ headerShown: false }}/>
      <Stack.Screen name="ConfirmAccount" component={ConfirmAccountScreen} options={{ headerShown: false }}/> 
      <Stack.Screen name="ResetPasswordCode" component={ResetPasswordCodeScreen} options={{headerShown: false}}/>
      <Stack.Screen name="ResetPassword" component={ResetPassordScrren} options={{headerShown: false}}/>
      

      <Stack.Screen name="Root" component={BottomTabNavigator} options={{ headerShown: false }} />
      <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
      <Stack.Screen name="Quiz" component={QuizScreen}/>
      <Stack.Screen name="EndQuiz" component={QuizEndScreen}/>
      <Stack.Screen name="Topic" component={TopicScreen}/>
    </Stack.Navigator>
  );
}

export default RootNavigator