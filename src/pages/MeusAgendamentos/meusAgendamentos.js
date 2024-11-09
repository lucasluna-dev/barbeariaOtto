import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import styles from './meusAgendamentosStyle';

const MeusAgendamentosScreen = () => {
    const route = useRoute();
    const navigation = useNavigation();
    const { serviceName, selectedDate, selectedTime, serviceValue } = route.params;

    return (
        <View style={styles.container}>
            <Image source={require('../../../assets/logo.png')} style={styles.logo} />
            <Text style={styles.title}>Meus Agendamentos</Text>

            <View style={styles.appointmentContainer}>
                <View style={styles.appointmentDetails}>
                    <Text style={styles.serviceName}>{serviceName}:</Text>
                    <Text style={styles.dateTime}>{selectedDate} - {selectedTime}</Text>
                </View>
                <Text style={styles.value}>R${serviceValue}.00</Text>

                <TouchableOpacity style={styles.cancelButton} onPress={()=> navigation.navigate("Servicos")}>
                    <Text style={styles.cancelButtonText}>Cancelar</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default MeusAgendamentosScreen;
