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

import strings from '../strings';
import testIds from '../testIds';
import { SearchForSomething, NoImagesFound } from '../svg';
import colors from '../colors';
import { searchImages } from '../api';
import {
  UnsplashSearchResults,
  Result,
} from '../interfaces/UnsplashSearchResults';
import AppConfig from '../config';
import { Routes } from '../enums/Routes';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../types/RootStackParamList';
import { ImageThumb } from '../components/ImageThumb';
import accessibilityLabels from '../accessibilityLabels';

const COLUMNS: number = 4;
const windowWidth: number = Dimensions.get('window').width;
const thumbSize: number = Math.round(windowWidth / COLUMNS);

type SearchScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  Routes.Search
>;

type Props = {
  navigation: SearchScreenNavigationProp;
};

export function SearchScreen({ navigation }: Props) {
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
          <Text style={styles.total}>
            {searchResults.results.length}/{searchResults.total}
          </Text>
        </View>
      );
    }

    return null;
  }, [searchResults]);

  const onItemPress = React.useCallback(
    (id: string): void => {
      if (searchResults) {
        const image: Result | undefined = searchResults?.results.find(
          (result) => result.id === id,
        );

        if (image) {
          navigation.navigate(Routes.Gallery, {
            url: image.urls.regular,
            altDescription: image.alt_description ? image.alt_description : '',
            photographerName: image.user.name,
          });
        }
      }
    },
    [navigation, searchResults],
  );

  const renderItem = React.useCallback(
    ({ item }: { item: Result }): ReactElement => {
      return (
        <ImageThumb
          onPress={onItemPress}
          id={item.id}
          thumbSize={thumbSize}
          url={item.urls.thumb}
          testId={item.id}
          color={item.color}
        />
      );
    },
    [onItemPress],
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
                accessibilityRole="progressbar"
              />
            ) : (
              <Icon
                name="image-search"
                size={30}
                color={colors.primaryYellow}
                accessibilityRole="imagebutton"
                accessibilityLabel={accessibilityLabels.search}
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
                accessibilityLabel={accessibilityLabels.noImagesFound}
                width={windowWidth}
              />
            }
            getItemLayout={(data, index) => ({
              length: thumbSize,
              offset: thumbSize * index,
              index,
            })}
            onEndReachedThreshold={1}
            refreshing={loading}
          />
        ) : (
          <SearchForSomething
            width={windowWidth}
            accessibilityLabel={accessibilityLabels.searchForSomething}
          />
        )}
      </SafeAreaView>
    </>
  );
}

const searchBorderRadius: number = 10;

const styles = StyleSheet.create({
  mainWrapper: {
    flex: 1,
    backgroundColor: 'white',
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
  errorWrapper: { paddingHorizontal: 20 },
  resultsMetaWrapper: { paddingHorizontal: 20, paddingBottom: 10 },
  errorText: { color: 'red' },
  listItemSeparator: { height: 2 },
  list: {
    flex: 1,
  },
  total: {
    fontSize: 16,
  },
});
