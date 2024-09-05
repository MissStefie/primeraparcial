import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const PropsParcial02 = ({route}) => {
  const {nombre, edad} = route.params;

  return (
    <View>
      <Text style={styles.text}>
        Mi nombre es {nombre}, actualmente tengo {edad} años.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    marginTop: 10,
    paddingHorizontal: 20,
    fontWeight: 'bold',
    color: 'black',
  },
});

export default PropsParcial02;
