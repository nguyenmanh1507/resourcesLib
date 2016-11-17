import {
  FETCH_ALL_POSTS,
} from '../constants';

export function fetchAllPosts(posts) {
  return {
    type: FETCH_ALL_POSTS,
    posts
  };
};
