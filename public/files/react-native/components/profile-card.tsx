import React from 'react'
import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native'

function ProfileCard() {
    return (
        <View> {/* Nosso container principal, como uma <div> */}
            <Image
                source={{ uri: 'https://placehold.co/100x100' }}
                style={{ width: 100, height: 100 }}
            />

            <Text>Nome do Usuário</Text> // Todo texto dentro de um <Text>

                <TextInput placeholder="Deixe um comentário..." />

                <TouchableOpacity onPress={() => alert('Comentário enviado!')}>
                    <View> {/* Podemos aninhar Views para estilizar o botão*/}
                        <Text>Enviar</Text>
                    </View>
                </TouchableOpacity>
        </View>
    )
}