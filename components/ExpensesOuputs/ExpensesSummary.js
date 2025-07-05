import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const ExpensesSummary = ({ expenses, periodName }) => {
  const totalAmount = expenses.reduce((sum, expense) => sum + expense.amount, 0);

  return (
    <View style={styles.summaryContainer}>
      <Text style={styles.periodName}>{periodName}</Text>
      <Text style={styles.totalAmount}>${totalAmount.toFixed(2)}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  summaryContainer: {
    backgroundColor: '#1976d2',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    margin: 16,
  },
  periodName: {
    color: '#fff',
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  totalAmount: {
    color: 'gold',
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default ExpensesSummary