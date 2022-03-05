import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Bands from './Components/BandsTab';
import Stats from './Components/StatsTab';
import Styles from './Components/StylesTab';





const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer style={styles.container}>
      <Tab.Navigator screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, size, color }) => {
          let iconName;
          if (route.name === 'Bands') {
            iconName = focused
              ? color = 'tomato' : color = '#999';
            iconName = 'volume-high-outline';
          } else if (route.name === 'Stats') {
            iconName = focused
              ? color = 'tomato' : color = '#999';
            iconName = 'stats-chart-outline';
          } else if (route.name === 'Styles') {
            iconName = focused
              ? color = 'tomato' : color = '#999';
            iconName = 'reader-outline';
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: '#999',
        tabBarActiveBackgroundColor: '#111',
        tabBarInactiveBackgroundColor: '#000',
        tabBarStyle: {
          backgroundColor: "#000"
        }
      })}>
        <Tab.Screen name="Bands" component={Bands} />
        <Tab.Screen name="Stats" component={Stats} />
        <Tab.Screen name="Styles" component={Styles} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
