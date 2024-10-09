// src/screens/HomeScreen.js
import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import styles from "./inicialStyle";
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {

  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Image
        source={require('../../../assets/inicial-barber.png')}
        style={styles.inicial}
        resizeMode="cover"
      />
      <View style={styles.logoContainer}>
        <Image
          source={require('../../../assets/logo.png')}
          style={styles.logo}
        />
      </View>
      <Text style={styles.title}>Agende seu corte em segundos</Text>
      <Text style={styles.subtitle}>
        Marque seu próximo corte de cabelo agora mesmo Reserve e gerencie seus compromissos com facilidade
      </Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Login')}
      ><Text style={styles.buttonText}>Fazer Login</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Criar Conta</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;
