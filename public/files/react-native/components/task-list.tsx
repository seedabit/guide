import React from 'react'
import { View, Text, FlatList, StyleSheet } from 'react-native'

const TASKS = [
    { id: '1', title: 'Aprender sobre Componentes Nativos' },
    { id: '2', title: 'Entender a FlatList' },
    { id: '3', title: 'Praticar com um projeto' },
]

function TaskList() {
    const renderTask = ({ item }) => (
        <View style={styles.taskItem}>
            <Text>{item.title}</Text>
        </View>
    )

    return (
        <FlatList
            data={TASKS}
            renderItem={renderTask}
            keyExtractor={item => item.id}
        />
    )
}

const styles = StyleSheet.create({
    taskItem: {
        padding: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    }
})