import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { RootTabParamList, RootTabScreenProps } from "../../types";
import useColorScheme from "../../hooks/useColorScheme";
import Colors from "../constants/Colors";
import HomeScreen from "../screens/HomeScreen";
import TabBarIcon from "./TabBarIcon";
import TabTwoScreen from "../screens/TabTwoScreen";
import LessonsScreen from "../screens/LessonsScreen";
import LessonsStack from "./LessonsStack";

const BottomTab = createBottomTabNavigator<RootTabParamList>();

function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme].tint,
        tabBarShowLabel: false
      }}>
      <BottomTab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={({ navigation }: RootTabScreenProps<'HomeScreen'>) => ({
          title: 'HomeScreen',
          tabBarIcon: ({ color, focused }) => <TabBarIcon name="home" color={color} focused={focused} title='Inicio'/>,
        })}
      />
      <BottomTab.Screen
        name="LessonsStack"
        component={LessonsStack}
        options={({ navigation }: RootTabScreenProps<'LessonsStack'>) => ({
          title: 'LessonsStack',
          tabBarIcon: ({ color, focused }) => <TabBarIcon name="list" color={color} focused={focused} title='Lecciones'/>,
          headerShown: false
        })}
      />
      <BottomTab.Screen
        name="TabTwo"
        component={TabTwoScreen}
        options={{
          title: 'Tab Two',
          tabBarIcon: ({ color, focused }) => <TabBarIcon name="code" color={color} focused={focused} title='HomeScreen'/>,
        }}
      />
    </BottomTab.Navigator>
  );
}

export default BottomTabNavigator;