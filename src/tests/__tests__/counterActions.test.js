import * as actions from '../../actions/counterActions';
import { INCREMENT, DECREMENT } from '../../actions/types';

describe('Counter actions', () => {
  it('should handle INCREMENT counter', () => {
    const expectedAction = {
      type: INCREMENT,
    };
    expect(actions.addToCounter()).toEqual(expectedAction);
  });
  it('should handle DECREMENT counter', () => {
    const expectedAction = {
      type: DECREMENT,
    };
    expect(actions.removeFromCounter()).toEqual(expectedAction);
  });
});
