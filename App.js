import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Easing } from 'react-native';
import {useState} from 'react'
import TodoBox from './components/TodoBox'



export default function App() {

  const [bgCol, setBgCol] = useState(false)

  const applyBg = () => {
    setBgCol(current => !current)
  }
  
  // const change = (index) => {
  //   const newIndex = tempArr.splice(index, 1)

  //   console.log('color: '+newIndex)
  // }

  return (
    <View style={
      [
        styles.container,
        {backgroundColor: bgCol ? '#1B2430' : '#F9F9F9'},
      ]}>
      <View style={styles.header}>
        <Text style={[styles.headerText, {color: bgCol ? 'white' : 'black'}]}>Rencaanamu</Text>
        <View style={styles.colorsWrapper}>
          <TouchableOpacity onPress={applyBg}  style={[styles.colorCircle, styles.dark]}></TouchableOpacity>
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
    justifyContent: 'flex-end', 
    marginRight: 20,
  },
  colorCircle: {
    width: 30,
    height: 30,
    borderRadius: 50,
    borderColor:'white',
    borderWidth: 1,
  },
  dark: {
    backgroundColor: '#1B2430',
  },
});


















  // const [isBlue, setIsBlue] = useState(false)
  // const [isPink, setIsPink] = useState(false)
  // const [isGreen, setIsGreen] = useState(false)
  // const [isDark, setIsDark] = useState(false)

  // const changeBgBlue = () => {
  //   setIsBlue(current => !current)
  //   console.log('biru')
  // }
  // const changeBgPink = () => {
  //   setIsPink(current => !current)
  //   console.log('pink')
  // }
  // const changeBgGreen = () => {
  //   setIsGreen(current => !current)
  // }
  // const changeBgDark = () => {
  //   setIsDark(current => !current)
  // }






  // {backgroundColor: isBlue ? '#A9A8FF' : '#F9F9F9'},
// {backgroundColor: isPink ? '#FFB2A8' : '#F9F9F9'}