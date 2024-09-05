import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Input, ListItem } from '@rneui/base';

const Componente01 = ({ navigation }) => {
    const [nombre, setNombre] = useState('');
    const [edad, setEdad] = useState('');

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Bienvenido al Examen</Text>
            <Input
                placeholder='Ingrese su nombre'
                value={nombre}
                onChangeText={setNombre}
            />
            <Input
                placeholder='Ingrese su edad'
                value={edad}
                onChangeText={setEdad}
            />
            <ScrollView>
                <ListItem bottomDivider onPress={() => navigation.navigate('PropsParcial02', {
                    nombre,
                    edad,
                })}>
                    <ListItem.Content>
                        <ListItem.Title>PropsParcial02</ListItem.Title>
                    </ListItem.Content>
                </ListItem>
                <ListItem bottomDivider onPress={() => navigation.navigate('AxiosParcial03')}>
                    <ListItem.Content>
                        <ListItem.Title>AxiosParcial03</ListItem.Title>
                    </ListItem.Content>
                </ListItem>
                <ListItem bottomDivider onPress={() => navigation.navigate('AsyncStorageParcial04')}>
                    <ListItem.Content>
                        <ListItem.Title>AsyncStorageParcial04</ListItem.Title>
                    </ListItem.Content>
                </ListItem>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
         backgroundColor: '#F7EFE5'
    },
    text: {
        marginTop: 10,
        fontSize: 30,
        paddingHorizontal: 20,
        fontWeight: 'bold',
        color: 'black' ,
        textAlign: 'center',
    },
});

export default Componente01;
