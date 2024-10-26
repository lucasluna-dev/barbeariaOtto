import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from "./loginStyle";
import { useNavigation } from '@react-navigation/native';
import { supabase } from "../../../services/supabase"; // Importe sua configuração do Supabase

const LoginScreen = () => {
    const navigation = useNavigation();
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    const handleLogin = async () => {
        const { data, error } = await supabase
            .from("tb_user")
            .select("*")
            .eq("email", email)
            .eq("senha", senha);
    
        if (error) {
            console.error("Erro de autenticação:", error.message);
            Alert.alert("Erro", "Ocorreu um erro ao tentar autenticar!");
        } else if (data.length === 0) {
            // Caso nenhum usuário seja encontrado
            Alert.alert("Erro", "Usuário ou senha inválidos!");
        } else {
            // Caso a consulta tenha retornado ao menos um usuário
            Alert.alert("Sucesso", "Login realizado com sucesso!");
            //navigation.navigate(''); // Navega para a tela inicial
        }
    };
    

    return (
        <View style={styles.container}>
            <Image
                source={require('../../../assets/logo.png')}
                style={styles.logo}
            />
            <Text style={styles.title}>Login</Text>

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
                <Icon name="lock" size={24} color="#000" style={styles.icon} />
                <TextInput
                    placeholder="Senha"
                    secureTextEntry
                    style={styles.input}
                    value={senha}
                    onChangeText={setSenha}
                />
            </View>

            <TouchableOpacity style={styles.forgotPasswordContainer}>
                <Text style={styles.forgotPasswordText}>Esqueceu a senha?</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={handleLogin}>
                <Text style={styles.buttonText}>Entrar</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.bottomLink} onPress={() => navigation.navigate('Cadastro')}>
                <Text style={styles.link}>
                    Não tem uma conta? <Text style={styles.boldUnderline}>Crie agora!</Text>
                </Text>
            </TouchableOpacity>
        </View>
    );
};

export default LoginScreen;
