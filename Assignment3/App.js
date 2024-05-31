import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, TextInput, Image, ScrollView, FlatList } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.mcontainer}>
    <View style={styles.container}>
    <View style={styles.textContainer}>
        <Text style={styles.text1}>Hello , Devs</Text>
        <Text style={styles.text2}>14 tasks today</Text>
    </View>
    <Image source={require('./profilepic.png')} style={styles.image} />
    </View>

      
      <StatusBar style="auto" />

      <View style={styles.imgsection}>
        <TextInput placeholder='Search' style={styles.search}/>
        <Image source={require('./filter.png')} style={styles.image2}/>
      </View>

    <View>
      <Text style={styles.categories}>Categories</Text>
    </View>


 


    <View>
      <Text style={styles.categories}>Ongoing Task</Text>
    </View>

    <FlatList
        data={DATA}
        renderItem={({item}) => <Item title={item.title} />}
        keyExtractor={item => item.id}
      />
    
    </SafeAreaView>

    
  );
}


const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Mobile App Development',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
];

const Item = ({title}) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);


const styles = StyleSheet.create({
  mcontainer: {
    flex: 1,
    backgroundColor: '#F7F0E8',
    marginTop: 50,
  },

  container: {
    flexDirection: 'row', // Arrange items horizontally
    alignItems: 'center', // Align items vertically
    padding: 16, // Add some padding
},
textContainer: {
    flex: 1, // Take up remaining space
    marginRight: 16, // Add space between text and image
},
text1: {
    fontSize: 28,
    fontWeight: 'bold'
},
image: {
    width: 40,
    height: 40,
    // Other image styles...
},

image2: {
  width: 35,
  height: 35,
  marginLeft: 32,
},

search: {
  backgroundColor: '#ffff',
  width: 260,
  height: 45,
  borderRadius: 10,
  marginLeft: 20,
},

  imgsection: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  categories: {
    fontSize: 25,
    fontWeight: '500',
    marginLeft: 20,
    marginTop: 20,
  },

  item: {
    backgroundColor: '#fff',
    padding: 42,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 20,
    borderColor: '#000',
  },

  title: {
    fontSize: 22,
    fontWeight: '500',
  },
});
