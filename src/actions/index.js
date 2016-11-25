import es6Promise from 'es6-promise';
import fetch from 'isomorphic-fetch';
import {
  FETCH_ALL_POSTS, REQUEST_POSTS, RECEIVE_POSTS,
  REQUEST_POST, RECEIVE_POST,
  FIND_POST,
  UPDATE_SCROLL_POSITION,
} from '../constants';

es6Promise.polyfill();

export function fetchAllPosts(posts) {
  return {
    type: FETCH_ALL_POSTS,
    posts
  };
};

function requestPosts() {
  return {
    type: REQUEST_POSTS,
  };
}

function receivePosts(posts) {
  return {
    type: RECEIVE_POSTS,
    posts,
  };
}

export function fetchPosts() {
  return function(dispatch) {
    dispatch(requestPosts())

    return fetch('http://localhost:3000/posts/')
      .then(response => response.json())
      .then(json => dispatch(receivePosts(json)))
      .catch(error => {
        throw new Error(error);
      });
  };
};

// get single post remote endpoint
function requestPost() {
  return {
    type: REQUEST_POST,
  };
}

function receivePost(post) {
  return {
    type: RECEIVE_POST,
    post,
  };
}

function handleErrors(response) {
  if (!response.ok) {
    throw new Error(response.statusText);
  }

  return response;
}

export function fetchPost(postId) {
  return function(dispatch) {
    dispatch(requestPost());

    return fetch(`http://localhost:3000/posts/${postId}`)
      .then(handleErrors)
      .then(response => response.json())
      .then(json => dispatch(receivePost(json)))
      .catch(error => {
        throw new Error('Can\'t fetch this post', error);
      });
  };
};

// find single post in store
export function findPost(postId) {
  postId = parseInt(postId, 10);

  return {
    type: FIND_POST,
    postId,
  };
};

// update scroll position
export function updateScrollPosition(value) {
  return {
    type: UPDATE_SCROLL_POSITION,
    value,
  };
};
