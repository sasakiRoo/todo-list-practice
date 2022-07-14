import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import TodoBox from './components/TodoBox'

export default function App() {

  const changeBg = () => {
    console.log('biru')
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Rencaanamu</Text>
        <View style={styles.colorsWrapper}>
          <TouchableOpacity style={[styles.colorCircle, styles.pink]}></TouchableOpacity>
          <TouchableOpacity onPress={changeBg} style={[styles.colorCircle, styles.blue]}></TouchableOpacity>
          <TouchableOpacity style={[styles.colorCircle, styles.green]}></TouchableOpacity>
          <TouchableOpacity style={[styles.colorCircle, styles.dark]}></TouchableOpacity>
        </View>
      </View>
      <View style={{marginVertical: 14, flexDirection: 'column', justifyContent: 'center', alignItems: 'center',}}>
        <ScrollView>
          <TodoBox/>
          <TodoBox/>
          <TodoBox/>
          <TodoBox/>
        </ScrollView>
      </View>
      <TouchableOpacity style={
        {
          backgroundColor: '#EEEEEE',
          width: 50,
          height: 50,
          borderRadius: 100,
          justifyContent: 'center', 
          alignItems: 'center', 
          position: 'absolute',
          bottom: 40,
          right: 30,
        }
      }>
        <Text style={{fontSize: 24}}>+</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F9F9',
  },
  header: {
    width: '100%',
    height: '8%',
    padding: 5,
    marginTop: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center', 
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 20,
  },
  colorsWrapper: {
    flexDirection: 'row',
    width: '40%',
    justifyContent: 'space-around', 
    marginRight: 20,
  },
  colorCircle: {
    width: 25,
    height: 25,
    borderRadius: 50,
  },
  pink: {
    backgroundColor: '#FFB2A8',
  },
  blue: {
    backgroundColor: '#A9A8FF',
  },
  green: {
    backgroundColor: '#A8FFB0',
  },
  dark: {
    backgroundColor: '#555555',
  },
});
