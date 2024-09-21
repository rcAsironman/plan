import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Stack from './src/components/Stack';
import { SafeAreaView } from 'react-native';
import { ThemeProvider } from './src/theme/ThemeProvider';


export default function App() {


  return (

 <ThemeProvider>
   <Stack/>
 </ThemeProvider>
   
  
  
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
