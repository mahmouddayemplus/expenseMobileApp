import { View, Text, FlatList } from 'react-native'
import React from 'react'
import ExpensesSummary from './ExpensesSummary'
import ExpensesList from './ExpensesList'

const dummy_expenses = [
  { id: 'e1', description: 'Groceries', amount: 45.99, date: new Date('2025-07-01') },
  { id: 'e2', description: 'Taxi', amount: 15.50, date: new Date('2025-07-02') },
  { id: 'e3', description: 'Coffee', amount: 4.75, date: new Date('2025-07-03') },
  { id: 'e4', description: 'Books', amount: 22.00, date: new Date('2025-07-04') },
  { id: 'e5', description: 'Utilities', amount: 60.00, date: new Date('2025-07-05') },
  { id: 'e6', description: 'Lunch', amount: 12.30, date: new Date('2025-07-06') },
  { id: 'e7', description: 'Movie', amount: 18.00, date: new Date('2025-07-07') },
  { id: 'e8', description: 'Snacks', amount: 7.25, date: new Date('2025-07-08') },
  { id: 'e9', description: 'Bus Ticket', amount: 2.50, date: new Date('2025-07-09') },
  { id: 'e10', description: 'Dinner', amount: 28.40, date: new Date('2025-07-10') },
  { id: 'e11', description: 'Gym', amount: 35.00, date: new Date('2025-07-11') },
  { id: 'e12', description: 'Subscription', amount: 9.99, date: new Date('2025-07-12') },
  { id: 'e13', description: 'Gift', amount: 50.00, date: new Date('2025-07-13') },
  { id: 'e14', description: 'Medicine', amount: 13.75, date: new Date('2025-07-14') },
  { id: 'e15', description: 'Parking', amount: 5.00, date: new Date('2025-07-15') },
  { id: 'e16', description: 'Laundry', amount: 8.00, date: new Date('2025-07-16') },
  { id: 'e17', description: 'Breakfast', amount: 6.50, date: new Date('2025-07-17') },
  { id: 'e18', description: 'Internet', amount: 40.00, date: new Date('2025-07-18') },
  { id: 'e19', description: 'Phone Bill', amount: 25.00, date: new Date('2025-07-19') },
  { id: 'e20', description: 'Stationery', amount: 11.20, date: new Date('2025-07-20') },
];

const ExpensesOutput = ({expenses = dummy_expenses, expensesPeriod}) => {
    return (
        <View>
            <ExpensesSummary periodName={expensesPeriod} expenses={dummy_expenses} />
            <ExpensesList expenses={dummy_expenses} />
        </View>
    )
}

export default ExpensesOutput