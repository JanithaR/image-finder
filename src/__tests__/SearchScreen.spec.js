import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';

import { SearchScreen } from 'src/screens/SearchScreen';
import { searchImages } from 'src/api';
import {
  mockedSearchResult,
  mockedSearchResultExtended,
} from './mockedSearchResults';
import testIds from 'src/testIds';
import { Routes } from 'src/enums/Routes';

jest.mock('src/api', () => ({
  searchImages: jest.fn(() => Promise.resolve(mockedSearchResult)),
}));

const navigation = { navigate: jest.fn() };

function setup() {
  return render(<SearchScreen navigation={navigation} />);
}

describe('Search', () => {
  beforeEach(() => {
    searchImages.mockClear();
  });

  it('should render correctly', () => {
    const { toJSON } = setup();

    expect(toJSON()).toMatchSnapshot();
  });

  it('should render a search input', () => {
    const { queryByPlaceholderText } = setup();

    expect(queryByPlaceholderText('Search Images')).toBeTruthy();
  });

  it('should render a search button', () => {
    const { queryByA11yRole } = setup();

    expect(queryByA11yRole('button')).toBeTruthy();
  });

  it('should update search input when typed', () => {
    const { queryByPlaceholderText, queryByDisplayValue } = setup();

    fireEvent.changeText(queryByPlaceholderText('Search Images'), 'car');

    expect(queryByDisplayValue('car')).toBeTruthy();
  });

  it('should call searchImage() from api utils when seach button is pressed', async () => {
    const { getByA11yRole, getByPlaceholderText, queryByTestId } = setup();

    fireEvent.changeText(getByPlaceholderText('Search Images'), 'car');
    fireEvent.press(getByA11yRole('button'));

    expect(queryByTestId(testIds.activityIndicator)).toBeTruthy();
    expect(queryByTestId(testIds.searchIcon)).toBeFalsy();

    await waitFor(() => queryByTestId(testIds.searchIcon));

    expect(searchImages).toHaveBeenCalledTimes(1);
    expect(searchImages).toHaveBeenCalledWith('car', 1, 30);
    expect(searchImages).toHaveReturnedTimes(1);
    expect(searchImages).toHaveReturnedWith(
      Promise.resolve(mockedSearchResult),
    );
  });

  it('should not call searchImage() from api utils if query is empty', () => {
    const { getByA11yRole, queryByTestId } = setup();

    fireEvent.press(getByA11yRole('button'));

    expect(queryByTestId(testIds.searchIcon)).toBeTruthy();
    expect(searchImages).toHaveBeenCalledTimes(0);
  });

  it('should show an error message if API failed', async () => {
    searchImages.mockRejectedValueOnce({
      message: 'Unsplash API error',
    });

    const {
      queryByPlaceholderText,
      queryByA11yRole,
      queryByText,
      getByTestId,
      toJSON,
    } = setup();

    fireEvent.changeText(queryByPlaceholderText('Search Images'), 'car');
    fireEvent.press(queryByA11yRole('button'));

    await waitFor(() => getByTestId(testIds.searchIcon));

    expect(queryByText('Unsplash API error')).toBeTruthy();
    expect(toJSON()).toMatchSnapshot();
  });
});

describe('Results', () => {
  beforeEach(() => {
    searchImages.mockClear();
  });

  it('should instruct the user to search for something on launch', () => {
    const { queryByTestId, toJSON } = setup();

    expect(queryByTestId('searchForSomething')).toBeTruthy();
    expect(toJSON()).toMatchSnapshot();
  });

  it('should clear previous search results if the query changes', async () => {
    const {
      getByPlaceholderText,
      getByA11yRole,
      getByTestId,
      getByDisplayValue,
    } = setup();

    fireEvent.changeText(getByPlaceholderText('Search Images'), 'car');
    fireEvent.press(getByA11yRole('button'));

    await waitFor(() => getByTestId(testIds.searchIcon));

    expect(getByTestId(testIds.resultsList).props.data).toHaveLength(30);

    fireEvent.changeText(getByDisplayValue('car'), 'bus');
    fireEvent.press(getByA11yRole('button'));

    await waitFor(() => getByTestId(testIds.searchIcon));

    expect(getByTestId(testIds.resultsList).props.data).toHaveLength(30);
  });

  it('should fetch more results when the end of the list is reached', async () => {
    searchImages.mockResolvedValueOnce(mockedSearchResult);
    searchImages.mockResolvedValueOnce(mockedSearchResultExtended);

    const {
      getByPlaceholderText,
      getByA11yRole,
      getByTestId,
      toJSON,
    } = setup();

    fireEvent.changeText(getByPlaceholderText('Search Images'), 'car');
    fireEvent.press(getByA11yRole('button'));

    await waitFor(() => getByTestId(testIds.searchIcon));

    expect(getByTestId(testIds.resultsList).props.data).toHaveLength(30);
    expect(toJSON()).toMatchSnapshot();

    fireEvent.scroll(getByTestId(testIds.resultsList), {
      nativeEvent: {
        contentOffset: {
          y: 103,
        },
        contentSize: {
          // Dimensions of the scrollable content
          height: 103,
          width: 103,
        },
        layoutMeasurement: {
          // Dimensions of the device
          height: 683,
          width: 411,
        },
      },
    });

    await waitFor(() => getByTestId(testIds.searchIcon));

    expect(searchImages).toHaveBeenCalledTimes(2);
    expect(searchImages).toHaveBeenCalledWith('car', 2, 30);
    expect(getByTestId(testIds.resultsList).props.data).toHaveLength(60);
    expect(toJSON()).toMatchSnapshot();
  });

  it('should not automatically fetch more results on end of scroll if the query has changed', async () => {
    const { getByPlaceholderText, getByA11yRole, getByTestId } = setup();

    fireEvent.changeText(getByPlaceholderText('Search Images'), 'car');
    fireEvent.press(getByA11yRole('button'));

    await waitFor(() => getByTestId(testIds.searchIcon));

    expect(getByTestId(testIds.resultsList).props.data).toHaveLength(30);

    fireEvent.changeText(getByPlaceholderText('Search Images'), 'bus');

    fireEvent.scroll(getByTestId(testIds.resultsList), {
      nativeEvent: {
        contentOffset: {
          y: 103,
        },
        contentSize: {
          // Dimensions of the scrollable content
          height: 103,
          width: 103,
        },
        layoutMeasurement: {
          // Dimensions of the device
          height: 683,
          width: 411,
        },
      },
    });

    expect(searchImages).toHaveBeenCalledTimes(1);
  });

  it('should show no images found if there are no results', async () => {
    searchImages.mockResolvedValueOnce({
      total: 0,
      total_pages: 0,
      results: [],
    });

    const {
      getByPlaceholderText,
      getByA11yRole,
      queryByTestId,
      getByTestId,
      toJSON,
    } = setup();

    fireEvent.changeText(getByPlaceholderText('Search Images'), 'xxx');
    fireEvent.press(getByA11yRole('button'));

    await waitFor(() => getByTestId(testIds.searchIcon));

    expect(queryByTestId(testIds.noImagesFound)).toBeTruthy();
    expect(toJSON()).toMatchSnapshot();
  });

  it('should show the total number of results', async () => {
    const {
      getByPlaceholderText,
      getByA11yRole,
      getByTestId,
      queryByText,
      toJSON,
    } = setup();

    fireEvent.changeText(getByPlaceholderText('Search Images'), 'car');
    fireEvent.press(getByA11yRole('button'));

    await waitFor(() => getByTestId(testIds.searchIcon));

    expect(queryByText('Total: 69982')).toBeTruthy();
    expect(toJSON()).toMatchSnapshot();
  });

  it('should call navigateTo() from react-navigation upon clicking on an item', async () => {
    const {
      getByPlaceholderText,
      getByA11yRole,
      getByTestId,
      queryByTestId,
    } = setup();

    fireEvent.changeText(getByPlaceholderText('Search Images'), 'car');
    fireEvent.press(getByA11yRole('button'));

    await waitFor(() => getByTestId(testIds.searchIcon));

    expect(queryByTestId('ZRns2R5azu0')).toBeTruthy();

    fireEvent.press(getByTestId('ZRns2R5azu0'));

    expect(navigation.navigate).toHaveBeenCalledTimes(1);
    expect(navigation.navigate).toHaveBeenCalledWith(Routes.Gallery, {
      id: 'ZRns2R5azu0',
    });
  });
});
