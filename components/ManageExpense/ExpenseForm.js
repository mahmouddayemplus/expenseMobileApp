import { View, StyleSheet } from 'react-native';
import React from 'react';
import Input from './Input';
import { Pressable, Text } from 'react-native';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import {AddExpense} from  '../../store/expenseSlice'
import { useNavigation } from '@react-navigation/native';
import {postRequest,getRequest} from '../../firebase/http.js'

const ExpenseForm = () => {
    const [errors, setErrors] = useState({});
    const [title, setTitle] = useState();
    const [amount, setAmount] = useState();
    const dispatch = useDispatch();
    const navigatation = useNavigation();
    
    const [date, setDate] = useState(() => {
  const today = new Date();
  return today.toISOString().split('T')[0]; // => '2025-07-09'
});
    

    function handleSubmit() {
        const newErrors = {};
        if (!title) newErrors.title = 'Title is required';
        if (!amount || isNaN(amount)) newErrors.amount = 'Amount must be a number';

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }
        const packet = {
            description:title,
            amount,
            date
        }
        dispatch(AddExpense({description:title,amount,date }))

        postRequest(packet)
        getRequest();
        navigatation.navigate('Home')

        // Submit logic here
    }
    return (
        <View style={styles.form}>
            <Input
                label="Title"
                textConfig={{
                    placeholder: 'Type a title',
                    onChangeText: setTitle,

                }}
            />
            <Input
                label="Amount"
                textConfig={{
                    placeholder: 'Enter amount',
                    keyboardType: 'decimal-pad',
                    onChangeText: setAmount
                }}
            />
            <Input
                label="Date"
                textConfig={{
                    placeholder: 'YYYY-MM-DD',
                    onChangeText: setDate,
                    value: date
                
                }}
            />
            <Pressable style={styles.button} onPress={handleSubmit}>
                <Text style={styles.buttonText}>Save</Text>
            
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
    form: {
        backgroundColor: '#f9fafb',
        padding: 20,
        borderRadius: 12,
        elevation: 2,
    },
    button: {
        backgroundColor: '#1976d2',
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderRadius: 8,
        alignItems: 'center',
        marginTop: 20,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },

});

export default ExpenseForm;
