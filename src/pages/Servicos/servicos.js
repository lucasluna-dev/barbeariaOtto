import React from 'react';
import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native';
import styles from './servicosStyle';

// Mock dos Serviços - isso deve vir do banco de dados
const services = [
    { id: '1', name: 'Corte Simples', value: 20 },
    { id: '2', name: 'Corte Disfarçado', value: 30 },
    { id: '3', name: 'Corte Tesoura', value: 40 },
    { id: '4', name: 'Corte Infantil', value: 40 },
    { id: '5', name: 'Barba Simples', value: 15 },
    { id: '6', name: 'Barba Modelada', value: 20 },
    { id: '7', name: 'Sobrancelha', value: 7 },
    { id: '8', name: 'Corte Reflexo', value: 70 },
    { id: '9', name: 'Corte Nevou', value: 90 },
    { id: '10', name: 'Pigmentação', value: 10 },
    { id: '11', name: 'Pézinho', value: 10 },
    { id: '12', name: 'Combo Completo', value: 50 },
];

const ServicesScreen = ({ navigation }) => {
    const renderServiceItem = ({ item }) => (
        <View style={styles.serviceItem}>
            <Image source={require('../../../assets/logo.png')} style={styles.serviceImage} />
            <Text style={styles.serviceName}>{item.name}</Text>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Agendamentos', { serviceId: item.id, serviceName: item.name, serviceValue: item.value })}>
                <Text style={styles.buttonText}>Agendar</Text>
            </TouchableOpacity>
        </View>
    );

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Bem-vindo à Barbearia Otto!</Text>
            <Image source={require('../../../assets/mustache.png')} style={styles.mustacheIcon} />
            <FlatList
                data={services}
                keyExtractor={(item) => item.id}
                renderItem={renderServiceItem}
                contentContainerStyle={styles.list}
            />
        </View>
    );
};

export default ServicesScreen;
