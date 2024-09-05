import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Componente01 from './src/primera-parcial/ComponenteParcial01';
import PropsParcial02 from './src/primera-parcial/PropsParcial02';
import AxiosParcial03 from './src/primera-parcial/AxiosParcial03';
import AsyncStorageParcial04 from './src/primera-parcial/AsyncStorageParcial04';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Componente01">
        <Stack.Screen
          name="Componente01"
          component={Componente01}
          options={{title: 'Examen Primera Parcial'}} 
        />
        <Stack.Screen name="PropsParcial02" component={PropsParcial02} />
        <Stack.Screen name="AxiosParcial03" component={AxiosParcial03} />
        <Stack.Screen name="AsyncStorageParcial04" component={AsyncStorageParcial04} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
const styles = StyleSheet.create({});

export default App;
