/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, { ReactElement, MutableRefObject } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  StatusBar,
  TextInput,
  Pressable,
  View,
  Dimensions,
  ActivityIndicator,
  FlatList,
  Text,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import FastImage from 'react-native-fast-image';

import strings from './strings';
import colors from './colors';
import testIds from './testIds';
import { SearchForSomething, NoImagesFound } from './svg';
import { searchImages } from './api';
import {
  UnsplashSearchResults,
  Result,
} from './interfaces/UnsplashSearchResults';
import AppConfig from './config';

declare const global: { HermesInternal: null | {} };

const COLUMNS: number = 4;
const windowWidth: number = Dimensions.get('window').width;
const imageSize: number = Math.round(windowWidth / COLUMNS);

const App = () => {
  const [query, setQuery] = React.useState<string>('');
  const [
    searchResults,
    setSearchResults,
  ] = React.useState<null | UnsplashSearchResults>(null);
  const [loading, setLoading] = React.useState<boolean>(false);
  const [page, setPage] = React.useState<number>(1);
  const [error, setError] = React.useState<string | null>(null);

  const initialRender: MutableRefObject<boolean> = React.useRef(true);
  const lastQuery: MutableRefObject<string> = React.useRef('');

  React.useEffect(() => {
    if (initialRender.current) {
      initialRender.current = false;
    } else {
      setLoading(true);
      searchImages(lastQuery.current, page, AppConfig.imagesPerPage)
        .then((data) => {
          setLoading(false);
          setError(null);

          setSearchResults((prevSearchResults) => {
            if (prevSearchResults) {
              return {
                ...prevSearchResults,
                results: [...prevSearchResults?.results, ...data.results],
              };
            } else {
              return null;
            }
          });
        })
        .catch((searchImagesError) => {
          setLoading(false);
          setError(searchImagesError.message);
        });
    }
  }, [page]);

  const onSearchPress = React.useCallback((): void => {
    if (query) {
      lastQuery.current = query;

      setLoading(true);

      searchImages(query, page, AppConfig.imagesPerPage)
        .then((data) => {
          setLoading(false);
          setError(null);
          setSearchResults(data);
        })
        .catch((searchImagesError) => {
          setLoading(false);
          setError(searchImagesError.message);
        });
    }
  }, [query, page]);

  const onChangeQuery = React.useCallback((value: string): void => {
    setQuery(value);
  }, []);

  const keyExtractor = React.useCallback((item: Result): string => {
    return item.id;
  }, []);

  const onEndReached = React.useCallback((): void => {
    if (lastQuery.current === query) {
      setPage(page + 1);
    }
  }, [page, query]);

  const renderError = React.useCallback((): ReactElement | null => {
    if (error) {
      return (
        <View style={styles.errorWrapper}>
          <Text style={styles.errorText}>{error}</Text>
        </View>
      );
    }

    return null;
  }, [error]);

  const renderResultsMeta = React.useCallback((): ReactElement | null => {
    if (searchResults) {
      return (
        <View style={styles.resultsMetaWrapper}>
          <Text>Total: {searchResults.total}</Text>
        </View>
      );
    }

    return null;
  }, [searchResults]);

  const renderItem = React.useCallback(
    ({ item }: { item: Result }): ReactElement => {
      return (
        <FastImage
          style={styles.image}
          source={{
            uri: item.urls.thumb,
            headers: { Authorization: 'someAuthToken' },
            priority: FastImage.priority.normal,
          }}
          resizeMode={FastImage.resizeMode.cover}
        />
      );
    },
    [],
  );

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.mainWrapper}>
        <View style={styles.searchWrapper}>
          <TextInput
            placeholder={strings.searchImages}
            style={styles.searchInput}
            onChangeText={onChangeQuery}
            value={query}
          />
          <Pressable
            disabled={loading}
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
            {loading ? (
              <ActivityIndicator
                size="small"
                color={colors.primaryYellow}
                testID={testIds.activityIndicator}
              />
            ) : (
              <Icon
                name="image-search"
                size={30}
                color={colors.primaryYellow}
                testID={testIds.searchIcon}
              />
            )}
          </Pressable>
        </View>
        {renderResultsMeta()}
        {renderError()}
        {searchResults ? (
          <FlatList
            testID={testIds.resultsList}
            style={styles.list}
            data={searchResults.results}
            renderItem={renderItem}
            numColumns={COLUMNS}
            keyExtractor={keyExtractor}
            onEndReached={onEndReached}
            extraData={searchResults}
            ListEmptyComponent={
              <NoImagesFound
                testID={testIds.noImagesFound}
                width={windowWidth}
              />
            }
          />
        ) : (
          <SearchForSomething
            width={windowWidth}
            testID={testIds.searchForSomething}
          />
        )}
      </SafeAreaView>
    </>
  );
};

const searchBorderRadius: number = 10;

const styles = StyleSheet.create({
  mainWrapper: {
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
    padding: 20,
    flexDirection: 'row',
  },
  image: {
    width: imageSize,
    height: imageSize,
    borderWidth: 1,
    borderColor: 'white',
  },
  errorWrapper: { paddingHorizontal: 20 },
  resultsMetaWrapper: { paddingHorizontal: 20 },
  errorText: { color: 'red' },
  listItemSeparator: { height: 2 },
  list: {
    flex: 1,
  },
});

export default App;
