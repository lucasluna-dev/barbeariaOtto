import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, Modal } from 'react-native';
import { Calendar } from 'react-native-calendars';
import { useRoute } from '@react-navigation/native';
import styles from './agendamentosStyle';

//Mock dos horários disponíveis, isso deve vir do banco de dados
const timeslots = [
    '09:00', '09:15', '09:30', '12:00',
    '13:00', '14:00', '15:00', '15:40',
    '16:15', '16:45', '17:00', '18:30', '18:40'
];

const AgendamentosScreen = ({ navigation }) => {
    const route = useRoute();
    const { serviceId, serviceName, serviceValue } = route.params;

    console.log("Service ID: ", serviceId);
    console.log("Service Name: ", serviceName);
    console.log("Service Value:", serviceValue);

    const [selectedDate, setSelectedDate] = useState('');
    const [selectedTime, setSelectedTime] = useState(null);
    const [isModalVisible, setModalVisible] = useState(false);


    const onDateSelect = (day) => {
        setSelectedDate(day.dateString);
    };

    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };

    const formatDate = (dateString) => {
        const date = new Date(dateString + 'T00:00:00');
        const options = { day: '2-digit', month: '2-digit', year: 'numeric' };
        return date.toLocaleDateString('pt-BR', options);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{serviceName}</Text>

            <Calendar
                onDayPress={onDateSelect}
                markedDates={{
                    [selectedDate]: { selected: true, selectedColor: '#000' },
                }}
                theme={{
                    selectedDayBackgroundColor: '#000',
                    todayTextColor: '#000',
                    arrowColor: '#000',
                }}
                style={styles.calendar}
            />

            <Text style={styles.label}>Horários Disponíveis:</Text>
            <FlatList
                data={timeslots}
                keyExtractor={(item) => item}
                numColumns={3}
                contentContainerStyle={styles.timeslotsContainer}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        style={[
                            styles.timeslot,
                            selectedTime === item && styles.selectedTimeslot,
                        ]}
                        onPress={() => setSelectedTime(item)}
                    >
                        <Text
                            style={[
                                styles.timeslotText,
                                selectedTime === item && styles.selectedTimeslotText,
                            ]}
                        >
                            {item}
                        </Text>
                    </TouchableOpacity>
                )}
            />

            <TouchableOpacity
                style={styles.button}
                onPress={toggleModal}
                disabled={!selectedDate || !selectedTime}
            >
                <Text style={styles.buttonText}>Confirmar Agendamento</Text>
            </TouchableOpacity>

            <Modal
                visible={isModalVisible}
                transparent={true}
                animationType="slide"
                onRequestClose={toggleModal}
            >
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <Text style={styles.modalTitle}>Confirmar Agendamento</Text>

                        <Text style={styles.label}>Serviço:</Text>
                        <Text style={styles.value}>{serviceName}</Text>

                        <Text style={styles.label}>Data:</Text>
                        <Text style={styles.value}>{formatDate(selectedDate)}</Text>

                        <Text style={styles.label}>Horário:</Text>
                        <Text style={styles.value}>{selectedTime}</Text>

                        <Text style={styles.label}>Valor:</Text>
                        <Text style={styles.value}>R${serviceValue}.00</Text>

                        <TouchableOpacity
                            style={styles.confirmButton}
                            onPress={() => {
                                toggleModal();
                                navigation.navigate('MeusAgendamentos', {
                                    serviceName,
                                    selectedDate: formatDate(selectedDate),
                                    selectedTime,
                                    serviceValue
                                });
                            }}
                        >
                            <Text style={styles.buttonText}>Confirmar</Text>
                        </TouchableOpacity>


                        <TouchableOpacity
                            style={styles.cancelButton}
                            onPress={toggleModal}
                        >
                            <Text style={styles.buttonText} onPress={() => navigation.navigate('Servicos')} >Cancelar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>

        </View>
    );
};

export default AgendamentosScreen;
