import * as React from 'react';
import {Text, View, StyleSheet, TextInput} from 'react-native';

const App = () => {
  const [userInput, setUserInput] = React.useState('');

  let countText = 288 - userInput.length;
  let color = 'grey';
  if (countText < 0) {
    color = 'red';
  } else if (countText >= 0 && countText <= 10) {
    color = 'yellow';
   
  }
  const styles = StyleSheet.create({
    input: {
      padding: 10,
      width: '90%',
      height: 400,
      marginLeft: 'auto',
      marginRight: 'auto',
      marginTop: 20,
      borderColor: color,
      borderRadius: 15,     
      borderStyle: 'solid',
      borderWidth: 4,
    },
    userInput: {
      margin: 20,
      textAlign: 'center',
      color: color,
      fontWeight: '700',
    },
    heading: {
      textAlign: 'center',
      fontSize: 20,
      fontWeight: 'bold',
      margin: 40,
      backgroundColor: 'grey',
      padding: 20,
      borderRadius: 20,
      color: '#90e0ef',
    }
  });

 
  const textColor = (txt: string) => {
    setUserInput(txt);
  };
 
 
  return (
    <View>
      <Text style = {styles.heading}>Tweet Character Count App</Text>
      <TextInput placeholder='Start Typing your Tweet here...' style={styles.input} multiline={true} defaultValue={userInput} onChangeText={val => textColor(val)}
      />
      <View>
        <Text style={styles.userInput}>{countText} Characters remaining</Text>
      </View>
    </View>
  );
};

export default App;