import React from 'react';
import { Text } from 'react-native';
import { RouteProp } from '@react-navigation/native';

import { RootStackParamList } from '../types/RootStackParamList';
import { Routes } from '../enums/Routes';

type ProfileScreenRouteProp = RouteProp<RootStackParamList, Routes.Gallery>;

export function GalleryScreen({ route }: { route: ProfileScreenRouteProp }) {
  const { id } = route.params;
  return (
    <>
      <Text>the image id is : {id}</Text>
    </>
  );
}
