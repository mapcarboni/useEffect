import React, { useState, useEffect } from 'react'; // Importa React e hooks useState e useEffect
import { View, Text, StyleSheet  } from 'react-native'; // Importa componentes View e Text do React Native

// Define o componente AutoCounter como padrão de exportação
export default function AutoCounter() {
  const [count, setCount] = useState(0); // Declara um estado chamado count com valor inicial 0 e a função setCount para atualizá-lo

   // Hook useEffect para executar efeitos colaterais
    // Define um intervalo que executa uma função a cada 1 segundo
     // Atualiza o estado count incrementando seu valor anterior em 1
  useEffect(() => {
    const interval = setInterval(() => {
      setCount(prevCount => prevCount + 1);
    }, 1000);

    return () => clearInterval(interval); // Limpa o intervalo quando o componente é desmontado
  }, []); // Array de dependências vazio para executar o efeito apenas uma vez após a montagem do componente

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Contagem automática: {count}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // Ocupa toda a tela
    justifyContent: 'center', // Centraliza verticalmente
    alignItems: 'center', // Centraliza horizontalmente
    backgroundColor: '#f5f5f5', // Cor de fundo clara
  },
  text: {
    fontSize: 20, // Tamanho do texto
    fontWeight: 'bold', // Texto em negrito
    color: '#333', // Cor escura para melhor visibilidade
  },
});
