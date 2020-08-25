import Unsplash, { toJson } from 'unsplash-js';
import { UNSPLASH_ACCESS_KEY } from '@env';

import { UnsplashSearchResults } from './interfaces/UnsplashSearchResults';

const unsplash = new Unsplash({ accessKey: UNSPLASH_ACCESS_KEY });

export function searchImages(
  query: string,
  page: number,
  imagePerPage: number,
): Promise<UnsplashSearchResults> {
  return unsplash.search
    .photos(query, page, imagePerPage)
    .then(toJson)
    .then((json) => json)
    .catch((error) => error);
}
