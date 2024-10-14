import React from 'react';
import { SafeAreaView, Text, View, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import ScanScreen from './ScanScreen';  // Ensure this component doesn't have a NavigationContainer inside it

// HomeScreen Component
function HomeScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.header}>
          <View>
            <Text style={styles.greeting}>Hello 👋</Text>
            <Text style={styles.username}>Tuan Linh</Text>
          </View>
          <Image
            source={{ uri: 'https://kenh14cdn.com/2020/7/17/brvn-15950048783381206275371.jpg' }}
            style={styles.profileImage}
          />
        </View>

        <Text style={styles.sectionTitle}>Your Insights</Text>

        <View style={styles.cardsContainer}>
          <TouchableOpacity style={[styles.card, styles.scanCard]} onPress={() => navigation.navigate('Scan')}>
            <Icon name="scan" size={35} color="#6C63FF" />
            <Text style={styles.cardTitle}>Scan new</Text>
            <Text style={styles.cardSubtitle}>Scanned 483</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.card, styles.counterfeitCard]} onPress={() => navigation.navigate('Counterfeits')}>
            <Icon name="alert-circle-outline" size={35} color="#FF6347" />
            <Text style={styles.cardTitle}>Counterfeits</Text>
            <Text style={styles.cardSubtitle}>Counterfeited 32</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.card, styles.successCard]} onPress={() => navigation.navigate('Success')}>
            <Icon name="checkmark-circle-outline" size={35} color="#4CAF50" />
            <Text style={styles.cardTitle}>Success</Text>
            <Text style={styles.cardSubtitle}>Checkouts 8</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.card, styles.directoryCard]} onPress={() => navigation.navigate('Directory')}>
            <Icon name="calendar-outline" size={35} color="#00BFFF" />
            <Text style={styles.cardTitle}>Directory</Text>
            <Text style={styles.cardSubtitle}>History 26</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

// Dummy Components for Other Tabs
function NotificationScreen() {
  return (
    <SafeAreaView style={styles.center}>
      <Text>Notification Screen</Text>
    </SafeAreaView>
  );
}

function TimeScreen() {
  return (
    <SafeAreaView style={styles.center}>
      <Text>Time Screen</Text>
    </SafeAreaView>
  );
}

function CartScreen() {
  return (
    <SafeAreaView style={styles.center}>
      <Text>Cart Screen</Text>
    </SafeAreaView>
  );
}

// BottomTabNavigator
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size, focused }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'Notifications') {
              iconName = focused ? 'notifications' : 'notifications-outline';
            } else if (route.name === 'Scan') {
              iconName = focused ? 'scan' : 'scan-outline';
            } else if (route.name === 'Time') {
              iconName = focused ? 'time' : 'time-outline';
            } else if (route.name === 'Cart') {
              iconName = focused ? 'cart' : 'cart-outline';
            }

            return <Icon name={iconName} size={focused ? 40 : 35} color={color} />;
          },
          tabBarActiveTintColor: '#6C63FF',
          tabBarInactiveTintColor: '#999',
          tabBarStyle: {
            paddingBottom: 15,
            height: 80,
            backgroundColor: '#fff',
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            elevation: 5,
          },
          tabBarLabelStyle: {
            fontSize: 12,
            fontWeight: 'bold',
            paddingBottom: 5,
          },
          headerShown: false,
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Notifications" component={NotificationScreen} />
        
        <Tab.Screen
          name="Scan"
          component={ScanScreen}
          options={{
            tabBarButton: (props) => (
              <TouchableOpacity
                {...props}
                style={{
                  top: -20,
                  justifyContent: 'center',
                  alignItems: 'center',
                  shadowColor: '#000',
                  shadowOpacity: 0.2,
                  shadowRadius: 3.5,
                  elevation: 5,
                  backgroundColor: '#fff',
                  borderRadius: 50,
                  width: 70,
                  height: 70,
                }}
              >
                <Icon name="scan" size={45} color="#6C63FF" />
              </TouchableOpacity>
            ),
          }}
        />
        
        <Tab.Screen name="Time" component={TimeScreen} />
        <Tab.Screen name="Cart" component={CartScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
    alignItems: 'center',
  },
  greeting: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  username: {
    fontSize: 20,
    color: '#777',
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    margin: 16,
  },
  cardsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
    flexWrap: 'wrap',
  },
  card: {
    width: '48%',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 16,
    elevation: 3,
    marginVertical: 8,
  },
  scanCard: {
    backgroundColor: '#E8F0FE',
  },
  counterfeitCard: {
    backgroundColor: '#FFEBE7',
  },
  successCard: {
    backgroundColor: '#E8F5E9',
  },
  directoryCard: {
    backgroundColor: '#E3F2FD',
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
