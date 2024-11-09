import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from "./loginStyle";
import { useNavigation } from '@react-navigation/native';
import { supabase } from "../../../services/supabase";

const LoginScreen = () => {
    const navigation = useNavigation();
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    const handleLogin = async () => {
        const { data, error } = await supabase
            .from("tb_user1")
            .select("*")
            .eq("email", email)
            .eq("senha", senha);

        if (email === "barbeirootto@gmail.com" && senha === "barber123") {
            navigation.navigate('Barbeiro');
            return;
        }

        if (error || data.length === 0) {
            Alert.alert("Erro", "Usuário ou senha inválidos!");
        } else {
            const userId = data[0].id;  // Pega o ID do usuário autenticado
            Alert.alert("Sucesso", "Login realizado com sucesso!");

            // Navega para a próxima tela passando o ID do usuário como parâmetro
            navigation.navigate('Servicos', { userId });
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
