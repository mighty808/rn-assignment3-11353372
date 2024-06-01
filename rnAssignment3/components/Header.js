import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View, Image, TextInput, Button } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.mcontainer}>
        <View style={styles.container}>
    <View style={styles.textContainer}>
        <Text style={styles.text1}>Hello , Devs</Text>
        <Text>14 tasks today</Text>
    </View>
    <Image source={require('../profilepic.png')} style={styles.image}/>
    </View>

    <View style={styles.imgsection}>
        <TextInput placeholder='Search' style={styles.search}/>
        <Image source={require('../filter.png')} style={styles.image2}/>
      </View>

      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    marginBottom: 0
  },
  mcontainer: {
    marginTop: 50,
  },

  container: {
    flexDirection: 'row', 
    alignItems: 'center', 
    padding: 16,
},
textContainer: {
    flex: 1, 
    marginRight: 16, 
},

search: {
    backgroundColor: '#ffff',
    width: 260,
    height: 45,
    borderRadius: 10,
    marginLeft: 20,
  },
  
text1: {
    fontSize: 28,
    fontWeight: 'bold'
},

imgsection: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },


image: {
    width: 40,
    height: 40,
},
image2: {
    width: 35,
    height: 35,
    marginRight: 18,
  },
  
});
