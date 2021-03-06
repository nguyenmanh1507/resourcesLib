import reducer from '../../src/reducers';
import * as types from '../../src/constants';
import postsData from '../posts.data.js';

it('should return the initial state', () => {
  expect(reducer(undefined, {}))
    .toEqual({
      isFetching: false,
      posts: [],
    });
});

it('should return all posts', () => {
  const expected = {
    isFetching: false,
    posts: postsData,
  };

  expect(reducer(postsData, {
    type: types.FETCH_ALL_POSTS,
    posts: postsData,
  }))
    .toEqual(expected);
});
