import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Home from './componenteinicial';
import Pagina1 from './componenteum';
import Pagina2 from './componenteinicial';

const Tab = createMaterialTopTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Tab1" component={Home} />
      <Tab.Screen name="Tab2" component={Pagina1} />
      <Tab.Screen name="Tab3" component={Pagina2} />
    </Tab.Navigator>
  );
}

function App() {
    return (
      <NavigationContainer>
        <MyTabs />
      </NavigationContainer>
    );
  }