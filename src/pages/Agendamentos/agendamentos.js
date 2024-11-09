import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, Modal, Alert } from 'react-native';
import { Calendar } from 'react-native-calendars';
import { useRoute, useNavigation } from '@react-navigation/native';
import { supabase } from "../../../services/supabase";  // Importando a instância do Supabase
import styles from './agendamentosStyle';

const timeslots = [
    '09:00', '09:15', '09:30', '12:00',
    '13:00', '14:00', '15:00', '15:40',
    '16:15', '16:45', '17:00', '18:30', '18:40'
];

const AgendamentosScreen = () => {
    const route = useRoute();
    const navigation = useNavigation();
    const { userId, serviceId, serviceName, serviceValue } = route.params;

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
        return date.toLocaleDateString('pt-BR', { day: '2-digit', month: '2-digit', year: 'numeric' });
    };

    const confirmarAgendamento = async () => {

        const { data, error } = await supabase
            .from('tb_agendamentos1')
            .insert([
                {
                    id_fk_user: userId,
                    id_fk_servico: serviceId,
                    data: selectedDate,
                    horario: selectedTime
                }
            ]);

        if (error) {
            Alert.alert("Erro", "Não foi possível confirmar o agendamento. Tente novamente.");
            console.error("Erro ao inserir agendamento:", error);
        } else {
            Alert.alert("Sucesso", "Agendamento confirmado!");
            toggleModal();

            navigation.navigate('MeusAgendamentos', {
                id_fk_user: userId,
                serviceName,
                selectedDate: formatDate(selectedDate),
                selectedTime,
                serviceValue
            });
        }
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
                            onPress={confirmarAgendamento}  // Chama a função de confirmação
                        >
                            <Text style={styles.buttonText}>Confirmar</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={styles.cancelButton}
                            onPress={toggleModal}
                        >
                            <Text style={styles.buttonText}>Cancelar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </View>
    );
};

export default AgendamentosScreen;
