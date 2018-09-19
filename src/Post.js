import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

//import 'stylePost';

const Post = ({ title, autor, descricao }) => (
    <View style={styles.containerPost}>
      <Text style={styles.titulo}>{title}</Text>
      <Text style={styles.autorStyle}>{autor}</Text>
      <Text style={styles.border}></Text>
      <Text style={styles.post}>{descricao}</Text>
    </View>
);

Post.defaultProps = {
  autor: 'Diego Schell Fernandes',
}


const styles = StyleSheet.create({
  containerPost: {
      marginLeft: 20,
      marginTop: 20,
      marginRight: 20,
      padding: 20,
      height: 180,
      backgroundColor: '#FFFFFF',
  },
  titulo: {
      color: '#333333',
      fontWeight: 'bold',
      backgroundColor: '#FFFFFF',
      //marginTop: 20,
      //marginLeft: 20
  },
  autorStyle: {
    //marginLeft: 20,
    color: '#999999',
  },
  border:{
    marginTop: 10,
    borderColor: '#EEEEEE',
    borderTopWidth: 1,
  },
  post: {
    color: '#666666',
    justifyContent: 'flex-start'
  },
});


export default Post;
