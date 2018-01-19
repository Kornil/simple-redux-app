import counterReducer from '../../reducers/counterReducer';
import { INCREMENT, DECREMENT } from '../../actions/types';

// To make the test unbiased we generate a random initialState for INCREMENT and DECREMENT,
// The reducer result should always be predictable regardless of initialState.
const getRandomNumber = (min, max) => Math.floor(Math.random() * ((max - min) + 1)) + min;

const randomNumber = getRandomNumber(1, 10);

describe('Counter reducer', () => {
  it('should return the initial state', () => {
    expect(counterReducer(undefined, {})).toEqual(0);
  });
  it('should handle INCREMENT', () => {
    expect(
      counterReducer(randomNumber, {
        type: INCREMENT,
      }),
    ).toEqual(randomNumber + 1);
  });
  it('should handle DECREMENT', () => {
    expect(
      counterReducer(randomNumber, {
        type: DECREMENT,
      }),
    ).toEqual(randomNumber - 1);
  });
});
