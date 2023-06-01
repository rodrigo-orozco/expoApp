import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, SafeAreaView } from 'react-native';

export default function App() {

  const [text, onChangeText] = React.useState('Useless Text');
  const [number, onChangeNumber] = React.useState('');

  return (
    <View style={styles.container}>

      <Image
        style={{width:100, height:100}}
        source={{uri: 'https://vamiasolutions.com/images/uploads/logo.png'}}
      />
        
    <Text style={styles.text} >Vamia Solutions</Text>

    <SafeAreaView>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
      />
    </SafeAreaView>

      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    alignItems: 'center',
    justifyContent: 'center',
  },

  text: {
    color: '#ffffff',

  }
});
