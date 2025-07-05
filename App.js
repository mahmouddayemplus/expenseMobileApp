import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import AllExpenses from './screens/AllExpenses';
import ManageExpenses from './screens/ManageExpenses';
import RecentExpenses from './screens/RecentExpenses';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons'; // Add this import


const Stack = createStackNavigator();
const BotomTabs = createBottomTabNavigator();

function ExpensesOverview() {
  return (
    <BotomTabs.Navigator
      screenOptions={{
        headerStyle: {
          // Custom header height
          backgroundColor: '#1976d2', // Custom header background color
        },
        headerTintColor: '#fff', // Header text/icon color
        tabBarActiveTintColor: '#1976d2', // Active tab icon color
        tabBarInactiveTintColor: '#888', // Inactive tab icon color
      }}
    >
      <BotomTabs.Screen
        name="Recent"
        component={RecentExpenses}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="time" color={color} size={size} />
          ),
           title:"Recent Expenses"
        }}
      />
      <BotomTabs.Screen
        name="All Expenses"
        component={AllExpenses}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="list" color={color} size={size} />
          ),
           title:"All Expenses"
        }
        
        }
      />

    </BotomTabs.Navigator >
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={ExpensesOverview}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Profile" component={ManageExpenses} />

      </Stack.Navigator>


    </NavigationContainer>


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
