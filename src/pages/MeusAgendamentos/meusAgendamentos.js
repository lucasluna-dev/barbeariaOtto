import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

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

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
        backgroundColor: '#fff',
    },
    logo: {
        width: 80,
        height: 80,
        alignSelf: 'center',
        marginBottom: 10,
        marginTop: 20,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
    },
    appointmentContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderRadius: 10,
        paddingVertical: 15,
        paddingHorizontal: 15,
        backgroundColor: '#f0f0f0',
        marginBottom: 10,
    },
    appointmentDetails: {
        flex: 1,
        flexDirection: 'column',
        marginRight: 10,
    },
    serviceName: {
        fontSize: 16,
        fontWeight: 'bold',
        flexWrap: 'wrap',
    },
    dateTime: {
        fontSize: 14,
        color: '#555',
        marginTop: 2,
    },
    value: {
        fontSize: 14,
        color: '#000',
        fontWeight: 'bold',
        marginHorizontal: 10,
    },
    cancelButton: {
        borderWidth: 1,
        borderColor: '#f00',
        borderRadius: 5,
        paddingVertical: 6,
        paddingHorizontal: 12,
    },
    cancelButtonText: {
        color: '#f00',
        fontSize: 14,
    },
});

export default MeusAgendamentosScreen;
