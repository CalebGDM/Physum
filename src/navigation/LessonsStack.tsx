import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { LessonStackParamList, RootStackParamList } from "../../types";
import LessonScreen from "../screens/TopicScreen";
import LessonsScreen from "../screens/LessonsScreen";
import TopicsScreen from "../screens/TopicsScreen";
import UserLessonsScreen from "../screens/UserLessonsScreen";
import QuizScreen from "../screens/QuizScreen";
import QuizEndScreen from "../screens/QuizEndScreen";

const LessonStack = createNativeStackNavigator<LessonStackParamList>();

const LessonsStack = () => {
    return(
        <LessonStack.Navigator initialRouteName="Lessons">
            <LessonStack.Screen name="Lessons" component={LessonsScreen}/>
            <LessonStack.Screen name="UserLessons" component={UserLessonsScreen} />
            
            <LessonStack.Screen name="Topics" component={TopicsScreen}/>
            
        </LessonStack.Navigator>
    )
}

export default LessonsStack