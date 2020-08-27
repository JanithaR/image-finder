import React from 'react';
import { render, fireEvent, act } from '@testing-library/react-native';

import { GalleryScreen } from 'src/screens/GalleryScreen';
import accessibilityLabels from '../accessibilityLabels';

const route = {
  params: {
    url: 'fake_image_url',
  },
};

const navigation = {
  goBack: jest.fn(),
};

function setup() {
  return render(<GalleryScreen route={route} navigation={navigation} />);
}

describe('Close button', () => {
  it('should show a close button', () => {
    const { queryByA11yRole, queryByA11yLabel, toJSON } = setup();

    expect(queryByA11yRole('button')).toBeTruthy();
    expect(queryByA11yLabel(accessibilityLabels.close)).toBeTruthy();
    expect(toJSON()).toMatchSnapshot();
  });

  it('should call goBack() from navigation when close button is pressed', () => {
    const { getByA11yRole } = setup();

    fireEvent.press(getByA11yRole('button'));

    expect(navigation.goBack).toHaveBeenCalledTimes(1);
  });
});

describe('Gallery', () => {
  it('should show an activitiy indicator only when loading the image', () => {
    const { queryByA11yRole, toJSON } = setup();

    act(() => {
      queryByA11yRole('image').props.onFastImageLoadStart();
    });
    expect(queryByA11yRole('progressbar')).toBeTruthy();
    expect(toJSON()).toMatchSnapshot();

    act(() => {
      queryByA11yRole('image').props.onFastImageLoad();
    });
    expect(queryByA11yRole('progressbar')).toBeFalsy();
    expect(toJSON()).toMatchSnapshot();

    act(() => {
      queryByA11yRole('image').props.onFastImageLoadStart();
    });
    expect(queryByA11yRole('progressbar')).toBeTruthy();

    act(() => {
      queryByA11yRole('image').props.onFastImageError();
    });
    expect(queryByA11yRole('progressbar')).toBeFalsy();
    expect(toJSON()).toMatchSnapshot();
  });
});
