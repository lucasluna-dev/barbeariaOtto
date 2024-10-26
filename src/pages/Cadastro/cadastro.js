import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Importação corrigida
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from "./cadastroStyle";
import { supabase } from "../../../services/supabase";

const CadastroScreen = () => {
    const navigation = useNavigation(); // Uso do hook useNavigation

    // Estados para cada campo de entrada
    const [nome_completo, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [telefone, setTelefone] = useState("");
    const [senha, setSenha] = useState("");
    const [confirma_senha, setConfirmarSenha] = useState("");

    // Função para inserir dados no banco de dados
    const handleRegister = async () => {
        // Validação simples de senha
        if (senha !== confirma_senha) {
            Alert.alert("Erro", "As senhas não coincidem!"); // Alterado para Alert
            return;
        }

        const { data, error } = await supabase.from("tb_user").insert({
            nome_completo,
            email,
            telefone,
            senha,
            confirma_senha
        });

        if (error) {
            console.error(error);
            Alert.alert("Erro", "Erro ao cadastrar!"); // Alterado para Alert
        } else {
            Alert.alert("Sucesso", "Cadastro realizado com sucesso!"); // Alterado para Alert
            // Limpar campos após cadastro
            setNome("");
            setEmail("");
            setTelefone("");
            setSenha("");
            setConfirmarSenha("");

            navigation.navigate('Login'); // Navegar para a tela de Login
        }
    };

    return (
        <View style={styles.container}>
            <Image
                source={require('../../../assets/logo.png')}
                style={styles.logo}
            />
            <Text style={styles.title}>Cadastre-se</Text>

            <View style={styles.inputContainer}>
                <Icon name="person" size={24} color="#000" style={styles.icon} />
                <TextInput
                    placeholder="Nome Completo"
                    style={styles.input}
                    value={nome_completo}
                    onChangeText={setNome}
                />
            </View>

            <View style={styles.inputContainer}>
                <Icon name="email" size={24} color="#000" style={styles.icon} />
                <TextInput
                    placeholder="E-mail"
                    style={styles.input}
                    value={email}
                    onChangeText={setEmail}
                />
            </View>

            <View style={styles.inputContainer}>
                <Icon name="phone" size={24} color="#000" style={styles.icon} />
                <TextInput
                    placeholder="Telefone"
                    style={styles.input}
                    value={telefone}
                    onChangeText={setTelefone}
                />
            </View>

            <View style={styles.inputContainer}>
                <Icon name="lock" size={24} color="#000" style={styles.icon} />
                <TextInput
                    placeholder="Senha"
                    secureTextEntry
                    style={styles.input}
                    value={senha}
                    onChangeText={setSenha}
                />
            </View>

            <View style={styles.inputContainer}>
                <Icon name="key" size={24} color="#000" style={styles.icon} />
                <TextInput
                    placeholder="Confirmar Senha"
                    secureTextEntry
                    style={styles.input}
                    value={confirma_senha}
                    onChangeText={setConfirmarSenha}
                />
            </View>

            <TouchableOpacity style={styles.button} onPress={handleRegister}>
                <Text style={styles.buttonText}>Finalizar Cadastro</Text>
            </TouchableOpacity>
        </View>
    );
};

export default CadastroScreen;
