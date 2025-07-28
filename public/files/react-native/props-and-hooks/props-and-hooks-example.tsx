import React, { useState, useEffect } from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'

function Counter() {
    // 1. useState funciona exatamente da mesma forma.
    const [count, setCount] = useState(0)

    // 4. useEffect também é idêntico.
    // Este efeito será executado toda vez que o estado 'count' mudar.
    useEffect(() => {
        console.log('O contador agora é: \${count}')
    }, [count]) // Array de dependências

    const handleIncrement = () => {
        setCount(currentCount => currentCount + 1)
    }

    const handleDecrement = () => {
        setCount(currentCount => currentCount - 1)
    }

    return (
        <View style={styles.container}>
            <Text style={styles.countText}>Contador: {count}</Text>

            <View style={styles.buttonsContainer}>
                {/* 2. TouchableOpacity recebe a função via prop 'onPress' */}
                <TouchableOpacity style={styles.button} onPress={handleDecrement}>
                    <Text style={styles.buttonText}>-</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button} onPress={handleIncrement}>
                    <Text style={styles.buttonText}>+</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    countText: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    buttonsContainer: {
        flexDirection: 'row',
    },
    button: {
        backgroundColor: 'blue',
        paddingVertical: 10,
        paddingHorizontal: 20,
        marginHorizontal: 10,
        borderRadius: 5,
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
})