import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import * as actions from '../actions';

const Home = ({ counterValue, handleIncreaseValue, handleDecreaseValue }) => (
  <div>
    <h2>Home Page</h2>
    <p>The counter value is {counterValue }</p>
    <button onClick={handleIncreaseValue}>Add</button>
    <button onClick={handleDecreaseValue}>Remove</button>
  </div>
);

Home.propTypes = {
  counterValue: PropTypes.number.isRequired,
  handleIncreaseValue: PropTypes.func.isRequired,
  handleDecreaseValue: PropTypes.func.isRequired,
};

// This is our redux wrapper component
// it passes @value {int} counterValue
// and the 2 actions to increase and decrease counterValue by 1

const mapStateToProps = state => ({
  counterValue: state.counterReducer,
});

const mapDispatchToProps = dispatch => ({
  handleIncreaseValue: () => {
    dispatch(actions.addToCounter());
  },
  handleDecreaseValue: () => {
    dispatch(actions.removeFromCounter());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
