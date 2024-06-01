import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View, Image, TextInput, Button, FlatList } from 'react-native';

export default function App() {
  return (
    <View>
        <View>
    <Text style={styles.categories}>Ongoing Task</Text>
  </View>

<FlatList
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
      key: '1',
      title: 'Mobile App Development',
    },
    {
      key: '2',
      title: 'Web Development',
    },
    {
      key: '3',
      title: 'Push Ups',
    },
    {
      key: '4',
      title: '202 Assignment',
    },
    {
      key: '5',
      title: 'Meeting with Mr. Nii',
    },
    {
        key: '6',
        title: 'Go to JQB on Mondays',
      },
      {
        key: '7',
        title: 'Work Out',
      },
      {
        key: '8',
        title: 'Get Ready for 208 Project',
      },
      {
        key: '9',
        title: 'Go Out',
      },
      {
        key: '10',
        title: 'Cook Diner',
      },
      {
        key: '11',
        title: 'Feed the Dogs',
      },
      {
        key: '12',
        title: 'Get a girlfriend',
      },
      {
        key: '13',
        title: 'Start and Finish 212 Assignment',
      },
      {
        key: '14',
        title: 'Go on a Hike',
      },
      {
        key: '15',
        title: 'Visit Family',
      },
      {
        key: '16',
        title: 'Get Prepared',
      },
      {
        key: '17',
        title: 'Future Aheads',
      },
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
        padding: 32,
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
