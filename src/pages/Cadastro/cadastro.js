import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from "./cadastroStyle";
import { useNavigation } from '@react-navigation/native';

const CadastroScreen = () => {

    const navigation = useNavigation();

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
                />
            </View>

            <View style={styles.inputContainer}>
                <Icon name="email" size={24} color="#000" style={styles.icon} />
                <TextInput
                    placeholder="E-mail"
                    style={styles.input}
                />
            </View>

            <View style={styles.inputContainer}>
                <Icon name="phone" size={24} color="#000" style={styles.icon} />
                <TextInput
                    placeholder="Telefone"
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

            <View style={styles.inputContainer}>
                <Icon name="key" size={24} color="#000" style={styles.icon} />
                <TextInput
                    placeholder="Confirmar Senha"
                    secureTextEntry
                    style={styles.input}
                />
            </View>

            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Login')}>
                <Text style={styles.buttonText}>Finalizar Cadastro</Text>
            </TouchableOpacity>
        </View>
    );
};

export default CadastroScreen;
