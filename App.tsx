import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';
import HomeScreen from './src/pages/Inicial/inicial';
import LoginScreen from './src/pages/Login/login';
import CadastroScreen from './src/pages/Cadastro/cadastro';
<<<<<<< HEAD:App.tsx
import { supabase } from './services/supabase';

=======
import ServicosScreen from './src/pages/Servicos/servicos';
import AgendamentosScreen from './src/pages/Agendamentos/agendamentos';
import MeusAgendamentosScreen from './src/pages/MeusAgendamentos/meusAgendamentos';
import BarbeiroScreen from './src/pages/Barbeiro/barbeiro';
>>>>>>> origin/dev_ju:App.js

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Cadastro" component={CadastroScreen} />
        <Stack.Screen name="Servicos" component={ServicosScreen} />
        <Stack.Screen name="Agendamentos" component={AgendamentosScreen} />
        <Stack.Screen name="MeusAgendamentos" component={MeusAgendamentosScreen} />
        <Stack.Screen name="Barbeiro" component={BarbeiroScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
