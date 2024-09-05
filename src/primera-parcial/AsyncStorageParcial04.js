import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Alert} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Input, Button, ListItem, Text} from '@rneui/themed';

const AsyncStorage04 = () => {
  const [codigo, setCodigo] = useState('');
  const [carrera, setCarrera] = useState('');
  const [facultad, setFacultad] = useState('');
  const [dataList, setDataList] = useState([]);
  const [isDisabled, setIsDisabled] = useState(false);

  useEffect(() => {
    listar();
  }, []);

  const listar = async () => {
    try {
      setIsDisabled(false);
      const keys = await AsyncStorage.getAllKeys();
      const items = await AsyncStorage.multiGet(keys);

      const data = items.map(([id, value]) => {
        const {carrera, facultad} = JSON.parse(value);
        return {id, carrera, facultad};
      });

      setDataList(data);
    } catch (error) {
      console.error('Error cargando lista', error);
    }
  };

  const editar = (id, carrera, facultad) => {
    setCodigo(id);
    setCarrera(carrera);
    setFacultad(facultad);
    setIsDisabled(true);
  };

  const guardarOActualizar = async () => {
    try {
      if (
        codigo.trim() === '' ||
        carrera.trim() === '' ||
        facultad.trim() === ''
      ) {
        Alert.alert(
          'Error',
          'Los campos codigo, carrera y facultad no pueden estar vacíos',
        );
        return;
      }

      const data = {carrera, facultad};
      await AsyncStorage.setItem(codigo, JSON.stringify(data));

      setCodigo('');
      setCarrera('');
      setFacultad('');
      listar();
      Alert.alert(
        'Éxito',
        isDisabled ? 'Datos actualizados' : 'Datos guardados',
      );
    } catch (error) {
      Alert.alert('Error', 'Error al guardar los datos');
      console.error(error);
    }
  };

  const eliminar = async id => {
    Alert.alert(
      'Confirmar eliminación',
      '¿Estás seguro de eliminar este dato?',
      [
        {text: 'Cancelar', style: 'cancel'},
        {
          text: 'Eliminar',
          onPress: async () => {
            try {
              await AsyncStorage.removeItem(id);
              listar();
              Alert.alert('Éxito', 'Datos eliminados');
            } catch (error) {
              Alert.alert('Error', 'Error al eliminar los datos');
              console.error(error);
            }
          },
        },
      ],
      {cancelable: true},
    );
  };

  return (
    <View style={styles.container}>
      <Input
        placeholder="Ingrese el codigo"
        disabled={isDisabled}
        value={codigo}
        onChangeText={setCodigo}
        style={styles.input}
      />
      <Input
        placeholder="Ingrese su carrera"
        value={carrera}
        onChangeText={setCarrera}
        style={styles.input}
      />
      <Input
        placeholder="Ingrese su facultad"
        value={facultad}
        onChangeText={setFacultad}
        style={styles.input}
      />
      <Button
        title={isDisabled ? 'Actualizar' : 'Guardar'}
        onPress={guardarOActualizar}
      />
      <Text h4 style={styles.title}>
        Lista de Datos:
      </Text>
      {dataList.map(({id, carrera, facultad}) => (
        <ListItem key={id} bottomDivider>
          <ListItem.Content>
            <ListItem.Subtitle>{id}</ListItem.Subtitle>
            <ListItem.Title>{carrera}</ListItem.Title>
            <ListItem.Title>{facultad}</ListItem.Title>
          </ListItem.Content>
          <Button
            icon={{
              name: 'edit',
              type: 'font-awesome',
              size: 15,
              color: 'white',
            }}
            buttonStyle={styles.button}
            onPress={() => editar(id, carrera, facultad)}
          />
          <Button
            icon={{
              name: 'trash',
              type: 'font-awesome',
              size: 15,
              color: 'white',
            }}
            buttonStyle={[styles.button, styles.deleteButton]}
            onPress={() => eliminar(id)}
          />
        </ListItem>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  input: {
    marginBottom: 15,
  },
  title: {
    marginVertical: 10,
  },
  button: {
    marginLeft: 10,
  },
  deleteButton: {
    backgroundColor: 'red',
  },
});

export default AsyncStorage04;
