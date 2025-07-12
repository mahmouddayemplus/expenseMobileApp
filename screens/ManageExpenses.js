import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useRoute } from '@react-navigation/native';
import IconButton from '../components/IconButton';
import { useSelector,useDispatch } from 'react-redux';
import {deleteExpense} from '../store/expenseSlice'
import { useNavigation } from '@react-navigation/native';
import { deleteRequest } from '../firebase/http';
const ManageExpenses = () => {
  const route = useRoute();
  const { item } = route.params || {};
  const dispatch = useDispatch();
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Manage Expense</Text>

      {item ? (
        <View style={styles.card}>
          <View style={styles.infoBlock}>
            <Text style={styles.label}>Description</Text>
            <Text style={styles.value}>{item.description}</Text>
          </View>

          <View style={styles.infoBlock}>
            <Text style={styles.label}>Amount</Text>
            <Text style={styles.value}>${item.amount.toFixed(2)}</Text>
          </View>

          <View style={styles.infoBlock}>
            <Text style={styles.label}>Date</Text>
            <Text style={styles.value}>
              {new Date(item.date).toLocaleDateString()}
            </Text>
          </View>

          <View style={styles.actions}>
            <IconButton
              name="pencil"
              size={28}
              color="#1976d2"
              onPress={() => console.log('Edit')}
              style={styles.iconButton}
            />
            <IconButton
              name="trash"
              size={28}
              color="red"
              onPress={( ) => {
                 deleteRequest({id:item.id})
                navigation.navigate('Home')
              }}
              style={styles.iconButton}
            />
          </View>
        </View>
      ) : (
        <Text style={styles.error}>No data available.</Text>
      )}
    </View>
  );
};



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f4f8',
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1976d2',
    marginBottom: 24,
    textAlign: 'center',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 20,
    elevation: 4,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
  },
  infoBlock: {
    marginBottom: 16,
  },
  label: {
    fontSize: 13,
    color: '#888',
    marginBottom: 4,
  },
  value: {
    fontSize: 18,
    fontWeight: '500',
    color: '#222',
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 12,
    gap: 12, // use if RN 0.71+, otherwise marginRight
  },
  iconButton: {
    backgroundColor: '#e3f2fd',
    borderRadius: 8,
    padding: 10,
    marginLeft: 8,
  },
  error: {
    textAlign: 'center',
    color: 'red',
    fontSize: 16,
    marginTop: 30,
  },
});
export default ManageExpenses;