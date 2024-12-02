import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Tabs } from './components/bottomTabNav'; // Import the Tabs navigator

export default function App() {
  return (
    <NavigationContainer>
      {/* Render the Tabs Navigator */}
      <Tabs />
    </NavigationContainer>
  );
}
