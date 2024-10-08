// src/screens/HomeScreen.js
import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Image 
        source={require('../../assets/inicial-barber.png')}
        style={styles.inicial}
        resizeMode="cover" 
      />
      <View style={styles.logoContainer}>
        <Image 
          source={require('../../assets/logo.png')}
          style={styles.logo}
        />
      </View>
      <Text style={styles.title}>Agende seu corte em segundos</Text>
      <Text style={styles.subtitle}>
      Marque seu próximo corte de cabelo agora mesmo Reserve e gerencie seus compromissos com facilidade
      </Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Fazer Login</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Criar Conta</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      padding: 20,
      backgroundColor: '#fff',
    },
    inicial: {
      flex: 1, 
      position: 'absolute', 
      top: 0,
      left: 0,
      right: 0,
      bottom: 0, 
    },
    logoContainer: {
      position: 'absolute',
      top: 345, 
      alignSelf: 'center',
    },
    logo: {
      width: 100, 
      height: 100, 
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      marginTop: 400, 
      textAlign: 'center',
      marginBottom: 20, 
    },
    subtitle: {
      fontSize: 16,
      textAlign: 'center',
      marginBottom: 25,
      marginTop: 5, 
      color: '#888888 ',
    },
    button: {
      backgroundColor: '#000',
      padding: 15,
      borderRadius: 5,
      width: '80%',
      alignItems: 'center',
      marginVertical: 10,
    },
    buttonText: {
      color: '#fff',
      fontSize: 16,
    },
  });

export default HomeScreen;
