import * as actions from '../../src/actions';
import * as types from '../../src/constants';
import postsData from '../posts.data.js';

it('should create an action to fetch all posts', () => {
  const expectedAction = {
    type: types.FETCH_ALL_POSTS,
    posts: postsData,
  };

  expect(actions.fetchAllPosts(postsData)).toEqual(expectedAction);
});
