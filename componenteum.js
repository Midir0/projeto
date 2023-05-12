import React from 'react';
import { View, Image, TouchableOpacity, StyleSheet } from 'react-native';

const IfoodScreen1 = () => {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Pagina2')}>
          <Image
            source={require('./caminho/para/comida1.jpg')}
            style={styles.image}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Pagina2')}>
          <Image
            source={require('./caminho/para/comida2.jpg')}
            style={styles.image}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.row}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Pagina2')}>
          <Image
            source={require('./caminho/para/comida3.jpg')}
            style={styles.image}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Pagina2')}>
          <Image
            source={require('./caminho/para/comida4.jpg')}
            style={styles.image}
          />
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.sairButton} onPress={() => navigation.navigate('Home')}>
        <Image
          source={require('./caminho/para/sair.png')}
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
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  button: {
    flex: 1,
    marginRight: 8,
  },
  image: {
    width: '100%',
    height: 150,
    borderRadius: 8,
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
});

export default IfoodScreen1;