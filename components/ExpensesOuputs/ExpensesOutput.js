import { View, Text, FlatList } from 'react-native'
import React from 'react'
import ExpensesSummary from './ExpensesSummary'
import ExpensesList from './ExpensesList'
import { useSelector,useDispatch } from 'react-redux'
import { getRequest } from '../../firebase/http'
import { useEffect, useState } from 'react'

const dummy_expenses = [
    { id: 'e1', description: 'Snacks', amount: 7.25, date: new Date('2025-07-08') },
    { id: 'e2', description: 'Bus Ticket', amount: 2.50, date: new Date('2025-07-09') },
    { id: 'e3', description: 'Dinner', amount: 28.40, date: new Date('2025-07-10') },
    { id: 'e4', description: 'Gym', amount: 35.00, date: new Date('2025-07-11') },
    { id: 'e5', description: 'Subscription', amount: 9.99, date: new Date('2025-07-12') },
    { id: 'e6', description: 'Gift', amount: 50.00, date: new Date('2025-07-13') },
    { id: 'e7', description: 'Medicine', amount: 13.75, date: new Date('2025-07-14') },
    { id: 'e8', description: 'Parking', amount: 5.00, date: new Date('2025-07-15') },
    { id: 'e9', description: 'Laundry', amount: 8.00, date: new Date('2025-07-16') },
    { id: 'e10', description: 'Breakfast', amount: 6.50, date: new Date('2025-07-17') },
    { id: 'e11', description: 'Internet', amount: 40.00, date: new Date('2025-07-18') },
    { id: 'e12', description: 'Phone Bill', amount: 25.00, date: new Date('2025-07-19') },
    { id: 'e13', description: 'Stationry', amount: 11.50, date: new Date('2025-07-20') },
    { id: 'e14', description: 'Sttionery', amount: 11.70, date: new Date('2025-07-20') },
    { id: 'e15', description: 'Stationry', amount: 11.90, date: new Date('2025-07-20') },
    { id: 'e15', description: 'Stationry', amount: 11.90, date: new Date('2025-07-20') },
    { id: 'e15', description: 'Stationry', amount: 11.90, date: new Date('2025-07-20') },
    { id: 'e15', description: 'Stationry', amount: 11.90, date: new Date('2025-07-20') },
];

const new_data = [

    { amount: 45.99, date: "2025-07-01", description: "Groceries", id: "e1" },


    { amount: 4.75, date: "2025-07-03", description: "Coffee", id: "e2" },
    { amount: 4.75, date: "2025-07-03", description: "Coffee", id: "e3" },
    { amount: 4.75, date: "2025-07-03", description: "Coffee", id: "e4" },
    { amount: 4.75, date: "2025-07-03", description: "Coffee", id: "e5" },
    { amount: 4.75, date: "2025-07-03", description: "Coffee", id: "e6" },
    { amount: 4.75, date: "2025-07-03", description: "Coffee", id: "e7" },
    { amount: 4.75, date: "2025-07-03", description: "Coffee", id: "e8" },
    { amount: 4.75, date: "2025-07-03", description: "Coffee", id: "e9" },
    { amount: 4.75, date: "2025-07-03", description: "Coffee", id: "e10" },
    { amount: 4.75, date: "2025-07-03", description: "Coffee", id: "e11" },

]

const ExpensesOutput = ({   expensesPeriod }) => {
    const dummy_from_store = useSelector(state => state.expense)
    const [expensess, setExpenses] = useState([]);


    useEffect(() => {
        async function fetchData() {
            const dataFetched = await getRequest();

            const expensesArray = Object.keys(dataFetched).map((key) => ({
                id: key,
                description: dataFetched[key].description,
                amount: parseFloat(dataFetched[key].amount),
                date: new Date(dataFetched[key].date),
            }));

            // Optional: reverse by date
            // expensesArray.sort((a, b) => new Date(b.date) - new Date(a.date));

            setExpenses(expensesArray); // ⬅️ store in state
        }

        fetchData();
      
    }, []);



    return (
        <View style={{ flex: 1 }} >
            <ExpensesSummary periodName={expensesPeriod} expenses={expensess} />
            <ExpensesList expenses={expensess} />
        </View>
    )
}

export default ExpensesOutput