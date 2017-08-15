import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import * as actions from '../actions';

class Home extends Component {
  /**
   * @param {*} props counterValue
   */
  constructor(props) {
    super(props);

    this.handleIncreaseValue = this.handleIncreaseValue.bind(this);
    this.handleDecreaseValue = this.handleDecreaseValue.bind(this);
  }
  /**
   * @return {number} this.props.counterValue +1
   */
  handleIncreaseValue() {
    this.props.addToCounter();
  }
  /**
   * @return {number} this.props.counterValue -1
   */
  handleDecreaseValue() {
    this.props.removeFromCounter();
  }

  /**
   * Main render of Homepage ideally all components
   * used in this page should be children of this one
   * @returns {*} our stateful page component
   */
  render() {
    return (
      <div>
        <h2>Home Page</h2>
        <p>The counter value is { this.props.counterValue }</p>
        <button onClick={this.handleIncreaseValue}>Add</button>
        <button onClick={this.handleDecreaseValue}>Remove</button>
      </div>
    );
  }
}

Home.propTypes = {
  counterValue: PropTypes.number.isRequired,
  addToCounter: PropTypes.func.isRequired,
  removeFromCounter: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  counterValue: state.counterReducer,
});

export default connect(mapStateToProps, actions)(Home);
