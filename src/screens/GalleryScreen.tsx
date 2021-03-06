import React from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  SafeAreaView,
  Text,
  View,
} from 'react-native';
import { RouteProp } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { StackNavigationProp } from '@react-navigation/stack';
import Gallery from 'react-native-image-gallery';

import { RootStackParamList } from '../types/RootStackParamList';
import { Routes } from '../enums/Routes';
import { GalleryImage } from '../components/GalleryImage';
import accessibilityLabels from '../accessibilityLabels';
import { getOS } from '../utils';

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

  const { url, altDescription, photographerName } = route.params;

  const images = React.useMemo(() => [{ source: { uri: url } }], [url]);

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.mainWrapper}>
        <Gallery
          style={styles.gallery}
          images={images}
          imageComponent={(imageProps: { source: { uri: string } }) => (
            <GalleryImage
              uri={imageProps.source.uri}
              altDescription={altDescription}
            />
          )}
        />
        <TouchableOpacity
          accessibilityRole="button"
          onPress={onClosePress}
          style={StyleSheet.flatten([
            styles.closeButtonWrapper,
            { top: getOS() === 'ios' ? 40 : 20 },
          ])}>
          <Icon
            name="close"
            size={30}
            color="white"
            accessibilityRole="imagebutton"
            accessibilityLabel={accessibilityLabels.close}
          />
        </TouchableOpacity>
        <View
          style={StyleSheet.flatten([
            styles.creditsWrapper,
            { bottom: getOS() === 'ios' ? 40 : 20 },
          ])}>
          <Text style={styles.photographer}>Photographer</Text>
          <Text style={styles.photographerName}>{photographerName}</Text>
        </View>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  gallery: { backgroundColor: 'black' },
  closeButtonWrapper: {
    width: 32,
    height: 32,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    right: 20,
  },
  mainWrapper: {
    flex: 1,
    backgroundColor: 'black',
  },
  creditsWrapper: {
    position: 'absolute',
    left: 20,
  },
  photographerName: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 24,
  },
  photographer: {
    color: 'white',
    fontSize: 10,
  },
});
