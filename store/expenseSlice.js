
import { createSlice } from '@reduxjs/toolkit'

const dummy_expenses_redux = [
//   { id: 'e1', description: 'Groceries', amount: 45.99, date: '2025-07-01' },
//   { id: 'e2', description: 'Taxi', amount: 15.50, date: '2025-07-02' },
//   { id: 'e3', description: 'Coffee', amount: 4.75, date: '2025-07-03' },
//   { id: 'e4', description: 'Coffee', amount: 4.75, date: '2025-07-03' },
//   { id: 'e5', description: 'Coffee', amount: 4.75, date: '2025-07-03' },
//   { id: 'e6', description: 'Coffee', amount: 4.75, date: '2025-07-03' },
//   { id: 'e7', description: 'Coffee', amount: 4.75, date: '2025-07-03' },
//   { id: 'e8', description: 'Coffee', amount: 4.75, date: '2025-07-03' },
//   { id: 'e9', description: 'Coffee', amount: 4.75, date: '2025-07-03' },
//   { id: 'e10', description: 'Coffee', amount: 4.75, date: '2025-07-03' },
//   { id: 'e11', description: 'Coffee', amount: 4.75, date: '2025-07-03' },
];

export const expenseSlice = createSlice({
    name: 'expense',
    initialState: dummy_expenses_redux,
    reducers: {
        AddExpense: (state, action) => {
           const date = new Date(action.payload.date)
            // date = date.toISOString().split('T')[0];
            const listLength = state.length+1;
            const id = `e${listLength}`
         
            const addedExpense = {
                id,
                description:action.payload.description,
                amount: Number(action.payload.amount),
                date:date.toISOString().split('T')[0]
            }
   
            
            state.push(addedExpense);
             

        },
        deleteExpense: (state, action) => {
            return state.filter(exp => exp.id !== action.payload.id);
        },

    }
})

// Action creators are generated for each case reducer function
export const { AddExpense, deleteExpense } = expenseSlice.actions

export default expenseSlice.reducer