import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, Image, ActivityIndicator, ScrollView, Modal, Button } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { supabase } from "../../../services/supabase";
import styles from './meusAgendamentosStyle';

const MeusAgendamentosScreen = () => {
    const navigation = useNavigation();
    const route = useRoute();
    const [appointments, setAppointments] = useState([]);
    const [loading, setLoading] = useState(true);
    const [showModal, setShowModal] = useState(false); 
    const [appointmentToCancel, setAppointmentToCancel] = useState(null); 
    const userId = route.params?.id_fk_user;

    const formatDate = (dateString) => {
        const date = new Date(dateString + 'T00:00:00');
        return date.toLocaleDateString('pt-BR', { day: '2-digit', month: '2-digit', year: 'numeric' });
    };

    useEffect(() => {
        const fetchAppointments = async () => {
            if (!userId) return;

            console.log("UserId (MeusAgendamentos): ", userId);

            const { data, error } = await supabase
                .from('tb_agendamentos1')
                .select(`
                    id,
                    data,
                    horario,
                    tb_servicos1 (nome, valor)
                `)
                .eq('id_fk_user', userId);

            if (error) {
                console.error("Erro ao buscar agendamentos:", error);
            } else {
                console.log("Dados dos agendamentos:", data);
                // Formate a data ao salvar os agendamentos
                const formattedAppointments = data.map(appointment => ({
                    ...appointment,
                    formattedDate: formatDate(appointment.data),
                }));
                setAppointments(formattedAppointments);
            }

            setLoading(false);
        };

        fetchAppointments();
    }, [userId]);

    // Função para abrir o modal de confirmação
    const handleCancel = (appointmentId) => {
        setAppointmentToCancel(appointmentId);
        setShowModal(true); // Exibe o modal
    };

    // Função para excluir o agendamento
    const confirmCancel = async () => {
        try {
            const { error } = await supabase
                .from('tb_agendamentos1')
                .delete()
                .eq('id', appointmentToCancel);

            if (error) {
                console.error("Erro ao cancelar agendamento:", error);
            } else {
                // Remover o agendamento da lista local
                setAppointments(prevAppointments => prevAppointments.filter(appointment => appointment.id !== appointmentToCancel));
            }
        } catch (error) {
            console.error("Erro ao excluir agendamento:", error);
        } finally {
            setShowModal(false); 
            setAppointmentToCancel(null); 
        }
    };

    const cancelCancel = () => {
        setShowModal(false);
        setAppointmentToCancel(null);
    };

    return (
        <View style={styles.container}>
            <Image source={require('../../../assets/logo.png')} style={styles.logo} />
            <Text style={styles.title}>Meus Agendamentos</Text>

            {loading ? (
                <ActivityIndicator size="large" color="#000" />
            ) : (
                <ScrollView contentContainerStyle={styles.appointmentsList}>
                    {appointments.length > 0 ? (
                        appointments.map((appointment) => (
                            <View key={appointment.id} style={styles.appointmentContainer}>
                                <View style={styles.appointmentDetails}>
                                    <Text style={styles.serviceName}>{appointment.tb_servicos1.nome}:</Text>
                                    {/* Exibir a data formatada */}
                                    <Text style={styles.dateTime}>{appointment.formattedDate} - {appointment.horario}</Text>
                                </View>
                                <Text style={styles.value}>R${appointment.tb_servicos1.valor}.00</Text>
                                <TouchableOpacity
                                    style={styles.cancelButton}
                                    onPress={() => handleCancel(appointment.id)}  
                                >
                                    <Text style={styles.cancelButtonText}>Cancelar</Text>
                                </TouchableOpacity>
                            </View>
                        ))
                    ) : (
                        <Text style={styles.noAppointmentsText}>Nenhum agendamento encontrado.</Text>
                    )}
                </ScrollView>
            )}

            <Modal
                transparent={true}
                visible={showModal}
                animationType="fade"
                onRequestClose={cancelCancel} 
            >
                <View style={styles.modalBackground}>
                    <View style={styles.modalContainer}>
                        <Text style={styles.modalText}>Tem certeza que deseja CANCELAR este agendamento?</Text>
                        <View style={styles.modalButtons}>
                            <TouchableOpacity style={styles.buttonCancelAgendamento} onPress={cancelCancel}>
                                <Text style={styles.buttonCancelText}>Cancelar</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.buttonConfirmarAgendamento} onPress={confirmCancel}>
                                <Text style={styles.buttonConfirmarText}>Confirmar</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>
        </View>
    );
};

export default MeusAgendamentosScreen;
