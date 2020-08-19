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
import {
  SafeAreaView,
  StyleSheet,
  StatusBar,
  TextInput,
  Pressable,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import strings from './strings';
import colors from './colors';

declare const global: { HermesInternal: null | {} };

const App = () => {
  function onSearchPress() {
    console.log('on search press');
  }

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.mainWrapper}>
        <View style={styles.searchWrapper}>
          <TextInput
            placeholder={strings.searchImages}
            style={styles.searchInput}
          />
          <Pressable
            onPress={onSearchPress}
            style={({ pressed }) => [
              {
                backgroundColor: pressed
                  ? colors.primaryGreenPressed
                  : colors.primaryGreen,
              },
              styles.searchButton,
            ]}
            accessibilityRole="button">
            <Icon name="image-search" size={30} color={colors.primaryYellow} />
          </Pressable>
        </View>
      </SafeAreaView>
    </>
  );
};

const searchBorderRadius: number = 10;

const styles = StyleSheet.create({
  mainWrapper: {
    padding: 20,
    flex: 1,
  },
  searchInput: {
    borderWidth: 1,
    borderColor: colors.searchInputBorder,
    borderTopLeftRadius: searchBorderRadius,
    borderBottomLeftRadius: searchBorderRadius,
    paddingHorizontal: 15,
    fontSize: 18,
    flex: 1,
  },
  searchButton: {
    borderTopRightRadius: searchBorderRadius,
    borderBottomRightRadius: searchBorderRadius,
    width: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchWrapper: {
    flexDirection: 'row',
  },
});

export default App;
