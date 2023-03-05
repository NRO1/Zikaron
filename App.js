import { StyleSheet } from 'react-native';
import AllProfiles from './screens/AllProfiles';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProfileDetails from './screens/ProfileDetails';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style='light' />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Zikaron" component={AllProfiles}/>
          <Stack.Screen name="ProfileDetails" component={ProfileDetails}/>
        </Stack.Navigator>
      </NavigationContainer>
    </>
    
  );
}

const styles = StyleSheet.create({
  container: {},
});
