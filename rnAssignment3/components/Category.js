import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View, Image, TextInput, Button, FlatList } from 'react-native';

export default function App() {
  return (
    <View>
        <Text style={styles.sectionTitle}>Categories</Text>
      <View style={styles.categoriesContainer}>
  <FlatList
    data={categories}
    horizontal={true}
    showsHorizontalScrollIndicator={false}
    renderItem={({ item }) => (
      <View style={styles.categoryCard}>
        <Image style={styles.categoryImage} source={item.image} />
        <Text style={styles.categoryName}>{item.name}</Text>
        <Text style={styles.categoryTasks}>{item.tasks} Tasks</Text>
      </View>
    )}
  />
</View>
    
</View>
  );
}

const categories = [
  { id: '1', name: 'Exercise', tasks: 12, image: require('../assets/desking.png') },
  { id: '2', name: 'Study', tasks: 12, image: require('../assets/sitting.png') },
  { id: '3', name: 'Code', tasks: 12, image: require('../assets/coding.png') },
  { id: '4', name: 'Cook', tasks: 12, image: require('../assets/cooking.png') },
  { id: '5', name: 'Drive', tasks: 12, image: require('../assets/driver.png') },
  { id: '6', name: 'Sleep', tasks: 12, image: require('../assets/sleep.png') },
  { id: '7', name: 'Travel', tasks: 12, image: require('../assets/travelling.png') },
  { id: '8', name: 'Game', tasks: 12, image: require('../assets/controller.png') },
  
];
  
  

const styles = StyleSheet.create({
    filterIcon: {
        width: 30,
        height: 30,
      },
      sectionTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
        marginLeft: 20,
        marginTop: 20,
      },
      categoriesContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        marginBottom: 20,
      },
      categoryCard: {
        width: 150,
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 25,
        marginBottom: 10,
        marginLeft: 20,
        alignItems: 'center',
      },
      categoryImage: {
        width: 80,
        height: 80,
        marginBottom: 10,
      },
      categoryName: {
        fontSize: 16,
        fontWeight: 'bold',
      },
      categoryTasks: {
        fontSize: 14,
        color: '#777',
      },
      taskCard: {
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 20,
        marginBottom: 10,
      },
      taskName: {
        fontSize: 16,
      },
    
});
