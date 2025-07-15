import React, { useState, useEffect } from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'
import * as Location from 'expo-location'

export default function LocationComponent() {
    const [location, setLocation] = useState(null)
    const [errorMsg, setErrorMsg] = useState(null)

    const getLocation = async () => {
        // Pede permissão para acessar a localização
        let { status } = await Location.requestForegroundPermissionsAsync()
        if (status !== 'granted') {
            setErrorMsg('Permissão para acessar a localização foi negada')
            return
        }

        // Obtém as coordenadas
        let currentLocation = await Location.getCurrentPositionAsync({})
        setLocation(currentLocation)
    }

    return (
        <View style={styles.container}>
            <Button title="Obter Minha Localização" onPress={getLocation} />
            {location && (
                <Text style={styles.text}>
                    Latitude: {location.coords.latitude}, Longitude: {location.coords.longitude}
                </Text>
            )}
            {errorMsg && <Text style={styles.text}>{errorMsg}</Text>}
        </View>
    )
}

const styles = StyleSheet.create({
    container: { flex: 1, alignItems: 'center', justifyContent: 'center' },
    text: { marginTop: 10, textAlign: 'center' }
})