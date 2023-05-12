import React from 'react';
import { View, TouchableOpacity, Image, StyleSheet, Text } from 'react-native';

const IfoodScreen2 = () => {
  return (
    <View style={styles.container}>
        <text style={styles.text}>Restaurante Tem de Tudo</text>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Pagina1')}>
        <Image
          source={require('./assets/restaurant.jpg')}
          style={styles.buttonIcon}
        />
      </TouchableOpacity>
      <TouchableOpacity style={styles.sairButton} onPress={() => navigation.navigate('Home')}>
        <Image
          source={require('./assets/sair.png')}
          style={styles.sairIcon}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  button: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 24,
    marginBottom: 16,
  },
  buttonIcon: {
    width: 64,
    height: 64,
  },
  sairButton: {
    position: 'absolute',
    top: 32,
    right: 32,
  },
  sairIcon: {
    width: 32,
    height: 32,
  },
  text: {
    fontcize: 60,
    color: '#ea1d2c',
  }
});

export default IfoodScreen2;

