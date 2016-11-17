import {
  FETCH_ALL_POSTS,
} from '../constants';

export function fetchAllPosts() {
  return {
    type: FETCH_ALL_POSTS,
  };
};
