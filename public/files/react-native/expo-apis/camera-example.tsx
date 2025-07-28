import React, { useState, useEffect } from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'
import { Camera } from 'expo-camera'

export default function CameraComponent() {
    const [hasPermission, setHasPermission] = useState(null)

    // Pede permissão para usar a câmera quando o componente é montado
    useEffect(() => {
        (async () => {
            const { status } = await Camera.requestCameraPermissionsAsync()
            setHasPermission(status === 'granted')
        })()
    }, [])

    if (hasPermission === null) {
        return <View /> // Retorna uma view vazia enquanto aguarda a permissão
    }
    if (hasPermission === false) {
        return <Text>Sem acesso à câmera</Text>
    }

    return (
        <View style={styles.container}>
            <Camera style={styles.camera} type={Camera.Constants.Type.back} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    camera: {
        flex: 1,
    },
})