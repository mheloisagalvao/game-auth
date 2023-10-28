import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { TextInput, Button, Text } from 'react-native-paper';
import {auth, firebase} from '../../firebase';


export function Cadastro({navigation}) {

  const Home = () => {
    navigation.navigate('MyTabs')
  }

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleRegister = () => {
    auth.createUserWithEmailAndPassword(email, password)
      .then(() => {
        Home();
      })
      .catch((error) => {
        alert(error);
      });
  }
  



  return (
    <View style={page.container}>
      <Text variant="headlineLarge">Cadastro</Text>
      <TextInput
        style={{ paddingHorizontal: 140 }}
        label="Usuário"
        value={username}
        onChangeText={username => setUsername(username)}
      />
      <TextInput
        style={{ paddingHorizontal: 140 }}
        label="Email"
        value={email}
        onChangeText={email => setEmail(email)}
      />
      <TextInput
        style={{ paddingHorizontal: 119 }}
        label="Senha"
        secureTextEntry
        right={<TextInput.Icon icon="eye" />}
        value={password}
        onChangeText={password => setPassword(password)}
      />
      <TextInput
        style={{ paddingHorizontal: 119 }}
        label="Confirme a senha"
        secureTextEntry
        right={<TextInput.Icon icon="eye" />}
        value={confirmPassword}
        onChangeText={password => setConfirmPassword(password)}
      />
      <Button mode="contained" onPress={() =>{ handleRegister(email, password, username)}}>
        Confirmar
      </Button>
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
