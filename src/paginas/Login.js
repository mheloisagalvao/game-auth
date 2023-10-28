import React from 'react';
import { StyleSheet, View } from 'react-native';
import { TextInput, Button, Text } from 'react-native-paper';

import {firebase, auth} from '../../firebase';

export function Login({navigation}) {
  const Home = () => {
    navigation.navigate('MyTabs')
  }


  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const loginUser = async () => {
    try {
      await firebase.auth().signInWithEmailAndPassword(email, password);
      Home();
    } catch (error) {
      console.error(error);
    }
  };
  

  return (
    <View style={page.container}>
      <Text variant="headlineLarge">Mª Heloísa.</Text>

      <TextInput
        style={{ paddingHorizontal: 140 }}
        label="Email"
        value={email}
        onChangeText={email => setEmail(email)}
      />
      <TextInput
        style={{ paddingHorizontal: 118 }}
        label="Senha"
        secureTextEntry
        right={<TextInput.Icon icon="eye" />}
        value={password}
        onChangeText={password => setPassword(password)}
      />
      <View style={page.botaoarea}>
        <Button mode="contained" onPress={() => loginUser()}>
          Entrar agora
        </Button>
        <Button mode="outlined" onPress={() => navigation.navigate('Cadastro')}>
          Cadastro
        </Button>
      </View>
    </View>
  );
}

const page = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
    gap: 8,
  },
  botaoarea: {
    flexDirection: 'row',
    gap: 30,
  },
});
