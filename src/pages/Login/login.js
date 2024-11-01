import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from "./loginStyle";
import { useNavigation } from '@react-navigation/native';

const LoginScreen = () => {

    const navigation = useNavigation();

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
                />
            </View>

            <View style={styles.inputContainer}>
                <Icon name="lock" size={24} color="#000" style={styles.icon} />
                <TextInput
                    placeholder="Senha"
                    secureTextEntry
                    style={styles.input}
                />
            </View>

            <TouchableOpacity style={styles.forgotPasswordContainer}>
                <Text style={styles.forgotPasswordText}>Esqueceu a senha?</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Servicos')}>
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
