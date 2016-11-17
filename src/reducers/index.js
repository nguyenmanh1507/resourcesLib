import {
  FETCH_ALL_POSTS,
} from '../constants';

const initialState = {
  posts: [],
}

export default function resourcesLib(state = initialState, action) {
  switch (action.type) {
    case FETCH_ALL_POSTS:
      return Object.assign({}, state, {
        posts: action.posts,
      });

    default:
      return state;
  }
}
