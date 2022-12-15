import { StyleSheet, View, Text } from 'react-native';


import { getTheme } from '../components/Themed';
import Colors from '../constants/Colors';


export default function TabTwoScreen() {
  const theme = getTheme()
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab Two</Text>
      <View style={[styles.separator]} />
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
