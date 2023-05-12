import { setStatusBarBackgroundColor } from 'expo-status-bar';
import React from 'react';
import { View, Image, Button, StyleSheet } from 'react-native';

const IfoodInicial = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('./bcg.png')}
        style={styles.image}
      />
      <Button
        title="Fazer Pedido"
        onPress={() => navigation.navigate('Pagina1')}
      />
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
  image: {
    width: 300,
    height: 250,
    marginBottom: 16,
  },
  Button: {
    color: '#ea1d2c'
  },
  title: {
    color: '#000',
  },
});

export default IfoodInicial;
