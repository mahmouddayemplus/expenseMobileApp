import { View, Text, FlatList } from 'react-native'
import React from 'react'
import ExpensesSummary from './ExpensesSummary'
import ExpensesList from './ExpensesList'
const ExpensesOutput = ({expenses,expensesPeriod}) => {
    return (
        <View>
            <ExpensesSummary periodName={expensesPeriod} expenses={expenses} />
            <ExpensesList />
        </View>

    )
}

export default ExpensesOutput