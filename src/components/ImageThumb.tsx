import React, { ReactElement } from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import FastImage from 'react-native-fast-image';

type Props = {
  onPress: (id: string) => void;
  id: string;
  thumbSize: number;
  url: string;
  testId: string;
};

export function ImageThumb({
  onPress,
  id,
  thumbSize,
  url,
  testId,
}: Props): ReactElement {
  function onThumbPress(): void {
    onPress(id);
  }

  return (
    <TouchableOpacity onPress={onThumbPress} testID={testId}>
      <FastImage
        style={[styles.image, { width: thumbSize, height: thumbSize }]}
        source={{
          uri: url,
          headers: { Authorization: 'someAuthToken' },
          priority: FastImage.priority.normal,
        }}
        resizeMode={FastImage.resizeMode.cover}
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  image: {
    borderWidth: 1,
    borderColor: 'white',
  },
});
