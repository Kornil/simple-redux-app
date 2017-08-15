import * as actions from '../actions/types';

/**
 * this reducer manages the counter value
 * by chosing which action should be used
 * when the user clicks one of the 2 available buttons
 * the functions are under /actions
 * @param {object} state how many times clicked
 * @param {string} action used to identify which action to execute
 * @return {object} updated state
 */
export default function counterReducer(state = 0, action) {
  switch (action.type) {
    case actions.INCREMENT:
      return state + 1;
    case actions.DECREMENT:
      return state - 1;
    default:
      return state;
  }
}
