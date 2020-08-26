/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { GalleryScreen } from './screens/GalleryScreen';
import { SearchScreen } from './screens/SearchScreen';
import { Routes } from './enums/Routes';
import { RootStackParamList } from './types/RootStackParamList';

declare const global: { HermesInternal: null | {} };

const App = () => {
  const Stack = createStackNavigator<RootStackParamList>();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={Routes.Search} headerMode={'none'}>
        <Stack.Screen name={Routes.Search} component={SearchScreen} />
        <Stack.Screen name={Routes.Gallery} component={GalleryScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
