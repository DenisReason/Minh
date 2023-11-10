import { StatusBar } from 'expo-status-bar';
import react, { useState } from 'react';
import { StyleSheet, Text, View, Button} from 'react-native';


export default function App() {
  const [count, setcount] = useState(0)
  return (
    <View style={styles.container}>
      <Button onPress={()=>{
        setcount(count+1)
      }} title='Increase'></Button>
      <Text>{count}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
