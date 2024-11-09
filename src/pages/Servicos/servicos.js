import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native';
import { supabase } from "../../../services/supabase";  // Importando a instância do Supabase
import styles from './servicosStyle';

const ServicesScreen = ({ navigation }) => {
    const [services, setServices] = useState([]);  // Estado para armazenar os serviços

    // Função para buscar os serviços do Supabase
    const fetchServices = async () => {
        const { data, error } = await supabase
            .from('tb_servicos')  // Nome da tabela
            .select('*');  // Selecionando todas as colunas

        if (error) {
            console.error("Erro ao buscar serviços:", error);
        } else {
            setServices(data);  // Atualiza o estado com os dados retornados
        }
    };

    // Chama a função fetchServices quando o componente for montado
    useEffect(() => {
        fetchServices();
    }, []);

    const renderServiceItem = ({ item, index }) => (
        <View style={styles.serviceItem}>
            <Image source={require('../../../assets/logo.png')} style={styles.serviceImage} />
            <Text style={styles.serviceName}>{item.Nome}</Text>
            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('Agendamentos', {
                    serviceId: item.id,
                    serviceName: item.Nome,
                    serviceValue: item.Valor
                })}
            >
                <Text style={styles.buttonText}>Agendar</Text>
            </TouchableOpacity>
        </View>
    );

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Bem-vindo à Barbearia Otto!</Text>
            <Image source={require('../../../assets/mustache.png')} style={styles.mustacheIcon} />
            <FlatList
                data={services}  // Passa os serviços dinamicamente
                keyExtractor={(item, index) => item.id ? item.id.toString() : index.toString()}  // Garante chave válida
                renderItem={renderServiceItem}
                contentContainerStyle={styles.list}
            />
        </View>
    );
};

export default ServicesScreen;
