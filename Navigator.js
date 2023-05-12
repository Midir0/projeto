import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import IfoodInicial from './componenteinicial';
import IfoodScreen1 from './componenteum';
import IfoodScreen2 from './componentedois';

const Stack = createStackNavigator();

const Navegador = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={IfoodInicial} />
        <Stack.Screen name="Pagina1" component={IfoodScreen1} />
        <Stack.Screen name="Pagina2" component={IfoodScreen2} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navegador;
