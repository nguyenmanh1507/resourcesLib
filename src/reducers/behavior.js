import { UPDATE_SCROLL_POSITION } from '../constants';

const initialState = {
  previousScrollPosition: 0,
};


export default function behavior(state = initialState, action) {
  switch(action.type) {
    case UPDATE_SCROLL_POSITION:
      return Object.assign({}, state, {
        previousScrollPosition: action.value,
      });

    default:
      return state;
  }
};
