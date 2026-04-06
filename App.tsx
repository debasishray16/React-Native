import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, StatusBar } from 'react-native';
import { Linking , Alert} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


const Stack = createStackNavigator();



// Helper Funcion
const openLink = async (url: string) => {
  const supported = await Linking.canOpenURL(url);

  if (supported) {
    await Linking.openURL(url);
  }
  else{
    Alert.alert(`Don't know how to open this URL: ${url}`)
  }
}




// --- SCREEN 1: HOME ---
const HomeScreen = ({ navigation }: { navigation: any }) => {
  return (
    <View style={styles.center}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.card}>
        <Image 
          source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }} 
          style={styles.profilePic} 
        />
        <Text style={styles.title}>Welcome Debasish</Text>
        <Text style={styles.subtitle}>Explore the power of Native UI</Text>
        
        <TouchableOpacity 
          style={styles.primaryButton}
          onPress={() => navigation.navigate('Details')}
        >
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

// --- SCREEN 2: DETAILS ---
const DetailsScreen = ({ navigation }: { navigation: any }) => {
  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.header}>
        <Text style={styles.detailTitle}>React Native Multi-Page</Text>
      </View>
      
      <View style={styles.contentBody}>
        <Text style={styles.dataText}>
          A multi-page home screen in React Native is typically designed to present different sets of content or features across multiple swipeable or navigable views, improving user experience by avoiding clutter on a single screen.
        </Text>
        <Text style={styles.dataText}>
          Each “page” can represent a distinct section—like a dashboard or recommendations—while sharing a consistent layout. Data is usually fetched from APIs, ensuring smooth transitions and real-time updates.
        </Text>

        <Text style={styles.dataText}>
          To master React Native, you should check out the official 
          {/* Inline Link Example */}
          <Text 
            style={styles.hyperlink} 
            onPress={() => openLink('https://github.com/debasishray16/React-Native/blob/stack-Navigation/App.tsx')}
          >
            {" "}Documentation.
          </Text>
        </Text>
      </View>


      {/* Button Link Example */}
      <TouchableOpacity 
        style={styles.linkButton} 
        onPress={() => openLink('https://github.com/facebook/react-native')}
      >
        <Text style={styles.linkButtonText}>Visit GitHub Repo</Text>
      </TouchableOpacity>


      <TouchableOpacity 
        style={styles.secondaryButton} 
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.secondaryButtonText}>Go Back</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        screenOptions={{
          headerStyle: { elevation: 0, shadowOpacity: 0, backgroundColor: '#f8f9fa' },
          headerTitleStyle: { fontWeight: 'bold' }
        }}
      >
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Details" component={DetailsScreen} options={{ title: 'Article' }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  // General Layout
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f2f5',
  },
  scrollContainer: {
    padding: 24,
    backgroundColor: '#fff',
    flexGrow: 1,
  },
  // Home Screen Components
  card: {
    backgroundColor: '#fff',
    padding: 40,
    borderRadius: 30,
    alignItems: 'center',
    width: '85%',
    // Shadow for iOS
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.1,
    shadowRadius: 20,
    // Elevation for Android
    elevation: 5,
  },
  profilePic: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 20,
    borderWidth: 4,
    borderColor: '#e1e4e8',
  },
  title: {
    fontSize: 28,
    fontWeight: '800',
    color: '#1a1a1a',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 30,
    textAlign: 'center',
  },
  // Buttons
  primaryButton: {
    backgroundColor: '#007AFF',
    paddingVertical: 14,
    paddingHorizontal: 30,
    borderRadius: 15,
    width: '100%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
  secondaryButton: {
    marginTop: 20,
    padding: 15,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#007AFF',
    borderRadius: 15,
  },
  secondaryButtonText: {
    color: '#007AFF',
    fontWeight: '600',
  },
  // Details Screen Components
  header: {
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    paddingBottom: 15,
  },
  detailTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#1a1a1a',
    lineHeight: 40,
  },
  contentBody: {
    marginBottom: 30,
  },
  dataText: {
    fontSize: 17,
    lineHeight: 26,
    color: '#444',
    marginBottom: 15,
    textAlign: 'left',
  },

  hyperlink: {
    color: '#007AFF',
    textDecorationLine: 'underline',
    fontWeight: 'bold',
  },
  linkButton: {
    backgroundColor: '#333', // GitHub dark style
    padding: 15,
    borderRadius: 15,
    alignItems: 'center',
    marginBottom: 10,
  },
  linkButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});