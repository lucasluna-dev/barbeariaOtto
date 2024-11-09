import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, Alert } from 'react-native';
import { supabase } from "../../../services/supabase";  
import styles from './barbeiroStyle';

const BarbeiroScreen = () => {
    const [appointments, setAppointments] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchAppointments = async () => {
            try {
                const { data, error } = await supabase
                    .from('tb_agendamentos1')
                    .select(`
                        id,
                        tb_user1 (nome_completo),
                        tb_servicos1 (nome, valor),
                        data,
                        horario,
                        criado_em
                    `)
                    .eq('id_fk_user', 1) 
                    .order('criado_em', { ascending: false });

                if (error) {
                    console.error("Erro ao buscar agendamentos:", error);
                } else {
                    const formattedAppointments = data.map(appointment => ({
                        id: appointment.id,
                        user: appointment.tb_user1.nome_completo,  // Acesso correto ao nome do cliente
                        service: appointment.tb_servicos1.nome,   // Acesso correto ao nome do serviço
                        price: appointment.tb_servicos1.valor,    // Acesso correto ao preço do serviço
                        dateTime: `${formatDate(appointment.data)} ${appointment.horario}`, 
                        createdAt: formatDate(appointment.criado_em),
                    }));
                    setAppointments(formattedAppointments);
                }
            } catch (error) {
                console.error("Erro ao obter agendamentos:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchAppointments();
    }, []);

    const formatDate = (date) => {
        const formattedDate = new Date(date);
        const day = String(formattedDate.getDate()).padStart(2, '0');
        const month = String(formattedDate.getMonth() + 1).padStart(2, '0'); 
        const year = formattedDate.getFullYear().toString().slice(-2); 
        return `${day}/${month}/${year}`;
    };

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
                    onPress: async () => {
                        try {
                            const { error } = await supabase
                                .from('tb_agendamentos1')
                                .delete()
                                .eq('id', id);

                            if (error) {
                                console.error("Erro ao cancelar agendamento:", error);
                            } else {
                                setAppointments(appointments.filter(appointment => appointment.id !== id));
                            }
                        } catch (error) {
                            console.error("Erro ao cancelar agendamento:", error);
                        }
                    }
                }
            ]
        );
    };

    if (loading) {
        return <Text>Carregando...</Text>;
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Agendamentos do Otto</Text>
            <FlatList
                data={appointments}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <View style={styles.appointmentContainer}>
                        <Text style={styles.label}>Cliente:</Text>
                        <Text style={styles.value}>{item.user}</Text>

                        <Text style={styles.label}>Serviço:</Text>
                        <Text style={styles.value}>{item.service}</Text>

                        <Text style={styles.label}>Preço:</Text>
                        <Text style={styles.value}>R$ {item.price.toFixed(2)}</Text>  

                        <Text style={styles.label}>Data/Hora:</Text>
                        <Text style={styles.value}>{item.dateTime}</Text>

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
