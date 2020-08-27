import React from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  SafeAreaView,
} from 'react-native';
import { RouteProp } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { StackNavigationProp } from '@react-navigation/stack';
import Gallery from 'react-native-image-gallery';

import { RootStackParamList } from '../types/RootStackParamList';
import { Routes } from '../enums/Routes';
import { GalleryImage } from '../components/GalleryImage';
import accessibilityLabels from '../accessibilityLabels';

type GalleryScreenRouteProp = RouteProp<RootStackParamList, Routes.Gallery>;

type GalleryScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  Routes.Gallery
>;

type Props = {
  navigation: GalleryScreenNavigationProp;
  route: GalleryScreenRouteProp;
};

export function GalleryScreen({ route, navigation }: Props) {
  const onClosePress = React.useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  const { url } = route.params;

  const images = React.useMemo(() => [{ source: { uri: url } }], [url]);

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.mainWrapper}>
        <Gallery
          style={styles.gallery}
          images={images}
          imageComponent={(imageProps: { source: { uri: string } }) => (
            <GalleryImage imageProps={imageProps} />
          )}
        />
        <TouchableOpacity
          accessibilityRole="button"
          onPress={onClosePress}
          style={styles.closeButtonWrapper}>
          <Icon
            name="close"
            size={30}
            color="white"
            accessibilityRole="imagebutton"
            accessibilityLabel={accessibilityLabels.close}
          />
        </TouchableOpacity>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  gallery: { flex: 1, backgroundColor: 'black' },
  closeButtonWrapper: {
    width: 32,
    height: 32,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: 20,
    right: 20,
  },
  mainWrapper: {
    flex: 1,
  },
});
