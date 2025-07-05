import { View, Text, FlatList, StyleSheet } from 'react-native'
import React from 'react'

const ExpensesList = ({ expenses }) => {
    return (
        <FlatList
            data={expenses}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
                <View style={styles.itemContainer}>
                    <Text style={styles.description}>{item.description}</Text>
                    <Text style={styles.amount}>${item.amount.toFixed(2)}</Text>
                    <Text style={styles.date}>{item.date.toLocaleDateString()}</Text>
                </View>
            )}
            contentContainerStyle={styles.listContainer}
        />
    )
}

const styles = StyleSheet.create({
    listContainer: {
        padding: 16,
    },
    itemContainer: {
        backgroundColor: '#e3f2fd',
        borderRadius: 8,
        padding: 12,
        marginBottom: 12,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    description: {
        fontSize: 16,
        fontWeight: 'bold',
        flex: 2,
    },
    amount: {
        fontSize: 16,
        color: '#1976d2',
        flex: 1,
        textAlign: 'right',
    },
    date: {
        fontSize: 12,
        color: '#888',
        flex: 1,
        textAlign: 'right',
    },
});

export default ExpensesList