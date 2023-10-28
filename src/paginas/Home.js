import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { Button, Card, Title, Paragraph } from 'react-native-paper';

export function Home({ navigation }) {
  const [diceOne, setDiceOne] = useState(1);
  const [diceTwo, setDiceTwo] = useState(1);
  const [resultText, setResultText] = useState('');
  const [gameHistory, setGameHistory] = useState({ Victories: [], Defeats: [] });

  const rollDice = () => {
    const newDiceOne = Math.floor(Math.random() * 6) + 1;
    const newDiceTwo = Math.floor(Math.random() * 6) + 1;
    const sum = newDiceOne + newDiceTwo;
    setDiceOne(newDiceOne);
    setDiceTwo(newDiceTwo);

    if (sum === 7) {
      setResultText('Vitória');
    } else if (sum > 7) {
      setResultText('Derrota');
    } else {
      setResultText('Derrota');
    }

    const roundData = {
      dice1: newDiceOne,
      dice2: newDiceTwo,
      sum: sum,
      result: resultText,
    };

    const section = sum === 7 ? 'Victories' : 'Defeats';

    setGameHistory((prevHistory) => ({
      ...prevHistory,
      [section]: [...prevHistory[section], roundData],
    }));
  };

  const navigateToHistory = () => {
    navigation.navigate('Historico', { history: gameHistory });
  };
  
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Title style={{ fontSize: 32}}>Jogo de dados</Title>
      <View style={{ flexDirection: 'row', gap: 10,}}>
          <Text>Dado I</Text>
      <Text>Dado II</Text>
      </View>
      <View style={{ flexDirection: 'row', gap: 10,}}>
          <Text>{diceOne}</Text>
      <Text> {diceTwo}</Text>
      </View>
    
      <Text style={{ fontSize: 24, marginVertical: 20 }}>{resultText}</Text>
      <Button mode="contained" style={{ backgroundColor: 'pink' }} onPress={rollDice}>
        Start
      </Button>
      <Button mode="contained" style={{ backgroundColor: 'purple', marginTop: 10 }} onPress={navigateToHistory}>
        Ver Histórico
      </Button>
    </View>
  );
}
