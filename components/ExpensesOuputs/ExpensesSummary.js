import { View, Text } from 'react-native'
import React from 'react'

const ExpensesSummary = ({ expenses, periodName }) => {
  const totalAmount = expenses.reduce((sum, expense) => sum + expense.amount, 0);

  return (
    <View>
      <Text>{periodName}</Text>
      <Text>${totalAmount.toFixed(2)}</Text>
    </View>
  )
}

export default ExpensesSummary