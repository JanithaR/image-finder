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
import accessibilityLabels from '../accessibilityLabels';

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
    const { queryByA11yRole, queryByA11yLabel } = setup();

    expect(queryByA11yRole('button')).toBeTruthy();
    expect(queryByA11yRole('imagebutton')).toBeTruthy();
    expect(queryByA11yLabel(accessibilityLabels.search)).toBeTruthy();
  });

  it('should update search input when typed', () => {
    const { queryByPlaceholderText, queryByDisplayValue } = setup();

    fireEvent.changeText(queryByPlaceholderText('Search Images'), 'car');

    expect(queryByDisplayValue('car')).toBeTruthy();
  });

  it('should call searchImage() from api utils when seach button is pressed', async () => {
    const { getByA11yRole, getByPlaceholderText, queryByA11yRole } = setup();

    fireEvent.changeText(getByPlaceholderText('Search Images'), 'car');
    fireEvent.press(getByA11yRole('button'));

    expect(queryByA11yRole('progressbar')).toBeTruthy();
    expect(queryByA11yRole('imagebutton')).toBeFalsy();

    await waitFor(() => queryByA11yRole('imagebutton'));

    expect(searchImages).toHaveBeenCalledTimes(1);
    expect(searchImages).toHaveBeenCalledWith('car', 1, 30);
    expect(searchImages).toHaveReturnedTimes(1);
    expect(searchImages).toHaveReturnedWith(
      Promise.resolve(mockedSearchResult),
    );
  });

  it('should not call searchImage() from api utils if query is empty', () => {
    const { getByA11yRole, queryByA11yLabel } = setup();

    fireEvent.press(getByA11yRole('button'));

    expect(queryByA11yLabel(accessibilityLabels.search)).toBeTruthy();
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
      queryByA11yLabel,
      toJSON,
    } = setup();

    fireEvent.changeText(queryByPlaceholderText('Search Images'), 'car');
    fireEvent.press(queryByA11yRole('button'));

    await waitFor(() => queryByA11yLabel(accessibilityLabels.search));

    expect(queryByText('Unsplash API error')).toBeTruthy();
    expect(toJSON()).toMatchSnapshot();
  });
});

describe('Results', () => {
  beforeEach(() => {
    searchImages.mockClear();
  });

  it('should instruct the user to search for something on launch', () => {
    const { queryByA11yLabel, toJSON, queryByText } = setup();

    expect(
      queryByA11yLabel(accessibilityLabels.searchForSomething),
    ).toBeTruthy();
    expect(toJSON()).toMatchSnapshot();
    expect(queryByText(/^[0-9]+\/[0-9]+$:*/)).toBeFalsy();
  });

  it('should show results and meta data upon successfully retrieving data', async () => {
    const {
      getByPlaceholderText,
      getByA11yRole,
      queryByA11yLabel,
      queryByText,
      toJSON,
      queryByA11yRole,
    } = setup();

    fireEvent.changeText(getByPlaceholderText('Search Images'), 'car');
    fireEvent.press(getByA11yRole('button'));
    expect(queryByA11yRole('progressbar')).toBeTruthy();

    await waitFor(() => queryByA11yLabel(accessibilityLabels.search));

    expect(queryByText('30/69982')).toBeTruthy();

    expect(toJSON()).toMatchSnapshot();
  });

  it('should clear previous search results if the query changes', async () => {
    const {
      getByPlaceholderText,
      getByA11yRole,
      getByDisplayValue,
      queryByA11yLabel,
      queryByText,
    } = setup();

    fireEvent.changeText(getByPlaceholderText('Search Images'), 'car');
    fireEvent.press(getByA11yRole('button'));

    await waitFor(() => queryByA11yLabel(accessibilityLabels.search));

    expect(queryByText('30/69982')).toBeTruthy();

    fireEvent.changeText(getByDisplayValue('car'), 'bus');
    fireEvent.press(getByA11yRole('button'));

    await waitFor(() => queryByA11yLabel(accessibilityLabels.search));

    expect(queryByText('30/69982')).toBeTruthy();
  });

  it('should fetch more results when the end of the list is reached', async () => {
    searchImages.mockResolvedValueOnce(mockedSearchResult);
    searchImages.mockResolvedValueOnce(mockedSearchResultExtended);

    const {
      getByPlaceholderText,
      getByA11yRole,
      queryByTestId,
      queryByA11yLabel,
      queryByText,
      queryByA11yRole,
    } = setup();

    fireEvent.changeText(getByPlaceholderText('Search Images'), 'car');
    fireEvent.press(getByA11yRole('button'));

    await waitFor(() => queryByA11yLabel(accessibilityLabels.search));

    expect(queryByText('30/69982')).toBeTruthy();

    fireEvent.scroll(queryByTestId(testIds.resultsList), {
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

    expect(queryByA11yRole('progressbar')).toBeTruthy();

    await waitFor(() => queryByA11yLabel(accessibilityLabels.search));

    expect(searchImages).toHaveBeenCalledTimes(2);
    expect(searchImages).toHaveBeenCalledWith('car', 2, 30);
    expect(queryByText('60/69982')).toBeTruthy();
  });

  it('should not automatically fetch more results on end of scroll if the query has changed', async () => {
    const {
      getByPlaceholderText,
      getByA11yRole,
      getByTestId,
      queryByA11yLabel,
      queryByText,
    } = setup();

    fireEvent.changeText(getByPlaceholderText('Search Images'), 'car');
    fireEvent.press(getByA11yRole('button'));

    await waitFor(() => queryByA11yLabel(accessibilityLabels.search));

    expect(queryByText('30/69982')).toBeTruthy();

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
    expect(queryByText('30/69982')).toBeTruthy();
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
      toJSON,
      queryByA11yLabel,
      queryByText,
    } = setup();

    fireEvent.changeText(getByPlaceholderText('Search Images'), 'xxx');
    fireEvent.press(getByA11yRole('button'));

    await waitFor(() => queryByA11yLabel(accessibilityLabels.search));

    expect(queryByA11yLabel(accessibilityLabels.noImagesFound)).toBeTruthy();
    expect(queryByText('0/0')).toBeTruthy();
    expect(toJSON()).toMatchSnapshot();
  });

  it('should call navigateTo() from react-navigation upon clicking on an item', async () => {
    const {
      getByPlaceholderText,
      getByA11yRole,
      getByTestId,
      queryByTestId,
      queryByA11yLabel,
    } = setup();

    fireEvent.changeText(getByPlaceholderText('Search Images'), 'car');
    fireEvent.press(getByA11yRole('button'));

    await waitFor(() => queryByA11yLabel(accessibilityLabels.search));

    expect(queryByTestId('ZRns2R5azu0')).toBeTruthy();

    fireEvent.press(getByTestId('ZRns2R5azu0'));

    expect(navigation.navigate).toHaveBeenCalledTimes(1);
    expect(navigation.navigate).toHaveBeenCalledWith(Routes.Gallery, {
      url:
        'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjE1ODYzOX0',
      altDescription: 'silver sports coupe on asphalt road',
      photographerName: 'Erik Mclean',
    });
  });
});
