import React from 'react';
import { View, Text, Button, StyleSheet , Image} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// 1. Create the Stack manager
const Stack = createStackNavigator();

// --- SCREEN 1: HOME ---
const HomeScreen = ({ navigation }: { navigation: any }) => {
  return (
    <View style={styles.center}>
      <Image 
        source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }} 
        style={styles.profilePic} 
      />
      <Text style={styles.title}>Home Screen</Text>
      <Button 
        title="Go to Details" 
        onPress={() => navigation.navigate('Details')} 
        // onPress={() => navigation.navigate('About React-Native')} 
      />
    </View>
  );
};

// --- SCREEN 2: DETAILS ---
const DetailsScreen = ({ navigation }: { navigation: any }) => {
  return (
    <View style={styles.container}>
    <View style={styles.center}>
      <Text style={styles.title}>React-Native Multi Page</Text>
      <Text style={styles.data}> A multi-page home screen in React Native is typically designed to present different sets of content or features across multiple swipeable or navigable views, improving user experience by avoiding clutter on a single screen. This is commonly implemented using navigation libraries like React Navigation or components such as pagers and tab views (e.g., react-native-tab-view). Each “page” can represent a distinct section—like dashboard, notifications, or recommendations—while sharing a consistent layout and state management. Data for these pages is usually fetched from APIs or local storage and managed using state tools like Context API or Redux, ensuring smooth transitions and real-time updates. By structuring the home screen into multiple pages, developers can create a more organized, scalable, and performance-friendly interface that enhances usability, especially in apps with large amounts of dynamic content.</Text>
      <Button title="Go Back" onPress={() => navigation.goBack()} />
    </View>
    </View>
  );
};

// --- MAIN APP COMPONENT ---
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({

  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  container: {
    flex: 1,
    justifyContent: 'space-between',  // 🔥 spreads content vertically
    padding: 20
  },

  profilePic: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 20,
  },

  title: {
    fontSize: 24,
    marginBottom: 20,

  },
  data: {
    fontSize:15,
    marginBottom: 40,
    alignContent: 'center',
    marginLeft: 10,
    marginRight: 10,
    justifyContent: 'center'
  }
});