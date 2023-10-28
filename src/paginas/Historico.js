import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Card, Paragraph, Title } from 'react-native-paper';

export function Historico({ route }) {
  const { history } = route.params;

  return (
    <ScrollView>
    <View style={{ flex: 1, padding: 24, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 24, marginBottom: 20 }}>Game History:</Text>
      {history['Victories'].map((item, index) => (
        <Card
        style={{marginVertical: 20, gap: 8}}
        key={index}>
          <Card.Content>
            <Title>Dice 1: {item.dice1}</Title>
            <Title>Dice 2: {item.dice2}</Title>
            <Paragraph>Sum: {item.sum}</Paragraph>
            <Paragraph>Result: {item.result}</Paragraph>
          </Card.Content>
        </Card>
      ))}
      {history['Defeats'].map((item, index) => (
        <Card key={index}>
          <Card.Content>
            <Title>Dice 1: {item.dice1}</Title>
            <Paragraph>Dice 2: {item.dice2}</Paragraph>
            <Paragraph>Sum: {item.sum}</Paragraph>
            <Paragraph>Result: {item.result}</Paragraph>
          </Card.Content>
        </Card>
      ))}
    </View>
    </ScrollView>
  );
}
