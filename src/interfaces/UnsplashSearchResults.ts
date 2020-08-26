export interface Urls {
  raw: string;
  full: string;
  regular: string;
  small: string;
  thumb: string;
}

export interface Links {
  self: string;
  html: string;
  download: string;
  download_location: string;
}

export interface Links2 {
  self: string;
  html: string;
  photos: string;
  likes: string;
  portfolio: string;
  following: string;
  followers: string;
}

export interface ProfileImage {
  small: string;
  medium: string;
  large: string;
}

export interface User {
  id: string;
  updated_at: string;
  username: string;
  name: string;
  first_name: string;
  last_name: string | null;
  twitter_username: string | null;
  portfolio_url: string | null;
  bio: string | null;
  location: string | null;
  links: Links2;
  profile_image: ProfileImage;
  instagram_username: string | null;
  total_collections: number;
  total_likes: number;
  total_photos: number;
  accepted_tos: boolean;
}

export interface Type {
  slug: string;
  pretty_slug: string;
}

export interface Category {
  slug: string;
  pretty_slug: string;
}

export interface Subcategory {
  slug: string;
  pretty_slug: string;
}

export interface Ancestry {
  type: Type;
  category: Category;
  subcategory?: Subcategory;
}

export interface Urls2 {
  raw: string;
  full: string;
  regular: string;
  small: string;
  thumb: string;
}

export interface Links3 {
  self: string;
  html: string;
  download: string;
  download_location: string;
}

export interface Links4 {
  self: string;
  html: string;
  photos: string;
  likes: string;
  portfolio: string;
  following: string;
  followers: string;
}

export interface ProfileImage2 {
  small: string;
  medium: string;
  large: string;
}

export interface CoverPhoto {
  id: string;
  created_at: string;
  updated_at: string;
  promoted_at: string | null;
  width: number;
  height: number;
  color: string;
  description: string | null;
  alt_description: string | null;
  urls: Urls2;
  links: Links3;
  categories: any[];
  likes: number;
  liked_by_user: boolean;
  current_user_collections: any[];
  sponsorship?: any;
  user: User;
}

export interface Source {
  ancestry: Ancestry;
  title: string;
  subtitle: string;
  description: string | null;
  meta_title: string;
  meta_description: string;
  cover_photo: CoverPhoto;
}

export interface Tag {
  type: string;
  title: string;
  source?: Source;
}

export interface Result {
  id: string;
  created_at: string;
  updated_at: string;
  promoted_at: string | null;
  width: number;
  height: number;
  color: string;
  description: string | null;
  alt_description: string | null;
  urls: Urls;
  links: Links;
  categories: any[];
  likes: number;
  liked_by_user: boolean;
  current_user_collections: any[];
  sponsorship?: any;
  user: User;
  tags: Tag[];
}

export interface UnsplashSearchResults {
  total: number;
  total_pages: number;
  results: Result[];
}
