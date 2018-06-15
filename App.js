import React, { Component } from 'react';
import { Button, StyleSheet, Text, View, TextInput } from 'react-native';
//clase App
class App extends Component {

state = {
  texto: "",
}

//ES6
  imprimirTexto = () => {
    return this.state.texto
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Nashe Osorio</Text>
        <Button title="Prname"
                onPress={this.imprimirTexto}></Button>
        <TextInput style={styles.inputs}
                    value={this.state.texto}
                    onChangeText={(texto) => this.setState({texto})}
                    placeholder="Escriba su nombre"></TextInput>
      </View>
    );
  }
}

//es el estilo del componente
//escrito en css
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gray',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 40,
  },
  inputs: {
    height: 40,
    width: 300,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: "white",
    marginTop: 10,
    fontSize: 38,  
  }
});

//exporta la vista al
export default App;