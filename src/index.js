import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
} from 'react-native';

import Post from 'Post';

import 'config/ReactotronConfig';
import 'config/DevToolsConfig';

const styles = StyleSheet.create({
  head: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#FFFFFF'
  },
  headItem: {
    fontSize: 16,
    fontWeight: 'bold',
    margin: 20,
    color: '#333333',
  },
  app: {
    flex: 1,
    backgroundColor: '#EE7777',
  },
});


export default class App extends Component {
  state = [
  {
    key: 0,
    titulo: 'Aprendendo React Native',
    autor: 'Diego Schell Fernandes',
    descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
  },
  {
    key: 1,
    titulo: 'Aprendendo React Native',
    autor: 'Diego Schell Fernandes',
    descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
  },
  {
    key: 2,
    titulo: 'Aprendendo React Native',
    autor: 'Diego Schell Fernandes',
    descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
  },
];
  render() {
    return (
      <View style={styles.app}>
        <View style={styles.head}>
          <Text style={styles.headItem}>GoNative App</Text>
        </View>
        <ScrollView>
          {this.state.map(estado => <Post key={estado.key} title={estado.titulo} autor={estado.autor} descricao={estado.descricao} /> )}
        </ScrollView>
      </View>
    );
  }
}
