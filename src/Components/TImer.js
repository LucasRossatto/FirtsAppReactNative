import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Timer = () => {
  // Estado para armazenar o tempo em segundos
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    // Define um intervalo para atualizar o tempo a cada segundo
    const intervalId = setInterval(() => {
      setSeconds(prevSeconds => prevSeconds + 1);
    }, 1000);

    // Limpeza do intervalo quando o componente é desmontado
    return () => clearInterval(intervalId);
  }, []); // O efeito executa apenas uma vez após a montagem do componente

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Tempo: {seconds} segundos</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
  },
});

export default Timer;