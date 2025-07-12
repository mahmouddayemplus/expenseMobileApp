import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,Pressable, Modal} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import AllExpenses from './screens/AllExpenses';
import ManageExpenses from './screens/ManageExpenses';
import RecentExpenses from './screens/RecentExpenses';
import AddExpense from './screens/AddExpense'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons'; // Add this import
import { useNavigation } from '@react-navigation/native';
 import  IconButton   from './components/IconButton'
import store from './store/store'
import { Provider } from 'react-redux'
const Stack = createStackNavigator();
const BottomTabs = createBottomTabNavigator(); // <-- Fix typo here

function ExpensesOverview() {
  const navigation = useNavigation();
  return (
    <BottomTabs.Navigator // <-- And here
      screenOptions={{
        headerStyle: {
          backgroundColor: '#1976d2',
        },
        headerTintColor: '#fff',
        tabBarActiveTintColor: '#1976d2',
        tabBarInactiveTintColor: '#888',
        headerRight: () => <IconButton 
        name="add"
         color="blue"
          size={36} 

          onPress={()=>navigation.navigate('AddExpense') }
         
          
          />
      }}
    >
      <BottomTabs.Screen // <-- And here
        name="Recent"
        component={RecentExpenses}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="time" color={color} size={size} />
          ),
          title: "Recent Expenses"
        }}
      />
      <BottomTabs.Screen // <-- And here
        name="All Expenses"
        component={AllExpenses}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="list" color={color} size={size} />
          ),
          title: "All Expenses"
        }}
      />
    </BottomTabs.Navigator>
  );
}

export default function App() {
  return (
    <Provider store={store}>
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{

        }}

      >
        <Stack.Screen
          name="Home"
          component={ExpensesOverview}
          options={{ headerShown: false }}
        />
        <Stack.Screen
         name="ManageExpenses" 
        component={ManageExpenses} 
        options={{
          presentation:'modal'
        }}
        
        />
        <Stack.Screen
         name="AddExpense" 
        component={AddExpense} 
        options={{
          presentation:'modal'
        }}
        
        />

      </Stack.Navigator>


    </NavigationContainer>
    </Provider>


  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


 