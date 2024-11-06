import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import styles from './barbeiroStyle';

// Mock de agendamentos, isso deve vir do banco de dados, select da tela de agendamentos
const initialAppointments = [
    {
        id: '1',
        user: 'João Silva',
        service: 'Corte de cabelo',
        dateTime: '08/11/2024 09:00',
        price: 50.00
    },
    {
        id: '2',
        user: 'Maria Oliveira',
        service: 'Barba e cabelo',
        dateTime: '08/11/2024 10:30',
        price: 70.00
    },
    {
        id: '3',
        user: 'Carlos Santos',
        service: 'Aparar barba',
        dateTime: '08/11/2024 13:00',
        price: 30.00
    },
    {
        id: '4',
        user: 'Ana Costa',
        service: 'Coloração de cabelo',
        dateTime: '08/11/2024 15:30',
        price: 120.00
    }
];

const BarbeiroScreen = () => {
    const [appointments, setAppointments] = useState(initialAppointments);

    const handleCancelAppointment = (id) => {
        Alert.alert(
            "Cancelar Agendamento",
            "Tem certeza de que deseja cancelar este agendamento?",
            [
                {
                    text: "Não",
                    style: "cancel"
                },
                {
                    text: "Sim",
                    onPress: () => {
                        setAppointments(appointments.filter(appointment => appointment.id !== id));
                    }
                }
            ]
        );
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Agendamentos do Otto</Text>
            <FlatList
                data={appointments}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View style={styles.appointmentContainer}>
                        <Text style={styles.label}>Cliente:</Text>
                        <Text style={styles.value}>{item.user}</Text>

                        <Text style={styles.label}>Serviço:</Text>
                        <Text style={styles.value}>{item.service}</Text>

                        <Text style={styles.label}>Data/Hora:</Text>
                        <Text style={styles.value}>{item.dateTime}</Text>

                        <Text style={styles.label}>Preço:</Text>
                        <Text style={styles.value}>R${item.price.toFixed(2)}</Text>

                        <TouchableOpacity
                            style={styles.cancelButton}
                            onPress={() => handleCancelAppointment(item.id)}
                        >
                            <Text style={styles.cancelButtonText}>Cancelar</Text>
                        </TouchableOpacity>
                    </View>
                )}
            />
        </View>
    );
};

export default BarbeiroScreen;
