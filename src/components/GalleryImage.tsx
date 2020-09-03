import React, { ReactElement } from 'react';
import FastImage from 'react-native-fast-image';
import { ActivityIndicator, Dimensions, View, StyleSheet } from 'react-native';

type Props = {
  uri: string;
  altDescription: string | 'no alt description provided';
};

const windowWidth: number = Dimensions.get('window').width;
const windowHeight: number = Dimensions.get('window').height;

export function GalleryImage({ uri, altDescription }: Props) {
  const [loading, setLoading] = React.useState<boolean>(false);

  const onLoadStart = React.useCallback((): void => {
    setLoading(true);
  }, []);

  const onLoad = React.useCallback((): void => {
    setLoading(false);
  }, []);

  const onError = React.useCallback((): void => {
    setLoading(false);
  }, []);

  const renderActivityIndicator = React.useCallback((): ReactElement | null => {
    if (loading) {
      return (
        <View style={styles.mainWrapper}>
          <ActivityIndicator
            size="large"
            color="white"
            accessibilityRole="progressbar"
          />
        </View>
      );
    }

    return null;
  }, [loading]);

  return (
    <>
      <FastImage
        style={styles.image}
        source={{
          uri,
          priority: FastImage.priority.normal,
        }}
        resizeMode={FastImage.resizeMode.contain}
        onLoadStart={onLoadStart}
        onLoad={onLoad}
        onError={onError}
        accessibilityRole="image"
        accessibilityLabel={altDescription}
      />
      {renderActivityIndicator()}
    </>
  );
}

const styles = StyleSheet.create({
  image: { width: windowWidth, height: windowHeight },
  mainWrapper: {
    position: 'absolute',
    width: windowWidth,
    height: windowHeight,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
