import { View, Text, FlatList, StyleSheet, Pressable } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';


const ExpensesList = ({ expenses }) => {
    const navigation = useNavigation();


    function onPress(item) {
         navigation.navigate('ManageExpenses',{item})


    }
    return (
      <View style={{ flex: 1 }} > 
            <FlatList
                data={[...expenses].reverse()}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <Pressable onPress={() => onPress(item)} style={({ pressed }) => ({ opacity: pressed ? 0.3 : 1 })}>
                        <View style={styles.itemContainer}>
                            <Text style={styles.description}>{item.description}</Text>
                            <Text style={styles.amount}>${item.amount.toFixed(2)}</Text>
                            <Text style={styles.date}>{ new Date(item.date).toLocaleDateString()}</Text>
                        </View>
                    </Pressable>
                )}
                contentContainerStyle={styles.listContainer}
            />
            </View>
         
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