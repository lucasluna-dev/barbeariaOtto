import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, Image, ActivityIndicator, ScrollView } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { supabase } from "../../../services/supabase";
import styles from './meusAgendamentosStyle';

const MeusAgendamentosScreen = () => {
    const navigation = useNavigation();
    const route = useRoute();
    const [appointments, setAppointments] = useState([]);
    const [loading, setLoading] = useState(true);
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
                                    onPress={() => navigation.navigate("Servicos")}
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
        </View>
    );
};

export default MeusAgendamentosScreen;
