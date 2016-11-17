import {
  FETCH_ALL_POSTS,
} from '../constants';
import {
  fetchAllPosts,
} from '../actions';

const initialState = {
  posts: [],
}

function resourcesLib(state = initialState, action) {
  switch (action.type) {
    case FETCH_ALL_POSTS:
      return state;

    default:
      return state;
  }
}
