import React from 'react'
import { View, Button, Alert } from 'react-native'
import * as SecureStore from 'expo-secure-store'

async function save(key, value) {
    await SecureStore.setItemAsync(key, value)
    Alert.alert('Sucesso', 'Dado salvo com segurança!')
}

async function getValueFor(key) {
    let result = await SecureStore.getItemAsync(key)
    if (result) {
        Alert.alert(`Dado recuperado! O valor é: ${result}`)
    } else {
        Alert.alert('Nada encontrado', 'Nenhum valor armazenado para essa chave.')
    }
}

export default function SecureStorageComponent() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Button
                title="Salvar Token Secreto"
                onPress={() => save('authToken', 'meu-token-super-secreto-123')}
            />
            <View style={{ margin: 10 }} />
            <Button
                title="Ler Token Secreto"
                onPress={() => getValueFor('authToken')}
            />
        </View>
    )
}