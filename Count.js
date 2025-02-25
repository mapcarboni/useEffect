import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function Counter() { // Define o componente Counter como padrão de exportação
    const [count, setCount] = useState(0); // Declara um estado chamado 'count' e uma função para atualizá-lo

    // Executa um efeito sempre que 'count' mudar
    useEffect(() => {
        console.log(`O contador foi atualizado: ${count}`); // Loga no console sempre que 'count' mudar
    }, [count]); // Dependência 'count' faz o efeito rodar sempre que mudar

    return (
        <View style={styles.container}> {/* Define um contêiner com estilo */}
            <Text style={styles.text}>Você clicou {count} vezes</Text> {/* Exibe o valor de 'count' */}
            <Button title="Clique aqui" onPress={() => setCount(count + 1)} /> {/* Botão que incrementa 'count' ao ser pressionado */}
        </View>
    );
}

const styles = StyleSheet.create({ // Define os estilos para os componentes
    container: {
        flex: 1, // Faz o contêiner ocupar todo o espaço disponível
        justifyContent: 'center', // Centraliza o conteúdo verticalmente
        alignItems: 'center', // Centraliza o conteúdo horizontalmente
    },
    text: {
        fontSize: 18, // Define o tamanho da fonte do texto
        marginBottom: 10, // Adiciona uma margem inferior ao texto
    },
});
