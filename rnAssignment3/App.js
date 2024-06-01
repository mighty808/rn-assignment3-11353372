import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View, SafeAreaView } from 'react-native';
import Header from './components/Header';
import OngoingTask from './components/OngoingTask';
import Category from './components/Category'

export default function App() {
  return (
    <ScrollView>
      <SafeAreaView style={styles.container}>
      <Header />
      <Category />
      <OngoingTask />
      <StatusBar style="auto" />
    </SafeAreaView>
    </ScrollView>
      
      
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F0E8',
  },
});
