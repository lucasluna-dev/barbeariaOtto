import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from "./loginStyle";
import { useNavigation } from '@react-navigation/native';

const LoginScreen = () => {
    const navigation = useNavigation();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        if (email.toLowerCase() === "barbeirootto@gmail.com" && password === "barber123") {
            navigation.navigate('Barbeiro');
        } else if (email.toLowerCase() === "barbeirotto@gmail.com") {
            Alert.alert("Erro", "Senha incorreta para o usuário Barbeiro.");
        } else {
            navigation.navigate('Servicos');
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
                    keyboardType="email-address"
                    autoCapitalize="none"
                />
            </View>

            <View style={styles.inputContainer}>
                <Icon name="lock" size={24} color="#000" style={styles.icon} />
                <TextInput
                    placeholder="Senha"
                    secureTextEntry
                    style={styles.input}
                    value={password}
                    onChangeText={setPassword}
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
