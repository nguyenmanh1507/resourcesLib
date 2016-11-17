import {
  FETCH_ALL_POSTS, REQUEST_POSTS, RECEIVE_POSTS,
  REQUEST_POST, RECEIVE_POST,
} from '../constants';

const initialState = {
  isFetching: false,
  posts: [],
};

export default function resourcesLib(state = initialState, action) {
  switch (action.type) {
    case FETCH_ALL_POSTS:
      return Object.assign({}, state, {
        posts: action.posts,
      });

    case REQUEST_POSTS:
      return Object.assign({}, state, {
        isFetching: true,
      });

    case RECEIVE_POSTS:
      return Object.assign({}, state, {
        isFetching: false,
        posts: action.posts,
      });

    case REQUEST_POST:
      return Object.assign({}, state, {
        isFetching: true,
      });

    case RECEIVE_POST:
      return Object.assign({}, state, {
        isFetching: false,
        selectedPost: action.post,
      });

    default:
      return state;
  }
}
