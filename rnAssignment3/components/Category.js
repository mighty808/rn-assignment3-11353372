import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View, Image, TextInput, Button, FlatList } from 'react-native';

export default function App() {
  return (
    <View>
        <View>
    <Text style={styles.categories}>Ongoing Task</Text>
  </View>

<FlatList
        horizontal
        data={DATA}
        renderItem={({item}) => <Item title={item.title} />}
        keyExtractor={item => item.key}
        style={styles.ongoinglist}
      />
    </View>
    

  );
}

const DATA = [
  {
    id: '1',
    image: require('../profilepic.png'),
    text: 'Beautiful Sunset',
  },
  {
    id: '2',
    image: require('../profilepic.png'),
    text: 'Snowy Mountains',
  },
  // Add more items as needed
];
  
  
  const Item = ({title}) => (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
    

const styles = StyleSheet.create({
    categories: {
        fontSize: 22,
        fontWeight: '600',
        marginLeft: 20,
        marginTop: 20,
      },    
  
      item: {
        backgroundColor: '#fff',
        padding: 42,
        marginVertical: 8,
        marginHorizontal: 16,
        borderRadius: 20,
        borderColor: '#E8D1BA',
      },
    
      title: {
        fontSize: 20,
        fontWeight: '500',
      },
    
});
